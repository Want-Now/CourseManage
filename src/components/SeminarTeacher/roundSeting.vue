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
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:120%">讨论课：</span>
        </div>
        <div class="text item">
          {{class1}}
        </div>
        <div  class="text item">
          {{class2}}
        </div>
      </el-card>
      <br>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:120%">成绩设置：</span>
        </div>
        <div  class="text item">
          展示：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-select v-model="region3" placeholder="请选择">
            <el-option label="最高分" value="1"></el-option>
            <el-option label="平均分" value="2"></el-option>
          </el-select>
        </div>
        <br>
        <div  class="text item">
          提问：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-select v-model="region2" placeholder="请选择">
            <el-option label="最高分" value="1"></el-option>
            <el-option label="平均分" value="2"></el-option>
          </el-select>
        </div>
        <br>
        <div  class="text item">
          报告：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-select v-model="region2" placeholder="请选择">
            <el-option label="最高分" value="1"></el-option>
            <el-option label="平均分" value="2"></el-option>
          </el-select>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:120%">本轮讨论课报名次数：</span>
        </div>
        <div  class="text item">
          一班：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-select v-model="region1" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </div>
        <br>
        <div  class="text item">
          二班：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-select v-model="region2" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </div>
        <br>
        <div  class="text item">
          三班：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-select v-model="region3" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </div>
      </el-card>
      <br>
      <br>
      <el-form>
        <el-button style="width:100%;background-color:#494e8e;font-size:120%" type="primary" @click="">保存修改</el-button>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation:"第一轮",
        class1:"业务流程分析",
        class2:"界面原型设计",

      };
    },
    rules: {
      region1: [
        { required: true, message: '请选择', trigger: 'change' }
      ],
      region2: [
        { required: true, message: '请选择', trigger: 'change' }
      ],
      region3: [
        { required: true, message: '请选择', trigger: 'change' }
      ],},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
  .text {
    font-size: 14px;
  }

  .item {
    font-size:100%;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>
