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
      <p class="title">{{courseName}}—查看成绩</p>
      <span class="roundSpan" >轮数</span>
      <el-select v-model="roundId" label="请选择轮次" class="select" @change="getScore">
        <el-option
          v-for="round in roundsList"
          :key="round.roundId"
          :label="round.roundSerial"
          :value="round.roundId">
        </el-option>
      </el-select>
      <el-table
        :data="scoreList"
        :header-cell-style="{'color':'#409EFF','font-size':'25px','height':'90px'}"
        :row-style="{'font-size':'25px','height':'80px'}">
        <el-table-column
          label="小组"
          prop="team"
          align="center" >
          <template slot-scope="scope">
            <span> {{scope.row.klassSerial}}-{{scope.row.teamSerial}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="总分"
          prop="roundTotalScore"
          align="center">
        </el-table-column>
        <el-table-column
          label="讨论课"
          prop="seminarName"
          align="center">
        </el-table-column>
        <el-table-column
          label="展示成绩"
          prop="presentationScore"
          align="center">
        </el-table-column>
        <el-table-column
          label="提问成绩"
          prop="questionScore"
          align="center">
        </el-table-column>
        <el-table-column
          label="报告成绩"
          prop="reportScore"
          align="center">
        </el-table-column>
        <el-table-column
          label="该次总成绩"
          prop="totalScore"
          align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "teaViewScore",
      data(){
        return{
          teams:[],
          seminars:[],
          courseName:'',
          roundsList:[],
          value:'',
          seminarList:'',
          roundId:'',
          teamId:'',
          teamSerial:'',
          scoreList:[
          ],
          spanArr:[],
          position:'',
        }
      },
      created(){
          //this.rowspan();
        this.courseName=this.$route.query.courseName;
        var _this = this;
        this.$axios({
          method: 'get',
          url: '/course/'+this.$route.query.courseId+'/round',
          params:{
            courseId:this.$route.query.courseId
          }
        }).then(function (response) {
          _this.roundsList=response
        })
      },
      methods:{
        handleChange(a,b){
          this.getScore(a,b)
        },
        getScore(val){
          var _this = this;
          this.$axios({
            method: 'get',
            url: '/round/'+val+'/seminarScore/pc',
            params:{
              roundId:val,
            }
          }).then(response => {
            _this.scoreList = response;
          })
          //this.rowspan();
          //console.log(this.ScoreList.length);
        },

        //获得数据后调用
        rowspan(){
          this.spanArr = [];//在data里面定义
          this.position = 0; //在data里面定义
          this.scoreList.forEach((item,index) => {
            if( index === 0){
              this.spanArr.push(1);
              this.position = 0;
              item.sequence=index+1;//设置序号
            }else{
              if(this.scoreList[index].team === this.scoreList[index-1].team){
                this.spanArr[this.position] += 1;//连续有几行项目名名称相同
                this.spanArr.push(0); // 名称相同后往数组里面加一项0
                console.log(this.spanArr)
                //当项目名称相同时，设置当前序号和前一个相同
                this.scoreList[index].sequence = this.scoreList[index-1].sequence;
              }else{
                this.spanArr.push(1);
                this.position = index;
                //当项目名称不同时，将当前序号设置为前一个序号+1
                this.scoreList[index].sequence = this.scoreList[index-1].sequence+1;
              }
            }
          })
        },
        //合并
        objectSpanMethod({ row, column, rowIndex, columnIndex }){
          if(columnIndex === 0){
            const _row = this.spanArr[rowIndex];
            const _col = _row>0 ? 1 : 0;
            console.log("ppp")
            console.log(_row)
            console.log(_col)
            return {
              rowspan: _row, //行
              colspan: _col  //列
            }
          }
          if(columnIndex === 1){ //项目列也进行合并(第二列)
            const _row = this.spanArr[rowIndex];
            const _col = _row>0 ? 1 : 0;
            return {
              rowspan: _row,
              colspan: _col
            }
          }
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
      },
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
