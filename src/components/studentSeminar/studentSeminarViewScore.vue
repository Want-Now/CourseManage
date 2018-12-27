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
    <el-main style="background-color: #ffffff;">
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
        <el-col :span="16"><div>{{item}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col :span="8" ><div>课次序号：</div></el-col>
        <el-col :span="16"><div>{{order}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div >报名：</div></el-col>
        <el-col :span="16"><div>{{team}}</div></el-col>
      </el-row>
      <el-row >
        <el-col :span="8"><div>展示：</div></el-col>
        <el-col :span="16"><div >5.0</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col :span="8"> <div>ppt：</div></el-col>
        <el-col :span="16" style:=" width:50%;"><div>4.5</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8" ><div>书面报告：</div></el-col>
        <el-col :span="16"><div>5.0</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col :span="8"> <div>总成绩：</div></el-col>
        <el-col :span="16" style:=" width:50%;"><div>4.8</div></el-col>
      </el-row>
    </el-main>
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
        team:"1-3",
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
  .el-row{
  }
  .el-col{
    font-size:120%;
    height: 400%;
    line-height: 200%;
    margin-left: 0px;
  }
</style>
