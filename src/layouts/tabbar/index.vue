<script lang='ts' setup>
const tabbar = reactive([
  {
    text: '首页',
    name: 'home',
    icon: 'home-o',
    to: '/home',
  },
  {
    text: '我的',
    name: 'my',
    icon: 'home-o',
    to: '/my',
  },
])
const activeTab = ref(tabbar[0].name)
</script>

<template>
  <van-tabbar v-show="$route.meta.tabbar" v-model="activeTab" fixed route>
    <van-tabbar-item v-for="(tab, tabIndex) in tabbar" :key="tabIndex" :icon="tab.icon" :to="tab.to">
      {{ tab.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang='scss' scoped>

</style>
