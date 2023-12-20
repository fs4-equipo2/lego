import Button from "../Button/Button";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardPopulares.module.scss";

export function CardPopulares({ src, title, content, button, link }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
      <Tipografia texto={title} isBodyLarge isRegularWeight />
      <Tipografia texto={content} isBodyLarge isBoldWeight />

      {button && <Button isAñadirBolsa texto={button}  />}
      {link && <Button />}
      </div>
    </div>
  );
}