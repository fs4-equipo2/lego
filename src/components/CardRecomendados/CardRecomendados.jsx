import { useStoreActions } from "../../store";
import Button from "../Button/Button";
import IconoEstrellas from "../CardPopulares/IconoEstrellas";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardRecomendados.module.scss";

export function CardRecomendados({
  src,
  title,
  price,
  button,
  link,
  handleClick,
  uid,
}) {
  const { addProducto, calcularPrecioTotal } = useStoreActions(
    (actions) => actions.carrito
  );

  function handleClick() {
    addProducto({
      src,
      title,
      price,
      button,
      link,
      uid,
    });
    calcularPrecioTotal(price);
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <a href={link}><img src={src} className={styles.image} /></a>
      </div>
      <div className={styles.cardTitle}>
      <a href={link}>
      <Tipografia texto={title} isBody isRegularWeight />
      <Tipografia texto={price} isBodyLarge isBoldWeight />

      </a>
      </div>      
      <IconoEstrellas/>

      {button && (
        <Button isAñadirBolsa texto={button} handleClick={handleClick} />
      )}
      {link && <Button />}
    </div>
  );
}
