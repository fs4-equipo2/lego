import styles from "./Dropdown.module.scss";
const DropdownItems = ({ items }) => {
  return (
    <div className={styles.itemsContainer}>
      {items &&
        items.map((item, index) => (
          <div key={index} className={styles.item} onClick={item.onClick}>
            {item.titulo}
          </div>
        ))}
    </div>
  );
};

export default DropdownItems;
