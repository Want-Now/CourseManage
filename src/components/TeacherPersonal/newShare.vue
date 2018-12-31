<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>新增共享</p>
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
      <el-card>
        <el-form :model="shareForm">
          <el-form-item label="共享类型">
            <el-select v-model="shareForm.shareType">
              <el-option
                v-for="type in shareForm.shareTypes"
                :key="type.value"
                :label="type.label"
                :value="type.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="共享对象">
            <el-select v-model="shareForm.shareCourse">
              <el-option
                v-for="course in shareForm.shareCourses"
                :key="course.id"
                :label="type.label"
                :value="course.id">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-card>

    </el-main>
    <el-footer>
      <el-button class="bottomButt">确认共享</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        shareForm:{
          shareTypes:[
            {
              label:'共享讨论课',
              value:1
            },
            {
              label:'共享分组',
              value:2
            }
          ],
          shareCourses: [

          ],
          shareType:'',
          shareCourse:''
        },
      };
    },

    methods: {

    }
  }
</script>
<style>
  .el-container {
    height: 80vh;
  }
  .text {
    font-size: 100%;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
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

