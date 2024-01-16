import Tipografia from "../Tipografia/Tipografia"
import styles from "./FooterLinks.module.scss"

export const FooterLinks = ({ links }) => {
  return (
    <>
    {links && links.map((link, index) => (
        <a key={index} href=" " className={styles.linkItem}>
        <Tipografia
          color={"--white"}
          texto={link}
          isBodySmall
        />
      </a>
    ))}
    </>
  )
}
