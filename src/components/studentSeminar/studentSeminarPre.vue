<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="stuCenter()">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar()">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <div>
        <div  style="font-size:20px">{{seminarName}}</div>
        <div style="float:left;font-size:15px">第{{nowPreOrder}}组展示</div>
        <div style="float:right;font-size:15px">已有{{questionNum}}名同学提问</div>
      </div>
      <br/>
      <div class="Div" v-for="(team,index) in teams">
        <span class="title">第{{index+1}}组</span>
        <span v-if="team.present===1" class="now">{{team.klassSerial}}-{{team.teamSerial}}</span>
        <span v-else class="notNow">{{team.klassSerial}}-{{team.teamSerial}}</span>
      </div>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" type="primary" >Q&A</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        headerLocation: "",
        tableData: [],
        teams:[],
        seminarName:'',
        nowPreOrder:'',
        questionNum:'',

      }
    },
    created(){
      let _this=this;
      this.headerLocation=this.$route.query.courseName;
      this.seminarName=this.$route.query.seminarName;
      this.$axios({
        method:'get',
        url:'/presentation/'+this.$route.query.klassSeminarId,
      }).then(response=>{
        _this.teams=response;
      })
    },
    methods: {

    }
  }
</script>
<style>
  .el-container {
    height: 95vh;
  }
  .Div{
    width: 100%;
    text-align: left;
    margin:20px;
  }
  .title{
    font-size: 20px;
    display: inline-block;
    width: 30%;
  }
  .now{
    font-size: 20px;
    text-align: center;
    display: inline-block;
    width: 60%;
    color: #F56C6C;
  }
  .notNow{
    font-size: 20px;
    text-align: center;
    display: inline-block;
    width: 60%;
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
