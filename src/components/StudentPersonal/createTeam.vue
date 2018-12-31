<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <el-input placeholder="填写组名" v-model="teamNameInput" class="activeInput">
        <template slot="prepend">组名</template>
      </el-input>
      <div class="selectDiv">
        <el-select
          v-model="classSelect" filterable placeholder="请选择班级"
          class="activeInput">
          <el-option
            v-for="classOption in classOptions"
            :key="classOption.value"
            :label="classOption.label"
            :value="classOption.value">

          </el-option>
        </el-select>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="unteamStudent"
          tooltip-effect="dark"
          height="50vh"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            prop="studentNum"
            label="学号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>

        </el-table>
        <!--搜索-->
        <el-autocomplete
          class="inline-input activeInput"
          v-model="searchStudent"
          :fetch-suggestions="tableSearch"
          placeholder="请输入学号/名字"
          @select="handleSelect"
        >
          <template slot="prepend"><i class="el-icon-search"></i>搜索</template>
        </el-autocomplete>
      </div>
    </el-main>
    <el-footer>
      <el-button class="buttomButton">确认提交</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "createTeam",
      data(){
          return{
            headerLocation:'OOAD 2016(1)',
            teamNameInput:'',
            classOptions:[
              {
                value:'选项1',
                label:'2016(1)'
              },
              {
                value:'选项2',
                label:'2016(2)'
              },
              {
                value:'选项3',
                label:'2016(3)'
              }],
            unteamStudent:[
              {
                studentNum:'24331434324',
                name:'MINGming'
              },
              {
                studentNum:'24331434324',
                name:'MINGming'
              },
              {
                studentNum:'24331434324',
                name:'MINGming'
              }],
            classSelect:'',
            searchStudent:'',

          }
      },
      methods:{
          tableSearch(){

          },
          handleSelect(){

          }
      }

    }
</script>

<style scoped>
  .el-container{
    height: 99vh;
  }
  .selectDiv{
    margin:20px 0px;
  }
  .el-select{
    width: 100%;
  }
  .el-autocomplete{
    width: 100%;
    margin-top: 20px;
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
