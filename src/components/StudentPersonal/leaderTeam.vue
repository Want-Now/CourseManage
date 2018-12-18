<template>
  <el-container>
    <el-header>
      <el-button class="el-icon-back" @click="back()"></el-button>
      <p>{{headerLocation}}</p>
    </el-header>
    <el-main>
      <div>
        
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
            label="添加成员">
          </el-table-column>
          <el-table-column
            prop="name">
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
      <el-button >解散小组</el-button>
      <el-button >添加</el-button>
      <el-button >保存</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "leaderTeam",
      data(){
          return{
            headerLocation:'OOAD 2016(1)',
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
    height: 100vh;

  }
</style>
