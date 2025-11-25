'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
    const slides = [
        {
            bgImage: "/images/1.webp",
            title: "Efektywne Pompy Ciepła",
            description: "Oszczędzaj do 75% na ogrzewaniu dzięki pompom ciepła. Profesjonalny montaż z dofinansowaniem z programu Czyste Powietrze. Ciepły dom bez wysokich rachunków!",
            buttonLink: "/oferta",
            buttonText: "Poznaj Ofertę"
        },
        {
            bgImage: "/images/2.webp",
            title: "Fotowoltaika z Dotacją",
            description: "Zyskaj niezależność energetyczną dzięki instalacji fotowoltaicznej. Dostępne dotacje z programu Mój Prąd 6.0. Zmniejsz rachunki za prąd nawet o 90%!",
            buttonLink: "/dotacje",
            buttonText: "Sprawdź Dotacje"
        },
        {
            bgImage: "/images/3.webp",
            title: "Kompleksowe Instalacje OZE",
            description: "Fotowoltaika, pompy ciepła i magazyny energii w jednym miejscu. Zapewniamy pełną obsługę - od projektu po uzyskanie dotacji. Zainwestuj w przyszłość z Komplex System!",
            buttonLink: "/kontakt",
            buttonText: "Bezpłatna Konsultacja"
        }
    ];

    return (
        <section className="home-slider position-relative" style={{ height: '100vh' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="h-100"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="h-100 position-relative">
                        <Image
                            src={slide.bgImage}
                            alt={slide.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            quality={75}
                            priority={index === 0}
                        />
                        <div className="bg-overlay bg-linear-gradient position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}></div>

                        <div className="position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="title-heading text-center">
                                            <h2 className="fw-semibold display-3 text-white title-dark mb-4">{slide.title}</h2>
                                            <p className="para-desc mx-auto text-white">{slide.description}</p>
                                            <div className="mt-4 pt-2">
                                                <Link href={slide.buttonLink} className="btn btn-primary">{slide.buttonText}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}