
<script lang="ts" setup>
import type { NewsPaper } from '@/interfaces/newsPaper';
import { toRef } from 'vue';
import NewsPaperCard from './NewsPaperCard.vue';

const props = defineProps<{ newsPapers: NewsPaper[] }>();
const news = toRef(props, 'newsPapers');
</script>

<template>
  <div class="card-container">
    <div v-for="npaper of news" :key="npaper._id" class="mb-10">
      <NewsPaperCard :newspaper="npaper"/>
    </div>
  </div>
</template>


<style lang="scss">
.card-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
}

.mb-10 {
  margin-bottom: 10px;
}
</style>