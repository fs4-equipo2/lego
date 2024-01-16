import React from "react";
import styles from "./Stickers.module.scss";
import {stickersTitles, stickersTitlesPNG} from "./StickersTitles"
import { Sticker } from "./Sticker";

export const Stickers = () => {
  return (
    <div className={styles.contStickers}>
      {stickersTitlesPNG.map((sticker, index) => <Sticker key={index} title={sticker.title} imgSource={sticker.imgSource} />)}
    </div>
  );
};
