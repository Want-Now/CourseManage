<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{courseName}}-讨论课</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <div class="rowP"><p class="title">轮次:</p><p class="content">第{{seminarVO.roundSerial}}轮</p></div>
      <div class="rowP"><p class="title">主题:</p><p class="content">{{seminarVO.seminarName}}</p></div>
      <div class="rowP"><p class="title">课次序号:</p><p class="content">{{seminarVO.seminarSerial}}</p></div>
      <div class="rowP"><p class="title1">要求:</p><p class="content1">{{seminarVO.introduction}}</p></div>
      <div class="rowP" v-if="attendanceStatus"><p class="title">报名:</p><p class="content">{{grade}}级{{seminarVO.klassSerial}}_{{teamSerial}}组&nbsp;第{{teamOrder}}组展示</p></div>
      <div class="rowP"><p class="title">课程情况：</p>
        <p class="content2" v-if="seminarVO.status=='0'">未开始</p>
        <p class="content2" v-if="seminarVO.status=='1'">正在进行</p>
        <p class="content2" v-if="seminarVO.status=='2'">已完成</p>
        <p class="viewInfo" @click="viewDe()">查看信息</p></div>
      <div class="rowP" v-if="attendanceStatus"><p class="title">ppt:</p><p class="content" v-if="pptStatus">已提交</p><p class="content" v-if="!pptStatus">未提交</p></div>
      <div class="rowP" v-if="attendanceStatus && seminarVO.status=='2'"><p class="title">书面报告:</p><p class="content" >{{reportStatus}}</p></div>
      <br>
      <el-card v-if="seminarVO.status=='0'">
        <div>报名开始时间：<span style="color:red">{{seminarVO.enrollStartTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
        <div>报名截止时间：<span style="color:red">{{seminarVO.enrollEndTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
      </el-card>
    </el-main>
    <br>
    <br>
    <el-footer style="height:10px;">
      <el-form v-if="seminarVO.status=='0'&&!attendanceStatus">
        <el-form-item>
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="viewDe">报名</el-button>
        </el-form-item>
    </el-form>
      <el-form v-if="seminarVO.status=='0'&&attendanceStatus">
        <el-form-item>
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="signSem">修改报名</el-button>
        </el-form-item>
      </el-form>
      <el-form v-if="seminarVO.status!='2'&&attendanceStatus">
        <el-form-item v-if="!pptStatus">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="dialogVisible=true">PPT提交</el-button>
      </el-form-item>
        <el-form-item v-if="pptStatus">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="dialogVisible=true">重新提交PPT</el-button>
      </el-form-item>
    </el-form>
      <el-form v-if="seminarVO.status=='1'">
      <el-form-item>
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="enterSem">进入讨论课</el-button>
      </el-form-item>
    </el-form>
      <el-form v-if="seminarVO.status=='2'&&attendanceStatus">
        <el-form-item v-if="reportStatus!='已提交'&&submitStatus">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="RdialogVisible = true">书面报告提交</el-button>
        </el-form-item>
        <el-form-item v-if="reportStatus=='已提交'&&submitStatus">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="RdialogVisible = true">重新提交书面报告</el-button>
        </el-form-item>
    </el-form>
    </el-footer>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%">
      <input type="file" @change="getFile($event)">
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit($event)">上传</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="RdialogVisible"
      width="80%">
      <input type="file" @change="RgetFile($event)">
      <span slot="footer" class="dialog-footer">
    <el-button @click="RdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Rsubmit($event)">上传</el-button>
  </span>
    </el-dialog>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible:false,
        RdialogVisible:false,
        //各种状态
        //status:'0',
        pptStatus:false,
        reportStatus:false,
        submitStatus:false,
        attendanceStatus:true,
       //课程基本信息
        seminarVO:{
          klassSerial:'',  //2-4的2
          seminarName:'',
          introduction:'',
          status:'',
          seminarSerial:'', //课次序号
          roundSerial:'', //轮次序号
          reportDDL:'',
          enrollStartTime:'',
          enrollEndTime:'',
        },
        //其他信息
        attendanceId:'',
        grade:'',
        courseName:'',
        teamId:'',
        klassSeminarId:'',
        teamOrder:'',
        teamSerial:'', //2-4的4
      }
    },
    created(){
      this.courseName=this.$route.query.courseName;
      this.klassSeminarId=this.$route.query.klassSeminarId;
      var _this = this;
      console.log(this.klassSeminarId);
      this.$axios({
        method: 'get',
        url: "/seminar/"+this.$route.query.klassSeminarId+"/team/seminarInfo",
      }).then(function (response) {
        console.log(response);
        _this.attendanceStatus=response.attendanceStatus;
        _this.seminarVO=response.seminarVO;
        _this.teamSerial=response.teamSerial;
        _this.pptStatus=response.pptStatus;
        _this.reportStatus=response.reportStatus;
        _this.submitStatus=response.submitStatus;
        _this.attendance=response.attendance;
        _this.teamOrder=response.teamOrder
        _this.attendanceId=response.attendanceId;
        _this.grade=response.grade;
        console.log(response.grade);
      })
    },
    methods:{
      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      submit: function (event) {
        var that=this;
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        this.$axios.post('attendance/'+this.attendanceId+'/powerPoint', formData)
          .then(function (response) {
            alert("上传成功");
            that.$router.push('/emptyPage');
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
            that.dialogVisible=false;
          });
      },
      RgetFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      Rsubmit: function (event) {
        var that=this;
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        this.$axios.post('attendance/'+this.attendanceId+'/report', formData)
          .then(function (response) {
            alert("上传成功");
            that.$router.push('/emptyPage');
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
            that.RdialogVisible=false;
          });
      },
      enterSem(){
        this.$router.push({path:"/studentSeminarPre",
          query:{
            klassSeminarId:this.klassSeminarId,
            seminarName:this.seminarName,
            courseName:this.courseName,
          }})
      },
      viewDe(){
        this.$router.push({path:"/studentViewPpt",
          query:{
            klassSeminarId:this.klassSeminarId,
            status:this.seminarVO.status,
            courseName:this.courseName,
            attendanceId:this.attendanceId,
          }})
      },
      signSem(){
        this.$router.push({path:"/studentViewPpt",
          query:{
            klassSeminarId:this.klassSeminarId,
            status:this.seminarVO.status,
            courseName:this.courseName,
            attendanceId:this.attendanceId,
          }})
      },

    }
  }
</script>
<style scoped>
  .el-container{
    height: 90vh;
  }
  .bottButt{
    height: 40%;
    width: 85vw;
    font-size: 18px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
  }
  .bottButt:hover{
    background-color: #8084b1;
    border-color: #8084b1;
    color: white;
  }
  .bottButt:focus{
    background-color: #8084b1;
    border-color: #8084b1;
    color: white;
  }
  .rowP{
    border-top: solid 1px #C0C4CC;
    vertical-align: middle;
    text-align: left;
  }
  .title{
    height: 100%;
    display: inline-block;
    width: 30%;
    font-size: 18px;
    color: #494e8f;
    text-align: left;
    line-height: 100%;
    margin: 0px;
  }
  .title1{
    height: 100%;
    width: 30%;
    font-size: 18px;
    color: #494e8f;
    text-align: left;
    line-height: 100%;
  }
  .content{
    display: inline-block;
    width: 70%;
    font-size: 18px;
    vertical-align: middle;
    text-align: center;
  }
  .content1{
    display: inline-block;
    font-size: 18px;
    vertical-align: middle;
    margin-top: 0;
  }
  .content2{
    display: inline-block;
    width: 30%;
    font-size: 18px;
    vertical-align: middle;
  }
  .viewInfo{
    display: inline-block;
    color: #494e8f;
    width: 30%;
    font-size: 18px;
    text-align: right;
    text-decoration: underline;
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
