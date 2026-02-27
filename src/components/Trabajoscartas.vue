<script setup lang="ts">
import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

interface Galeria {
  id: number;
  nomen: string;
  imago: string;
}

const PropsTrabajo = defineProps< {
  items:Galeria[],
  imagePath: string,
  baseRoute: string; // Ejemplo: '/diseño/gallery'
}>();

const router = useRouter();


//CONTEO DE CARDS
const inPagina = 2

const nuncPagina = ref (1)

const totalPaginae = computed(() => Math.ceil(PropsTrabajo.items.length / inPagina)) //el ceil redondea la operacion, characters length es la longitud de la lista

const visibles = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina //el valor inicial .1 x el numero de la pagina
    const fin = inicio + inPagina
    return PropsTrabajo.items.slice(inicio,fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae.value) {
        nuncPagina.value = pagina
    }

}

const paginaNumeri = computed(() => 
    [...Array(totalPaginae.value)].map((_, i) => i + 1)
)

//const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i+1)


//const navigate = (id:number) => {
   // router.push(`${PropsTrabajo.baseRoute}/${id}`)
//}

</script>

<template>
  <div class="w-250 mr-60 ml-60 flex flex-row justify-center items-center">
    <div 
    v-if="totalPaginae > 1"
    class="flex flex-row items-center justify-center gap-2 mt-4">
      <button
        @click="ireAdPaginam(nuncPagina - 1)" 
        :disabled="nuncPagina === 1"
        :class="['px-4 py-2 rounded-md font-medium transition-colors',
        nuncPagina === 1
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-[#ffde00] hover:bg-[#ee3133] hover:text-white'
        ]"
        >
           <ChevronLeft />
        </button>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10 lg:gap-5 xl:gap-25 w-full max-w-350 my-8 mx-auto transition-all">
        <Card 
         class="cursor-pointer w-70 h-80 lg:w-90 lg:h-100 hover:bg-[#ee3133] hover:text-white hover:w-80 hover:h-90 lg:hover:w-100 lg:hover:h-110 transition-all"
         v-for="trabajo in visibles" 
         :key="trabajo.id" >
          <CardContent 
           class="flex flex-col justify-center items-center gap-1 w-full px-0"
           @click="router.push(`${PropsTrabajo.baseRoute}/${ trabajo.id }`)"
          >
            <img 
            :src="`${ PropsTrabajo.imagePath }${trabajo.imago}`" 
            alt="trabajo.nomen"
            class="w-60 h-60 lg:w-80 lg:h-80 object-cover object-top bg-[ffde00] rounded border border-black">
            <h2 class="font-medium text-lg">{{trabajo.nomen}}</h2>
          </CardContent>
      </Card>
    </div>

    <div 
    v-if="totalPaginae > 1"
    class="flex flex-row items-center justify-center gap-2 mt-4">
      

           
        <!--button
          v-for="pagina in paginaNumeri" 
          @click="ireAdPaginam(pagina)"
          :class="['w-10 h-10 rounded-md font-medium transition-colors ', 
            nuncPagina === pagina
            ? 'bg-[#ee3133] text-white'
            :'bg-[#ffde00]  hover:hover:bg-[#ee3133] hover:text-white'
            ]"
      
          {{ pagina }}
        </!--button-->

        <button
          @click="ireAdPaginam(nuncPagina+1)" 
          :disabled="nuncPagina === totalPaginae"
          :class="['px-4 py-2 rounded-md font-medium transition-colors bg-[#ffde00] hover:bg-[#ee3133] hover:text-white',
            nuncPagina === totalPaginae
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#ffde00] hover:bg-[#ee3133] hover:text-white'
            ]"
          >
            <ChevronRight />
          </button>
    </div>
  </div>
</template>

<style scoped>

</style>