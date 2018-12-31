<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back" ></el-button>
      <p>{{courseName}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-collapse v-model="activeNames" @change="handleChange" size="large">
      <el-collapse-item  v-for="round in rounds">
        <template slot="title" class="title">
          <div class="collapseDiv"  @click="getSeminar(round,index)">
             第{{round.roundSerial}}轮
          </div>
        </template>
        <div style="float:left"><i class="el-icon-setting"></i>该轮轮次设置</div>
        <br>
        <el-collapse-item  v-for="seminar in seminars">
          <template slot="title" class="title">
            <div class="collapseDiv"  @click="">
              {{seminar.topic}}
            </div>
          </template>
        </el-collapse-item>
      </el-collapse-item>


    </el-collapse>
    <br>
    <br>
    <el-form>
      <el-form-item>
        <el-button style="width:100%;background-color:#494e8e" type="primary" @click="">新建讨论课</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
  export default {
    name:"teacherCouseSeminar",
    data() {
      return {
        activeNames: ['1'],
        courseName:'',
        courseId:'',
        rounds:[],
        seminars:[],
        roundId:'',
      };
    },
    created(){
      this.getParams()
      this.getRound()
      this.getSeminar()
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      back() {
        this.$router.go(-1);
      },
      getParams () {
        const iid = this.$route.query.courseId
        const nam = this.$route.query.courseName
        this.courseId=iid
        this.courseName = nam
      },
      getRound(round){
        let _this=this;
        this.$axios({
          method:'get',
          url:'http://ghctcourse.natapp1.cc/course/'+this.courseId+'/round'
        }).then(response=>{
          _this.rounds=response.data;
        })
      },
      getSeminar(round,index){
        let _this=this;
        console.log(round.roundId)
        this.$axios({
          method:'get',
          url:'http://ghctcourse.natapp1.cc/round/'+round.roundId+'/seminar'
        }).then(response=>{
          _this.seminars=response.data;
        })
      }
    }
  }
</script>
<style scoped>
  .collapseDiv{
    width: 100%;
    height: 100%;
    font-size: 15px;
    padding-left: 5%;
    text-align: left;
  }
  .el-container {
    margin-bottom: 40px;
    color: #333;
    background-color:white;
  }
  .el-col{
    font-size:100%;
    width:30%;
    height: 400%;
    line-height: 200%;
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

