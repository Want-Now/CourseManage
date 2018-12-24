<template>
    <el-container>
      <el-header>
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{headerLocation}}</p>
      </el-header>
      <el-main>
        <el-steps :active="retrieveStep" finish-status="success" simple>
          <el-step title="邮箱验证"></el-step>
          <el-step title="重设密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <el-form :model="retrievePswForm">
          <el-form-item>
            <el-input class="activeInput" v-model="retrievePswForm.userId" placeholder="学号/教工号">
            </el-input>
          </el-form-item>
          <el-col :span="14">
            <el-input class="activeInput" v-model="retrievePswForm.verification" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="1" :push="1">
            <el-button class="ver-button">发送验证码</el-button>
          </el-col>
        </el-form>

      </el-main>
      <el-footer>
        <el-row type="flex" justify="center">
          <el-button class="up-button">下一步</el-button>
        </el-row>
      </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "retrievePassword",
      data(){
          return{
            headerLocation:"找回密码",
            retrieveStep:0,
            retrievePswForm:{
              userId:'',
              verification:''

            }
          }
      }
    }
</script>

<style scoped>
  .el-form{
    margin: 3vh 0vh;
  }
  .ver-button{
    height: 50px;
    font-size: 15px;
  }


  .up-button{
    height: 50px;
    width: 90vw;
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
</style>
<style>
  .activeInput .el-input__inner{
    height: 50px;
    font-size: 20px;
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
