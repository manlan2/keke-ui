<template>
  <div id="left-menu">

    <el-row class="tac">
      <el-col :span="24">

        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#272930" text-color="#fff" active-text-color="#2494F2" :router="true">

          <el-submenu index="/home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>basicForm</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="/button">button</el-menu-item>
              <el-menu-item index="/datePicker">datePicker</el-menu-item>
              <el-menu-item index="/otherBasic">Basic-1</el-menu-item>
              <el-menu-item index="/otherBasic2">Basic-2</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="/home">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>example</span>
              </template>
              <el-menu-item index="/home">example</el-menu-item>
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

  </div>
</template>
<script>
  export default{
    name: 'left-menu',
    data(){
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }

    },
  }
</script>
<style scoped>

</style>
