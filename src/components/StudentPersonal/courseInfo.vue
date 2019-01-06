<template>
    <el-container>
      <el-header>
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{headerLocation}}</p>
        <el-dropdown>
          <el-button class="el-icon-menu"></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人页面</el-dropdown-item>
            <el-dropdown-item>讨论课</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main v-loading="loading">
        <el-card>
          <p>课程介绍</p>
          <div style="word-wrap: break-word;">{{courseIntro}}</div>
          <p>成绩计算规则</p>
          <span class="itemSpan">课堂展示</span><span class="itemSpan">{{prePercent}}%</span>
          <span class="itemSpan">课堂提问</span><span class="itemSpan">{{quesPercent}}%</span>
          <span class="itemSpan">书面报告</span><span class="itemSpan">{{repoPercent}}%</span>
          <hr/>
          <span class="itemSpan">组队开始</span><span class="itemSpan">{{teamStartTime}}</span>
          <span class="itemSpan">组队截止</span><span class="itemSpan">{{teamEndTime}}</span>
          <p>组员基本要求</p>
          <span class="itemSpan">小组总人数</span><span class="itemSpan">{{minMember}}-{{maxMember}}</span>
          <p>组内选修课程人数</p>
          <div v-for="item in courseLimitVOS">
            <span class="itemSpan">{{item.courseName}}</span><span class="itemSpan">{{item.minMember}}-{{item.maxMember}}</span>
          </div>
          <p>冲突课程</p>
          <div v-for="item in items">
            <div v-for="course in item">
              <span class="itemSpan">{{course.courseName}}</span><span class="itemSpan">{{course.teacherName}}</span>
            </div>
            <hr/>
          </div>

        </el-card>
      </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "courseInfo",
      data(){
          return{
            headerLocation:"",
            courseIntro:"",
            prePercent:'',
            quesPercent:'',
            repoPercent:'',
            teamStartTime:'',
            teamEndTime:'',
            minMember:'',//组队人数
            maxMember:'',
            items:[],
            courseLimitVOS:[],
            conflictCourseIdS:[],
            loading:true
          }
      },
      created(){
          let _this=this;
          this.headerLocation=this.$route.query.courseName;
          this.$axios({
            method:'get',
            url:'/course/'+this.$route.query.courseId
          }).then(
            function (response) {
              _this.courseIntro=response.introduction;
              _this.prePercent=response.presentationPercentage;
              _this.quesPercent=response.questionPercentage;
              _this.repoPercent=response.reportPercentage;
              _this.teamStartTime=response.teamStartTime;
              _this.teamEndTime=response.teamEndTime;
              _this.minMember=response.minMember;
              _this.maxMember=response.maxMember;
              _this.courseLimitVOS=response.courseLimitVOS;
              // _this.conflictCourseIdS=response.conflictCourseIdS[0];
              for(var index=0;index<response.conflictCourseIdS.length;index++)
              {
                _this.items.push(response.conflictCourseIdS[index]);
              }
              _this.loading=false;
            }
          )
      },
    }
</script>

<style scoped>

  .el-card{
    text-align: left;
  }
  .el-card p{
    color: #494e8f;
    font-size: 18px;

  }
  .itemSpan{
    display: inline-block;
    width:50%;
    height: 25px;
    line-height: 25px;
    text-align: center;

  }
  .el-table{
    white-space: pre-line;
    font-size: 15px;
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
