<template>
    <el-container>
      <el-header>
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{topic}}</p>
        <el-button class="el-icon-menu" ></el-button>
      </el-header>
      <el-main>
        <div class="seminarTopic">
          <el-switch
            v-model="start1"
            active-text="开始"
            inactive-text="暂停"
            @change="stopOrStartSeminar">
          </el-switch>
        </div>
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane label="1-3">
            <div class="info">
              {{message}}
            </div>
            <div class="info">
              {{questionTime}}
            </div>
            <el-input v-model="presentationScore" type="input" class="scoreInput"></el-input>
            <p>展示分数</p>
            <el-button @click="getQuestion()">
              抽取提问
            </el-button><br/>
            <el-button>
              下组展示
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
      name: "SeminarProceed",

      data(){
        return{
          topic:"业务流程分析",
          presentationScore:'',
          message:"1-3组展示 5：00 ",
          questionTime:"已有2名同学提问",
          start1:true
        }

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
        stopOrStartSeminar()
        {
          var m="";
          if(this.start1==true) m="Start";
          else m="Stop";

          this.$message({
            message: m,
            duration:800,
            center: true
          });
        },

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
    height: 150px;
  }

</style>
