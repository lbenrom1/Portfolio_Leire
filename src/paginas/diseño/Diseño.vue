
<script setup lang="ts">
import Trabajoscartas from '@/components/Trabajoscartas.vue';
import { proyectos } from './data';
</script>

<template>
  <div class="relative pt-10 bg-[#38362a] overflow-hidden">
    <img
     src="/imagines/Portada/archivo 1.png"
     class="absolute inset-0 w-full h-auto object-cover z-0 mt-10"
    />

    <h1 class="titulo relative text-4xl font-bold pr-10 text-[#38362a] translate-x-283 translate-y-5">DISEÑO</h1>

    <section class="relative z-10 p-5 h-full justify-around gap-7 mt-5">
      <div class="w-full flex justify-between items-center pt-3 ml-10">
        <p class="w-250 text-[#201e1a]">Lorem ipsum dolor sit amet consectetur adipiscing elit, enim aliquet eros phasellus sodales lectus sapien ligula, luctus aenean mus mauris lacus leo. Ornare quis condimentum nulla eros est rhoncus malesuada molestie, leo cubilia sociosqu posuere etiam tristique class diam, donec non dis ultrices odio ut at. Curae et lacinia egestas class ultrices primis porta placerat sodales eros, vitae bibendum nunc feugiat pretium molestie mollis a luctus dictum, scelerisque suscipit ac praesent aliquam eu neque varius taciti.</p>
      </div>
    </section>
  </div>  
      <section class="bg-[#9b4342] w-full py-10">
       <div class="flex justify-center px-5">
        <Trabajoscartas 
         :items="proyectos" 
         imagePath="/imagines/Diseño/" 
         baseRoute="/diseño" 
         primaryColor="#ebd0a1"
         secondaryColor="#ebd0a1"
         accentColor="#9b4342"
        />
       </div>
      </section>
    
    
</template>

<style scoped>

.titulo {
    font-family: Special;
}

</style>