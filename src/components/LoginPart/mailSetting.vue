<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-input v-model="newMail" autocomplete="off" class="pswInput" placeholder="填写新邮箱" clearable></el-input>
    </el-main>
    <el-footer>
      <p>邮箱格式如：user@host.domainnames</p>
      <el-button type="danger" class="buttomButton">
        确认提交
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "mailSetting",
      data(){
          return{
            headerLocation:'账户邮箱',
            newMail:'',

          }
      },
      methods:{
        back(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .el-container{
    height: 80vh;
  }
</style>
<style>
  .pswInput .el-input__inner{
    height: 45px;
    font-size: 16px;
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
