
<script setup lang="ts">
import { computed, ref } from 'vue';
import { proyectos, type Proyectos } from './data';
import { useRoute, useRouter } from 'vue-router';
import Carrus from '@/components/Carrus.vue';

const route = useRoute()

const router = useRouter()

//const proyecto =ref<Proyectos | undefined>(
 // proyectos.find(char => char.id === Number(route.params.id))
//)

const proyecto = computed(() =>
  proyectos.find(p => p.id === Number(route.params.id))
)

const photos = computed(() => proyecto.value?.photos || []);

</script>

<template>
    <div class="bg-[#439c82]">

      <h1 class="titulo text-6xl p-20">{{proyecto?.nomen}}</h1>
    
       <section class="bg-[#439c82] w-full flex justify-center items-center min-h-[60vh] lg:min-h-[95vh]">
  
        <Carrus
          :photos="photos"
          basePath="/imagines/Ilustracion"
          :autoplay-delay="2000"
        />

       </section>
    </div>
</template>

<style scoped>
.titulo {
    font-family: Special;
}
</style>