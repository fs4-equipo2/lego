import Button from "../Button/Button";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardRecomendados.module.scss";

export function CardRecomendados({ src, title, content, button, link}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <Tipografia texto={title} isBody isRegularWeight />
      <Tipografia texto={content} isBodyLarge isBoldWeight />

      {button && <Button isAñadirBolsa texto={button}  />}
      {link && <Button />}
    </div>
  );
}