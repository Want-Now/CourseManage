<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-form :model="activeForm" :rules="activeRule" ref="activeForm">
        <el-form-item prop="password">
          <el-input class="activeInput" type="password" v-model="activeForm.password" placeholder="请输入密码" clearable></el-input>
        </el-form-item>
        <el-form-item prop="passwordCheck">
          <el-input class="activeInput" type="password" v-model="activeForm.passwordCheck" placeholder="确认密码" clearable></el-input>
        </el-form-item>
        <el-form-item prop="mail">
          <el-input class="activeInput" v-model="activeForm.mail" placeholder="填写邮箱" clearable></el-input>
        </el-form-item>
      </el-form>
      <p style="font-size: 13px;color: #ccadad;margin: 0px">可包含数字、字母、下划线、长度不少于六位</p>
    </el-main>
    <el-footer>
        <el-button class="up-button" @click="submitForm('activeForm')">确认提交</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "activeStudent",
        data(){
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else if(value.length<6) {
              callback(new Error('密码长度不少于六位'));
            } else{
              if (this.activeForm.passwordCheck!== '') {
                this.$refs.activeForm.validateField('passwordCheck');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.activeForm.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
          var validateEmail=(rule,value,callback)=>{
            if (value === '') {
              callback(new Error('请正确填写邮箱'));
            } else {
              if (value !== '') {
                var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(!reg.test(value)){
                  callback(new Error('请输入有效的邮箱'));
                }
              }
              callback();
            }
          };
          return{
            headerLocation:"激活账号",
            activeForm:{
              password:'',
              passwordCheck:'',
              mail:'',
            },
            activeRule:{
              password: [
                { validator: validatePass, trigger: 'blur' }
              ],
              passwordCheck: [
                { validator: validatePass2, trigger: 'blur' }
              ],
              mail:[
                { validator: validateEmail, trigger:'blur' }
              ]
            },
          }
        },
      methods:{
        back(){
          this.$router.go(-1);
        },
        submitForm(formName) {
          var that=this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios({
                method:'put',
                url:'http://3uc6ic.natappfree.cc/teacher/active',
                data:{
                  // account:'2700',
                  password:this.activeForm.password
                }
              }).then(function (response) {
                if(response.data.message===true){
                  that.$message({
                    message:'激活成功',
                    type:'success',
                    duration:800
                  });
                  that.$router.push('/StuPersonCenter');
                }
                else{
                  that.$message({
                    message:'激活失败',
                    type:'error',
                    duration:800
                  });
                }
              })
                .catch(function (error) {
                  console.log(error);
                })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },

      }
    }
</script>

<style scoped>
  .el-container{
    height: 90vh;
  }
  .ver-button{
    height: 50px;
    font-size: 15px;
  }


  .up-button{
    height: 50px;
    width: 85vw;
    font-size: 20px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
  }
  .up-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
    color: white;
  }
  .up-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
    color: white;
  }


  .el-input__inner{
    height: 50px;
    font-size: 15px;
  }

  .el-header{
    margin: 0px;
    padding: 0px;
    background-color: #494e8f;
    color:white;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }

  .el-header p{
    display: inline-block;
  }

  .el-header .el-icon-back{
    position: absolute;
    width: 60px;
    height: 55px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
    left: 10px;
    top: 10px;
  }

  .el-header .el-icon-back:hover{background-color: #494e8f;border-color: #494e8f;}
  .el-header .el-icon-back:focus{background-color: #494e8f;border-color: #494e8f;}

  .el-header .el-icon-menu{
    position: absolute;
    width: 60px;
    height: 55px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
    right: 10px;
    top: 10px;
  }
  .el-header .el-icon-menu:hover{background-color: #494e8f;border-color: #494e8f;}
  .el-header .el-icon-menu:focus{background-color: #494e8f;border-color: #494e8f;}

  .el-header .el-dropdown{
    position: absolute;
    margin: 0px;
    width: 60px;
    height: 55px;
    color: white;
    right: 0px;
    top: 0px;
    line-height: 55px;
    text-align: center;
  }

</style>
