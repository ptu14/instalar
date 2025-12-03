"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function Partners() {
    let clientImg = [
        { src: '/images/partners/daikin.svg', alt: 'Daikin' },
        { src: '/images/partners/mitsubishi.webp', alt: 'Mitsubishi' },
        { src: '/images/partners/sigenergy.webp', alt: 'Sigenergy' },
        { src: '/images/partners/gree.webp', alt: 'Gree' },
        { src: '/images/partners/huawei.webp', alt: 'Huawei' },
        { src: '/images/partners/jasolar.webp', alt: 'JA Solar' },
        { src: '/images/partners/panasonic.svg', alt: 'Panasonic' },
        { src: '/images/partners/longi.png', alt: 'LONGi' },
        { src: '/images/partners/sofar.webp', alt: 'Sofar' },
        { src: '/images/partners/trinasolar.jpg', alt: 'Trina Solar' },
        { src: '/images/partners/jinko.png', alt: 'Jinko Solar' },
        { src: '/images/partners/rotenso.webp', alt: 'Rotenso' },
        { src: '/images/partners/deye.webp', alt: 'Deye' },
        { src: '/images/partners/solaredge.webp', alt: 'SolarEdge' },
    ]

    return (
        <div className="container-fluid" style={{ minHeight: '120px' }}>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                }}
                className="partners-carousel"
                style={{ height: '120px' }}
            >
                {clientImg.map((item, index) => {
                    return (
                        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <Image src={item.src} width={0} height={0} sizes="100vw" style={{ width: 'auto', maxHeight: '80px', minHeight: '40px' }} className="img-fluid" alt={item.alt} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}