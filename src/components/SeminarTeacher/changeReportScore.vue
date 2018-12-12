<template>
  <el-container id="reportScore">
    <el-header>
      <el-button class="el-icon-back" ></el-button>
      <p>{{topic}}</p>
      <el-button class="el-icon-plus" ></el-button>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="team" label="组别" width="50">
        </el-table-column>
        <el-table-column
          label="报告">
          <template slot-scope="scope">
            <a :href="'http://'+scope.row.Address"
               target="_blank"
               class="buttonText">{{scope.row.filename}}</a>
          </template>
        </el-table-column>
        <el-table-column
          label="成绩" width="80">
          <template slot-scope="scope">
            <el-input

              placeholder="成绩"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-button style="width: 80%;">批量下载</el-button>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button style="width: 80%;">确认</el-button>
      </el-row>

    </el-footer>
  </el-container>
</template>

<script>
    export default {
      name: "changeReportScore",
      data(){
          return{
            topic:"书面报告成绩",
            tableData: [{
              team:"1-2",
              Address:"baidu.com",
              filename:"1-2 书面报告",
            }, {
              team:"1-2",
              Address:"baidu.com",
              filename:"1-2 书面报告",

            }, {
              team:"1-2",
              Address:"baidu.com",
              filename:"1-2 书面报告",

            }, {
              team:"1-2",
              Address:"baidu.com",
              filename:"1-2 书面报告",

            }],
          }
      }
    }
</script>

<style>
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

  .el-header .el-icon-plus{
    position: absolute;
    width: 60px;
    height: 55px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
    right: 10px;
    top: 10px;
  }
  .el-header .el-icon-plus:hover{background-color: #494e8f;border-color: #494e8f;}
  .el-header .el-icon-plus:focus{background-color: #494e8f;border-color: #494e8f;}


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

</style>
