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
        <el-col :span="12"><div >已完成</div></el-col>
        <router-link to="check_ppt">
          <el-col :span="12"><div><u>查看信息</u></div></el-col>
        </router-link>
      </el-row>
    </el-main>
    <br>
    <br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')">书面报告</el-button>
        </router-link>
        <el-button style="width:100%"@click="resetForm('ruleForm')">查看成绩</el-button>
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
</style>
