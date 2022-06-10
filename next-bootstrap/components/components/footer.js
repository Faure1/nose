import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Container} from 'react-bootstrap'


const Footer = ({children}) => {
    return ( 
        <main>
            <div className='footer ' >
                <p >Big Dick Industries / From NFS</p>
            </div>
            
        






        {children}
        </main>
     );
}
 
export default Footer;