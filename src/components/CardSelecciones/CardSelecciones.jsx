import Button from "../Button/Button";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardSelecciones.module.scss";

export function CardSelecciones({ src, title, content, button, link, iconButton }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <div className={styles.cardText}>
      <Tipografia texto={title} isTitleMedium />
      <Tipografia texto={content} isBodyMedium />
      </div>

      {button && <Button isLeeMas texto={button} iconRight={iconButton}  />}
      {link && <Button />}
    </div>
  );
}