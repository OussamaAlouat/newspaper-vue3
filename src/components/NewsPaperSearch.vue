<template>
  <v-container id="input-usage" fluid>
    <v-row>
      <v-col cols="12">
        <v-text-field 
          label="Search"
          hide-details="auto"
          append-icon="mdi-magnify"
          :on-click:append="search"
          v-model="searchValue"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import useNewspaper from '@/composables/useNewsPaper';
import { ref } from 'vue';
const searchValue = ref<string>('');
const { isLoading, searchedNews, searchByTitle } = useNewspaper();

const search = () => {
  if (searchValue.value !== '') {
    searchByTitle(searchValue.value);
  }
  console.log(searchedNews);
}


</script>

<style lang="scss"></style>