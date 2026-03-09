
<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'


interface Props {
    photos: string[]
    basePath: string
    autoplayDelay?: number
    loop?: boolean
    dragFree?: boolean
    bg?: string
    text?: string
    accentBg?: string
    accentText?: string
}

const props = withDefaults(defineProps<Props>(), {
 autoplayDelay:2000,
 loop: true,
 dragFree:true,
 bgClass: "bg-gray-900",
 textClass: "text-white"
})

</script>

<template>
  <Carousel 
  :class="[props.bg,'w-full max-w-md md:max-w-2xl lg:max-w-4xl']"
  :opts="{
    loop:props.loop,
    dragFree: props.dragFree,
  }"
  :plugins="[
    Autoplay({
      delay: props.autoplayDelay,
      stopOnInteraction: false
    })
  ]"
  >
    <CarouselContent>
      <CarouselItem v-for="(photo,index) in props.photos" :key="index">
        <div class="p-1">
          <Card :class="[props.bg,'border-none shadow-none ']">
            <CardContent :class="[props.bg,'flex aspect-6/4 items-center justify-center p-6']">
              
              <img 
              :src="`${props.basePath}/${photo}.jpg`" 
              :alt="`imagen ${index + 1}`"
              class="w-auto h-100 object-container rounded-lg">

            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious :class="[props.bg, props.text, props.accentBg, props.accentText,
    'hidden md:flex justify-center items-center border-none']"/>
    <CarouselNext :class="[props.bg, props.text, props.accentBg, props.accentText,
    'hidden md:flex justify-center items-center border-none']"/>
  </Carousel>
</template>

<style scoped>

</style>