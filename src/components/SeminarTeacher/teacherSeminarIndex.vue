<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back"></el-button>
      <p>{{courseName}}-讨论课</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <div class="rowP"><p class="title">轮次:</p><p class="content">第{{roundSerial}}轮</p></div>
      <div class="rowP"><p class="title">主题:</p><p class="content">{{seminarName}}</p></div>
      <div class="rowP"><p class="title">课次序号:</p><p class="content">{{seminarSerial}}</p></div>
      <div class="rowP"><p class="title1">要求:</p><p class="content1">{{introduction}}</p></div>
      <div class="rowP"><p class="title">课程情况：</p>
        <p class="content2" v-if="status=='0'">未开始</p>
        <p class="content2" v-if="status=='1'">正在进行</p>
        <p class="content2" v-if="status=='2'">已完成</p>
        <p class="viewInfo" @click="viewD()">查看信息</p>
      </div>

    </el-main>
    <el-footer>
      <div v-if="status=='2'">
        <p><el-button class="bottButt" @click="checkScore">查看成绩</el-button></p>
        <p><el-button class="bottButt" type="primary" @click="Report" >书面报告</el-button></p>
      </div>

      <div v-else-if="status=='0'">
        <p><el-button class="bottButt" type="primary" @click="starSe">开始讨论课</el-button></p>
        <p><el-button class="bottButt" @click="modify">修改讨论课</el-button></p>
      </div>
      <div v-else-if="status=='1'">
        <el-button class="bottButt" type="primary" @click="enterSe">进入讨论课</el-button>
      </div>
    </el-footer>
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
    created() {
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
        this.roundSerial=this.$route.query.roundSerial
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
          url:"/presentation/{klassSeminarId}",
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
          url: "/seminar/"+this.$route.query.seminarId+"/klass/"+this.$route.query.klassId,
        }).then(function (response) {
          that.seminarSerial = response.seminarSerial,
            that.introduction = response.introduction,
            that.seminarName = response.seminarName,
            that.status = response.status
        })
      }
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
