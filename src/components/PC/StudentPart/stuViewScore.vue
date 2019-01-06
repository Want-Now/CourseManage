<template>
  <div id="page">
    <div class="header" style="background-color:#dcdcdc">
      <button class="el-icon-back backButt" @click="back()"></button>
      <span>个人信息综合管理平台</span>
      <button class="el-icon-circle-close-outline exitButt" @click="loginOutPC()">&nbsp;退出系统</button>
    </div>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1" @click="chosecourse()">
          <i class="el-icon-news"></i>选择课程
        </el-menu-item>
        <el-menu-item index="2" @click="seminarIndex">
          <i class="el-icon-document" ></i>讨论课
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-edit"></i>查看成绩
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <p class="title">{{courseName}}——{{location}}</p>
      <el-collapse accordion>
        <el-collapse-item v-for="round in rounds" :key="round.roundId">
          <template slot="title" ><span style="font-size:28px;color:#409dfe;padding-left:40px;">第{{round.roundSerial}}轮</span></template>
          <el-collapse v-for="seminar in round.seminars" :key="seminar.id">
            <el-collapse-item>
              <template slot="title"><span style="font-size:20px;padding-left:60px;">{{seminar.topic}}</span></template>
              <div class="scoreDiv">
                <span>展示：</span><span class="scoreFont">{{seminar.score.presentationScore}}</span><br/>
                <span>提问：</span><span class="scoreFont">{{seminar.score.questionScore}}</span><br/>
                <span>书面报告：</span><span class="scoreFont">{{seminar.score.reportScore}}</span><br/>
                <span>本次总成绩：</span><span class="scoreFont">{{seminar.score.totalScore}}</span><br/>
              </div>
              <span>本轮总成绩：</span><span class="scoreFont">{{round.totalScore}}</span><br/>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
    export default {
      name: "teaViewScore",
      data() {
        return {
          courseName: '',
          location: '查看成绩',
          rounds:[],
        }
      },
      created(){
        this.courseName=this.$route.query.courseName;
        let _this=this;
        this.$axios({
          method:'get',
          url:'/course/'+this.$route.query.courseId+'/round'
        }).then(response=>{
          for(var index=0;index<response.length;index++)
          {
            _this.rounds.push({
              roundId:response[index].roundId,
              roundSerial:response[index].roundSerial,
              seminars:[]
            });
            _this.getSeminars(_this.rounds[index]);
          }
        })
      },
      methods: {
        getSeminars(round){
          let _this=this;
          console.log(round.roundId);
          this.$axios({
            method:'get',
            url:'/course/round/'+round.roundId+'/team/roundSeminar'
          }).then(response=>{
            for(var index=0;index<response.length;index++)
            {
              round.seminars.push({
                id:response[index].id,
                topic:response[index].topic,
                klassSeminarId:response[index].klassSeminarId,
                score:{}
              })
              _this.getScore(round.seminars[index]);
            }

          })
        },
        getScore(seminar){
          this.$axios({
            method:'get',
            url:'/course/round/team/'+seminar.klassSeminarId+'/seminarScore'
          }).then(res=>{
            seminar.score=res;
          })
        },
        seminarIndex() {
          this.$router.push({
            path: '/PCseminarSIndex',
            query: {
              courseId: this.$route.query.courseId,
              courseName: this.$route.query.courseName
            }
          })
        },
      }
    }
</script>

<style scoped>
  .scoreDiv{
    background-color: #eeeeee;
    border-bottom: solid 1px white;
    font-size:20px;
  }
  .scoreFont{
    font-size: 20px;
    color: #494E8F;
    padding-left:90px;
  }
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
  #teacherMenu{
    min-width: 300px;

    position: absolute;
    left: 0px;
  }
  .el-menu{
    height: 90vh;
  }
  .el-menu-item{
    height: 30vh;
    font-size: 25px;
    line-height: 30vh;
  }
  .el-icon-news{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-document{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-edit{
    margin-right: 10px;
    font-size: 30px;
  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
