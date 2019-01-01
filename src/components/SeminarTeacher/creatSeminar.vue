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
      <p class="title">新建讨论课</p>
      <el-form :model="seminarForm" :rules="rules" ref="seminarForm" label-width="110px">
        <el-form-item label="讨论课主题" prop="topic" >
          <el-input class="inputCss" v-model="seminarForm.topic"></el-input>
        </el-form-item>
        <el-form-item label="讨论课内容" prop="introduction">
          <el-input type="textarea" v-model="seminarForm.introduction"></el-input>
        </el-form-item>
        <el-form-item label="开始报名时间" prop="preApplyStartDate">
          <el-date-picker  type="datetime" placeholder="选择日期时间" default-time="12:00:00" v-model="seminarForm.preApplyStartDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束报名时间" prop="preApplyEndDate">
          <el-date-picker  type="datetime" placeholder="选择日期时间" default-time="12:00:00" v-model="seminarForm.preApplyEndDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="报名小组数" prop="applyNum">
          <el-input-number v-model="seminarForm.applyNum" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="所属Round" prop="round">
          <el-select v-model="seminarForm.round" placeholder="无(默认新建Round)">
            <el-option value="0" label="无(默认新建Round)"></el-option>
            <el-option v-for="roundItem in rounds" :key="roundItem.roundId" :value="roundItem.roundId" :label="roundItem.roundSerial"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="讨论课可见" prop="isViewed" >
          <el-switch v-model="seminarForm.isViewed" active-text="可见" inactive-text="不可见"></el-switch>
        </el-form-item>
      </el-form>

    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="uploadSeminar('seminarForm')">发布</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation:"OOAD",
        seminarForm: {
          topic: '',
          introduction: '',
          isViewed: true,
          preApplyStartDate: '',
          preApplyEndDate: '',
          applyNum: '',
          round:'0',
        },
        rounds:[],
        rules: {
          topic: [
            { required: true, message: '请输入讨论课主题', trigger: 'blur' },
          ],
          introduction:[
            { required: true, message: '请输入讨论课要求', trigger: 'blur' },
          ],
          preApplyStartDate:[
            { required: true, message: '请输入报名开始时间', trigger: 'blur' },
          ],
          preApplyEndDate:[
            { required: true, message: '请输入报名结束时间', trigger: 'blur' },
          ],
        }
      };
    },
    created(){
      this.rounds=this.$route.query.rounds;
    },
    methods: {
      uploadSeminar(form)
      {
        let _this=this;
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.$axios({
              method:'post',
              url:'/course/'+this.$route.query.courseId+'/seminar/creatSeminar',
              data:{
                roundId:this.seminarForm.round,
                seminarName:this.seminarForm.topic,
                introduction:this.seminarForm.introduction,
                maxTeam:parseInt(this.seminarForm.applyNum),
                visible:this.boolToInt(this.seminarForm.isViewed),
                enrollStartTime:this.getDate(this.seminarForm.preApplyStartDate),
                enrollEndTime:this.getDate(this.seminarForm.preApplyEndDate),
                seminarSerial:10
              }
            }).then(
              response=>{
                if(response===true){
                  _this.$message({
                    message:'创建讨论课成功',
                    type:'success',
                    duration:800
                  });
                  _this.$router.go(-1);
                }else{
                  _this.$message({
                    message:'创建讨论课失败',
                    type:'error',
                    duration:800
                  });
                }
              }
            )
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      boolToInt(value){
        if(value===true){
          return 1;
        }
        else if(value===false){
          return 0;
        }
      },
      getDate(date) {
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var Hours = date.getHours();
        var Minutes = date.getMinutes();
        var Seconds = date.getSeconds();

        if (Hours >= 0 && Hours <= 9) {
          Hours = "0" + Hours;
        }
        if (Minutes >= 0 && Minutes <= 9) {
          Minutes = "0" + Minutes;
        }
        if (Seconds >= 0 && Seconds <= 9) {
          Seconds = "0" + Seconds;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + Hours + seperator2 + Minutes
          + seperator2 + Seconds;
        return currentdate;
      }

    }
  }
</script>
<style scoped>
  .title{
    margin-top: 0px;
    color: #494e8f;
    font-size: 18px;
  }

  .el-container{
    height: 98vh;
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
  .inputCss .el-input__inner{
    height: 40px;
    font-size: 18px;
  }
</style>
