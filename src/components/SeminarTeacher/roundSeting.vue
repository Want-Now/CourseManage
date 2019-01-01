<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" ></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>代办</el-dropdown-item>
          <el-dropdown-item>个人页面</el-dropdown-item>
          <el-dropdown-item>讨论课</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:20px;color:#494e8f;">讨论课：</span>
        </div>
        <div class="text item" v-for="seminar in seminars" :key="seminar.id">
          {{seminar.topic}}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:20px;color:#494e8f;">成绩设置：</span>
        </div>
        <el-form :rules="rule">
          <el-form-item prop="preMethod">
            <span>展示：</span>
            <el-select v-model="preMethod" placeholder="请选择">
              <el-option label="最高分" value="1"></el-option>
              <el-option label="平均分" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="quesMethod">
            <span>提问：</span>
            <el-select v-model="quesMethod" placeholder="请选择">
              <el-option label="最高分" value="1"></el-option>
              <el-option label="平均分" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="repoMethod">
            <span>报告：</span>
            <el-select v-model="repoMethod" placeholder="请选择">
              <el-option label="最高分" value="1"></el-option>
              <el-option label="平均分" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
          <span style="float:left;font-size:20px;color:#494e8f;">本轮讨论课报名次数：</span>
        </div>
        <div class="text item" v-for="klass in klasses">
          <span>{{klass.klassSerial}}</span>
          <el-select value="applyTime" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </div>
      </el-card>
    </el-main>
    <el-footer>
      <el-button class="bottomButt">确认修改</el-button>
    </el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        headerLocation:"",
        preMethod: '',
        repoMethod: '',
        quesMethod: '',
        seminars:'',
        rule: {
          repoMethod: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          quesMethod: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          preMethod: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
        },
      };
    },

    created(){
      let _this=this;
      this.$axios({
        method:'get',
        url:'/round/'+this.$route.query.roundId
      }).then(
        response=>{
          _this.seminars=_this.$route.query.seminars;
          
        }
      )
    },
    methods: {

    }
  }
</script>
<style>
  .el-container {
    height: 98vh;
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
