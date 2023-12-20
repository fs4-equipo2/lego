import Button from "../Button/Button";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardRecomendados.module.scss";

export function CardRecomendados({ src, title, content, button, link, iconButton }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <Tipografia texto={title} isBodySmall />
      <Tipografia texto={content} isBody isRegularWeight />

      {button && <Button isLeeMas texto={button} iconRight={iconButton}  />}
      {link && <Button />}
    </div>
  );
}