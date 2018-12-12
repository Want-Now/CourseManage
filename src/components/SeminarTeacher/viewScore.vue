<template>
  <el-container id="reportScore">
    <el-header>
      <el-button class="el-icon-back" ></el-button>
      <p>{{topic}}</p>
      <el-button class="el-icon-plus" ></el-button>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="team" label="组别" >
        </el-table-column>
        <el-table-column
          prop="presentationScore" label="展示" >
        </el-table-column>
        <el-table-column
          prop="questionScore" label="提问" >
        </el-table-column>
        <el-table-column
          prop="reportScore" label="报告" >
        </el-table-column>
        <el-table-column
          prop="score" label="总分" >
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-button style="width: 80%;">确认</el-button>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button style="width: 80%;">修改</el-button>
      </el-row>

    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "viewScore",
      data(){
        return{
          topic:"书面报告成绩",
          tableData: [{
            team:"1-2",
            presentationScore:"3.0",
            questionScore:"4.0",
            reportScore:"5.0",
            score:"4.0",
          }, {
            team:"1-2",
            presentationScore:"3.0",
            questionScore:"4.0",
            reportScore:"5.0",
            score:"4.0",
          }, {
            team:"1-2",
            presentationScore:"3.0",
            questionScore:"4.0",
            reportScore:"5.0",
            score:"4.0",
          }, {
            team:"1-2",
            presentationScore:"3.0",
            questionScore:"4.0",
            reportScore:"5.0",
            score:"4.0",
          }],
        }
      }
    }
</script>

<style scoped>

  .el-row .el-button{
    height: 50px;
    margin:10px;
    font-size: 18px;
    background-color: #494e8f;
    border-color: #494e8f;
    color: white;

  }
  .el-button:hover{
    background-color: #8084b1;
    border-color: #8084b1;
  }
  .el-button:focus{
    background-color: #8084b1;
    border-color: #8084b1;
  }
</style>
