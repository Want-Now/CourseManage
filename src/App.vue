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

.el-header .el-icon-plus{
  position: absolute;
  width: 60px;
  height: 55px;
  background-color: #494e8f;
  border-color: #494e8f;
  color: white;
  right: 10px;
  top: 10px;
}
.el-header .el-icon-plus:hover{background-color: #494e8f;border-color: #494e8f;}
.el-header .el-icon-plus:focus{background-color: #494e8f;border-color: #494e8f;}

</style>
