<template>
  <el-container>
    <el-main>
      <p style="color: #494e8f;font-size: 1.6rem;">欢迎登录课程管理系统</p>
      <img src="../../assets/XMU.png" style="width: 8rem;margin: 20px">

      <el-form ref="form" :rules="rules" :model="form" method="post"><!---->
        <el-form-item prop="user">
          <el-input class="activeInput" placeholder="请输入账号" v-model="form.user" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="activeInput" type="password" placeholder="请输入密码" v-model="form.password" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="sendUserInfo('form')">登录</el-button>
        </el-form-item>
      </el-form>
      <span class="forgetPsw" @click="forgetPsw">忘记密码</span>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      name:"Login",
        data(){
        var validatePsw=(rule,value,callback)=>{
          if(value===''){
            callback(new Error('请输入密码'));
          }else if(value.length<6){
            callback(new Error('密码不得少于6位'));
          }else{
            callback();
          }
        };
        var validateUser=(rule,value,callback)=>{
          if(value===''){
            callback(new Error('账号不能为空'));
          }else{
            callback();
          }
        };
          return{
            account:'',
            password:'',
            form:{
              user:'',
              password:'',
              // identity:'1',
            },
            rules:{
              user:[
                {validator:validateUser,trigger:'blur'}
              ],
              password:[
                {validator:validatePsw,trigger:'blur'}
              ]
            },
          }
        },
      computed:{
        role (){
          return this.$store.state.role
        },
      },
      methods: {
        sendUserInfo(formName) {
          var _this = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios({
                method: 'post',      //传输方法
                url: "/user/login",   //路径
                data: {                                //传给后端的数据（后端数据名：……）
                  account: this.form.user,
                  password: this.form.password,
                  // type: parseInt(this.form.identity),
                }
              })
                .then(response=>{
                  _this.$store.commit("SET_AUTH",response);
                  if(_this.role==="teacher"){
                    if(response.active===0) _this.$router.push('/ActiveTeacher');
                    else if(response.active===1) _this.$router.push('/TeaPersonCenter');
                    else alert("Error!");
                  } else if(_this.role==="student"){
                      if(response.active===0) _this.$router.push('/ActiveStudent');
                      else if(response.active===1) _this.$router.push('/StuPersonCenter');
                      else alert("Error!");
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },

        // onLogin() {
        //   const { username, password } = this
        //   const data = {
        //     username,
        //     password
        //   }
        //
        //   this.$http.post('/user/login', data)
        //     .then(res => {
        //       // 登录成功
        //       if(res.token) {
        //         // 储存 token
        //         localStorage.token = res.token
        //       }
        //     })
        //     .catch(error => {
        //       // 登录失败
        //       // 验证后端返回的错误字段，如果匹配，提示用户
        //       // axios 配置里必须要 return Promise.reject(error.response.data) 才能拿到错误字段
        //
        //     })
        // },

        // sendUserInfo(formName){
        //   var that=this;
        //   this.$refs[formName].validate((valid)=>{
        //     if(valid){
        //       const data={
        //         user,
        //         password
        //       }

        // this.$axios({
        //   method:'post',      //传输方法
        //   url:"/login",   //路径
        //   data:{                                //传给后端的数据（后端数据名：……）
        //     account:this.form.user,
        //     password:this.form.password,
        //   }
        // })
        //   .then(                //成功后的操作
        //     function (response) {
        //       if(response.data.message===0)
        //       {
        //         if(that.form.identity==='1'){
        //           that.$router.push({path:"/ActiveTeacher",query:{account:that.form.user}});
        //         }
        //         else if(that.form.identity==='0'){
        //           that.$router.push("/ActiveStudent");
        //         }
        //         else{
        //           console.log('Error');
        //         }
        //       }
        //       else if(response.data.message===1)
        //       {
        //         that.$router.push("/");
        //         //跳转页面没写
        //       }
        //       else{
        //         alert("登录失败！");
        //       }
        //     })
        //   .catch(function(error){
        //     console.log(error);
        //   });
        //   }else{
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });

        forgetPsw() {
          this.$router.push('/ForgetPsw')
        }
        }
      }
</script>

<style scoped>
  #app-login img{
    margin: 1rem 0rem;
  }

  .login-button{
    width: 80vw;
    height: 50px;
    font-size: 20px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
    border-radius: 5px;
    margin: 20px 0px;
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
