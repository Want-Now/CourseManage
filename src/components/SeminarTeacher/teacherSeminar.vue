<template>
  <el-container>
    <el-header id="header">
      <p>{{headerLocation}}</p>
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
      <el-menu
        text-color="#595959"
        active-text-color="#494e8f">
        <el-menu-item v-for="(item,index) in courseList" :key="item.courseId" :index="String(index)" @click="goCourseSeminar(item)">
          <i class="el-icon-document"></i>
          <span class="titleSpan">{{item.courseName}}</span>
        </el-menu-item>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name:"teacherSeminar",
    data(){
      return{
        headerLocation: "讨论课",
        courseList:[],
      }
    },
    created(){
      let _this=this;
      this.$axios({
        method:'get',
        url:'/getCourse/teacher',
        params:{
          teacherId:3  //需要更改
        }
      }).then(
        response=>{
          _this.courseList=response.data;
        }
      )
    },
    methods:{
      goCourseSeminar(item){
        this.$router.push({path:'/TeacherCourseSeminar',query:{courseId:item.courseId,courseName:item.courseName}});
      }
    }
  }
</script>
<style>
  .el-menu-item{
    text-align: left;
  }
  .titleSpan{
    font-size: 20px;
  }

  .el-icon-document{
    font-size: 20px;
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
