import Button from "../Button/Button";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./Card.module.scss";

export function Card({ src, title, content, button, link, iconButton }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <div className={styles.cardText}>
      <Tipografia texto={title} isSubtitle />
      <Tipografia texto={content} isBody isRegularWeight />
      </div>
      {button && <Button isLeeMas texto={button} iconRight={iconButton}  />}
      {link && <Button />}
    </div>
  );
}