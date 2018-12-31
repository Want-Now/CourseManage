<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>学生组队</p>
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
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="1-1" name="1">
          <el-table size="small"
                    :data="tableteamleader"
                    style="width: 100%">
            <el-table-column
              prop="ID"
              label="组长"
              width="200">
            </el-table-column>
            <el-table-column
              prop="name"
              width="100">
            </el-table-column>
          </el-table>
          <el-table size="small"
                    :data="tableData"
                    style="width: 100%">
            <el-table-column
              prop="ID"
              label="组员"
              width="200">
            </el-table-column>
            <el-table-column
              prop="name"
              width="100">
            </el-table-column>
          </el-table>
        </el-collapse-item>

        <el-collapse-item title="1-2" name="2">

        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        tableteamleader: [{
          ID: '24320162200000',
          name: '王虎',
        }],
        tableData: [{
          ID: '24320162201111',
          name: '王小虎',
        }, {
          ID: '24320162202222',
          name: '王大虎',
        }]
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
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
  .el-icon-plus{
    font-size: 25px;
  }

</style>

