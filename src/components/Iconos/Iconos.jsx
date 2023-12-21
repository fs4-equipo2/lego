import styles from './Iconos.module.scss'
export const Iconos = ({ icono, href }) => {
  return <a className={styles.icono} href={href} target= '_blank'> {icono} </a>;
};
