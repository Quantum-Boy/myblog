<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        router
        mode="horizontal"
        background-color="rgba(22, 22, 23, .8)"
        text-color="#fff"
        active-text-color="#67C23A"
        @select="handleSelect"
    >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/myblog">博客</el-menu-item>
    </el-menu>
    <RouterView />
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    const data = reactive({
      activeIndex: '/',
    })

    const gotoUrl = (url) => {
      this.$router.push(url)
    }
    return {
      ...toRefs(data),
      gotoUrl,
    }
  },
}
</script>

<style>
</style>
