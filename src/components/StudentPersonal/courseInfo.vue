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
        <el-card>
          <p>课程介绍</p>
          <div style="word-wrap: break-word;">{{courseIntro}}</div>
        </el-card>
        <el-table
        :data="tableIntroData">
          <el-table-column prop="dataName">

          </el-table-column>
          <el-table-column prop="dataContent">

          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "courseInfo",
      data(){
          return{
            headerLocation:"OOAD",
            courseIntro:"OOADfdsafadsfasfdsafdsfdasfdsafdsafdasfsdafdsafdfdsfds",
            tableIntroData:[{
              dataName:'课程成绩分布',
              dataContent:'XXXX 10%dsadsa',

            }]
          }
      }
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
</style>
