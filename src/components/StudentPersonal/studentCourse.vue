<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
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
      <el-menu
        >
        <el-submenu index="1">
          <template slot="title">OOAD</template>
          <el-menu-item index="1-1">课程信息
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item index="1-2">我的成绩
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item index="1-3">我的组队
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">J2EE</template>
          <el-menu-item index="2-1">课程信息
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item index="2-2">我的成绩
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
          <el-menu-item index="2-3">我的组队
            <i class="el-icon-arrow-right"></i>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "studentCourse",
    data(){
      return{
        headerLocation:'我的课程',
        courseList:['1']
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
  .el-submenu{
    text-align: left;
  }
  .el-menu-item i{
    position: absolute;
    right: 10px;
    top:15px;
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
