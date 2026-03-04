
<script setup lang="ts">
import Trabajoscartas from '@/components/Trabajoscartas.vue';
import { proyectos } from './data';
</script>

<template>
  <div class="relative pt-3 bg-[#38362a] overflow-hidden">

    <div class="relative mt-2 inline-block
         min-w-5xl lg:w-full
         -translate-x-115 sm:-translate-x-70 md:-translate-x-40 lg:translate-x-0">
      <img
       src="/imagines/Portada/archivo 1.png"
       class="carpetas absolute h-auto object-cover z-0  
           min-w-5xl lg:w-full"
      />
      <h1 
       class="titulo absolute z-10 mt-5 text-xl lg:text-2xl xl:text-4xl"
      >
        DISEÑO
      </h1>

</div>
<div class="absolute z-0 bg-[#9b4342] w-full h-60 py-5 translate-y-35"></div>
    <section class="relative z-10 p-5 h-full justify-around gap-7 mt-3 ">
      <div class="w-full flex justify-between items-center pt-3 ml-10">
        <p class="w-100  md:w-150 lg:w-200 xl:w-250 text-[#201e1a] mt-5 md:mt-10">Lorem ipsum dolor sit amet consectetur adipiscing elit, enim aliquet eros phasellus sodales lectus sapien ligula, luctus aenean mus mauris lacus leo. Ornare quis condimentum nulla eros est rhoncus malesuada molestie, leo cubilia sociosqu posuere etiam tristique class diam, donec non dis ultrices odio ut at. Curae et lacinia egestas class ultrices primis porta placerat sodales eros, vitae bibendum nunc feugiat pretium molestie mollis a luctus dictum, scelerisque suscipit ac praesent aliquam eu neque varius taciti.</p>
      </div>
    </section>
  </div>  
      
      <section class="bg-[#9b4342] w-full py-10">
       <div class="flex justify-center px-5 -translate-y-5">
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
    position: absolute;
    top: 25%;
    left: 74.5%;
    color: #38362a;
}

.carpetas {
  position: absolute;
  width: 100%;
  left: 0;
}
</style>