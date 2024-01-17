import React from "react";
import Button from "../Button/Button";
//import Tipografia from "../Tipografia/Tipografia";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "../LinkSw/LinkSw.module.scss";
import Tipografia from "../Tipografia/Tipografia";

const LinkSw = ({ href}) => {
  return (
    <div className={styles.iconosw}>
      <Button iconLeft={<FaChevronLeft />} />

<Tipografia 
  color={" --black"}
  texto="¡ENVÍO GRATUITO para los pedidos superiores a 55€!*"
  isBodySmall
  isLineHeight2
/>

<a className={"iconowSwipe"}  href={href} target= '_blank'> 
{<Tipografia 
 color={" --blue-light"}
  texto="Saber Más"
  isBodySmall
  isLineHeight2/>} </a>

      <Button iconRight={<FaChevronRight />} />
    </div>
  );
};

export default LinkSw