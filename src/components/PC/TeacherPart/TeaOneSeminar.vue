<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt" @click="back()"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-menu courseButt" @click="chosecourse()">&nbsp;选择课程</button>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt">&nbsp;退出系统</button>
    </div>
    <teacherMenu></teacherMenu>
    <el-main style="margin-left:20%">
      <br>
      <el-form>
        <el-form-item>
          <div style="font-family:Calibri;font-size:30px;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#409dfe;">{{courseName}}-讨论课</div>
        </el-form-item>
        </el-form-item>
        <el-form-item>
          <br>
          <div style="font-size:30px;float:left;font-weight:bold;color:#959595">&nbsp;&nbsp;<span>主题：</span><span>{{ListForm[0].seminarName}}</span></div>
          <br>
          <br>
          <div style="font-size:20px;float:left;">&nbsp;&nbsp;<span>报名起止时间：&nbsp;&nbsp;&nbsp;</span><span>{{ListForm[0].enrollStartTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}—{{ListForm[0].enrollEndTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
          <br>
          <div v-if="status=='2'" style="font-size:20px;float:left;">&nbsp;&nbsp;<span>报告提交截止时间：</span><span>{{tableData[0].reportDDL|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
          <br>
          <div style="font-size:20px;float:left;"><span style="float:left">&nbsp;&nbsp;&nbsp;内容：</span>
            &nbsp;&nbsp;&nbsp;{{ListForm[0].introduction}}</div>
        </el-form-item>
        <div>
          <span style="float:left;font-size:20px;color:#949494">&nbsp;&nbsp;已报名小组</span>
          <el-select   v-model="ListClass"  value-key="" placeholder="请选择班级" label="请选择班级" style="float:right"  @change="getteam">
            <el-option
              v-for="o in length1"
              :key="o"
              :label="ListForm[o].klassSerial"
              :value="ListForm[o].klassId">
            </el-option>
          </el-select>
          <br>
          <br>
        </div>
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
            label="组号"
            width="150">
            <template slot-scope="scope" v-if="scope.row.attendanceStatus">
              {{scope.row.klassSerial}}-{{scope.row.teamSerial}}
            </template>
          </el-table-column>
          <el-table-column
            prop="leaderName"
            label="组长"
            idth="150">
          </el-table-column>
          <el-table-column
            prop="pptName"
            label="展示材料"
            idth="150">
          </el-table-column>
          <el-table-column
            v-if="status=='2'"
            prop="reportName"
            label="书面报告"
            idth="150">
          </el-table-column>
        </el-table>
      </el-form>
      </el-form>
    </el-main>
  </div>
</template>
<script>
  import teacherMenu from './teacherMenu'

  export default {
    name: "TeaOneSeminar",
    components:{
      teacherMenu,
    },
    data(){
      return{
        ListForm:[{
            seminarName: '',
            enrollEndTime:'',
            klassSerial:'',
            klassId:'',
          }],
        enrollEndTime:'',
        length1:'2',
        length2:'2',
        seminarSerial:'',
        klassSerial:'',
        nowteam:'',
        maxteam:'',
        ListClass:[{
          klassSerial:'',
        }],
        tableData:[{
            klassSerial:'',
        }],
        courseName:'',
        o:'1',
        p:'1',
        val:'',
        status:'0',
      }
    },
    created() {
      this.basicmessage();
    },
  methods:{
    indexMethod(index) {
      return index + 1;
    },
      basicmessage(){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/5/attendance/pc'
        }).then(response => {
          _this.ListForm = response;
          _this.length1= _this.ListForm.length-1;
          _this.courseName=this.$route.query.courseName;
          console.log(response);
        })
      },
      getteam(val){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/5/'+val+'/klassSeminar/pc'
        }).then(response => {
          _this.tableData = response;
          _this.status=response[0].status;
          console.log(response);
          console.log(_this.status);
        })
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
