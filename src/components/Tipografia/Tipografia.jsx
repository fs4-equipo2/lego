import React from "react";
import styles from "./Tipografia.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 *
 * @param {string} color - Color del Texto
 * @param {string} texto
 * @returns
 */

const Tipografia = ({
  color,
  texto,
  //Font-size
  isTitleXL,
  isTitleLarge,
  isTitle,
  isSubtitleLarge,
  isSubtitle,
  isBodyXL,
  isBodyLarge,
  isBody,
  isBodySmall,
  //Font-weight
  isRegularWeight,
  isMediumWeight,
  isBoldWeight,
  //Line-height
  isLineHeight1,
  isLineHeight2,
  isLineHeight3,
  isLineHeight4,
  isLineHeight5,
  isLineHeight6,
  isLineHeight7,
  isLineHeight8,
  isLineHeight9,
  isLineHeight10,
  isLineHeight11,
  isLineHeight12,
  isLineHeight13,
  isLineHeight14,
}) => {
  const classNames = cx({
    //Font-size
    titleXL: isTitleXL,
    titleLarge: isTitleLarge,
    title: isTitle,
    subtitleLarge: isSubtitleLarge,
    subtitle: isSubtitle,
    bodyXL: isBodyXL,
    bodyLarge: isBodyLarge,
    body: isBody,
    bodySmall: isBodySmall,
    //Font-weight
    regularWeight: isRegularWeight,
    mediumWeight: isMediumWeight,
    boldWeight: isBoldWeight,
    //Line-height
    lineHeight1: isLineHeight1,
    lineHeight2: isLineHeight2,
    lineHeight3: isLineHeight3,
    lineHeight4: isLineHeight4,
    lineHeight5: isLineHeight5,
    lineHeight6: isLineHeight6,
    lineHeight7: isLineHeight7,
    lineHeight8: isLineHeight8,
    lineHeight9: isLineHeight9,
    lineHeight10: isLineHeight10,
    lineHeight11: isLineHeight11,
    lineHeight12: isLineHeight12,
    lineHeight13: isLineHeight13,
    lineHeight14: isLineHeight14,
  });
  return (
    <h1 className={classNames} style={{ color: `var(${color})` }}>
      {texto}
    </h1>
  );
};

export default Tipografia;
