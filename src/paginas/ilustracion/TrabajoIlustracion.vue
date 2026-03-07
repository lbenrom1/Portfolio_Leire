
<script setup lang="ts">
import { computed, ref } from 'vue';
import { proyectos, type Proyectos } from './data';
import { useRoute, useRouter } from 'vue-router';
import Carrus from '@/components/Carrus.vue';
import ScrollArea from '@/components/ui/scroll-area/ScrollArea.vue';

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
          class=" w-100 h-auto mr-0 ml-10 md:ml-20 lg:ml-0 md:mr-10"
          />
        </div>
       </section>

       <section class="bg-[#439c82]">

        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Bocetos:
        </h3>

        <div class="grid md:grid-cols-3 mr-10">

          <div class="hidden md:block"></div>

          <div class="md:col-span-2 overflow-x-auto no-scrollbar">
            <div class="flex gap-6 py-6 w-max">

              <img
               v-for="boceto in bocetos"
               :key="boceto"
               :src="`/imagines/Ilustracion/${boceto}.jpg`"
               class="h-60 w-auto object-contain rounded-lg"
              />

            </div>
          </div>

        </div>

      </section>

      <section>
        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Ejecución:
        </h3>
      </section>

      <section>
        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Final:
        </h3>
      </section>

    </div>
</template>

<style scoped>
.titulo {
    font-family: Special;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>