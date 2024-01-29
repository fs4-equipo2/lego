import Tipografia from "../Tipografia/Tipografia";
import styles from "./LogInModal.module.scss";
import { LegoLogo } from "../Footer/LegoLogo";

export const LogInModal = () => {
  return (
    <>
      <div className={styles.logInModalContainer}>
        <div className={styles.logInModalContainerBody}>
          <div className={styles.logInModalContainerBodyTop}>
            <LegoLogo />
          </div>
          <div className={styles.logInModalContainerBodyBottom}>
            <div className={styles.logInModalContainerBodyBottomForm}>
              <Tipografia
                color={"--grey-xtra"}
                texto={"Inicia sesión"}
                isTitleBig
                isBoldWeight
              />
              <form onSubmit={() => {}}>
                <div>
                  <label>
                    <Tipografia
                      color={"--grey-xtra"}
                      texto={"Nombre de usuario"}
                      isSubtitleRegular
                      isBoldWeight
                    />
                  </label>
                  <input type="text" placeholder="Nombre de usuario"/>
                  <a href="">
                    <Tipografia
                      color={"--blue"}
                      texto={"¿Olvidaste el nombre de usuario?"}
                      isSubtitleRegular
                      isBoldWeight
                    />
                  </a>
                </div>
                <div>
                  <label>
                    <Tipografia
                      color={"--grey-xtra"}
                      texto={"Contraseña"}
                      isSubtitleRegular
                      isBoldWeight
                    />
                  </label>
                  <input type="password" placeholder="contraseña" />
                  <a href="">
                    <Tipografia
                      color={"--blue"}
                      texto={"¿Olvidaste la contraseña?"}
                      isSubtitleRegular
                      isBoldWeight
                    />
                  </a>
                </div>
                <button type="submit">
                  <Tipografia
                    color={"--white"}
                    texto={"Inicia sesión"}
                    isSubtitleRegular
                    isMediumWeight
                  />
                </button>
              </form>
            </div>
            <div className={styles.logInModalContainerBodyBottomNewUser}>
              <Tipografia
                color={"--grey-xtra"}
                texto={"Nuevo usuario"}
                isTitleBig
                isBoldWeight
              />
              <button>
                <Tipografia
                  color={"--white"}
                  texto={"Crear cuenta"}
                  isSubtitleRegular
                  isMediumWeight
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
