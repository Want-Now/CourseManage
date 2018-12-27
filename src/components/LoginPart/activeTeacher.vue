<template>
    <el-container>
      <el-header id="header">
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{headerLocation}}</p>
      </el-header>
      <el-main>
        <el-form :model="activeForm" :rules="activeRule" ref="activeForm">
          <el-form-item prop="password">
            <el-input class="activeInput" type="password" v-model="activeForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="passwordCheck">
            <el-input class="activeInput" type="password" v-model="activeForm.passwordCheck" placeholder="确认密码"></el-input>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <span style="font-size: 13px;color: #ccadad;">可包含数字、字母、下划线、长度不少于六位</span>
        <el-row type="flex" justify="center">
          <el-button class="up-button" @click="submitForm('activeForm')">确认提交</el-button>
        </el-row>
      </el-footer>
    </el-container>
</template>

<!--教师激活账户-->

<script>
    export default {
      name:"ActiveTeacher",
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
        return{
          headerLocation: "激活账号",
          teacherMail: '437842798@xmu.edu.cn',
          activeForm: {
            password: '',
            passwordCheck: '',
          },
          activeRule:{
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            passwordCheck: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }

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
                  password:this.activeForm.password,
                  email:this.activeForm.email
                }
              }).then(function (response) {
                if(response.data.message===true){
                  that.$message({
                    message:'激活成功',
                    type:'success',
                    duration:800
                  });
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
    height: 80vh;
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
