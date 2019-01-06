<template>
    <el-container>
      <el-header>
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{courseName}}</p>
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
        <p class="seminarName">{{seminarName}}</p>
        <el-tabs tab-position="left" v-if="isPrePage" :value="nowPre">
          <el-tab-pane v-for="item in seminarInfos" :label="item.preTeam" :key="item.teamId" :name="''+item.teamId" :disabled="item.present===0">
            <!--<div class="info">-->
              <!--已有{{item.questionNum}}位同学提问-->
            <!--</div>-->
            <el-input v-model="item.presentationScore" type="input" class="scoreInput"></el-input>
            <p>展示分数</p>
            <div v-if="item.present===1">
              <el-button class="button" @click="uploadPreScore(item)">
                确认打分
              </el-button><br/>
              <el-button class="button" @click="goQuesPage(item)">
                抽取提问
              </el-button><br/>
              <el-button class="button" @click="nextTeamPre()">
                下组展示
              </el-button>
            </div>
            <div v-if="item.present===2">
              <el-button class="button" @click="uploadPreScore(item)">确认修改</el-button>
            </div>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="80%"
              center
              :modal-append-to-body='false'>
              <span>
                <el-date-picker
                v-model="repoDeadline"
                type="datetime"
                placeholder="选择日期时间"
                default-time="12:00:00">
                </el-date-picker>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="uploadRepoDeadline">确 定</el-button>
              </span>
            </el-dialog>
          </el-tab-pane>
        </el-tabs>
        <el-tabs tab-position="left" v-if="!isPrePage" :value="nowQues">
          <el-tab-pane v-for="question in questions" :key="question.questionId" :name="question.questionId+''" :label="question.team">
            <div class="info">
              {{preTeam}}正在展示
            </div>
            <div class="info">
              已有{{questionNum}}名同学提问
            </div>
            <el-input v-model="question.questionScore" type="input" class="scoreInput"></el-input>
            <p>提问分数</p>
            <div>
              <el-button class="button" v-if="question.selectBefore===false" @click="uploadQuesScore(question)">
                确认打分
              </el-button>
              <el-button class="button" v-if="question.selectBefore===true" @click="uploadQuesScore(question)">确认修改</el-button><br/>
              <el-button class="button" @click="nextQues()">
                下个提问
              </el-button><br/>
              <el-button class="button" @click="goPrePage()">
                返回展示
              </el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
</template>

