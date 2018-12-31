<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back"></el-button>
      <p>{{courseName}}-讨论课</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main style="background-color: #ffffff;border-bottom:1px solid #000">
      <el-row style="background-color:#f1f1f1;">
        <div style="float:left;padding-left:2%;">轮次：</div>
        <div style="color:#95c764">第{{roundSerial}}轮</div>
      </el-row>
      <el-row>
        <div style="float:left;padding-left:2%">主题：</div>
        <div>{{seminarName}}</div>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <div style="float:left;padding-left:2%;">课次序号：</div>
        <div>{{seminarSerial}}</div>
      </el-row>
      <el-row style="height:auto;margin:0 auto;">
        <div style="float:left;padding-left:2%">要求：</div>
       <div style="width:80%;float:right">{{introduction}}</div>
      </el-row>
      <el-row style="background-color:#f1f1f1;">
        <div style="float:right;color:#95c764;" @click="viewD"><u>查看信息</u></div>
        <div style="float:left;padding-left:2%">课程情况：</div>
        <div v-if="status=='0'"> 未开始</div>
        <div v-if="status=='1'">正在进行</div>
        <div v-if="status=='2'">已完成</div>
      </el-row>
    </el-main>
    <br>
    <br>
    <el-form v-if="status=='2'">
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="Report" >书面报告</el-button>
        <el-button style="width:100%" @click="checkScore" >查看成绩</el-button>
      </el-form-item>
    </el-form>
    <el-form v-else-if="status=='0'">
      <el-form-item style="padding-bottom: 20px;">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="starSe">开始讨论课</el-button>
          <el-button style="width:100%"@click="modify">修改讨论课</el-button>
      </el-form-item>
    </el-form>
    <el-form v-else-if="status=='1'">
      <el-form-item style="padding-bottom: 20px;">
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="enterSe">进入讨论课</el-button>
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
        status:"",
        seminarId:'',
        klassId:'',
        klassName:'',
        courseName:'',
      }
    },
    mounted() {
      this.changeIcon()
      this.getParams ()
    },

    methods: {
      back() {
        this.$router.go(-1);
      },
      getParams() {
        const sid = this.$route.query.seminarId
        const kcla = this.$route.query.klassId
        const kln = this.$route.query.courseName
        this.seminarId = sid
        this.klassId = kcla
        this.courseName = kln
      },
      modify(){
        this.$router.push({path:"/modifySeminar",
          query:{
            courseName:this.courseName,
            seminarName:this.seminarName,
            klassSeminarId:this.klassSeminarId
          }})
      },
      viewD(){
        this.$router.push({path:"/Seminarppt",
          query:{
            courseName:this.courseName,
            seminarName:this.seminarName,
            klassSeminarId:this.klassSeminarId
          }})
      },
      enterSe(){
        this.$router.push({path:"/SeminarProceed",
          query:{
            klassSeminarId:this.klassSeminarId,
            seminarName:this.seminarName,
            courseName:this.courseName,
          }})
      },
      starSe(){
        var that=this;
        this.$axios({
          method:'post',
          url:"http://ghctcourse.natapp1.cc/presentation/{klassSeminarId}",
          data:{
            klassSeminarId:this.klassSeminarId,
          }
        }).then()
        {
          this.$router.push({path:"/SeminarProceed",
            query:{
              klassSeminar:this.klassSeminar,
              seminarName:this.seminarName,
              courseName:this.courseName,
              }})
        }
      },
      Report(){
        this.$router.push({path:"/ViewReportScore",
          query:{
            courseName:this.courseName,
            seminarName:this.seminarName,
            klassSeminarId:this.klassSeminarId
          }})
      },
      checkScore(){
        this.$router.push({path:"/ViewScore",
          query:{
            courseName:this.courseName,
            seminarName:this.seminarName,
            klassSeminarId:this.klassSeminarId
          }})
      },
      changeIcon(){
        var that = this;
        this.$axios({
          method: 'get',
          url: "http://ghctcourse.natapp1.cc/seminar/5/klass/21",
          data: {
          }
        }).then(function (response) {
          that.seminarSerial = response.data.seminarSerial,
            that.introduction = response.data.introduction,
            that.seminarName = response.data.seminarName,
            that.status = response.data.status
        })
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
  .el-row{
    height:auto;
    margin:0 auto;
    height:30px;
    line-height:30px;
  }
  .el-col{
    font-size:100%;
    width:30%;

    line-height: 200%;
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
