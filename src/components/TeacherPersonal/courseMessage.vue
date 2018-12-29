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
    <div style="height:20px;  font-size: 120%;line-height: 10px; text-align: center;border-bottom:1px solid #f5f6f7;">课程信息</div>
    <el-form size="small">
      <el-form-item label="成绩计算规则：">
        <br>
        <el-row>
          <el-col :span="8">展示：50%</el-col>
          <el-col :span="8">提问：20%</el-col>
          <el-col :span="8">报告：30%</el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="小组人数要求：">
        <div style="margin-right:5%;">6-8</div>
      </el-form-item>
      <el-form-item label="组队开始时间：">
        <div style="margin-right:5%;">XXX</div>
      </el-form-item>
      <el-form-item label="组队结束时间：">
        <div style="margin-right:5%;">XXX</div>
      </el-form-item>
      <el-form-item label="组员性别要求：">
        <div style="margin-right:5%;">XXX</div>
      </el-form-item>
      <el-form-item label="组员星座要求：">
        <div style="margin-right:5%;">XXX</div>
      </el-form-item>
      <el-form-item label="与其冲突课程：">
        <div style="margin-right:5%;">XXX</div>
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item>
        <router-link to="Create_Seminar">
          <el-button style="width:30%;float:right"  type="primary" @click="submitForm('ruleForm')">删除该课程</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        tableteamleader: [{
          ID: '24320162200000',
          name: '王虎',
        }],
        tableData: [{
          ID: '24320162201111',
          name: '王小虎',
        }, {
          ID: '24320162202222',
          name: '王大虎',
        }]
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

