import { FaChevronRight } from "react-icons/fa6"
import { Card } from "../Card/Card"
import styles from "./Blog.module.scss"
import Tipografia from "../Tipografia/Tipografia"
import Slider from "react-slick";

export function Blog({}){

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
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
            slidesToShow: 1,
        },
    }
    ]
  };

  return (
      <div className={styles.blog}>
          <div className={styles.blogContainer}>
              <div className={styles.titleBlog}>
                  <Tipografia texto= "Descubre todos los detalles" isTitleLarge color= {"--black"}/>
              </div>
                <div className={styles.slider}>
                  <Slider {...settings}>
                      <Card
                          src="https://www.lego.com/cdn/cs/set/assets/blt63257db0ac5a030d/240124_Design_brief_Article_assets_Project_Vault_Card_Content.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="10 cosas que debes saber sobre el set Plaza Mayor Medieval LEGO® Icons"
                          content="Retrocede en el tiempo con nuestro nuevo set LEGO® Icons Plaza Mayor Medieval, repleto de historias, personajes y detalles sorprendentes…"
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                        <Card
                          src="https://www.lego.com/cdn/cs/set/assets/blte387febf93d7f981/231120_Design_brief_Project_Zoom_article_Card_Content.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="Cómo fue que recreamos el icónico auto McLaren F1® de Ayrton Senna"
                          content="Hablamos con la diseñadora del nuevo set LEGO® Icons McLaren MP4/4 y Ayrton Senna…"
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                        <Card
                          src="https://www.lego.com/cdn/cs/set/assets/blt7fd4bfb4124065e2/Hero_Banner_-_Mobile.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="Los mejores regalos para parejas"
                          content="Descubre nuestros mejores regalos LEGO® para parejas y demuéstrales lo mucho que te importan con un set LEGO que puedan compartir."
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                        <Card
                          src="https://www.lego.com/cdn/cs/set/assets/bltb1d96bf651522a88/76421_OG.png?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1"
                          title="13 mejores sets LEGO® Harry Potter™ para Navidad"
                          content="Entra en el Mundo Mágico de Harry Potter™ en estas fiestas y déjate llevar por 
                          la magia con los 13 mejores sets LEGO® Harry Potter para Navidad."
                          button="Lee más"
                          iconButton={<FaChevronRight />}
                        />
                  </Slider>
                        </div>
              </div>
        </div>
  )
}