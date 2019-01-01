<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-menu courseButt">&nbsp;选择课程</button>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt">&nbsp;退出系统</button>
    </div>
    <teacherMenu></teacherMenu>
    <el-main style="margin-left:20%" >
      <br>
      <el-card class="box-card" size="large" v-for="round in rounds" :key="round.roundId">
        <div slot="header" class="clearfix">
          <span style="font-size:25px;color:#409dfe;font-weight:bold">第{{round.roundSerial}}轮讨论课</span>
        </div>
        <div v-for="seminar in rounds" :key="seminar.id" >
          <el-row>
            <el-col :span="12">  <div style="font-size:20px">{{seminar.topic}}</div></el-col>
            <el-col :span="12"> <el-button type="primary">进入</el-button></el-col>
          </el-row>
        </div>
      </el-card>
  </el-main>
    </div>
</template>

<script>
  import teacherMenu from './teacherMenu'
  export default {
    name: "PCseminarIndex",
    components:{
      teacherMenu,
    },
    data() {
      return {
        rounds:[{
        }]
      }
    },
    created(){
    this.getround()
   },
    methods:{
      getround(){
        var _this=this;
        this.$axios({
          method:'get',
        //  url:'/course/'+16+'/PC'
        }).then(response=>{
          _this.rounds=response;
        })
      },
    }
    */
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
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
