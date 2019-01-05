<template>
  <div id="page">
    <div class="header">
      <button class="el-icon-back backButt"></button>
      <span>个人信息综合管理平台</span>
      <button class="el-icon-circle-close-outline exitButt" @click="loginOutPC()">&nbsp;退出系统</button>
    </div>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-news" @click="chosecourse()"></i>选择课程
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document" @click="seminarIndex"></i>讨论课
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-edit"></i>查看成绩
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <p class="title">{{courseName}}——{{location}}</p>
      <el-collapse>

        <el-collapse-item v-for="round in rounds" :key="round.roundId">

          <template slot="title">

            <div class="titleDiv">第{{round.roundSerial}}轮</div>

          </template>

          <el-collapse v-for="team in round.teams" :key="team.teamId">

            <el-collapse-item>

              <template slot="title">

                <span class="teamName">{{team.klassSerial}}-{{team.teamSerial}}</span>

                <span class="teamScore">{{team.totalScore}}</span>

              </template>

              <div class="scoreDiv" v-for="seminar in team.seminars"  v-loading="loading">

                <p class="seminarName">{{seminar.seminarName}}</p>

                <span>展示：</span><span class="scoreFont">{{seminar.presentationScore}}</span>

                <span>提问：</span><span class="scoreFont">{{seminar.questionScore}}</span>
                <span>书面报告：</span><span class="scoreFont">{{seminar.reportScore}}</span>
                <el-button class="changeButt" size="mini">修改成绩</el-button>
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
    </div>
  </div>
</template>

<script>
    export default {
      name: "teaViewScore",
      data() {
        return {
          courseName: 'OOAD',
          location: '查看成绩',
          teamScore: [
            {
              round: '1',
              seminar: '第一次讨论课',
              preScore: 5.0,
              queScore: 5.0,
              repoScore: 5.0,
              score: 5.0
            }
          ]
        }
      },
      created(){
        this.getRound();
      },
      methods: {
        seminarIndex() {
          this.$router.push({
            path: '/PCseminarIndex',
            query: {
              courseId: this.$route.query.courseId,
              courseName: this.$route.query.courseName
            }
          })
        },
        getRound(){

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

                teams:[]

              });

              // console.log(_this.rounds[index]);

              _this.getTeam(_this.rounds[index]);

            }

          });

        },
        getTeam(round){

          let _this=this;

          this.$axios({

            method:'get',

            url:'/course/round/'+round.roundId

          }).then(

            response=> {

              for (var i=0; i < response.length; i++) {

                round.teams.push({

                  teamId: response[i].teamId,

                  klassSerial: response[i].klassSerial,

                  teamSerial: response[i].teamSerial,

                  totalScore: response[i].totalScore,

                  presentationScore: response[i].presentationScore,

                  questionScore: response[i].questionScore,

                  reportScore: response[i].reportScore,

                  seminars: []

                });

                _this.getSeminar(round,round.teams[i])

                // console.log(round.teams);

                // _this.getSeminars(rounds[i].teams,rounds[i].roundId);

              }

            }

          )

        },
        getSeminar(round,team) {

          this.$axios({

            method:'get',

            url:'/course/round/'+round.roundId+'/'+team.teamId

          }).then(

            res=>{

              team.seminars=res;

              this.loading=false;

            });

        },

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
