import React, { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BlogPopulares.module.scss"
import Tipografia from "../Tipografia/Tipografia";
import { CardPopulares } from '../CardPopulares/CardPopulares';



const BlogPopulares = () => {

    const [progressWidth, setProgressWidth] = useState(0);
    const sliderRef = useRef(null);

    // Calcula el progreso basado en el slide actual, el total de slides y los slides que se muestran
    const calculateProgress = () => {
      if (!sliderRef.current) return;

      const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
      const totalSlides = sliderRef.current.props.children.length;
      const slidesToShow = sliderRef.current.props.slidesToShow;
      // Asegúrate de que el cálculo evita divisiones por cero en casos extremos
      const progress = totalSlides > slidesToShow ? ((currentSlide / (totalSlides - slidesToShow)) * 100).toFixed(2) : 100;

      setProgressWidth(progress);
    };

    useEffect(() => {
      // Esto ajusta el progreso inicialmente al cargar.
      calculateProgress();
    }, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

    const handleProgressBarClick = (event) => {
        const progressBar = event.currentTarget; // Elemento de la barra de progreso
        const clickX = event.clientX - progressBar.getBoundingClientRect().left; // Posición X del clic relativa al inicio de la barra
        const progressBarWidth = progressBar.offsetWidth; // Ancho total de la barra de progreso
        const clickPositionRatio = clickX / progressBarWidth; // Ratio de la posición del clic sobre el ancho total

        const totalSlides = sliderRef.current.props.children.length;
        const slidesToShow = sliderRef.current.props.slidesToShow;
        const slideToGo = Math.round(clickPositionRatio * (totalSlides - slidesToShow));

        sliderRef.current.slickGoTo(slideToGo); // Mueve el carrusel al slide calculado
      };


      function NewArrow(props){
        const { className, style, onClick} = props;
        return (
            <div
            className={className}
            style={{...style, display: "flex", padding: "8px" ,alignItems: "center", background: "rgba(128, 128, 128, 0.5)", width: "35px", height: "35px", borderRadius: "50%"}}
            onClick={onClick}
            />
        );
      }
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NewArrow/>,
      prevArrow: <NewArrow/>,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            draggable: true,
            arrows: true,
            slidesToShow: 3,
          }
        },
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
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
      ],
      afterChange: () => calculateProgress(),
    };

    return (
            <div className={styles.blog}>
                <div className={styles.blogContainer}>
                    <div className={styles.cardsContainer}>
                    <div className={styles.titleBlog}>
                        <Tipografia texto= "Sets destacados" isTitleLarge/>
                    </div>
                <Slider {...settings} ref={sliderRef}>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltde91ef1db83222dd/43249.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Stitch"
                            content={64.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"2826dfe3-6d8c-40b6-ba0b-d8d8351eab9b"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltdc7097183ba14c89/10318.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Concorde"
                            content={199.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"5487ed7b-7d62-47a0-a64f-6b5d2822f982"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltb0d4865e1765d9bc/21345.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Cámara Polaroid OneStep SX-70"
                            content={79.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"caf8274b-657c-4c80-a332-507b41365c02"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltcd23f2cb070b6d8c/71426.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Planta Piraña"
                            content={64.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"c30cdbfb-99e2-4ee9-83ca-6349057362c5"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blte32d946cf23b2e5c/21342.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Colección de insectos"
                            content={79.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"5ae3bfdd-e80e-418d-9582-8c5e45cad2c0"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/bltf876ca701fbacd4a/40725.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Flores de Cerezo"
                            content={14.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"83f34815-a11c-4ebf-93fa-b5dba7868e55"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt88bd1fb644a30a73/76282.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Rocket y Bebé Groot"
                            content={59.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"cfdf6bb2-98d7-4edb-8294-9b9cb364bda3"}
                            />
                        </div>
                        <div>
                            <CardPopulares
                            src="https://www.lego.com/cdn/cs/set/assets/blt08ba1f2bb5e8f2fb/10326.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Museo de Historia Natural"
                            content={299.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"7dbd25ad-964d-45f4-83ac-71e0cd7d2d64"}
                            />
                        </div>
                </Slider>
                <div className={styles.progressBar} onClick={handleProgressBarClick}>
                    <div className={styles.progress} style={{width: `${progressWidth}%`}}></div>
                </div>
                </div>
            </div>
        </div>
    )

};

export default BlogPopulares;
