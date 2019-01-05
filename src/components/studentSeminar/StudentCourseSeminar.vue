<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{courseName}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="stuCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-collapse accordion>
        <el-collapse-item v-for="(round,index) in rounds" :key="round.roundId">
          <template slot="title">
            <div class="clickDiv" @click="getSeminar(round)">
              <span class="titleSpan" style="font-size:150%;">第{{round.roundSerial}}轮</span>
            </div>
          </template>
          <el-menu>
            <el-submenu v-for="(seminar,index) in seminars" :key="seminar.id" :index="(index+'')">
              <template slot="title">
                <div class="itemDiv" style="font-size:120%" @click="goSeminar(round,seminar)">
                  <span><span style="float:left">{{index+1}}</span>{{seminar.topic}}</span>
                </div>
              </template>
            </el-submenu>
          </el-menu>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        courseName: '',
        rounds: [],
        seminars: [],
        klasses: [],
        loading: true,
      }
    },
    created() {
      let _this = this;
      this.$axios({
        method: 'get',
        url: '/course/' + this.$route.query.courseId + '/round'
      }).then(
        function (response) {
          _this.courseName = _this.$route.query.courseName;
          _this.rounds = response;
          console.log(response);
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
          console.log(response);
          console.log(round.roundId);
        })
        _this.loading=false;
      },
      goSeminar(round, seminar) {
        console.log("出书seminar");
        console.log(seminar.klassSeminarId);
        this.$router.push({
          path: '/studentSeminarIndex',
          query: {
            klassSeminarId: seminar.klassSeminarId,
            courseName: this.$route.query.courseName,
          }
        })
      }
    }
  }
</script>
<style scoped>
  .el-col{
    font-size:100%;
    width:30%;
    height: 400%;
    line-height: 200%;
  }
  .el-input__inner{
    height: 50px;
    font-size: 15px;
  }
  .el-icon-document{
    font-size: 18px;
  }
  .el-table{
    position: relative;
    top: -50px;
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
