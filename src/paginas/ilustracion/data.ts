export interface Proyectos {
  id: number
  nomen:string
  imago:string
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
    nomen:'Ilustraciones 1984',
    imago:'mock 2.jpg',
    descriptione:'Desarrollar un conjunto de piezas para un libro ilustrado a partir de la obra de 1984 de George Orwell, atendiendo al público lector y a las convenciones editoriales. La propuesta integrará una base pictórica manual (acrílico o gouache) y un acabado digital para maquetación y retoques. El proyecto tinen que incluir: Portada, lomo, contraportada, doble página con ilustración continua, doble página (1 página ilustración + 1 página texto) y guardas.',
    photos:["1984 1", "1984 2", "1984 3", "1984 4", "1984 5", "1984 7","1984 6","mock 1", "mock 2", "mock 3", "mock 4", "mock 5", "mock 6",] ,
    imgProceso:'Simple mock up.png',
    bocetos:["boce 1", "boce 2", "boce 3", "1984 1", "1984 2", "1984 3", "1984 4", "1984 5", "1984 7","1984 6",],
    p1:"Al tener que ilustrar el libro de 1984, tuve que elegir primero las escenas que queria ilustrar. Estas eran el minuto de odio, escena que refleja el poder mental que tiene el gobierno en las personas y el momento del climax donde tras la tortura Winston se da cuenta que no puede hacer nada contra el regimen. ",
    p2:"Para la portada queria mostrar las calles de la ciudad con carteles y camaras del Gran Hermano para demostrar su omnipotencia. En las guardas del libro queria que se diferenciaran la del principio y la del final revelando la vigilancia del gran hermana a lo largo del libro. ",
    p3:"Esto lo consegui poneindo los ojos del cartel del Gran Hermano en primer plano y en la guarda final, el cartel rasgado con una camara en lugar de su ojo. Despúes de tener todos los bocetos, empece a pintarlos con guache con una paleta de azules grisaceos y rojos como acento. Al completar los dibujos, los escaneé y maqueté en digital.",
    finales:["mock 1", "mock 2", "mock 3", "mock 4", "mock 5", "mock 6",],
  },
  {
    id: 1,
    nomen: "Ilustración para articulo",
    imago: "final 2.jpg",
    descriptione:'El proyecto consiste en elaborar una ilustración conceptual a partir de un artículo de opinión de prensa. El ejercicio busca que el alumnado desarrolle la capacidad de análisis de un texto, sintetizando sus ideas principales en una imagen que funcione como acompañamiento visual. El resultado final se presentará en una doble página maquetada, integrando texto e ilustración de forma coherente y profesional.',
    photos:["boceto 3","boceto 4","final 1","final 2",],
    imgProceso:'Titulo.png',
    bocetos:["boceto 3","boceto 4","prueba 1","prueba 2","prueba 3","prueba 4","boceto","boceto 1","boceto 2",],
    p1:"En este trabajo, comencé el proceso sacando una lista de ideas del artículo que me dieron para ilustrar. Este trataba de los pueblos vaciados y como el gobierno los abandona. Ademas, de hablar que sus quejas son utilizadas como altavoces para partidos que luego no miran por ayudarles.",
    p2:"Con esto hice diferentes bocetos, quedandome con el del coche que oprime a la manifestación. Despues de esto elegí el collage como técnica. Coleccione diferentes fotos y las pegue segun la composición del boceto, dando como resulta la ilustración final.",
    finales:["final 1","final 2",],
  },
    {
    id: 2,
    nomen: "Infierno de Dante",
    imago: "entero.jpg",
    descriptione:'Una ilustración de la obra de Dante, la Divina Comedia.',
    photos:["parte 1","parte 2","parte 3","parte 4",],
    imgProceso:'esto.jpg',
    bocetos:["linea 1","linea 2","entintado"],
    p1:"En este proyecto queria hacer una ilustración del infierno de Dante basada en los frisos de la antiguedad. Cada linea de personajes representa a un condenado de cada circulo del infierno. Los primeros son Dante y Virgilio, su guía a traves del infierno que le presenta su viaje. En el lado contrario elfondo se hace más oscuro premonizando el ultimo circulo donde se encuentra Lucifer.",
    p2:"Con esta idea y los bocetos de cada personaje y de los margenes que se inspiran en las decoraciones de los relieves medievales y de como se representaba al infierno como una boca de un demonio. Me dedique ha deliniarlo con tinta y la ayuda de una mesa de luz. Déspues de esto, digitalmente le puse el color.",
    finales:["entero","parte 1","parte 2","parte 3","parte 4","entintado"],
  },
   {
    id: 3,
    nomen: "Ilustración",
    imago: "Letra Z.jpg",
    descriptione:'Creación de 3 caracteres para el 36 days of type. La selección de las letras es libre. Para abordar el proyecto, se reflexionará sobre la expresividad de la tipografía mediante la forma, el color, el acabado y la composición, valorando elementos como la animación o los volúmenes 3D. ',
    photos:["Letra E","Letra N","Letra Z","ceramica","ceramica 1", "ceramica 2"],
    imgProceso:'guarda.png',
    bocetos:["b 1","b 2","b 3","b 4","b 5","ceramica","ceramica 1", "ceramica 2"],
    p1:"Para este trabajo decidí crear una tipografia que fueran filos de espadas y tuvieran las decoraciones de los pomos. Para esto elegí que estas letras fueran bold para que pudiera haber cierto relieve como en los filos y con algo de serifa para que hubiera figuras puntiagudas. Tras hacer los bocetos, vi que los relieves se harían muy completados en formatos 2D por elo decidi hacer las letras en ceramica y pintarlas con guache, para así trabajar más facilmente con los volumenes.",
    p2:"A continuación, les hice fotos. En Photoshop las retoque para tapar los defectos de la ceramica. Para las decoraciones que van con las letras, estan dibujadas con rotulador de alcohol y escaneados. Las dos partes se juntaron en digital, dando así el resultado final.",
    finales:["Letra E","Letra N","Letra Z",],
  },
]