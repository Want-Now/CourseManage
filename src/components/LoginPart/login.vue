<template>
  <div id="app-login">
    <el-row type="flex">
      <el-col :span="24" Typography:微软雅黑 >
        <p style="color: #494e8f;font-size: 1.5rem;">欢迎登录课程管理系统</p>
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
          <el-col :span="18">
            <el-input placeholder="请输入学号/教工号/管理员账号" v-model="form.user" size="large" clearable></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="password">
        <el-row  type="flex" justify="center" class="row-height">
          <el-col :span="18">
            <el-input type="password" placeholder="请输入密码" v-model="form.password" size="large" clearable></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row  type="flex" justify="center" style="margin-buttom: 5rem;">
          <el-col>
            <el-button type="primary" class="login-button" @click="open()">登录</el-button>
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
          this.$axios
            .post('/login',{
              params:{
                "id":this.form.user,
                "password":this.form.password
              }
            })
            .then(
              function (data) {
                if(data==1) alert("success");
                else if(data==0)  this.$router.push({name: '/activeStudent.html',params:{ id:'1'}});
                else if(data==-1) alert("error");
              }
            )
            .catch(alert("error"))

        }
      }
    }
</script>

<style scoped>
  #app-login{
    height: 100vh;
    width:100vh;
    margin: auto;
    text-align: center;
    display:table-cell;
    vertical-align: middle;
  }

  #app-login img{
    margin: 1rem 0rem;
  }

  .row-height{
    height: 4rem;
  }

  .login-button{
    width: 14rem;
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
