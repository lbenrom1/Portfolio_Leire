
<script setup lang="ts">
import {
  NavigationMenu,
 // NavigationMenuContent,
 // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  //NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

interface MenuItems{
    label: string
    href:string
    onClick?: () => void

}

interface Props {
    items:MenuItems[],
    homeRoute?: string
    bgColor?: string       
    textColor?: string
}

const props = withDefaults(defineProps<Props>(), {
   homeRoute: '/',
   bgColor: '#439c82',
   textColor: '#38362a',
})

</script>

<template>

    <nav class="sticky top-0 z-50 bg-[#439c82] flex justify-center py-2"
         :style="{ backgroundColor: bgColor }">

     <NavigationMenu >

      <NavigationMenuList class="flex flex-row gap-1 md:gap-6">

       <NavigationMenuItem 
        v-for="item in items" :key="item.label"
        :href="item.href" 
        @click.prevent="item.onClick ? item.onClick() : null">
            <NavigationMenuLink 
             :class="[navigationMenuTriggerStyle(), 'text-md']"
             :style="{
              color: textColor,
              backgroundColor: bgColor,
            }">
              {{item.label}}
            </NavigationMenuLink>
          
       </NavigationMenuItem>

      </NavigationMenuList>
     </NavigationMenu>

    </nav>

</template>


<style scoped>

  .icon-home{
     color:slateblue;
     width: 3rem;
     height: 3rem;
  }

  .icon-home:hover{
     color:whitesmoke;
     background-color: steelblue;
  }

.extra-nav {
  opacity: 0.95;
}

</style>