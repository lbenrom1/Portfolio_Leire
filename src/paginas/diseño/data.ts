export interface Proyectos {
  id: number
  nomen:string
  imago:string
  quote:string
  descriptione:string
  photos:string[]
  bocetos: string[]
  p1: string
  p2: string
  p3?: string
  finales: string[]
}

export const proyectos: Proyectos[] = [
  {
    id:0,
    nomen:'Avaricia',
    imago:'final.jpg',
    quote:'"",',
    descriptione:'Proyecto colaborativo de diseño de carteles para promocionar la obra de teatro “Siete” de la dramaturga Alejandra Winkler.',
    photos:["final","Fondo","prueba 1","prueba 2","prueba 3","prueba 4"] ,
    bocetos:["b 1","Fondo","prueba 1","prueba 2","prueba 3","prueba 4"],
    p1:"En este proyecto, teniamos que probar a hacer un cartel con el concepto de avaricia, el pecado capital. Ademas teníamos que hacer tres pruebas antes del final con carteles solo de tipografía, de textura y otro con foto. ",
    p2:"Al tener los diferentes carteles nos decantamos con el de foto ya que reflejaba de una forma más moderna el concepto del horror vacui que habíamos enlazado con el coleccionismo de lo material que se da en las personas avariciosas. Esta foto en realidad es un escaner de joyas.",
    p3:"",
    finales:["final","Fondo"],
  },
  {
    id: 1,
    nomen: "Bloom",
    imago: "logo.jpg",
    quote:'"",',
    descriptione:'Crear la identidad de marca para una empresa de chocolates valencianos.',
    photos:["caja 1","caja 2","caja 3","caja 4",],
    bocetos:["boce 1","boce 2","boce 3","boce 4","referencia 1","referencia 2","boce 5",],
    p1:"Para este proyecto queriamos fijarnos en el azulejo valenciano,para destacar su nominación de origen. Así que buscamos referencias en el barrio del Cabañal. Una vez elegido el concepto empezamos haciendo los bocetos para las cajas de chocolates y todo el marketing de redes sociales.",
    p2:" Decidimos que cada sabor de chocolate tuviera un simbolo especifico. Luego los pasamos en digital con illustrator.",
    finales:["logo","caja 1","caja 2","caja 3","caja 4",],
  },
    {
    id: 2,
    nomen: "Diseño editorial",
    imago: "mock up.jpg",
    quote:'"",',
    descriptione:'Invitar y acompañar a la lectura del artículo sin utilizar imágenes tener en cuenta la buena legibilidad en los textos largos y resolución de las imágenes. Tamaño artículo cerrado 20x26 cm, abierto 40x26 cm. Mínimo 6 páginas, máximo 8. Se comenzará con página impar y se finalizará con hoja par.',
    photos:["mock up","pag 1","pag 2","pag 3","pag 4","pag 5",],
    bocetos:["pag 1","pag 2","pag 3","pag 4","pag 5",],
    p1:"Al recibir este proyecto, empece con revisar revistas y libros con diseño que me gustaran. Así consegui una base para crear un diseño editorial. ",
    p2:"Con esta base en InDesign experimente con los textos y cuando llegue a un pliego que me gusto, creé las demas paginas desde esta.",
    finales:["mock up","pag 1","pag 2","pag 3","pag 4","pag 5",],
  },
   {
    id: 3,
    nomen: "Cooestima",
    imago: "foto 1.jpg",
    quote:'"",',
    descriptione:'Crear un juego de mesa sobre la salud mental. Con sus figuras, tablero, reglamentación...',
    photos:["cartel","foto 1","foto 2","foto 3","foto 8","foto 5","foto 7","foto 4","foto 6","carta 1","carta 2","carta 3","carta 4","carta 5","carta 6","pack","tablero",],
    bocetos:["cartel","foto 4","foto 6","carta 1","carta 2","carta 3","carta 4","carta 5","carta 6","pack","tablero",],
    p1:"Pimeramente, buscamos referencias de otros juegos para nuestro publico objetivo, jovenes. Así, hicimos el reglamento y por lo tanto una lista de todo el material que necesitaríamos diseñar. ",
    p2:"Tras esto coincidimos en una estética inspirada en la cartelería modernista y de las vanguardías. Con ello diseñamos las cartas, tablero, packaging, cartel, contador, figuras e instrucciones. ",
    finales:["foto 1","foto 2","foto 3","foto 8","foto 5","foto 7",],
  },
]