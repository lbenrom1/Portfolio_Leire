<script setup lang="ts">

</script>

<template>
    <div class="grid grid-rows-[1fr_auto] min-h-screen">
      <main>
        <RouterView/>
      </main>

      <footer class="relative z-50 bg-[#439c82] w-full py-8 text-center">
        <div>
	       <strong>Portfolio</strong>
        </div>

        <small>
	       Leire Benítez Romeo
        </small>
      </footer>
    </div>
</template>

<style scoped>

</style>