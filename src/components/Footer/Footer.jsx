import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div>
          {/* <img></img> Lego Logo */}
          {/* <></>//botón ubicación */}
          <ul>
            <li>
              <a href=" ">Tarjeta Regalo</a>
            </li>
            <li>
              <a href=" ">Encuentra la inspiración</a>
            </li>
            <li>
              <a href=" ">Catálogo LEGO</a>
            </li>
            <li>
              <a href=" ">Encontrar una tienda</a>
            </li>
          </ul>
        </div>

        <div className="quienes">
          <h3>QUIENÉS SOMOS</h3>
          <ul>
            <li>
              <a href=" ">The LEGO Group</a>
            </li>
            <li>
              <a href=" ">Noticias LEGO®</a>
            </li>
            <li>
              <a href=" ">Sostenibilidad</a>
            </li>
            <li>
              <a href=" ">
                Declacrión de transparencia de la cadena de suministro
              </a>
            </li>
            <li>
              <a href=" ">Certificación de productos LEGO</a>
            </li>
            <li>
              <a href=" ">Ofertas de trabajo LEGO</a>
            </li>
            <li>
              <a href=" ">Línea ética LEGO</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>ATENCIÓN AL CLIENTE</h3>
          <ul>
            <li>
              <a href=" ">Ponte en contacto con nosotros</a>
            </li>
            <li>
              <a href=" ">Instrucciones de construcción</a>
            </li>
            <li>
              <a href=" "></a>Piezas de repuesto
            </li>
            <li>
              <a href=" "></a>Envíos y devoluciones
            </li>
            <li>
              <a href=" "></a>Métodos de pago
            </li>
            <li>
              <a href=" "></a>Términos y condiciones
            </li>
            <li>
              <a href=" "></a>Productos retirados
            </li>
          </ul>
        </div>

        <div>
          <h3>ATRACCIONES</h3>
          <ul>
            <li>
              <a href=" ">LEGO® House</a>
            </li>
            <li>
              <a href=" ">LEGOLAND® Parks</a>
            </li>
            <li>
              <a href=" ">LEGOLAND Discovery Centers</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>MÁS INFORMACIÓN</h3>
          <ul>
            <li>
              <a href=" ">LEGO® LIFE</a>
            </li>
            <li>
              <a href=" ">LEGO Education</a>
            </li>
            <li>
              <a href=" ">LEGO Ideas</a>
            </li>
            <li>
              <a href=" ">LEGO Foundation</a>
            </li>
            <li>
              <a href=" ">Programa para socios</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mid">
        <div className="email-submit">
          <lablel for="email">SUSCRÍBETE AL CORREO ELECTRÓNICO</lablel>
          <input
            type="email"
            id="email"
            placeholder="Tu dirección de correo elctrónico"
          ></input>
        </div>
        <div className="rrss">
          <a>SÍGUENOS</a>
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
          <FaYoutube/>
        </div>
      </div>
      <div className="bot">
        <div className="links">
          <link rel="stylesheet" href=" " />
          <link rel="stylesheet" href=" " />
          <link rel="stylesheet" href=" " />
          <link rel="stylesheet" href=" " />
          <link rel="stylesheet" href=" " />
          <link rel="stylesheet" href=" " />
        </div>
        <div>
          <a>
            LEGO System A/S, DK-7190 Billund, Dinamarca. Solo se permite la
            compra en línea a personas mayores de 18 años. LEGO, el logotipo
            LEGO, la minifigura, DUPLO, el logotipo de FRIENDS, el logotipo de
            MINIFIGURES, DREAMZzz, NINJAGO, VIDIYO y MINDSTORMS son marcas
            comerciales de The LEGO Group. ©2023 The LEGO Group. Todos los
            derechos reservados. El uso de este sitio supone la aceptación de
            las cláusulas de uso.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
