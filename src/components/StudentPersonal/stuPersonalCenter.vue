<template>
  <el-container>
    <el-header>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item @click="goSeminarPage()">讨论课</el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-row :span="24" class="personInfo">
        <p style="position: absolute;left: 20px;top: 15px;">{{studentName}}</p>
        <p style="position: absolute;left: 20px;top: 55px;">{{studentId}}</p>
      </el-row>
      <el-menu
        background-color="#d3d4e4"
        text-color="#595959"
        active-text-color="#494e8f">
        <el-menu-item index="1" @click="goCoursePage()">
          <i class="el-icon-document"></i>
          我的课程
        </el-menu-item>
        <el-menu-item index="2" @click="goStudentSet()">
          <i class="el-icon-edit"></i>
          账户与设置
        </el-menu-item>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "StuPersonalCenter",
    data(){
      return{
        headerLocation:"个人中心",
        studentName:"",
        studentId:"",
      }
    },
    created() {
      let _this=this;
      this.$axios({
        method:'get',
        url:'/user/index',               //url
      }).then(function (response) {
        _this.studentName=response.name;
        _this.studentId=response.account;
      })
        .catch(
          function (error) {
            console.log(error);
          }
        );
    },
    methods:{
      goStudentSet(){
        this.$router.push('/StuSetting');
      },
      goCoursePage(){
        this.$router.push('/StudentCourse');
      },
      goSeminarPage(){
        this.$router.push('/StudentSeminar');
      },
      goe(){
        this.$router.push('/emptyPage');
      }

    }


  }
</script>

<style scoped>
  .el-dropdown{
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
  .personInfo{
    height: 120px;
    border: solid #cccccc 1px;
    border-radius: 5px;
    vertical-align: middle;

  }
  .el-menu{
    margin-top: 20px;
  }
  .el-menu-item{
    text-align: left;
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
