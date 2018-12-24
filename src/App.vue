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

.activeInput .el-input__inner{
  height: 50px;
  font-size: 20px;
}
.activeInput .el-input-group__prepend{
  font-size: 18px;
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
</style>
