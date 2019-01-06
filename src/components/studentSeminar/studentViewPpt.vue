<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()" ></el-button>
      <p>{{courseName}}-讨论课</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="stuCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <div v-for="item ,index in pptList" class="order" :key="index">
        <span style="float:left">{{index+1}}</span>
        <span class="content" v-if="!(item.attendanceStatus)&& status=='0'&&!myTeamAttendance&&canApply" style="color:red"><u @click="signin(index+1)">可报名</u></span>
        <span class="content" v-if="!(item.attendanceStatus)&& status=='0'&&myTeamAttendance&&canApply" style="color:red"><u @click="modi(index+1)">可报名</u></span>
        <span class="content" v-if="!(item.attendanceStatus)&&!canApply" >无人报名</span>
        <span class="content" v-if="(item.attendanceStatus)&& status=='0'" >{{item.klassSerial}}-{{item.teamSerial}}</span>
        <span class="content" v-if="(item.attendanceStatus)&& !(item.pptStatus)">ppt未提交</span>
        <span class="content" v-if="(item.attendanceStatus)&& item.pptStatus"><el-button @click="dow(item.pptName,item.attendanceId)">下载</el-button></span>
      </div>
    </el-main>
    <br>
    <br>
    <el-footer>
      <el-button v-if="status=='0'&&myTeamAttendance&&canApply"class="bottomButt" @click="concel">取消报名</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        myTeamAttendance:'',
        courseName: '',
        canApply:'',
        loading:false,
        attendanceId:'',
        pptList:[],
        status:'0',
        klassSeminarId:'',
        length:6,
        loading: true,
        ppt:'',
      }
    },
    created(){
      var _this = this;
      this.klassSeminarId=this.$route.query.klassSeminarId;
      this.status=this.$route.query.status;
      this.courseName=this.$route.query.courseName;
      this.attendanceId=this.$route.query.attendanceId;
      this.canApply=this.$route.query.canApply;
      this.$axios({
        method: 'get',
        url: '/round/seminar/'+ this.klassSeminarId+'/attendance'
      }).then(response => {
        console.log(response);
        _this.length=response.length;
        _this.myTeamAttendance=response[_this.length-1].myTeamAttendance;
        _this.attendanceId=response[_this.length-1].myAttendanceId;
        for (var i = 0; i < (response.length-1); i++) {
          _this.pptList.push({
            attendanceStatus: response[i].attendanceStatus,
            klassSerial: response[i].klassSerial,
            teamSerial: response[i].teamSerial,
            pptName: response[i].pptName,
            pptStatus: response[i].pptStatus,
            attendanceId: response[i].attendanceId,
          });
        }
      })
    },
    methods:{
      signin(o){
        var that=this;
        this.$axios({
          method: 'post',
          url: '/seminar/'+ this.klassSeminarId+'/attendance',
          data:{
            teamOrder:o
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
      modi(o){
        var that=this;
        this.$axios({
          method: 'get',
          url: '/klassSeminar/attendance/'+this.attendanceId+'/modifyAttendance',
          params:{
            teamOrder:parseInt(o),
            attendanceId:this.attendanceId
          },
        }).then(function (response) {
          if(response===true) {
            that.$message({
              message: '修改成功',
              type: 'success',
              duration: 2000
            });
            window.location.reload();
          }else {
            that.$message({
              message: '修改失败',
              type: 'error',
              duration: 2000
            });
          }})
      },
      concel() {
          var that=this;
          this.$axios({
            method: 'delete',
            url:'/attendance/'+this.attendanceId,
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
      dow(ol,aid){
        this.ppt=ol;
        console.log(this.ppt);
        this.$axios({
          method: 'get',
          url: '/attendance/'+aid+'/powerPoint',
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
      }
    }
  }
</script>
<style scoped>
  .el-dialog__body{
    height: 20vh;
    overflow: auto;
  }
  .order{
    //text-align: left;
    height:70px;
    line-height: 70px;
    font-size: 20px;
    border-bottom:1px solid #f4f6f9;
  }

  .content{
    display: inline-block;
    width: 30%;
    font-size: 18px;
    vertical-align: middle;
    text-align: center;
  }
  .el-input__inner{
    height: 50px;
    font-size: 15px;
  }
  .el-icon-document{
    font-size: 18px;
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
