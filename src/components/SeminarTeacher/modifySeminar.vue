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
      <div style="background-color: #ffffff;text-align: center;">修改讨论课</div>
      <hr>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">讨论课主题：</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">业务流程分析</div></el-col>
      </el-row>
      <el-row style="background-color:#f1f1f1">
        <el-col :span="12"><div class="grid-content bg-purple">讨论课内容：</div></el-col>
        <el-col :span="12"><div>页面导航和所有页面原型设计</div></el-col>
      </el-row>
      <el-form-item label="讨论课次序号" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择"  style="float:right">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="讨论课可见" prop="delivery" >
        <el-switch v-model="ruleForm.delivery" style="float:right"></el-switch>
      </el-form-item>
      </el-form>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title" style="float:right;">
            2016 - (1)
          </template>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="35%" class="demo-ruleForm" size="mini">
            <el-form-item label="开始报名时间" required style="margin-left: 0%">
              <el-col :span="11" style="margin-right-: 1%">
                <el-form-item prop="date1" style="width:20px;">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="结束报名时间" required>
              <el-col :span="11" style="margin-right:1%">
                <el-form-item prop="date2">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="报告截止时间" required>
              <el-col :span="11" style="margin-right:1%">
                <el-form-item prop="date3">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date3"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="报名小组数" prop="region2">
              <el-select v-model="ruleForm.region2" placeholder="请选择" style="margin-right: 0%">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属Round" prop="region3">
              <el-select v-model="ruleForm.region3" placeholder="无(默认新建Round)"  style="margin-right: 0%">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
      <br>
      <br>
      <el-form>
        <el-form-item style="padding-bottom: 20px;">
          <router-link to="">
            <el-button style="width:100%;background-color:#494e8e" type="primary" @click="">保存修改</el-button>
          </router-link>
          <el-button style="width:100%;"type="" @click="">删除该讨论课</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation:"OOAD",
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          date3: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date3: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        }
      };
    },
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
  .el-col{
    font-size:100%;
    width:30%;
    height: 400%;
    line-height: 200%;
  }
</style>

