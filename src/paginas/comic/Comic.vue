
<script setup lang="ts">
import Trabajoscartas from '@/components/Trabajoscartas.vue';
import { proyectos } from './data';
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="relative pt-3 bg-[#38362a] overflow-hidden">

    <div class="relative mt-2 inline-block
         min-w-5xl lg:w-full
         -translate-x-115 sm:-translate-x-70 md:-translate-x-40 lg:translate-x-0">

      <RouterLink to="/" class="z-30">

        <img
         src="/imagines/Portada/archivo 2.png"
         class="carpetas absolute h-auto object-cover z-0  
           min-w-5xl lg:w-full"
        />
      
        <h1 
         class="titulo absolute z-20 mt-5 text-lg lg:text-xl xl:text-2xl cursor-pointer"
        >
          COMIC
        </h1>
      </RouterLink>

</div>
<div class="absolute z-0 bg-[#ebd0a1] w-full h-60 py-5 translate-y-35"></div>
    <section class="relative z-10 p-5 h-full justify-around gap-7 mt-3 ">
      <RouterLink to="/" class="flex justify-end text-[#38362a] underline">
        <p>Volver</p>
      </RouterLink>
      
      <div class="w-full flex justify-between items-center pt-3 ml-10">
        <p class="w-100  md:w-150 lg:w-200 xl:w-200 text-[#201e1a] mt-5 md:mt-10 pointer-events-none">El comic es la disciplina que más me apasiona. Siempre creci leyendo historietas, sean de la manera tradicional en TBOs o en internet. Llegando en mi adolescencia a los mangas y comics americanos de supererues. Los cuales han sido la mayor influencia en mi estilo artístico.</p>
      </div>
    </section>
  </div>  
      
      <section class="bg-[#ebd0a1] w-full py-10 ">
       <div class="flex justify-center px-5 -translate-y-5 translate-0 xl:translate-x-25 overflow-hidden">
        <Trabajoscartas 
         :items="proyectos" 
         imagePath="/imagines/Comic/" 
         baseRoute="/comic" 
         primaryColor="#ebd0a1"
         textColor="#38362a"
         accentColor="#ebd0a1"
        />
       </div>
      </section>
    
    <div>
      <RouterView/>
    </div>
</template>

<style scoped>

.titulo {
    font-family: Special;
    position: absolute;
    top: 25%;
    left: 68%;
    color: #38362a;
}

.carpetas {
  position: absolute;
  width: 100%;
  left: 0;
}
</style>