import { FaChevronRight } from "react-icons/fa6"
import styles from "./BlogSelecciones.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import { CardSelecciones } from "../CardSelecciones/CardSelecciones"
import React from "react"
import Slider from "react-slick"

export function BlogSelecciones({}){
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          draggable: true,
          arrows: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 390,
        settings: {
            slidesToShow: 1,
        },
    }
    ]
  };
  return (
          <div className={styles.blog}>
            <div className={styles.blogContainer}>
                <div className={styles.titleBlog}>
                <Tipografia texto= "Selecciones de esta semana" isTitleLarge/>
                </div>
                <div className={styles.slider}>
                <Slider {...settings}>                  
                    <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blt3dd1bbaf9999eb1f/Holiday23-GroupedAssets-202311-Block-Standard-10326.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Haz historia estas Navidades"
                        content="El nuevo set Museo de Historia Natural de LEGO® Icons se incorpora a la colección Modular Buildings."
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blt7e9cc8e585802a27/Juno_HolidayVI_01_Card-Content_01-CardContent-Juno_HolidayVI-02.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Es la época de crear"
                        content="¡Construye, sobrevive y prospera en el nuevo e increíble juego de supervivencia y creación LEGO® Fortnite®!"
                        button="Saber más"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/bltd242a29e8881c557/76269-Page-202310-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Torre de los Vengadores"
                        content="Recrea el edificio más emblemático del universo Vengadores."
                        button="A la tienda"
                        iconButton={<FaChevronRight />}
                      />
                      
                      
                      </Slider>
                      </div>
                  </div>
            </div>
  )
}