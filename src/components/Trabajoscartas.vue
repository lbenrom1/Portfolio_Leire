<script setup lang="ts">
import {
  Card,
  CardContent,
} from "@/components/ui/card"
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

//const navigate = (id:number) => {
   // router.push(`${PropsTrabajo.baseRoute}/${id}`)
//}

</script>

<template>
    <div class="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-350 my-8 mx-auto transition-all">
        <Card 
         class="cursor-pointer w-70 h-80 lg:w-90 lg:h-100 hover:bg-[#ee3133] hover:text-white hover:w-80 hover:h-90 lg:hover:w-100 lg:hover:h-110 transition-all"
         v-for="trabajo in items"
         :key="trabajo.id" >
          <CardContent 
           class="flex flex-col justify-center items-center gap-1 w-full px-0"
           @click="router.push(`${baseRoute}/${ trabajo.id }`)"
          >
            <img 
            :src="`${ imagePath }${trabajo.imago}`" 
            alt="trabajo.nomen"
            class="w-60 h-60 lg:w-80 lg:h-80 object-cover object-top bg-[ffde00] rounded border border-black">
            <h2 class="font-medium text-lg">{{trabajo.nomen}}</h2>
          </CardContent>
      </Card>
    </div>

</template>

<style scoped>

</style>