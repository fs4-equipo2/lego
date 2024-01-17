import { FaChevronRight } from "react-icons/fa6"
import styles from "./BlogRecomendados.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import { CardPopulares } from "../CardPopulares/CardPopulares"
import { CardRecomendados } from "../CardRecomendados/CardRecomendados"

export function BlogRecomendados({}){
  return <div className={styles.blog}>
    <div className={styles.blogContainer}>
    <div className={styles.titleBlog}>
    <Tipografia texto= "Selecciones de esta semana" isTitle isRegularWeight/>
    </div>
    <div className={styles.blogCards}>
    <CardRecomendados
    src="https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
    title="LEGO® Ideas: Home Alone"
    content="299,99€"
    button="Añadir a la bolsa"
    link="link"
    />
      <CardRecomendados
    src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
    title="Trineo de Papá Noel"
    content="39,99€"
    button="Añadir a la bolsa"
    link="link"
    />
      <CardRecomendados
    src="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
    title="Vincent van Gogh: La Noche Estrellada"
    content="169,99€"
    button="Añadir a la bolsa"
    link="link"
    />  
    <CardRecomendados
    src="https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
    title="Mosaic Maker"
    content="99,99€"
    button="Añadir a la bolsa"
    link="link"
    />        
      </div>
    </div>
  </div>
}