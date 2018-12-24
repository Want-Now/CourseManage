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
      <el-table
        :data="classList"
        :header-cell-style="{'color':'#409EFF','font-size':'25px','height':'80px'}"
        :row-style="{'font-size':'25px','height':'70px'}">
        <el-table-column
          label="班级列表"
          prop="className"
          align="center">

        </el-table-column>
        <el-table-column
          prop="filename">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              >提交</el-button>
            <el-button
              type="danger">重置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import teacherMenu from './teacherMenu'
    export default {
        name: "importStudent",
      components:{
          teacherMenu,
      },
      data(){
          return{
            courseName:'OOAD',
            location:'导入学生名单',
            classList:[
              {
                className:'1班',
                filename:'2016.xlsx'
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
</style>
