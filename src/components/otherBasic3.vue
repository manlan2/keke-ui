<template>
  <div>
    <h3>DatePicker</h3>
    <div>
      <DatePicker></DatePicker>
    </div>

    <h3>Button</h3>
    <div>
      <Button></Button>
    </div>

    <h3>Pagination</h3>
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>

    </div>

    <h3>Loading</h3>
    <div>
      <el-table
        v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>

    <h3>Steps</h3>
    <div>
      <el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
  import Button from './button.vue';
  import DatePicker from './DatePicker.vue'
  export default{
    name: '',
    data(){
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading2: true
      }
    },
    methods: {},
    components: {
      Button, DatePicker
    }
  }
</script>
<style scoped>
</style>
