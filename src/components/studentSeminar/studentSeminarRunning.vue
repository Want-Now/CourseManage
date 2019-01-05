<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="stuCenter()">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar()">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <div>
        <div  style="font-size:110%">业务流程分析</div>
        <div style="float:left;font-size:80%">第四组 展示</div>
        <div style="float:right;font-size:80%">已有一名同学提问</div>
      </div>
      <br>
      <el-row style=" border-top: 1px solid #999999;">
        <el-col :span="8"><div class="grid-content bg-purple">第一组</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">1-1</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple">第二组</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">1-3</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple">第三组</div></el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">1-5</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple">第四组</div></el-col>
        <el-col :span="16"><div style="color:red;" class="grid-content bg-purple-light">1-2</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple">第五组</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">1-6</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple">第六组</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">1-4</div></el-col>
      </el-row>
    </el-main>
    <el-form>
      <el-form-item style="padding-bottom: 20px;">
        <router-link to="">
          <el-button style="width:50%;background-color:#494e8e" type="primary" @click="submitForm('ruleForm')">Q&A</el-button>
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
        tableData: [{
          team: '第一组',
          ppt: '1-1业务流程.ppt '
        }, {
          team: '第二组',
          ppt: '1-2 未提交'
        }, {
          team: '第三组',
          ppt: '可报名 '
        }, {
          team: '第四组',
          ppt: '1-4业务流程.ppt '
        }]
      }
    },
    methods: {
      open() {
        this.$confirm('是否确认报名此次讨论课？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '已报名'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '取消'
                : '取消'
            })
          });
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
  .el-row{
    border-bottom: 1px solid #999999;
    font-size:110%;
    height:50px;
    line-height:50px;
  }
</style>
