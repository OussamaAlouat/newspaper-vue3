<script lang="ts" setup>
import { computed } from 'vue';

import useNewspapers from '@/composables/useNewsPapers';

import NewsPaperList from '@/components/NewsPaperList.vue';
import NewsPaperSearch from '@/components/NewsPaperSearch.vue';
import NoData from '@/components/NoData.vue';
import NewsPaperSpinner from '@/components/NewsPaperSpinner.vue';

const { news ,isLoading, totalNews, searchAll } = useNewspapers();
const value = computed<string>(() => `Se han encontrado ${totalNews.value} noticias`)

</script>

<template>
  <news-paper-search v-if="!searchAll"></news-paper-search>
  <div v-if="isLoading">
    <news-paper-spinner />
  </div>
  <div  v-else-if="news.length === 0" class="no-data">
    <no-data />
  </div>
  <div v-else>
    <div class="alert-box">
      <v-alert  class="news-alert" :text="value" ></v-alert>
    </div>
    <news-paper-list :newsPapers="news"></news-paper-list>
  </div>

</template>

<style lang="scss">
.no-data{
  display: flex;
  justify-content: center;
  height: 80%;
  align-items: center;
}

.alert-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  
}

.news-alert {
  justify-content: center;
  width: 100%;
  max-width: 25%;
}


@media (min-width: 862px) and (max-width: 1020px) {
  .news-alert {
    max-width: 30%;
  }
}
@media (min-width: 664px) and (max-width: 862px) {
  .news-alert {
    max-width: 40%;
  }
}
@media (min-width: 500px) and (max-width: 664px) {
  .news-alert {
    max-width: 55%;
  }
}

@media (min-width: 420px) and (max-width: 500px) {
  .news-alert {
    max-width: 70%;
  }
}

@media (max-width: 420px) {
  .news-alert {
    max-width: 100%;
  }
}


</style>