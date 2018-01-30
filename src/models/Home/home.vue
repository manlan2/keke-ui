<template>
  <div id="home">
    <el-container class="my-container">

      <el-header class="my-header">
        <!--<transition enterActiveClass="animated fadeInLeft" leaveActiveClass="animated fadeOutLeft">-->
          <div class="head-left" v-show="headLeft">
            <img class="head-logo" src="./img/wifi.svg"/>
            <span class="head-name">KEKE-UI</span>
          </div>
       <!-- </transition>-->

        <!--添加收缩左侧菜单按钮-->
        <img src="./img/ss.svg" class="ss" @click="headLeft=!headLeft;leftAside=!leftAside"/>
            <!--<img src="./img/full.svg" class="ss"/>
            <img src="./img/quit.svg" class="ss"/>-->
        <div class="head-right">

          <img class="user-photo" src="./img/user-photo.jpg"/>
          <el-dropdown class="user-content">
            <span class="el-dropdown-link">keke<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>消息</el-dropdown-item>
              <el-dropdown-item>任务</el-dropdown-item>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>


      </el-header>

      <el-container class="my-main">
        <!--动画-->
        <!--<transition enterActiveClass="animated fadeInLeft" leaveActiveClass="animated fadeOutLeft">-->


          <!--左侧菜单-->
          <el-aside class="my-aside" v-show="leftAside">
            <!--头像-->
            <div class="online">
              <img class="online-user" src="./img/user-photo.jpg"/>
            </div>

            <!--左侧菜单-->
            <el-row class="tac">
              <el-col :span="24">

                <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen"
                         @close="handleClose"
                         background-color="#272930" text-color="#fff" active-text-color="#2494F2" :router="routeflag"
                         :unique-opened="true">

                  <el-submenu index="/home">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>basicForm</span>
                    </template>

                    <el-menu-item-group>
                      <el-menu-item index="/otherBasic">Basic-1</el-menu-item>
                      <el-menu-item index="/otherBasic2">Basic-2</el-menu-item>
                      <el-menu-item index="/otherBasic3">Basic-3</el-menu-item>

                    </el-menu-item-group>

                    <el-submenu index="/example">
                      <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>example</span>
                      </template>
                      <el-menu-item index="/example">example</el-menu-item>
                    </el-submenu>
                  </el-submenu>


                  <el-submenu index="/tableAndTree">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>tableAndTree</span>
                    </template>
                    <el-menu-item index="/tableAndTree">
                      <el-menu-item index="/tableAndTree">tableAndTree</el-menu-item>
                    </el-menu-item>
                  </el-submenu>
                  <el-submenu index="/dialog">
                    <template slot="title">
                      <i class="el-icon-setting"></i>
                      <span>others</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="/dialog">dialog</el-menu-item>
                      <el-menu-item index="/collapse">collapse</el-menu-item>
                      <el-menu-item index="/carousel">carousel</el-menu-item>
                      <el-menu-item index="/charts">charts</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
       <!-- </transition>-->
        <!--内容-->
        <el-container class="my-content">
          <!--导航栏-->
          <div class="tab">
            <el-tabs v-model="activeName" class="content-tabs" closable @tab-remove="removeTab"
                     v-show="tabList.length>0" @tab-click="handleClick">
              <el-tab-pane class="tab-pane"
                           v-for="(item, index) in tabList"
                           :key="item.name"
                           :label="item.title"
                           :name="item.name"
                           :path="item.path">
              </el-tab-pane>

            </el-tabs>
          </div>

          <!--显示内容-->
          <el-main class="content-main">
            <!--点击左侧菜单跳转页面展示在里面-->
            <router-view></router-view>

          </el-main>

          <el-footer class="my-foot"></el-footer>

        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Form from './Form';
  export default{
    name: 'home',
    data(){
      return {
        headLeft: true,
        leftAside: true,
        defaultActive: '/otherBasic',
        activeName: '',
        routeflag: true,
        tabList: [],
        tabIndex: 0,//tab个数
      }
    },
    methods: {
      // 左侧菜单打开
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      // 左侧菜单关闭
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },

      //点击tab标签切换路由
      handleClick(tab, event) {

        this.$router.push(tab.$attrs.path)
      },


      //删除tab标签
      removeTab(targetName) {
        let tabs = this.tabList;
        let activeName = this.activeName;//当前激活状态的tab标签
        let routerPath = this.defaultActive;//当前激活的路由
        //判断删除的标签是否当前激活的tab标签
        if (activeName === targetName) {
          //获取改标签的后一个或者前一个标签
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              routerPath = tabs[index].path;
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
                routerPath = nextTab.path;
              }
            }
          });
        }
        //过滤掉
        this.tabList = tabs.filter(tab => tab.name !== targetName);
        //激活tab标签
        this.activeName = activeName;
        //激活左侧菜单
        this.defaultActive = routerPath;
        this.$router.push(routerPath);

      }

    },
    components: {
      Form
    },
    created(){
    },

    watch: {
      //监听路由变化做出相应的改变
      $route(){
        console.log(this.$router.currentRoute)//当前router信息
        var name = this.$router.currentRoute.name;//名称 对应的标签名字
        var path = this.$router.currentRoute.path;//跳转的路由路径
        //判断该路由存在是否

        var flag = false;
        $.each(this.tabList, function (index, element) {
          if (element.path === path) {
            flag = true;
          }
        });

        if (!flag) {
          this.tabList.push({
            title: name,
            name: name,
            path: path,
          });
          this.editableTabsValue2 = this.tabIndex;
        }

        //激活tab标签
        this.activeName = name;
        this.defaultActive = path;
      },
      defaultActive: function () {

      }

    }
  }
