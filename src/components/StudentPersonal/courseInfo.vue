<template>
    <el-container>
      <el-header>
        <el-button class="el-icon-back" @click="back()"></el-button>
        <p>{{headerLocation}}</p>
        <el-dropdown>
          <el-button class="el-icon-menu"></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人页面</el-dropdown-item>
            <el-dropdown-item>讨论课</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <el-card>
          <p>课程介绍</p>
          <div style="word-wrap: break-word;">{{courseIntro}}</div>
          <p>成绩计算规则</p>
          <span class="itemSpan">课堂展示</span><span class="itemSpan">{{prePercent}}%</span>
          <span class="itemSpan">课堂提问</span><span class="itemSpan">{{quesPercent}}%</span>
          <span class="itemSpan">书面报告</span><span class="itemSpan">{{repoPercent}}%</span>
          <hr/>
          <span class="itemSpan">组队开始</span><span class="itemSpan">{{teamStartTime}}</span>
          <span class="itemSpan">组队截止</span><span class="itemSpan">{{teamEndTime}}</span>
          <p>组员基本要求</p>
          <span class="itemSpan">组队截止</span><span class="itemSpan">{{teamEndTime}}</span>


        </el-card>

      </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "courseInfo",
      data(){
          return{
            headerLocation:"",
            courseIntro:"OOADfdsafadsfasfdsafdsfdasfdsafdsafdasfsdafdsafdfdsfds",
            prePercent:'',
            quesPercent:'',
            repoPercent:'',
            teamStartTime:'',
            teamEndTime:'',
            minMember:'',//组队人数
            maxMember:'',


            tableIntroData:[{
              dataName:'课程成绩分布',
              dataContent:'XXXX 10%' +'dsadsa',
            }, {
                dataName:'小组人数',
                dataContent:'6～8',
              }, {
                dataName:'组队开始时间',
                dataContent:'2018.10.11 12:30',
              }, {
              dataName:'组队结束时间',
              dataContent:'2018.11.11 12:30',
            }, {
              dataName:'组员性别要求',
              dataContent:'男：2-4 女：2-4',
            }, {
              dataName:'组员星座要求',
              dataContent:'无',
            }, {
              dataName:'冲突课程',
              dataContent:'.net(XX老师)',
            }]
          }
      },
      created(){
          let _this=this;
          this.headerLocation=this.$route.query.courseName;
          this.$axios({
            method:'get',
            url:'/course/'+this.$route.query.courseId
          }).then(
            function (response) {
              var startDate=new Date(response.data.teamStartTime);
              var endDate=new Date(response.data.teamEndTime);
              _this.courseIntro=response.data.introduction;
              _this.prePercent=response.data.presentationPercentage;
              _this.quesPercent=response.data.questionPercentage;
              _this.repoPercent=response.data.reportPercentage;
              _this.teamStartTime=_this.toNormalDate(startDate);
              _this.teamEndTime=_this.toNormalDate(endDate);
            }
          )
            .catch()
      },
      methods: {
        toNormalDate(date){
          // var time1=date.toLocaleString();
          // var date1=time1.substring(0,10);
          // var date2=time1.substring(10,20);
          // return date1+date2;
          return date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate()+'  '+date.getHours()+':'+date.getMinutes();
        }
      }
    }
</script>

<style scoped>

  .el-card{
    text-align: left;
  }
  .el-card p{
    color: #494e8f;
    font-size: 18px;

  }
  .itemSpan{
    display: inline-block;
    width:50%;
    height: 25px;
    line-height: 25px;
    text-align: center;

  }
  .el-table{
    white-space: pre-line;
    font-size: 15px;
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
