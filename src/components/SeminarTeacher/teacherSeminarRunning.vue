<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main style="background-color: #ffffff;border-bottom:1px solid #000">
      <el-row>
        <el-col :span="18" style="float:right;font-size:100%;"><div >{{ban_num}}</div></el-col>
        <hr>
      </el-row>
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="12"><div>轮次：</div></el-col>
        <el-col :span="12"><div >{{round}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col :span="12"><div >主题：</div></el-col>
        <el-col :span="12"><div>{{topic}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col> <div>要求：</div></el-col>
        <el-col :span="20"><div>{{item}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col style="float:left"><div>课次序号：</div></el-col>
        <el-col :span="18"><div>{{order}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col :span="12"><div>课程情况：</div></el-col>
        <el-col :span="12"><div >正在进行</div></el-col>
        <router-link to="check_ppt">
          <el-col :span="12"><div><u>查看信息</u></div></el-col>
        </router-link>
      </el-row>
    </el-main>
    <br>
    <br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="Seminar_ing">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')">进入讨论课</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation: "OOAD-讨论课",
        round: "第一轮",
        order:"1",
        item:"完成界面原型设计，每个组15分钟展示时间",
        topic:"界面原型设计",
        ban_num:"2016-(1)"
      }
    }
  }
</script>
<style>
  .el-container {
    margin-bottom: 40px;
    color: #333;
    background-color:white;
  }
  .el-col{
    font-size:100%;
    width:30%;
    height: 400%;
    line-height: 200%;
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
