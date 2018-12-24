<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>待办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-collapse @change="handleChange">
        <el-collapse-item v-for="backlog in backlogs"  key="">
          <template slot="title">
            <i class="el-icon-warning"></i>
            {{backlog.infoTitle}}
          </template>
          <div class="contentDiv">
            {{backlog.infoContent}}
          </div>
          <button class="el-icon-error"></button>
          <button class="el-icon-success"></button>
        </el-collapse-item>
      </el-collapse>

    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "backlogPage",
      data(){
          return{
            headerLocation:'待办事项',
            backlogs:[
              {
                infoTitle:'OOAD',
                infoContent:'XXX小组申请XXXXXXXX',
              },
              {

              }
            ]
          }
      },
      methods:{
        handleChange(val) {
          console.log(val);
        }
      }
    }
</script>

<style scoped>
  .el-icon-warning{
    margin-right: 5px;
  }
  .el-icon-error{
    font-size: 22px;
    color: #bf320a;
    margin-right:10vw;
  }
  .el-icon-success{
    font-size: 22px;
    color: #68bf13;
    margin-left:10vw;
  }
  .contentDiv{
    font-size: 20px;
    text-align: left;
    margin-bottom: 10px;
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
