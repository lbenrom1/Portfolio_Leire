
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
  <div class="bg-white w-full h-full flex flex-col justify-center items-between gap-50 p-10 ">
    <div>
      <h1 class="titulo text-8xl pt-45 pb-60 text-[#9fe8b2]">Portfolio</h1>
      <div class="flex flex-col gap-5 w-250 text-[#9fe8b2]">
        <h2 class="titulo text-md">Sobre mi:</h2>
        <p class="info w-100 md:w-150 lg:w-200 xl:w-250 transition-all">Lorem ipsum dolor sit amet consectetur adipiscing elit aptent euismod, gravida sodales enim non primis cras nullam montes, volutpat dapibus id quam neque arcu duis tortor. Torquent placerat sodales euismod aenean consequat purus aliquam litora dictumst, tempor proin bibendum lobortis porttitor tristique dapibus a, primis ante habitasse egestas mauris imperdiet sagittis quisque. Convallis ante feugiat aptent eleifend sodales vivamus ligula ac, cum vel porttitor quis suscipit odio nec tellus, sapien inceptos ultrices dis lacinia pharetra viverra.</p>
      </div>
    </div>

    <div class="flex flex-col items-stretch gap-1 w-full pb-10">
      <Button class=" bg-[#32683a]  hover:pb-20 hover:pt-5 hover:bg-[#32683a] transition-all overflow-hidden">
        <RouterLink to="/diseño">DISEÑO</RouterLink>
      </Button>

      <Button class=" bg-[#458d4f] hover:pb-20 hover:pt-5 hover:bg-[#458d4f] transition-all">
        <RouterLink to="/comic">COMIC</RouterLink>
      </Button>

      <Button class="bg-[#5eaf69] hover:pb-20 hover:pt-5 hover:bg-[#5eaf69] transition-all">
        <RouterLink to="/ilustracion">ILUSTRACIÓN</RouterLink>
      </Button>

      <Button class="bg-[#80da8c] hover:pb-20 hover:pt-5 hover:bg-[#80da8c] transition-all">
        <RouterLink to="/otros">OTROS</RouterLink>
      </Button>
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

</style>