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
              {
                teamName:'2-1 HHHHHH',
                teamState:'Invalide',
                teamMember:[
                  {
                    identity:'组长',
                    studentNum:'24331434324',
                    name:'MINGming'
                  },
                  {
                    identity:'组员',
                    studentNum:'24331434324',
                    name:'MINGming'
                  }
                ]
              },
              {
                teamName:'2-1 HHHHHH',
                teamState:' ',
                teamMember:[
                  {
                    identity:'组长',
                    studentNum:'24331434324',
                    name:'MINGming'
                  },
                  {
                    identity:'组员',
                    studentNum:'24331434324',
                    name:'MINGming'
                  }
                ]
              },
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

</style>
<style>

</style>
