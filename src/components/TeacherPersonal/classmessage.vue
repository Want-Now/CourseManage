<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>班级信息</p>
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
    <el-card class="box-card" size="small">
      <div slot="header" class="clearfix">
        <span>2016-1</span>
        <el-button style="float: right; padding: 3px 0" type="text">删除班级</el-button>
      </div>
      </div>
      <div >
        <el-row size="small">
          <el-col :span="12">讨论课时间：</el-col>
          <el-col :span="12" >周三7、8节</el-col>
        </el-row>
        <br>
        <el-row>
          <el-col :span="12">讨论课地点：</el-col>
          <el-col :span="12">海韵教学楼306</el-col>
        </el-row>
        <br>
        <el-row>
          <el-col :span="12">班级学生名单：</el-col>
          <el-col :span="12">{{filename1}} &nbsp; <i class="el-icon-circle-close-outline"></i></el-col>
        </el-row>
        <el-row>
          <el-col  :span="12">&nbsp;</el-col>
          <el-col :span="12"><el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload></el-col>
        </el-row>
      </div>
    </el-card>

    <el-button style="width:100%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')"><i class="el-icon-plus"></i>&nbsp;新建班级</el-button>

  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [],
        activeNames: ['1'],
        filename1:"XXX.xsl"
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1个文件，本次已上传了 ${fileList.length} 个文件`);
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
  .text {
    font-size: 100%;
  }

  .item {
    margin-bottom: 18px;
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
    width: 100%px;
  }

</style>

