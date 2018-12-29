<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-button class="el-icon-menu" ></el-button>
    </el-header>
    <el-main>
      <div class="seminarTopic">{{topic}}</div>
      <el-tabs tab-position="left" @tab-click="handleClick1" >
        <el-tab-pane v-for="question in questions" :key="question.id" :label="question.team">
          <div class="info">
            {{question.preTeam}}正在展示
          </div>
          <div class="info">
            已有{{question.questionNum}}名同学提问
          </div>
          <el-input v-model="question.questionScore" type="input" class="scoreInput"></el-input>
          <p>提问分数</p>
          <el-button>
            下个提问
          </el-button><br/>
          <el-button @click="back()">
            下组展示
          </el-button>
        </el-tab-pane>
      </el-tabs>



    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: "seminarQuestionScore",
      data(){
        return{
          headerLocation:"讨论课",
          topic:'业务流程',
          questions:[
            {
              team:'1-3'
            }
          ],
          // seminarInfos:[
          //   {
          //     preTeam: '1-1'
          //   }
          // ]

        }
      },
      methods: {
        back(){
          this.$router.go(-1);
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleClick1(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
  .el-tabs{
    position: absolute;
    height: 75%;
    width: 100%;
    left: 10px;
    top:140px;
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
  }
</style>
