
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { proyectos, } from './data';
import { useRoute, } from 'vue-router';
import Carrus from '@/components/Carrus.vue';
import { scrollToSection } from '@/utils/scrollToSection';
import Navigation from '@/components/Navigation.vue';


const route = useRoute();

const proyecto = computed(() =>
  proyectos.find(p => p.id === Number(route.params.id))
);

onMounted(() => {
  scrollToSection('#presentación');
});

const photos = computed(() => proyecto.value?.photos || []);

const bocetos = computed(() => proyecto.value?.bocetos || []);

const finales = computed(() => proyecto.value?.finales || []);

const currentIndex = ref(0)
let interval: any = null

onMounted(() => {
  interval = setInterval(() => {
    if (finales.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % finales.value.length
    }
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const menuItems = [
  {
  label: 'Presentación',
  href: '#presentación',
  onClick: () => scrollToSection('#presentación')
  },
  {
  label: 'Proceso',
  href: '#proceso',
  onClick: () => scrollToSection('#proceso')
  },
  {
  label: 'Bocetos',
  href: '#bocetos',
  onClick: () => scrollToSection('#bocetos')
  },
  {
  label: 'Ejecución',
  href: '#ejecución',
  onClick: () => scrollToSection('#ejecución')
  },
  {
  label: 'Finales',
  href: '#final',
  onClick: () => scrollToSection('#final')
  },
]
</script>

<template>

    <div class="no-scrollbar bg-[#ebd0a1]">
      <Navigation :items="menuItems" home-route="/"
      bg-color="#38362a"
      text-color="#ebd0a1"
      hover-bg-color="hover:bg-[#38362a]"
      hover-text-color="hover:text-[#ebd0a1]"
      />

      <section id="presentación">

        <h1 class="titulo text-4xl md:text-6xl pt-20 ml-10 text-[#38362a]">{{proyecto?.nomen}}</h1>
        
        <div class=" bg-[#ebd0a1] w-full flex justify-center items-center min-h-[60vh] lg:min-h-[80vh]">
          <Carrus
           :photos="photos"
           basePath="/imagines/Comic"
           :autoplay-delay="2000"
           bg="bg-[#ebd0a1]"
           text="text-[#38362a]"
           accent-bg="hover:bg-[#38362a]"
           accent-text="hover:text-[#ebd0a1]"
          />
        </div>
       </section>

       <section id="proceso" class="bg-[#ebd0a1] pt-10">
        <h2 class="titulo text-4xl p-10 text-[#38362a]">
          Proceso
        </h2>

        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
          Bases del proyecto:
        </h3>

        <div class="flex flex-col lg:flex-row md:justify-between py-5 gap-20 lg:gap-50 ">
          <p class="w-100 md:w-150 lg:w-110 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
            {{ proyecto?.descriptione }}
          </p>

          <img
          :src="`/imagines/Comic/${proyecto?.imago}`"
          class=" w-100 h-auto max-h-100 object-contain mr-0 ml-10 md:ml-20 lg:ml-0 md:mr-10 rounded-lg"
          />
        </div>
       </section>

       <section id="bocetos" class="bg-[#ebd0a1] pt-15">

        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Bocetos:
        </h3>

        <div class="no-scrollbar w-full overflow-x-auto" ref="emblaRef">

          <div class="flex w-max gap-6 py-6 px-10">

            <div
             v-for="boceto in bocetos"
             :key="boceto">
            <img
             :src="`/imagines/Comic/${boceto}.jpg`"
             class="block h-80 w-auto object-contain rounded-lg flex-none cursor-grab"
            />
            </div>
          </div>

        </div>

      </section>

      <section id="ejecución" class="pt-15">
        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Ejecución:
        </h3>

        <div class="flex flex-col xl:flex-row my-7">
          <p class="w-100 md:w-150 xl:w-100 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
           {{ proyecto?.p1 }}</p>
          <p class="w-100 md:w-150 xl:w-100 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
           {{ proyecto?.p2 }}</p>
          <p class="w-100 md:w-150 xl:w-100 text-[#201e1a] ml-10 md:ml-20 lg:ml-25 mt-2">
           {{ proyecto?.p3 }}</p>
        </div>
      </section>

      <section id="final" class="pt-15">
        <h3 class="titulo text-2xl ml-20 text-[#38362a]">
         Final:
        </h3>

      <div class="grid grid-cols-1 gap-4 p-10 lg:grid-cols-5 lg:grid-rows-3 lg:h-150 lg:px-30">

    
        <div class="col-span-3 row-span-3 bg-[#ebd0a1] rounded-lg">
          <img
           v-if="finales.length"
           :src="`/imagines/Comic/${finales[currentIndex]}.jpg`"
           class="w-full min-h-70 max-h-full object-contain rounde-lg "
          />
        </div>
        
        <div class="grid grid-cols-3 gap-4 lg:contents">
        <div
         v-for="(final, index) in finales.slice(0,6)"
         :key="index"
         class="col-span-1 row-span-1"
        >
          <img
           :src="`/imagines/Comic/${final}.jpg`"
           class=" object-cover rounded-lg w-full h-full"
          />
        </div>
        </div>
      </div>

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