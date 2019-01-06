<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="stuCenter()">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="stuSeminar()">讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-collapse accordion>
        <el-collapse-item v-for="round in rounds" :key="round.roundId">
          <template slot="title">
            <span style="font-size: 18px;color:#494e8f;">第{{round.roundSerial}}轮</span>
          </template>
          <el-collapse v-for="seminar in round.seminars" :key="seminar.id">
            <el-collapse-item>
              <template slot="title"><span style="font-size: 15px;">{{seminar.topic}}</span></template>
                <div class="scoreDiv">
                  <span>展示：</span><span class="scoreFont">{{seminar.presentationScore}}</span><br/>
                  <span>提问：</span><span class="scoreFont">{{seminar.questionScore}}</span><br/>
                  <span>书面报告：</span><span class="scoreFont">{{seminar.reportScore}}</span><br/>
                  <span>本次总成绩：</span><span class="scoreFont">{{seminar.seminarScore}}</span><br/>

                </div>
              <span>本轮总成绩：</span><span class="scoreFont">{{seminar.totalScore}}</span><br/>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer>
      <el-button class="bottomButt">导出成绩</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "courseScore",
      data(){
          return{
            headerLocation:'',
            rounds:[],

          }
      },
      created(){
          let _this=this;
          this.headerLocation=this.$route.query.courseName+' '+this.$route.query.grade+'('+this.$route.query.klassSerial+')';
          console.log(this.headerLocation);
          this.$axios({
            method:'get',
            url:'/course/'+this.$route.query.courseId+'/round'
          }).then(response=>{
            for(var index=0;index<response.length;index++)
            {
              _this.rounds.push({
                roundId:response[index].roundId,
                roundSerial:response[index].roundSerial,
                seminars:[]
              });
              _this.getSeminars(_this.rounds[index]);
            }
          })
      },
      methods:{
          getSeminars(round){
            this.$axios({
              method:'get',
              url:'/course/round/'+round.roundId+'/team/roundSeminar'
            }).then(response=>{
              for(var index=0;index<response.length;index++)
              {
                round.seminars.push({
                  id:response[index].id,
                  topic:response[index].topic,
                })
              }

            })
          }
      }
    }
</script>

<style scoped>
  .el-container{
    height: 98vh;

  }

  .el-collapse-item{
    font-size: 15px;
  }
  .scoreDiv{

  }
  .scoreFont{
    font-size: 18px;
    color: #494E8F;
  }
  .el-collapse-item__header{
    text-align: center;
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
