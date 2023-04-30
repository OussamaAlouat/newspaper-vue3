<script lang="ts" setup>
import type { NewsPaper } from '@/interfaces/newsPaper';
import { toRef } from 'vue';

const props = defineProps<{ newspaper: NewsPaper }>();
const newsPaper = toRef(props, 'newspaper');

</script>

<template>
  <div>
    <div class="img-box">

      <v-img :src="newspaper.image" width="auto" height="200px" :alt="newsPaper.title">
        <template v-slot:error>
          <v-img src="/public/no-image.png" />
        </template>
      </v-img>
    </div>


    <div class="abstract p-5">
      <h4>{{ newsPaper.title }}</h4>
      <div>
        {{ newsPaper.abstract }}
      </div>
    </div>

    <div class="info-box p-10">
      <p><strong>Fecha de creación: </strong> {{ newsPaper.creation_date }}</p>
      <p><strong>Creada por: </strong>{{ newsPaper.publisher.name }}</p>
      <p><strong>Informacion obtenida de: </strong>{{ newsPaper.link }}</p>
    </div>
  </div>
</template>


<style lang="scss">
h3 {
  text-align: center;
}

h4 {
  font-weight: bold;
}

img {
  max-height: 100%;
  max-width: 100%;
}

.abstract {
  display: flex;
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}

.p-5 {
  padding: 5px;
}


.img-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>