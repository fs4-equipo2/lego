import Tipografia from "../Tipografia/Tipografia"
import styles from "./FooterColumn.module.scss"


const FooterColumn =({title, items}) => {
    return (
        <div className={styles.generico}>
            <ul>
                {title && <li className={styles.columnItemFirst}>
                    <Tipografia
                        color={"--white"}
                        texto={title}
                        isSubtitleRegular
                        isBoldWeight
                    />

                </li>}
                {items.map((item,index) =>(
                    <li key={index} className={styles.columnItem} >
                        <a href="">
                            <Tipografia
                                  color={"--white"}
                                  texto={item}
                                  isSubtitleRegular
                                  isMediumWeight
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterColumn;