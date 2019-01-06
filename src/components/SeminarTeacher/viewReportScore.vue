<template>
  <el-container id="reportScore">
    <el-header>
      <el-button class="el-icon-back" ></el-button>
      <p>{{topic}}</p>
      <el-button class="el-icon-menu" ></el-button>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="team" label="组别" width="50">
        </el-table-column>
        <el-table-column
          prop="file" label="报告">
        </el-table-column>
        <el-table-column
          prop="reportScore" label="成绩" width="50">
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-button style="width: 80%;">确认</el-button>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button style="width: 80%;">修改</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "viewReportScore",
      data(){
        return{
          topic:"书面报告成绩",
          tableData: [{
            team:"1-2",
            file:"1-2 书面报告",
            reportScore:"5.0"
          }, {
            team:"1-2",
            file:"1-2 书面报告",
            reportScore:"5.0"
          }, {
            team:"1-2",
            file:"1-2 书面报告",
            reportScore:"5.0"
          }, {
            team:"1-2",
            file:"1-2 书面报告",
            reportScore:"5.0"
          }],
        }
      }
    }
</script>

<style scoped>

  .el-row .el-button{
    height: 50px;
    margin:10px;
    font-size: 18px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;

  }
  .el-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .el-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
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
