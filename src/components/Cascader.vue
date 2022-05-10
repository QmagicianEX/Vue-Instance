<template>
  <div>
    <div>级联选择</div>
    <div class="select-out-div" style="margin: 0 auto; width: 700px; height: 460px; border: 1px solid #d9d9d9; overflow: scroll; position: relative">
      <!-- <el-scrollbar style="height:100%" class="scrollbar"> -->
        <!-- <img src="../assets/images/img3.jpeg"> -->
        <div style="display: flex">
          <div class="select-list" v-for="(selectList, listIndex) in selectData" :key="listIndex">
            <el-col style="width: 180px; padding: 8px 0">
              <el-col v-for="(item, index) in selectList" :key="index" class="select-item" :class="{'item-selected': currentItem.length > listIndex && currentItem[listIndex].value==item.value}" @click.native="selectItem(item, listIndex)">
                <div :title="item.label" class="item-label">{{ item.label }}</div>
                <i class="el-icon-arrow-right" />
              </el-col>
            </el-col>
            <div class="selected-label" :title="currentItem.length > listIndex ? currentItem[listIndex]['label'] || '' : ''">
                <span style="color: #909399; padding: 0 5px">{{ listIndex + 1 }}级</span>
                <span style="padding: 0 5px">{{ currentItem.length > listIndex ? currentItem[listIndex]['label'] || '' : '' }}</span>
            </div>
          </div>
        </div>
      <!-- </el-scrollbar> -->
    </div>
    <div style="position: fixed; bottom:20px; left: 38%;">
      <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
      <el-button type="primary" @click="$router.push('/VueEsign')">next</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: [],
      selectData: []
    }
  },

  created() {
    this.selectData.push(
      [
        {
          label: '1级类目1',
          value: '1'
        },
        {
          label: '1级类目2',
          value: '2'
        },
        {
          label: '1级类目3',
          value: '3'
        },
        {
          label: '1级类目4',
          value: '4'
        },
        {
          label: '1级类目5',
          value: '5'
        },
        {
          label: '1级类目6',
          value: '6'
        },
        {
          label: '1级类目7',
          value: '8'
        },
        {
          label: '1级类目9',
          value: '9'
        },
        {
          label: '1级类目10',
          value: '11'
        },
        {
          label: '1级类目12',
          value: '13'
        },
        {
          label: '1级类目14',
          value: '15'
        },
        {
          label: '1级类目16',
          value: '16'
        },
        {
          label: '1级类目17',
          value: '17'
        },
        {
          label: '1级类目18',
          value: '18'
        },
        {
          label: '1级类目19',
          value: '19'
        },
        {
          label: '1级类目20',
          value: '20'
        },
        {
          label: '1级类目21',
          value: '21'
        },
        {
          label: '1级类目22',
          value: '22'
        }
      ]
    )
    // this.selectItem(this.selectData[0][0], 0)
    // this.selectItem(this.selectData[1][0], 1)
    // this.selectItem(this.selectData[2][0], 2)
  },

  methods: {
    selectItem(item, index) {
      index === this.currentItem.length ? this.currentItem.push(item) : ''
      this.currentItem[index].value === item.value ? '' : this.$set(this.currentItem, index, item)
      if (index < this.selectData.length - 2) {
        this.selectData.splice(index + 1, this.selectData.length - (index + 1))
      }
      if (index === this.selectData.length-1) {
        this.selectData.push(
          [
            {
              label: item.label + '-' + (index + 2) + '级类目1',
              value: (index + 2) + '-1'
            },
            {
              label: item.label + '-' + (index + 2) + '级类目2',
              value: (index + 2) + '-2'
            },
            {
              label: item.label + '-' + (index + 2) + '级类目3',
              value: (index + 2) + '-3'
            }
          ]
        )
      } else if (index === this.selectData.length-2){
        this.$set(
          this.selectData, 
          index + 1, 
          [
            {
              label: item.label + '-' + (index + 2) + '级类目1',
              value: (index + 2) + '-1'
            },
            {
              label: item.label + '-' + (index + 2) + '级类目2',
              value: (index + 2) + '-2'
            },
            {
              label: item.label + '-' + (index + 2) + '级类目3',
              value: (index + 2) + '-3'
            }
          ]
        )
      }
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="stylus" scoped>
  // .scrollbar {
  //   >>>.el-scrollbar__wrap{
  //     overflow-x: auto;
  //     height: calc(100% + 20px); //多出来的20px是横向滚动条默认的样式
  //   }
  // }

  .select-list {
    width: 180px;
    border-right: 1px solid #d9d9d9;

    .select-item {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        cursor: pointer;
        color: #409eff
      }

      .item-label {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }

    .item-selected {
      color: #409eff
    }

    .selected-label {
      width: 180px;
      height: 40px;
      line-height: 40px;
      background-color: #fff;
      position: absolute;
      bottom: 10px;
      border-top: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }

  .select-out-div::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     
    height: 6px;
  }
  .select-out-div::-webkit-scrollbar-thumb {/*滚动条里面的滑块*/
    border-radius: 10px;
    background: #409eff;
  }
  .select-out-div::-webkit-scrollbar-track {/*滚动条里面轨道背景*/
    //border-radius: 10px;
    background: rgba(0,0,0,.1);
  }
</style>