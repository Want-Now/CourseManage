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
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div>轮次：</div></el-col>
        <el-col :span="16"><div >{{round}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col :span="8"><div >主题：</div></el-col>
        <el-col :span="16"><div>{{topic}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col :span="8"> <div>要求：</div></el-col>
        <el-col :span="16" style:=" width:50%;"><div>{{item}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col :span="8" ><div>课次序号：</div></el-col>
        <el-col :span="16"><div>{{order}}</div></el-col>
      </el-row>
      <el-row  style="background-color:#f1f1f1">
        <el-col :span="8"><div>课程情况：</div></el-col>
        <el-col :span="16"><div >未开始</div></el-col>

      </el-row>
      <br>
      <br>
      <el-card class="box-card">
        <el-row class="text item">
          <el-col  :span="10">报名开始时间</el-col>
          <el-col  :span="14">{{data1}}</el-col>
        </el-row>
        <br><br>
        <el-row class="text item">
          <el-col  :span="10">报名截止时间</el-col>
          <el-col   :span="14">{{data2}}</el-col>
        </el-row>
        <br>
      </el-card>
    </el-main>
    <br>
    <br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')">查看详情</el-button>
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
        ban_num:"2016-(1)",
        data1:"2018/10/20 12:00",
        data2:"2018/10/25 12:00",
        visible2: false,
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
    height: 400%;
    line-height: 200%;
    margin-left: 0px;
  }
  .text {
    font-size: 14px;
  }

  .item {
  }

  .box-card {
    width:100%;
  }
</style>
