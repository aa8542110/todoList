<template>
  <div class="body">
    <div class="d-flex justify-content-center header">
      <div class="col text-center py-3" v-bind:class="{ active: active ==1 }"
       v-on:click="change(1)">My Tasks</div>
      <div class="col text-center py-3" v-bind:class="{ active: active ==2 }"
       v-on:click="change(2)">In Progress</div>
      <div class="col text-center py-3" v-bind:class="{ active: active ==3 }"
       v-on:click="change(3)">Completed</div>
    </div>
    <div class="addcontent">
      <div class="card  mx-auto">
        <div class="addView" v-if="additem.show">
          <div class="viewHead">
            <div class="bottomLine">
              <input type="text" class="title-text mt-2  mx-5 py-2"
               v-model="additem.title" placeholder="Put your title">
            </div>
          </div>
          <div class=" mt-2  mx-5 py-2">
            <div class="form-group">
              <h5>Deadline</h5>
              <div class="block">
                <el-date-picker v-model="additem.date" type="date" placeholder="選擇日期">
                </el-date-picker>
              </div>
              <h5>File</h5>
              <label for="input-file">
                <span>{{additem.file}}</span>
                <div class="bg-gray">
                  <i class="el-icon-plus"></i>
                </div>
                <input id="input-file" type="file">
              </label>
              <h5>Comment</h5>
              <input class="form-control" />
            </div>
            <div class="btn-group d-flex justify-content-center"
             role="group" aria-label="Basic example">
              <el-button-group>
                <el-button type="primary" @click="showAddView(false)">cancel</el-button>
                <el-button type="primary" @click="addTask(additem)">Submit</el-button>
              </el-button-group>
            </div>
          </div>
        </div>
        <div class="addbox p-3" v-else @click="showAddView(true)">
          <i class="el-icon-plus"></i>
          <span class="addbox-font">Add Content</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div v-for="(item,index) in Task" class=" mx-auto" :key="index">
        <div class="listView card" v-if="item.show">
          <div class="viewHead">
            <div class="bottomLine">
              <input type="text" class="title-text mt-2  mx-5 py-2"
               v-model="item.title" placeholder="Put your title">

            </div>
          </div>
          <div class=" mt-2  mx-5 py-2">
            <div class="form-group">
              <h5>Deadline</h5>
              <div class="block">
                <el-date-picker v-model="item.date" type="date" placeholder="選擇日期">
                </el-date-picker>
              </div>
              <h5>File</h5>
              <label for="input-file">
                <span>{{item.file}}</span>
                <div class="bg-gray">
                  <i class="el-icon-plus"></i>
                </div>
                <input id="input-file" type="file">
              </label>
              <h5>Comment</h5>
              <input class="form-control" />
            </div>
            <div class="btn-group d-flex justify-content-center"
             role="group" aria-label="Basic example">
              <el-button-group>
                <el-button type="primary" @click="showAddView(false)">cancel</el-button>
                <el-button type="primary">Submit</el-button>
              </el-button-group>
            </div>
          </div>

        </div>
        <div v-else class="View my-3 py-3">
        <div class="ml-3">{{item.title}}<i class="el-icon-edit-outline float-right mr-2"
        @click="editView(index)"></i></div>
        <div class="ml-3"><i class="el-icon-time  mr-2" />{{item.date}} </div>

        </div>
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
        title: 'What day is today',
        date: '2018-08-06',
        file: 'test',
        Comment: '',
        show: false,
      }, {
        title: 'What day is today',
        date: '2018-08-06',
        file: 'test',
        Comment: '',
        show: false,
      }],
      additem: {
        title: '',
        date: '',
        file: '',
        Comment: '',
        show: false,
      },
      active: 1,

    };
  },

  methods: {
    editView(index) {
      console.log(this.Task);
      this.Task.forEach((element) => {
        const item = element;
        item.show = false;
      });
      this.Task[index].show = true;
    },
    change(i) {
      this.active = i;
    },
    getTask() {
      return this.Task.sort(item => item.count > 6);
    },
    addTask(item) {
      const newitem = item;
      console.log(newitem);
      newitem.show = false;
      this.Task.push(item);
    },
    showAddView(bool) {
      this.additem.show = bool;
      console.log(this.additem);
    },
  },
};

</script>


<style>
body{
  background: #E1E1E1;
}
.View{
  border-radius:3px;
width: 800px;
}
  .title-text {
    border-width: 0;
    flex: 1;
    font-size: 16pt;
    background: transparent;
  }

  .bottomLine {
    border-bottom: black solid 1px;
  }

  .addbox-font {
    font-size: 16pt;
    color: gray;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .bg-gray {
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
    margin: 0 auto;
    min-width: 700px;
  }

  .app {
    background: #E1E1E1;
  }

  .card {
    margin-top: 1em;
    width: 800px;
    border: solid 1px #E1E1E1;
  }

  .active {
    color: #ffffff;
    border-bottom: solid 5px #00408B;
  }

  .addbox {
    background: white;
    border: 1px solid gray;
    border-radius: 5px;
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

  .View {
    background: #F2F2F2;
  }

</style>
