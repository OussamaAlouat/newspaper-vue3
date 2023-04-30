
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import useNewsPapeDetail from '@/composables/useNewsPaperDetail';
import NewsPaperDetail from '@/components/NewsPaperDetail.vue';

const route = useRoute();
const id = route.params['id'];

const { newsPaper, isLoading } = useNewsPapeDetail(id as string);

</script>

<template>
  <div v-if="newsPaper">
    <news-paper-detail :newspaper="newsPaper" />
  </div>
  <div v-if="isLoading">
    Loading
  </div>
</template>


<style lang="scss"></style>