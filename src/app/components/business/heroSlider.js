'use client'
import React from 'react';
import Link from 'next/link';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSlider(){
    return(
        <section className="home-slider position-relative">
            <Carousel 
                showArrows={false} 
                selectedItem={false} 
                infiniteLoop={true} 
                autoPlay={true} 
                interval={3000} 
                showStatus={false} 
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
            >
            <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/1.jpg')"}}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h2 className="fw-semibold display-3 text-white title-dark mb-4">Efektywne Pompy Ciepła</h2>
                                        <p className="para-desc mx-auto text-white">Oszczędzaj do 75% na ogrzewaniu dzięki pompom ciepła. Profesjonalny montaż z dofinansowaniem z programu Czyste Powietrze. Ciepły dom bez wysokich rachunków!</p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/oferta" className="btn btn-primary">Poznaj Ofertę</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/2.jpg')"}}>
                            <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="title-heading text-center">
                                            <h2 className="fw-semibold display-3 text-white title-dark mb-4">Fotowoltaika z Dotacją</h2>
                                            <p className="para-desc mx-auto text-white">Zyskaj niezależność energetyczną dzięki instalacji fotowoltaicznej. Dostępne dotacje z programu Mój Prąd 6.0. Zmniejsz rachunki za prąd nawet o 90%!</p>
                                            <div className="mt-4 pt-2">
                                                <Link href="/dotacje" className="btn btn-primary">Sprawdź Dotacje</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/3.webp')"}}>
                            <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="title-heading text-center">
                                        <h2 className="fw-semibold display-3 text-white title-dark mb-4">Kompleksowe Instalacje OZE</h2>
                                        <p className="para-desc mx-auto text-white">Fotowoltaika, pompy ciepła i magazyny energii w jednym miejscu. Zapewniamy pełną obsługę - od projektu po uzyskanie dotacji. Zainwestuj w przyszłość z Instalar Energy!</p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/kontakt" className="btn btn-primary">Bezpłatna Konsultacja</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </section>
    )
}