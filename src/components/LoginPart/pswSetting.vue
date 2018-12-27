<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm2.oldpass" autocomplete="off" class="pswInput" placeholder="填写原密码"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" class="pswInput" placeholder="填写新密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" class="pswInput" placeholder="再次填写确认"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>
      <p>密码长度6-32位，须包含数字、字母、符号至少2种或以上元素</p>
      <el-button type="danger" class="buttomButton" @click="submitPsw('ruleForm2')">
        确认提交
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "pswSetting",
      data(){
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else if(value.length>8){
            var reg=/^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]{8,32})$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的密码'));
            }
          } else{
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return{
          headerLocation:'账户密码',
          ruleForm2: {
            oldpass:'',
            pass: '',
            checkPass: ''
          },
          rules2: {
            oldpass:[
              {}
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
        back(){
          this.$router.go(-1);
        },
        submitPsw(form){
          var _this=this;
          _this.$refs[form].validate((valid)=>{
            if(valid){
              _this.$axios({
                method:'put',
                url:'/user/password',
                data:{
                  password:_this.form.password
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
                });
            }
            else{
              console.log("Submit Failed!");
            }
          })
        }
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
