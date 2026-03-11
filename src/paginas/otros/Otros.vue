
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Textarea from '@/components/ui/textarea/Textarea.vue';
</script>

<template>
     <div class="relative pt-3 bg-[#38362a] overflow-hidden">

      <RouterLink to="/" class="absolute right-0 text-[#38362a] underline z-index z-50 mr-5 translate-y-20">
        <p>Volver</p>
      </RouterLink>

    <div class="relative mt-2 inline-block
         min-w-5xl lg:w-full
         -translate-x-115 sm:-translate-x-70 md:-translate-x-40 lg:translate-x-0">

        <img
         src="/imagines/Portada/archivo 4.png"
         class="carpetas absolute h-auto object-cover z-0  
           min-w-5xl lg:w-full"
        />
      
        <h1 
         class="titulo absolute z-20 mt-5 text-lg lg:text-xl xl:text-2xl cursor-pointer"
        >
          CONTÁCTAME
        </h1>

    </div>

    <section class="relative w-full py-12 bg-[#83b7b6] mt-50 z-30 pb-25 -translate-y-20">
  <div class=" mx-auto max-w-5xl px-4">         
    <div class="flex flex-col lg:flex-row gap-8 items-center">
           
           <!-- Mapa de Google Maps -->
      <div class=" block w-full lg:w-1/2 h-100 rounded-lg overflow-hidden shadow-lg">
        <div class="aspect-square">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47698.9575680242!2d-0.9361806016324026!3d41.65174802820205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914dd5e618e91%3A0x49df13f1158489a8!2sZaragoza!5e0!3m2!1ses!2ses!4v1773188259369!5m2!1ses!2ses" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

        <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 h-100">
        <form  class="space-y-2 bg-[#83b7b6] p-8 rounded-lg h-100 border-2 border-[#38362a]">
          <div class="space-y-2">
                  
            <Label for="nombre">Nombre y apelldos</Label>
            <Input id="nombre" class="focus:border-[#38362a] border-[#489493] text-[#1a4241] text-sm" required />

          </div>
                
          <div class="space-y-2">
              
            <Label for="Gmail">Gmail</Label>
            <Input id="Gmail" class="focus:border-[#38362a] border-[#489493] text-[#1a4241]" required />

          </div>

          <div class="space-y-2">
            <Label for="contenido">Mensaje</Label>
            <Textarea id="contenido" class="focus:border-[#38362a] border-[#489493] min-h-30 text-[#1a4241] resize-none" required />
          </div>
        
          <Button type="submit" class="w-full bg-[#38362a] hover:bg-[#489493] text-[#489493] hover:text-[#38362a] text-md mt-4">
            Enviar
          </Button>
        </form>
        </div>
        
        </div>
        </div>
        
        </section>
        </div>   
    
    <footer class="absolute pb-5 z-50 -translate-y-20 bg-[#439c82] w-full py-8 text-center ">
        <div>
	       <h3 class="port">Portfolio</h3>
        </div>

        <small class="text-[#38362a]">
	       Leire Benítez Romeo
        </small>
    </footer>
</template>

<style scoped>
.titulo {
    font-family: Special;
    position: absolute;
    top: 25%;
    left: 51%;
    color: #38362a;
}

.port{
  font-family: Special;
  color: #38362a;
}
</style>