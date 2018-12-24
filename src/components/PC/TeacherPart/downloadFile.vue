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
      <p class="choose">
        <span class="roundSpan">课程</span>
        <el-select v-model="courseValue" placeholder="请选择" class="select">
          <el-option
            v-for="item in courseOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </p>
      <div class="seminarDiv" v-for="seminar in seminars" >
        <p class="seminarName">{{seminar.name}}</p>
        <p class="content">主题：{{seminar.topic}}</p>
        <p class="content">报名情况：{{seminar.apply}}
          <el-button type="primary" class="seminarButt">进入</el-button>
        </p>
        <p class="content">报名起止日期：{{seminar.date}}</p>
      </div>


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
            courseOptions: [
              {
                value:1,
                label:'OOAD'
              }
            ],
            courseValue: '',
            seminars:[
              {
                name:'第一轮讨论课',
                topic:'需求分析说明书',
                apply:'1/6',
                date:'2018.07.11-2018.09.28',
              },
              {
                name:'第一轮讨论课',
                topic:'需求分析说明书',
                apply:'1/6',
                date:'2018.07.11-2018.09.28',
              },
            ],



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
  .choose{
    margin:30px 0px;
  }
  .roundSpan{
    margin-right:20px;
    font-size: 22px;
  }
  .seminarDiv{
    border-top: solid 1px #DCDFE6;
    text-align: left;
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
    position:absolute;
    right: 80px;
    height: 50px;
    width: 100px;
    font-size: 23px;
  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
