<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
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
      <el-collapse accordion>
        <el-collapse-item v-for="round in rounds" :key="round.roundId" @loading="loading">
          <template slot="title">
            <div class="clickDiv" @click="getSeminar(round)">
              <span class="titleSpan">第{{round.roundSerial}}轮</span>
            </div>
          </template>

          <el-menu>
            <el-menu-item index="0" @click="goRoundSetting(round,seminars)">
              <i class="el-icon-setting"></i>
              <span style="font-size: 15px">该轮轮次设置</span>
            </el-menu-item>

            <el-submenu v-for="(seminar,index) in seminars" :key="seminar.id" :index="(index+'')">
              <template slot="title">
                <div class="itemDiv"  @click="getKlass(seminar)">
                  <span>{{seminar.topic}}</span>
                </div>
              </template>
              <el-menu-item
                v-for="(klass,index1) in klasses"
                :key="klass.klassId"
                :index="index+'-'+index1"
                @click="goSeminarIndex(round,seminar,klass)">
                <span>{{klass.grade}}-({{klass.klassSerial}})</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-collapse-item>
      </el-collapse>

    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="newSeminar()">新建讨论课</el-button>
    </el-footer>

  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation: "",
        rounds:[],
        seminars:[],
        klasses:[],
        loading:true
      };
    },
    created(){
      let _this=this;
      this.$axios({
        method:'get',
        url:'/course/'+this.$route.query.courseId+'/round'
      }).then(
        function (response) {
          _this.headerLocation=_this.$route.query.courseName;
          _this.rounds=response;
        }
      );
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getSeminar(round){
        this.loading=true;
        let _this=this;
        this.$axios({
          method:'get',
          url:'/round/'+round.roundId+'/seminar'
        }).then(response=>{
          _this.seminars=response;
        })
        this.loading=false;
      },
      getKlass(seminar){
        let _this=this;
        this.$axios({
          method:'get',
          url:'/seminar/'+seminar.id+'/klass'
        }).then(response=>{
          _this.klasses=response;
        })
      },
      goRoundSetting(round,seminars){
        this.$router.push({path:'/RoundSeting',
          query:{
          roundId:round.roundId,
            courseId:this.$route.query.courseId,
            courseName:this.$route.query.courseName,
            seminars:seminars
        }});
      },
      goSeminarIndex(round,seminar,klass){
        this.$router.push({
          path:'/TeacherSeminarIndex',
          query:{
            roundSerial:round.roundSerial,
            seminarId:seminar.id,
            klassId:klass.klassId,
            courseName:this.$route.query.courseName,

          }
        })
      }
    }
  }
</script>
<style scoped>
  .el-container{
    height:98vh;
  }
  .el-menu-item{
    text-align: left;
  }
  .clickDiv{
    width: 100%;
    height: 100%;
    text-align: left;
  }
  .titleSpan{
    font-size: 18px;
  }
  .itemDiv{
    width: 100%;
    height: 100%;
    font-size: 15px;
    text-align: left;
  }
  .itemP{
    font-size: 15px;
    text-align: left;
  }
  .el-icon-setting{
    font-size: 18px;
  }
  .el-input__inner{
    height: 50px;
    font-size: 15px;
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
