<template>
    <div id="teacherMenu">
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-news"></i>导入学生名单
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>讨论课
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-edit"></i>导出成绩
        </el-menu-item>
      </el-menu>
    </div>
</template>
<script>
    export default {
        name: "teacherMenu"
    }
</script>

<style scoped>
  #teacherMenu{
    min-width: 300px;

    position: absolute;
    left: 0px;
  }
  .el-menu{
    height: 90vh;
  }
  .el-menu-item{
    height: 30vh;
    font-size: 25px;
    line-height: 30vh;
  }
  .el-icon-news{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-document{
    margin-right: 10px;
    font-size: 30px;
  }
  .el-icon-edit{
    margin-right: 10px;
    font-size: 30px;
  }
</style>
