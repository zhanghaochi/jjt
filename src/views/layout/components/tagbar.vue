<template>
  <div class="tags-view-container">
    <scrollpane class="tags-view-wrapper">
      <router-link
        v-for="(tags,k) in visitedviews"
        :key="k"
        :class="isActive(tags)?'active':''"
        tag="span"
        class="tags-view-item"
        :to="tags.path"
      >
        {{tags.meta.title}}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tags)"/>
      </router-link>
    </scrollpane>
  </div>
</template>

<script scoped>
import scrollpane from "@/components/scrollpane/index";
export default {
  name: "tags",
  components: { scrollpane },
  computed: {
    visitedviews() {
      return this.$store.state.tagsview.visitedviews;
    }
  },
  watch: {
    $route() {
      this.addViewTags();
    }
  },
  mounted() {
    this.addViewTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    addViewTags() {
      const { path } = this.$route;
      if (path) {
        this.$store.dispatch("addVisitedView", this.$route);
      }
      return false;
    },
    closeSelectedTag(view) {
      this.$store.dispatch("delVisitedView", view);
      if (this.isActive(view)) {
        const latestview = this.visitedviews.slice(-1)[0];
        if (latestview) {
          this.$router.push(latestview.path);
        } else {
          this.$router.push("/homepage");
        }
      }
    }
  }
};
</script>

<style scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  border-top: 1px solid #e9ebf0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.tags-view-item {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 5px 0 15px;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 3px;
}
.active {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}
.active:before {
  content: "";
  background: #fff;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  margin-right: 2px;
}
.el-icon-close {
  margin-left: 5px;
  width: 16px;
  height: 16px;
  vertical-align: 2px;
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: 100% 50%;
}
.el-icon-close:before {
  transform: scale(0.6);
  display: inline-block;
  vertical-align: -3px;
}
.el-icon-close:hover {
  background-color: #b4bccc;
  color: #fff;
}
</style>