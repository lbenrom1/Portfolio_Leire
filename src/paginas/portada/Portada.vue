
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
  <div class="bg-[#29522f] w-full h-full flex flex-col justify-center items-between gap-180 p-10">
    <div>
      <h1 class="titulo text-8xl pt-20 text-[#9fe8b2]">Portfolio</h1>

    </div>

    <div class="flex flex-col gap-1">
      <Button class="bg-[#32683a] hover:pb-20 hover:pt-5 hover:bg-[#32683a]">
        <RouterLink to="/diseño">DISEÑO</RouterLink>
      </Button>

      <Button class="bg-[#458d4f] hover:pb-20 hover:pt-5 hover:bg-[#458d4f]">
        <RouterLink to="/comic">COMIC</RouterLink>
      </Button>

      <Button class="bg-[#5eaf69] hover:pb-20 hover:pt-5 hover:bg-[#5eaf69]">
        <RouterLink to="/ilustracion">ILUSTRACIÓN</RouterLink>
      </Button>

      <Button class="bg-[#80da8c] hover:pb-20 hover:pt-5 hover:bg-[#80da8c]">
        <RouterLink to="/otros">OTROS</RouterLink>
      </Button>
    </div>
  </div>
</template>

<style scoped>

.titulo {
    font-family: Boldonse;
}

</style>