<script lang="ts" setup>
import type { NewsPaper } from '@/interfaces/newsPaper';
import { toRef, ref } from 'vue';

const props = defineProps<{ newspaper: NewsPaper }>();
const newspaper = toRef(props, 'newspaper');
const show = ref<boolean>(false);
</script>

<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img :src="newspaper.image" height="200px" cover></v-img>

      <v-card-title>
        {{ newspaper.title }}
      </v-card-title>

      <v-card-subtitle>
        Created on: {{ newspaper.creation_date }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text">
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ newspaper.abstract }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>


<style lang="scss"></style>