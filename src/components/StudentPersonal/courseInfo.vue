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
              dataContent:'XXXX 10%' +'dsadsa',
            }, {
                dataName:'小组人数',
                dataContent:'6～8',
              }, {
                dataName:'组队开始时间',
                dataContent:'2018.10.11 12:30',
              }, {
              dataName:'组队结束时间',
              dataContent:'2018.11.11 12:30',
            }, {
              dataName:'组员性别要求',
              dataContent:'男：2-4 女：2-4',
            }, {
              dataName:'组员星座要求',
              dataContent:'无',
            }, {
              dataName:'冲突课程',
              dataContent:'.net(XX老师)',
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
