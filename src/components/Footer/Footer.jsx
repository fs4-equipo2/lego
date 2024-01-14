import React from "react";
import { LegoLogo } from "./LegoLogo";
import styles from "./Footer.module.scss";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import Tipografia from "../Tipografia/Tipografia";
import { Iconos } from "../Iconos/Iconos";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import FooterColumn from "./FooterColumn";
import {
  quienessomos,
  column,
  atencionAlCliente,
  atracciones,
  masImformacion,
  links,
} from "./FooterList";
import { FooterLinks } from "./FooterLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.Container}>
          <div className={styles.firstColumn}>
            <div className={styles.LegoIcon}>
              <LegoLogo />
            </div>
            <div>
              <button className={styles.localizacion}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 25"
                  aria-hidden="true"
                  class="Icon__StyledSVG-lm07h6-0 eqVDRK RegionSelectorstyles__PointerIcon-sc-14dxhlg-2 izbKLk"
                >
                  <path
                    d="M8.303.89c2.065 0 3.92.818 5.258 2.156a7.391 7.391 0 012.156 5.257c0 4.906-5.485 11.795-7.414 14.066C6.373 20.097.89 13.21.89 8.303c0-2.065.818-3.92 2.156-5.257A7.391 7.391 0 018.303.89zm0 3.558a3.84 3.84 0 00-2.734 1.12 3.84 3.84 0 00-1.12 2.735 3.84 3.84 0 001.12 2.735 3.84 3.84 0 002.734 1.12 3.84 3.84 0 002.735-1.12 3.84 3.84 0 001.12-2.735 3.84 3.84 0 00-1.12-2.734 3.84 3.84 0 00-2.735-1.12z"
                    stroke="currentColor"
                    stroke-width="1.779"
                    fill="none"
                  ></path>
                </svg>
                <Tipografia
                  color={"--white"}
                  texto={"España"}
                  isBodyMedium
                  isRegularWeight
                />
              </button>
            </div>
            <FooterColumn title={column.title} items={column.items} />
          </div>
          <div className={styles.groupColumn}>
            <div className={styles.groupColumnTop}>
              <FooterColumn
                title={quienessomos.title}
                items={quienessomos.items}
              />
              <FooterColumn
                title={atencionAlCliente.title}
                items={atencionAlCliente.items}
              />
            </div>
            <div className={styles.groupColumnBottom}>
              <FooterColumn
                title={atracciones.title}
                items={atracciones.items}
              />
              <FooterColumn
                title={masImformacion.title}
                items={masImformacion.items}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.Container}>
          <div className={styles.email}>
            <Tipografia
              color={"--white"}
              texto={"SUSCRÍBETE AL CORREO ELECTRÓNICO DE LEGO® SHOP"}
              isSubtitleRegular
              isBoldWeight
            />
            <form className={styles.emailForm}>
              <input
                type="email"
                id="email"
                placeholder="Tu dirección de correo elctrónico"
                required
              />
              <button type="submit">
                <svg
                  width="18"
                  height="28"
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Icon__StyledSVG-lm07h6-0 kNvokt"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </button>
            </form>
          </div>
          <div className={styles.rrss}>
            <Tipografia
              color={"--white"}
              texto={"SÍGUENOS"}
              isSubtitleRegular
              isBoldWeight
            />
            <div className={styles.iconos}>
              <Iconos
                icono={<CgFacebook />}
                href={"https://www.facebook.com/LEGOEsp/"}
              />
              <Iconos
                icono={<FaXTwitter />}
                href={"https://twitter.com/LEGO_Group"}
              />
              <Iconos
                icono={<IoLogoInstagram />}
                href={"https://www.instagram.com/lego"}
              />
              <Iconos
                icono={<FaYoutube />}
                href={"https://m.youtube.com/user/LEGO"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bot}>
        <div className={styles.Container}>
          <div>
            <div className={styles.links}>
              <FooterLinks links={links} />
            </div>
            <div />
            <div>
              <p>
                <Tipografia
                  color={"--white"}
                  texto={
                    "LEGO System A/S, DK-7190 Billund, Dinamarca. Solo se permite la compra en línea a personas mayores de 18 años. LEGO, el logotipo LEGO, la minifigura, DUPLO, el logotipo de FRIENDS, el logotipo de MINIFIGURES, DREAMZzz, NINJAGO, VIDIYO y MINDSTORMS son marcas comerciales de The LEGO Group. ©2023 The LEGO Group. Todos los derechos reservados. El uso de este sitio supone la aceptación de las cláusulas de uso."
                  }
                  isBodySmall
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
