<template>
  <div id="page">
    <div class="header">
      <span>个人信息综合管理平台</span>
      <button class="el-icon-circle-close-outline exitButt" style="background-color:#efefef">&nbsp;退出系统</button>
    </div>
    <div class="main">
      <p class="title">选择课程</p>
      <el-table
        :data="courses">
        <el-table-column
          prop="courseName"
          align="center">
        </el-table-column>
        <el-table-column align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="enter(scope.$index, scope.row)">
              进入
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
      name: "coursePage",
      data() {
        return {
          courses: [],
        }
      },
      created(){
        var _this=this;
        if(this.$store.state.role=='teacher') {
          this.$axios({
            method: 'get',
            url: '/getCourse/teacher '
          }).then(response => {
            _this.courses = response;
          })
        }
        else if(this.$store.state.role=='student'){
          this.$axios({
            method: 'get',
            url: '/getCourse/student'
          }).then(response => {
            _this.courses = response;
          })
        }
      },
      methods:{
        enter(index,row){
         // console.log(index, row);
          this.$router.push({path:"/PCseminarIndex",
            query:{
              courseId:row.courseId,
              courseName:row.courseName,
            }})
        },
        }
    }
</script>

<style scoped>
  .header{
    padding-left: 50px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #409EFF;
    background-color:#efefef;
    text-align: left;
  }
  .exitButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    background-color:#efefef;
    right: 50px;
  }
  .main{
    padding: 0px 50px;
  }
  .title{
    font-weight: bold;
    color: #409EFF;
    font-size: 25px;
    padding: 20px 50px;
    text-align: left;
    border: solid 1px #DCDFE6;
  }
  .el-table{
    font-size: 25px;
    width: 80%;
    margin: 0 auto;
  }

</style>
