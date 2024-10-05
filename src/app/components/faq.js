'use client'
import React, { useState } from "react";

export default function Faq(){
    let [activeIndex, setActiveIndex] = useState(1)

    let accordionData = [
        {
            id:1,
            title:'Jak działają instalacje fotowoltaiczne?',
            desc:'Instalacje fotowoltaiczne przekształcają energię słoneczną w energię elektryczną, co pozwala na zasilanie Twojego domu ekologiczną i odnawialną energią.'
        },
        {
            id:2,
            title:'Czy pompa ciepła jest odpowiednia do mojego domu?',
            desc:'Pompy ciepła to doskonałe rozwiązanie do efektywnego ogrzewania budynków. Oferujemy profesjonalne doradztwo, aby pomóc dobrać najlepsze rozwiązanie do Twoich potrzeb.'
        },
        {
            id:3,
            title:'Jak długo trwa montaż instalacji OZE?',
            desc:'Czas montażu zależy od wybranej technologii oraz wielkości instalacji. Zazwyczaj instalacja fotowoltaiczna zajmuje od kilku dni do tygodnia, a montaż pompy ciepła może zająć do kilku tygodni.'
        },
        {
            id:4,
            title:'Czy oferujecie serwis pomp ciepła i instalacji fotowoltaicznych?',
            desc:'Tak, zapewniamy pełny serwis instalacji OZE, w tym regularne przeglądy, naprawy oraz optymalizację wydajności urządzeń, aby działały sprawnie przez wiele lat.'
        },
        {
            id:5,
            title:'Jakie są korzyści z instalacji fotowoltaiki?',
            desc:'Fotowoltaika to oszczędności na rachunkach za prąd, niezależność energetyczna oraz dbanie o środowisko dzięki wykorzystaniu odnawialnych źródeł energii.'
        },
        {
            id:6,
            title:'Czy oferujecie pomoc w uzyskaniu dotacji na OZE?',
            desc:'Tak, pomagamy naszym klientom w uzyskaniu dotacji i ulg podatkowych na instalacje odnawialnych źródeł energii. Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych programach wsparcia.'
        },
        {
            id:7,
            title:'Jakie są koszty instalacji fotowoltaiki lub pompy ciepła?',
            desc:'Koszt instalacji zależy od wielu czynników, takich jak wielkość instalacji, wybrane technologie oraz warunki techniczne na miejscu. Oferujemy bezpłatne wyceny po wstępnej konsultacji.'
        },
        {
            id:8,
            title:'Czy instalacja pompy ciepła wymaga przebudowy domu?',
            desc:'Instalacja pompy ciepła zazwyczaj nie wymaga dużej ingerencji w strukturę budynku. W większości przypadków montaż można przeprowadzić bez większych zmian w istniejącej infrastrukturze.'
        },
        {
            id:9,
            title:'Jakie są zalety klimatyzacji zasilanej energią odnawialną?',
            desc:'Klimatyzacja zasilana energią odnawialną pozwala na oszczędności na kosztach energii oraz redukcję emisji CO2, co przyczynia się do ochrony środowiska.'
        },
        {
            id:10,
            title:'Czy mogę monitorować wydajność mojej instalacji OZE?',
            desc:'Tak, oferujemy systemy monitoringu, które umożliwiają śledzenie wydajności instalacji fotowoltaicznych oraz pomp ciepła w czasie rzeczywistym, co pozwala na szybkie reagowanie na ewentualne problemy.'
        },
    ]
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <h4 className="title mb-3">Najczęściej Zadawane Pytania</h4>
                    <p className="text-muted mx-auto para-desc mb-0">Oferujemy kompleksowe rozwiązania w zakresie odnawialnych źródeł energii. Dowiedz się więcej o naszych usługach i jak możemy pomóc Ci w przejściu na zieloną energię!</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-10 mt-4 pt-2">
                <div className="accordion" id="buyingquestion">
                    <div className="row">
                        <div className="col-md-6">
                            {accordionData.slice(0,6).map((item, index)=>{
                                return(
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ?
                                        <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                            <div className="accordion-body text-muted bg-white collapsed">
                                                {item.desc}
                                            </div>
                                        </div>:''
                                        }
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-md-6">
                            {accordionData.slice(6,11).map((item, index)=>{
                                return(
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ?
                                        <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                            <div className="accordion-body text-muted bg-white collapsed">
                                                {item.desc}
                                            </div>
                                        </div>:''
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
