<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-form :model="activeForm">
        <el-form-item>
          <el-input v-model="activeForm.password" placeholder="请输入密码"></el-input>
          <p style="font-size: 13px;color: #ccadad;margin: 0px">可包含数字、字母、下划线、长度不少于六位</p>
        </el-form-item>
        <el-form-item>
          <el-input v-model="activeForm.passwordCheck" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="activeForm.mail" placeholder="填写邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="14">
            <el-input v-model="activeForm.verification" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="1" :push="1">
            <el-button class="ver-button">发送验证码</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-button class="up-button">确认提交</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "activeStudent",
        data(){
          return{
            headerLocation:"激活账号",
            activeForm:{
              password:'',
              passwordCheck:'',
              mail:'',
              verification:''
            }
          }
        }
    }
</script>

<style scoped>
  .ver-button{
    height: 50px;
    font-size: 15px;
  }


  .up-button{
    height: 60px;
    width: 90%;
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


</style>
