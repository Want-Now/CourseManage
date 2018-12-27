<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>学生成绩</p>
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
    <hr>
    <el-collapse v-model="activeNames" @change="handleChange">
      <hr>
      <el-collapse-item title="第一轮" name="1">
        <el-collapse-item style="padding-left:5%; font-size:150%;" title="2-1" name="1-1">
          <div style="border:1px solid white;background-color:#f1f1f1">
            <br>
            <div style="text-align: center;font-size:120%;color:green;">用例分析 &nbsp;&nbsp;&nbsp;</div>
            <br>
            <el-row>
              <el-col :span="8">展示：5.0</el-col>
              <el-col :span="8">提问：4.5</el-col>
              <el-col :span="8">报告：5.0</el-col>
            </el-row>
            <div style="text-align: center;font-size:120%;color:green;">总成绩 &nbsp;&nbsp;&nbsp;</div>
            <br>
            <el-row>
              <el-col :span="8">展示：5.0</el-col>
              <el-col :span="8">提问：4.5</el-col>
              <el-col :span="8">报告：5.0</el-col>
            </el-row>
            <br>
          </div>   <br>
            <el-button style="background-color:white;" size="small" type="" @click="">修改成绩</el-button>
            <br>
          </div>
          <div style="border:1px solid white;background-color:#f1f1f1">
            <br>
            <div style="text-align: center;font-size:120%;color:green;">业务流程 &nbsp;&nbsp;&nbsp;</div>
            <br>
            <el-row>
              <el-col :span="8">展示：5.0</el-col>
              <el-col :span="8">提问：4.5</el-col>
              <el-col :span="8">报告：5.0</el-col>
            </el-row>
            <br>
            <el-button style="background-color:white"size="small" type="" @click="">修改成绩</el-button>
          </div>
          <div style="border:1px solid white;background-color:#f1f1f1">
            <br>
            <div style="text-align: center;font-size:120%;color:green;">总成绩 &nbsp;&nbsp;&nbsp;</div>
            <br>
            <el-row>
              <el-col :span="8">展示：5.0</el-col>
              <el-col :span="8">提问：4.5</el-col>
              <el-col :span="8">报告：5.0</el-col>
            </el-row>
            <br>
          </div>
        </el-collapse-item>

        <el-collapse-item style="padding-left:5%" title="2-2" name="1-2"></el-collapse-item>

      </el-collapse-item>
      <el-collapse-item title="第二轮" name="2">

      </el-collapse-item>
    </el-collapse>
    <br>
    <br>
    <el-form>
      <el-form-item>
        <router-link to="Create_Seminar">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')">新建讨论课</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
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

</style>

