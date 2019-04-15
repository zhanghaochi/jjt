<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <sidebar/>
    </el-aside>
    <el-container class="main-container">
      <el-header style="height: 40px">
        <headbar/>
      </el-header>
      <el-main>
        <tagbar style="height: 20px"/>
        <appmain/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { sidebar, headbar, tagbar, appmain } from "./components";
export default {
  components: {
    sidebar,
    headbar,
    tagbar,
    appmain
  }
};
</script>

<style scoped>
</style>
