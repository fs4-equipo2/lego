import React from "react";
import styles from "./WelcomeMessage.module.scss";
import Tipografia from "../Tipografia/Tipografia";
import { useState } from "react";

export const WelcomeMessage = () => {
  const [show, setShow] = useState(false);

  const textoShow = "Te damos la bienvenida a la LEGO® Shop oficial, donde encontrarás fantásticos juguetes de construcción LEGO, regalos, increíbles sets de exhibición y mucho más para peques y adultos por igual. Elige el regalo perfecto para bebés, adolescentes y adultos con el que celebrar Navidad, un cumpleaños o cualquier otra ocasión. Adelanta las compras navideñas con los sets y las ofertas disponibles durante el fin de semana LEGO® Insiders, el Black Friday y el Cyber Monday. Podrás comprar fácilmente juguetes con los que regalar horas de diversión y juego imaginativo. También podrás encontrar los mejores sets LEGO® para adultos, ideales para todos aquellos interesados en los vehículos, el el arte y el diseño, los videojuegos y muchas cosas más.";
  const textoHide = "Te damos la bienvenida a la LEGO® Shop oficial, donde encontrarás fantásticos juguetes de construcción LEGO, regalos, increíbles sets de exhibición y mucho más para peques y adultos por igual. Elige el regalo perfecto para bebés, adolescentes y adultos con el que celebrar Navidad, un cumpleaños o cualquier otra ocasión. Adelanta las compras navideñas con los sets y las ofertas disponibles durante el fin de semana LEGO® Insiders, el Black Friday y el Cyber Monday. Podrás comprar fácilmente juguetes con los que regalar horas de diversión y juego imaginativo. También";

  const handleWelcomeShow = () => {
    setShow(!show)
  }

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeText}>
        <Tipografia
          color={"--black"}
          texto={!show ? textoShow : textoHide}
          isRegularWeigth
          isBodyMedium
        />
      </div>
      <div className={styles.welcomeButton} onClick={handleWelcomeShow}>
      <Tipografia
          color={"--blue"}
          texto={show ? "Lee más" : "Mostrar menos"}
          isRegularWeigth
          isBodyMedium
        />
      </div>
    </div>
  );
};
