import Button from "../Button/Button";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./Card.module.scss";

export function Card({ src, title, content, button, link }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={src} className={styles.image} />
      </div>
      <Tipografia texto={title} isTitle />
      <Tipografia texto={content} isBody />

      {button && <Button />}
      {link && <Button />}
    </div>
  );
}
