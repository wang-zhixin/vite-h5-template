<script lang='ts' setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import tabbar from './tabbar/index.vue'
const route = useRoute()

const showTabbar = computed(() => route.meta.tabbar)

const mainHeight = computed(() => showTabbar.value ? 'calc(100vh - 50px)' : '100vh')
</script>

<template>
  <div class="main" :style="{ height: mainHeight }">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive" :key="route.name" />
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive" :key="route.name" />
    </router-view>
  </div>
  <tabbar v-show="showTabbar" />
</template>
