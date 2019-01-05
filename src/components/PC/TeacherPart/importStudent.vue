<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt" @click="back()"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-menu courseButt" @click="chosecourse()">&nbsp;选择课程</button>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt" @click="loginOutPC()">&nbsp;退出系统</button>
    </div>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1" @click="Stu">
          <i class="el-icon-news"></i>导入学生名单
        </el-menu-item>
        <el-menu-item index="2" @click="seminarIndex">
          <i class="el-icon-document" ></i>讨论课
        </el-menu-item>
        <el-menu-item index="3" @click="importScore">
          <i class="el-icon-edit"></i>导出成绩
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <p class="title">{{courseName}}——{{location}}</p>
      <el-table
        :data="classList"
        :header-cell-style="{'color':'#409EFF','font-size':'25px','height':'80px'}"
        :row-style="{'font-size':'25px','height':'70px'}">
        <el-table-column
          label="班级列表"
          align="center">
          <template slot-scope="scope">
            {{scope.row.grade}}({{scope.row.klassSerial}})
          </template>
        </el-table-column>
        <el-table-column
          label="提交状态"
          align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.submitStatus">已提交</span>
            <span v-if="!scope.row.submitStatus" style="color:red">未提交</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="dialogVisible=true"
              >提交</el-button>
            <el-button
              type="danger" @click="inti(scope.row.klassId)">重置</el-button>
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
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "importStudent",
      data(){
          return{
            dialogVisible:false,
            courseName:'',
            location:'导入学生名单',
            classList:[]
          }
      },
      created(){
        this.courseName=this.$route.query.courseName
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/course/'+this.$route.query.courseId+'/klass/pc',
          params:{
            courseId:this.$route.query.courseId
          }
        }).then(function (response) {
          _this.classList=response
        })
      },
      methods:{
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
              //that.$router.push('/emptyPage');
              that.dialogVisible=false;
            })
            .catch(function (error) {
              alert("上传失败，请检查文件格式并重新上传");
              console.log(error);
              that.dialogVisible=false;
            });
        },
        inti(klassId){
          var that=this;
          this.$confirm('您确定要将此班级的学生名单重置吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {this.$axios({
            method:'delete',
            url:"/klass/"+klassId+"/resetStudent/pc",
            params:{
              klassId:klassId
            },
          }).then(function (response) {
            if(response===true){
              that.$message({
                message:'重置成功',
                type:'success',
                duration:800
              });
            } else {
              that.$message({
                message: '重置失败',
                type: 'error',
                duration: 800
              });
            }})
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消重置'
            });
          });
        },
        Stu(){
          this.$router.push({path:'/ImportStuPC',
            query:{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName
            }
          })
        },
        seminarIndex(){
          this.$router.push({path:'/PCseminarIndex',
            query:{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName
            }
          })
        },
        importScore(){
          this.$router.push({path:'/TeaViewScorePC',
            query:{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName
            }
          })
        },
      }

    }
</script>

<style scoped>
  .header{
    padding-left: 50px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #409EFF;
    text-align: left;
  }
  .main{
    margin-left: 300px;
    padding: 0 50px;
  }
  .exitButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    right: 50px;
  }
  .courseButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    right:200px;
  }
  .backButt{
    border: none;
    color: #409EFF;
    font-size: 30px;
    height: 50px;
  }
  .title{
    font-weight: bold;
    color: #409EFF;
    font-size: 27px;
    padding: 20px 50px;
    text-align: left;
    border: solid 1px #DCDFE6;
  }
  #teacherMenu{
    min-width: 300px;

    position: absolute;
    left: 0px;
  }
  .el-menu{
    height: 90vh;
  }
  .el-menu-item{
    height: 30vh;
    font-size: 25px;
    line-height: 30vh;
  }
  .el-icon-news{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-document{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-edit{
    margin-right: 10px;
    font-size: 30px;
  }
</style>
