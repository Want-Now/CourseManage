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
      <el-collapse>
        <el-collapse-item v-for="share in shares"  :key="share.shareId">
          <template slot="title">
            <div style="font-size: 18px">
            <i class="el-icon-warning"></i>
            {{share.mainTeacherName}}发来共享请求
            </div>
          </template>
          <div class="contentDiv">
            {{share.mainTeacherName}}的{{share.mainCourseName}}课程
            向您的{{share.subCourseName}}发起共享请求
            <span v-if="share.shareType===1">（共享分组）</span>
            <span v-else-if="share.shareType===2">（共享讨论课）</span>
          </div>
          <button class="el-icon-error" @click="dealShare(share.shareId,share.shareType,0)"></button>
          <button class="el-icon-success"  @click="dealShare(share.shareId,share.shareType,1)"></button>
        </el-collapse-item>
        <el-collapse-item v-for="teamInfo in teamInfos"  :key="teamInfo.teamValidId">
          <template slot="title">
            <div style="font-size: 18px">
            <i class="el-icon-warning"></i>
            {{teamInfo.klassSerial}}-{{teamInfo.teamSerial}}小组发来特殊组队申请
            </div>
          </template>
          <div class="contentDiv">
            {{teamInfo.reason}}
          </div>
          <button class="el-icon-error" @click="dealTeam(teamInfo.teamValidId,0)"></button>
          <button class="el-icon-success" @click="dealTeam(teamInfo.teamValidId,1)"></button>
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
            shares:[],
            teamInfos:[]

          }
      },
      created(){
          let _this=this;
          this.$axios({
            method:'get',
            url:'/share/getUntreatedShare'
          }).then(response=>{
            _this.shares=response.share;
            _this.teamInfos=response.team;
          })
      },
      methods:{
        dealTeam(id,status){
          let _this=this;
          this.$axios({
            method: 'put',
            url:'/team/teamValidRequest/deal',
            data:{
              teamValidId:id,
              status:parseInt(status)
            }
          }).then(response=>{
            if(response===true){
              _this.$message({
                message:'操作成功',
                type:'success',
                duration:800
              });
              _this.window.reload();
            } else{
              _this.$message({
                message:'操作失败',
                type:'error',
                duration:800
              });
            }
          });
        },
        dealShare(id,type,status){
          let _this=this;
          this.$axios({
            method: 'put',
            url:'/share/dealShare',
            data:{
              shareId:id,
              type:type,
              status:parseInt(status)
            }
          }).then(response=>{
            if(response===true){
              _this.$message({
                message:'操作成功',
                type:'success',
                duration:800
              });
              _this.window.reload()
            } else{
              _this.$message({
                message:'操作失败',
                type:'error',
                duration:800
              });
            }
          });
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
    font-size: 17px;
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
