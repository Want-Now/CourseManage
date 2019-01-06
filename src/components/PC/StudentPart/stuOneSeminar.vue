<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt" @click="back()"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt" @click="loginOutPC()">&nbsp;退出系统</button>
    </div>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1" @click="chosecourse()">
          <i class="el-icon-news"></i>选择课程
        </el-menu-item>
        <el-menu-item index="2" @click="seminarIndex">
          <i class="el-icon-document" ></i>讨论课
        </el-menu-item>
        <el-menu-item index="3" @click="importScore">
          <i class="el-icon-edit"></i>查看成绩
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <br>
      <el-form>
        <el-form-item>
          <div style="font-family:Calibri;font-size:50px;height:60px;line-height:60px;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#409dfe;">{{courseName}}-讨论课</div>
        </el-form-item>
        </el-form-item>
        <el-form-item>
          <br>
          <div style="font-size:40px;float:left;font-weight:bold;color:#959595">&nbsp;&nbsp;<span>主题：</span><span>{{ListForm[0].seminarName}}</span></div>
          <br>
          <br>
          <div style="font-size:30px;float:left;">&nbsp;&nbsp;<span>报名起止时间：&nbsp;&nbsp;&nbsp;</span><span>{{ListForm[0].enrollStartTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}—{{ListForm[0].enrollEndTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
          <br>
          <div v-if="status=='2'" style="font-size:30px;float:left;">&nbsp;&nbsp;<span>报告提交截止时间：</span><span>{{tableData[0].reportDDL|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
          <br>
          <br>
          <div style="font-size:30px;float:left;"><span style="float:left">&nbsp;&nbsp;&nbsp;内容：</span>
          </div>
            <div style="font-size:30px;padding-left:20px;text-align: left">{{ListForm[0].introduction}}</div>
        </el-form-item>
        <div>
          <span style="float:left;font-size:30px;color:#949494">&nbsp;&nbsp;已报名小组</span>
          <br>
          <br>
        </div>
        <el-table
          :data="tableData"
          :header-cell-style="{'font-size':'25px','height':'90px'}"
          :row-style="{'font-size':'25px','height':'80px'}">
          <el-table-column
            label="展示次序"
            type="index"
            :index="indexMethod"
            :width="150"
          >
          </el-table-column>
          <el-table-column
            label="组号"
            :width="120">
            <template slot-scope="scope" v-if="scope.row.attendanceStatus">
              {{scope.row.klassSerial}}-{{scope.row.teamSerial}}
            </template>
          </el-table-column>
          <el-table-column
            prop="leaderName"
            label="组长"
            :width="120">
          </el-table-column>
          <el-table-column
            prop="pptName"
            label="ppt">
            <template slot-scope="scope" v-if="scope.row.attendanceStatus">
              <span v-if="scope.row.pptUrl" @click="dow(scope.row.pptName,scope.row.attendanceId)" style="color:#409dfe"> {{scope.row.pptName}}</span>
              <span v-if="!scope.row.pptUrl" > 未提交</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="reportName"
            label="书面报告">
            <template slot-scope="scope" v-if="scope.row.attendanceStatus">
              <span  v-if="status=='2'"> {{scope.row.reportName}}</span>
              <span  v-if="status!='2'">未到提交时间</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span  v-if="canApply">
              <el-button v-if="!scope.row.attendanceStatus" @click="signin(scope.$index)">报名</el-button>
              <el-button v-if="scope.row.myAttendanceStatus" @click="concel(scope.row.myAttendanceId)">取消报名</el-button>
              </span>
              <span v-if="status!='2'">
                <el-button v-if="scope.row.myAttendanceStatus&&!(scope.row.pptUrl)" @click="dialogVisible=true">上传ppt</el-button>
                <el-button v-if="scope.row.myAttendanceStatus&&scope.row.pptUrl" @click="dialogVisible = true">重新上传ppt</el-button>
              </span>
              <span v-if="status=='2'&&scope.row.myAttendanceStatus">
                <el-button v-if="scope.row.submitStatus&&!(scope.row.reportUrl)" @click="RdialogVisible = true">上传书面报告</el-button>
                <el-button v-if="scope.row.submitStatus&&scope.row.reportUrl"  @click="RdialogVisible = true">重新上传书面报告</el-button>
              </span>
              <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="20%">
                <input type="file" @change="getFile($event)">
                <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit($event)">上传</el-button></span>
              </el-dialog>
              <el-dialog
                title="提示"
                :visible.sync="RdialogVisible"
                width="20%">
                <input type="file" @change="RgetFile($event)">
                <span slot="footer" class="dialog-footer">
    <el-button @click="RdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Rsubmit($event)">上传</el-button>
  </span>
              </el-dialog>
            </template>
          </el-table-column>
        </el-table>

      </el-form>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TeaOneSeminar",
    data(){
      return{
        dialogVisible:false,
        RdialogVisible:false,
        tableData:[],
        canApply:false,
        ListForm:[{
          seminarName: '',
          enrollEndTime:'',
          klassSerial:'',
          klassId:'',
        }],
        myAttendanceId:'',
        klassSeminarId:'',
        enrollEndTime:'',
        seminarSerial:'',
        courseName:'',
        klassId:'',
        status:'',
      }
    },
    created() {
      this.basicmessage();
      this.getmyseminar();
    },
    methods:{
      indexMethod(index) {
        return index + 1;
      },
      basicmessage(){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/'+this.$route.query.seminarId+'/attendance/pc'
        }).then(response => {
          var date=_this.getDate(new Date());
          _this.ListForm = response;
          console.log(response);
          if(date<response[0].enrollEndTime&&date>response[0].enrollStartTime) _this.canApply=true;
          else _this.canApply=false;
          console.log(_this.canApply);
          _this.courseName=this.$route.query.courseName;
        })
      },
      getDate(date) {
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var Hours = date.getHours();
        var Minutes = date.getMinutes();
        var Seconds = date.getSeconds();

        if (Hours >= 0 && Hours <= 9) {
          Hours = "0" + Hours;
        }
        if (Minutes >= 0 && Minutes <= 9) {
          Minutes = "0" + Minutes;
        }
        if (Seconds >= 0 && Seconds <= 9) {
          Seconds = "0" + Seconds;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + Hours + seperator2 + Minutes
          + seperator2 + Seconds;
        return currentdate;
      },
      getmyseminar(){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/'+this.$route.query.seminarId+'/klass/klassSeminar/pc'
        }).then(response => {
          _this.tableData = response;
          var len=response.length;
         _this.klassSeminarId=response[len-1].klassSeminarId;
         _this.status=response[0].status;
         console.log(response);
         for(var a=0;a<len;a++ ){
           if(response[a].myAttendanceStatus) {
             _this.myAttendanceId = response[a].myAttendanceId;
           }
         }
        })
      },
      getteam(val){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/'+this.klassSeminarId+'/'+val+'/klassSeminar/pc'
        }).then(response => {
          _this.tableData = response;
          _this.status=response[0].status;
          console.log(response);
          console.log(_this.status);
        })
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
        this.$router.push({path:'/stuViewScore',
          query:{
            courseId:this.$route.query.courseId,
            courseName:this.$route.query.courseName
          }
        })
      },
      concel(attendanceId) {
        var that=this;
        console.log(attendanceId)
        this.$axios({
          method: 'delete',
          url:'/attendance/'+attendanceId,
        }).then(function (response) {
          if(response===true){
            that.myTeamAttendance=false;
            that.$message({
              message:'取消成功',
              type:'success',
              duration:2000
            });
            window.location.reload();
          } else {
            that.$message({
              message: '取消失败',
              type: 'error',
              duration: 2000
            });
          }})
      },
      signin(o){
        console.log(o+1);
        var that=this;
        this.$axios({
          method: 'post',
          url: '/seminar/'+this.klassSeminarId+'/attendance',
          data:{
            teamOrder:o+1
          },
        }).then(function (response) {
          if(response===true) {
            that.attendance = true;
            that.$message({
              message: '报名成功',
              type: 'success',
              duration: 2000
            });
            window.location.reload();
          }else {
            that.$message({
              message: '报名失败',
              type: 'error',
              duration: 2000
            });
          }})
      },
      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      submit: function (event) {
        var that=this;
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        this.$axios.post('attendance/'+this.myAttendanceId+'/powerPoint', formData)
          .then(function (response) {
            alert("上传成功");
            window.location.reload();
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
            that.dialogVisible=false;
          });
      },
      RgetFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      Rsubmit: function (event) {
        var that=this;
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        this.$axios.post('attendance/'+this.myAttendanceId+'/report', formData)
          .then(function (response) {
            alert("上传成功");
            window.location.reload();
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
            that.RdialogVisible=false;
          });
      },
      dow(ol,al){
        this.ppt=ol;
        console.log(this.ppt);
        console.log(al);
        this.$axios({
          method: 'get',
          url: '/attendance/'+al+'/powerPoint',
          responseType: 'blob'
        }).then(response => {
          this.download(response)
          //window.open(response, '_blank');
          // window.location.href = response;
        }).catch((error) => {
          alert("下载失败");
        })
      },
      download (data) {
        if (!data) {
          alert("下载失败");
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', this.ppt)
        document.body.appendChild(link)
        link.click()
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

  .roundSpan{
    margin-right:20px;
    font-size: 22px;
  }
  .el-table{
    margin-top: 20px;
  }
  .exportButt{
    margin-top: 50px;
    width: 200px;
    height: 60px;
    font-size: 22px;

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
  .main{
    margin-left: 300px;
    padding: 0 50px;
  }
  .el-icon-edit{
    margin-right: 10px;
    font-size: 30px;
  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
