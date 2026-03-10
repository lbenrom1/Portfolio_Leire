
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

      <RouterLink to="/">

        <img
         src="/imagines/Portada/archivo 3.png"
         class="carpetas absolute h-auto object-cover z-0  
           min-w-5xl lg:w-full"
        />
      
        <h1 
         class="titulo absolute z-20 mt-5 text-lg lg:text-xl xl:text-2xl cursor-pointer"
        >
          ILUSTRACIÓN
        </h1>
      </RouterLink>

</div>
<div class="absolute z-0 bg-[#439c82] w-full h-60 py-5 translate-y-35"></div>
    <section class="relative z-10 p-5 h-full justify-around gap-7 mt-3 ">
      <div class="w-full flex justify-between items-center pt-3 ml-10">
        <p class="w-100  md:w-150 lg:w-200 xl:w-250 text-[#201e1a] mt-5 md:mt-10 pointer-events-none">La ilustración es donde más segura me siento, al expresar mi visión artística. Una de las cosas por las que creo que se debe esto es que desde el primer momento que empecé a dedicar tiempo al arte, al principio como hobbie, siempre lo hice ilustrando lo que veía en mi día a día. Estas ilustraciones, fueron las que me llevaron a probar nuevas técnicas. Después me interese por la teoría y práctica, aprendiendo de anatomía, una cosa de lo que me gusta del dibujar.</p>
      </div>
    </section>
  </div>  
      
      <section class="bg-[#439c82] w-full py-10">
       <div class="flex justify-center px-5 -translate-y-5">
        <Trabajoscartas 
         :items="proyectos" 
         imagePath="/imagines/Ilustracion/" 
         baseRoute="/ilustracion" 
         primaryColor="#439c82"
         textColor="#38362a"
         accentColor="#439c82"
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
    left: 60.5%;
    color: #38362a;
}

.carpetas {
  position: absolute;
  width: 100%;
  left: 0;
}
</style>