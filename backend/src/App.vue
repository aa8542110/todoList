<template>
  <div>
    <div class="d-flex justify-content-center header">
      <div class="col text-center py-3" v-bind:class="{ active: active ==1 }"
       v-on:click="change(1)">My Tasks</div>
      <div class="col text-center py-3" v-bind:class="{ active: active ==2 }"
       v-on:click="change(2)">In Progress</div>
      <div class="col text-center py-3" v-bind:class="{ active: active ==3 }"
       v-on:click="change(3)">Completed</div>
    </div>
    <div v-for="(item,index) in Task" class="card mt-3 mx-2 px-5 py-2" :key="index">
      <div class=" mt-2  px-5 py-2">
        <div class="form-group">
          <h5>Deadline</h5>
          <div class="block">
            <el-date-picker v-model="date" type="date" placeholder="選擇日期">
            </el-date-picker>
          </div>
          <h5>File</h5>
          <label for="input-file">
            <div class="bg-gray">
            <i class="el-icon-plus"></i>
            </div>
            <input id="input-file"   type="file">
          </label>

          <h5>Comment</h5>
          <input class="form-control" />
        </div>

      </div>
      <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
        <el-button-group>
          <el-button type="primary">cancel</el-button>
          <el-button type="primary">Submit</el-button>
        </el-button-group>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      Task: [{
        Title: '',
        date: null,
        file: null,
        Comment: '',
      }],
      active: 1,
      date: null,
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      }],
    };
  },

  methods: {
    change(i) {
      this.active = i;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};

</script>


<style>
.bg-gray{
background: #E4E7ED;
width: 2em;
height: 2em;
display: flex;
justify-content: center;
align-items: center;
}
  .header {
    background: #4A90E2;
    color: #00408B;
    font-size: 20pt;
  }

  .app {
    background: #E1E1E1;
  }

  .card {
    margin-top: 1em;
    border: solid 1px #E1E1E1;
  }

  .active {
    color: #ffffff;
    border-bottom: solid 5px #00408B;
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

</style>
