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
        </div>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="20%">
          <input type="file" @change="getFile($event)">
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit(scope.row.klassId)">上传</el-button>
  </span>
        </el-dialog>
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
        dialogVisible:false,
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

