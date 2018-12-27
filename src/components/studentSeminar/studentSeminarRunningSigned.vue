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
    <el-main style="background-color: #ffffff;">
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div>轮次：</div></el-col>
        <el-col :span="16"><div >{{round}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col :span="8"><div >主题：</div></el-col>
        <el-col :span="16"><div>{{topic}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col :span="8"> <div>要求：</div></el-col>
        <el-col :span="16"><div>{{item}}</div></el-col>
      </el-row>
      <el-row  >
        <el-col :span="8"><div>课次序号：</div></el-col>
        <el-col :span="16"><div>{{order}}</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div>报名：</div></el-col>
        <el-col :span="16"><div>1-3</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div>课程情况：</div></el-col>
        <el-col :span="8"><div >正在进行</div></el-col>
        <router-link to="check_ppt">
          <el-col :span="8"><div><u>查看信息</u></div></el-col>
        </router-link>
      </el-row>
      <el-row style="background-color:#f1f1f1" >
        <el-col :span="8"><div>ppt：</div></el-col>
        <el-col :span="16"><div></div></el-col>
      </el-row>
      <br>
      <el-upload style="float:right;"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :before-remove="beforeRemove"
                 :on-exceed="handleExceed">
        <div style="color:red" type="primary"><u>上传ppt</u></div>
      </el-upload>
    </el-main>
    <br>
    <br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="Seminar_ing">
          <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')">进入讨论课</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation: "OOAD-讨论课",
        round: "第一轮",
        order:"1",
        item:"完成界面原型设计，每个组15分钟展示时间",
        topic:"界面原型设计",
        ban_num:"2016-(1)"
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
  .el-col{
    font-size:100%;
    height: 400%;
    line-height: 200%;
  }
</style>
