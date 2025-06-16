function Cards(props) {
    return (
        <div>
            <br></br>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Caporales</h5>
                            <center><img src="ins3.jpg" width={400} height={200}></img></center>
                            <p class="card-text">Los Caporales es una danza boliviana caracterizada por su energía y vistosos movimientos, con influencia de la saya y el tundique. Se distingue por el vestuario llamativo, con botas de tacón adornadas con cascabeles para los hombres, y minifaldas y sombreros para las mujeres. La danza representa al caporal, un capataz de origen afrodescendiente, y se ejecuta con saltos, giros y zapateos enérgicos. </p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Inscribirse
                            </button>
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Danza Caporales</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Costo: 80 Bs
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" class="btn btn-primary">$Pagar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Diablada</h5>
                            <center><img src="ins2.jpg" width={400} height={200}></img></center>
                            <p class="card-text">La Diablada es una danza religiosa y folclórica, principalmente de Bolivia y Perú, que representa la lucha entre el bien y el mal, incorporando elementos católicos y andinos. Los bailarines, disfrazados de diablos, ángeles y otros personajes, ejecutan elaboradas coreografías acompañadas de música y máscaras llamativas. </p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Inscribirse
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Danza Diablada</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Costo: 80 Bs
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" class="btn btn-primary">$Pagar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Chovena</h5>
                            <img src="ins1.jpg" width={400} height={200}></img>
                            <p class="card-text">La chovena es una danza folclórica alegre y cadenciosa, originaria de la región chiquitana de Bolivia, específicamente en San José de Chiquitos. Se baila al ritmo de la música con instrumentos como pifanos de tacuara, percusión, violín y acordeón, mostrando movimientos alegres y frases cortas repetidas en compás de 2/4.</p>
                            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Danza Chovena</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Costo: 80 Bs
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" class="btn btn-primary">$Pagar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Inscribirse</button>
                        </div>
                    </div>
                </div>
                </center>
            </div>
        </div>
    );
}
export default Cards;