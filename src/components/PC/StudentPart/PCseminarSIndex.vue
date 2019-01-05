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
        <el-menu-item index="1" @click="chosecourse()">
          <i class="el-icon-news"></i>选择课程
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
      <p class="title">{{courseName}}—讨论课</p>
      <br>
      <br>
      <div style="padding-left:15%;">
        <el-card class="box-card" size="large" style="padding-left:5%;" v-for="round in rounds" :key="round.roundId">
          <div slot="header" class="clearfix">
            <span style="font-size:35px;color:#409dfe;font-weight:bold;float: left; padding: 3px 0">第{{round[0].roundSerial}}轮讨论课</span>
          </div>
          <div>
            <el-row v-for="o in length1":key="o" style="height:80px;line-height: 80px">
              <el-col :span="12"><div style="font-size:30px;float:left;padding-left:60px;">{{round[o].seminarName}}</div></el-col>
              <el-col :span="12" style="padding-left:100px;"><el-button size="large;" @click="enter(round[o].seminarId)">进入</el-button></el-col>
            </el-row>
            <br>
            <br>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: "PCseminarSIndex",
    data() {
      return {
        rounds:[],
        seminars:[],
        courseName:'',
        courseId:'',
        length1:0,
        o:1,
      }
    },
    created(){
      this.courseName=this.$route.query.courseName
      this.getround()
    },
    methods: {
      getround() {
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/course/'+this.$route.query.courseId+'/pc'
        }).then(response => {
          _this.rounds = response;
          //console.log(_this.rounds);
          _this.length1= response[0].length-1;
          //console.log( _this.length1);
        })
      },
      enter(seminarId){
        this.$router.push({path:'/StuOneSeminar',
          query:{
            seminarId:seminarId,
            courseName:this.$route.query.courseName,
            courseId:this.$route.query.courseId
          }
        })
      },
      Stu(){
        this.$router.push({path:'/stuViewScore',
          query:{
            courseId:this.$route.query.courseId,
            courseName:this.$route.query.courseName
          }
        })
      },
      seminarIndex(){
        this.$router.push({path:'/PCseminarSIndex',
          query:{
            courseId:this.$route.query.courseId,
            courseName:this.$route.query.courseName
          }
        })
      },
      importScore(){
        this.$router.push({path:'/stuViewScore',
          query:{
            courseId:this.$route.query.courseId,
            courseName:this.$route.query.courseName
          }
        })
      },
    }
  }
</script>
<style scoped>
  .el-col{
    height:50px;
    line-height: 50px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .main{
    margin-left: 300px;
    padding: 0 50px;
  }
  .box-card {
    width: 80%;
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
