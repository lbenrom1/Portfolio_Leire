
import Comic from "@/paginas/comic/Comic.vue";
import Diseño from "@/paginas/diseño/Diseño.vue";
import TrabajosDiseño from "@/paginas/diseño/TrabajosDiseño.vue";
import Ilustracion from "@/paginas/ilustracion/Ilustracion.vue";
import Otros from "@/paginas/otros/Otros.vue";
import Layout from "@/paginas/portada/Layout.vue";
import Portada from "@/paginas/portada/Portada.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'portada',
      component: Layout,
      children:[
        {
          path: '',
          component: Portada
        }
      ]
    },
    {
      path: '/comic',
      name: 'comic',
      component: Comic,
    },
    {
      path: '/diseño',
      name: 'diseño',
      component: Diseño,
      children:[
        {
          path:'',
          name:'diseño-trabajo',
          component: TrabajosDiseño
        }
      ]
    },
    {
      path: '/ilustracion',
      name: 'ilustracion',
      component: Ilustracion,
    },
    {
      path: '/otros',
      name: 'otros',
      component: Otros,
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})