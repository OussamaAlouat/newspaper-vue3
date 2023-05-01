<script setup lang="ts">
import { RouterView } from 'vue-router';

import NewspaperNav from './components/NewspaperNav.vue';
</script>

<template>
  <header>
    <newspaper-nav />
  </header>
  <main class="main">
    <RouterView/>
  </main>

</template>

<style >
.main {
  display: flex;
  flex-direction: column;
  top: 64px;
  height: calc(100% -64);
}

</style>
