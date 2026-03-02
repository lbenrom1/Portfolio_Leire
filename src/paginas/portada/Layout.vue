<script setup lang="ts">

</script>

<template>
    <div class="grid grid-row-[1fr_auto] min-h-screen">
      <main>
        <RouterView/>
      </main>

      <footer class="relative z-20 -mt-20 text-center bg-[#439c82] w-full py-8">
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