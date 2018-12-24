<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
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
    <el-main style="font-size:200%">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="第一轮" name="1" style="color:cornflowerblue">
          <el-row style="font-size:150%;background-color:#eaedf4;border-bottom:1px solid #eaedf4;border-top:1px solid #fff">
            <el-col :span="24"><div style="float:left">&nbsp;&nbsp;1</div><div style="text-align:center">{{topic1}}</div></el-col>

          </el-row>
          <el-row style="font-size:150%;background-color:#eaedf4;border-bottom:1px solid #eaedf4;border-top:1px solid #fff">
            <el-col :span="24"><div style="float:left">&nbsp;&nbsp;2</div><div style="text-align:center">{{topic2}}</div></el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="第二轮" name="2"></el-collapse-item>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation: "OOAD",
        topic1:"业务流程分析",
        topic2:"界面原型设计",
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
</style>

