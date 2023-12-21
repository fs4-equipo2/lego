import React from "react";
import { LegoLogo } from "./LegoLogo";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import Tipografia from "../Tipografia/Tipografia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.Container}>
          <div>
            <div className={styles.LegoIcon}>
              <LegoLogo />
            </div>
            {/* <></>//botón ubicación */}
            <ul>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Tarjeta Regalo"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Encuentra la inspiración"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Catálogo LEGO"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Encontrar una tienda"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href=" " className={styles.title}>
              <Tipografia
                color={"--white"}
                texto={"QUIENÉS SOMOS"}
                isBodyLarge
                isBoldWeight
              />
            </a>
            <ul>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"The LEGO Group"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Noticias LEGO®"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Sostenibilidad"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={
                      "Declacrión de transparencia de la cadena de suministro"
                    }
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Certificación de productos LEGO"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Ofertas de trabajo LEGO"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Línea ética LEGO"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href=" " className={styles.title}>
                <Tipografia
                  color={"--white"}
                  texto={"ATENCIÓN AL CLIENTE"}
                  isBodyLarge
                  isBoldWeight
                />
              </a>
            <ul>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Ponte en contacto con nosotros"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Instrucciones de construcción"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Piezas de repuesto"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Envíos y devoluciones"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Métodos de pago"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Términos y condiciones"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Productos retirados"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href=" " className={styles.title}>
                <Tipografia
                  color={"--white"}
                  texto={"ATRACCIONES"}
                  isBodyLarge
                  isBoldWeight
                />
              </a>
            <ul>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGO® House"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGOLAND® Parks"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGOLAND Discovery Centers"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
              <a href=" " className={styles.title}>
                <Tipografia
                  color={"--white"}
                  texto={"MÁS INFORMACIÓN"}
                  isBodyLarge
                  isBoldWeight
                />
              </a>
            <ul>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGO® LIFE"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGO Education"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGO Ideas"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"LEGO Foundation"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
              <li>
                <a href=" ">
                  <Tipografia
                    color={"--white"}
                    texto={"Programa para socios"}
                    isBodyLarge
                    isRegularWeight
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.Container}>
          <div className={styles.email}>
            <a href=" ">
              <Tipografia
                color={"--white"}
                texto={"SUSCRÍBETE AL CORREO ELECTRÓNICO"}
                isBodyLarge
                isMediumWeight
              />
            </a>
            <input
              type="email"
              id="email"
              placeholder="Tu dirección de correo elctrónico"
            ></input>
          </div>
          <div className={styles.rrss}>
            <a href=" ">
              <Tipografia
                color={"--white"}
                texto={"SÍGUENOS"}
                isBodyLarge
                isMediumWeight
              />
            </a>
            <div className={styles.iconos}>
              <Button isRedes={true} iconRight={<FaFacebook />} />
              <Button isRedes={true} iconRight={<FaTwitter />} />
              <Button isRedes={true} iconRight={<FaInstagram />} />
              <Button isRedes={true} iconRight={<FaYoutube />} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bot}>
        <div className={styles.Container}>
          <div>
            <div className={styles.links}>
              <a href=" ">
                <Tipografia
                  color={"--white"}
                  texto={"Cookies"}
                  isBodySmall
                  isRegularWeight
                />
              </a>
              <a href=" ">
                <Tipografia
                  color={"--white"}
                  texto={"Aviso legal"}
                  isBodySmall
                  isRegularWeight
                />
              </a>
              <a href=" ">
                <Tipografia
                  color={"--white"}
                  texto={"Clausulas de uso"}
                  isBodySmall
                  isRegularWeight
                />
              </a>
              <a href=" ">
                <Tipografia
                  color={"--white"}
                  texto={"Accesibilidad"}
                  isBodySmall
                  isRegularWeight
                />
              </a>
              <a href=" ">
                <Tipografia
                  color={"--white"}
                  texto={"Configuración de cookies"}
                  isBodySmall
                  isRegularWeight
                />
              </a>
            </div>
          <div/>
          <div>
            <div>
              <a href=" ">
                <Tipografia
                  color={"--white"}
                  texto={
                    "LEGO System A/S, DK-7190 Billund, Dinamarca. Solo se permite la compra en línea a personas mayores de 18 años. LEGO, el logotipo LEGO, la minifigura, DUPLO, el logotipo de FRIENDS, el logotipo de MINIFIGURES, DREAMZzz, NINJAGO, VIDIYO y MINDSTORMS son marcas comerciales de The LEGO Group. ©2023 The LEGO Group. Todos los derechos reservados. El uso de este sitio supone la aceptación de las cláusulas de uso."
                  }
                  isBodySmall
                  isRegularWeight
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
