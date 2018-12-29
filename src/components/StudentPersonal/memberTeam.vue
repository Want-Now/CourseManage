<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <p id="teamName">{{teamName}}</p>
      <div>
        <el-table  :data="teamMember">
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
            label="姓名">
            <template slot-scope="scope">
              {{scope.row.name}}
            </template>
          </el-table-column>
          <el-table-column width="80px" v-if="typeTeacher">
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
      </div>
      <div v-if="typeTeacher">
        <el-table
          ref="multipleTable"
          :data="unteamStudent"
          tooltip-effect="dark"
          height="38vh"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            prop="studentNum"
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
      <div v-if="typeTeacher">
       <div v-if="!deadline">
         <el-autocomplete
           class="inline-input searchInput"
           v-model="searchStudent"
           :fetch-suggestions="tableSearch"
           placeholder="请输入学号/名字"
           @select="handleSelect"
         >
           <template slot="prepend"><i class="el-icon-search"></i>搜索</template>
         </el-autocomplete>

         <el-button type="danger" class="teamButton">解散小组</el-button>
         <el-button class="teamButton">添加</el-button>
         <el-button type="primary" class="teamButton">保存</el-button>
       </div>
        <div v-if="deadline">
          <el-button type="danger" class="teamButton">提交审核</el-button>
        </div>
      </div>
      <div v-if="!typeTeacher">
        <div v-if="!deadline">
          <el-button type="danger" class="teamButton">退出小组</el-button>
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
        headerLocation:'OOAD 2016(1)',
        teamName:'1-1 武林盟主',
        typeTeacher:true,
        deadline:false,
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
          }
        ],
        unteamStudent:[
          {
            studentNum:'24331434324',
            name:'MINGming'
          },
          {
            studentNum:'24331434324',
            name:'MINGming'
          },
          {
            studentNum:'24331434324',
            name:'MINGming'
          }],
        searchStudent:'',
      }
    },
    methods:{
      tableSearch(){

      },
      handleSelect(){

      },
      deleteMember(index, row){
        this.$confirm('将'+row.name+'移出小组?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center:true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
            duration:1000
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration:1000
          });
        });

      }
    }
  }
</script>

<style scoped>
  .el-container{
    height: 90vh;

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
