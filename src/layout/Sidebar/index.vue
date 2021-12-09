<template>
  <el-menu>
    <el-menu-item index="1">
      <el-icon>
        <Coin/>
      </el-icon>
      数据库信息
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <el-icon>
          <FolderOpened/>
        </el-icon>
        数据表
      </template>
      <el-menu-item index="3-1">Option 1</el-menu-item>
      <el-menu-item index="3-2">Option 2</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Coin, FolderOpened} from "@element-plus/icons";

export default defineComponent({
  components: {
    Coin,
    FolderOpened,
  }
})
</script>

<style scoped>

</style>