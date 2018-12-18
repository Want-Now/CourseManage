<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
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
      <el-button class="buttomButton">导出成绩</el-button>
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
    height: 100vh;

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

</style>
