'use client'
import React, { useState } from "react";

export default function Faq(){
    let [activeIndex, setActiveIndex] = useState(1)

    let accordionData = [
        {
            id:1,
            title:'Jak działają instalacje fotowoltaiczne?',
            desc:'Instalacje fotowoltaiczne przekształcają energię słoneczną w energię elektryczną. Panele PV instalowane na dachu lub gruncie wytwarzają prąd stały, który falownik (inwerter) zamienia na prąd zmienny używany w domowych urządzeniach. Nadwyżki energii można magazynować w akumulatorach lub oddawać do sieci energetycznej w ramach systemu net-metering lub net-billing.'
        },
        {
            id:2,
            title:'Czy pompa ciepła jest odpowiednia do mojego domu?',
            desc:'Pompy ciepła sprawdzają się w większości budynków, zarówno nowych, jak i modernizowanych. Kluczowe czynniki to: stopień izolacji budynku, dostępne miejsce na instalację jednostki zewnętrznej, typ ogrzewania (najlepiej niskotemperaturowe, np. podłogowe). Oferujemy bezpłatny audyt energetyczny, który pozwoli dobrać optymalny model pompy ciepła do Twoich potrzeb.'
        },
        {
            id:3,
            title:'Jak długo trwa montaż instalacji OZE?',
            desc:'Czas montażu zależy od wybranej technologii oraz wielkości instalacji. Standardowa instalacja fotowoltaiczna o mocy 6-10 kWp zajmuje zwykle 1-2 dni robocze. Montaż pompy ciepła wraz z podłączeniem do systemu grzewczego trwa zazwyczaj 2-3 dni. Kompleksowe instalacje (fotowoltaika + pompa ciepła + magazyn energii) mogą zająć do tygodnia.'
        },
        {
            id:4,
            title:'Czy oferujecie serwis pomp ciepła i instalacji fotowoltaicznych?',
            desc:'Tak, zapewniamy pełny serwis instalacji OZE, w tym regularne przeglądy, czyszczenie paneli, diagnostykę, naprawy oraz optymalizację wydajności urządzeń. Dla wszystkich naszych instalacji oferujemy pakiety serwisowe, gwarantujące priorytetową obsługę i wydłużoną gwarancję. Serwis wykonujemy zgodnie z wymogami producentów, zachowując warunki gwarancji.'
        },
        {
            id:5,
            title:'Jakie są korzyści z instalacji fotowoltaiki?',
            desc:'Fotowoltaika to znaczące oszczędności na rachunkach za prąd (nawet do 90%), niezależność energetyczna, ochrona przed podwyżkami cen energii, zwiększenie wartości nieruchomości oraz dbanie o środowisko przez redukcję emisji CO2. Instalacja fotowoltaiczna jest niemal bezobsługowa i ma długą żywotność (25-30 lat), zapewniając stabilne oszczędności przez dekady.'
        },
        {
            id:6,
            title:'Czy oferujecie pomoc w uzyskaniu dotacji na OZE?',
            desc:'Tak, kompleksowo pomagamy w uzyskaniu wszystkich dostępnych form dofinansowania, takich jak program "Mój Prąd", "Czyste Powietrze", ulga termomodernizacyjna oraz lokalne programy dotacji. Przygotowujemy pełną dokumentację, wypełniamy wnioski i prowadzimy klienta przez cały proces uzyskania dotacji, co pozwala zaoszczędzić nawet do 30-50% kosztów inwestycji.'
        },
        {
            id:7,
            title:'Jakie są koszty instalacji fotowoltaiki lub pompy ciepła?',
            desc:'Koszt instalacji fotowoltaicznej o mocy 6-10 kWp (standardowej dla domu jednorodzinnego) wynosi obecnie 25-40 tys. zł brutto. Pompy ciepła powietrze-woda kosztują od 30 do 60 tys. zł, w zależności od mocy i producenta. Po uwzględnieniu dotacji i ulg podatkowych, realny koszt inwestycji może być niższy nawet o 30-50%. Oferujemy też atrakcyjne finansowanie, pozwalające rozłożyć płatność na raty.'
        },
        {
            id:8,
            title:'Czy instalacja pompy ciepła wymaga przebudowy domu?',
            desc:'Instalacja pompy ciepła zazwyczaj nie wymaga znaczącej przebudowy domu. W przypadku modernizacji istniejącego systemu grzewczego, zwykle wystarczy wymiana źródła ciepła i dostosowanie instalacji. Najlepsze efekty daje połączenie z ogrzewaniem podłogowym, ale pompy ciepła mogą też współpracować z grzejnikami, po ich odpowiednim doborze. Każdą instalację projektujemy indywidualnie, minimalizując zakres niezbędnych prac budowlanych.'
        },
        {
            id:9,
            title:'Jakie są zalety klimatyzacji zasilanej energią odnawialną?',
            desc:'Klimatyzacja zasilana własną energią z fotowoltaiki pozwala na praktycznie bezkosztowe chłodzenie domu latem. Nowoczesne pompy ciepła typu split oferują funkcję chłodzenia, stanowiąc 2w1: ogrzewanie zimą i klimatyzację latem. Zasilanie klimatyzacji energią odnawialną eliminuje wysokie rachunki za prąd w okresie letnim, znacząco redukuje emisję CO2 oraz zapewnia komfort termiczny przez cały rok przy minimalnych kosztach eksploatacji.'
        },
        {
            id:10,
            title:'Czy mogę monitorować wydajność mojej instalacji OZE?',
            desc:'Tak, wszystkie instalowane przez nas systemy OZE wyposażamy w zaawansowane systemy monitoringu online. Dzięki specjalnym aplikacjom możesz na bieżąco śledzić produkcję energii, zużycie, oszczędności oraz wykrywać ewentualne anomalie w pracy instalacji. Systemy monitoringu pomagają optymalizować zużycie energii, maksymalizować autokonsumpcję i wcześnie wykrywać potencjalne problemy, zanim wpłyną na wydajność instalacji.'
        },
    ]
    return(
        <>
        <div id="faq" className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <h2 className="title mb-3">Najczęściej Zadawane Pytania o Fotowoltaikę i Pompy Ciepła</h2>
                    <p className="text-muted mx-auto para-desc mb-0">Oferujemy kompleksowe rozwiązania w zakresie odnawialnych źródeł energii - od instalacji fotowoltaicznych po pompy ciepła. Dowiedz się więcej o naszych usługach, dotacjach i jak możemy pomóc Ci zaoszczędzić na rachunkach za energię dzięki zielonym rozwiązaniom!</p>
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