<template>
  <div id="page">
    <div class="header">
      <button class="el-icon-back backButt"></button>
      <span>个人信息综合管理平台</span>
      <button class="el-icon-menu courseButt">&nbsp;选择课程</button>
      <button class="el-icon-circle-close-outline exitButt">&nbsp;退出系统</button>
    </div>
    <teacherMenu></teacherMenu>
    <div class="main">
      <p class="title">{{courseName}}——{{location}}</p>
      <span class="roundSpan">轮数</span>
      <el-select v-model="value" placeholder="请选择" class="select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-table
        :data="teamScore"
        :header-cell-style="{'color':'#409EFF','font-size':'25px','height':'90px'}"
        :row-style="{'font-size':'25px','height':'70px'}">
        <el-table-column
          label="小组总分"
          prop="teamScore"
          align="center">
        </el-table-column>
        <el-table-column
          label="参与讨论课"
          prop="seminar"
          align="center">
        </el-table-column>
        <el-table-column
        label="发言成绩"
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
          label="该次总成绩"
          prop="seminarScore"
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
  import teacherMenu from './teacherMenu'

    export default {
        name: "teaViewScore",
      components:{
          teacherMenu,
      },
      data(){
        return{
          courseName:'OOAD',
          location:'查看成绩',
          options:[
            {
              value:1,
              label:'1',
            },
            {
              value:2,
              label:'2',
            },
          ],
          value:'',
          teamScore:[
            {
              teamScore:'1-1 5分',
              seminar:'第一次讨论课',
              preScore:5,
              queScore:5,
              repoScore:5,
              seminarScore:5
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
