import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import {Button, Container, Row} from 'react-bootstrap'
import { Controller, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";



const Body = () => {

    return (  
        <main>

            {/* PRIMER HERO*/}

             <div className="hero col-12 " >
                 <Container >
                     <Row className='d-flex justify-content-center mediohero '>
                          <div>
                               <h1 className='quienes-somos' >Máquinas para el desarrollo</h1>
                          </div>
                     </Row>
                     <Row  className='d-flex justify-content-center mediohero  '>
                         <div>
                             <h3 > Importamos todo tipo de maquinaria pesada, para obras publicas y minería.</h3>
                         </div> 
                     </Row>
                     <Row  className='d-flex justify-content-center  '> 
                            <Button className='medio-imgaen col-3  col-md-2  col-lg-1' variant="light">cotizar</Button>
                     </Row>
                </Container>    
            </div>







            {/* QUIENES SOMOS*/}

            <div >
                <h1 className="text-dark d-flex justify-content-center quienes-somos">¿Quienes somos?</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>







            {/* QUIENES SOMOS CONTENEDOR*/}

            <Container className="quienes-somos-container">
                <Row>
                    <div className="col-12 order-1 order-lg-0 col-lg-6 ">
                        <div className="contenedor medio-altura ">
                            <div className='texto-medio'>
                                <p>Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner</p>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <Button variant="dark">contactanos</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 order-0 order-lg-1 col-lg-6">
                        <div className="d-flex justify-content-center w-100">
                            <img src="./assets/2imagen.png" className="goku1"/>
                        </div>
                    </div>
                </Row>
            </Container>







            {/* SEGUNDO HERO*/}

            <div className="hero2 col-12 " >
                 <Container >
                     <Row className='d-flex justify-content-center mediohero '>
                          <div>
                               <h1 className="quienes-somos quienes-somos-2"> Nuestro servicio </h1>
                          </div>
                     </Row>
                     <Row className='d-flex justify-content-center mediohero padding'>
                          <div>
                                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
                          </div>
                     </Row>
                     <Row className='d-flex justify-content-center mediohero-excavator '>
                          <div>
                                <Image src='/assets/excavator.png'  width={56} height={54} layout='intrinsic'></Image>
                          </div>
                     </Row>
                     <Row  className='d-flex justify-content-center mediohero  '>
                         <div >
                             <h2 className='text-light'>Venta de maquinaria usada</h2>
                         </div> 
                     </Row>
                     <Row  className='d-flex justify-content-center  '> 
                        <div>
                            <h4 className='text-align-center texto-hero2'>Importamos todo tipo de maquinaria de segunda mano para la minería y las obras públicas directamente de los mercados de Europa y de Estados Unidos</h4>
                        </div>
                            
                     </Row>
                </Container>    
            </div>







            {/* MAQUINARIA EN VENTA*/}

            <div >
                <h1 className="text-dark d-flex justify-content-center quienes-somos">Maquinaria en venta</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>



            <Container className="margin-bottom-56px">
                <Row className=''>
                    <div className=" d-flex col-12 order-1 order-lg-1 col-lg-6 mediohero-info">
                        <div className='col-12 '>
                            <div>
                            <h1 className='titulos-venta'>Gruas de marca Link Belt</h1>
                            </div>
                            <div className='d-flex texto-de-info-medio'>
                            <div className=' order-0 w-20'>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo' >Año:</p>
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Odometro:</p>   
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Condicion:</p>   
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                    <Button variant="dark">contactanos</Button>
                                </div>

                            </div>
                                <div className='order-1 div-lado-derecho'>
                                    <div className='div-info-lado-derecho'>
                                    <h2 className='lado-derecho'>  2014 </h2>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                    <h2 className='lado-derecho'>  11.037 </h2>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                        <h2 className='lado-derecho'>  USADA, Perfecto estado.</h2>
                                    </div>
                                    <div className='div-info-ado-izquierdo'>
                                    <Button variant="light">Ficha tecnica</Button>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 order-0 order-lg-0 col-lg-6 ">
                    <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <a  href='https://www.facebook.com/watch/?v=521585079352621'>
          <SwiperSlide >
            <div className="Cat-imagen2" >
                    <div className='div-float'>
                     <Image  src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
                    </div>
             </div>
         </SwiperSlide>
        </a>


        <SwiperSlide>
        <div className="Cat-imagen3" >
                    <div className='div-float'>
                     <Image  src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
                    </div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Cat-imagen4" >
                    <div className='div-float'>
                     <Image  src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
                    </div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Cat-imagen5" >
                    <div className='div-float'>
                     <Image  src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
                    </div>
             </div>
        </SwiperSlide>
      </Swiper>
                    </div>
                </Row>
            </Container>











        






            {/* VIDEO PRIMER MAQUINA EN VENTA*/}

            <Container>
            <div className='col-12 imagen-de-video'>
               <Container className=' d-flex justify-content-center mediohero'>
                <a target="_blank" href='https://www.facebook.com/watch/?v=521585079352621' className='boton-video'> <Button   variant="light"> <Image src='/assets/play.png'  width={100} height={58} layout='intrinsic'></Image> </Button></a>
                </Container>
            </div>
            </Container>






            {/* PRIMER MAQUINA VENTA*/}

            <Container className="margin-bottom-56px">
                <Row className=''>
                    <div className=" d-flex col-12 order-1 order-lg-0 col-lg-6 mediohero-info">
                        <div className='col-12 '>
                            <div>
                            <h1 className='titulos-venta'>Excavadora CAT 336 ELH</h1>
                            </div>
                            <div className='d-flex texto-de-info-medio'>
                            <div className=' order-0 w-20'>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo' >Año:</p>
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Odómetro:</p>   
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Condición:</p>
                                </div>    
                                <div className='div-info-ado-izquierdo'>
                                   <p className='lado-izquierdo'>Precio:</p>
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                    <Button variant="dark">contactanos</Button>
                      
                                </div>
                            </div>
                                <div className='order-1 div-lado-derecho'>
                                    <div className='div-info-lado-derecho'>
                                    <p className='lado-derecho'>  2013</p>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                    <p className='lado-derecho'>  -</p>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                        <p className='lado-derecho'>  usada,Perfecto estado.</p>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                    <p className='lado-derecho'>  $145,000 USD</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 order-0 order-lg-1 col-lg-6 ">
                        <div className="Cat-imagen">
                            <div className='div-float'>
                            <Image  src='/assets/Frame962.png'  width={180} height={54} layout='intrinsic'></Image>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>


            <Container className="margin-bottom-56px">
                <Row className=''>
                    <div className=" d-flex col-12 order-1 order-lg-1 col-lg-6 mediohero-info">
                        <div className='col-12 '>
                            <div>
                            <h1 className='titulos-venta'>Gruas de marca Link Belt</h1>
                            </div>
                            <div className='d-flex texto-de-info-medio'>
                            <div className=' order-0 w-20'>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo' >Capacidad:</p>
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Condición:</p>   
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                    <Button variant="dark">contactanos</Button>
                      
                                </div>
                            </div>
                                <div className='order-1 div-lado-derecho'>
                                    <div className='div-info-lado-derecho'>
                                    <h2 className='lado-derecho'>  Desde 20 a 80 toneladas. </h2>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                        <h2 className='lado-derecho'>  USADA, Perfecto estado.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 order-0 order-lg-0 col-lg-6 ">
                    <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
          <SwiperSlide >
            <div className="swiper2-1" >
                    <div className='div-float'>
                     <Image  src='/assets/Frame962.png'  width={184} height={84} layout='intrinsic'></Image>
                    </div>
             </div>
         </SwiperSlide>
          <SwiperSlide >
            <div className="swiper2-2" >

             </div>
         </SwiperSlide>
          <SwiperSlide >
            <div className="swiper2-3" >

             </div>
         </SwiperSlide>
          <SwiperSlide >
            <div className="swiper2-4" >

             </div>
         </SwiperSlide>      
          <SwiperSlide >
            <div className="swiper2-5" >

             </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className="swiper2-6" >

             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper2-7" >

             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper2-8" >

             </div>
        </SwiperSlide>
      </Swiper>
                    </div>
                </Row>
            </Container>










            
            {/* Nosotros te lo conseguimos*/}

            <div >
                <h1 className="text-dark d-flex justify-content-center quienes-somos">Nosotros te lo conseguimos</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            <div className='quienes-somos-container-2 mediohero '>
                <p className=' d-flex justify-content-center '>¿Tienes un proyecto y necesitas maquinaria pesada de segunda mano?  </p>
                <p className='text-dark d-flex justify-content-center align-item-center'>¡Cuenta con nosotros! Te traemos la maquinaria deseada por flotas o individual desde Estados unidos o Europa. </p>
            </div>
            <div className='medio-altura'>
             <Button className=' justify-content-center ' variant="dark">contactanos</Button>
            </div>




            {/* Nosotros te lo conseguimos - imagenes*/}

            
            <Container>
                <Row>
                    <div className='col-lg-6 col-12'>
                        <Image src='/assets/1-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h3 className='d-flex justify-content-center color-h3'>Retroescabadoras </h3>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <Image src='/assets/2-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h3 className='d-flex justify-content-center color-h3'>Excavadoras </h3> 
                    </div>
                </Row>
                <Row >
                    <div className='col-lg-6 col-12 conseguimos-imagenes'>
                        <Image src='/assets/3-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h3 className='d-flex justify-content-center color-h3'>Tractor oruga </h3> 
                    </div>
                    <div className='col-lg-6 col-12 conseguimos-imagenes'>
                        <Image src='/assets/4-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h3 className='color-h3 d-flex justify-content-center '>Mini cargador </h3> 
                    </div>
                </Row>
            </Container>








            <Container className='espacio-arriba-muchomas mediohero '>
                    <div >
                        <h2 className="text-dark d-flex justify-content-center y-mucho-mas">Y mucho más</h2>
                    </div>
            </Container>
            <Swiper
         slidesPerView={6}
         spaceBetween={30}
         centeredSlides={false}
        modules={[ ]}
        className="mySwiper"
      >

<SwiperSlide>
            <div>
                <Image src='/assets/rodillo.png'  width={220} height={207} layout='intrinsic'></Image>
                <p className='d-flex justify-content-center'>Rodillo compactador</p> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/dumper.png'  width={220} height={207} layout='intrinsic'></Image>
                <p className='d-flex justify-content-center'>Dumper</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/Hormigonera.png'  width={220} height={207} layout='intrinsic'></Image>
                <p className='d-flex justify-content-center'>Hormigonera todo terreno</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/camion-bomba.png'  width={220} height={207} layout='intrinsic'></Image>
                <p className='d-flex justify-content-center'>Camion bomba de hormigon </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/Camiones-volquetes.png'  width={220} height={207} layout='intrinsic'></Image>
                <p className='d-flex justify-content-center'>Camiones volquetes articulados </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/Gruas-sobre-orugas.png'  width={220} height={207} layout='intrinsic'></Image>
                <p className='d-flex justify-content-center'>Gruas sobre orugas </p> 
            </div>
        </SwiperSlide>



        </Swiper>







        {/* Marcas comerciales*/}
        <div >
            <h1 className="text-dark d-flex justify-content-center quienes-somos">Marcas comerciales</h1>
        </div>
        <div className='d-flex justify-content-center padding'>
            <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
        </div>





        {/*       
         breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 7,
                spaceBetween: 50,
              }
         }} 
            
         para poner en 2 rows
         grid={{
            rows: 2,
          }}

          poner esto en el scss  en swiper-slide
            height: calc((100% - 30px) / 2) !important;

         */}
            





        <Swiper
         slidesPerView={10}
         loop={true}
         spaceBetween={30}
         centeredSlides={true}


        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <Image src='/assets/log-holland.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-bobcat.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-case.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-cat.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-caterpillar.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-doosan.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-hitachi.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-hyundai.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-jcb.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-joh-deere.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-jomatsu.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-kubota.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-liebherr.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <Image src='/assets/logo-volvo.png'  width={186} height={116} layout='intrinsic'></Image>
            </div>
        </SwiperSlide>
      </Swiper>





      
        {/* Recien vendida*/}
        <div >
            <h1 className="text-dark d-flex justify-content-center quienes-somos">Recien vendida</h1>
        </div>
        <div className='d-flex justify-content-center padding'>
            <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
        </div>




        {/* Recien vendida container*/}

        <Container className="margin-bottom-56px">
                <Row className=''>
                    <div className=" d-flex col-12 order-1 order-lg-0 col-lg-6 mediohero-info">
                        <div className='col-12 '>
                            <div>
                            <h1 className='titulos-venta'>Retroexcavadora CASE  570MXT 4x4 cargador basculante</h1>
                            </div>
                            <div className='d-flex texto-de-info-medio'>
                            <div className=' order-0 w-20'>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo' >Año:</p>
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Odómetro:</p>   
                                </div>
                                <div className='div-info-ado-izquierdo'>
                                <p className='lado-izquierdo'>Condición:</p>
                                </div>    
                                <div className='div-info-ado-izquierdo'>
                                   <p className='lado-izquierdo'>Precio:</p>
                                </div>
                                <div>
                                    <h2 className='titulos-venta'>Vendido</h2>
                                </div>
                                
 
                            </div>
                                <div className='order-1 div-lado-derecho'>
                                    <div className='div-info-lado-derecho'>
                                    <p className='lado-derecho'>  2011</p>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                    <p className='lado-derecho'>4,300 horas</p>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                        <p className='lado-derecho'>  usada,Perfecto estado.</p>
                                    </div>
                                    <div className='div-info-lado-derecho'>
                                    <p className='lado-derecho'>  $55,000 USD</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 order-0 order-lg-1 col-lg-6 ">
                        <div className="vendido-imagen">
                            <div className='div-float2'>
                            <Image  src='/assets/logo-vendido.png'  width={158} height={161} layout='intrinsic'></Image>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>






                  
        {/* testimonios*/}
        <div >
            <h1 className="text-dark d-flex justify-content-center quienes-somos">Testimonios</h1>
        </div>
        <div className='d-flex justify-content-center padding'>
            <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
        </div>
        <div className='d-flex justify-content-center'>
            <h2 className='andrea'>Andrea</h2>
        </div>







        <Container>
            <Row>
                <div className=' d-flex justify-content-center'>
                    <div  >
                        <Image src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                    </div>
                    <div className='espacio-8' >
                        <Image src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                    </div>
                    <div >
                        <Image src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                    </div>
                    <div className='espacio-8' >
                        <Image src='/assets/estrillita.png' width={20} height={20} layout='intrinsic'></Image>
                    </div>
                    <div >
                        <Image src='/assets/estrilla-vacia.png' width={20} height={20} layout='intrinsic'></Image>
                    </div>
                </div>

            </Row>
        </Container>
        
        
 
        <div className=' d-flex justify-content-center mediohero align-item-center '>
        <div className='d-flex justify-content-center mediohero col-5 '>
                <p>
                 Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner 
                </p>

        </div>
        </div>


 





































            




 















         
        </main>
    );
}
 
export default Body;

