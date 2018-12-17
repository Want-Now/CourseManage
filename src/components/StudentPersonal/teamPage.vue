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
        <el-collapse-item v-for="team in teams">
          <template slot="title">
            <i class="el-icon-document"></i>
            {{team.teamName}}
          </template>
          <el-table>

          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer>
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
                teamName:'2-1',

              }
            ]
          }
      }
    }
</script>

<style scoped>
  .el-container{
    height: 100vh;

  }

</style>
<style>

</style>
