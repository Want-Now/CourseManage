<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="第一轮" name="1">
        <div style="margin-right:80%;border-bottom:1px solid #eaedf4"><i class="el-icon-setting"></i> &nbsp;该轮轮次设置</div>
        <el-collapse-item style="padding-left:5%; font-size:150%;" title="业务流程分析" name="1-1">
          <router-link to="">
            <div style="padding-left:10%">2016-1 &nbsp;&nbsp;&nbsp;
              <i class="el-icon-edit"></i>
            </div>
          </router-link>
          <div style="padding-left:10%">2016-2 &nbsp;&nbsp;&nbsp;
            <i class="el-icon-edit"></i>
          </div >
          <div style="padding-left:10%">2016-3  &nbsp;&nbsp;&nbsp;
            <i class="el-icon-edit"></i>
          </div>
        </el-collapse-item>

        <el-collapse-item style="padding-left:5%" title="界面原型设计" name="1-2"></el-collapse-item>

      </el-collapse-item>
      <el-collapse-item title="第二轮" name="2">

      </el-collapse-item>
    </el-collapse>
    <br>
    <br>
    <el-form>
      <el-form-item>
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="">新建讨论课</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation: "OOAD",
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style scoped>
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

