import React from "react";
import { Container } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



export const Nosotros = [
    {
        img: '/assets/1-conseguimos.png',
        text: 'Retroescabadoras'
    },

    {
        img: '/assets/2-conseguimos.png',
        text: 'Excavadoras'
    },

    {
        img: '/assets/3-conseguimos.png',
        text: 'Tractor oruga'
    },

    {
        img: '/assets/4-conseguimos.png',
        text: 'Mini cargador'
    },


    
    

]


export const Navar = [
    {
        texto: 'quienes somos',
        clas: 'text-dark',
        href: '#Quienessomos'
    },
    {
        texto: 'maquinarias',
        clas: 'text-dark',
        href: '#maquinarias'

    },
    {
        texto: 'testimonios',
        clas: 'text-dark',
        href: '#testimonios'
    },

]

export const Brands = () => {
  return (
    <Container fluid className="section-brands">
      <Swiper
        modules={[Navigation, Pagination, Autoplay,Grid, A11y]}
        spaceBetween={10}
        className="my-swiper-brands"
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1920: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide style={{ height: "100%" }}>
        <div className="brand-14  brand-15 h-100">
        <img
            src="/assets/new-sin.png"
            alt="maq"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-13 brand-15 h-100">
                <img
                src="/assets/bocat-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-12 brand-15 h-100">
                <img
                src="/assets/case-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-11 brand-15 h-100">
                <img
                src="/assets/cat-sin.png"
                alt="maq"
                />
            </div>

        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-10 brand-15  h-100">
                <img
                src="/assets/cater-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-9 brand-15 h-100">
                <img
                src="/assets/doosan-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-8 brand-15 h-100">
                <img
                src="/assets/hitachi-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-7 brand-15 h-100">
                <img
                src="/assets/hyundai-sin.png"
                alt="maq"
                />
            </div>          
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-6 brand-15 ">
                <img
                src="/assets/jcb-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-5 brand-15 h-100">
                <img
                src="/assets/john-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-4 brand-15 h-100">
                <img
                src="/assets/komatsu-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
                <div className="brand-3 brand-15 h-100">
                    <img
                    src="/assets/kubata-sin.png"
                    alt="maq"
                    />
                </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="brand-2 brand-15 h-100">
                <img
                src="/assets/liebherr-sin.png"
                alt="maq"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
            <div className="brand-1 brand-15 h-100">
                <img
                src="/assets/volvo-sin.png"
                alt="maq"
                />
            </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Brands;