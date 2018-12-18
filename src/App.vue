<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.buttomButton{
  margin: 0px;
  height: 45px;
  width: 80vw;
  font-size: 17px;
  background-color: #494e8f;
  border-color: #494e8f;
  color: white;
}
.buttomButton:hover{
  background-color: #8084b1;
  border-color: #8084b1;
  color: white;
}
.buttomButton:focus{
  background-color: #8084b1;
  border-color: #8084b1;
  color: white;
}
.el-collapse-item__header{
  font-size: 18px;
}

.activeInput .el-input__inner{
  height: 50px;
  font-size: 20px;
}
.activeInput .el-input-group__prepend{
  font-size: 18px;
}
</style>
