<template>
  <div id="app-login">
    <el-row type="flex">
      <el-col :span="24" Typography:微软雅黑 >
        <p style="color: #494e8f;font-size: 1.6rem;">欢迎登录课程管理系统</p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <img src="../../assets/XMU.png" style="width: 8rem">
      </el-col>
    </el-row>
    <el-form ref="form" ><!--rules="rule"-->
      <el-form-item prop="user">
        <el-row type="flex" justify="center" class="row-height">
          <el-col :span="20">
            <el-input class="activeInput" placeholder="请输入学号/教工号/管理员账号" v-model="form.user" size="large" clearable></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="password">
        <el-row type="flex" justify="center" class="row-height">
          <el-col :span="20">
            <el-input class="activeInput" type="password" placeholder="请输入密码" v-model="form.password" size="large" clearable></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row  type="flex" justify="center" style="margin-buttom: 5rem;">
          <el-col>
            <el-button type="primary" class="login-button" @click="sendUserInfo()">登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name:"Login",
        data(){
          return{
            form:{
              user:'',
              password:'',
            },
            // rule:{
            //   password:[
            //     {min: 8, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            //   ]
            // },
          }
        },
      methods: {
        open(){
          this.$router.push("/ActiveTeacher");
        },
        sendUserInfo(){
          axios({
            method:'post',
            url:"http://47.107.122.159:8080/user/login/",
            data:{
              account:this.form.user,
              password:this.form.password
            }
          })
            .then(
              function (response) {
                if(response.data.message=="1")
                {
                  alert("success");
                  this.$router.push("/ActiveTeacher");
                }
                else{
                  alert("fail");
                }
              }
            )

        }
      }
    }
</script>

<style scoped>
  #app-login{
    height: 100vh;
    width:100vw;
    margin: auto;
    text-align: center;
    display:table-cell;
    vertical-align: middle;
  }

  #app-login img{
    margin: 1rem 0rem;
  }

  .row-height{
    margin-bottom: 2vh;
  }

  .login-button{
    width: 80vw;
    height: 50px;
    font-size: 20px;
    background-color: #494e8f;
    border-color: #494e8f;
  }
  .login-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .login-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
  }

</style>
