import React from "react";
import styles from "./Stickers.module.scss";
import {stickersTitles} from "./StickersTitles"
import { Sticker } from "./Sticker";

export const Stickers = () => {
  return (
    <div className={styles.contStickers}>
      {stickersTitles.map((sticker, index) => <Sticker key={index} title={sticker.title} imgSource={sticker.imgSource} />)}
    </div>
  );
};
