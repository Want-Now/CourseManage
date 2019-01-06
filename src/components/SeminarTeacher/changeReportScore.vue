<template>
  <el-container id="reportScore">
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{courseName}}-书面报告</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>       </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        :header-cell-style="{'color':'#494e8f','font-size':'18px'}"
        :row-style="{'font-size':'18px','height':'70px'}">
        <el-table-column
          prop="team" label="组别" width="60px" align="center">
          <template slot-scope="scope">
            <span class="buttonText">{{scope.row.klassSerial}}-{{scope.row.teamSerial}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="报告" align="center">
          <template slot-scope="scope">
            <span class="buttonText" v-if="scope.row.reportUrl" style="background-color: #494e8e" @click="dow(scope.row.reportName,scope.row.attendanceId)">{{scope.row.reportName}}</span>
            <span class="buttonText" v-if="!scope.row.reportUrl" >未提交</span>
          </template>
        </el-table-column>
        <el-table-column
          label="成绩" width="80" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.reportScore"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-button class="bottom-button"@click="allDown">批量下载</el-button>
      <el-button class="bottom-button" @click="modify">确认</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
      name: "changeReportScore",
      data(){
          return{
            courseName:"",
            tableData: [],
            klassSeminarId:'',
          }
      },
      created(){
        var _this = this;
        this.klassSeminarId=this.$route.query.klassSeminarId;
        this.courseName=this.$route.query.courseName;
        this.$axios({
          method: 'get',
          url: '/seminar/'+this.klassSeminarId+'/reportSubmitStatus'
        }).then(response => {
          _this.tableData=response;
          console.log(response);
            });
      },
      methods:{
        allDown(){
          this.$axios({
            method: 'get',
            url: '/seminar/'+this.klassSeminarId+'/klass/report',
            responseType: 'blob'
          }).then(response => {
            this.download2(response)
          }).catch((error) => {
            alert("下载失败");
          })},
        download2(data) {
          if (!data) {
            alert("下载失败");
          }
          let url = window.URL.createObjectURL(new Blob([data]))
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download','压缩包.zip')
          document.body.appendChild(link)
          link.click()
        },
        dow(ol,aid) {
          this.ppt = ol;
          this.$axios({
            method: 'get',
            url: '/attendance/' + aid+ '/report',
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
          link.setAttribute('download',this.ppt)
          document.body.appendChild(link)
          link.click()
        },
        modify() {
          var that = this;
          let team = this.$data.tableData;
          let newTeam = [];
          for (var i = 0; i < team.length; i++) {
            newTeam.push({
              teamId: team[i].teamId,
              reportScore: team[i].reportScore,
            });
          }
          console.log(newTeam);
          this.$axios({
            method: 'post',
            url: 'seminar/'+this.klassSeminarId+'/updateReportScore',
            data: {
              thislist:newTeam,
            },
          }).then(function (response) {
            if (response === true) {
              that.$message({
                message: '修改成功',
                type: 'success',
                duration: 800,
              });
            } else {
              that.$message({
                message: '修改失败',
                type: 'error',
                duration: 800
              });
            }
          })
        },
      },
    }
</script>

<style>
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

  .bottom-button{
    width: 85vw;
    height: 50px;
    margin:10px;
    font-size: 18px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;

  }
  .bottom-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .bottom-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
  }

</style>
