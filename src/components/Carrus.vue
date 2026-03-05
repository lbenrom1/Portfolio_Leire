
<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'


interface Props {
    photos: string[]
    basePath: string
    autoplayDelay?: number
    loop?: boolean
    dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
 autoplayDelay:2000,
 loop: true,
 dragFree:true
})

</script>

<template>
  <Carousel 
  class="bg-gray-900 w-full max-w-md md:max-w-2xl lg:max-w-4xl"
  :opts="{
    loop:props.loop,
    dragFree: props.dragFree
  }"
  >
    <CarouselContent>
      <CarouselItem v-for="(photo,index) in props.photos" :key="index">
        <div class="p-1">
          <Card class="bg-gray-900 border-none">
            <CardContent class="bg-gray-900 flex aspect-6/4 items-center justify-center p-6">
              
              <img 
              :src="`${props.basePath}/${photo}.jpg`" 
              :alt="`imagen ${index + 1}`"
              class="w-full h-full object-container  ">

            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="bg-gray-900 text-white hidden md:flex justify-center items-center"/>
    <CarouselNext class="bg-gray-900 text-white hidden md:flex justify-center items-center"/>
  </Carousel>
</template>

<style scoped>

</style>