<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(v,k) in levellist" :key="k" :to="v.path">{{v.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      levellist: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true;
        }
      });
      if (matched[0].name != "首页") {
        matched = [{ path: "/homepage", name: "首页",meta: { title: '首页', icon: 'homepage'} }].concat(matched);
      }
      this.levellist = matched;
    }
  }
};
</script>

<style>
.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>
