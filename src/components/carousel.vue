<template>
  <div>
    <h3>card1</h3>
    <div style="width: 70%;text-align: center">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item>
          <img src="../assets/1.jpg" width="100%"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/2.jpg" width="100%"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/3.jpg" width="100%"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/4.jpg" width="100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <h3>card2</h3>
    <div style="width: 70%;text-align: center">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item>
          <img src="../assets/1.jpg" width="100%"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/2.jpg" width="100%"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/3.jpg" width="100%"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/4.jpg" width="100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>
<script>
  export default{
    name: '',
    data(){
      return {
        img: [
/*          "../assets/1.jpg",
          "../assets/2.jpg",
          "../assets/3.jpg",
          "../assets/4.jpg",*/

          "/static/img/1.jpg",
          "/static/img/2.jpg",
          "/static/img/3.jpg",
          "/static/img/4.jpg",
        ]

      }
    },
    methods: {}
  }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


</style>
