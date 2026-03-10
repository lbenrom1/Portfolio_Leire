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
  finales: string[]
}

export const proyectos: Proyectos[] = [
  {
    id:0,
    nomen:'El Transbordo',
    imago:'entero 1.jpg',
    quote:'"",',
    descriptione: "Elaboración de una anécdota o historieta de corte autobiográfico, puede ser real o ficticia.",
    photos:["entero 1","mitad","mitad 1","boceto 1","boceto 2","boceto 3","boceto 5", "deliniado", "boceto 6"] ,
    imgProceso:'Simple mock up.png',
    bocetos:["boceto 1","boceto 2","boceto 3","boceto 4","boceto 5", "deliniado", "boceto 6"],
    p1:"Primeramente, para crear este comic hice un resumen de la historia que queria contor. Una anecdota exagerada de mi viaje en interrail. Esta historia la desarrolle más con una escaleta. Despues de esto hice primeros bocetos de los personajes y despues un touraround de las dos protagonistas. Despúes de esto vino los bocetos de la disposición de las viñetas con lo que luego empece a dibujar las paginas finales.",
    p2:"Hubo un imprevisto en este proyecto. Las paginas de los bocetos no eran A4 por lo que al pasar al formato final A3, las viñetas no cuadraban. Para arreglarlo, corte todas las viñetas y las ordene como deberían estar. Al cuadrar todas las viñetas empece el deliniado en tinta, ayudandome con una mesa de luz. Para el color, hice un escaner del entintado para así colorearlo en digital. ",
    p3:"En este proceso empece con elegir 3 colores y pintar las viñetas con el color que predonminaría en cada una y desde esa base fui sacando la gama de colores. El ultimo paso fue pooner los dialogos.",
    finales:["mitad","mitad 1", "parte 1", "parte 2", "parte 3", "parte 4"],
  },
  {
    id: 1,
    nomen: "Cuervo",
    imago: "boce 4.jpg",
    quote:'',
    descriptione:'Un comic para el fanzine: "Cuentalo en comic". Fanzine que junta diferentes artístas para crear historías, las cuales deben tener dos conceptos compartidos entre todas. En este caso: leyenda y cuervo. El comic estaba limitado solo a escala de grises.',
    photos:["boce 1", "boce 2","boce 3","boce 4","boce 5","boce 6",],
    imgProceso:'Titulo.png',
    bocetos:["boce 1", "boce 2","boce 3","boce 4","boce 5","boce 6",],
    p1:"Al inicio de este proyecto se nos dio, a varios artítas las palabras leyenda y cuervo para crear diferentes hístorias. Con esta idea a mi se me ocurrío la idea de un bosque y un mostruo que recordara a las máscaras de la peste con el pico. Con esta idea hice diferentes bocetos de los personajes y de los paisajes.",
    p2:"Luego, hice bocetos de las composiciones de las paginas para luego dibujarlas en el formato final A5. El deliniado lo hice con una mesa de luz para un acabado limpio y luego escaneé, para pintar las partes grises.",
    finales:["final 1","final 2","final 3","final 4","final 5","final 6",],
  },
    {
    id: 3,
    nomen: "Fanzine poetas",
    imago: "poeta.jpg",
    quote:'',
    descriptione:'Una colaboración con poetas por el dia de la poesía. Se trataba de ilustar un poema a traves del comic. Yo elegí el poema de Alfredo Saldaña "Velar por la palabra".',
    photos:["poeta boceto","poema", "poeta"],
    imgProceso:'esto.jpg',
    bocetos:["poeta boceto","poema", "poeta"],
    p1:"Al leer el poema, el concepto que se me vino a la mente fue el de morir por tus valores y la palabra, en el que el poema hace incapíe el poema, la señal de disparo. Esta idea me llevo al cuadro de 'Fusilamiento de Torrijos y sus compañeros en las playas de Málaga' de Antonio Gisbert. Por ello lleve esta interpretación a como habría sido la secuencía de acciones que habrían ocurrido en el momento captado. ",
    p2:"",
    finales:["poeta boceto","poeta"],
  },
]