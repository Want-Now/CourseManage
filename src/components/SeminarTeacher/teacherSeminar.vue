<template>
  <el-container>
    <el-header id="header">
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
    <el-main>
      <div style="border:1px solid #f7f7f7;">
        <el-row >
          <el-button class="el-icon-tickets"></el-button>
          <p>{{class1}}</p>
        </el-row>
      </div>
      <div style=" border:1px solid #f7f7f7;">
        <el-row>
          <el-button  styel="float:left" class="el-icon-tickets"></el-button>
          <p>{{class2}}</p>
        </el-row>
      </div>
      <br>
      <br>
      <br>
      <el-form>
        <el-form-item style="padding-bottom:20%;float:right;">
          &nbsp;&nbsp;
          <el-button style="background-color:red;color:white;" @click="">正在进行讨论课</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name:"teacherSeminar",
    data(){
      return{
        headerLocation: "讨论课",
        class1:"OOAD(主)",
        class2:"J2EE",
      }
    }
  }
</script>
<style>
  .el-main .el-icon-tickets{
    float:left;
    border-color: white;

  }
  .el-main.p {
    display: inline-block;
  }
  .el-main.el-row{
    width:100px;
    height:10px;
    text-align:center;
    line-height:50px;
  }
</style>
