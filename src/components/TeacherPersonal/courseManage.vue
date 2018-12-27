<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>OOAD</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <hr>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="OOAD(主)" name="1">
        <div style="background-color: #f1f1f1;border-bottom:1px solid white;font-size:120%;">学生成绩</div>
        <div  style="background-color: #f1f1f1;border-bottom:1px solid white;font-size:120%;">学生组队</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">课程信息</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">班级信息</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">讨论课设置</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">共享设置</div>
      </el-collapse-item>
      <el-collapse-item title="J2EE" name="2">
        <div style="background-color: #f1f1f1;border-bottom:1px solid white;font-size:120%;">学生成绩</div>
        <div  style="background-color: #f1f1f1;border-bottom:1px solid white;font-size:120%;">学生组队</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">课程信息</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">班级信息</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">讨论课设置</div>
        <div  style="background-color: #f1f1f1;border-bottom: 1px solid white;font-size:120%;">共享设置</div>
      </el-collapse-item>
    </el-collapse>

    <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')"><i class="el-icon-plus"></i>&nbsp;新建课程</el-button>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
      };
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
    margin-bottom: 40px;
    color: #333;
    background-color:white;
  }
  . hehead {
    margin: 0px;

    padding: 0px;

    background-color: #494e8f;

    color: white;

    font-size: 20px;

    line-height: 22px;

    text-align: center;
  }
</style>

