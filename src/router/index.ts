
import Comic from "@/paginas/comic/Comic.vue";
import TrabajosComic from "@/paginas/comic/TrabajosComic.vue";
import Diseño from "@/paginas/diseño/Diseño.vue";
import TrabajosDiseño from "@/paginas/diseño/TrabajosDiseño.vue";
import Ilustracion from "@/paginas/ilustracion/Ilustracion.vue";
import TrabajoIlustracion from "@/paginas/ilustracion/TrabajoIlustracion.vue";
import Otros from "@/paginas/otros/Otros.vue";
import Portada from "@/paginas/portada/Portada.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'portada',
      component: Portada,
    },
    {
      path: '/comic',
      name: 'comic',
      component: Comic,
      children:[
        {
          path:':id',
          name:'comic-trabajo',
          component: TrabajosComic
        }
      ]
    },
    {
      path: '/diseño',
      name: 'diseño',
      component: Diseño,
      children:[
        {
          path:':id',
          name:'diseño-trabajo',
          component: TrabajosDiseño
        }
      ]
    },
    {
      path: '/ilustracion',
      name: 'ilustracion',
      component: Ilustracion,
      children:[
        {
          path: ':id',
          name:'ilustracion-trabajo',
          component: TrabajoIlustracion
        }
      ]
    },
    {
      path: '/otros',
      name: 'otros',
      component: Otros,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})