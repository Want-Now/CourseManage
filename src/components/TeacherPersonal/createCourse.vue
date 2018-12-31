<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>创建课程</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-form :model="courseForm" label-position="left">
        <el-form-item prop="name">
          <el-input v-model="courseForm.name" class="activeInput" placeholder="课程名称">
          </el-input>
        </el-form-item>
        <el-form-item prop="introduction">
          <el-input v-model="courseForm.introduction" type="textarea" class="introInput" placeholder="课程要求"></el-input>
        </el-form-item>
        <p class="title">成绩计算规则</p>
        <el-form-item prop="prePercent">
          <el-input v-model="courseForm.prePercent">
            <template slot="prepend">课堂展示</template>
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="quesPercent">
          <el-input v-model="courseForm.quesPercent">
            <template slot="prepend">课堂提问</template>
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="repoPercent">
          <el-input v-model="courseForm.repoPercent">
            <template slot="prepend">书面报告</template>
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
      </el-form>
      <p class="title">组员基本要求</p>
      <el-form :data="teamRuleForm">
        <el-form-item label="小组人数上限：" class="form-item" prop="teamMaxNum">
          <el-input-number size="small" v-model="teamRuleForm.maxMember"></el-input-number>
        </el-form-item>
        <el-form-item label="小组人数下限：" class="form-item" prop="teamMinNum">
          <el-input-number size="small" v-model="teamRuleForm.minMenber" ></el-input-number>
        </el-form-item>
        <el-form-item label="组队开始时间：" prop="teamStartDate">
          <el-date-picker size="middle" class="date-picker" type="datetime"  value-format="yyyy-MM-dd HH:mm:ss" v-model="teamRuleForm.teamStartDate" ></el-date-picker>
        </el-form-item>
        <el-form-item label="组队截止时间：" prop="teamEndDate">
          <el-date-picker size="middle" class="date-picker" type="datetime"  value-format="yyyy-MM-dd HH:mm:ss" v-model="teamRuleForm.teamEndDate"></el-date-picker>
        </el-form-item>
      </el-form>
      <!--<p style="margin-top: 20px;text-align: left">组内选修课程人数</p>-->
      <div class="second-form-title">
        <span>组内选修课程人数：</span><el-button type="primary" @click="newCourseSelect">新增</el-button>
      </div>
      <div class="tooltip1">
        <span>均满足指选课人数均需达到要求，满足其一指任意选课人数满足即可</span>
      </div>
      <el-form :model="item" v-for="item ,index in formTeamRules.teamSelectNumber" ref="formTeamRules" class="team-rule-form" label-width="140px" :key="index">
        <el-form-item label="课程：" prop="courseId">
          <el-select placeholder="请选择课程" size="small" v-model="item.courseId" class="form-item">
            <el-option v-for="course,index in courseList" :key="index" :value="course.id" :label="course.courseName"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="该课程人数上限：" prop="teamSelectMaxNum">
          <el-input-number :min="0" size="small" v-model="item.teamSelectMaxNum"></el-input-number>
        </el-form-item>
        <el-form-item label="该课程人数下限：" prop="teamSelectMinNum">
          <el-input-number :min="0" size="small" v-model="item.teamSelectMinNum"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="danger" @click="deleteCourseSelect(index)">删除该要求</el-button>
        </el-form-item>
      </el-form>
      <el-form :model="formTeamRules" ref="formTeamRules" class="team-rule-form">
        <el-form-item prop="orAnd" label="选修课人数要求：">
          <el-switch active-color="#13ce66"
                     inactive-color="#ff4949"
                     active-text="均满足"
                     inactive-text="满足其一"
                     v-model="formTeamRules.orAnd"></el-switch>
        </el-form-item>

      </el-form>
      <div class="blank-spaces"></div>
      <div class="second-form-title">
        <span>冲突课程：</span><el-button type="primary" @click="newConflictCourse">新增</el-button><br/>
      </div>
      <div class="tooltip1">
        <span>选修了不同冲突课程的学生不可同组，同课程名不同教师也为不同课程</span>
      </div>
      <el-form :model="item" v-for="item,index in formTeamRules.teamConflict" :key="index" ref="formTeamRules" label-width="100px" class="team-rule-form" :rules="rulesFormTeam">
        <el-form-item prop="courseId" label="冲突课程：" >
          <el-select multiple size="small" class="form-item1" v-model="item.courseId">
            <el-option v-for="course in courseList" :key="course.id" :value="course.id" :label="course.courseName"></el-option>
          </el-select>&nbsp;<el-button size="small" type="danger" @click.prevent="deleteConflictCourse(index)">删除</el-button>
        </el-form-item>
      </el-form>


    </el-main>
    <el-footer>
      <el-button class="bottomButt">新建</el-button>
    </el-footer>

  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        courseForm:{
          name:'',
          introduction:'',
          prePercent:'',
          repoPercent:'',
          quesPercent:'',
        },
        teamRuleForm:{
          minMenber:'',
          maxMember:'',
          teamStartDate:'',
          teamEndDate:''
        },
        formTeamRules:{
          // teamMinNum:0,
          // teamMaxNum:0,
          // teamStartDate:'',
          // teamEndDate:'',
          orAnd:false,
          teamSelectNumber:[
            // {
            //   courseId:'',
            //   teamSelectMinNum:0,
            //   teamSelectMaxNum:0
            // }
          ],
          teamConflict:[
            // {
            //   courseId:[],
            //
            // },
          ],

        },
        courseList:[],
      };
    },
    methods:{
      deleteConflictCourse(index){
        this.$data.formTeamRules.teamConflict.splice(index,1);
      },
      newConflictCourse(){
        this.$data.formTeamRules.teamConflict.push({
          courseId:[],
        })
      },
      deleteCourseSelect(index){
        this.$data.formTeamRules.teamSelectNumber.splice(index,1);
      },
      newCourseSelect(){
        this.$data.formTeamRules.teamSelectNumber.push({
          courseId:'',
          teamSelectMaxNum:'',
          teamSelectMinNum:''
        })
      },
    }

  }
</script>
<style>
  .el-container {
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
  .title{
    border-top: solid 1px #C0C4CC;
    padding-top: 10px;
    font-size: 20px;
  }
  .numInput{
    width: 18vw;
  }
  .second-form-title{
    margin-top: 2vh;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
  .form-item{
    text-align: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .tooltip1{
    margin-top: 1vh;
    font-size: 12px;
    color: darkgrey;
    text-align: left;
  }
  .form-item1{
    text-align: left;
    margin-left: 0;
    width: 50%;
  }
</style>
<style>
  .introInput{
    font-size: 20px;
  }
</style>
