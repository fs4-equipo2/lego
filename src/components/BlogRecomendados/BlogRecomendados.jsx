import React, { useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BlogRecomendados.module.scss"
import Tipografia from "../Tipografia/Tipografia";
import { CardRecomendados } from '../CardRecomendados/CardRecomendados';


export const BlogRecomendados = () => {

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


      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
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
                    <div className={styles.titleBlog}>
                        <Tipografia texto= "Recomendado para ti" isTitleLarge/>
                    </div>
                <Slider {...settings} ref={sliderRef}>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltc4a6c2103a34f22e/10313_alt2.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Ramo de Flores Silvestres"
                            content={59.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"d0c7c95f-dee0-4943-a6ba-c15c09219f13"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltfb2cb30f3daa8614/31156.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Ukelele Tropical"
                            content={29.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"3c45b251-aced-41fe-8457-11525a685259"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blt4fa1e0206e541309/10281_Prod.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Bonsái"
                            content={169.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"c1152094-f69f-42ae-9992-181a378712b8"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blteb14e8c6c9e027df/40524.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Girasoles"
                            content={14.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"78e026d1-49fa-41c0-a071-3fdc7cf86521"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blte32d946cf23b2e5c/21342.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Colección de insectos"
                            content={79.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"f530869a-f3cb-4190-b45e-8093e510b853"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltf876ca701fbacd4a/40725.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Flores de Cerezo"
                            content={14.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"5f04e8f2-2d05-42b2-8536-9340c01fccc7"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/blt88bd1fb644a30a73/76282.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Rocket y Bebé Groot"
                            content={59.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"ca423afb-4eae-427a-a190-3a67380ff231"}
                            />
                        </div>
                        <div>
                            <CardRecomendados
                            src="https://www.lego.com/cdn/cs/set/assets/bltd2d5f472a43f0580/31149.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1"
                            title="Flores en Regadera"
                            content={29.99}
                            button="Añadir a la bolsa"
                            link="link"
                            uid={"3a8e8b4c-2759-4518-8deb-d433de4b1d1b"}
                            />
                        </div>
                </Slider>
                <div className={styles.progressBar} onClick={handleProgressBarClick}>
                    <div className={styles.progress} style={{width: `${progressWidth}%`}}></div>
                </div>

            </div>
        </div>
    )
};
