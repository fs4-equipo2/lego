import Tipografia from "../Tipografia/Tipografia"
import styles from "./FooterLinks.module.scss"

export const FooterLinks = ({ links }) => {
  return (
    <>
    {links && links.map(link => (
        <a href=" " className={styles.linkItem}>
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
