import React from "react";
import { useState } from "react";
import styles from "./FooterColumnResponsive.module.scss";
import Tipografia from "../Tipografia/Tipografia";

export const FooterColumnResponsive = ({ title, items }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.genericoResponsive}>
      <div className={styles.columnResponsiveTitle} onClick={handleVisible}>
        <Tipografia
          color={"--white"}
          texto={title}
          isSubtitleRegular
          isBoldWeight
        />
        <svg
          width="18"
          height="28"
          viewBox="0 0 18 28"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.columnResponsiveIcon}
        >
          <path
            d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
            fill="white"
          ></path>
        </svg>
      </div>
      {visible && (
        <ul className={styles.columnResponsiveList}>
          {items.map((item, index) => (
            <li key={index} className={styles.columnItemsResponsive}>
              <a href="">
                <Tipografia
                  color={"--white"}
                  texto={item}
                  isSubtitleRegular
                  isMediumWeight
                />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
