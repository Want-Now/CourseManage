<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
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
      <div>
        <div  style="font-size:20px">{{seminarName}}</div>
        <div style="float:left;font-size:15px">第{{nowPreOrder+1}}组展示</div>
        <div style="float:right;font-size:15px">已有{{questionNum}}名同学提问</div>
      </div>
      <br/>
      <div class="Div" v-for="(team,index) in teams">
        <span class="title">第{{index+1}}组</span>
        <span v-if="team.present===1" class="now">{{team.klassSerial}}-{{team.teamSerial}}</span>
        <span v-else class="notNow">{{team.klassSerial}}-{{team.teamSerial}}</span>
      </div>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" type="primary" @click="question()">Q&A</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        headerLocation: "",
        tableData: [],
        teams:[],
        seminarName:'',
        nowPreOrder:'',
        questionNum:0,
        websock:'',

      }
    },
    mounted(){
      let _this=this;
      this.headerLocation=this.$route.query.courseName;
      this.seminarName=this.$route.query.seminarName;
      this.initWebSocket();
      this.$axios({
        method:'get',
        url:'/presentation/'+this.$route.query.klassSeminarId,
      }).then(response=>{
        _this.teams=response;
        for(var index=0;index<response.length;index++)
        {
          if(response[index].present===1) _this.nowPreOrder=index;
        }
      })
    },
    methods: {
      initWebSocket(){ //初始化weosocket
        const wsuri = "ws://ghctcourse.natapp1.cc/websocket";//ws地址
        this.websock = new WebSocket(wsuri);
        this.websock.onopen = this.webSocketOnOpen;
        let _this=this;
        this.websock.addEventListener("message", function(event) {
          if(event.data==='下一组')
          {
            _this.$message({
              type: 'success',
              message: '下一组展示!',
              duration: 800
            });
            _this.nowPreOrder++;
          }else if(event.data==='开始展示'){
            _this.$message({
              type: 'success',
              message: '开始展示!',
              duration: 800
            });
          }else if(event.data==='提问'){
            _this.questionNum++;
          }
          else if(event.data.slice(0,1)==='请') {
            _this.questionNum--;
            _this.$alert(event.data, '提示', {
              confirmButtonText: '确定',
              callback: action => {
                _this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }else console.log(event.data);
        });
        this.websock.onerror = this.webSocketOnError;
        this.websock.onclose = this.webSocketClose;
      },
      question(){
        let _this=this;
        this.$axios({
          method:'post',
          url:'/seminar/klass/'+this.$route.query.klassSeminarId+'/'+this.teams[this.nowPreOrder].attendanceId+'/question'
        }).then(response=>{
          if(response===true){
            _this.$message({
              type: 'success',
              message: '发送提问成功!',
              duration: 800
            });
            _this.webSocketSend("提问");
          }else{
            _this.$message({
              type: 'error',
              message: '发送提问失败!',
              duration: 800
            });
          }
        })
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
<style>
  .el-container {
    height: 95vh;
  }
  .Div{
    width: 100%;
    text-align: left;
    margin:20px;
  }
  .title{
    font-size: 20px;
    display: inline-block;
    width: 30%;
  }
  .now{
    font-size: 20px;
    text-align: center;
    display: inline-block;
    width: 60%;
    color: #F56C6C;
  }
  .notNow{
    font-size: 20px;
    text-align: center;
    display: inline-block;
    width: 60%;
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
