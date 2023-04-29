<script lang="ts" setup>
import useNewspapers from '@/composables/useNewsPapers';
import NewsPaperList from '@/components/NewsPaperList.vue';
import NewsPaperSearch from '@/components/NewsPaperSearch.vue';
import NoData from '@/components/NoData.vue';
const { news, searchedNews ,isLoading } = useNewspapers();
</script>

<template>
  <news-paper-search></news-paper-search>
  <div v-if="isLoading">

  </div>
  <div  v-else-if="searchedNews.length === 0" class="no-data">
    <no-data />
  </div>
  <div v-else>
      <news-paper-list :newsPapers="searchedNews"></news-paper-list>
  </div>

  <h3 v-if="isLoading">Is loading</h3>

</template>

<style lang="scss">
.no-data{
  display: flex;
  justify-content: center;
  height: 80%;
  align-items: center;
}
</style>