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
        <div  style="font-size:20px">{{seminarName}}</div>
        <div style="float:left;font-size:15px">第{{nowPreOrder}}组展示</div>
        <div style="float:right;font-size:15px">已有{{questionNum}}名同学提问</div>
      </div>
      <br>
      <el-row style=" border-top: 1px solid #999999;" v-for="">
        <el-col :span="8"><div class="grid-content bg-purple">第一组</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">1-1</div></el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" type="primary" @click="submitForm('ruleForm')">Q&A</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        headerLocation: "",
        tableData: [],
        seminarName:'',
        nowPreOrder:'',
        questionNum:'',

      }
    },
    created(){
      this.headerLocation=this.$route.query.courseName;
      this.seminarName=this.$route.query.seminarName;
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
    height: 95vh;
  }
  .el-row{
    border-bottom: 1px solid #999999;
    font-size:110%;
    height:50px;
    line-height:50px;
  }
  .el-header{
    margin: 0px;
    padding: 0px;
    background-color: #494e8f;
    color:white;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }

  .el-header p{
    display: inline-block;
  }

  .el-header .el-icon-back{
    position: absolute;
    width: 60px;
    height: 55px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
    left: 10px;
    top: 10px;
  }

  .el-header .el-icon-back:hover{background-color: #494e8f;border-color: #494e8f;}
  .el-header .el-icon-back:focus{background-color: #494e8f;border-color: #494e8f;}

  .el-header .el-icon-menu{
    position: absolute;
    width: 60px;
    height: 55px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
    right: 10px;
    top: 10px;
  }
  .el-header .el-icon-menu:hover{background-color: #494e8f;border-color: #494e8f;}
  .el-header .el-icon-menu:focus{background-color: #494e8f;border-color: #494e8f;}

  .el-header .el-dropdown{
    position: absolute;
    margin: 0px;
    width: 60px;
    height: 55px;
    color: white;
    right: 0px;
    top: 0px;
    line-height: 55px;
    text-align: center;
  }
</style>
