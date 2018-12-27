<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>共享设置</p>
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
        <span style="float:left;font-size:80%">J2EE（XX老师）</span>
        <el-popover
          placement="top"
          width="160"
          v-model="visible2">
          <p>确定取消共享吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
          </div>
          <el-button style="float: right; padding: 3px 0" type="text" slot="reference">取消共享</el-button>
        </el-popover>
      </div>
      <div>
        <el-row size="small">
          <el-col :span="6">共享类型：</el-col>
          <el-select v-model="value5" clearable placeholder="请选择" size="mini">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
        <br>
        <el-row size="small">
          <el-col :span="6">共享情况：</el-col>
          <el-select v-model="value6" clearable placeholder="请选择" size="mini">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </div>
    </el-card>
    <br>
    <el-button style="border-color:red;width:20%; margin-left:75%;" size="mini" @click="resetForm('ruleForm')">新增共享</el-button>
    <br><br>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="Seminar_index">
          <el-button type="primary" style="background-color: #494e8e" @click="submitForm('ruleForm')">保存</el-button>
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
        visible2: false,
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
        options1: [{
          value: '选项1',
          label: '共享讨论课'
        }, {
          value: '选项2',
          label: '共享分组'
        }, {
          value: '选项3',
          label: '共享分组和讨论课'
        }],
        options2: [{
          value: '选项1',
          label: '主课程'
        }, {
          value: '选项2',
          label: '从课程'
        }],
        value5: '',
        value6: '',
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

