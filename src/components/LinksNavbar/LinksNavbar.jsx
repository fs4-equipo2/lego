import React, { useRef, useState } from "react";
import styles from "./LinksNavbar.module.scss";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa6";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";
import { SubMenuNavbar } from "../subMenuNavbar/SubMenuNavbar";

const LinksNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompraVisible, setIsCompraVisible] = useState(false);
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false);
  const [isAyudaVisible, setIsAyudaVisible] = useState(false);

  const menuRef = useRef(null);

  function handleClick(event) {
    setIsMenuOpen(true);
    setIsCompraVisible(false);
    setIsDescubrirVisible(false);
    setIsAyudaVisible(false);

    switch (event.target.id) {
      case "compra":
        setIsCompraVisible(true);
        setIsAyudaVisible(false);
        setIsDescubrirVisible(false);
        break;
      case "descubrir":
        setIsDescubrirVisible(true);
        setIsCompraVisible(false);
        setIsAyudaVisible(false);
        break;
      case "ayuda":
        setIsAyudaVisible(true);
        setIsDescubrirVisible(false);
        setIsCompraVisible(false);
        break;
    }
  }

  const subMenuCompra = [
    "Exclusivos",
    "Novedades",
    "Los más vendidos",
    "Decoración del hogar",
    "Ofertas y rebajas",
    "Tarjetas regalo",
    "Próximamente",
    "Encuentra la inspiración",
    "Última oportunidad para comprar",
  ];

  const subMenuDescubrirClickeable = [
    "Nuestros valores",
    "Nuestras apps",
    "Nuestras revistas",
  ];

  const subMenuDescubrir = [
    "Todos los temas LEGO",
    "Todos los intereses LEGO",
    "Para fans adultos",
    "Para familias",
    "LEGO Fortnite",
    "LEGO Insiders",
    "LEGO Mosaic Maker",
    "Ideas de regalos LEGO",
  ];

  const subMenuAyuda = [
    "Comprobar el estado de un pedido",
    "Envíos y devoluciones",
    "Encontrar una tienda",
    "Instrucciones de construcción",
    "Preguntas frecuentes",
    "Ponte en contacto con nosotros",
    "Piezas de repuesto",
  ];

  const closeSubMenu = () => {
    setIsCompraVisible(true);
    setIsDescubrirVisible(false);
    setIsAyudaVisible(false);
  };

  useOutsideAlerter(menuRef, () => {
    setIsMenuOpen(false);
    closeSubMenu();
  });

  return (
    <div ref={menuRef}>
      {isMenuOpen && (
        <div className={styles.menu}>
          {isCompraVisible && (
            <>
              <div className={styles.compraClickeable}></div>
              <div className={styles.compra}>
              <SubMenuNavbar handleClicker={closeSubMenu} />
            {/*   <div className={!isMenuOpen && <SubMenuNavbar handleClicker={closeSubMenu}  /> ? styles.subMenudos : styles.subMenuCompra}>
                {subMenuCompra.map((item) => (
                  <Tipografia
                    key={item}
                    color="--black"
                    texto={item}
                    isBodyXL
                  />
                ))}
                </div> */}
              </div>
            </>
          )}

          {isDescubrirVisible && (
            <>
              <div className={styles.descubrirClickeable}>
                <div></div>
                {subMenuDescubrirClickeable.map((item) => (
                  <Button
                    key={item}
                    isSubMenu
                    texto={item}
                    iconRight={<FaChevronRight />}
                  />
                ))}
              </div>
              <div className={styles.descubrir}>
                {subMenuDescubrir.map((item) => (
                  <Tipografia
                    key={item}
                    color="--black"
                    texto={item}
                    isBodyXL
                  />
                ))}
              </div>
            </>
          )}

          {isAyudaVisible && (
            <div className={styles.ayuda}>
              <div></div>
              {subMenuAyuda.map((item) => (
                <Tipografia key={item} color="--black" texto={item} isBodyXL />
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.links}>
        <Button
          isNavBar
          texto="COMPRAR"
          id="compra"
          handleClick={handleClick}
        />
        <Button
          isNavBar
          texto="DESCUBRIR"
          id="descubrir"
          handleClick={handleClick}
        />
        <Button isNavBar texto="AYUDA" id="ayuda" handleClick={handleClick} />
        <Button isBotonEspecial texto="NAVIDAD" />
      </div>
    </div>
  );
};

export default LinksNavbar;
