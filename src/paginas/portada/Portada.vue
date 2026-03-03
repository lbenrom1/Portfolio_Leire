
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { UserRoundSearch, NotebookPen, Instagram, Mail  } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';




const carpetas = [
  { 
    texto: "DISEÑO", 
    ruta: "/diseño", 
    img: "/imagines/Portada/archivo 1.png", 
    textTop: '10%', 
    textLeft: '76%',
    objectPosition: '80% 30%'
  },
  { 
    texto: "COMIC", 
    ruta: "/comic", 
    img: "/imagines/Portada/archivo 2.png", 
    textTop: '10%', 
    textLeft: '68%' 
  },
  { 
    texto: "ILUSTRACIÓN", 
    ruta: "/ilustracion", 
    img: "/imagines/Portada/archivo 3.png", 
    textTop: '10%', 
    textLeft: '60%'
     
  },
  { 
    texto: "OTROS", 
    ruta: "/otros", 
    img: "/imagines/Portada/archivo 4.png", 
    textTop: '10%', 
    textLeft: '55%' 
  },
]

const videreMenu = ref<boolean>(false)


</script>

<template>
  
  <Button
  class="miInfo flex ml-300 h-10 w-auto top-2 right-4 bg-[#83b7b6] text-lg text-[#38362a] hover:bg-[#38362a] hover:text-[#83b7b6]"
  @click="videreMenu = !videreMenu"
  >
    Más Sobre mi:
    <UserRoundSearch />
  </Button>

  <Card 
  v-show="videreMenu===true"
  class="miInfo fixed top-0 right-0
    h-screen
    w-96
    bg-[#83b7b6]
    text-[#38362a]
    border-none
    rounded-none
    transition-all duration-300">

  <CardContent>
    <Toggle
     class="miInfo flex justify-center top-2 ml-75 mr-6 h-10 w-10 bg-[#38362a]"
     @click="videreMenu = !videreMenu"
    >
     <UserRoundSearch class="text-[#83b7b6] text-lg"/>
    </Toggle>

    <div class="flex flex-col gap-5">
      <CardTitle class="titulo">Habilidades</CardTitle>
      
      <div class=" flex flex-col gap-2">
        <p class="flex flex-row gap-4 items-center">
          <img src="/imagines/Portada/ilustrator.png"
          class="w-8 h-auto"
          />
          Illustrator
        </p>

        <p class="flex flex-row gap-4 items-center">
          <img src="/imagines/Portada/photoshop.png"
          class="w-8 h-auto"
          />
          Photoshop
        </p>

        <p class="flex flex-row gap-4 items-center">
          <img src="/imagines/Portada/indesign.png"
          class="w-8 h-auto"
          />
          InDesign
        </p>

        <div class="flex flex-row gap-5 items-center ml-1">
          <NotebookPen />
          Tradicional
        </div>

        <p class="text-sm ml-15">Rotuladores de alcohol <br>
           Guache <br>
           Acuarela <br>
           Carboncillos
        </p>

        <CardTitle class="titulo mt-5 mb-3">Contactos</CardTitle>

        <div class="flex flex-row gap-5 items-center ml-1">
          <Instagram />
          @leire.s_wonderland
        </div>

        <div class="flex flex-row gap-5 items-center ml-1">
          <Mail />
          leire.benitezromeo@gmail.com
        </div>

      </div>
    </div>
  </CardContent>

  </Card>

  <div class="bg-[#38362a] w-full h-full flex flex-col justify-center items-between md:gap-10 lg:gap-25 ">

    <div>
      <h1 class="titulo text-6xl md:text-8xl lg:text-9xl p-10 pt-30 text-[#ebd0a1] transition-all">PORTFOLIO</h1>
      <div class="flex flex-col p-10 gap-5 w-250 text-[#ebd0a1]">
        <h2 class="titulo text-md">Sobre mi:</h2>
        <p class="info w-100 md:w-150 lg:w-200 xl:w-250 transition-all">Lorem ipsum dolor sit amet consectetur adipiscing elit aptent euismod, gravida sodales enim non primis cras nullam montes, volutpat dapibus id quam neque arcu duis tortor. Torquent placerat sodales euismod aenean consequat purus aliquam litora dictumst, tempor proin bibendum lobortis porttitor tristique dapibus a, primis ante habitasse egestas mauris imperdiet sagittis quisque. Convallis ante feugiat aptent eleifend sodales vivamus ligula ac, cum vel porttitor quis suscipit odio nec tellus, sapien inceptos ultrices dis lacinia pharetra viverra.</p>
      </div>
    </div>

    <div class="relative h-auto md:w-full pt-10 z-0"
       style="height: 600px;"
    >
      <RouterLink
       v-for="(boton, index) in carpetas"
       :key="index"
       :to="boton.ruta"
       class="carpetas hover:z-50"
       :style="{
         top: index * 120 + 'px',
         zIndex: index + 1
       }"
      >
        <img
          :src="boton.img"
          class="w-full h-auto md:w-full object-cover transition-all duration-300 hover:-translate-y-3 -translate-x-105 sm:-translate-x-50 md:-translate-x-10 lg:translate-x-0"
        />

        <div
         class="texto-imagen text-md md:text-lg lg:text-xl xl:text-2xl -translate-x-105 sm:-translate-x-50 md:-translate-x-10 lg:translate-x-0"
         :style="{ top: boton.textTop, left: boton.textLeft, }"
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
  font-family: Special;
  transition: all 0.3s ease-out;
}

.carpetas:hover .texto-imagen {
  transform: translateY(-20px);
}

.miInfo{
  position: absolute;
}
</style>