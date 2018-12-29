<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="goStudentSet">个人页面</el-dropdown-item>
          <el-dropdown-item @click="goCoursePage">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-collapse>
        <el-collapse-item v-for="team in teams" :key="team.id">
          <template slot="title">
            <i class="el-icon-circle-check-outline"></i>
            {{team.teamName}}
            <span class="teamState">{{team.teamState}}</span>
          </template>
          <el-table  :data="team.teamMember">
            <el-table-column
              prop="identity"
              label="身份">
            </el-table-column>
            <el-table-column
              prop="studentNum"
              label="学号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <i class="el-icon-refresh"></i>
            未组队学生
          </template>
          <el-table  :data="unteamMember">
            <el-table-column
              prop="studentNum"
              label="学号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
          </el-table>

        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer v-if="seen">
      <el-button class="buttomButton">创建小组<i class="el-icon-plus"></i></el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "teamPage",
      data(){
          return{
            headerLocation:"OOAD 2016(1)",
            teams:[
            ],
            unteamMember:[
              {
                studentNum:'24331434324',
                name:'MINGming'
              },
              {
                studentNum:'24331434324',
                name:'MINGming'
              }
            ],
            seen:true,

          }
      },
      created(){
          // this.$axios({
          //   methods: 'get',
          // })
      },
      methods:{
        goStudentSet(){
          this.$router.push('/StuSetting');
        },
        goCoursePage(){
          this.$router.push('/StudentCourse');
        },
      }

    }
</script>

<style scoped>
  .el-container{
    height: 100vh;

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

</style>
