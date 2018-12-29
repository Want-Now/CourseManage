<template>
  <el-container id="reportScore">
    <el-header>
      <el-button class="el-icon-back" ></el-button>
      <p>{{topic}}</p>
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
      <el-table
        :data="tableData"
        :header-cell-style="{'color':'#494e8f','font-size':'18px'}"
        :row-style="{'font-size':'18px','height':'70px'}">
        <el-table-column
          prop="team" label="组别" width="60px" align="center">
        </el-table-column>
        <el-table-column
          label="报告" align="center">
          <template slot-scope="scope">
            <a :href="'http://'+scope.row.Address"
               target="_blank"
               class="buttonText">{{scope.row.filename}}</a>
          </template>
        </el-table-column>
        <el-table-column
          label="成绩" width="80" align="center">
          <template slot-scope="scope">
            <el-input placeholder="成绩" :model="tableData.repoScore"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-button class="bottom-button">批量下载</el-button>
      <el-button class="bottom-button">确认</el-button>

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
              repoScore:''
            },
            ],
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

  .bottom-button{
    width: 85vw;
    height: 50px;
    margin:10px;
    font-size: 18px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;

  }
  .bottom-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .bottom-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
  }

</style>
