<template>
    <el-container>
      <el-header>
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{courseName}}</p>
        <el-button class="el-icon-menu"></el-button>
      </el-header>
      <el-main>
        <p class="seminarName">{{seminarName}}</p>
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane v-for="item in seminarInfos" :label="item.preTeam" :key="item.id">
            <div class="info">
              已有{{item.questionNum}}位同学提问
            </div>
            <el-input v-model="item.presentationScore" :key="item.id" type="input" class="scoreInput"></el-input>
            <p>展示分数</p>
            <el-button>
              确认打分
            </el-button><br/>
            <el-button @click="getQuestion()">
              抽取提问
            </el-button><br/>
            <el-button>
              下组展示
            </el-button>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
</template>

<script>
    export default {
      name: "SeminarProceed",

      data(){
        return{
          courseName:"",
          seminarName:'',
          seminarInfos:[],

        }
      },
      created(){
        let _this=this;
        this.courseName=this.$route.query.courseName;
        this.seminarName=this.$route.query.seminarName;
        this.$axios({
          method:'get',
          url:'/presentation/'+this.$route.query.klassSeminarId
        }).then(
          response=>{
            _this.seminarInfos=response.attendanceList;
          }
        )
      },
      methods: {
        back(){
          this.$router.go(-1);
        },
        getQuestion(){
          this.$router.push("/SeminarQuestionScore");
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },

      }
    }
</script>

<style scoped>
  .seminarName{
    margin-top: 0px;
    font-size: 18px;
    color: #494e8f;
  }
  .el-tabs{
    position: absolute;
    height: 75%;
    width: 100%;
    left: 10px;
  }

  .el-tab-pane{
    text-align: center;
  }
  .el-tab-pane p{
    font-size: 25px;
  }


  .info{
    display: inline-block;
    width: 200px;
    color: #8084b1;
    font-size: 15px;
    text-align: center;

  }


  .el-tab-pane .el-button{
    width: 120px;
    height: 40px;
    font-size: 18px;
    margin: 10px;
    padding: 0px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;

  }
  .el-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .el-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
  }

  .seminarTopic{
    width: 100%;
    height: 40px;
    padding: 0px;
    margin: 0px 10px 0px 0px;
    text-align: center;
    color: #595959;
    font-size: 18px;
    border-bottom: solid 1px #8084b1;
    /*line-height: 20px;*/

  }
  .el-switch{
    position: relative;
    left: -5px;
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
<style>
  .scoreInput .el-input__inner{
    position: relative;
    top: 30px;
    height: 150px;
    width: 150px;
    margin-bottom: 10px ;
    font-size: 50px;
    text-align: center;
    height: 150px;
  }

</style>
