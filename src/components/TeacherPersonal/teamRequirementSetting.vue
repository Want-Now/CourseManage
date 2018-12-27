<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>分组条件设置</p>
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

    <el-card>
      <div slot="header" style="height:10px;">
        <span style="float:left;font-size:80%">性别要求</span>
        <el-switch v-model="ruleForm.delivery1"></el-switch>
      </div>
      <div>
        <el-row size="small">
          <el-col :span="6">男生：</el-col>
          <el-col :span="4" :offset="3"><el-input size="mini" v-model="input4" placeholder="上限"></el-input></el-col>
          <el-col :span="4" :offset="3" ><el-input size="mini" v-model="input4" placeholder="下限"></el-input></el-col>
        </el-row>
        <br>
        <el-row size="small">
          <el-col :span="6">女生：</el-col>
          <el-col :span="4" :offset="3"><el-input size="mini" v-model="input1" placeholder="上限"></el-input></el-col>
          <el-col :span="4" :offset="3" ><el-input size="mini" v-model="input2" placeholder="下限"></el-input></el-col>
        </el-row>
      </div>
      <br>
    </el-card>
    <el-card>
      <div slot="header" style="height:10px;">
        <span style="float:left;font-size:80%">星座要求</span>
        <el-switch v-model="ruleForm.delivery2"></el-switch>
      </div>
    </el-card>
    <br><br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="Seminar_index">
          <el-button type="primary" style="background-color: #494e8e" @click="submitForm('ruleForm')">确认</el-button>
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
        filename1:"XXX.xsl",
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        ruleForm: {
          name: '',
          delivery1: false,
          delivery2: false,
          resource: '',
          desc: ''},
        options: [{
          value: '选项1',
          label: '林老师（XXX）'
        }, {
          value: '选项2',
          label: '王老师（XXX）'
        }],
        value5: '',
        value5: '',
      };
    },
    rules: {
      date1: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      date2: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      date3: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      desc: [
        { required: true, message: '请输入课程描述', trigger: 'blur' }
      ],
      name: [
        { required: true, message: '请输入课程名称', trigger: 'blur' },
      ],
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

