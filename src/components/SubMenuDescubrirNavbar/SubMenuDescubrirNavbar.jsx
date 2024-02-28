import React, { useRef, useState } from "react";
import styles from "./subMenuNavbar.module.scss";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa6";
import Tipografia from "../Tipografia/Tipografia";

export function SubMenuDescubrirNavbar ({ handleClicker }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(false);


  const subMenuRef = useRef(null);

  const subMenuDescubrirClick = {
    nuestrosValores: ["The LEGO Group", "Noticias LEGO", "Sostenibilidad"],
    nuestrasApps: ["LEGO Builder", "App LEGO Life"],
    nuestrasRevistas: ["Catálogos LEGO"],
};

  const handleClick = (subMenu) => {
    setIsSubMenuOpen(true);
    setActiveSubMenu(subMenu);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setActiveSubMenu(null);
  };

  useOutsideAlerter(subMenuRef, () => {
    setIsSubMenuOpen(false);
    closeSubMenu();

  });

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

  return (
    <div ref={subMenuRef} className={subMenuDescubrirClick[activeSubMenu] ? styles.subMenuContainer : "none"}>
      <div className={styles.descubrirButtons}>
        {/* Botones principales */}
        <Button
          iconRight={<FaChevronRight />}
          texto="Nuestros valores"
          handleClick={() => handleClick("nuestrosValores")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Nuestras apps"
          handleClick={() => handleClick("nuestrasApps")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Nuestras resvistas"
          handleClick={() => handleClick("nuestrasRevistas")}
          isSubMenu
        />
          {subMenuDescubrir.map((item) => (
            <Tipografia key={item} color="--black" texto={item} isBodyXL />
          ))}
      </div>

      <div className={styles.subDescubrir}>
        { activeSubMenu && subMenuDescubrirClick[activeSubMenu]?.map((item) => (
          <Tipografia
            key={item}
            color="--black"
            texto={item}
            isBodyXL
          />

        ))}
      </div>
      </div>
  );
}
