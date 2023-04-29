<script lang="ts" setup>
import useNewspaper from '@/composables/useNewsPapers';
import NewsPaperList from '@/components/NewsPaperList.vue';

const { news, isLoading } = useNewspaper();
</script>

<template>
  <h3 v-if="isLoading">Is loading</h3>
  <div v-if="news && !isLoading">
    <news-paper-list :newsPapers="news"></news-paper-list>
  </div>
</template>

<style lang="scss">
</style>