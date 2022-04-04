<template>
  <div style="text-align: center">
    <div>
      <div>
        <el-popover
          placement="bottom-start"
          width="600"
          trigger="click"
          :visible-arrow="false"
          popper-class="custom-select-popper"
          @show="show"
          @hide="hide">
          <div class="selected-items" slot="reference">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="item" v-if="selectedItems.length">{{ selectedItems[0].group_name }}</span>
              <span v-else>{{ noSelectText }}</span>
              <span class="extral-items" v-if="selectedItems.length > 1">{{ '+' + (selectedItems.length - 1) }}</span>
            </div>
            <i class="el-icon-arrow-down custom-arrow-down-icon" :class="isShow?'is-show':'is-hide'"></i>
          </div>
          <div class="content">
            <div class="left-content">
              <p>待选项</p>
              <div class="top-content">
                <el-input
                  placeholder="请输入内容"
                  class="search-input"
                  v-model="searchText">
                  <i slot="suffix" class="el-input__icon el-icon-search" @click="searchItem"></i>
                </el-input>
                <div class="custom-pagination">
                  <span>{{ (currentPage-1) * pageSize + 1 }},{{ currentPage * pageSize > total ? total : currentPage * pageSize }}</span>
                  <span class="total">{{ '共' + total + '条' }}</span>
                  <div class="page-icon pre" @click="prePage">
                    <i class="el-icon-arrow-left"></i>
                  </div>
                  <div class="current-total">
                    <span>{{ currentPage }}</span>/
                    <span>{{ totalPage }}</span>
                  </div>
                  <div class="page-icon next" @click="nextPage">
                    <i class="el-icon-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div>
                <el-table
                  :data="tableData"
                  cell-class-name="custom-cell-style"
                  :max-height="dynamicHeight"
                  style="width: 100%">
                  <el-table-column
                    prop="group_name"
                    label="分组名称">
                  </el-table-column>
                  <el-table-column
                    width="100">
                    <div slot="header">
                      <div style="color: #27b8d0; font-size: 12px; cursor: pointer" @click="addPage">添加此页</div>
                    </div>
                    <template slot-scope="scope">
                      <div v-if="selectedItems.findIndex(item => item.group_name == scope.row.group_name) < 0" style="color: #27b8d0; font-size: 12px; cursor: pointer" @click="addItem(scope.row)">添加</div>
                      <div v-else style="color: #666; font-size: 12px; cursor: pointer" @click="cancelAdd(scope.row)">取消</div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <div style="width: 1px; border-left: 1px solid #e9e9e9"></div>
            <div class="right-content">
              <p class="top-operation">
                <span>已选项</span>
                <span class="clear-all" @click="clearAll">清空</span>
              </p>
              <div :style="{'max-height': (dynamicHeight + 30) + 'px'}" style="overflow: auto">
                <div class="selected-item" v-for="(item, index) in selectedItems" :key="index">
                  <span class="name-text">{{ item.group_name }}</span>
                  <i class="el-icon-close" @click="cancelAdd(item)"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-btn">
            <el-button>取消</el-button>
            <el-button type="primary">确定</el-button>
          </div>
        </el-popover>
      </div>
    </div>
    <div style="position: fixed; bottom:20px; left: 38%;">
        <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      searchText: '',
      currentPage: 1,
      pageSize: 20,
      totalPage: 0,
      total: 0,
      tableData: [],
      bakTableData: [],
      searchTableData: [],
      selectedItems: [],
      dynamicHeight: 728,
      noSelectText: '请选择'
    }
  },
  created() {

  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.setTableHeight)
    this.$nextTick(() => {
      this.setTableHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setTableHeight)
  },
  methods: {
    init() {
      this.tableData = [{
        group_name: '2016-05-02分组1'
      }, {
        group_name: '2016-05-04分组2'
      }, {
        group_name: '2016-05-01分组3'
      }, {
        group_name: '2016-05-03分组4'
      }, {
        group_name: '2016-05-02分组5'
      }, {
        group_name: '2016-05-04分组6'
      }, {
        group_name: '2016-05-01分组7'
      }, {
        group_name: '2016-05-03分组8'
      }, {
        group_name: '2016-05-02分组9'
      }, {
        group_name: '2016-05-04分组10'
      }, {
        group_name: '2016-05-01分组11'
      }, {
        group_name: '2016-05-03分组12'
      }, {
        group_name: '2016-05-02分组13'
      }, {
        group_name: '2016-05-04分组14'
      }, {
        group_name: '2016-05-01分组15'
      }, {
        group_name: '2016-05-03分组16'
      }, {
        group_name: '2016-05-02分组17'
      }, {
        group_name: '2016-05-04分组18'
      }, {
        group_name: '2016-05-01分组19'
      }, {
        group_name: '2016-05-03分组20'
      }]
      this.bakTableData = JSON.parse(JSON.stringify(this.tableData))
      this.total = this.bakTableData.length
      this.totalPage = Math.ceil(this.total / this.pageSize)
    },
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
    setTableHeight() {
      const selectHeight =  document.querySelector('.selected-items').offsetTop + 30
      const contentHeight = window.innerHeight - selectHeight
      this.dynamicHeight = contentHeight - 120 - 40
    },
    searchItem() {
      // console.log('searchText', this.searchText)
      this.searchTableData = this.bakTableData.filter(item => item.group_name.indexOf(this.searchText) > -1)
      this.total = this.searchTableData.length
      this.totalPage = Math.ceil(this.total / this.pageSize)
      this.currentPage = 1
      this.tableData = this.searchTableData.slice(0, this.pageSize)
    },
    prePage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
        if (this.searchText != '') {
          this.tableData = this.searchTableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        } else {
          this.tableData = this.bakTableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage += 1
        if (this.searchText != '') {
          this.tableData = this.searchTableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        } else {
          this.tableData = this.bakTableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
      }
    },
    addPage() {
      this.tableData.forEach(item => {
        if (this.selectedItems.findIndex(s => s.group_name == item.group_name) < 0) {
          this.selectedItems.push(item)
        }
      })
    },
    addItem(row) {
      this.selectedItems.push(row)
    },
    cancelAdd(row) {
      this.selectedItems = this.selectedItems.filter(e => e.group_name != row.group_name)
    },
    clearAll() {
      this.selectedItems = []
    }
  }
}
</script>
<style>
  .custom-select-popper {
    top: 78px !important;
    border-radius: 2px !important;
  }
