<template>
  <div id="page">
    <div class="header">
      <span>翻转课堂管理平台</span>
    </div>
    <div class="main">
      <el-card>
        <span class="loginSpan">翻转课堂系统登录</span>
        <el-form :model="pcLoginData" :rules="rules" >
          <el-form-item prop="username" label="用户名">
            <el-input class="loginInput" v-model="pcLoginData.username" placeholder="请输入用户名" clearable></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input class="loginInput" type="password" v-model="pcLoginData.password" placeholder="请输入密码" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-radio v-model="pcLoginData.identity" label="2">管理员</el-radio>
            <el-radio v-model="pcLoginData.identity" label="1">教师</el-radio>
            <el-radio v-model="pcLoginData.identity" label="0">学生</el-radio>
          </el-form-item>
          <el-button class="buttomButt" type="primary" @click="login()">登录</el-button>
        </el-form>
      </el-card>
    </div>
  </div>

</template>

<script>
    export default {
        name: "loginPC",
      data(){
          return{
            pcLoginData:{
              username:'',
              password:'',
              identity:'2',
            },
            rules:{
              username:[
                { required:true ,message:'用户名不能为空！',trigger: 'blur' }
              ],
              password:[
                { required:true ,message:'密码不能为空！',trigger: 'blur'},
                { min:5 ,max:30 ,message:'长度在5到30个字符',trigger: 'blur' }
              ]
            },
          }
      },
      computed:{
        role (){
          return this.$store.state.role
        },
      },
      methods:{
          login(){
            var _this=this;
            this.$axios({
              method:'post',
              url:'/user/login',
              data:{
                account:this.pcLoginData.username,
                password:this.pcLoginData.password,
              }
            }).then(function (response) {
              _this.$store.commit("SET_AUTH",response);
                  alert("登录成功！");
                  if(_this.role==="admin") _this.$router.push("/ManagerIndex");
                  else if(_this.role==="teacher"||_this.role==="student")  _this.$router.push("/CoursePagePC");
                  else console.log("error");
              })
              .catch(error=>{console.log(error);});
          }
      }
    }
</script>

<style scoped>
  .header{
    padding-left: 50px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #409EFF;
    text-align: left;
  }
  .el-card{
    margin: 100px auto;
    height: 500px;
    width: 650px;
    padding: 20px 20px;

  }
  .loginSpan{
    height: 60px;
    font-size: 25px;
    color: #606266;
  }
  .el-form{
    margin-top: 20px;
  }
  .el-form-item{
    magin:5px 0;
  }
  .buttomButt{
    height: 60px;
    width: 100%;
    font-size: 25px;
    margin-top: 30px;
  }
  .el-radio__label{
    font-size: 25px;
  }

</style>
<style>
  .loginInput .el-input__inner{
    height: 60px;
    font-size:20px;
    /*margin: 30px 0px 10px 0px;*/
  }
</style>
