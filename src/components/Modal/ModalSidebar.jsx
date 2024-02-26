import styles from "./ModalSidebar.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import Tipografia from "../Tipografia/Tipografia";

export const ModalSidebar = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={
          isOpen === true
            ? `${styles.modal} ${styles.isOpen}`
            : `${styles.modal}`
        }
        onClick={closeModal}
      >
        <div
          className={styles.modalContainer}
          onClick={handleModalContainerClick}
        >
          <div>
            <Tipografia
              color={"--black"}
              texto={"MENÚ"}
              isTitleRegular
              isRegularWeight
            />
            <button
              className={styles.logInModalContainerClose}
              onClick={closeModal}
            >
              <IoCloseOutline />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