</style>
<style lang="stylus" scoped>
  .selected-items {
    margin: 0 auto;
    width: 160px;
    height: 28px;
    border-radius: 2px;
    border: 1px solid #e9e9e9;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px;
    font-size: 12px;
    color: #999;
    &:hover {
      border-color: #27b8d0
    }
    .custom-arrow-down-icon {
      color: #c0c4cc;
      font-size: 14px;
      transition: transform .3s;
    }
    .is-hide {
      transform: rotate(0deg);
    }
    .is-show {
      transform: rotate(180deg);
    }
    .item {
      width: 90px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      color: #666;
    }
    .extral-items {
      background-color: #f0f0f0;
      padding: 3px;
      min-width: 28px;
      display: inline-block;
      color: #666;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    .left-content {
      width: 70%;
      padding-right: 10px;
      .top-content {
        display: flex;
        .search-input {
          width: 180px;
          >>>.el-input__inner {
            height: 30px;
            line-height: 30px;
            font-size: 12px;
          }
          >>>.el-input__suffix {
            display: flex;
            align-items: center;
            &:hover {
              cursor: pointer
            }
          }
        }
        .custom-pagination {
          display: flex;
          font-size: 12px;
          line-height: 30px;
          padding: 0 6px;
          .total {
            margin: 0 6px;
          }
          .page-icon {
            width: 28px;
            height: 28px;
            border: 1px solid #e9e9e9;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .pre {
            &:hover {
              border-color: #27b8d0;
              i {
                color: #27b8d0;
              }
            }
          }
          .next {
            &:hover {
              border-color: #27b8d0;
              i {
                color: #27b8d0;
              }
            }
          }
          .current-total {
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            height: 28px;
            line-height: 28px;
            padding: 0 6px;
          }
        }
      }
      >>>.custom-cell-style {
        height: 34px !important;
        font-size: 12px !important;
        padding: 0 !important;
      }
    }
    .right-content {
      width: 30%;
      padding-left: 10px;
      .top-operation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .clear-all {
          color: #27b8d0;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .selected-item {
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
          background-color: #f5f7fa;
        }
        .name-text {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 90%;
          display: inline-block;
        }
        i {
          cursor: pointer;
        }
      }
    }
  }
  .bottom-btn {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: end;
    .el-button {
      height: 30px;
      display: flex;
      align-items: center;
      border-radius: 2px;
      font-size: 12px;
    }
  }
</style>