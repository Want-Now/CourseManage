<template>
  <div id="page">
    <div class="header">
      <button class="el-icon-back backButt"></button>
      <span>个人信息综合管理平台</span>
      <button class="el-icon-circle-close-outline exitButt">&nbsp;退出系统</button>
    </div>
    <studentMenu></studentMenu>
    <div class="main">
      <p class="title">{{courseName}}——{{location}}</p>
      <el-table
        :data="teamScore"
        :header-cell-style="{'color':'#409EFF','font-size':'25px','height':'90px'}"
        :row-style="{'font-size':'25px','height':'70px'}">
        <el-table-column
          label="轮数"
          prop="round"
          align="center">
        </el-table-column>
        <el-table-column
          label="参与讨论课"
          prop="seminar"
          align="center">
        </el-table-column>
        <el-table-column
        label="展示成绩"
        prop="preScore"
        align="center">
        </el-table-column>
        <el-table-column
        label="提问成绩"
        prop="queScore"
        align="center">
        </el-table-column>
        <el-table-column
        label="报告成绩"
        prop="repoScore"
        align="center">
        </el-table-column>
        <el-table-column
          label="总成绩"
          prop="score"
          align="center">
        </el-table-column>
      </el-table>
      <el-button type="primary" class="exportButt">
          导出Excel
      </el-button>
    </div>
  </div>
</template>

<script>
  import studentMenu from './studentMenu'

    export default {
        name: "teaViewScore",
      components:{
          studentMenu,
      },
      data(){
        return{
          courseName:'OOAD',
          location:'查看成绩',
          teamScore:[
            {
              round:'1',
              seminar:'第一次讨论课',
              preScore:5.0,
              queScore:5.0,
              repoScore:5.0,
              score:5.0
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .header{
    padding-left: 50px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #409EFF;
    text-align: left;
  }
  .main{
    margin-left: 300px;
    padding: 0 50px;
  }
  .exitButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    right: 50px;
  }
  .courseButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    right:200px;
  }
  .backButt{
    border: none;
    color: #409EFF;
    font-size: 30px;
    height: 50px;
  }
  .title{
    font-weight: bold;
    color: #409EFF;
    font-size: 27px;
    padding: 20px 50px;
    text-align: left;
    border: solid 1px #DCDFE6;
  }

  .roundSpan{
    margin-right:20px;
    font-size: 22px;
  }
  .el-table{
    margin-top: 20px;
  }
  .exportButt{
    margin-top: 50px;
    width: 200px;
    height: 60px;
    font-size: 22px;

  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
