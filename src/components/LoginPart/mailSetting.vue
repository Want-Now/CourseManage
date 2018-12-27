<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" :rules="rule">
        <el-form-item prop="mail">
          <el-input v-model="form.mail" autocomplete="off" class="pswInput" placeholder="填写新邮箱" clearable></el-input>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <p>邮箱格式如：user@host.domainnames</p>
      <el-button type="danger" class="buttomButton" @click="submitEmail('form')">
        确认提交
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "mailSetting",
      data(){
        var validateEmail=(rule,value,callback)=>{
          if (value === '') {
            callback(new Error('请正确填写邮箱'));
          } else {
            if (value !== '') {
              var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
              if(!reg.test(value)){
                callback(new Error('请输入有效的邮箱'));
              }
            }
            callback();
          }
        };
          return{
            headerLocation:'账户邮箱',
            form:{
              mail:''
            },
            rule:{
              mail:[
                {validator:validateEmail,trigger:'blur'}
              ]
            }
          }
      },
      methods:{
        back(){
          this.$router.go(-1);
        },
        submitEmail(formName){
          var _this=this;
          this.$refs[formName].validate((valid)=>{
            if(valid){
              this.$axios({
                method:'put',
                url:'/user/email',
                data:{
                  Email:this.form.mail
                }
              }).then(function (response) {
                if(response.data===true){
                  _this.$message({
                    message:'修改邮箱成功',
                    type:'success',
                    duration:800
                  });
                } else{
                  _this.$message({
                    message:'修改邮箱失败',
                    type:'error',
                    duration:800
                  });
                }
              })
                .catch(function (error) {
                  console.log(error);
                })
            }else{
              console.log('Submit Failed.');
            }
          })
        },
      }
    }
</script>

<style scoped>
  .el-container{
    height: 80vh;
  }
</style>
<style>
  .pswInput .el-input__inner{
    height: 45px;
    font-size: 16px;
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
