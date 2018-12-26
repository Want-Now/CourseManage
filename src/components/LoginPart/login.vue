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
    <el-form ref="form" :rules="rules"><!---->
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
        <el-radio v-model="form.identity" label="1">教师</el-radio>
        <el-radio v-model="form.identity" label="0">学生</el-radio>
      </el-form-item>
      <el-form-item>
        <el-row  type="flex" justify="center" style="margin-buttom: 5rem;">
          <el-col>
            <el-button type="primary" class="login-button" @click="sendUserInfo">登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <span class="forgetPsw" @click="forgetPsw">忘记密码</span>
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
              identity:'1',
            },
            rules:{
              user:[
                { required:true ,message:'用户名不能为空！',trigger: 'blur' }
              ],
              password:[
                { required:true ,message:'密码不能为空！',trigger: 'blur'},
                { min:6 ,message:'长度不少于六位',trigger: 'blur' }
              ]
            },
          }
        },
      methods: {
        sendUserInfo(){
          var that=this;
          this.$axios({
            method:'post',      //传输方法
            url:"http://kt35um.natappfree.cc/user/login",   //路径
            data:{                                //传给后端的数据（后端数据名：……）
              account:this.form.user,
              password:this.form.password,
              type:parseInt(this.form.identity),
            }
          })
            .then(                //成功后的操作
              function (response) {
                if(response.data.message===0)
                {
                  if(that.form.identity==='1'){
                    that.$router.push({path:"/ActiveTeacher",query:{account:this.form.user}});
                  }
                  else if(that.form.identity==='0'){
                    that.$router.push("/ActiveStudent");
                  }
                  else{
                    console.log('Error');
                  }
                }
                else if(response.data.message===1)
                {
                  that.$router.push("/");
                }
                else{
                  alert("登录失败！");
                }
              }
            )
        },
        forgetPsw(){
          this.$router.push('/ForgetPsw')
        }
      }
    }
</script>

<style scoped>
  #app-login{
    height: 90vh;
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

  .el-radio{
    font-size: 25px;
  }
</style>
