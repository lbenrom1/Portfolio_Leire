
<script setup lang="ts">
import Trabajoscartas from '@/components/Trabajoscartas.vue';
import { proyectos } from './data';
</script>

<template>
  <div class="p-10 flex flex-col h-full justify-around gap-7">
      <div class="w-full flex justify-between items-center gap-20">
        <h1 class="titulo text-6xl font-bold pr-10">Diseño</h1>
        <p class="w-250">Lorem ipsum dolor sit amet consectetur adipiscing elit, enim aliquet eros phasellus sodales lectus sapien ligula, luctus aenean mus mauris lacus leo. Ornare quis condimentum nulla eros est rhoncus malesuada molestie, leo cubilia sociosqu posuere etiam tristique class diam, donec non dis ultrices odio ut at. Curae et lacinia egestas class ultrices primis porta placerat sodales eros, vitae bibendum nunc feugiat pretium molestie mollis a luctus dictum, scelerisque suscipit ac praesent aliquam eu neque varius taciti.</p>
      </div>

    <Trabajoscartas 
      :items="proyectos" 
      imagePath="/imagines/Ilustracion/" 
      baseRoute="/diseño" 
    />
    
  </div>
</template>

<style scoped>

.titulo {
    font-family: Special;
}

</style>