import { FaChevronRight } from "react-icons/fa6"
import styles from "./BlogUnete.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import { CardSelecciones } from "../CardSelecciones/CardSelecciones"
import React from "react"
import Slider from "react-slick"

export function BlogUnete({}){
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
        breakpoint: 900,
        settings: {
          dots: false,
          draggable: true,
          arrows: true,
          slidesToShow: 2,
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          dots: false,
          draggable: true,
          arrows: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 390,
        settings: {
            draggable: true,
            slidesToShow: 1,
        },
    }
    ]
  };
  return (
          <div className={styles.blog}>
            <div className={styles.blogContainer}>
                <div className={styles.titleBlog}>
                <Tipografia texto= "Únete al programa LEGO® Insiders, disfruta jugando y obtén recompensas" isTitleLarge color= {"--black"}/>
                </div>
                <div className={styles.slider}>
                <Slider {...settings}>                  
                    <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blt96189d8a03ee08b8/Holiday23-Insiders1-202311-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Más puntos"
                        content="Obtén puntos con tus compras y también por registrar tus sets"
                        button="Registrarse"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blt8277c602c996d468/Holiday23-Insiders2-202311-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Más recompensas"
                        content="¡Material LEGO® exclusivo para miembros, descuentos, entradas para los parques LEGOLAND® y mucho más!"
                        button="Canjear ahora"
                        iconButton={<FaChevronRight />}
                      />
                      <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blta98fdcea5900bfed/Holiday23-Insiders3-202311-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Más ventajas"
                        content="Los miembros disfrutan de acceso anticipado a los sets más demandados y regalos con su compra."
                        button="Descubrir"
                        iconButton={<FaChevronRight />}
                      />
                      {/* <CardSelecciones
                        src="https://www.lego.com/cdn/cs/set/assets/blt209e0a708d98354b/Holiday23-Insiders4-202311-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                        title="Más acceso"
                        content="¡Inspiración, actividades lúdicas en familia, comunidades y muchas otras cosas fantásticas!"
                        button="Saber más"
                        iconButton={<FaChevronRight />}
                      /> */}
                      </Slider>
                      </div>
                  </div>
            </div>
  )
}