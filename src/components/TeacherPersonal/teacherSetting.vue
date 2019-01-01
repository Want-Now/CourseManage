<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
      <el-dropdown>
        <el-button class="el-icon-menu"></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="backlogPage">代办</el-dropdown-item>
          <el-dropdown-item @click.native="teaCenter">个人页面</el-dropdown-item>
          <el-dropdown-item @click.native="teaSeminar">讨论课</el-dropdown-item>        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
      <el-menu
        text-color="#595959"
        active-text-color="#494e8f">
        <el-menu-item index="1">
          <span class="infoName">姓名</span><span>{{teaName}}</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span class="infoName">教工号</span><span>{{teaID}}</span>
        </el-menu-item>
        <el-menu-item index="3" @click="goMailSetting()">
          <span class="infoName">邮箱</span>
          <span>{{teaEmail}}<i class="el-icon-arrow-right"></i></span>
        </el-menu-item>
        <el-menu-item index="4" @click="goPswSetting()">
          <span class="infoName">账户密码</span><i class="el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="5">
          <span class="infoName">管理员邮箱</span><span>{{adminEmail}}</span>
        </el-menu-item>
      </el-menu>
    </el-main>
    <el-footer>
      <el-button class="bottomButt" @click="loginOut()">
        退出登录
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "teacherSetting",
      data(){
          return{
            headerLocation:'账户与设置',
            teaName:'',
            teaID:'',
            teaEmail:'',
            adminEmail:'418471@qq.com'

          }
      },
      created(){
        var _this=this;
        this.$axios({
          method:'get',
          url:'/user/information',
        }).then(res=>{
          _this.teaName=res.name;
            _this.teaID=res.account;
            _this.teaEmail=res.email;})
          .catch(error=>{console.log(error);});

      },
      methods:{
          goPswSetting(){
            this.$router.push("/PswSetting");
          },
        goMailSetting(){
          this.$router.push("/MailSetting");
        },
        loginOut(){
          this.$router.push("/");
        }
      }
    }
</script>

<style scoped>
  .el-container{
    height: 90vh;
  }

  .el-menu-item{
    padding-left: 0px;
    text-align: left;
    font-size: 16px;
  }
  .infoName{
    margin-right: 10px ;
  }
  .el-icon-arrow-right{
    position: absolute;
    right: 0px;
    top: 20px;
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
