
<script lang="ts" setup>
import type { NewsPaper } from '@/interfaces/newsPaper';
import { toRef } from 'vue';

  const props = defineProps<{ newsPapers: NewsPaper[] }>();
  const news = toRef(props, 'newsPapers');
</script>

<template>
  <h4>Listado de noticias</h4>
  <div v-for="npaper of news" :key="npaper._id">
    <div>Title:{{ npaper.title }}</div>
    <textarea name="new" id="new" cols="30" rows="10" :value="npaper.abstract"></textarea>
    <div> Created on:  {{ npaper.creation_date }}</div>
    <div> Publisher:  {{ npaper.publisher.name }}</div>
  </div>
</template>


<style lang="scss">


</style>