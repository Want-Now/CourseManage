<template>
  <el-container>
    <el-header id="header">
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>翻转课堂管理平台</p>
    </el-header>
    <el-container>
      <el-main>
            <el-form>
              <el-form-item>
                <div style="font-family:Calibri;font-size:120%;font-weight:bold;width:100%;background-color:white;border:1px solid #dfdfdf;color:#62bab1;">创建教师信息</div>
              </el-form-item>
              <el-form-item style="border:1px solid #dfdfdf;">
                <br>
                <el-row>
                  <el-col :span="3">教师姓名：</el-col>
                  <el-col :span="4"><el-input v-model="name"></el-input></el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="3">教工号</el-col>
                  <el-col :span="4"><el-input v-model="account" ></el-input></el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="3">电子邮箱：</el-col>
                  <el-col :span="4"><el-input v-model="email" ></el-input></el-col>
                </el-row>
                <br>
                <el-row>
                  <el-col :span="3">初始密码：</el-col>
                  <el-col :span="4"><el-input v-model="password"></el-input></el-col>
                </el-row>
                <br>
              </el-form-item>
            </el-form>
            <el-form>
              <el-form-item style="padding-bottom: 20px;">
                <el-button type="primary" style="background-color: #494e8e" @click="create">立即创建</el-button>
                &nbsp;&nbsp;
                <el-button @click="concel">取消</el-button>
              </el-form-item>
            </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        name:'',
        email:'',
        account:'',
        password:'',
      }
    },
    created(){
      this.getParams ();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getParams () {
        const iid = this.$route.query.id
        const acc = this.$route.query.account
        const nam = this.$route.query.name
        const ema = this.$route.query.email
        this.id=iid
        this.email = ema
        this.name = nam
        this.account = acc
      },
      back(){
        this.$router.go(-1);
      },
      concel(){
        this.$router.push({path:"/ManagerIndex"});
      },
      create(){
        var that=this;
        this.$axios({
          method:'post',
          url:"http://ghctcourse.natapp1.cc/teacher",
          data:{
            account:this.account,
            password:this.password,
            name:this.name,
            email:this.email
          }
        }).then(function (response) {
          if(response.data===true){
            that.$message({
              message:'创建成功',
              type:'success',
              duration:800
            });
          } else{
            that.$message({
              message:'创建失败',
              type:'error',
              duration:800
            });
          }
        })
      }
  },
  }
</script>
<style>
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

</style>

