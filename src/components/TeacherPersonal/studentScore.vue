<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>学生成绩</p>
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
      <el-collapse accordion>
        <el-collapse-item v-for="round in rounds" :key="round.id">
          <template slot="title">{{round.title}}</template>
          <el-collapse v-for="team in teams" :key="team.id">
            <el-collapse-item>
              <template slot="title">{{team.teamName}}<span style="margin-left: 30px;">{{team.teamScore}}</span></template>
              <div class="scoreDiv" v-for="seminar in seminars" :key="seminar.id">
                <p class="seminarName">{{seminar.name}}</p>
                <span>展示：</span><span class="scoreFont">{{seminar.presentationScore}}</span>
                <span>提问：</span><span class="scoreFont">{{seminar.questionScore}}</span>
                <span>书面报告：</span><span class="scoreFont">{{seminar.reportScore}}</span>
              </div>
              <div class="scoreDiv">
                <p class="seminarName">总成绩</p>
                <span>展示：</span><span class="scoreFont">{{team.presentationScore}}</span>
                <span>提问：</span><span class="scoreFont">{{team.questionScore}}</span>
                <span>书面报告：</span><span class="scoreFont">{{team.reportScore}}</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer>
      <el-button class="bottomButt">导出成绩</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    name:"studentScore",
    data(){
      return{
        headerLocation:'',
        rounds:[],
        teams:[],
        seminars:[],
      }
    }
  }
</script>
<style>
  .el-container {
    height: 98vh;
  }

  .el-collapse-item{
    font-size: 15px;
  }
  .scoreDiv{
    border-bottom: solid 1px #595959;
  }
  .scoreFont{
    font-size: 18px;
    color: #494E8F;
    margin-right: 20px;
  }
  .el-collapse-item__header{
    text-align: center;
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

