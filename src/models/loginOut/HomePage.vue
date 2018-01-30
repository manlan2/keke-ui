<template>

<div style="height: 100%">
  <div class="head">
      <img src="../../assets/wifi.svg" class="head-logo"/>
      <h3>KEKE-UI</h3>
        <ul class="headnav">
          <router-link to="/index"  tag="li">HOME</router-link>
          <router-link to="/toLogin"   tag="li">LOGIN</router-link>
          <li> <a>ABORT</a></li>
        </ul>
  </div>
  <div style="height: 100%">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</div>

</template>
<script>
  export default{
    name: '',
    data(){
      return {

      }
    },
    methods: {


    },
    mounted(){
        $(".headnav>li").click(function () {
          //切换动画
          $(this).addClass("li-active").siblings("li").removeClass("li-active");
        });
    }

  }
</script>
<style scoped>
    li{
      display: inline;
      color: #f5f7fa;
      padding: 5px 12px;
      margin: 0px;
      font-size: 18px;
      cursor: pointer;
      font-family:Lato, sans-serif;
      font-weight: 500;
    }
    .li-active{
      color: #f5f7fa;
      border-bottom: 2px solid #f5f7fa;
    }
    li:hover{
      color: #f5f7fa;
      border-bottom: 2px solid #f5f7fa;
    }
  .head{
    position: fixed;
    width: 100%;
    height: 100px;
    z-index: 99;
    line-height: 100px;
    background-color:rgba(0,0,0,0.3); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
  }
.head:hover{
  background-color:rgba(58,142,230);
}

.headnav{

  display: inline;
  float: right;
  height: 60px;
  margin-top: 20px;
  margin-right: 80px;
  line-height: 60px;
}

  h2 {

    text-align: center;
    color: #409eff;
    letter-spacing: 2px;
    font-size: 40px;
    font-weight: 100;
  }
h3{

  display: inline;
  color: #f5f7fa;
  margin-left: 10px;
  cursor: pointer;
  letter-spacing: 1px;
  font-family:Lato, sans-serif;

}


.head-logo{
  height: 50px;
  width: 50px;
  margin-top: 25px;
  margin-left: 30px;
  cursor: pointer;
}


</style>
