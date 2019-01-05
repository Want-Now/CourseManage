<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown" v-if="role==='student'">
          <el-dropdown-item @click.native="stuCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
        <el-dropdown-menu slot="dropdown" v-else-if="role==='teacher'">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main v-loading="loading">
      <el-collapse accordion>
        <el-collapse-item v-for="team in teams" :key="team.teamId">
          <template slot="title" class="title">
            <div class="collapseDiv"  @click="viewTeamMember(team)">
              <i class="el-icon-circle-check-outline"></i>
              {{team.teamSerial}}&nbsp;&nbsp;&nbsp;&nbsp;{{team.teamName}}
              <span class="teamState">{{status}}</span>
            </div>
          </template>
          <el-table  :data="teamMember" v-loading="loading1">
            <el-table-column
              prop="identity"
              label="身份"
              width="50px"
              align="center">
            </el-table-column>
            <el-table-column
              prop="account"
              label="学号"
              align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              align="center">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <div class="collapseDiv" @click="unTeamList">
              <i class="el-icon-refresh"></i>
              未组队学生
            </div>
          </template>
          <el-table  :data="unteamMember"  v-loading="loading2">
            <el-table-column
              prop="account"
              label="学号"
              align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              align="center">
            </el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer v-if="role==='student'">
      <el-button class="bottomButt" v-if="isUnteamed===true&&canTeam===true" @click="goCreateTeam()">创建小组<i class="el-icon-plus"></i></el-button>
      <el-button class="bottomButt" v-if="isUnteamed===false" @click="goMemberTeam()">我的小组</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "teamPage",
      data(){
          return{
            headerLocation:"",
            teams:[
            ],
            teamMember:[],
            unteamMember:[],
            status:'',
            seen:true,
            loading2:true,
            loading1:true,
            loading:true,
            myTeamId:null,
            isUnteamed:'',
            canTeam:''
          }
      },
      computed:{
        role(){
          return this.$store.state.role;
        }
      },
      created(){
          var _this=this;
          var now=this.getDate(new Date());
          var startTime;
          var endTime;
          console.log(now);
          this.$axios({
            method:'get',
            url:'/course/'+this.$route.query.courseId+'/team'
          }).then(response=>{
            startTime=_this.getDate(new Date(response.startTime));
            endTime=_this.getDate(new Date(response.endTime));
            _this.headerLocation=_this.$route.query.courseName;
            _this.teams=response.teams;
            _this.loading=false;
            if(response.myTeamId===null) _this.isUnteamed=true;
            else _this.isUnteamed=false;
            if(now<endTime&&now>startTime) _this.canTeam=true;
            else _this.canTeam=false;
          })

      },
      methods:{
        back(){
          this.$router.go(-1);
        },
        goStudentSet(){
          this.$router.push('/StuSetting');
        },
        goCoursePage(){
          this.$router.push('/StudentCourse');
        },
        viewTeamMember(team){
          let _this=this;
          this.$axios({
            method:'get',
            url:'/course/'+this.$route.query.courseId+'/team/'+team.teamId,
          }).then(response=>{
            _this.loading1=true;
            var member=response.members;
            var leader=response.teamLeader;
            _this.teamMember=member.concat(leader).reverse();
            _this.teamMember[0].identity="组长";
            for(var i=1;i<_this.teamMember.length;i++)
            {
              _this.teamMember[i].identity="组员";
            }
            _this.loading1=false;
          })
        },
        unTeamList(){
          let _this=this;
          this.$axios({
            method: 'get',
            url:'/course/'+this.$route.query.courseId+'/noTeam'
          }).then(response=>{
            _this.unteamMember=response;
            _this.loading2=false;
          })
        },
        goCreateTeam(){
          this.$router.push({
            path:'/CreateTeam',
            query:{courseName:this.$route.query.courseName,courseId:this.$route.query.courseId}
          });
        },
        goMemberTeam(){
          this.$router.push({path:'/MemberTeam',query:{courseName:this.$route.query.courseName,courseId:this.$route.query.courseId,canTeam:this.canTeam}});
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
        },
      }

    }
</script>

<style scoped>
  .el-container{
    height: 95vh;

  }
  .teamState{
    margin-left: 10px;
    color: #ccadad;
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

  .el-icon-circle-check-outline{
    font-size: 18px;
    margin-right:10px;
  }
  .el-icon-refresh{
    font-size: 18px;
    margin-right:10px;
  }
  .collapseDiv{
    width: 100%;
    height: 100%;
    font-size: 15px;
    text-align: left;
  }

</style>

