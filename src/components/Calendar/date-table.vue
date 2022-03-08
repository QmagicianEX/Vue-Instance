<script>
import fecha from 'element-ui/lib/utils/date';
import { range as rangeArr, getFirstDayOfMonth, getPrevMonthLastDays, getMonthDays, getI18nSettings, validateRangeInOneMonth } from 'element-ui/lib/utils/date-util';

export default {
  props: {
    selectedDay: String, // formated date yyyy-MM-dd
    range: {
      type: Array,
      validator(val) {
        if (!(val && val.length)) return true;
        const [start, end] = val;
        return validateRangeInOneMonth(start, end);
      }
    },
    date: Date,
    hideHeader: Boolean,
    firstDayOfWeek: Number,
    logData: {
      type: Array,
      default: () => []
    }
  },

  inject: ['elCalendar'],

  methods: {
    toNestedArr(days) {
      return rangeArr(days.length / 7).map((_, index) => {
        const start = index * 7;
        return days.slice(start, start + 7);
      });
    },

    getFormateDate(day, type) {
      if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
        throw new Error('invalid day or type');
      }
      let prefix = this.curMonthDatePrefix;
      if (type === 'prev') {
        prefix = this.prevMonthDatePrefix;
      } else if (type === 'next') {
        prefix = this.nextMonthDatePrefix;
      }
      day = `00${day}`.slice(-2);
      return `${prefix}-${day}`;
    },

    getCellClass({ text, type}) {
      const classes = [type];
      if (type === 'current') {
        const date = this.getFormateDate(text, type);
        if (date === this.selectedDay) {
          classes.push('is-selected');
        }
        if (date === this.formatedToday) {
          classes.push('is-today');
        }
      }
      return classes;
    },

    pickDay({ text, type }) {
      const date = this.getFormateDate(text, type);
      this.$emit('pick', date);
    },
    // 天数
    cellRenderProxy({ text, type }) {
      // let render = this.elCalendar.$scopedSlots.dateCell;
      // if (!render) return <div class="day-text"><span>{ text }</span></div>;

      // const day = this.getFormateDate(text, type);
      // const date = new Date(day);
      // const data = {
      //   isSelected: this.selectedDay === day,
      //   type: `${type}-month`,
      //   day
      // };
      // return render({ date, data });
      const monthMap = {
        prev: 0,
        current: 1,
        next: 2
      }
      return <div class="day-text">
        <span>{
          text == 1 ? ((this.date.getMonth() + monthMap[type]) + '月') : text
        }</span>
      </div>;
    },
    // 日志详细条目
    logRenderProxy({ logContent }) {
      if (logContent) {
        const listItems = logContent.logs.map((item, index) => 
          <div class="log-item" key={index}>
            <div class="log-item-text">{ item['content'] }</div>
            <span class="log-item-user">{ item['user'] }</span>
          </div>
        )
        return <div class="log-content">
            {listItems}
            <div class="log-content-bottom">
              <span class="other-log-num">还有其他 <span>{logContent['logTotal']}</span> 项</span>
              <div class="operation-icon">
                <div class="log-add" style="margin-right: 6px">
                  <i class="el-icon-document"></i>
                </div>
                <div class="log-add">
                  <i class="el-icon-plus"></i>
                </div>
              </div>
            </div>
          </div>
      } else {
        return ''
      }
    },

    // 总销售额和环比
    totalCellRenderProxy({ logContent }) {
      if (logContent) {
        const increase = logContent['increase'] && logContent['increase'][0] == '+'
        return <div class={{
            'content-total': true,
            'total-increase': increase,
            'total-decline': !increase && logContent['increase']
          }}>
            <span class="total">{logContent['total']}</span>
            <span class={{'increase': increase, 'decline': !increase}}>{logContent['increase']}</span>
          </div>
      } else {
        return ''
      }
    }
  },

  computed: {
    WEEK_DAYS() {
      return getI18nSettings().dayNames;
    },
    prevMonthDatePrefix() {
      const temp = new Date(this.date.getTime());
      temp.setDate(0);
      return fecha.format(temp, 'yyyy-MM');
    },

    curMonthDatePrefix() {
      return fecha.format(this.date, 'yyyy-MM');
    },

    nextMonthDatePrefix() {
      const temp = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
      return fecha.format(temp, 'yyyy-MM');
    },

    formatedToday() {
      return this.elCalendar.formatedToday;
    },

    isInRange() {
      return this.range && this.range.length;
    },

    rows() {
      let days = [];
      // if range exists, should render days in range.
      if (this.isInRange) {
        const [start, end] = this.range;
        const currentMonthRange = rangeArr(end.getDate() - start.getDate() + 1).map((_, index) => ({
          text: start.getDate() + index,
          type: 'current'
        }));
        let remaining = currentMonthRange.length % 7;
        remaining = remaining === 0 ? 0 : 7 - remaining;
        const nextMonthRange = rangeArr(remaining).map((_, index) => ({
          text: index + 1,
          type: 'next'
        }));
        days = currentMonthRange.concat(nextMonthRange);
      } else {
        const date = this.date;
        let firstDay = getFirstDayOfMonth(date);
        firstDay = firstDay === 0 ? 7 : firstDay;
        const firstDayOfWeek = typeof this.firstDayOfWeek === 'number' ? this.firstDayOfWeek : 1;
        const offset = (7 + firstDay - firstDayOfWeek) % 7;
        const prevMonthDays = getPrevMonthLastDays(date, offset).map(day => ({
          text: day,
          type: 'prev'
        }));
        const currentMonthDays = getMonthDays(date).map(day => {
          let index = this.logData.findIndex(l => l.day == this.getFormateDate(day, 'current'))
          if (index > -1) {
            return {
              text: day,
              type: 'current',
              logContent: this.logData[index]
            }
          } else {
            return {
              text: day,
              type: 'current',
              logContent: ''
            }
          }
        });
        days = [...prevMonthDays, ...currentMonthDays];
        const nextMonthDays = rangeArr(42 - days.length).map((_, index) => ({
          text: index + 1,
          type: 'next'
        }));
        days = days.concat(nextMonthDays);
      }
      return this.toNestedArr(days);
    },

    weekDays() {
      const start = this.firstDayOfWeek;
      const { WEEK_DAYS } = this;

      if (typeof start !== 'number' || start === 0) {
        return WEEK_DAYS.slice();
      } else {
        return WEEK_DAYS.slice(start).concat(WEEK_DAYS.slice(0, start));
      }
    }
  },

  render() {
    const thead = this.hideHeader ? null : (<thead>
      {
        this.weekDays.map((day, index) => <th key={day} class={{ 'header-text': true, 'weekend': index == 0 || index == 6 }}>周{ day }</th>)
      }
    </thead>);
    return (
      <table
        class={{
          'el-calendar-table': true,
          'is-range': this.isInRange
        }}
        cellspacing="0"
        cellpadding="0">
        {
          thead
        }
        <tbody>
          {
            this.rows.map((row, index) => <tr
              class={{
                'el-calendar-table__row': true,
                'el-calendar-table__row--hide-border': index === 0 && this.hideHeader
              }}
              key={index}>
              {
                row.map((cell, key) => <td key={key}
                  class={ this.getCellClass(cell) }
                  onClick={this.pickDay.bind(this, cell)}>
                  <div class="el-calendar-day">
                    {
                      this.cellRenderProxy(cell)
                    }
                    {
                      this.logRenderProxy(cell)
                    }
                    {
                      this.totalCellRenderProxy(cell)
                    }
                  </div>
                </td>)
              }
            </tr>)
          }
        </tbody>
      </table>);
  }
};
</script>

