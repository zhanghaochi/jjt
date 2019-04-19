<template>
  <div>
    <input
      ref="excel-upload-input"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleClick"
    >
    <el-button
      :loading="loading"
      style="margin-left:16px;"
      type="primary"
      @click="handleUpload"
    >选择文件</el-button>
    
  </div>
</template>

<script>
import XLSX from "xlsx";
import { Message, MessageBox } from "element-ui";
export default {
  props: {
    beforeupload: Function, // eslint-disable-line
    onsuccess: Function // eslint-disable-line
  },
  data() {
    return {
      loading: false,
      exceldata: {
        header: null,
        results: null
      }
    };
  },
  methods: {
    generateData({ header, results }) {
      this.exceldata.header = header;
      this.exceldata.results = results;
      this.onsuccess && this.onsuccess(this.exceldata);
    },
    handleClick(e) {
      const files = e.target.files;
      const rawFile = files[0]; // only use files[0]
      // console.log(rawFile)
      if (!rawFile) return;
      if (!this.isExcel(rawFile)) {
        Message.warning("只能是excle文件");
        console.log(rawFile);
        return;
      }
      if (!this.beforeupload) {
        this.readerData(rawFile);
        return;
      }
      if (this.beforeupload(rawFile)) {
        this.readerData(rawFile);
      }
    },
    handleUpload() {
      this.$refs["excel-upload-input"].click();
    },
    readerData(rawFile) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
          const data = e.target.result;
          const fixedData = this.fixData(data);
          const workbook = XLSX.read(btoa(fixedData), { type: "base64" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const header = this.getHeaderRow(worksheet);
          const results = XLSX.utils.sheet_to_json(worksheet);
          this.generateData({ header, results });
          this.loading = false;
          resolve();
        };
        reader.readAsArrayBuffer(rawFile);
      });
    },
    fixData(data) {
      let o = "";
      let l = 0;
      const w = 10240;
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        );
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    getHeaderRow(sheet) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet["!ref"]);
      let C;
      const R = range.s.r;
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    }
  }
};
</script>

<style scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}
</style>
