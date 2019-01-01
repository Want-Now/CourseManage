<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>课程管理</p>
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
      <el-menu>
        <el-submenu v-for="(item,index) in courseList" :key="item.courseId" :index="(index+'')">
          <template slot="title">{{item.courseName}}</template>
          <el-menu-item :index="index+'-1'" @click="goStudentScore(item)">学生成绩
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-2'" @click="goTeamPage(item)">学生组队
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-3'" @click="goCourseInfo(item)">课程信息
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-4'" @click="goKlassInfo(item)">班级信息
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-5'" @click="goSeminarSetting(item)">讨论课设置
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-6'" @click="goShareSetting(item)">共享设置
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" v-if="role==='student'"><i class="el-icon-plus"></i>新建课程</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        courseList:[

        ],
      };
    },
    computed:{
      role(){
        return this.$store.state.role
      }
    },
    created(){
      var _this=this;
      this.$axios({
        method:'get',
        url:'/getCourse/teacher',
      }).then(function (response) {
        _this.courseList=response;
      }).catch(error=>{
        console.log(error.massage);
        console.log(error.data.massage);
      });
    },
    methods: {
      back(){
        this.$router.go(-1);
      },
      handleChange(val) {
        console.log(val);
      },
      goStudentScore(item){

      },
      goTeamPage(item){
        // console.log(item.courseId);
        this.$router.push({path:'/TeamPage',query:{courseId:item.courseId,courseName:item.courseName}});
      },
      goCourseInfo(item){
        this.$router.push({path:'/CourseInfo',query:{courseId:item.courseId,courseName:item.courseName}});
      },
      goKlassInfo(item){
        this.$router.push({path:'/ClassMessage',query:{courseId:item.courseId,courseName:item.courseName}});
      },
      goSeminarSetting(item){
        this.$router.push({path:'/TeacherCourseSeminar',query:{courseId:item.courseId,courseName:item.courseName}})
      },
      goShareSetting(item){
        this.$router.push({path:'/ShareSeting',query:{courseId:item.courseId,courseName:item.courseName}})
      }
    }
  }
</script>
<style>
  .el-container {
    height: 90vh;
  }

  .el-submenu{
    text-align: left;
  }
  .el-menu-item i{
    position: absolute;
    right: 10px;
    top:15px;
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
  .el-icon-plus{
    font-size: 25px;
  }
</style>

