<template>
  <el-container style="height:100%;width: 100%; margin:0 auto;">
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>       </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="order" label="组别" width="100px"  align="center">
        </el-table-column>
        <el-table-column prop="content" align="center">

        </el-table-column>
      </el-table>
      <p>
        <span class="title"></span>
        <span class="content"></span>
      </p>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        headerLocation: "",
        tableData:[],
        status:'',
        pptAddress:'',
      }
    },
    create(){
      this.headerLocation=this.$route.query.courseName+'-'+this.$route.query.seminarName;
      this.status=this.$route.query.status;
      let _this=this;
      this.$axios({
        method:'get',
        url:'/round/seminar/'+this.$route.query.klassSeminarId+'/attendance'
      }).then(response=>{
        if(_this.status===0){
          for(var i=0;i<response.length;i++)
          {
            _this.tableData[i].order='第'+(i+1)+'组';
            if(response[i].attendanceStatus===false)
              _this.tableDate[i].content="未报名";
            else {
              if(response[i].pptStatus===false)
                _this.tableDate[i].content=response[i].klassSerial
                  +'-'+response[i].teamSerial+'未提交PPT';
              else _this.tableDate[i].content=response[i].klassSerial +'-'+response[i].teamSerial;
            }
          }
        }
        else if(_this.status===1)
        {
          for(var i=0;i<response.length;i++)
          {
            _this.tableData[i].order='第'+(i+1)+'组';
            if(response[i].attendanceStatus===false)
              _this.tableDate[i].content="未报名";
            else {
              if(response[i].pptStatus===false)
                _this.tableDate[i].content=response[i].klassSerial
                  +'-'+response[i].teamSerial+'  未提交';
              else _this.tableDate[i].content=response[i].klassSerial +'-'+response[i].teamSerial;
            }
          }
        }
      })
    }
  }
</script>
<style>
  .el-container {
    height: 90vh;
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
