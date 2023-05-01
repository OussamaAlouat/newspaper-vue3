
<script lang="ts" setup>
import useNewsPaperNav from '@/composables/useNewsPaperNav';

const { switchSearch } = useNewsPaperNav();

</script>

<template>
  <div class="nav">
    <div>
      News app
    </div>
    <v-switch class="switch" label="Listar todas las Noticias" @click="switchSearch"></v-switch>
  </div>
</template>


<style lang="scss">
  .nav {
    top: 0;
    z-index: 1;
    margin: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 64px;
    background-color: white;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    box-shadow: 0 3px 3px -2px  rgba(0, 0, 0, .2);
  }
  .switch {
    position: absolute !important;
    right: 2px;
    height: 64px;
  }
</style>