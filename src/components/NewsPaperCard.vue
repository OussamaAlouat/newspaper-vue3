<script lang="ts" setup>
import { toRef, ref } from 'vue';
import { useRouter } from 'vue-router';

import type { NewsPaper } from '@/interfaces/newsPaper';

const props = defineProps<{ newspaper: NewsPaper }>();
const newspaper = toRef(props, 'newspaper');
const show = ref<boolean>(false);

const getLanguages= (array: string []): string => array.toString();
const router = useRouter();
const goToDetail = () => router.push(`/${newspaper.value._id}`);

</script>

<template>
  <div class="p-10">
    <v-card class="mx-auto" max-width="350" min-width="300" max-height="600px">
      <v-img :src="newspaper.image" width="auto" height="200px">
          <template v-slot:error>
          <v-img src="/public/no-image.png" />
        </template>
      </v-img>
      <v-card-title>
        {{ newspaper.title }}
      </v-card-title>

      <v-card-subtitle>
        Created on: {{ newspaper.creation_date }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="goToDetail">LEER MAS</v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            <div>
              <p>Autor: {{ newspaper.publisher.name }}</p>
              <p>Idiomas: {{ getLanguages(newspaper.languages) }}</p>
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>


<style lang="scss">
.abstract-container {
  line-height: 1.25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    height: 150px;
}
.p-10 {
  padding: 10px;
}
</style>