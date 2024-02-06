import { useState } from "react";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./LogInModal.module.scss";
import { LegoLogo } from "../Footer/LegoLogo";
import { useForm } from "../../hooks/useForm";
import { usersListData } from "./UsersData.tsx";
import { useStoreActions } from "../../store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LogInModal = () => {

  const { setUser } = useStoreActions((actions) => actions.user)

  const checkLogin = (lista, currentUser) => {
    const result = lista.filter((user) => {
      return JSON.stringify(user) === JSON.stringify(currentUser);
    });
    if (result.length === 0 || result.length > 1) {
      return false;
    } else {
      setUser({username: result[0].username, isLoggedIn: true});
      return true;
    }
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

  const notify = (error) => {if(error){
     (toast.error('Error', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }))}else{
      ""
    }
    }

  const onSubmitLogIn = (event) => {
    event.preventDefault();
    setCheck({
      status: checkLogin(usersListData, formState),
      error: !checkLogin(usersListData, formState),
      submit: true,
    });
    notify(!checkLogin(usersListData, formState));
  };

  return (
    <>
     <ToastContainer />
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
              <form className={styles.logInModalContainerBodyBottomFormBody} onSubmit={onSubmitLogIn}>
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
                <Tipografia
                    color={"--red"}
                    texto={"Tu nombre de usuario y/o contraseña no coinciden con nuestros registros."}
                    isSubtitleRegular
                    isMediumWeight
                  />
              ) : (
                ""
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
