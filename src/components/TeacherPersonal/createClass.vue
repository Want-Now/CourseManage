<template>
  <el-container>
    <el-header id="header">
      <el-button @click="back()" class="el-icon-back" ></el-button>
      <p>创建班级</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-card class="box-card">
        <div>
          <el-row>
            <el-col :span="12">班级名：</el-col>
            <el-col :span="6" ><el-input v-model="grade" placeholder="年级"></el-input></el-col>
            <el-col :span="6" ><el-input v-model="klassSerial" placeholder="编号"></el-input></el-col>
          </el-row>
          <br>
          <el-row size="small">
            <el-col :span="12">上课时间：</el-col>
            <el-col :span="12" ><el-input v-model="klassTime" placeholder="请输入"></el-input></el-col>
          </el-row>
          <br>
          <el-row>
            <el-col :span="12">上课地点：</el-col>
            <el-col :span="12" ><el-input v-model="klassLocation" placeholder="请输入"></el-input></el-col>
          </el-row>
          <br>
          <el-row>
            <el-col :span="12">班级学生名单：</el-col>
            <el-col :span="12">
              <el-upload
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
    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="create()">创建</el-button>
    </el-footer>
    <el-dialog
      width="80%"
      title="提示"
      :show-close=false
      :visible.sync="success">
      <span style="font-size: 120%">创建成功</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="back()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      width="80%"
      title="提示"
      :show-close=false
      :visible.sync="fail">
      <span style="font-size: 120%">创建失败！<br><br>请检查您的班级编号是否有重复</span>
      <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="fail=false ">确 定</el-button>
            </span>
    </el-dialog>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        //klass:[],
        success:false,
        fail:false,
        fileList: [],
        activeNames: ['1'],
        courseId:'',
        grade:'',
        klassSerial:'',
        klassTime:'',
        klassLocation:'',
      };
    },
    methods: {
      refresh(){
        location.reload()
        this.$router.go(0)
      },
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
      },
      create(){
        var that=this;
          this.$axios({
            method: 'post',
            url: "/course/" + this.$route.query.courseId + "/klass ",
            data: {
              grade: this.grade,
              klassSerial: this.klassSerial,
              klassTime: this.klassTime,
              klassLocation: this.klassLocation,
            }
          }).then(function (response) {
            if (response === true) {
              that.dialogVisible = false,
                that.success = true
            } else {
              that.dialogVisible = false,
                that.fail = true
            }
          })
        }
    }
  }
</script>
<style>
  .el-container {
   height: 80vh;
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

