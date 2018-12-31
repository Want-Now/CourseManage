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
      <el-table :data="courseData"  >
        <el-table-column label="当前课程">
          <template slot-scope="scope">
            <i class="el-icon-document"></i>
          </template>
        </el-table-column>
        <el-table-column
          prop="courseName">
        </el-table-column>
        <el-table-column >
          <template slot-scope="scope">
            <el-button size="small" @click="goCourseSeminar(scope.$index, scope.row)">进入</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name:"teacherSeminar",
    data(){
      return{
        headerLocation: "讨论课",
        teacherId:'',
        courseData:[],
      }
    },
    created(){
      this.seminar();
    },
    methods:{
      seminar() {
        var _this = this;
        this.$axios({
          method: 'get',
          url: "http://ghctcourse.natapp1.cc/getCourse/teacher",
          params:{
            teacherId:3
          }
        }).then(function (response) {
          console.log(response.data);
          _this.courseData=response.data;
        })
      },
      goCourseSeminar(index,row){
        console.log(index, row);
        this.$router.push({path:"/teacherCourseSeminar",
          query:{
           courseId:row.courseId,
            courseName:row.courseName
          }})
      }
  },
  }
</script>
<style scoped>
  .el-container {
    margin-bottom: 40px;
    color: #333;
    background-color:white;
  }
  .el-col{
    font-size:100%;
    width:30%;
    height: 400%;
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
