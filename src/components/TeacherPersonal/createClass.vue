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
    <el-card class="box-card">
      </div>
      <div>
        <el-row>
          <el-col :span="12">班级名：</el-col>
          <el-col :span="6" ><el-input size="mini" v-model="input1" placeholder="年级"></el-input></el-col>
          <el-col :span="6" ><el-input size="mini" v-mode1="input2" placeholder="编号"></el-input></el-col>
        </el-row>
        <br>
        <el-row size="small">
          <el-col :span="12">上课时间：</el-col>
          <el-col :span="12" ><el-input size="mini" v-model="input3" placeholder="请输入"></el-input></el-col>
        </el-row>
        <br>
        <el-row>
          <el-col :span="12">上课地点：</el-col>
          <el-col :span="12" ><el-input size="mini" v-model="input4" placeholder="请输入"></el-input></el-col>
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
    <br><br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="Seminar_index">
          <el-button type="primary" style="background-color: #494e8e" @click="submitForm('ruleForm')">立即创建</el-button>
        </router-link>
        &nbsp;&nbsp;
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
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

