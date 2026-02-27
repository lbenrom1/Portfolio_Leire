
export interface Character {
  id: number
  nomen:string
  imago:string
  quote:string
  descriptione:string
}

export const characters: Character[] = [
  {
    id:0,
    nomen:'Abe Simposon',
    imago:'abe.png',
    quote:'"¿Por qué me evitan? ¿Mi rostro marchito te recuerda el sombrío espectro de la muerte?",',
    descriptione:'Es un anciano, a menudo un poco entrometido, con sentido del humor y una gran tendencia a decir ridiculeces. Es un veterano de la Segunda Guerra Mundial que se retiró de su trabajo como músico de Orquesta de Jazz, sólo para encontrar que ya no eran una gran cosa. Abe lucha con un alcoholismo crónico y está muy vinculado a la explotación laboral.',
  },
  {
    id: 1,
    nomen: "Moe Szyslak",
    imago: "moe.png",
    quote: "Cuando te atrape, te sacaré los ojos y te los meteré en los pantalones para que puedas ver cómo te pateo, ¿de acuerdo? ¡A continuación usaré tu lengua para pintar mi barco!",
    descriptione: "Es un hombre áspero y malhumorado, generalmente malicioso y desagradable con la mayoría de los clientes que entran en su bar o en el Kwik e Mart."
  },
    {
    id: 3,
    nomen: "Moe Szyslak",
    imago: "moe.png",
    quote: "Cuando te atrape, te sacaré los ojos y te los meteré en los pantalones para que puedas ver cómo te pateo, ¿de acuerdo? ¡A continuación usaré tu lengua para pintar mi barco!",
    descriptione: "Es un hombre áspero y malhumorado, generalmente malicioso y desagradable con la mayoría de los clientes que entran en su bar o en el Kwik e Mart."
  },
]