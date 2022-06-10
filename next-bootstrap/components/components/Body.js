import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import {Button, Container, Row} from 'react-bootstrap'

const Body = ({children}) => {
    return (  
        <main>


            <div className="hero col-12" >
	            <h1 className='col-lg-5 col-12'>Máquinas para el desarrollo</h1>
                <h3 className='col-lg-5 col-12'> Importamos todo tipo de maquinaria pesada, para obras publicas y minería.</h3>
                <Button className='medio-imgaen' variant="light">cotizar</Button>
            </div>



            <div >
                <h1 className="text-dark d-flex justify-content-center">¿QUIENES SOMOS?</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
            </div>



            

            
            <Container className='a'>
                <Row classname=" justify-content">
                <div class="d-flex  w-100"> 
                <div className="d-flex texto-medio   col-12 col-lg-5">
                    <div classname=''>
                        <p classname="">Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner Texto por poner </p>
                        <div class="d-flex justify-content-center w-100">
                        <Button variant="dark">contactanos</Button>
                        </div>
                    </div>
                </div>
                    <div classname="col-mg-12 col-12 col-lg-5  ">
                        <img src="./assets/2imagen.png"  class="goku1">
                        </img>
                    </div>
                </div>
                </Row>
            </Container>







            <div className="hero2 col-12" >
	            <h1 className='col-lg-5 col-12'>Nuestros servicio</h1>
                <div className='d-flex justify-content-center'>
                    <Image src='/assets/vector 12.png'  width={214} height={4} layout='intrinsic'></Image>
                </div>
                <h3 className='col-lg-5 col-12'> venta de maquinaria usada</h3>
                <h2>Importamos todo tipo de maquinaria de segunda mano para la minería y las obras públicas</h2>
                <h2>directamente de los mercados de Europa y de Estados Unidos</h2>
            </div>













            {children}
        </main>
    );
}
 
export default Body;
