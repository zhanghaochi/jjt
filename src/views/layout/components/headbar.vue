<template>
  <div class="app-container">
    <el-switch
      @change="togglesidebar"
      active-color="#13ce66"
      inactive-color="#ff4949"
      v-model="sidebar"
    ></el-switch>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    sidebar: {
      get() {
        return !this.$store.getters.sidebar;
      },
      set(){
      }
    }
  },
  methods: {
    togglesidebar() {
      this.$store.dispatch("togglesidebar");
    }
  }
};
</script>

<style scoped>
</style>
