<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-input placeholder="填写组名" v-model="teamNameInput" class="activeInput">
        <template slot="prepend">组名</template>
      </el-input>
      <div class="selectDiv">
        <el-select
          v-model="classSelect" filterable placeholder="请选择班级"
          class="activeInput">
          <el-option
            v-for="classOption in classOptions"
            :key="classOption.klassId"
            :label="classOption.label"
            :value="classOption.klassId">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="unteamMember.filter(data => !searchStudent || data.name.toLowerCase().includes(searchStudent.toLowerCase())||data.account.includes(searchStudent))"
          @selection-change="changeFun"
          tooltip-effect="dark"
          height="50vh"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            prop="account"
            label="学号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
        </el-table>
      </div>
    </el-main>
    <el-footer>
      <el-input
        v-model="searchStudent"
        size="mini"
        class="activeInput"
        placeholder="输入关键字搜索"
        style="margin-bottom: 20px"/>
      <el-button class="bottomButt" @click="createTeam()">确认提交</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "createTeam",
      data(){
          return{
            headerLocation:'',
            teamNameInput:'',
            classOptions:[],
            unteamMember:[],
            classSelect:'',
            searchStudent:'',
            multipleSelection:[]
          }
      },
      created(){
          this.headerLocation=this.$route.query.courseName;
          this.unTeamList();
          this.$axios({
            method:'get',
            url:'/course/'+this.$route.query.courseId+'/klass',
          }).then(response=>{
            var _this=this;
            for(var index=0;index<response.length;index++)
            {
              _this.classOptions.push({
                label:response[index].grade+'('+response[index].klassSerial+')',
                klassId:response[index].klassId,
              })
            }
          });

      },
      computed:{
        unteam:function(){
          var search=this.searchStudent;
          if(search){
            return  this.unteamMember.filter(function(dataNews){
              return Object.keys(dataNews).some(function(key){
                return String(dataNews[key]).toLowerCase().indexOf(search) > -1
              })
            })
          }
          return this.unteamMember
        }
      },
      methods:{
        // tableSearch(queryString, cb) {
        //   var unteamStudent = this.unteamMember;
        //   var results = queryString ? unteamStudent.filter(this.createStateFilter(queryString)) : unteamStudent;
        //   clearTimeout(this.timeout);
        //   this.timeout = setTimeout(() => {
        //     cb(results);
        //   }, 3000 * Math.random());
        // },

        changeFun(val){
          this.multipleSelection = val;
        },
        unTeamList(){
          let _this=this;
          this.$axios({
            method: 'get',
            url:'/course/'+this.$route.query.courseId+'/noTeam'
          }).then(response=>{
            _this.unteamMember=response;
            _this.loading2=false;
          })
        },
        createTeam(){
          let ids=[];
          this.multipleSelection.map((item)=> {
            ids.push(parseInt(item.studentId))
          });
          this.$axios({
            method:'post',
            url:'/team/create',
            data:{
              klassId: parseInt(this.classSelect),
              courseId:parseInt(this.$route.query.courseId),
              teamName:this.teamNameInput,
              studentIdList:ids
            }
          }).then(response=>{
            if(response===true){
              this.$message({
                type: 'success',
                message: '创建成功!',
                duration:800
              });
              this.$route.go(-1);
            }else{
              this.$message({
                type: 'error',
                message: '创建失败',
                duration:800
              });
            }
          })
        }
      }

    }
</script>

<style scoped>
  .el-container{
    height: 88vh;
  }
  .selectDiv{
    margin:20px 0px;
  }
  .el-select{
    width: 100%;
  }
  .el-autocomplete{
    width: 100%;
    margin-top: 20px;
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
