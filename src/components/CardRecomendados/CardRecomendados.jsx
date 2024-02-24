import { useStoreActions } from "../../store";
import Button from "../Button/Button";
import IconoEstrellas from "../CardPopulares/IconoEstrellas";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./CardRecomendados.module.scss";

export function CardRecomendados({
  src,
  title,
  content,
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
      content,
      button,
      link,
      uid,
    });
    calcularPrecioTotal();
  }

  function mostrarPrecioComa(precio){
    return `${Math.floor(precio)},${(precio - Math.floor(precio)).toFixed(2)*100}€`
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <a href={link}><img src={src} className={styles.image} /></a>
      </div>
        <div className={styles.cardTitle}>
          <a href={link}>
            <Tipografia texto={title} isBody isRegularWeight />
            <Tipografia texto={mostrarPrecioComa(content)} isBodyLarge isBoldWeight />
          </a>
        </div>
      <IconoEstrellas/>
      <Tipografia texto={mostrarPrecioComa(content)} isBody isBoldWeight />

      {button && (
        <Button isAñadirBolsa texto={button} handleClick={handleClick} />
      )}
      {link && <Button />}
    </div>
  );
}