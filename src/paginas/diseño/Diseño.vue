
<script setup lang="ts">
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { router } from '@/router';
import { computed, ref } from "vue";
import { characters } from "./data";

const inPagina = 2
const nuncPagina = ref(1)
const totalPaginae = Math.ceil(characters.length / inPagina)
const lista = computed(() => {
  const inicio = (nuncPagina.value - 1) * inPagina
  const fin = inicio + inPagina
  return characters.slice(inicio,fin)
})

const ireAdPaginam = (pagina:number) => {
  if(pagina>=1 && pagina <= totalPaginae) {
    nuncPagina.value = pagina
  }
}

const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i + 1)

</script>

<template>
    <div class="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-350 my-8 mx-auto transition-all">
        <Card 
         class="cursor-pointer w-70 h-80 lg:w-90 lg:h-100 hover:bg-[#ee3133] hover:text-white hover:w-80 hover:h-90 lg:hover:w-100 lg:hover:h-110 transition-all"
         v-for="character in lista" >
          <CardContent 
           class="flex flex-col justify-center items-center gap-1 w-full px-0"
           @click="router.push(`/diseño/gallery/${ character.id }`)"
          >
            <img 
            :src="`/imagines/simpson/${ character.imago }`" alt=""
            class="w-60 h-60 lg:w-80 lg:h-80 object-cover object-top bg-[ffde00] rounded border border-black">
            <h2 class="font-medium text-lg">{{character.nomen}}</h2>
          </CardContent>
      </Card>
    </div>

    <div class="flex items-center justify-center gap-2 mt-4">
      <button
        @click="ireAdPaginam(nuncPagina - 1)"
        :disabled="nuncPagina===1"
        :class="['px-4 py-2 rounded-md font-medium transition-colors',
          nuncPagina===1 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white hover:bg-gray-500 hover:text-white'
        ]",
      >
        Anterior
      </button>

      <button
       v-for="pagina in paginaNumeri"
       @click="ireAdPaginam(pagina)"
       :class="['w-10 h-10 rounded-md font-medium transition-colors', 
        nuncPagina===pagina 
        ? 'bg-[#53c47e] text-white' 
        : 'bg-white hover:bg-gray-500 hover:text-white'
       ]"
      >
       {{ pagina }}
      </button>

      <button
       @click="ireAdPaginam(nuncPagina + 1)"
       :disabled="nuncPagina===totalPaginae"
       :class="['px-4 py-2 rounded-md font-medium transition-colors',
          nuncPagina===totalPaginae 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white hover:bg-gray-500 hover:text-white'
        ]"
      >
       Siguiente
      </button>
    </div>

</template>

<style scoped>

</style>