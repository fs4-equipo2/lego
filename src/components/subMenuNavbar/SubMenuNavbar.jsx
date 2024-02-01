import React, { useRef, useState } from "react";
import styles from "./subMenuNavbar.module.scss";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa6";
import Tipografia from "../Tipografia/Tipografia";

export function SubMenuNavbar({ handleClicker }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(false);
  const [isDescubrirVisible, setIsDescubrirVisible] = useState(false);

  const subMenuRef = useRef(null);

  const subMenusCompraClick = {
    setsTema: [
      "Architecture",
      "Batman",
      "BrickHeadz",
      "Brick Sketches",
      "City",
      "Classic",
      "Creator 3in1",
      "Creator Expert",
      "DC",
      "Disney",
      "DOTS",
      "DUPLO",
      "Friends",
      "Harry Potter",
      "Ideas",
      "Jurassic World",
      "LEGO Animal Crossing",
      "LEGO DREAMZzz",
      "LEGO Education",
      "LEGO Icons",
      "LEGO Indiana Jones",
      "LEGO Super Mario",
      "Lord of the Rings",
      "Marvel",
      "Minecraft",
      "Minifiguras",
      "Monkie Kid",
      "NINJAGO",
      "Powered Up",
      "SERIOUS PLAY",
      "Sonic the Hedgehog",
      "Speed Champions",
      "Spider-Man",
      "Star Wars",
      "Technic",
    ],
    Edades: [ "1,5+", "4+", "6+", "9+", "13+", "18+"],
    Precios: [
      "Menos de 20 €",
      "20 € - 50 €",
      "50 € - 100 €",
      "100 € - 200 €",
      "Más de 200 €",
    ],
    Articulos: [
      "Accesorios",
      "Mochilas",
      "Libros",
      "Ropa",
      "Llaveros",
      "Fiambreras",
      "Juguetes de peluche",
      "Puzles y juegos de mesa",
      "Juegos de rol y vestimentas",
      "Artículos de papelería",
      "Almacenamiento",
      "Botellas de agua LEGO",
    ],
    Intereses: [
      "Para fans adultos",
      "Animales",
      "Manualidades",
      "Edifiios",
      "Coches",
      "Programación para niños",
      "Dragones",
      "Fantasía",
      "Películas",
      "Videojuegos",
      "Aprender a construir",
      "Música",
      "Ninjas",
      "Preescolar",
      "Princesas",
      "Héroes del mundo real",
      "Robots para niños",
      "Festividades",
      "Espacio",
      "Deportes",
      "STEM",
      "Trenes",
      "Viajes",
      "Series de televisión",
      "Vehículos",
    ],
    PickBuild: [
      "Pick a Brick",
      "Accesorios y kits de ladrillos",
    ],
  };

  const subMenuDescubrirClick = { 
    nuestrosValores: ["The LEGO Group", "Noticias LEGO", "Sostenibilidad"],
    nuestrasApps: ["LEGO Builder", "App LEGO Life"],
    nuestrasRevistas: ["Catálogos LEGO"], 
};

  const handleClick = (subMenu) => {
    setIsSubMenuOpen(true);
    setActiveSubMenu(subMenu);
    setIsDescubrirVisible(true)
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setActiveSubMenu(null);
    setIsDescubrirVisible(false)
  };

  useOutsideAlerter(subMenuRef, () => {
    setIsSubMenuOpen(false);
    closeSubMenu();

  });

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
    <div
      ref={subMenuRef}
      className={
        subMenusCompraClick[activeSubMenu] ? styles.subMenuContainer : "none"
      }
    >
      <div className={styles.comprarButtons}>
        {/* Botones principales */}
        <Button
          iconRight={<FaChevronRight />}
          texto="Sets por Tema"
          handleClick={() => handleClick("setsTema")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Edades"
          handleClick={() => handleClick("Edades")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Rangos de Precios"
          handleClick={() => handleClick("Precios")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Artículos LEGO"
          handleClick={() => handleClick("Articulos")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Intereses"
          handleClick={() => handleClick("Intereses")}
          isSubMenu
        />
        <Button
          iconRight={<FaChevronRight />}
          texto="Pick and Build"
          handleClick={() => handleClick("PickBuild")}
          isSubMenu
        />
        <div className={styles.comprarButtons}>
          {subMenuCompra.map((item) => (
            <Tipografia key={item} color="--black" texto={item} isBodyXL />
          ))}
        </div>
      </div>
{/* TITULO POR MENU */}
      {isSubMenuOpen && activeSubMenu && (
        <div className={styles.subMenu}>
          {isSubMenuOpen && activeSubMenu === "setsTema" && (
            <div className={styles.titulo}>
              <Button
                texto={<h4>VER TODOS LOS TEMAS</h4>}
                handleClick={() => handleClick("setsTema")}
                isSubMenu
              />
            </div>
          )}
      {/* EDADES */}
      {isSubMenuOpen && activeSubMenu && (
        <div className={styles.subMenu}>
          {isSubMenuOpen && activeSubMenu === "Edades" && (
            <div className={styles.titulo}>
              <Button
                texto={<h4>VER TODAS LAS EDADES</h4>}
                handleClick={() => handleClick("Edades")}
                isSubMenu
              />
            </div>
          )}

        </div>
      )}
            {/* PRECIOS */}
            {isSubMenuOpen && activeSubMenu && (
        <div className={styles.subMenu}>
          {isSubMenuOpen && activeSubMenu === "Precios" && (
            <div className={styles.titulo}>
              <Button
                texto={<h4>VER TODOS LOS RANGOS DE PRECIOS</h4>}
                handleClick={() => handleClick("Precios")}
                isSubMenu
              />
            </div>
          )}

        </div>
      )}
                {/* ARTICULOS */}
                {isSubMenuOpen && activeSubMenu && (
        <div className={styles.subMenu}>
          {isSubMenuOpen && activeSubMenu === "Articulos" && (
            <div className={styles.titulo}>
              <Button
                texto={<h4>VER TODOS LOS ARTÍCULOS LEGO</h4>}
                handleClick={() => handleClick("Articulos")}
                isSubMenu
              />
            </div>
          )}

        </div>
      )}
                    {/* INTERESES */}
                    {isSubMenuOpen && activeSubMenu && (
        <div className={styles.subMenu}>
          {isSubMenuOpen && activeSubMenu === "Intereses" && (
            <div className={styles.titulo}>
              <Button
                texto={<h4>VER TODOS LOS INTERESES</h4>}
                handleClick={() => handleClick("Intereses")}
                isSubMenu
              />
            </div>
          )}

        </div>
      )}
                         {/* PICK AND BUILD */}
                         {isSubMenuOpen && activeSubMenu && (
        <div className={styles.subMenu}>
          {isSubMenuOpen && activeSubMenu === "PickBuild" && (
            <div className={styles.titulo}>
              <Button
                texto={<h4>PICK AND BUILD</h4>}
                handleClick={() => handleClick("PickBuild")}
                isSubMenu
              />
            </div>
          )}

        </div>
      )}
            {/* Buttons */}
          <div className={styles.subCompra}>
            {subMenusCompraClick[activeSubMenu].map((item) => (
              <Button
                key={item}
                texto={item}
                isSubMenu
                handleClick={() => {
                  handleClicker();
                  setSelectedItem(item);
                }}
              />
            ))}
          </div>
        </div>
      )}

{/* DESCUBRIR MENU */}
<div ref={subMenuRef}
        className={
          subMenuDescubrirClick[activeSubMenu] ? styles.subMenuContainer : "none"
        }
      >
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
        </div>
        <div className={styles.descubrir}>
          {subMenuDescubrir &&
            subMenuDescubrirClick[activeSubMenu]?.map((item) => (
              <Tipografia
                key={item}
                color="--black"
                texto={item}
                isBodyXL
              />
            ))}
        </div>

    </div>
    </div>
  );
}
