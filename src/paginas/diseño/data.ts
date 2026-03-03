export interface Proyectos {
  id: number
  nomen:string
  imago:string
  quote:string
  descriptione:string
}

export const proyectos: Proyectos[] = [
  {
    id:0,
    nomen:'Cartel de Avaricia',
    imago:'avaricia.jpg',
    quote:'"",',
    descriptione:'Brief: crear un cartel de teatro, el cual promoviera la obra "Siete" sobre los pecados capitales, en este caso el pecado de la Avaricia.',
  },
  {
    id: 1,
    nomen: "Disño editorial",
    imago: "articulo 3.jpg",
    quote:'"",',
    descriptione:'Brief: Hacer el diseño editorial para un articulo para una revista sobre diseño y para diseñadores.',
  },
    {
    id: 3,
    nomen: "Tipografia de espadas",
    imago: "N.jpg",
    quote:'"",',
    descriptione:'Brief: Crear tres letras de una tipografia con una tematica y proceso no convencional.',
  },
]