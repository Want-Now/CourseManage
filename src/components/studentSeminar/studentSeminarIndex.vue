<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>{{courseName}}-讨论课</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main style="background-color: #ffffff;border-bottom:1px solid #000">
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div>轮次：</div></el-col>
        <el-col :span="16"><div style="color:#494e8e">第{{roundSerial}}轮</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div >主题：</div></el-col>
        <el-col :span="16"><div>{{seminarName}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div>课次序号：</div></el-col>
        <el-col :span="16"><div >{{seminarSerial}}</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"> <div>要求：</div></el-col>
        <el-col :span="16" style:=" width:50%;"><div>{{introduction}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1"  v-if="attendance">
        <el-col :span="8"><div >报名：</div></el-col>
        <el-col :span="8" v-if="status=='0'"><div>{{teamName}}</div></el-col>
        <el-col :span="16"><div>{{teamName}}</div></el-col>
        <el-col :span="8" v-if="status=='0'"><div style="color:red"><u>修改报名</u></div></el-col>
      </el-row>
      <el-row v-if="attendance">
        <el-col :span="8"> <div>ppt：</div></el-col>
        <el-col :span="8" style:=" width:50%;"><div v-if="status!='2'&&!pptStatus">未提交</div><div v-if="status!='2'&&pptStatus">已提交</div></el-col>
        <el-col :span="8" style:=" width:50%;"><div v-if="status!='2'&&pptStatus">重新提交</div></el-col>
        <el-col :span="16" style:=" width:50%;"><div v-if="status=='2'&&pptStatus">已提交</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1"  v-if="attendance">
        <el-col :span="8" ><div>书面报告：</div></el-col>
        <el-col :span="16" v-if="!reportStatus"><div style="color:red"><u>未提交</u><span style="font-size:80%">
          <br>&nbsp;&nbsp;&nbsp;距离截止时间：{{reportDDL}}</span></div></el-col>
        <el-col :span="16" v-if="reportStatus"><div>已提交</div></el-col>
      </el-row>
      </el-row>
      <el-row v-if="attendance">
        <el-col :span="8"><div>课程情况：</div></el-col>
        <el-col :span="8" v-if="status=='2'"><div>已完成</div></el-col>
        <el-col :span="8" v-if="status=='0'"><div>未开始</div></el-col>
        <el-col :span="8" v-if="status=='1'"><div>进行中</div></el-col>
        <el-col :span="8"><div style="color:#494e8e"><u>报名情况</u></div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1" v-if="!attendance">
        <el-col :span="8"><div>课程情况：</div></el-col>
        <el-col :span="8" v-if="status=='2'"><div>已完成</div></el-col>
        <el-col :span="8" v-if="status=='0'"><div>未开始</div></el-col>
        <el-col :span="8" v-if="status=='1'"><div>进行中</div></el-col>
        <el-col :span="8"><div style="color:#494e8e"><u>报名情况</u></div></el-col>
      </el-row>
    </el-main>
    <br>
    <br>
    <br>
    <br>
    <el-form v-if="status=='0'&&!attendance">
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="">报名</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="status=='0'&&attendance">
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="">ppt提交</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="status=='1'">
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="enterSe">进入讨论课</el-button>
      </el-form-item>
    </el-form>
    <el-form v-if="status=='2'&&attendance">
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="viewScore">查看成绩</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        seminarSerial:'',
        roundSerial:'',
        introduction:'',
        seminarName:'',
        seminarId:'',
        klassId:'',
        klassName:'',
        courseName:'',
        teamName:"1-3",
        visible2: false,
        status:'2',
        attendance:'1',
        pptStatus:'1',
        reportStatus:'',
        reportDDL:'13小时'
      }
    },
    methods:{
      enterSe(){
        this.$router.push({path:"/studentSeminarPre",
          query:{
            klassSeminarId:this.klassSeminarId,
            seminarName:this.seminarName,
            courseName:this.courseName,
          }})
      },
      viewScore()
      {
        this.$router.push({path:"/studentSeminarViewScore",
          query:{
            klassSeminarId:this.klassSeminarId,
            seminarName:this.seminarName,
            courseName:this.courseName,
          }})
      }

    }
  }
</script>
<style scoped>
  .el-container {
    margin-bottom: 40px;
    color: #333;
    background-color:white;
  }
  .el-main{

    font-size:100%;

  }
  .el-col{
    font-size:120%;
    height: 400%;
    line-height: 200%;
    margin-left: 0px;
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
