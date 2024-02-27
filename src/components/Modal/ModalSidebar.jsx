import styles from "./ModalSidebar.module.scss";
import { IoCloseOutline } from "react-icons/io5";

export const ModalSidebar = ({ children, isOpen, closeModal }) => {

    const handleModalContainerClick = (e) => {
        e.stopPropagation();
    }

  return (
    <>
      <div className={isOpen === true ? `${styles.modal} ${styles.isOpen}` : `${styles.modal}`} onClick={closeModal}>
        <div className={styles.modalContainer} onClick={handleModalContainerClick}>
          <button className={styles.logInModalContainerClose} onClick={closeModal}>
            <IoCloseOutline />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
