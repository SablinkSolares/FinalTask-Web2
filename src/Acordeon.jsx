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
            <h1>Academia de Baile "Sergio El Bailador"</h1>
            <h2>Gabriel Camilo Huaranca Solares</h2>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Caporales</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <img src="public\dance1one.jpg" width={500}></img>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Diablada</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <img src="public\dance2.jpg" width={500}></img>

                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Llamerada</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <img src="public\dance3.jpg" width={500}></img>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">Morenada</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <img src="public\dance4.jpg" width={500}></img>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">Chacarera</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <img src="public\dance5.jpg" width={500}></img>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Acordeon;