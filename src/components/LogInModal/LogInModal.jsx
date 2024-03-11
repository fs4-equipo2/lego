import { useState } from "react";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./LogInModal.module.scss";
import { LegoLogo } from "../Footer/LegoLogo";
import { useForm } from "../../hooks/useForm";
import { useStoreActions } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineUser } from "react-icons/hi2";
import PasswordToggle from "../EyeIcon/EyeIcons.jsx";
import axios from 'axios';

export const LogInModal = () => {
  const { setUser } = useStoreActions((actions) => actions.user);

  const [data, setData] = useState("");

  const checkLogin = (currentUser) => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/users/login",
          currentUser
        );
        setData(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    // Llamada a la función
    fetchData();
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

  const notify = (error) => {
    if (error) {
      toast.error("Authentication error", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Successful login!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onSubmitLogIn = (event) => {
    event.preventDefault();
    checkLogin(formState);
  };

  console.log(data);

  return (
    <>
      <ToastContainer />
      <div className={styles.logInModalContainer}>
        <div className={styles.logInModalContainerBody}>
          <div className={styles.logInModalContainerBodyTop}>
            <LegoLogo />
            <Tipografia
              color={"--grey-xtra"}
              texto={"Inicia sesión"}
              isTitleBig
              isBoldWeight
            />
          </div>
          <div className={styles.logInModalContainerBodyBottom}>
            <form
              className={styles.logInModalContainerBodyBottomFormBody}
              onSubmit={onSubmitLogIn}
            >
              <div>
                <label>
                  <Tipografia
                    color={"--grey-xtra"}
                    texto={"Nombre de usuario"}
                    isSubtitleRegular
                    isBoldWeight
                  />
                </label>
                <div className={styles.inputWrap}>
                  <input
                    id={styles.logInInput}
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    name="username"
                    onChange={onInputChange}
                  />
                  <i id={styles.iconInputUsername}>
                    <HiOutlineUser />
                  </i>
                </div>
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
                <div className={styles.inputWrap}>
                  <PasswordToggle
                    onPassChange={onInputChange}
                    password={password}
                  />
                </div>
                <a href="">
                  <Tipografia
                    color={"--blue"}
                    texto={"¿Olvidaste la contraseña?"}
                    isSubtitleRegular
                    isBoldWeight
                  />
                </a>
              </div>
              <button id={styles.logInSubmitBtn} type="submit">
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
                texto={
                  "Tu nombre de usuario y/o contraseña no coinciden con nuestros registros."
                }
                isSubtitleRegular
                isMediumWeight
              />
            ) : (
              ""
            )}

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
