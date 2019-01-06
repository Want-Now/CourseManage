<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>共享设置</p>
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
      <el-card v-for="course in shareCourses" :key="course.courseId">
        <div slot="header">
          {{course.otherCourseName}}
          ({{course.otherTeacherName}}老师)
        </div>
        <el-row class="content-row">
          <el-col class="row-col">
            <span class="col-title">共享类型：</span>
          </el-col>
          <el-col class="row-col">
            <span class="col-content">{{course.shareType}}</span>
          </el-col>
        </el-row>
        <el-row class="content-row">
          <el-col class="row-col">
            <span class="col-title">共享情况：</span>
          </el-col>
          <el-col class="row-col">
            <span class="col-content">{{course.myCourseType}}</span>
          </el-col>
        </el-row>
        <el-button class="cancelShare" type="danger" size="mini" @click="concel(course.shareId,course.shareType)">取消共享</el-button>
      </el-card>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="goNewShare()">新增共享</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        shareCourses:[
          {}
        ],
        type:'',
      };
    },
    created() {
      var _this = this;
      this.$axios({
        method: 'get',
        url: '/share/'+this.$route.query.courseId+'/successShare '
        }).then(response => {
          _this.shareCourses = response;
        })
      },
      methods:{
        goNewShare()
        {
          this.$router.push({path:'/newShare',query:{courseId:this.$route.query.courseId}})
        },
        concel(shareId,shareType) {
          if (shareType=='共享分组') this.type=1;
          else this.type=2;
          var that=this;
          this.$axios({
            method: 'delete',
            url:'/share/deleteShare/'+shareId,
            params:{
              shareType: that.type}
          }).then(function (response){
            if(response===true){
              alert("取消成功");
              window.location.reload();
            } else {
              alert("取消失败");
            }})
        }
      }
    }
</script>
<style>
  .el-container {
    height: 98vh;
  }
  .courseSpan{

  }
  .text {
    font-size: 100%;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }


  .cancelShare{
    margin-top: 20px;
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
  .row-col {
    width: 50%;
  }
  .col-title{
    float:left;
    font-size:17px;
    color:#494e8f;
  }
  .col-content{
    font-size:17px;
  }
</style>

