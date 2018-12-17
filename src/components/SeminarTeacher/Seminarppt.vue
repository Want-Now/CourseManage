<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
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
    <el-main>

      <el-table :data="tableData">
        <el-table-column prop="team" label="组别" width="100%">
        </el-table-column>
        <el-table-column prop="ppt" label="演示文档" width="200%">
        </el-table-column>
      </el-table>
    </el-main>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;margin-top:2%;width:100%;background-color:#494e8e" type="primary">批量下载</el-button>
      </el-form-item>
    </el-form>
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
    margin-bottom: 40px;
    color: #333;
    background-color:white;
  }
</style>
