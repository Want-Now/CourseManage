<template>
  <div id="page">
    <div class="header" style="background-color: #efefef">
      <button style="background-color: #efefef" class="el-icon-back backButt" @click="back()"></button>
      <span>个人信息综合管理平台</span>
      <button style="background-color: #efefef" class="el-icon-menu courseButt" @click="chosecourse()">&nbsp;选择课程</button>
      <button style="background-color: #efefef" class="el-icon-circle-close-outline exitButt" @click="loginOutPC()">&nbsp;退出系统</button>
    </div>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1" @click="Stu">
          <i class="el-icon-news"></i>导入学生名单
        </el-menu-item>
        <el-menu-item index="2" @click="seminarIndex">
          <i class="el-icon-document" ></i>讨论课
        </el-menu-item>
        <el-menu-item index="3" @click="importScore">
          <i class="el-icon-edit"></i>查看成绩
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <br>
      <el-form>
        <el-form-item>
          <div style="font-family:Calibri;font-size:50px;height:60px;line-height:60px;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#409dfe;">{{courseName}}-讨论课</div>
        </el-form-item>
        </el-form-item>
        <el-form-item>
          <br>
          <div style="font-size:40px;float:left;font-weight:bold;color:#959595">&nbsp;&nbsp;<span>主题：</span><span>{{ListForm[0].seminarName}}</span></div>
          <br>
          <br>
          <div style="font-size:30px;float:left;">&nbsp;&nbsp;<span>报名起止时间：&nbsp;&nbsp;&nbsp;</span><span>{{ListForm[0].enrollStartTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}—{{ListForm[0].enrollEndTime|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
          <br>
          <div v-if="status=='2'" style="font-size:30px;float:left;">&nbsp;&nbsp;<span>报告提交截止时间：</span><span>{{tableData[0].reportDDL|dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
          <br>
          <div style="font-size:30px;float:left;"><span style="float:left">&nbsp;&nbsp;&nbsp;内容：</span>
            &nbsp;&nbsp;&nbsp;{{ListForm[0].introduction}}</div>
        </el-form-item>
        <div>
          <span style="float:left;font-size:30px;color:#949494">&nbsp;&nbsp;已报名小组
          </span><span style="float:right;font-size:20px">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择班级
              <el-select  v-model="klassId"  label="请选择班级" size="large" @change="getteam">
            <el-option
              v-for="klass in ListClass"
              :key="klass.klassId"
              :label="klass.klassSerial"
              :value="klass.klassId">
            </el-option>
          </el-select>
          </span>
          <br>
          <br>
        </div>
        <el-table
          :data="tableData"
          :header-cell-style="{'font-size':'25px','height':'90px'}"
          :row-style="{'font-size':'25px','height':'80px'}">
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
    </div>
  </div>
</template>
<script>
  export default {
    name: "TeaOneSeminar",
    data(){
      return{
        ListForm:[{
            seminarName: '',
            enrollEndTime:'',
            klassSerial:'',
            klassId:'',
          }],
        enrollEndTime:'',
        seminarSerial:'',
        ListClass:[],
        tableData:[],
        courseName:'',
        klassId:'',
        status:'0',
      }
    },
    created() {
      this.basicmessage();
      this.cour();
    },
  methods:{
    indexMethod(index) {
      return index + 1;
    },
    basicmessage(){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/'+this.$route.query.seminarId+'/attendance/pc'
        }).then(response => {
          _this.ListForm = response;
          _this.courseName=this.$route.query.courseName;
          console.log(response);
        })
      },
    cour(){
      var _this = this;
      this.$axios({
        method: 'get',
        url: '/seminar/'+this.$route.query.seminarId+'/klass'
      }).then(response => {
        _this.ListClass = response;
        console.log(response);
      })
    },
    getteam(val){
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/seminar/'+this.$route.query.seminarId+'/'+val+'/klassSeminar/pc'
        }).then(response => {
          _this.tableData = response;
          _this.status=response[0].status;
          console.log(response);
          console.log(_this.status);
        })
      },
    Stu(){
      this.$router.push({path:'/ImportStuPC',
        query:{
          courseId:this.$route.query.courseId,
          courseName:this.$route.query.courseName
        }
      })
    },
    seminarIndex(){
      this.$router.push({path:'/PCseminarIndex',
        query:{
          courseId:this.$route.query.courseId,
          courseName:this.$route.query.courseName
        }
      })
    },
    importScore(){
      this.$router.push({path:'/TeaViewScorePC',
        query:{
          courseId:this.$route.query.courseId,
          courseName:this.$route.query.courseName
        }
      })
    },
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
  #teacherMenu{
    min-width: 300px;

    position: absolute;
    left: 0px;
  }
  .el-menu{
    height: 90vh;
  }
  .el-menu-item{
    height: 30vh;
    font-size: 25px;
    line-height: 30vh;
  }
  .el-icon-news{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-document{
    margin-right: 10px;
    font-size: 30px;
  }
  .main{
    margin-left: 300px;
    padding: 0 50px;
  }
  .el-icon-edit{
    margin-right: 10px;
    font-size: 30px;
  }
</style>
<style>
  .select .el-input__inner{
    height: 50px;
    font-size: 20px;
  }
</style>
