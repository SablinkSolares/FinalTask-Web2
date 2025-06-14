import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Inicio(props) {
    return (
        <div className="sc">


        </div>
    );
}
function Cochabamba(props) {
    return (
        <div className="cocha">
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Caporales</h5>
                            <img src="public\dance1one.jpg" width={500}></img>
                            <p>La danza de caporales es una expresión artística boliviana, una fusión de influencias culturales que surgió en La Paz en la década de los sesenta. Se caracteriza por su música alegre y sus coreografías sincronizadas con movimientos de saltos, giros y zapateos de tacón. Los bailarines, especialmente los hombres, usan vestuarios vistosos con lentejuelas y cascabeles en las botas, lo que añade un toque de brillo y energía a la danza. </p>
                            <a href="#" class="btn btn-primary">Inscribirse</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Chacarera</h5>
                            <img src="public\dance5.jpg" width={500}></img>
                            <p>La chacarera es una danza y música folclórica tradicional de Argentina, especialmente de la provincia de Santiago del Estero, que también se practica en Bolivia, principalmente en el departamento de Tarija. Se caracteriza por un ritmo rápido y contagioso, y se baila con pasos y movimientos festivos.
                                En Bolivia, la chacarera ha desarrollado su propia identidad cultural, diferenciándose en algunos aspectos de su contraparte argentina. En Bolivia, se utiliza la guitarra, el violín y el bombo legüero para ejecutar la música.
                                La chacarera se baila con pasos básicos como la planta, punta, planta, el zapateo y el zarandeo. Los bailarines se posicionan enfrentados en la mediana del cuadrado imaginario de danza, ofreciendo el flanco izquierdo al espectador. La introducción musical suele tener 6 u 8 compases.
                                En resumen, la chacarera boliviana es una expresión cultural que celebra la vida y la alegría, transmitiendo el folclore y la historia de la región.
                            </p>
                            <a href="#" class="btn btn-primary">Inscribirse</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Diablada</h5>
                            <img src="public\dance2.jpg" width={500}></img>
                            <p>La diablada es una danza tradicional boliviana, especialmente popular en el Carnaval de Oruro. Representa la lucha entre el bien y el mal, con los participantes disfrazados de demonios y ángeles, con elaborados trajes y máscaras. </p>
                            <a href="#" class="btn btn-primary">Inscribirse</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function LaPaz(props) {
    return (
        <div className="lp">
            <h1>Bienvenid@ a La Paz</h1>
        </div>
    );
}
function Menu(props) {
    return (
        <div>
            <nav>
                <h1>Principal</h1>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/pagi2'>Oferta de Cursos</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/pagi2" element={<Cochabamba></Cochabamba>}></Route>
                </Routes>
            </div>
        </div>
    );
}
export default Menu;
