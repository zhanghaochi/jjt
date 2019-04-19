<template>
  <el-container class="app-wrapper">
    <div class="side-container">
      <sidebar/>
    </div>
    <el-container class="main-container">
      <el-header style="height: 50px;padding:0">
        <headbar/>
      </el-header>
      <el-main style="padding:0">
        <tagbar/>
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


