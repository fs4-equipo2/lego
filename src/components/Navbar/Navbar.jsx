import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/iconos/Logo";
import Button from "../Button/Button";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo />
        <div className={styles.buttonContainer}>
          <Button isNavBar texto={"COMPRAR"} />
          <Button isNavBar texto={"DESCUBRIR"} />
          <Button isNavBar texto={"AYUDA"} />
          <Button isNavBar texto={"NAVIDAD"} />
        </div>
      </div>

      <div className={styles.right}>
        {/**
         * @TODO Crear input
         */}
        <input placeholder="Search..." />
        {/**
         * @TODO Agregar iconos de Denise
         */}
      </div>
    </div>
  );
};

export default Navbar;
