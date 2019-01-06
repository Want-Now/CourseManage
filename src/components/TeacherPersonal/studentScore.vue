<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>学生成绩</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
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
              <div class="scoreDiv" v-for="seminar in team.seminars">
                <p class="seminarName">{{seminar.seminarName}}</p>
                <span>展示：</span><span class="scoreFont">{{seminar.presentationScore}}</span>
                <span>提问：</span><span class="scoreFont">{{seminar.questionScore}}</span>
                <span>书面报告：</span><span class="scoreFont">{{seminar.reportScore}}</span>
                <el-button class="changeButt" size="mini" @click="dialogVisible = true">修改成绩</el-button>
                <el-dialog
                  title="修改成绩"
                  :visible.sync="dialogVisible"
                  width="80%"
                  center
                  :modal-append-to-body='false'>
                  <span>
                    <span>展示：</span><el-input v-model="modifyPresentationScore"></el-input>
                    <span>提问：</span><el-input v-model="modifyQuestionScore"></el-input>
                    <span>书面报告：</span><el-input v-model="modifyReportScore"></el-input>
                  </span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="modifyScore(team,seminar)">确 定</el-button>
                  </span>
                </el-dialog>
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
        dialogVisible:false,
        modifyPresentationScore:'',
        modifyQuestionScore:'',
        modifyReportScore:'',
      }
    },
    created(){
      this.getRound();
    },
    methods:{
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

          });
      },
      modifyScore(team,seminar){
        let _this=this;
        console.log(this.modifyPresentationScore);
        this.$axios({
          method:'put',
          url:'/seminar/'+seminar.klassSeminarId+'/team/'+team.teamId+'/modifySeminarScore',
          data:{
            presentationScore: parseFloat(this.modifyPresentationScore),
            questionScore:parseFloat(this.modifyQuestionScore),
            reportScore: parseFloat(this.modifyReportScore)
          }
        }).then(response=>{
          if(response===true) {
            _this.dialogVisible=false;
            _this.$message({
              type: 'success',
              message: '修改成功!',
              duration: 800
            });
          }else {
            _this.$message({
              type: 'error',
              message: '修改失败！',
              duration:800
            });
          }
        })
      }
    }
  }
</script>
<style>
  .el-container {
    height: 98vh;
  }
  .changeButt{
    margin: 10px;
  }
  .teamName{
    display: inline-block;
    width: 20%;
    padding-left: 10px;
    font-size: 15px;
  }
  .teamScore{
    display: inline-block;
    width: 65%;
    font-size: 15px;
    text-align: right;
    color: #494E8F;
  }
  .scoreDiv{
    border-bottom: solid 1px #595959;
  }
  .scoreFont{
    font-size: 18px;
    color: #494E8F;
    margin-right: 20px;
  }
  .titleDiv{
    width: 100%;
    height: 100%;
    font-size: 18px;
    color:  #494e8f;
    text-align: left;

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

