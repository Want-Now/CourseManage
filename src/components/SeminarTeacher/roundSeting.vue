<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
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
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:20px;color:#494e8f;">讨论课：</span>
        </div>
        <div class="text item" v-for="seminar in seminars" :key="seminar.id">
          {{seminar.topic}}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:20px;color:#494e8f;">成绩设置：</span>
        </div>
        <el-form :rules="rule">
          <el-form-item prop="preMethod">
            <span>展示：</span>
            <el-select v-model="preMethod" placeholder="请选择">
              <el-option label="最高分" :value="1"></el-option>
              <el-option label="平均分" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="quesMethod">
            <span>提问：</span>
            <el-select v-model="quesMethod" placeholder="请选择">
              <el-option label="最高分" :value="1"></el-option>
              <el-option label="平均分" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="repoMethod">
            <span>报告：</span>
            <el-select v-model="repoMethod" placeholder="请选择">
              <el-option label="最高分" :value="1"></el-option>
              <el-option label="平均分" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="float:left;font-size:20px;color:#494e8f;">本轮讨论课报名次数：</span>
        </div>
        <p class="klassItem" v-for="klass in klasses" :key="klass.klassId">
          <span style="margin-right: 10px">{{klass.grade}}-({{klass.klassSerial}})</span>
          <el-input-number v-model="klass.enroll"  :min="1" :max="2" label="申请次数"></el-input-number>
        </p>
      </el-card>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="roundSetting()">确认修改</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation:"",
        preMethod: '',
        repoMethod: '',
        quesMethod: '',
        seminars:'',
        klasses:[],
        rule: {
          repoMethod: [
            { required: true, message: '请选择', trigger: 'blur' }
          ],
          quesMethod: [
            { required: true, message: '请选择', trigger: 'blur' }
          ],
          preMethod: [
            { required: true, message: '请选择', trigger: 'blur' }
          ],
        },
      };
    },
    created(){
      let _this=this;
      this.$axios({
        method:'get',
        url:'/round/'+this.$route.query.roundId,
        params:{
          courseId:this.$route.query.courseId
        }
      }).then(
        response=>{
          _this.headerLocation=_this.$route.query.courseName;
          _this.seminars=_this.$route.query.seminars;
          _this.preMethod=_this.getMethod(response.presentationScoreMethod);
          _this.repoMethod=_this.getMethod(response.reportScoreMethod);
          _this.quesMethod=_this.getMethod(response.questionScoreMethod);
          _this.klasses=response.enrollNum;
        }
      )
    },
    methods: {
      getMethod(a){
        if(a==='平均分'){
          return 0;
        }
        else if(a==='最高分'){
          return 1;
        }
      },
      roundSetting(){

      }
    }
  }
</script>
<style>
  .el-container {
    height: 98vh;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-bottom: 20px;
  }
  .klassItem{
    margin-bottom: 10px;
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
