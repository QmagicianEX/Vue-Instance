<template>
  <div>
    <el-table
      v-if="tableData.length"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column
          label="姓名">
          <template slot-scope="scope">
              {{ scope.row.name }}
            </template>
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            label="省份">
            <template slot-scope="scope">
              {{ scope.row.province }}
            </template>
          </el-table-column>
          <el-table-column
            label="市区">
            <template slot-scope="scope">
              {{ scope.row.city }}
            </template>
          </el-table-column>
          <el-table-column
            label="地址">
            <template slot-scope="scope">
              {{ scope.row.address }}
            </template>
          </el-table-column>
          <el-table-column
            label="邮编">
            <template slot-scope="scope">
              {{ scope.row.zip }}
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <div style="position: fixed; bottom:20px; left: 38%;">
      <el-button type="primary" style="margin-right:200px;" @click="clearData">clear</el-button>
      <el-button type="primary" style="margin-right:200px;" @click="addData">add</el-button>
      <el-button type="primary" style="margin-right:200px;" @click="$router.push('/')">home</el-button>
      <!-- <el-button type="primary" @click="$router.push('/UploadImgAndDragSort')">next</el-button> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    
    methods: {
      addData() {
        this.tableData = []
        for (let i = 0; i < 5; i++) {
          this.tableData.push({
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          })
        }
      },
      clearData() {
        this.tableData = []
      }
    }
  }
</script>
<style lang="stylus" scoped>
</style>