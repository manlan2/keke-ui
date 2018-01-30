<template>
  <div id="login">
    <el-card class="card">
      <el-form>
        <el-form-item>
          <h2>Login</h2>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="account" v-model="username">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-input placeholder="password" v-model="password">
            <template slot="append">forgot？</template>
          </el-input>
        </el-form-item>

        <el-form-item style="text-align: right;">
          <el-checkbox v-model="savePassword">save</el-checkbox>
        </el-form-item>

        <el-form-item style="text-align: center;">
          <el-button type="primary" @click="onSubmit" style="width: 100%">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
    export default{
        name: '',
      data(){
        return {
          username: '',
          password: '',
          savePassword: true,
          form: true,

        }
      },
        methods: {
          onSubmit(){
              this.$router.push('/home');
          },

        }
    }
</script>
<style scoped>
  #login {
    height: 100%;
    width: 100%;
    /*background: #ecf5ff;*/
    /*position: relative;*/
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center; /*指定垂直居中*/
    background-image: url(../../assets/login.png);

    background-repeat: no-repeat;
    background-color: #f4f4f5;
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
  .card {
    width: 400px;
    margin: 0 auto;
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

  }



</style>
