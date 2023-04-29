<script lang="ts" setup>
import useNewspapers from '@/composables/useNewsPapers';
import NewsPaperList from '@/components/NewsPaperList.vue';
import NewsPaperSearch from '@/components/NewsPaperSearch.vue';

const { news, searchedNews ,isLoading } = useNewspapers();
</script>

<template>
  <news-paper-search></news-paper-search>
  <h3 v-if="isLoading">Is loading</h3>
  <div v-if="searchedNews && !isLoading">
    <news-paper-list :newsPapers="searchedNews"></news-paper-list>
  </div>
</template>

<style lang="scss">
</style>