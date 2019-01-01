<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-menu courseButt">&nbsp;选择课程</button>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt">&nbsp;退出系统</button>
    </div>
    <teacherMenu></teacherMenu>
    <el-main style="margin-left:20%">
      <br>
      <el-form>
        <el-form-item>
          <div style="font-family:Calibri;font-size:30px;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#409dfe;">OOAD-讨论课-第一次讨论课</div>
        </el-form-item>
        </el-form-item>
        <el-form-item>
          <br>
          <div style="font-size:150%;float:left;font-weight:bold;color:#959595">&nbsp;&nbsp;<span>主题：</span><span>需求分析说明</span></div>
          <div style="font-size:150%;float:right;font-weight:bold;color:#959595"><span>报名情况：</span><span>2/6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <br>
          <br>
          <div style="font-size:120%;float:left;">&nbsp;&nbsp;<span>报名起止时间：</span><span>2018/10/25-2018/10/30</span></div>
          <br>
          <div style="font-size:120%;float:left;">&nbsp;&nbsp;<span>内容：</span><span>本次讨论课主要讨论需求分析，每组15分钟，总共可以容纳6个小组。</span></div>
        </el-form-item>
        <div>
          <span style="float:left;font-size:20px;color:#949494">&nbsp;&nbsp;已报名小组</span>
          <el-select   v-model="ruleForm.select" placeholder="请选择班级" style="float:right">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>
          <br>
          <br>
          <el-table
            :data="tableData"
            style="width: 100%;padding-left:1%;">
            <el-table-column
              label="展示次序"
              type="index"
              :index="indexMethod"
              width="150">
            </el-table-column>
            <el-table-column
              prop="teamid"
              label="组号"
              width="150">
            </el-table-column>
            <el-table-column
              prop="teamleader"
              label="组长"
              idth="150">
            </el-table-column>
            <el-table-column
              prop="preppt"
              label="展示材料"
              idth="150">
            </el-table-column>
            <el-table-column
              prop="prereport"
              label="书面报告"
              idth="150">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="220">
              <template slot-scope="scope">
                <el-button type="text" @click="">{{操作}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-form>
      </el-form>
    </el-main>
  </div>
</template>

<script>
  import teacherMenu from './teacherMenu'

  export default {
    name: "teaViewScore",
    components:{
      teacherMenu,
    },
    data(){
      return{
        tableDate:[
          {
            order:'', //展示次序
            teamorder:'',//小组序号
            teamleader:'',//组长
            pptname:'',//ppt
            report:'',//讨论报告
          }
        ]
        ,
        courseName:'OOAD',
        location:'查看成绩',
        ruleForm: {
          select: '',
        },
        options:[
          {
            value:1,
            label:'1',
          },
          {
            value:2,
            label:'2',
          },
        ],
        value:'',
        teamScore:[
          {
            teamScore:'1-1 5分',
            seminar:'第一次讨论课',
            preScore:5,
            queScore:5,
            repoScore:5,
            seminarScore:5
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .header{
    padding-left: 50px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #409EFF;
    text-align: left;
  }
  .main{
    margin-left: 300px;
    padding: 0 50px;
  }
  .exitButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    right: 50px;
  }
  .courseButt{
    position: absolute;
    border: none;
    color: #409EFF;
    font-size: 20px;
    height: 50px;
    top: 30px;
    right:200px;
  }
  .backButt{
    border: none;
    color: #409EFF;
    font-size: 30px;
    height: 50px;
  }
  .title{
    font-weight: bold;
    color: #409EFF;
    font-size: 27px;
    padding: 20px 50px;
    text-align: left;
    border: solid 1px #DCDFE6;
  }

  .roundSpan{
    margin-right:20px;
    font-size: 22px;
  }
  .el-table{
    margin-top: 20px;
  }
  .exportButt{
    margin-top: 50px;
    width: 200px;
    height: 60px;
    font-size: 22px;

  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
