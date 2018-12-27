<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>创建课程</p>
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
    <el-card :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="40%" size="mini">
      <div slot="header" style="height:10px;">
        <span style="float:left;font-size:80%">课程基本信息</span>
      </div>
      <el-row>
        <el-col :span="6" style="float:left">课程名称
        </el-col><el-col :span="18"> <el-input v-model="ruleForm.name"></el-input>
      </el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="6" style="float:left">课程描述
        </el-col><el-col :span="18">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" size="mini">
      <div slot="header" style="height:10px;">
        <span style="float:left;font-size:80%">成绩计算规则</span>
      </div>
      </div>
      <div>
        <el-row size="small">
          <el-col :span="12">课堂展示：</el-col>
          <el-col :span="5" ><el-input size="mini" v-model="input1" placeholder="例:50%"></el-input></el-col>
        </el-row>
        <br>
        <el-row>
          <el-col :span="12">提问成绩：</el-col>
          <el-col :span="5" ><el-input size="mini" v-model="input3" placeholder=""></el-input></el-col>
        </el-row>
        <br>
        <el-col :span="12">书面报告：</el-col>
        <el-col :span="5" ><el-input size="mini" v-model="input3" placeholder=""></el-input></el-col>
        </el-row>
        <br><br> <br>
        <el-button @click="resetForm('ruleForm')" size="mini" style="width:80%">其他分组条件设置</el-button>
      </div>

    </el-card>
    <el-card>
      <div slot="header" style="height:10px;">
        <span style="float:left;font-size:80%">课程分组要求</span>
      </div>
      <div>
        <el-row size="small">
          <el-col :span="6">小组人数：</el-col>
          <el-col :span="4" :offset="3"><el-input size="mini" v-model="input4" placeholder="上限"></el-input></el-col>
          <el-col :span="4" :offset="3" ><el-input size="mini" v-model="input4" placeholder="下限"></el-input></el-col>
        </el-row>
        <br>
        <el-row  size="small">
          <el-col :span="8">组队开始时间：</el-col>
          <el-col :span="10":offset="2">
            <el-date-picker style="width:100%"
                            v-model="value1"
                            type="date" size="mini"
                            placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row  size="small">
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="10" :offset="2">
            <el-time-picker
              style="width:100%"
              v-model="value4"
              size="mini"
              :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
              placeholder="选择时间">
            </el-time-picker>
          </el-col>
        </el-row>
        <br>
        <el-row  size="small">
          <el-col :span="8">组队结束时间：</el-col>
          <el-col :span="10" :offset="2">
            <el-date-picker style="width:100%"
                            v-model="value2"
                            type="date" size="mini"
                            placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row  size="small">
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="10" :offset="2">
            <el-time-picker
              style="width:100%"
              v-model="value3"
              size="mini"
              :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
              placeholder="选择时间">
            </el-time-picker>
          </el-col>
        </el-row>
      </div>
      <br>
    </el-card>
    <el-card>
      <div slot="header" style="height:10px;">
        <span style="float:left;font-size:80%">冲突课程</span>
      </div>
      <div>
        <el-select v-model="value5" clearable placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <br><br>
        <el-select v-model="value6" clearable placeholder="请选择" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <br><br>
        <el-button size="mini" style="border-color:red;float:right ;" @click="resetForm('ruleForm')">新增对象</el-button>
      </div>
      <br>
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
        filename1:"XXX.xsl",
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        ruleForm: {
          name: '',
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

