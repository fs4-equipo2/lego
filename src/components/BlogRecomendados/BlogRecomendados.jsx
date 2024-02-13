import styles from "./BlogRecomendados.module.scss";
import Tipografia from "../Tipografia/Tipografia";
import { CardRecomendados } from "../CardRecomendados/CardRecomendados";

export function BlogRecomendados({}) {
  return (
    <div className={styles.blog}>
      <div className={styles.blogContainer}>
        <div className={styles.titleBlog}>
          <Tipografia texto="Recomendado para ti" isTitleLarge />
        </div>
        <div className={styles.blogCards}>
          <CardRecomendados
            src="https://www.lego.com/cdn/cs/set/assets/blt0ba2da641d7f0426/21330_prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
            title="LEGO® Ideas: Home Alone"
            content={299.99}
            button="Añadir a la bolsa"
            link="link"
            uid={"d0c7c95f-dee0-4943-a6ba-c15c09219f13"}
          />
          <CardRecomendados
            src="https://www.lego.com/cdn/cs/set/assets/bltb7d457aa2ce9f859/40499_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
            title="Trineo de Papá Noel"
            content={39.99}
            button="Añadir a la bolsa"
            link="link"
            uid={"3c45b251-aced-41fe-8457-11525a685259"}
          />
          <CardRecomendados
            src="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
            title="Vincent van Gogh: La Noche Estrellada"
            content={169.99}
            button="Añadir a la bolsa"
            link="link"
            uid={"c1152094-f69f-42ae-9992-181a378712b8"}
          />
          <CardRecomendados
            src="https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=2"
            title="Mosaic Maker"
            content={99.99}
            button="Añadir a la bolsa"
            link="link"
            uid={"12c6d389-e2c6-4be1-ab7c-0517ed11a8a3"}
          />
        </div>
      </div>
    </div>
  );
}
