<template>
  <el-container>
    <el-header id="header">
      <el-button @click="back()" class="el-icon-back" ></el-button>
      <p>班级管理</p>
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
      <el-card class="box-card" size="small" v-for="klass in kklassList" :key="klass.klassId">
        <div slot="header" class="clearfix">
          <span>{{klass.grade}}-{{klass.klassSerial}}</span>
        </div>
        <div>
          <el-row size="small">
            <el-col :span="12">讨论课时间：</el-col>
            <el-col :span="12" >{{klass.klassTime}}</el-col>
          </el-row>
          <br>
          <el-row>
            <el-col :span="12">讨论课地点：</el-col>
            <el-col :span="12">{{klass.klassLocation}}</el-col>
          </el-row>
          <br>
          <el-row>
            <el-col :span="12">班级学生名单：</el-col>
            <el-col :span="12" >
              <!--v-if-->
              <span v-if="klass.submitStatus">已上传</span>
              <span v-if="!klass.submitStatus">未上传</span>
            </el-col>
          </el-row>
          <div class="buttonDiv">
            <el-button size="small" type="primary" @click="dialogVisible=true">
              <span v-if="klass.submitStatus">重新上传学生名单</span>
              <span v-if="!klass.submitStatus">上传学生名单</span>
            </el-button>
            <el-button  size="small" type="danger" @click="del(klass)">删除</el-button>
          </div>
        </div>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="80%">
          <input type="file" @change="getFile($event)">
          <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit(klass.klassId)">上传</el-button>
  </span>
        </el-dialog>
      </el-card>
      <el-dialog
      width="80%"
      title="提示"
      :show-close=false
      :visible.sync="fail">
      <span style="font-size: 120%">删除失败</span>
      <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="fail=false ">确 定</el-button>
            </span>
    </el-dialog>
      <el-dialog
        width="80%"
        title="提示"
        :show-close=false
        :visible.sync="sucess">
        <span style="font-size: 120%">删除成功</span>
        <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="refresh() ">确 定</el-button>
            </span>
      </el-dialog>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="creatclass"><i class="el-icon-plus"></i>&nbsp;新建班级</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        courseId:'',
        fileList: [],
        activeNames: ['1'],
        klasses:[],
        classList:[],
        klassList:[],
        kklassList:[],
        dialogVisible:false,
        fail:false,
        sucess:false,
      };
    },
    created(){
      this.courseName=this.$route.query.courseName
      var _this=this;
      this.$axios({
        method:'get',
        url:'/course/'+this.$route.query.courseId+'/klass'
      }).then(response=> {
        _this.klasses = response;
      }).then(() => {this.$axios({
        method: 'get',
        url: '/course/'+this.$route.query.courseId+'/klass/pc',
        params:{
          courseId:this.$route.query.courseId
        }
      }).then(function (response) {
        _this.classList=response;
      }).then(()=>{
        var i=0;
        var j=0;
        for(i;i<_this.klasses.length;i++){
          for(j;j<_this.classList.length;j++){
            if(_this.klasses[i].klassId==_this.classList[j].klassId)
              _this.kklassList.push({
                klassId:_this.klasses[i].klassId,
                grade:_this.klasses[i].grade,
                klassSerial:_this.klasses[i].klassSerial,
                klassTime:_this.klasses[i].klassTime,
                klassLocation:_this.klasses[i].klassLocation,
                submitStatus:_this.classList[j].submitStatus,
              })
          }
          j=0;
        }
        console.log(_this.kklassList);
      })
      })
    },
    methods: {
      refresh(){
        location.reload()
        this.$router.go(0)
      },
      del(klass){
        var that=this;
          this.$axios({
            method: 'delete',
            url: 'course/klass/'+klass.klassId,
          }).then(function (response) {
            if (response === true) {
              that.sucess = true
            } else {
              that.fail = true
            }
          })
        },
      getFile: function (event) {
        this.file = event.target.files[0];
      },
      submit: function (klassId) {
        console.log(klassId);
        var that=this;
        //阻止元素发生默认的行为
        // event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        this.$axios.post('klass/'+klassId+'/uploadStudentNameList', formData)
          .then(function (response) {
            alert("上传成功");
            window.location.reload();
            that.dialogVisible=false;
          })
          .catch(function (error) {
            alert("上传失败，请检查文件格式并重新上传");
            console.log(error);
            that.dialogVisible=false;
          });
      },
      creatclass(){
        this.$router.push({path:"/createClass",
          query:{
            courseId:this.$route.query.courseId,
          }})
      },

    },
  }
</script>
<style>
  .el-container {
    height: 98vh;
  }
  .text {
    font-size: 100%;
  }

  .item {
    margin-bottom: 18px;
  }

  .buttonDiv{
    margin-top: 20px;
  }
  .buttonDiv .el-button{
    margin: 0px 20px;
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

