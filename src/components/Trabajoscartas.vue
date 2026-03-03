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
  items: Galeria[],
  imagePath: string,
  baseRoute: string,
  primaryColor?: string,
  secondaryColor?: string,
  accentColor?: string
}>();

const router = useRouter();


//CONTEO DE CARDS
const inPagina = 3

const nuncPagina = ref (1)

const totalPaginae = computed(() => Math.ceil(PropsTrabajo.items.length / inPagina)) 

const visibles = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina 
    const fin = inicio + inPagina
    return PropsTrabajo.items.slice(inicio,fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae.value) {
        nuncPagina.value = pagina
    }

}

//const paginaNumeri = computed(() => 
  //  [...Array(totalPaginae.value)].map((_, i) => i + 1)
//)

//const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i) => i+1)


//const navigate = (id:number) => {
   // router.push(`${PropsTrabajo.baseRoute}/${id}`)
//}

const primaryColor = computed(() => PropsTrabajo.primaryColor ?? '#ebd0a1')
//const secondaryColor = computed(() => PropsTrabajo.secondaryColor ?? '#4c9b55')
const accentColor = computed(() => PropsTrabajo.accentColor ?? '#9be67d')

</script>

<template>
  <div class="w-full flex flex-row justify-center items-center">
    <div 
    v-if="totalPaginae > 1"
    class="flex flex-row items-center justify-center gap-2 mt-4">
      <button
       @click="ireAdPaginam(nuncPagina - 1)"
       :disabled="nuncPagina === 1"
       :style="{
        backgroundColor: nuncPagina === 1 ? accentColor : primaryColor
      }"
      class="px-2 py-2 rounded-full font-medium transition-colors"
        >
           <ChevronLeft />
        </button>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-5 xl:gap-25 w-full max-w-350 my-3 mx-auto transition-all">
        <Card 
         class="cursor-pointer w-70 h-80 lg:w-90 lg:h-85 hover:text-white hover:w-80 hover:h-90 lg:hover:w-100 lg:hover:h-90 border-none transition-all"
         v-for="trabajo in visibles" 
         :key="trabajo.id"
         :style="{ backgroundColor: primaryColor }"
         >
          <CardContent 
           class="flex flex-col justify-center items-center gap-1 w-full px-0"
           @click="router.push(`${PropsTrabajo.baseRoute}/${ trabajo.id }`)"
          >
            <img 
            :src="`${ PropsTrabajo.imagePath }${trabajo.imago}`" 
            alt="trabajo.nomen"
            class="w-60 h-60 lg:w-70 lg:h-70 object-cover object-top rounded border-none">
            <h2 class="font-medium text-xl text-[#38362a]">{{trabajo.nomen}}</h2>
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
          @click="ireAdPaginam(nuncPagina + 1)"
          :disabled="nuncPagina === totalPaginae"
          :style="{
           backgroundColor: nuncPagina === totalPaginae ? accentColor : primaryColor
          }"
          class="px-2 py-2 rounded-full font-medium transition-colors"
          >
            <ChevronRight />
          </button>
    </div>
  </div>
</template>

<style scoped>

</style>