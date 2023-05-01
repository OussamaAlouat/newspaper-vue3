<script lang="ts" setup>
import { ref } from 'vue';
import useNewspaper from '@/composables/useNewsPaper';

const searchValue = ref<string>('');
const {  searchByTitle } = useNewspaper();

const search = () => {
  if (searchValue.value !== '') {
    searchByTitle(searchValue.value);
  }
}
</script>

<template>
  <v-container id="input-usage" fluid>
    <v-row class="row-box">
      <v-col cols="12" md="8" sm="12" lg="8" xl="8">
        <v-text-field 
          label="Search"
          hide-details="auto"
          :on-click:append-inner="search"
          append-inner-icon="mdi-magnify"
          v-model="searchValue"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.row-box {
  justify-content: center;
  display: flex;
}
</style>