<style lang="stylus" scoped>
.header-text {
  text-align: left;
  padding: 0 0 0 14px;
  height: 32px;
  line-height 32px;
  background-color: #f5f5f5;
  font-size: 12px;
  color: #666;
  border-right: 1px solid #e9e9e9;
}

.weekend {
  background-color: #e9e9e9;
}

.is-selected {
  background-color: #fff !important;
}

/** 一天 */
.el-calendar-day {
  padding: 0;
  height: 152px;
  // padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /** 日志内容 */
  .log-content {
    font-size: 12px;
    .log-item {
      line-height: 24px;
      color: #9b9b9b;
      display: flex;
      justify-content: space-between;
      padding: 0 12px;

      .log-item-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 70%;
      }
      .log-item-user {
        color: #d6d6d6
      }

      &:hover {
        background-color: #eff4ff;
      }
    }
    .other-log-num {
      font-size: 12px;
      color: #d6d6d6;
      margin-left: 30px;
      span {
        color: #27B8D0
      }
    }

    .log-content-bottom {
      display: flex;
      justify-content: space-between;
      line-height: 20px;

      .operation-icon {
        display: flex;
        justify-content: space-between;
        padding-right: 12px;
        display: none;

        .log-add {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          background: #f0f0f0; 
          color: #666; 
          font-size: 12px; 
          display: flex; 
          align-items: center; 
          justify-content: center
        }
      }
    }
  }
  &:hover {
    background-color: #fff;
    border: 1px solid #27b8d0;
    .log-content .log-content-bottom .operation-icon {
      display: flex;
    }
  }

  /** 总数环比 */
  .content-total {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 14px;

    .total {
      color: black;
    }
    .increase {
      color: #70b603
    }
    .decline {
      color: #f72e35
    }
  }
  .total-increase {
    background-color: #e9f0ea
  }
  .total-decline {
    background-color: #FFF2F0
  }
}
.day-text {
  margin-top: 6px;
  margin-left: 12px;
  font-size: 12px;
  color: #999;
}
.is-today {
  .day-text {
    background-color: #27B8D0;
    color: #fff;
    font-weight: bold;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.prev {
  .day-text {
    color: #d9d9d9;
  }
}
.next {
  .day-text {
    color: #d9d9d9;
  }
}
</style>
