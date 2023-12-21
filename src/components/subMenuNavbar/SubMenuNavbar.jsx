import React, { useRef, useState } from "react";
import styles from "./subMenuNavbar.module.scss";
import Button from "../Button/Button";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import Tipografia from "../Tipografia/Tipografia";

const subMenuNavbar = () => {
  const [isMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubCompraVisible, setIsSubCompraVisible] = useState(false);
  const [isSubDescubrirVisible, setIsSubDescubrirVisible] = useState(false);

  const subMenuRef = useRef(null);

  function handleClickCompra(event) {
    setIsSubMenuOpen(true);

    switch (event.target.id) {
      case "setsTema":
        setsTema(true);
        edades(false);
        rangoPrecios(false);
        articulosLEGO(false);
        intereses(false);
        pickBuild(false);
        break;

      case "edades":
        setsTema(false);
        edades(true);
        rangoPrecios(false);
        articulosLEGO(false);
        intereses(false);
        pickBuild(false);
        break;

      case "rangoPrecios":
        setsTema(false);
        edades(false);
        rangoPrecios(true);
        articulosLEGO(false);
        intereses(false);
        pickBuild(false);
        break;

      case "articulosLEGO":
        setsTema(false);
        edades(false);
        rangoPrecios(false);
        articulosLEGO(true);
        intereses(false);
        pickBuild(false);
        break;

      case "intereses":
        setsTema(false);
        edades(false);
        rangoPrecios(false);
        articulosLEGO(false);
        intereses(true);
        pickBuild(false);
        break;

      case "pickBuild":
        setsTema(false);
        edades(false);
        rangoPrecios(false);
        articulosLEGO(false);
        intereses(false);
        pickBuild(true);
        break;
    }
  }

  function handleClickDescubrir(event) {
    setIsSubMenuOpen(true);

    switch (event.target.id) {
      case "valores":
        valores(true);
        apps(false);
        revistas(false);
        break;

      case "apps":
        setvalores(false);
        apps(true)
        revistas(false);
        break;

      case "revistas":
        valores(false);
        apps(false);
        revistas(true);
        break;
    }
  }

  
  const subComprarTema = ["VER TODOS LOS TEMAS", "Architecture", "Batman", "BrickHeadz","Brick Sketches", "City", "Classic","Creator 3in1", "Creator Expert", "DC", "Disney","DOTS", "DUPLO", "Friends", "Harry Potter", "Ideas", "Jurassic World", "LEGO Animal Crossing", "LEGO DREAMZzz", "LEGO Education", "LEGO La Casa de Muñecas de Gabby", "LEGO Icons", "LEGO Indiana Jones", "LEGO Super Mario", "Lord of the Rings", "Marvel", "Minecraft", "Minifiguras", "Monkie Kid", "NINJAGO", "Powered Up", "SERIOUS PLAY", "Sonic the Hedgehog", "Speed Champions", "Spider-Man", "Star Wars", "Technic"];
  const subComprarEdades = ["VER TODAS LAS EDADES", "1,5+", "4+", "6+", "9+", "13+","18+"];
  const subComprarPrecios = ["VER TODOS LOS RANGOS DE PRECIOS", "Menos de 20 €", "20 € - 50 €", "50 € - 100 €", "100 € - 200 €", "Más de 200 €"];
  const subComprarArticulos = ["VER TODOS LOS ARTÍCULOS LEGO", "Accesorios", "Mochilas", "Libros", "Ropa", "Llaveros", "Fiambreras", "Juguetes de peluche", "Puzles y juegos de mesa", "Juegos de rol y vestimentas", "Artículos de papelería", "Almacenamiento", "Botellas de agua LEGO"];
  const subComprarIntereses = ["VER TODOS LOS INTERESES", "Para fans adultos", "Animales", "Manualidades", "Edifiios", "Coches", "Programación para niños", "Dragones", "Fantasía", "Películas", "Videojuegos", "Aprender a construir", "Música", "Ninjas", "Preescolar", "Princesas", "Héroes del mundo real", "Robots para niños", "Festividades", "Espacio", "Deportes", "STEM", "Trenes", "Viajes", "Series de televisión", "Vehículos"];
  const subComprarPickBuild = ["PICK AND BUILD", "Pick a Brick", "Accesorios y kits de ladrillos"];
  const subDescubirValores = ["The LEGO Group", "Noticias LEGO", "Sostenibilidad"];
  const subDescubirApps = ["LEGO Builder", "App LEGO Life"];
  const subDescubrirRevistas = ["Catálogos LEGO"];


  useOutsideAlerter(menuRef, () => setIsSubMenuOpen(false));
  return (
    <div ref={subMenuRef}>
      {isSubMenuOpen && (
        <div className={styles.subMenu}>
          {isSubCompraVisible && (
            <div className={styles.subCompra}>
              {subComprarEdades.map((item) => (
                <Button
                  isSubMenu
                  texto={`${item}`}
                  //id="compra"
                  //handleClick={handleClick} ahora no
                />
              ))}
            </div>
          )}
          {isSubCompraVisible && (
            <div className={styles.subCompra}>
              {subComprarPrecios.map((item) => (
                <Button
                isSubMenu
                texto={`${item}`}
                //id="compra"
                //handleClick={handleClick} ahora no
              />
              ))}
            </div>
          )}

          {isSubDescubrirVisible && (
            <div className={styles.subDescubrir}>
              {subDescubirValores.map((item) => (
                <Button
                isSubMenu
                texto={`${item}`}
                //id="compra"
                //handleClick={handleClick} ahora no
              />
              ))}
            </div>
          )}
          {isSubDescubrirVisible && (
            <div className={styles.subDescubrir}>
              {subDescubirApps.map((item) => (
                <Button
                isSubMenu
                texto={`${item}`}
                //id="compra"
                //handleClick={handleClick} ahora no
              />
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.links}></div>
    </div>
  );


};

export default subMenuNavbar;