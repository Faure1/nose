import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import {Button, Container, Row} from 'react-bootstrap'
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';




const Body = ({children}) => {

    
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
                            <div>
                            <Button variant="dark">contactanos</Button>

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










            
            {/* Nosotros te lo conseguimos*/}

            <div >
                <h1 className="text-dark d-flex justify-content-center quienes-somos">Nosotros te lo conseguimos</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>
            <div className='quienes-somos-container-2'>
                <p className=' d-flex justify-content-center '>¿Tienes un proyecto y necesitas maquinaria pesada de segunda mano?  </p>
                <p className='text-dark d-flex justify-content-center'>¡Cuenta con nosotros! Te traemos la maquinaria deseada por flotas o individual desde Estados unidos o Europa. </p>
            </div>
            <div className='medio-altura'>
             <Button className=' justify-content-center ' variant="dark">contactanos</Button>
            </div>




            {/* Nosotros te lo conseguimos - imagenes*/}

            
            <Container>
                <Row>
                    <div className='col-lg-6 col-12'>
                     <Image src='/assets/1-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h2 className='d-flex justify-content-center'>Retroescabadoras </h2>
                    </div>
                    <div className='col-lg-6 col-12'>
                    <Image src='/assets/2-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h2 className='d-flex justify-content-center'>Excavadoras </h2> 
                    </div>
                </Row>
                <Row >
                    <div className='col-lg-6 col-12 conseguimos-imagenes'>
                    <Image src='/assets/3-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h2 className='d-flex justify-content-center'>Tractor oruga </h2> 
                    </div>
                    <div className='col-lg-6 col-12 conseguimos-imagenes'>
                    <Image src='/assets/4-conseguimos.png'  width={600} height={326} layout='intrinsic'></Image>
                        <h2 className='d-flex justify-content-center'>Mini cargador </h2> 
                    </div>
                </Row>
            </Container>

















            <Container className='espacio-arriba-muchomas'>
                <Row>
                    <div >
                        <h2 className="text-dark d-flex justify-content-center ">y mucho más</h2>
                    </div>
                </Row>
            </Container>

            


































            {/* Marcas comerciales*/}

            <div >
                <h1 className="text-dark d-flex justify-content-center quienes-somos">¿Quienes somos?</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>




            {/* Marcas comerciales*/}


            




 















            {children}
        </main>
    );
}
 
export default Body;

