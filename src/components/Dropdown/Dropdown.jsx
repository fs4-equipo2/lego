import { useState } from "react";
import styles from "./Dropdown.module.scss";
import DropdownItems from "./DropdownItems";
const Dropdown = ({ texto, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={isOpen ? styles.isOpen : styles.isClosed}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {texto}
      {isOpen && <DropdownItems items={items} />}
    </div>
  );
};

export default Dropdown;
