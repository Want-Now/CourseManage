<template>
  <el-container>
    <el-header>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>

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
        <el-menu-item index="1" @click="">
          <i class="el-icon-document"></i>
          我的课程
        </el-menu-item>
        <el-menu-item index="2" @click="">
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
        studentName:"黄明明",
        studentId:"242324323435455",
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
</style>
