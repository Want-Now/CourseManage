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
      <div v-for="o in length-1" :key="o" class="order">
        <span style="float:left">{{o}}</span>
        <span class="content" v-if="!(tableData[o-1].attendanceStatus)&& status=='0'&&!myTeamAttendance" style="color:red"><u @click="signin(o)">可报名</u></span>
        <span class="content" v-if="!(tableData[o-1].attendanceStatus)&& status=='0'&&myTeamAttendance" style="color:red"><u @click="modi(o)">可报名</u></span>
        <span class="content" v-if="!(tableData[o-1].attendanceStatus)&& status!='0'" >无人报名</span>
        <span class="content" v-if="(tableData[o-1].attendanceStatus)&& status=='0'" >{{tableData[o-1].klassSerial}}-{{tableData[o-1].teamSerial}}</span>
        <span class="content" v-if="(tableData[o-1].attendanceStatus)&& !(tableData[o-1].pptStatus)">ppt未提交</span>
        <span class="content" v-if="(tableData[o-1].attendanceStatus)&& tableData[o-1].pptStatus"><el-button @click="dow(tableData[o-1].pptName)">下载</el-button></span>
      </div>
    </el-main>
    <br>
    <br>
    <el-footer>
      <el-button v-if="status=='0'&&myTeamAttendance"class="bottomButt" @click="concel">取消报名</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        myTeamAttendance:'',
        courseName: '',
        attendanceId:'',
        tableData:[
          {
            attStatus:'',
          }
        ],
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
      console.log(this.attendanceId);
      this.$axios({
        method: 'get',
        url: '/round/seminar/'+ this.klassSeminarId+'/attendance'
      }).then(response => {
        console.log(response);
        _this.tableData= response;
        _this.length=response.length;
        _this.myTeamAttendance=response[_this.length-1].myTeamAttendance;
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
            that.$router.push('/emptyPage');
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
          param:{
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
            that.$router.push('/emptyPage');
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
          console.log(this.attendanceId)
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
              that.$router.push('/emptyPage');
            } else {
              that.$message({
                message: '取消失败',
                type: 'error',
                duration: 2000
              });
            }})
        },
      dow(ol){
        this.ppt=ol;
        console.log(this.ppt);
        this.$axios({
          method: 'get',
          url: '/attendance/'+this.attendanceId+'/powerPoint',
          responseType: 'blob'
        }).then(response => {
          console.log(response);
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
