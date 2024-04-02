import React from "react";
import styles from "./Main.module.scss";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa6";
import Logo from "../../assets/iconos/Logo";
import Tipografia from "../Tipografia/Tipografia";
import insidersLogo from "../../../public/images/imagenesMain/insidersLogo.png";
import backgroundMain from "../../../public/images/imagenesMain/backgroundMain.png";
import backgroundMainMobile from "../../../public/images/imagenesMain/backgroundMainMobile.png"


const Main = () => {
  return (
    <div className={styles.containerGeneralMain}>

      <div className={styles.containerBackgroundMain}>
        <img className={styles.backgroundMain} src={backgroundMain} />
        <img className={styles.backgroundMainMobile} src={backgroundMainMobile} />
      </div>

      <div className={styles.containerArribaMain}>

        <div className={styles.containerLogosMain}>
          <div className={styles.legoMain}>
          <Logo/>
          </div>
          <img className={styles.insiders} src={insidersLogo} />
        </div>

        <div className={styles.containerTextoMain}>
          <div className={styles.tituloPrincipal}>
          <Tipografia
              color={"--black"}
              isTitleXL={true}
              isboldWeight={true}
              texto={"Fin de semana LEGO® Insiders del 18/11 al 19/11"}
              />
          </div>
          <div className={styles.texto}>
          <Tipografia
              color={"--black"}
              isSubtitleLarge={true}
              texto={"¿Que aún no eres miembro? ¡Únete hoy mismo y descubre las ofertas especiales!"}
          />
          </div>
        </div>

        <div className={styles.containerBotonesMain}>
          <div className={styles.botonOferta}>
            <Button
              isMain={true}
              texto={"Ofertas"}
              iconRight={<FaChevronRight />}
              handleClick={() => console.log("router.push(/login)")}
            />
          </div>
          <div className={styles.botonMiembro}>
            <Button
              isMain={true}
              texto={"Hazte Miembro"}
              iconRight={<FaChevronRight />}
              handleClick={() => console.log("router.push(/login)")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
