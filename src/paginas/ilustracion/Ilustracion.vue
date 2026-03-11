
<script setup lang="ts">
import Trabajoscartas from '@/components/Trabajoscartas.vue';
import { proyectos } from './data';
import { RouterLink } from 'vue-router';

</script>

<template>
   <div class="relative pt-3 bg-[#38362a] overflow-hidden">
      <div class="relative mt-2 inline-block min-w-5xl lg:w-full -translate-x-115 sm:-translate-x-70 md:-translate-x-40 lg:translate-x-0">
        <img
         src="/imagines/Portada/archivo 3.png"
         class="carpetas  h-auto object-cover z-5 min-w-5xl lg:w-full"
        />
        <h1 
         class="titulo absolute z-10 mt-5 text-lg lg:text-xl xl:text-2xl"
        >
          ILUSTRACÍON
        </h1>
      </div>

      <div class="absolute z-0 bg-[#439c82] w-full h-60 py-5 translate-y-35"></div>
    <section class="relative z-10 p-5 h-full justify-around gap-7 mt-3 ">
      <RouterLink to="/" class="flex justify-end text-[#38362a] underline">
        <p>Volver</p>
      </RouterLink>

      <div class="w-full flex justify-between items-center pt-3 ml-10">
        <p class="w-100  md:w-150 lg:w-200 xl:w-250 text-[#201e1a] mt-5 md:mt-10">El diseño, es una disciplima que empece a practicar en bachiller pero me encanto tanto que decidí estudiarlo. Con el diseño descubrí a grandes referentes como toda la cartelería modernista del siglo XVIII o los carteles de las vanguardías posteriores, que me han influenciado en toda mi producción. Ademas, que con el diseño se me habrieron diferentes caminos como el diseño editorial, de carteleria o de paguinas web como esta.</p>
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
         secondaryColor="#ebd0a1"
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