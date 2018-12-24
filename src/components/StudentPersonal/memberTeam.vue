<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <p id="teamName">{{teamName}}</p>
      <el-table  :data="teamMember">
        <el-table-column
          prop="identity"
          label="身份">
        </el-table-column>
        <el-table-column
          prop="studentNum"
          label="学号">
        </el-table-column>
        <el-table-column
          label="姓名">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteMember(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-main>
    <el-footer>
      <el-button type="danger" class="teamButton">退出小组</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "menberTeam" ,
      data(){
          return{
            headerLocation:'OOAD 2016(1)',
            teamName:'1-1 HHHHHH',
            teamMember:[
              {
                identity:'组长',
                studentNum:'24331434324',
                name:'MINGming'
              },
              {
                identity:'组员',
                studentNum:'24331434324',
                name:'MINGming'
              },
              {
                studentNum:'24331434324',
                name:'MINGming'
              }],
          }
      }
    }
</script>

<style scoped>
  .el-footerh{
    margin-top: 10vh;
  }
  .el-main{
    margin-top: 0px;
    padding-top: 10px;
  }
  #teamName{
    margin: 0px;
    padding: 0px 0px 10px 0px;
    text-align: center;
    font-size: 25px;
    color: #494e8f;
    border-bottom: solid 1px #494e8f;
  }

  .teamButton{
    width: 40vw;
    padding: 2vh 0px;
    text-align: center;
    font-size: 2vh;
    margin:1vw;
  }
  .searchInput{
    width: 80vw;
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
