export interface Proyectos {
  id: number
  nomen:string
  imago:string
  quote:string
  descriptione:string
  photos:string[]
}

export const proyectos: Proyectos[] = [
  {
    id:0,
    nomen:'Ilustraciones 1984',
    imago:'Guarda 1 mock up.png',
    quote:'"",',
    descriptione:'',
    photos:["esto","ojo"]
  },
  {
    id: 1,
    nomen: "Ilustración para articulo",
    imago: "articulo.jpg",
    quote:'"",',
    descriptione:'',
    photos:["articulo", "esto"]
  },
    {
    id: 3,
    nomen: "Infierno de Dante",
    imago: "dante.jpg",
    quote:'"",',
    descriptione:'',
    photos:["dante","esto"]
  },
   {
    id: 4,
    nomen: "Ilustración",
    imago: "Titulo.png",
    quote:'"",',
    descriptione:'',
    photos:["dante","articulo", "esto","ojo"]
  },
]