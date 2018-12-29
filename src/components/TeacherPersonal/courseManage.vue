<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>课程管理</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-menu>
        <el-submenu v-for="(item,index) in courseList" :key="item.courseId" :index="(index+'')">
          <template slot="title">{{item.courseName}}</template>
          <el-menu-item :index="index+'-1'" @click="">学生成绩
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-2'" @click="">学生组队
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-3'" @click="">课程信息
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-4'" @click="">班级信息
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-5'" @click="">讨论课设置
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item :index="index+'-6'" @click="">共享设置
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-main>
    <el-footer>
      <el-button class="bottomButt"><i class="el-icon-plus"></i>新建课程</el-button>
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
    created(){
      this.$axios({
        method:'get',
        url:'http://ghctcourse.natapp1.cc/getCourse/teacher',
        data:{
          teacherId:2700
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      });
    },
    methods: {
      handleChange(val) {
        console.log(val);
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

