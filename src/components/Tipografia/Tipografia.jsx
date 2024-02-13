import React from "react";
import styles from "./Tipografia.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 *
 * @param {string} color - Color del Texto tomado de las variables globales
 * @param {string} texto - Texto personalizado a renderizar
 * @param {boolean} isTitleXL - Texto usado en títulos de secciones
 * @param {boolean} isTitleLarge - Texto usado en los títulos generales de las secciones con Cards
 * @param {boolean} isTitleMedium - Texto usado en los títulos de las Cards
 * @param {boolean} isTitleRegular - Texto usado en el cuerpo de las secciones
 * @param {boolean} isTitleSmall - Texto usado en el título de los Stickers
 * @param {boolean} isSubtitleXL - Texto usado en el cuerpo de las secciones con botones
 * @param {boolean} isSubtitleLarge - Texto usado en el título de las secciones compuestas por solo texto
 * @param {boolean} isSubtitleRegular - Texto usado en los enlaces de las cards y en botones de sección
 * @param {boolean} isBodyXL - Texto usado en los enlaces de la navbar
 * @param {boolean} isBodyLarge - Texto usado en los subtítulos y enlaces de las secciones de texto
 * @param {boolean} isBodyMedium - Texto usado en los subtítulos de las cards
 * @param {boolean} isBodyRegular - Texto usado en botones prenavbar
 * @param {boolean} isBodySmall - Texto usado en los avisos de las cards junto a las imágenes
 * @param {boolean} isRegularWeight - Texto normal
 * @param {boolean} isMediumWeight - Texto en negrita (font-weight: 500)
 * @param {boolean} isBoldWeight - Texto en negrita (font-weight: 700)
 * @returns
 */

const Tipografia = ({
  color,
  texto,
  //Font-size & line-height
  isTitleXL,
  isTitleLarge,
  isTitleBig,
  isTitleMedium,
  isTitleRegular,
  isTitleSmall,
  isSubtitleXL,
  isSubtitleLarge,
  isSubtitleRegular,
  isBodyXL,
  isBodyLarge,
  isBodyMedium,
  isBodyRegular,
  isBodySmall,
  //Font-weight
  isRegularWeight,
  isMediumWeight,
  isBigWeight,
  isBoldWeight,
}) => {
  const classNames = cx({
    //Font-size
    titleXL: isTitleXL,
    titleLarge: isTitleLarge,
    titleBig: isTitleBig,
    titleMedium: isTitleMedium,
    titleRegular: isTitleRegular,
    titleSmall: isTitleSmall,
    subtitleXL: isSubtitleXL,
    subtitleLarge: isSubtitleLarge,
    subtitleRegular: isSubtitleRegular,
    bodyXL: isBodyXL,
    bodyLarge: isBodyLarge,
    bodyMedium: isBodyMedium,
    bodyRegular: isBodyRegular,
    bodySmall: isBodySmall,
    //Font-weight
    regularWeight: isRegularWeight,
    mediumWeight: isMediumWeight,
    bigWeight: isBigWeight,
    boldWeight: isBoldWeight,
  });
  return (
    <p className={classNames} style={{ color: `var(${color})` }}>
      {texto}
    </p>
  );
};

export default Tipografia;