<script>
    export default {
      name: "SeminarProceed",

      data(){
        return{
          courseName:"",
          seminarName:'',
          seminarInfos:[],
          isPrePage:'',
          questions:[{}],
          preLength:'',
          nowPre:'',
          preIndex:'',
          dialogVisible:false,
          repoDeadline:'',
          websock:'',
          nowQues:'',
          nowAttendanceId:'',
          questionNum:0,
          preTeam:''
        }
      },
      mounted(){
        this.isPrePage=true;
        this.initWebSocket();
        this.load();
        // this.wsService();
      },
      methods: {
        load(){
          let _this=this;
          this.courseName=this.$route.query.courseName;
          this.seminarName=this.$route.query.seminarName;
          this.$axios({
            method:'get',
            url:'/presentation/'+this.$route.query.klassSeminarId
          }).then(
            response=>{
              for(var index=0;index<response.length;index++)
              {
                _this.seminarInfos.push({
                  preTeam:response[index].klassSerial+'-'+response[index].teamSerial,
                  teamId:response[index].teamId,
                  presentationScore:response[index].presentationScore,
                  present:response[index].present,
                  attendanceId:response[index].attendanceId,
                })
                if(_this.seminarInfos[index].present===1)
                {
                  _this.nowPre=_this.seminarInfos[index].teamId+'';
                  _this.preIndex=index;
                }
                //console.log(_this.seminarInfos[index].attendanceId)
              }
              _this.preLength=response.length;
              if(_this.websock.readyState===1){
                _this.websock.send("开始展示");
              }
            }
          );

        },
        back(){
          this.$router.go(-1);
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        goPrePage(){
          this.isPrePage=true;
          this.questions=[{}];
        },
        goQuesPage(item){
          this.preTeam=item.preTeam;
          this.isPrePage=false;
          let _this=this;
          this.$axios({
            method:'get',
            url:'/seminar/'+item.attendanceId+'/question'
          }).then(
            response=>{
              for(var index=0;index<response.length;index++)
              {
                _this.questions.push({
                  questionId:response[index].questionId,
                  team:response[index].klassSerial+'-'+response[index].teamSerial+' '+response[index].studentName,
                  questionScore:response[index].questionScore,
                  selectBefore:true,
                })
                _this.nowQues=_this.questions[index].questionId+'';
              }
              _this.nowAttendanceId=item.attendanceId;
              _this.nextQues();
            }
          )

        },
        nextQues(){
          let _this=this;
          this.$axios({
            method:'get',
            url:'/attendanceId/'+this.nowAttendanceId+'/question'
          }).then(function (response) {
            if(response==='')
            {
              _this.$message({
                type: 'success',
                message: '没有提问了哟',
                duration: 1000
              });
              _this.questionNum=0;
            }
            else{
              console.log(response.studentName);
              _this.questions.push({
                questionId:response.questionId,
                team:response.klassSerial+'-'+response.teamSerial+' '+response.studentName,
                selectBefore:false,
              });
              console.log(response.questionId);
              _this.nowQues=response.questionId+'';
              var call='请'+response.klassSerial+'-'+response.teamSerial+' '+response.studentName+'进行提问';
              _this.webSocketSend(call);
              _this.websock.onmessage=function (msg) {
                console.log(msg.data);
              }
              _this.webSocketSend("提问人数-1");
            }
          })

        },
        nextTeamPre(){
          let _this=this;
          if(this.preIndex===(this.preLength-1)){
            this.dialogVisible=true;
          }
          else{
            this.seminarInfos[this.preIndex].present=2;
            this.$axios({
              method:'put',
              url:'/presentation/klassSeminar/updatePresentStatus',
              data:{
                thisAttendanceId:parseInt(this.seminarInfos[this.preIndex].attendanceId),
                nextAttendanceId:parseInt(this.seminarInfos[(this.preIndex+1)].attendanceId)
              }
            }).then(function () {
              _this.preIndex++;
              _this.seminarInfos[_this.preIndex].present=1;
              _this.nowPre=_this.seminarInfos[_this.preIndex].teamId+'';
            })
          }
          this.webSocketSend("下一组");

        },
        uploadPreScore(item){

          this.$axios({
            method: 'put',
            url:'/presentation/'+this.$route.query.klassSeminarId+'/attendance/'+item.teamId,
            data:{
              presentationScore:item.presentationScore
            }
            }).then(response=>{
              if(response===true) {
                this.$message({
                  type: 'success',
                  message: '成功!',
                  duration: 800
                });
              }else {
                this.$message({
                  type: 'error',
                  message: '失败！',
                  duration:800
                });
              }
            });
        },
        uploadQuesScore(question){
          this.$axios({
            method:'put',
            url:'/question/'+question.questionId,
            data:{
              klassSeminarId:parseInt(this.$route.query.klassSeminarId),
              questionScore:parseFloat(question.questionScore)
            }
          }).then(response=>{
              if(response===true){
                alert('success');
              }else alert('failed');
            })
        },
        uploadRepoDeadline(){
          let _this=this;
          var date=new Date(this.repoDeadline);
          this.$axios({
            method:'put',
            url:'/seminar/'+this.$route.query.klassSeminarId+'/updateReportDDL',
            data:{
              reportDDL:this.getDate(date),
              lastAttendanceId:this.seminarInfos[this.preIndex].attendanceId
            }
          }).then(response=>{
            if(response===true){
              _this.dialogVisible = false;
            }
            else{
              console.log("error");
            }
          });
          this.$router.go(-1);

        },
        getDate(date) {
          var seperator1 = "-";
          var seperator2 = ":";
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          var Hours = date.getHours();
          var Minutes = date.getMinutes();
          var Seconds = date.getSeconds();

          if (Hours >= 0 && Hours <= 9) {
            Hours = "0" + Hours;
          }
          if (Minutes >= 0 && Minutes <= 9) {
            Minutes = "0" + Minutes;
          }
          if (Seconds >= 0 && Seconds <= 9) {
            Seconds = "0" + Seconds;
          }
          var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + Hours + seperator2 + Minutes
            + seperator2 + Seconds;
          return currentdate;
        },

        initWebSocket(){ //初始化weosocket

          const wsuri = "ws://ghctcourse.natapp1.cc/websocket";//ws地址
          this.websock = new WebSocket(wsuri);
          this.websock.onopen = this.webSocketOnOpen;
          let _this=this;
          this.websock.addEventListener("message", function(event) {
            if(event.data==='下一组')
            {
              _this.questionNum=0;
              console.log(event.data);
            }else if(event.data==='开始展示'){
              _this.$message({
                type: 'success',
                message: '开始展示!',
                duration: 800
              });
              console.log(event.data);
            }else if(event.data==='提问'){
              _this.questionNum++;
              console.log(event.data);
            }
            else if(event.data.slice(0,1)==='请') {
              _this.questionNum--;
              console.log(event.data);
            }else console.log(event.data);
          });
          this.websock.onerror = this.webSocketOnError;
          this.websock.onclose = this.webSocketClose;
        },

        webSocketOnOpen() {
          console.log("WebSocket连接成功");
        },
        webSocketOnError(e) { //错误
          console.log("WebSocket连接发生错误");
        },
        webSocketSend(agentData){//数据发送
          this.websock.send(agentData);
        },

        webSocketClose(e){ //关闭
          console.log("connection closed (" + e + ")");
        },
      },
      destroyed(){
        //页面销毁时关闭长连接
        this.websock.close();
      },
    }
</script>

<style scoped>
  .seminarName{
    margin-top: 0px;
    font-size: 18px;
    color: #494e8f;
  }
  .el-tabs{
    position: absolute;
    height: 75%;
    width: 100%;
    left: 10px;
  }

  .el-tab-pane{
    text-align: center;
  }
  .el-tab-pane p{
    font-size: 25px;
  }


  .info{
    display: inline-block;
    width: 200px;
    color: #8084b1;
    font-size: 15px;
    text-align: center;

  }


  .button{
    width: 120px;
    height: 40px;
    font-size: 18px;
    margin: 10px;
    padding: 0px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;

  }
  .button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
  }

  .seminarTopic{
    width: 100%;
    height: 40px;
    padding: 0px;
    margin: 0px 10px 0px 0px;
    text-align: center;
    color: #595959;
    font-size: 18px;
    border-bottom: solid 1px #8084b1;
    /*line-height: 20px;*/

  }
  .el-switch{
    position: relative;
    left: -5px;
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
<style>
  .scoreInput .el-input__inner{
    position: relative;
    top: 30px;
    height: 110px;
    width: 110px;
    margin-bottom: 10px ;
    font-size: 50px;
    text-align: center;
  }

</style>
