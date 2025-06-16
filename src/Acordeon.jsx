import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <br></br>
            <h3>Danzas de 5 Regiones de Bolivia:</h3>
            
            <br></br>
            <Accordion flush open={open} toggle={toggle} >
                <center>
                <AccordionItem >
                    <AccordionHeader targetId="1">Morenada</AccordionHeader>
                    <AccordionBody accordionId="1">
                    <img src="d1.jpg" width={350} height={200}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                <AccordionItem>
                    <AccordionHeader targetId="2">Diablada</AccordionHeader>
                    <AccordionBody accordionId="2">
                    <img src="d2.jpg" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                <AccordionItem>
                    <AccordionHeader targetId="3">Caporales</AccordionHeader>
                    <AccordionBody accordionId="3">
                    <img src="d3.jpg" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                <AccordionItem>
                    <AccordionHeader targetId="4">Chacarera</AccordionHeader>
                    <AccordionBody accordionId="4">
                    <img src="d4.jpg" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                    <AccordionItem>
                    <AccordionHeader targetId="5">Chovena</AccordionHeader>
                    <AccordionBody accordionId="5">
                    <img src="d51.webp" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
            </Accordion>
            <br></br>
            <h2>Academia de Baile - "Sergio El Bailador"</h2>
            <center><img src='logo.png' className='imagen1'></img></center>
            <h3><footer>Gabriel Camilo Huaranca Solares</footer></h3>
        </div>
    );
}

export default Acordeon;