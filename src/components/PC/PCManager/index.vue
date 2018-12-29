<template>
  <el-container>
    <el-header id="header">
      <p>翻转课堂管理平台</p>
    </el-header>
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left" stretch="true" size="large">
          <el-tab-pane label="管理教师信息" name="first">
            <el-form>
              <el-form-item>
                <div style="font-family:Calibri;font-size:120%;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#62bab1;">教师信息管理</div>
              </el-form-item>

              <el-form-item style="background-color: #D3DCE6" >
                <div>
                  <el-button slot="append" icon="el-icon-search" style="float:left;background-color: #D3DCE6"></el-button>
                  <el-input placeholder="请输入教工号/姓名" v-model="input1"  style="width:70%;float:left" class="input-with-select">
                  </el-input>
                  <el-button style="width:6%"  size="mini" type="primary" @click="resetForm('ruleForm')">搜素</el-button>
                </div>
              </el-form-item>
              <el-form-item>
                <el-card class="box-card">
                  <div slot="header" class="clearfix" style="height:20px;line-height:20px;">
                    <span style="float:left;">教师列表</span>
                    <el-button style="float:right;padding:3px 0" type="text">新建账号</el-button>
                  </div>
                  <div  class="text item">
                    <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        padding-left="10px"
                        prop="id"
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
                      <el-table-column
                        fixed="right"
                        label="操作"
                        width="220">
                        <template slot-scope="scope">
                          <el-button type="text" @click=""><i class="el-icon-edit"></i></el-button>
                          <el-button type="text" @click="refresh"> <i class="el-icon-refresh"></i></el-button>
                          <el-button type="text" @click="del"> <i class="el-icon-delete"></i></el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-form-item>
            </el-form>
            <el-pagination
              small
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="管理学生信息" name="second">
            <el-form>
              <el-form-item>
                <div style="font-family:Calibri;font-size:120%;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#62bab1;">学生信息管理</div>
              </el-form-item>

              <el-form-item style="background-color: #D3DCE6" >
                <div>
                  <el-button slot="append" icon="el-icon-search" style="float:left;background-color: #D3DCE6"></el-button>
                  <el-input placeholder="请输入学号号/姓名" v-model="input1"  style="width:70%;float:left" class="input-with-select">
                  </el-input>
                  <el-button style="width:6%"  size="mini" type="primary" @click="resetForm('ruleForm')">搜素</el-button>
                </div>
              </el-form-item>
              <el-form-item>
                <el-card class="box-card">
                  <div slot="header" class="clearfix" style="height:20px;line-height:20px;">
                    <span style="float:left;">学生列表</span>
                    <el-button style="float:right;padding:3px 0" type="text">新建账号</el-button>
                  </div>
                  <div  class="text item">
                    <el-table
                      :data="tableData2"
                      style="width: 100%">
                      <el-table-column
                        padding-left="10px"
                        prop="sid"
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
                      <el-table-column
                        fixed="right"
                        label="操作"
                        width="220">
                        <template slot-scope="scope">
                          <el-button type="text" @click=""><i class="el-icon-edit"></i></el-button>
                          <el-button type="text" @click="refresh"> <i class="el-icon-refresh"></i></el-button>
                          <el-button type="text" @click="del"> <i class="el-icon-delete"></i></el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-form-item>
            </el-form>
            <el-pagination
              small
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        activeName: 'first',
        tableData: [{
          id: '20160504',
          name: '王小虎',
          email: '1234567@qq.com'
        }, {
          id: '20160504',
          name: '王小虎',
          email: '1234567@qq.com'
        }, {
          id: '20160504',
          name: '王小虎',
          email: '1234567@qq.com'
        }],
        tableData2: [{
          sid: '20160504',
          name: '王小虎',
          email: '1234567@qq.com'
        }, {
          sid: '20160504',
          name: '王小虎',
          email: '1234567@qq.com'
        }, {
          sid: '20160504',
          name: '王小虎',
          email: '1234567@qq.com'
        }]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      refresh(){
        this.$confirm('您确定要将此账号的密码重置为"123456"吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '重置成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });
        });
      },
      del(){
        this.$confirm('您确定要删除此账号吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });

      },
      con() {
        this.$alert('创建成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
      }
    }
  }
</script>
<style>
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

</style>

