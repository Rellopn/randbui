<template>
  <el-container class="el-container-main">
    <el-header class="el-header-style">
      <LayoutHeader></LayoutHeader>
    </el-header>
    <el-container>
      <el-aside class="el-aside-style">
        <LayoutSidebar></LayoutSidebar>
      </el-aside>

      <el-main class="el-main-style" :style="{height:bindData.height}">
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent, ref,onBeforeMount} from 'vue'
import LayoutHeader from './Header/index.vue'
import LayoutSidebar from './Sidebar/index.vue'

export default defineComponent({
  components: {
    LayoutHeader,
    LayoutSidebar
  },
  setup() {
    let bindData = {
      height : ""
    }
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    const tableData = ref(Array(20).fill(item))

    onBeforeMount(()=>{
      bindData.height = (document.documentElement.clientHeight-65)+'px';
    })

    return {
      tableData,
      bindData
    }
  },
})
</script>

<style>

.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
  --el-aside-width:15vw!important;
}

.el-container-main {
  border: 1px solid #eee;

}

.el-aside-style {
  --el-aside-width: 150px;
  background-color: rgb(238, 241, 246)
}

.el-header-style {
  text-align: right;
  font-size: 12px
}
.el-main-style{
  height: 50vh;
  overflow-y: scroll;
}
</style>
