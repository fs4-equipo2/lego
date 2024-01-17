import React from "react";
import styles from "./Sticker.module.scss";
import Tipografia from "../Tipografia/Tipografia";

export const Sticker = ({title, imgSource}) => {
  return (
    <div className={styles.sticker}>
      <div className={styles.stickerTop}>
        <Tipografia
        color={"--black"}
        texto={title}
        isTitleSmall
        isBoldWeight
        />
      </div>
      <div className={styles.stickerBottom}>
        <img
          src={imgSource}
          alt={`Image from:  ${title}`}
        />
      </div>
    </div>
  );
};
