
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

const carpetas = [
  { 
    texto: "DISEÑO", 
    ruta: "/diseño", 
    img: "/imagines/Portada/archivo 1.png", 
    textTop: '20px', 
    textLeft: '1160px' 
  },
  { 
    texto: "COMIC", 
    ruta: "/comic", 
    img: "/imagines/Portada/archivo 2.png", 
    textTop: '20px', 
    textLeft: '1050px' 
  },
  { 
    texto: "ILUSTRACIÓN", 
    ruta: "/ilustracion", 
    img: "/imagines/Portada/archivo 3.png", 
    textTop: '20px', 
    textLeft: '915px'
     
  },
  { 
    texto: "OTROS", 
    ruta: "/otros", 
    img: "/imagines/Portada/archivo 4.png", 
    textTop: '20px', 
    textLeft: '830px' 
  },
]

</script>

<template>
  <div class="bg-[#38362a] w-full h-full flex flex-col justify-center items-between gap-50 ">
    <div>
      <h1 class="titulo text-8xl p-10 pt-45 pb-60 text-[#ebd0a1]">Portfolio</h1>
      <div class="flex flex-col p-10 gap-5 w-250 text-[#ebd0a1]">
        <h2 class="titulo text-md">Sobre mi:</h2>
        <p class="info w-100 md:w-150 lg:w-200 xl:w-250 transition-all">Lorem ipsum dolor sit amet consectetur adipiscing elit aptent euismod, gravida sodales enim non primis cras nullam montes, volutpat dapibus id quam neque arcu duis tortor. Torquent placerat sodales euismod aenean consequat purus aliquam litora dictumst, tempor proin bibendum lobortis porttitor tristique dapibus a, primis ante habitasse egestas mauris imperdiet sagittis quisque. Convallis ante feugiat aptent eleifend sodales vivamus ligula ac, cum vel porttitor quis suscipit odio nec tellus, sapien inceptos ultrices dis lacinia pharetra viverra.</p>
      </div>
    </div>

    <div class="relative w-full h-125 flex flex-col items-center gap-1 pt-10">
      <RouterLink
       v-for="(boton, index) in carpetas"
       :key="index"
       :to="boton.ruta"
       class="carpetas"
       :style="{
         top: index * 90 + 'px',
         zIndex: index + 1
       }"
      >
        <img
         :src="boton.img"
         class="w-full h-auto object-contain transform hover:-translate-y-[20px] transition-all duration-300 ease-out"
        />
        <div
        class="texto-imagen"
        :style="{ top: boton.textTop, left: boton.textLeft }"
        >
          {{ boton.texto }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

.titulo {
    font-family: Special;
}

.info {
    font-family: Poppins;
}

.carpetas {
  position: absolute;
  width: 100%;
  left: 0;
}

.texto-imagen {
  position: absolute; /* importante para moverlo dentro de la imagen */
  color: #38362a;
  font-size: 1.5rem;
  font-family: Special;
  transition: all 0.3s ease-out;
}

.carpetas:hover .texto-imagen {
  transform: translateY(-20px);
}
</style>