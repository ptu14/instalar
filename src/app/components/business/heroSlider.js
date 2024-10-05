'use client'
import React from 'react';
import Link from 'next/link';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSlider(){
    return(
        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false} showThumbs={false}>
            <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/1.jpg')"}}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">Efektywne Ogrzewanie</h1>
                                        <p className="para-desc mx-auto text-white-50">Pompy ciepła to nowoczesne i ekologiczne rozwiązanie. Oferujemy profesjonalny montaż i serwis dla maksymalnej wydajności.</p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/page-services" className="btn btn-primary">Zobacz Usługi</Link>
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
                                            <h1 className="fw-semibold display-3 text-white title-dark mb-4">Zainwestuj w Słońce</h1>
                                            <p className="para-desc mx-auto text-white-50">Nasze instalacje fotowoltaiczne to krok ku czystej energii i oszczędnościom. Skontaktuj się z nami, aby dowiedzieć się więcej!</p>
                                            <div className="mt-4 pt-2">
                                                <Link href="/page-services" className="btn btn-primary">Zobacz Usługi</Link>
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
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">Dbaj o Przyszłość</h1>
                                        <p className="para-desc mx-auto text-white-50">Inwestycje w odnawialne źródła energii to gwarancja zrównoważonego rozwoju i oszczędności na lata. Zadbaj o swój biznes i środowisko!</p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/page-aboutus" className="btn btn-primary">Dowiedz się więcej</Link>
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