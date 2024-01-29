import { useState } from "react";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./LogInModal.module.scss";
import { LegoLogo } from "../Footer/LegoLogo";
import { useForm } from "../../hooks/useForm";
import { usersListData } from "./UsersData.tsx";

export const LogInModal = () => {
  const checkLogin = (lista, currentUser) => {
    const result = lista.filter((user) => {
      return JSON.stringify(user) === JSON.stringify(currentUser);
    });
    if (result.length === 0 || result.length > 1) return false;
    return true;
  };

  const initialForm = {
    username: "",
    password: "",
  };

  const [check, setCheck] = useState({
    status: false,
    error: false,
    submit: false,
  });

  const { formState, username, password, onInputChange } = useForm(initialForm);

  const onSubmitLogIn = (event) => {
    event.preventDefault();
    setCheck({
      status: checkLogin(usersListData, formState),
      error: !checkLogin(usersListData, formState),
      submit: true,
    });
  };

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
              <form onSubmit={onSubmitLogIn}>
                <div>
                  <label>
                    <Tipografia
                      color={"--grey-xtra"}
                      texto={"Nombre de usuario"}
                      isSubtitleRegular
                      isBoldWeight
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    name="username"
                    onChange={onInputChange}
                  />
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
                  <input
                    type="password"
                    placeholder="contraseña"
                    value={password}
                    name="password"
                    onChange={onInputChange}
                  />
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
              {!check.submit ? (
                ""
              ) : check.error ? (
                <h2>Datos inválidos ❌</h2>
              ) : (
                <h2>Datos válidos ✅</h2>
              )}
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
