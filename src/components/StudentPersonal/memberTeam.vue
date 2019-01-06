<template>
  <el-container v-loading="loading">
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <p id="teamName">{{teamName}}</p>
      <p v-if="status!=1">Invalid</p>
      <div>
        <el-table
          :data="teamMember"
        >
          <el-table-column
            prop="identity"
            label="身份"
            width="50px">
          </el-table-column>
          <el-table-column
            prop="studentNum"
            label="学号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column width="80px"  v-if="isLeader">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="deleteMember(scope.$index, teamMember)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-if="isLeader">
        <el-table
          ref="multipleTable"
          :data="unteamStudent"
          tooltip-effect="dark"
          height="38vh"
          @selection-change="changeFun"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            prop="account"
            label="添加成员">
          </el-table-column>
          <el-table-column
            prop="name">
          </el-table-column>

        </el-table>
        <!--搜索-->

      </div>
    </el-main>
    <el-footer>
      <div v-if="isLeader">
       <div v-if="!canTeam">

         <el-button type="danger" class="teamButton" @click="deleteTeam">解散小组</el-button>
         <el-button class="teamButton" @click="addMember()">添加</el-button>
         <el-button type="primary" class="teamButton" @click="back()">保存</el-button>
       </div>
        <div v-if="canTeam">
          <el-button type="danger" class="teamButton">提交审核</el-button>
        </div>
      </div>
      <div v-else>
        <div v-if="!canTeam">
          <el-button type="danger" class="teamButton" @click="quitTeam">退出小组</el-button>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "leaderTeam",
    data(){
      return{
        headerLocation:'',
        teamName:'',
        isLeader:true,
        canTeam:false,
        teamMember:[],
        unteamStudent:[],
        searchStudent:'',
        status:'',
        teamId:'',
        multipleSelection:[],
        loading:true,
      }
    },
    mounted(){
      this.load()
      this.unTeamList()
    },
    methods:{
      load(){
        let _this=this;
        this.headerLocation=this.$route.query.courseName;
        this.$axios({
          method:'get',
          url:'/course/'+this.$route.query.courseId+'/team/teamInfo',
        }).then(response=>{
          if(_this.$store.state.id==response.teamLeader.studentId) _this.isLeader=true;
          else _this.isLeader=false;
          _this.teamName=response.klassSerial+'-'+response.teamSerial+' '+response.teamName;
          _this.status=response.status;
          _this.teamId=response.teamId;
          _this.teamMember.push({
            identity:'组长',
            studentNum:response.teamLeader.account,
            name:response.teamLeader.name,
            studentId:response.teamLeader.studentId
          });
          for(var index=0;index<response.members.length;index++)
          {
            _this.teamMember.push({
              identity:'组员',
              studentNum:response.members[index].account,
              name:response.members[index].name,
              studentId:response.members[index].studentId
            })
          }
          this.loading=false;

        })
      },
      unTeamList(){
        let _this=this;
        this.$axios({
          method: 'get',
          url:'/course/'+this.$route.query.courseId+'/noTeam'
        }).then(response=>{
          _this.unteamStudent=response;
        })
      },
      deleteMember(index, rows){
        let _this=this;
        this.$confirm('将'+this.teamMember[index].name+'移出小组?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$axios({
            method:'put',
            url:'/team/'+_this.teamId+'/remove',
            data:{
              studentId:_this.teamMember[index].studentId
            }
          }).then(response=>{
            if(response===true){
              rows.splice(index, 1);
              this.$message({
                type: 'success',
                message: '删除成功!',
                duration:800
              });
            }else{
              this.$message({
                type: 'info',
                message: '删除失败',
                duration:800
              });
            }
          })
      })

      },
      deleteTeam(){
        let _this=this;
        this.$axios({
          method:'delete',
          url:'/team/'+this.teamId
        }).then(response=>
        {
          if(response===true){
            this.$message({
              type: 'success',
              message: '解散成功!',
              duration:800
            });
            _this.$router.go(-1);
          }else{
            this.$message({
              type: 'info',
              message: '解散失败',
              duration:800
            });
          }
        });
      },
      addMember(){
        let _this=this;
        let ids=[];
        this.multipleSelection.map((item)=> {
          ids.push(parseInt(item.studentId))
        });
        this.$axios({
          method:'put',
          url:'/team/'+this.teamId+'/add',
          data:{
            studentIdList:ids
          }
        }).then(response=>{
          if(response===true){
            this.$message({
              type: 'success',
              message: '添加成功!',
              duration:800
            });
            _this.$router.push('/emptyPage');
          }else{
            this.$message({
              type: 'error',
              message: '添加失败',
              duration:800
            });
          }
        })
      },
      quitTeam(){
        let _this=this;
        this.$axios({
          method:'put',
          url:'/team/'+this.teamId+'/remove',
          data:{
            studentId:this.$store.state.id
          }
        }).then(response=>{
          if(response===true){
            this.$message({
              type: 'success',
              message: '退出成功!',
              duration:800
            });
            _this.$router.go(-1);
          }else{
            this.$message({
              type: 'error',
              message: '退出失败',
              duration:800
            });
          }
        })
      },
      changeFun(val){
        this.multipleSelection = val;
      },
    }
  }
</script>

<style scoped>
  .el-container{
    height: 95vh;

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
    width: 23vw;
    padding: 2vh 0px;
    text-align: center;
    font-size: 2vh;
    margin:1vw;
  }
  .searchInput{
    width: 80vw;
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
