import React from "react";

import {FaAnkh, FiAirplay, BiUser} from "../assets/icons/vander";

export default function Process({title,icon}){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title fw-semibold mb-3">{title}</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Chcesz przejść na zieloną energię? Skontaktuj się z nami i dowiedz się, jak możemy pomóc w instalacji fotowoltaiki, pomp ciepła i innych rozwiązań OZE.</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
                    {icon === false ? 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">1</div>: 
                        <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto"><FaAnkh className="icon"/></div>
                    }

                    <div className="content mt-4 pt-2">
                        <h4>Konsultacja</h4>
                        <p className="text-muted mb-0 mt-3">Skontaktuj się z nami, aby uzyskać darmową konsultację. Doradzimy Ci, jakie rozwiązanie najlepiej spełni Twoje potrzeby energetyczne.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mt-4 pt-2">
                <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
                    {icon === false ? 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">2</div>: 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto"><FiAirplay className="icon"/></div>
                    }

                    <div className="content mt-4 pt-2">
                        <h4>Indywidualna Oferta</h4>
                        <p className="text-muted mb-0 mt-3">Na podstawie konsultacji przygotujemy dla Ciebie spersonalizowaną ofertę, uwzględniającą montaż fotowoltaiki, pomp ciepła i klimatyzacji.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mt-4 pt-2">
                <div className="features feature-primary text-center border-0 px-lg-4 position-relative">
                    {icon === false ? 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">3</div>: 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto"><BiUser className="icon"/></div>
                    }

                    <div className="content mt-4 pt-2">
                        <h4>Montaż i Serwis</h4>
                        <p className="text-muted mb-0 mt-3">Po zaakceptowaniu oferty nasi specjaliści zajmą się montażem i uruchomieniem instalacji. Oferujemy również pełen serwis i wsparcie techniczne.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
