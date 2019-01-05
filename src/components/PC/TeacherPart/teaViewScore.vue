<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt" @click="back()"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-menu courseButt" @click="chosecourse()">&nbsp;选择课程</button>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt" @click="loginOutPC()">&nbsp;退出系统</button>
    </div>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1" @click="Stu">
          <i class="el-icon-news"></i>导入学生名单
        </el-menu-item>
        <el-menu-item index="2" @click="seminarIndex">
          <i class="el-icon-document" ></i>讨论课
        </el-menu-item>
        <el-menu-item index="3" @click="importScore">
          <i class="el-icon-edit"></i>查看成绩
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <p class="title">{{courseName}}—查看成绩</p>
      <el-collapse>
        <el-collapse-item v-for="round in rounds" :key="round.roundId">
          <template slot="title">
            <div style="font-size:30px;color: #5ba6fe;padding-left:50px;">第{{round.roundSerial}}轮</div>
          </template>
          <el-collapse v-for="team in round.teams" :key="team.teamId" >
            <el-collapse-item>
              <template slot="title" >
                <div>
                <span class="teamName" style="font-size:32px;padding-left:90px">{{team.klassSerial}}-{{team.teamSerial}}</span>
                <span class="teamScore" style="font-size:32px;padding-left:1000px">该轮次总分：{{team.totalScore}}</span>
                </div>
              </template>
              <div class="scoreDiv" v-for="seminar in team.seminars"  v-loading="loading">
                <p class="seminarName">{{seminar.seminarName}}</p>
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "teaViewScore",
      data(){
        return{
          teams:[],
          seminars:[],
          courseName:'',
          roundsList:[],
          rounds:[],
          value:'',
          seminarList:'',
          roundId:'',
          teamId:'',
          teamSerial:'',
        }
      },
      created(){
        this.courseName=this.$route.query.courseName
        this.getRound();
      },
      methods:{
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
        Stu(){
          this.$router.push({path:'/ImportStuPC',
            query:{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName
            }
          })
        },
        seminarIndex(){
          this.$router.push({path:'/PCseminarIndex',
            query:{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName
            }
          })
        },
        importScore(){
          this.$router.push({path:'/TeaViewScorePC',
            query:{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName
            }
          })
        },
      },
    }
</script>

<style scoped>
  .scoreDiv{
    background-color: #eeeeee;
    border-bottom: solid 1px white;
    font-size:30px;
  }
  .scoreFont{
    font-size: 30px;
    color: #494E8F;
    margin-right: 20px;
  }
  .header{
    padding-left: 50px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #409EFF;
    text-align: left;
  }
  .clickDiv{
    width: 100%;
    height: 100%;
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
