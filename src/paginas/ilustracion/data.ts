export interface Proyectos {
  id: number
  nomen:string
  imago:string
  quote:string
  descriptione:string
  photos:string[]
  imgProceso:string
  bocetos: string[]
  p1: string
  p2: string
  p3?: string
}

export const proyectos: Proyectos[] = [
  {
    id:0,
    nomen:'Ilustraciones 1984',
    imago:'Guarda 1 mock up.png',
    quote:'"",',
    descriptione:'Desarrollar un conjunto de piezas para un libro ilustrado a partir de la obra de 1984 de George Orwell, atendiendo al público lector y a las convenciones editoriales. La propuesta integrará una base pictórica manual (acrílico o gouache) y un acabado digital para maquetación y retoques. El proyecto tinen que incluir: Portada, lomo, contraportada, doble página con ilustración continua, doble página (1 página ilustración + 1 página texto) y guardas.',
    photos:["esto","ojo"] ,
    imgProceso:'Simple mock up.png',
    bocetos:["dante","articulo","ojo","esto"],
    p1:"Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis, porta metus eros tempor lacinia in ullamcorper. Auctor tortor interdum eleifend viverra sagittis fames luctus habitasse in est platea per lobortis felis, non eget malesuada ornare condimentum tristique integer aenean semper nascetur id hac quisque. Nulla eget litora accumsan massa dui curae ultricies, tortor vitae conubia tellus varius dictum cubilia, fames habitant facilisis aliquam placerat inceptos, quis senectus et netus natoque torquent",
    p2:"Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis, porta metus eros tempor lacinia in ullamcorper. Auctor tortor interdum eleifend viverra sagittis fames luctus habitasse in est platea per lobortis felis, non eget malesuada ornare condimentum tristique integer aenean semper nascetur id hac quisque. Nulla eget litora accumsan massa dui curae ultricies, tortor vitae conubia tellus varius dictum cubilia, fames habitant facilisis aliquam placerat inceptos, quis senectus et netus natoque torquent",
    p3:"Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis, porta metus eros tempor lacinia in ullamcorper. Auctor tortor interdum eleifend viverra sagittis fames luctus habitasse in est platea per lobortis felis, non eget malesuada ornare condimentum tristique integer aenean semper nascetur id hac quisque. Nulla eget litora accumsan massa dui curae ultricies, tortor vitae conubia tellus varius dictum cubilia, fames habitant facilisis aliquam placerat inceptos, quis senectus et netus natoque torquent"
  },
  {
    id: 1,
    nomen: "Ilustración para articulo",
    imago: "articulo.jpg",
    quote:'"",',
    descriptione:'El proyecto consiste en elaborar una ilustración conceptual a partir de un artículo de opinión de prensa. El ejercicio busca que el alumnado desarrolle la capacidad de análisis de un texto, sintetizando sus ideas principales en una imagen que funcione como acompañamiento visual. El resultado final se presentará en una doble página maquetada, integrando texto e ilustración de forma coherente y profesional.',
    photos:["articulo", "esto"],
    imgProceso:'Titulo.png',
    bocetos:["dante","articulo","ojo"],
    p1:"",
    p2:"",
  },
    {
    id: 3,
    nomen: "Infierno de Dante",
    imago: "dante.jpg",
    quote:'"",',
    descriptione:'Una ilustración de la obra de Dante, la Divina Comedia.',
    photos:["dante","esto"],
    imgProceso:'esto.jpg',
    bocetos:["dante","articulo","ojo"],
    p1:"",
    p2:"",
  },
   {
    id: 4,
    nomen: "Ilustración",
    imago: "Titulo.png",
    quote:'"",',
    descriptione:'blo blo blo',
    photos:["dante","articulo", "esto","ojo"],
    imgProceso:'guarda.png',
    bocetos:["dante","articulo","ojo"],
    p1:"",
    p2:"",
  },
]