<template>
  <div class="app-container">
    <div>
      <a href="http://20.1.12.34/tp5/public/uploads/download/clean.xlsx">
        <el-button type="primary" style="width:130px">下载excle模板</el-button>
      </a>
      <uploadexcle
        class="uploade-container"
        :onsuccess="handleSuccess"
        :beforeupload="beforeupload"
      ></uploadexcle>
      <el-button style="margin-left:16px;" type="primary" @click="aaaa">上传</el-button>
    </div>
    <el-table
      v-if="isTable"
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%;margin-top:20px;"
    >
      <el-table-column v-for="(item,k) of tableHeader" :prop="item" :label="item" :key="k">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input v-model="scope.row[item]" class="edit-input" size="small"/>
            <!-- <el-button @click="aaaaa">点击</el-button> -->
          </template>
          <span v-else>{{scope.row[item]}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="180">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(scope.row)"
          >提交</el-button>
          <el-button
            v-if="scope.row.edit"
            class="cancel-btn"
            size="small"
            icon="el-icon-refresh"
            type="warning"
            @click="cancelEdit(scope.row)"
          >取消</el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="scope.row.edit=!scope.row.edit"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="isPagination"
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import uploadexcle from "@/components/uploadexcel/index.vue";
import { Message, MessageBox } from "element-ui";
export default {
  components: {
    uploadexcle
  },
  data() {
    return {
      isPagination: false,
      isTable: false,
      tableData: [],
      tableHeader: [],
      page: 0,
      limit: 40
    };
  },
  computed: {
    total() {
      return this.tableData.length;
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(val);
    },
    aaaa() {
      console.log(this.total);
    },
    beforeupload(file) {
      // const isLt1M = file.size / 1024 / 1024 < 1
      // if(isLt1M ){
      //   return true
      // }else{
      //   Message.warning('不能大于1M');
      //   return false
      // }
      // if (!this.isExcel(file)) {
      //   Message.warning("只能是excle文件");
      //   return false;
      // }
      return true;
    },
    confirmEdit(row) {
      row.edit = false;
      Message.success("修改成功");
    },
    cancelEdit(row) {
      row.edit = false;
      // Message.warning("已还原成原始数据");
    },
    handleSuccess({ results, header }) {
      this.tableData = results.map(v => {
        this.$set(v, "edit", false); // https://vuejs.org/v2/guide/reactivity.html
        // v.originalTitle = v.title //  will be used when user click the cancel botton
        return v;
      });
      this.tableHeader = header;
      console.log(this.tableHeader);
      console.log(this.tableData);
      this.isPagination = true;
      this.isTable = true;
    }
  }
};
</script>

<style scoped>
.el-table {
  width: 100%;
  margin-top: 20px;
}
.uploade-container {
  display: inline-block;
}
</style>
