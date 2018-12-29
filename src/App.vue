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
  .bottomButt{
    height: 50px;
    width: 85vw;
    font-size: 20px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;
  }
  .bottomButt:hover{
    background-color: #8084b1;
    border-color: #8084b1;
    color: white;
  }
  .bottomButt:focus{
    background-color: #8084b1;
    border-color: #8084b1;
    color: white;
  }
</style>
