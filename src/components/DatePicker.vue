<template>
  <div id="datePicker">
    <el-row>
      <el-col :span="1" class="describe">默认:</el-col>
      <el-col :span="6">
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
      <el-col :span="2" class="describe">带快捷选项:</el-col>
      <el-col :span="5">
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="left"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    name: 'DatePicker',
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      };
    }
  }
</script>
<style scoped>
  #datePicker {
    text-align: left;
  }

  .describe {
    height: 40px;
    line-height: 40px;
  }
</style>
