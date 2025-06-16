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
                    <img src="https://t3.ftcdn.net/jpg/03/68/68/58/360_F_368685899_ksRty654pZ87IFLusMw0DYDJXDC0tXwT.jpg" width={350} height={200}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                <AccordionItem>
                    <AccordionHeader targetId="2">Diablada</AccordionHeader>
                    <AccordionBody accordionId="2">
                    <img src="https://t4.ftcdn.net/jpg/04/60/89/89/360_F_460898966_bjcjhgmodspDWzubQnZFF7d3DlPgrabh.jpg" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                <AccordionItem>
                    <AccordionHeader targetId="3">Caporales</AccordionHeader>
                    <AccordionBody accordionId="3">
                    <img src="https://i.ytimg.com/vi/5E0C9xkl1HQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCv1AmGskxlZky92LWt6oF64M3leA" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                <AccordionItem>
                    <AccordionHeader targetId="4">Chacarera</AccordionHeader>
                    <AccordionBody accordionId="4">
                    <img src="https://i.ytimg.com/vi/SGfY4t8B-y8/maxresdefault.jpg" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
                <center>
                    <AccordionItem>
                    <AccordionHeader targetId="5">Chovena</AccordionHeader>
                    <AccordionBody accordionId="5">
                    <img src="https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/easyespanol.org/wp-content/uploads/2018/03/chovena-jpg.webp" width={500} height={300}></img>
                    </AccordionBody>
                </AccordionItem>
                </center>
            </Accordion>
            <br></br>
            <h2>Academia de Baile - "Sergio El Bailador"</h2>
            <center><img src="https://www.shutterstock.com/image-photo/cochabamba-bolivia-17022024-carnival-corso-600nw-2437885935.jpg" className='imagen1'></img></center>
            <h3><footer>Gabriel Camilo Huaranca Solares</footer></h3>
        </div>
    );
}

export default Acordeon;