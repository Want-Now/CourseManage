<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>

      <el-table :data="tableData">
        <el-table-column prop="team" label="组别" width="100%">
        </el-table-column>
        <el-table-column prop="ppt" label="演示文档" width="200%">
        </el-table-column>
      </el-table>
    </el-main>
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
          ppt: '1-2 未提交'
        }, {
          team: '第三组',
          ppt: '可报名 '
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
    margin-bottom: 40px;
    color: #333;
    background-color:white;
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


</style>
