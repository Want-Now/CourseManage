<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="stuCenter()">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar()">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-collapse accordion>
        <el-collapse-item v-for="round in rounds" :key="round.id">
          <template slot="title">{{round.title}}</template>
          <el-collapse v-for="seminar in round.seminars" :key="seminar.id">
            <el-collapse-item>
              <template slot="title">{{seminar.name}}</template>
                <div class="scoreDiv">
                  <span>展示：</span><span class="scoreFont">{{seminar.presentationScore}}</span><br/>
                  <span>提问：</span><span class="scoreFont">{{seminar.questionScore}}</span><br/>
                  <span>书面报告：</span><span class="scoreFont">{{seminar.reportScore}}</span><br/>
                  <span>本次总成绩：</span><span class="scoreFont">{{seminar.seminarScore}}</span><br/>
                  <span>本轮总成绩：</span><span class="scoreFont">{{seminar.roundScore}}</span><br/>
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
        name: "courseScore",
      data(){
          return{
            headerLocation:'OOAD-2016(1)',
            rounds:[
              {
                title:'第一轮',
                seminars:[
                  {
                    name:'业务流程',
                    presentationScore:'5.0',
                    questionScore:'5.0',
                    reportScore:'5.0',
                    seminarScore:'5.0',
                    roundScore:'5.0'

                  },
                  {
                    name:'用例分析'
                  }
                ]
              },
              {
                title:'第二轮'
              }
            ],

          }
      }
    }
</script>

<style scoped>
  .el-container{
    height: 98vh;

  }

  .el-collapse-item{
    font-size: 15px;
  }
  .scoreDiv{

  }
  .scoreFont{
    font-size: 18px;
    color: #494E8F;
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
