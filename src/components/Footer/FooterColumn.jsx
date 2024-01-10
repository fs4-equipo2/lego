import Tipografia from "../Tipografia/Tipografia"
import styles from "./FooterColumn.module.scss"


const FooterColumn =({title, items}) => {
    return (
        <div className={styles.generico}>
            <ul>
                <li>
                    <Tipografia
                        color={"--white"}
                        texto={title}
                        isBodyLarge
                        isBoldWeight
                    />

                </li>
                {items.map((items,index) =>(
                    <li key={index} className={styles.item} >
                        <a href="">
                            <Tipografia
                                  color={"--white"}
                                  texto={items}
                                  isBodyLarge
                                  isRegularWeight
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterColumn;