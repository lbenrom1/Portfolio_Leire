
<script setup lang="ts">
import { computed, ref } from 'vue';
import { proyectos, type Proyectos } from './data';
import { useRoute, useRouter } from 'vue-router';
import Carrus from '@/components/Carrus.vue';
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue({
  dragFree: true
})

const route = useRoute()

const router = useRouter()

//const proyecto =ref<Proyectos | undefined>(
 // proyectos.find(char => char.id === Number(route.params.id))
//)

const proyecto = computed(() =>
  proyectos.find(p => p.id === Number(route.params.id))
)

const photos = computed(() => proyecto.value?.photos || []);

const bocetos = computed(() => proyecto.value?.bocetos || []);
</script>

<template>
    <div class="bg-[#439c82]">

      <h1 class="titulo text-6xl p-20 text-[#38362a]">{{proyecto?.nomen}}</h1>
    
       <section class="bg-[#439c82] w-full flex justify-center items-center min-h-[60vh] lg:min-h-[95vh]">
  
        <Carrus
          :photos="photos"
          basePath="/imagines/Ilustracion"
          :autoplay-delay="2000"
          bg="bg-[#439c82]"
          text="text-[#38362a]"
          accent-bg="hover:bg-[#38362a]"
          accent-text="hover:text-[#439c82]"
        />

       </section>

       <section class="bg-[#439c82]">
        <h2 class="titulo text-4xl p-10 text-[#38362a]">
          Proceso
        </h2>

        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
          Bases del proyecto:
        </h3>

        <div class="flex flex-col lg:flex-row md:justify-between py-5 gap-20 lg:gap-50 ">
          <p class="w-100 md:w-200 lg:w-110 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
            {{ proyecto?.descriptione }}
          </p>

          <img
          :src="`/imagines/Ilustracion/${proyecto?.imago}`"
          class=" w-100 h-auto mr-0 ml-10 md:ml-20 lg:ml-0 md:mr-10 rounded-lg"
          />
        </div>
       </section>

       <section class="bg-[#439c82]">

        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Bocetos:
        </h3>

        <div class="w-full overflow-hidden" ref="emblaRef">

          <div class="flex gap-6 py-6 px-10">

            <img
             v-for="boceto in bocetos"
             :key="boceto"
             :src="`/imagines/Ilustracion/${boceto}.jpg`"
             class="h-60 w-auto object-contain rounded-lg flex-none cursor-grab"
            />

          </div>

        </div>

      </section>

      <section>
        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Ejecución:
        </h3>

        <div class="flex my-7">
          <p class="w-100 md:w-200 lg:w-110 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
           {{ proyecto?.p1 }}</p>
          <p class="w-100 md:w-200 lg:w-110 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
           {{ proyecto?.p2 }}</p>
          <p class="w-100 md:w-200 lg:w-110 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
           {{ proyecto?.p3 }}</p>
        </div>
      </section>

      <section>
        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Final:
        </h3>

      <div class="grid grid-cols-5 grid-rows-3 gap-4 h-150 p-10 px-30">

    
        <div class="col-span-3 row-span-3 bg-gray-200"></div>

  <!-- bloques pequeños -->
        <div class="col-span-1 row-span-1 bg-gray-200"></div>
        <div class="col-span-1 row-span-1 bg-gray-200"></div>
        <div class="col-span-1 row-span-1 bg-gray-200"></div>
        <div class="col-span-1 row-span-1 bg-gray-200"></div>
        <div class="col-span-1 row-span-1 bg-gray-200"></div>
        <div class="col-span-1 row-span-1 bg-gray-200"></div>

      </div>
      
      </section>

    </div>
</template>

<style scoped>
.titulo {
    font-family: Special;
}


</style>