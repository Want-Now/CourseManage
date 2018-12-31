<template>
  <el-container>
    <el-header id="header">
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
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
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name:"studentSeminar",
    data(){
      return{
        headerLocation: "讨论课",
        class1:"OOAD  2016(1)",
        class2:"J2EE  2016",
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
