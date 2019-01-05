<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>       </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="team" label="组别" width="100%">
        </el-table-column>
        <el-table-column prop="ppt" label="演示文档" width="200%">
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
        <el-button class="bottomButt">批量下载</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        headerLocation: "OOAD-讨论课",
        tableData: [{
          team: '第一组',
          ppt: '1-1业务流程.ppt '
        }, {
          team: '第二组',
          ppt: '未提交'
        }, {
          team: '第三组',
          ppt: '1-3业务流程.ppt '
        }, {
          team: '第四组',
          ppt: '1-4业务流程.ppt '
        }]
      }
    }
  }
</script>
<style>
  .el-container {
    height: 90vh;
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
