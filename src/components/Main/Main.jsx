import React from "react";
import styles from "./Main.module.scss";
import Button from "../Button/Button";
import { FaChevronRight } from "react-icons/fa6";
import Logo from "../../assets/iconos/Logo";
import Tipografia from "../Tipografia/Tipografia";
import insidersLogo from "../../../public/images/imagenesMain/insidersLogo.png";    
import backgroundMain from "../../../public/images/imagenesMain/backgroundMain.png";   


const Main = () => {
  return (
    <div className={styles.containerGeneralMain}>

      <div className={styles.containerBackgroundMain}>
      <img  src={backgroundMain} />
      </div>
      <div className={styles.containerArribaMain}>
      <div className={styles.containerLogosMain}>
        <Logo className={styles.legoMain}/>
        <img className={styles.insiders} src={insidersLogo} />
      </div>

      <div className={styles.containerTextoMain}>
        <Tipografia 
             color={"--black"}
            isTitleXL={true}
            isboldWeight={true}
            texto={"Fin de semana LEGO® Insiders del 18/11 al 19/11"}
             />

        <Tipografia 
            color={"--black"}
            isSubtitleLarge={true}
            texto={"¿Que aún no eres miembro? ¡Únete hoy mismo y descubre las ofertas especiales!"}
        />
      </div>

      <div className={styles.containerBotonesMain}>
        <Button
          isMain={true}
          texto={"Ofertas"}
          iconRight={<FaChevronRight />}
          handleClick={() => console.log("router.push(/login)")}

        />
        <Button
          isMain={true}
          texto={"Hazte Miembro"}
          iconRight={<FaChevronRight />}
          handleClick={() => console.log("router.push(/login)")}
        />
      </div>
      </div>
    </div>
  );
};

export default Main;
