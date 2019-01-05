<template>
  <el-container>
    <el-header class="header" style="background-color:#efefef">
      <span>翻转课堂综合管理平台</span>
      <button class="el-icon-circle-close-outline exitButt" style="background-color:#efefef" @click="loginOutPC()">&nbsp;退出系统</button>
    </el-header>
    <br>
    <el-main>
      <el-row>
        <div style="float:left;font-family:Calibri;font-size:120%;font-weight:bold;color:#409dfe;">
          <i class=""></i>
          课堂信息管理
        </div>
      </el-row>
      <br>
      <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" size="large">
        <el-tab-pane label="管理教师信息" name="1">
          <el-form>
            <el-form-item>
              <div style="font-family:Calibri;font-size:120%;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#409dfe;">教师信息管理</div>
            </el-form-item>

            <el-form-item style="background-color: #D3DCE6" >
              <div>
                <el-button slot="append" icon="el-icon-search" style="float:left;background-color: #D3DCE6"></el-button>
                <el-input placeholder="请输入教工号/姓名" v-model="search"  style="width:70%;float:left" class="input-with-select">
                </el-input>
                <el-button style="width:6%"  size="mini" type="primary" @click="" v-model="search">搜索</el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <el-card class="box-card">
                <div slot="header" class="clearfix" style="height:20px;line-height:20px;">
                  <span style="float:left;">教师列表</span>
                  <el-button style="float:right;padding:3px 0" type="text" @click="creatTea">新建账号</el-button>
                </div>
                <div  class="text item">
                  <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize).filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.account.toLowerCase().includes(search.toLowerCase()))"
                            style="width: 100%"
                  >
                    <el-table-column
                      padding-left="10px"
                      prop="account"
                      label="教工号"
                      width="220">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="220">
                    </el-table-column>
                    <el-table-column
                      prop="email"
                      label="邮箱">
                    </el-table-column>
                    <el-table-column>
                      <template slot-scope="scope">
                        <el-button type="text" @click="edit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                        <el-button type="text" @click="refresh(scope.$index, scope.row)"> <i class="el-icon-refresh"></i></el-button>
                        <el-button type="text" @click="del(scope.$index, scope.row)"> <i class="el-icon-delete"></i></el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </el-form-item>
          </el-form>
          <el-pagination
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total,prev, pager, next, jumper"
            :total="tableData.length">

          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="管理学生信息" name="0">
          <el-form>
            <el-form-item>
              <div style="font-family:Calibri;font-size:120%;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#409dfe;">学生信息管理</div>
            </el-form-item>

            <el-form-item style="background-color: #D3DCE6" >
              <div>
                <el-button slot="append" icon="el-icon-search" style="float:left;background-color: #D3DCE6"></el-button>
                <el-input placeholder="请输入学号/姓名" v-model="search"  style="width:70%;float:left" class="input-with-select">
                </el-input>
                <el-button style="width:6%"  size="mini" type="primary">搜索</el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <el-card class="box-card">
                <div slot="header" class="clearfix" style="height:20px;line-height:20px;">
                  <span style="float:left;">学生列表</span>
                </div>
                <div  class="text item">
                  <el-table  :data="tableData2.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.account.toLowerCase().includes(search.toLowerCase())).slice((currentPage-1)*pagesize,currentPage*pagesize)"
                             style="width: 100%"
                  >
                    <el-table-column
                      padding-left="10px"
                      prop="account"
                      label="学号"
                      width="220">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="220">
                    </el-table-column>
                    <el-table-column
                      prop="email"
                      label="邮箱">
                    </el-table-column>
                    <el-table-column>
                      <template slot-scope="scope">
                        <el-button type="text" @click="editStu(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                        <el-button type="text" @click="refreshstu(scope.$index, scope.row)"> <i class="el-icon-refresh"></i></el-button>
                        <el-button type="text" @click="delstu(scope.$index, scope.row)"> <i class="el-icon-delete"></i></el-button>
                      </template>
                    </el-table-column>
                  </el-table>

                </div>
              </el-card>
            </el-form-item>
          </el-form>
          <el-pagination
            small
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total,prev, pager, next, jumper"
            :total="tableData2.length">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        pagesize: 5,
        search: '',
        activeName: '1',
        tableData: [],
        tableData2: [],
      }
    },
    mounted(){
      this.gettable()
      this.gettable2()
      this.getParams ()
    },

    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getParams () {
        //this.activeName = this.$route.query.type
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)
      },
      gettable() {
        var _this = this;
        this.$axios({
          method: 'get',
          url: "/teacher",
          params:{
            type:1
          }
        }).then(function (response) {
          _this.tableData=response
        })
      },
      gettable2() {
        var _this = this;
        this.$axios({
          method: 'get',
          url: "/student",
          params:{
            type:0
          }
        }).then(function (response) {
          _this.tableData2=response;
        })
      },
      refresh(index, row){
        console.log(index, row);
        //  return row.account;
        var that=this;
        this.$confirm('您确定要将此账号的密码重置为"123456"吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios({
            method:'put',
            url:"/teacher/"+row.id+"/password",
            data:{
              type:1,
              teacherId :row.id,
            },
          }).then(function (response) {
            if(response===true){
              that.$message({
                message:'更新成功',
                type:'success',
                duration:800
              });
            } else {
              that.$message({
                message: '更新失败',
                type: 'error',
                duration: 800
              });
            }})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });
        });
      },
      refreshstu(index, row){
        console.log(index, row);
        //  return row.account;
        var that=this;
        this.$confirm('您确定要将此账号的密码重置为"123456"吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {this.$axios({
          method:'put',
          url:"/student/"+row.id+"/password",
          data:{
            type:0,
            tacherId :row.id,
          },
        }).then(function (response) {
          if(response===true){
            that.$message({
              message:'更新成功',
              type:'success',
              duration:800
            });
          } else {
            that.$message({
              message: '更新失败',
              type: 'error',
              duration: 800
            });
          }})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });
        });
      },
      editStu(index, row){
        console.log(index, row);
        this.$router.push({path:'/modeifyStudentMessage',
          query:{
            id:row.id,
            name:row.name,
            account:row.account,
            email:row.email,
          }
        })
      },
      edit(index, row){
       // console.log(index, row);
        this.$router.push({path:"/modeifyTeacherMessage",
          query:{
            id:row.id,
            name:row.name,
            account:row.account,
            email:row.email,}})
      },
      creatTea(){
        this.$router.push('/createTeacherAccount')
      },
      del(index, row){
        //console.log(index, row);
        var that=this;
        this.$confirm('您确定要将此账号删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios({
            method:'delete',
            url:"/teacher/"+row.id,
            data:{
              type:1,
              teacherId : row.id,
            }
          }).then(function (response) {
            if(response===true){
              that.$message({
                message:'删除成功',
                type:'success',
                duration:800
              });
              window.location.reload();
            } else {
              that.$message({
                message: '删除失败',
                type: 'error',
                duration: 800
              });
            }})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      delstu(index, row){
        console.log(index, row);
        var that=this;
        this.$confirm('您确定要将此账号删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios({
            method:'delete',
            url:"/student/"+row.id,
            data:{
              type:0,
              teacherId : row.id,
            }
          }).then(function (response) {
            if(response===true){
              that.$message({
                message:'删除成功',
                type:'success',
                duration:800
              });
              window.location.reload();
            } else {
              that.$message({
                message: '删除失败',
                type: 'error',
                duration: 800
              });
            }})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    }
  }
</script>
<style scoped>
  .text {
    font-size: 140px;
  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .header{
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    color: #409EFF;
    text-align: left;
  }
  .exitButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 15px;
    height: 60px;
    right: 50px;
  }

</style>

