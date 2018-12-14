<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
      <el-button class="el-icon-menu" ></el-button>
    </el-header>
    <el-main>
      <div class="seminarTopic">{{topic}}</div>
      <el-tabs tab-position="left" @tab-click="handleClick">
        <el-tab-pane label="1-3">
          <div class="info">
            {{message}}
          </div>
          <div class="info">
            {{questionTime}}
          </div>
          <el-input v-model="presentationScore" type="input" ></el-input>
          <p>展示分数</p>

          <el-button>
            确认修改
          </el-button>
        </el-tab-pane>
        <el-tab-pane label="1-5"></el-tab-pane>
        <el-tab-pane label="1-7"></el-tab-pane>
        <el-tab-pane label="1-2"></el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: "seminarChangePScore",
      data(){
        return{
          topic:'业务流程分析',
          headerLocation:"讨论课",
          presentationScore:'',
          message:"1-5组展示 5：00 ",
          questionTime:"已有2名同学提问",
        }
      },
      methods: {
        handleClick(tab, event) {
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

  .el-input__inner{
    position: relative;
    top: 30px;
    height: 150px;
    width: 150px;
    margin-bottom: 10px ;
    font-size: 50px;
    text-align: center;
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
</style>
