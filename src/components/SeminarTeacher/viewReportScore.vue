<template>
  <el-container id="reportScore">
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{topic}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="team" label="组别" width="50">
        </el-table-column>
        <el-table-column
          prop="file" label="报告">
        </el-table-column>
        <el-table-column
          prop="reportScore" label="成绩" width="50">

        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
        <el-button class="bottomButt">确认</el-button>

        <el-button class="bottomButt">修改</el-button>

    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "viewReportScore",
    data(){
      return{
        topic:"",
        tableData: [],
      }
    },
    created(){
      let _this=this;
      this.topic=this.$route.query.courseName+'-书面报告成绩';
      this.$axios({
        method:'get',
        url:'/seminar/'+this.$route.query.klassSeminarId+'/reportSubmitStatus'
      }).then(response=>{
        for(var index=0;index<response.length;index++)
        {
          _this.tableData.push({
            teamName:response[index].teamName,
            presentationScore:response[index].presentationScore,
            questionScore:response[index].questionScore,
            reportScore:response[index].reportScore,
            score:response[index].totalScore,
          });
        }
      })
    },
  }
</script>

<style scoped>
  .el-button{
    margin:10px;
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
