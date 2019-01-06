<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()" ></el-button>
      <p>创建课程</p>
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
      <el-form :model="courseForm" label-position="left"  :rules="rulesNewCourse" ref="courseForm">
        <el-form-item prop="courseName">
          <el-input v-model="courseForm.courseName" class="activeInput" placeholder="课程名称">
          </el-input>
        </el-form-item>
        <el-form-item prop="introduction">
          <el-input v-model="courseForm.introduction" type="textarea" class="introInput" placeholder="课程要求"></el-input>
        </el-form-item>
        <p class="title">成绩计算规则</p>
        <el-form-item prop="presentationPercentage">
          <el-input v-model="courseForm.presentationPercentage" >
            <template slot="prepend">课堂展示</template>
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="questionPercentage">
          <el-input v-model="courseForm.questionPercentage">
            <template slot="prepend">课堂提问</template>
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="reportPercentage">
          <el-input v-model="courseForm.reportPercentage">
            <template slot="prepend">书面报告</template>
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
      <p class="title">组员基本要求</p>
        <el-form-item label="小组人数上限：" class="form-item" prop="maxMember">
          <el-input-number size="small" v-model="courseForm.maxMember"></el-input-number>
        </el-form-item>
        <el-form-item label="小组人数下限：" class="form-item" prop="minMember">
          <el-input-number size="small" v-model="courseForm.minMember"></el-input-number>
        </el-form-item>
        <el-form-item label="组队开始时间：" prop="teamStartDate">
          <el-date-picker size="middle" class="date-picker" type="datetime"  value-format="yyyy-MM-dd HH:mm:ss" v-model="courseForm.teamStartDate" ></el-date-picker>
        </el-form-item>
        <el-form-item label="组队截止时间：" prop="teamEndDate">
          <el-date-picker size="middle" class="date-picker" type="datetime"  value-format="yyyy-MM-dd HH:mm:ss" v-model="courseForm.teamEndDate"></el-date-picker>
        </el-form-item>
      </el-form>
      <!--<p style="margin-top: 20px;text-align: left">组内选修课程人数</p>-->
      <div class="second-form-title">
        <span>组内选修课程人数：</span><el-button type="primary" @click="newCourseSelect">新增</el-button>
      </div>
      <div class="tooltip1">
        <span>均满足指选课人数均需达到要求，满足其一指任意选课人数满足即可</span>
      </div>
      <el-form :model="item" v-for="item ,index in courseForm.courseLimitVOS" class="team-rule-form" label-width="140px"  :rules="rulesFormTeam">
          <el-form-item prop="courseId" label="课程：" >
            <el-select size="small" class="form-item" v-model="item.courseId">
              <el-option v-for="course in courseList" :key="course.CourseId" :value="course.CourseId"  :label="`${course.CourseName}(${course.TeacherName}老师)`">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form-item>
        <el-form-item label="该课程人数上限：" prop="teamSelectMaxNum">
          <el-input-number size="small" v-model="item.maxMember"></el-input-number>
        </el-form-item>
        <el-form-item label="该课程人数下限：" prop="teamSelectMinNum">
          <el-input-number size="small" v-model="item.minMember"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="danger" @click="deleteCourseSelect(index)">删除该要求</el-button>
        </el-form-item>
      </el-form>
        <div prop="flag" label="选修课人数要求：">
          <el-switch active-color="#13ce66"
                     inactive-color="#ff4949"
                     active-text="均满足"
                     inactive-text="满足其一"
                     v-model="courseForm.flag"></el-switch>
        </div>
      <div class="blank-spaces"></div>
      <div class="second-form-title">
        <span>冲突课程：</span><el-button type="primary" @click="newConflictCourse">新增</el-button><br/>
      </div>
      <div class="tooltip1">
        <span>选修了不同冲突课程的学生不可同组，同课程名不同教师也为不同课程</span>
      </div>
      <el-form :model="item" v-for="item,index in courseForm.conflictCourseIdS":key="index"  class="team-rule-form" :rules="rulFormTeam">
        <el-form-item prop="courseId" label="冲突课程：" >
          <br>
          <el-select multiple size="small" class="form-item1" v-model="item.courseId">
            <el-option v-for="course in courseList" :key="course.CourseId" :value="course.CourseId"  :label="`${course.CourseName}(${course.TeacherName}老师)`">
            </el-option>
          </el-select>&nbsp;<el-button size="small" type="danger" @click.prevent="deleteConflictCourse(index)">删除</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="creat('courseForm')">新建</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      //比例判断
      let validateRate = (rule, value, callback) => {
        if (this.$data.courseForm.presentationPercentage && this.$data.courseForm.questionPercentage && this.$data.courseForm.reportPercentage) {
          let a = parseInt(this.$data.courseForm.presentationPercentage);
          let b = parseInt(this.$data.courseForm.questionPercentage);
          let c = parseInt(this.$data.courseForm.reportPercentage);
          let total = a + b + c;
          if (total === 100) {
            callback();
          } else {
            callback(new Error('比例和要为100%'))
          }
        } else {
          callback();
        }
      };
      //日期判断
      let validateDate = (rule, value, callback) => {
        if (this.$data.courseForm.teamStartDate !== '' && this.$data.courseForm.teamEndData !== '') {
          if (this.$data.courseForm.teamStartDate < this.$data.courseForm.teamEndDate) {
            callback();
          } else {
            callback(new Error('结束日期要晚于开始日期'));
          }
        } else {
          callback();
        }
      };
      //组队判断
      let validateTeam = (rule, value, callback) => {

        if (this.$data.courseForm.maxMember < this.$data.courseForm.minMember) {

          callback(new Error('人数上限达能小于下限！'));

        } else {

          callback();

        }

      };
      return {
        rulesFormTeam: {
          courseId: [
            {required: true, message: '请选择课程！', trigger: 'change'}
          ],
          maxMember: [
            {validator: validateTeam, trigger: 'change'}
          ],
          minMember: [
            {validator: validateTeam, trigger: 'change'}
          ],
        },
        rulFormTeam: {
          courseId: [
            {required: true, message: '请选择课程！', trigger: 'change'}
          ],
          maxMember: [
            {validator: validateTeam, trigger: 'change'}
          ],
          minMember: [
            {validator: validateTeam, trigger: 'change'}
          ],
        },
        rulesNewCourse: {
          courseName: [
            {required: true, message: '请输入课程名', trigger: 'change'},
            {max: 20, message: '课程名长度不能超过20', trigger: 'change'}
          ],
          introduction: [
            {required: true, message: '请输入课程详情', trigger: 'change'}
          ],
          presentationPercentage: [
            {required: true, message: '请输入课堂展示成绩占比', trigger: 'change'},
            {validator: validateRate, trigger: 'change'}
          ],
          questionPercentage: [
            {required: true, message: '请输入课堂提问成绩占比', trigger: 'change'},
            {validator: validateRate, trigger: 'change'}
          ],
          reportPercentage: [
            {required: true, message: '请输入书面报告成绩占比', trigger: 'change'},
            {validator: validateRate, trigger: 'change'}
          ],
          maxMember: [
            {validator: validateTeam, trigger: 'change'}
          ],
          minMember: [
            {validator: validateTeam, trigger: 'change'}
          ],
          teamEndDate: [
            {required: true, message: '请选择组队结束时间', trigger: 'change'},
            {validator: validateDate, trigger: 'blur'}
          ],
          teamStartDate: [
            {required: true, message: '请选择组队开始时间', trigger: 'change'},
          ]
        },
        courseForm: {
          courseName: '',
          courseId:'',
          introduction: '',
          presentationPercentage: '',
          questionPercentage: '',
          reportPercentage: '',
          maxMember: '',
          minMember: '',
          teamEndDate: '',
          teamStartDate: '',
          flag: true,
          courseLimitVOS: [],
          conflictCourseIdS: []
        },
        formTeamRules: [{
          courseName: '',
          courseId: '',
          minMember: '',
          manMember: '',
        }],
        teamConflict: [
          // {
          //   courseId:[],
          //
          // },
        ],
        courseList: [
          {
            CourseId: '',
            CourseName: '',
            TeacherId: '',
            TeacherName: '',
          }
        ],
      }
    },
    created(){
      var that=this;
      this.$axios({
          method: 'get',
          url: "/course/getAllCourse"
      }).then(function (response) {
        that.courseList=response;
      })
    },
    methods:{
      deleteConflictCourse(index){
        this.$data.courseForm.conflictCourseIdS.splice(index,1);
      },
      newConflictCourse(){
        this.$data.courseForm.conflictCourseIdS.push({
          courseId:[],
        })
      },
      deleteCourseSelect(index){
        this.$data.courseForm.courseLimitVOS.splice(index,1);
      },
      newCourseSelect(){
        this.$data.courseForm.courseLimitVOS.push({
          courseId:'',
          minMember:'',
          maxMember:''
        })
      },
      creat(courseForm) {
        var that = this;
        let teamStrategy = this.$data.courseForm.courseLimitVOS;
        let newTeamStrategy = [];
        for (var i = 0; i < teamStrategy.length; i++) {
          newTeamStrategy.push({
            courseName: teamStrategy[i].courseName,
            courseId: teamStrategy[i].courseId,
            minMember: teamStrategy[i].minMember,
            maxMember: teamStrategy[i].maxMember,
          });
        }
        //转化冲突课程
        let teamConflict = this.$data.courseForm.conflictCourseIdS;
        let conflictList = [];
        for (let i = 0; i < teamConflict.length; i++) {
           let temp=[]
          for (let j = 0; j < teamConflict[i].courseId.length; j++) {
            temp.push({
              courseId: teamConflict[i].courseId[j]
            });
          }
          conflictList.push(temp);
        }
        this.$refs[courseForm].validate((valid) => {
          if (valid) {
            this.$axios({
              method: 'post',
              url: "/course/creatCourse",
              data: {
                courseName: this.courseForm.courseName,
                introduction: this.courseForm.introduction,
                presentationPercentage: this.courseForm.presentationPercentage,
                reportPercentage: this.courseForm.reportPercentage,
                questionPercentage: this.courseForm.questionPercentage,
                teamStartTime: this.getDate(new Date(this.courseForm.teamStartDate)),
                teamEndTime: this.getDate(new Date(this.courseForm.teamEndDate)),
                minMember: this.courseForm.minMember,
                maxMember: this.courseForm.maxMember,
                courseLimitVOS: newTeamStrategy,
                conflictCourseIdS: conflictList,
                flag: this.courseForm.flag,
              }
            }).then(function (response) {
              if (response === true) {
                that.$message({
                  message: '创建成功',
                  type: 'success',
                  duration: 800
                });
                that.$router.push('/courseManage');
              } else {
                that.$message({
                  message: '创建失败',
                  type: 'error',
                  duration: 800
                });
              }
            })
          }
        })
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
    //margin-left: 0;
    width: 60%;
  }
</style>
<style>
  .introInput{
    font-size: 20px;
  }
</style>
