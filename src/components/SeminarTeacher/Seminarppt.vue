<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{courseName}}-讨论课</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>       </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <div v-for="item ,index in pptList" class="order" :key="index">
        <span style="float:left">{{index+1}}</span>
        <span class="content" v-if="!item.attendanceStatus" >无人报名</span>
        <span class="content" v-if="item.attendanceStatus" >{{item.klassSerial}}-{{item.teamSerial}}</span>
        <span class="content" v-if="(item.attendanceStatus)&& !(item.pptStatus)">ppt未提交</span>
        <span class="content" v-if="(item.attendanceStatus)&& (item.pptStatus)" @click="dow(item.pptName,item.attendanceId)" style="font-size:20px;color:#494e8e"><u>{{item.pptName}}</u></span>
      </div>
    </el-main>
    <el-footer>
        <el-button class="bottomButt" @click="allD">批量下载</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        courseName:'',
        klassSeminarId:'',
        pptList:[],
      }
    },
    created() {
      var _this = this;
      this.klassSeminarId=this.$route.query.klassSeminarId;
      this.courseName=this.$route.query.courseName;
      //this.attendanceId=this.$route.query.attendanceId;
      this.$axios({
        method: 'get',
        url: '/round/seminar/'+ this.klassSeminarId+'/attendance'
      }).then(response => {
        for (var i = 0; i < (response.length-1); i++) {
          _this.pptList.push({
            attendanceStatus: response[i].attendanceStatus,
            klassSerial: response[i].klassSerial,
            teamSerial: response[i].teamSerial,
            pptStatus: response[i].pptStatus,
            pptName: response[i].pptName,
            attendanceId: response[i].attendanceId,
          });
      }
      })
    },
    methods: {
      allD(){
        this.$axios({
          method: 'get',
          url: '/seminar/'+ this.klassSeminarId+'/klass/report',
          responseType: 'blob'
        }).then(response => {
          this.download(response)
          //window.open(response, '_blank');
          // window.location.href = response;
        }).catch((error) => {
          alert("下载失败");
        })
      },
      dow(ol,aid) {
        this.ppt = ol;
        console.log(this.ppt);
        this.$axios({
          method: 'get',
          url: '/attendance/' + aid+ '/powerPoint',
          responseType: 'blob'
        }).then(response => {
          this.download(response)
          //window.open(response, '_blank');
          // window.location.href = response;
        }).catch((error) => {
          alert("下载失败");
        })
      },
      download(data) {
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
<style>
  .el-container {
    height: 90vh;
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
  .order{
  //text-align: left;
    height:70px;
    line-height: 70px;
    font-size: 20px;
    border-bottom:1px solid #f4f6f9;
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
