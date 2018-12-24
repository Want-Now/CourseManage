<template>
  <div id="page">
    <div class="header">
      <button class="el-icon-back backButt"></button>
      <span>个人信息综合管理平台</span>
      <button class="el-icon-circle-close-outline exitButt">&nbsp;退出系统</button>
    </div>
    <teacherMenu></teacherMenu>
    <div class="main">
      <p class="title">{{location}}</p>
      <div class="seminarDiv" :model="seminar">
        <p class="seminarName">{{seminar.name}}</p>
        <p class="content">主题：{{seminar.topic}}</p>
        <p class="content">报名情况：{{seminar.apply}}</p>
        <p class="content">报名起止日期：{{seminar.date}}</p>
        <p class="content">讨论课报告提交截止日期：{{seminar.repoDate}}</p>
      </div>
      <p class="teamLabel">已报名小组</p>
      <el-table
        :data="applyTeam"
        :header-cell-style="{'color':'#409EFF','font-size':'25px','height':'90px'}"
        :row-style="{'font-size':'25px','height':'70px'}">
        <el-table-column
          prop="name"
          label="小组名称"
          align="center">

        </el-table-column>
        <el-table-column
          prop="leader"
          label="组长"
          align="center">

        </el-table-column>
        <el-table-column
          prop="repoState"
          label="课程报告"
          align="center">

        </el-table-column>
      </el-table>
      <p style="margin-top: 50px">
        <el-button type="primary" class="seminarButt">提交</el-button>
        <el-button type="primary" class="seminarButt">返回</el-button>
      </p>
    </div>
  </div>
</template>

<script>
  import teacherMenu from './teacherMenu'
    export default {
        name: "downloadFile",
      components:{
          teacherMenu,
      },
      data(){
          return{
            location:'下载讨论课材料',
            seminar:{
              name:'第一轮讨论课',
              topic:'需求分析说明书',
              apply:'1/6',
              date:'2018.07.11-2018.09.28',
              repoDate:'2018.09.30'
            },
            applyTeam:[
              {
                name:'1-1',
                leader:'Andy',
                repoState:'未提交'
              }
            ]



          }
      },

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
  .seminarDiv{
    text-align: left;
    padding: 10px 0 0 80px;
  }
  .seminarName{
    font-weight: bold;
    color: #409EFF;
    font-size: 24px;
  }
  .content{
    font-size: 20px;
  }
  .seminarButt{
    height: 50px;
    width: 100px;
    font-size: 22px;
    margin: 10px 25px;
  }
  .teamLabel{
    margin: 80px 0 0px 0px;
    padding-left: 10px;
    padding-bottom: 10px;
    border-bottom:solid 1px #DCDFE6;
    font-size: 25px;
    text-align: left;
  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
