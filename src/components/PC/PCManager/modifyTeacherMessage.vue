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
                <div style="font-family:Calibri;font-size:120%;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#62bab1;">修改教师信息</div>
              </el-form-item>
              <el-form-item style="border:1px solid #dfdfdf;">
                <br>
                <el-row>
                  <el-col :span="3">教师姓名：</el-col>
                  <el-col :span="4"><el-input v-model="input1" placeholder=""></el-input></el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="3">教工号</el-col>
                  <el-col :span="4"><el-input v-model="input2" placeholder=""></el-input></el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="3">电子邮箱：</el-col>
                  <el-col :span="4"><el-input v-model="input3" placeholder="" ></el-input></el-col>
                </el-row>
                <br>
              </el-form-item>
            </el-form>
            <el-form>
              <el-form-item style="padding-bottom: 20px;">
                <el-button type="primary" style="background-color: #494e8e" @click="con">确认修改</el-button>
                &nbsp;&nbsp;
                <el-button @click="resetForm('ruleForm')">取消</el-button>
              </el-form-item>
            </el-form>
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
                          <el-button type="text" @click="srefresh"> <i class="el-icon-refresh"></i></el-button>
                          <el-button type="text" @click="sdel"> <i class="el-icon-delete"></i></el-button>
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
      con() {
        this.$alert('修改成功', '提示', {
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

