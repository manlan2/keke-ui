<template>
  <div class="index">

    <div class="section">
      <div class="section1">
        <div class="content">
          <p>A Background Management System Template</p>
          <p>Based on ElementUI</p>
          <a class="toLink">GETING START</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div style="width: 70%;height: 100%;margin:0 auto;">
        <el-row style="padding-top:100px;">
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Concise and simple</h2>
                <img class="temp-img" src="../../assets/1.jpg"/>

                <p class="temp-word">
                  Chinese rhetorical style is mainly reflected in the following ways: robust and tender,
                  concise and detailed, complicated and charming and plain, lucid and lively and reserved
                </p>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Beautiful and generous</h2>
                <img class="temp-img" src="../../assets/2.jpg"/>
                <p class="temp-word">
                  Its modern, fashion, artistic, natural and practical design ingeniously embellishes and grows artistic life taste,
                  designed is beautiful and generous on appearance.
                </p>
              </el-card>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Open source free</h2>
                <img class="temp-img" src="../../assets/3.jpg"/>
                <p class="temp-word">
                  Bottom line, the Extension Manager and the Visual Studio Gallery offer excellent support for
                  open source and free extension projects
                </p>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="temp">
              <el-card :body-style="{padding:'0 20px'}">
                <h2>Popular and hot</h2>
                <img class="temp-img" src="../../assets/4.jpg"/>
                <p class="temp-word">
                  For the past few months, Vue.js has been a much talked about topic in the worlds of both pop culture and science.
                </p>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="section">
      <el-row style="padding-top: 150px;">
        <el-col :span="12">
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </el-col>
        <el-col :span="12">
          <ve-histogram :data="chartData2" :settings="chartSettings2"></ve-histogram>

        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <ve-pie :data="chartData3" :settings="chartSettings3"></ve-pie>
        </el-col>
        <el-col :span="12">
          <ve-radar :data="chartData4" :settings="chartSettings4"></ve-radar>
        </el-col>
      </el-row>
    </div>


  </div>
</template>
<script>
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";
  export default{
    components: {
      ElRow,
      ElCol
    },
    name: '',
    data(){
      return {
        height: '600px',
        chartData: {
          columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
          rows: [
            {'日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100},
            {'日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100},
            {'日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100},
            {'日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100},
            {'日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100},
            {'日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100}
          ]
        },
        chartSettings: {},
        chartData2: {
          columns: ['日期', '成本', '利润', '占比', '其他'],
          rows: [
            {'日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100},
            {'日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100},
            {'日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100},
            {'日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100}
          ]
        },
        chartSettings2: {},

        chartData3: {
          columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
          rows: [
            { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
            { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
            { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
            { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
            { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
            { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
          ]
        },
        chartSettings3: {
          dimension: '日期',
          metrics: '销售额-1季度',
          dataType: 'KMB',
          selectedMode: 'single',
          hoverAnimation: false,
          radius: 100,
          offsetY: 200
        },
        chartData4: {
          columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
          rows: [
            {'日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100},
            {'日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100},
            {'日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100},
            {'日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100},
            {'日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100},
            {'日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100}
          ]
        },
        chartSettings4: {
          dimension: ['日期'],
          metrics: ['销售额-1季度', '销售额-2季度', '占比'],
          dataType: {'占比': 'percent'}
        }

      }
    },
    methods: {},
    created(){
      this.height = $(window).height() + 'px';

    }
  }
</script>
<style scoped>
  .index {
    padding: 0px;
    height: 100%;
    width: 100%;
    margin: 0px;
    background: #ffffff;

  }

  .section {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    position: relative;

  }

  .temp {
    height: 100%;
    margin: 10px;
    padding: 0px;
  }

  .section1 {
    background-image: url(../../assets/homebg.png);
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center; /*指定垂直居中*/
  }

  .content {
    color: #eeeeee;
    width: 100%;
    height: 300px;
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    /*font-family:Lato, sans-serif;*/
  }

  /*  .body-style="{ padding: '0px' }"*/

  .toLink {

    font-size: 20px;
    border: 1px solid;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  .toLink:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .temp-img {
    width: 94%;
    height: 235px;
    margin-left: 3%;
  }

  .temp-word {
    height: 70px;
  }

  h2 {
    text-align: center;
  }

  .end {
    background: #303133;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #ccc;
    font-size: 28px;

  }
</style>
