import Button from "../Button/Button";
import IconoEstrellas from "../CardPopulares/IconoEstrellas";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardRecomendados.module.scss";

export function CardRecomendados({ src, title, content, button, link}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <a href={link}><img src={src} className={styles.image} /></a>
      </div>
      <div className={styles.cardTitle}>
      <a href={link}>
      <Tipografia texto={title} isBody isRegularWeight />
      </a>
      </div>      
      <IconoEstrellas/>
      <Tipografia texto={content} isBodyLarge isBoldWeight />

      {button && <Button isAñadirBolsa texto={button}  />}
      {link && <Button />}
    </div>
  );
}