</script>
<style scoped>
  #home {
    height: 100%;
    width: 100%;
  }

  .my-container {
    height: 100%;
    width: 100%;
  }

  .my-header {
    background-color: #2494F2;
    color: #fff;
    height: 5%;
    line-height: 5%;
    padding: 0px;

  }

  .my-header > button {
    padding: 0px;
    border: none;
  }

  .my-main {
    background-color: #fff;
    color: #333;
    height: 95%;
  }

  .my-content {
    height: 100%;
    /* margin-left: 300px*/
  }

  .my-aside {
    background-color: #272930;
    color: #c9d4f6;
    height: 100%;
    width: 280px;
    /*position: fixed;*/
    border-top: 1px solid #333;
    padding-bottom: 30px;
  }

  .content-main {
    background-color: #fff;
    color: #333;
    height: 95%;
    padding: 30px 50px;
  }

  .my-foot {
    background-color: #D3DCE6;
    color: #333;
    height: 5%;
  }

  .head-left {
    width: 300px;
    height: 100%;
    position: relative;
    display: inline;
    float: left;
    background: #272930;
  }

  .head-logo {
    height: 36px;
    width: 36px;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    left: 20px;
  }

  .head-name {
    position: absolute;
    right: 75px;
    top: 55%;
  }

  .head-right {
    float: right;
    height: 100%;
    width: 200px;
    position: relative;
  }

  .user-photo {
    height: 36px;
    width: 36px;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    border: 2px solid;
    border-radius: 5px;
  }

  .user-content {
    position: absolute;
    left: 50px;
    top: 50%;
    color: #fff;
  }

  .online {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  .online-user {
    width: 160px;
    height: 160px;
    border: 1px solid;
    border-radius: 100%;
  }

  .content-breadcrumb {
    margin-bottom: 40px;
    margin-top: 20px;
    margin-left: 10px;
  }

  ::-webkit-scrollbar {
    display: none;
  }


  .content-tabs {
    background: #fff;
    padding-top: 15px;
    width: 100%;
  }



  .tab {
    padding: 0 20px;
    background: #fff;
  }

  .ss {
    width: 30px;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
    margin-top: 10px;
  }


</style>
