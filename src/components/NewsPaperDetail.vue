<script lang="ts" setup>
import type { NewsPaper } from '@/interfaces/newsPaper';
import { toRef } from 'vue';

const props = defineProps<{ newspaper: NewsPaper}>();
const newsPaper = toRef(props, 'newspaper');

</script>

<template>
  <div>
    <div class="img-box">
      <img :src="newsPaper.image" :alt="newsPaper.title" />
    </div>

    <div class="abstract">
      <h4>{{ newsPaper.title }}</h4>
      <div>
        {{ newsPaper.abstract }}
      </div>
    </div>

    <div class="info-box">
      <p><strong>Fecha de creación: </strong> {{ newsPaper.creation_date }}</p>
      <p><strong>Creada por: </strong>{{ newsPaper.publisher.name }}</p>
    </div>
  </div>
</template>


<style lang="scss">
h3{
  text-align: center;
}
h4 {
  font-weight: bold;
}
.abstract {
  display: flex;
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

img {
  max-height: 100%;
  max-width: 100%;
}
.img-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  max-width: 100%;
}
</style>