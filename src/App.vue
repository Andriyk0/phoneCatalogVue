<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'

</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
