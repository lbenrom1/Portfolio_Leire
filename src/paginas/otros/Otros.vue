
<script setup lang="ts">
import Trabajoscartas from '@/components/Trabajoscartas.vue';
import { proyectos } from './data';
</script>

<template>
    <div class="p-4">
    <h1 class="text-2xl font-bold text-center">Mi Galería</h1>
    
    <Trabajoscartas 
      :items="proyectos" 
      imagePath="/imagines/Ilustracion/" 
      baseRoute="/diseño" 
    />
    
  </div>
</template>

<style scoped>

</style>