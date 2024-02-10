import styles from "./CarrouselPrueba.module.scss";

export function CarrouselPrueba({}){
    return (
      <div className={styles.barra-cards}>
        <div className={styles.cards}>
          {/* Aquí deberías incluir tus cards */}
          <div className={styles.card}>Card 1</div>
          <div className={styles.card}>Card 2</div>
          <div className={styles.card}>Card 3</div>
          {/* Añade más cards según sea necesario */}
        </div>
      </div>
    );
  };