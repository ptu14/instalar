"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function Partners(){
    let clientImg = [
        '/images/partners/daikin.svg',
        '/images/partners/rotenso.png',
        '/images/partners/gree.png',
        '/images/partners/huawei.png',
        '/images/partners/jasolar.png',
        '/images/partners/panasonic.svg',
        '/images/partners/longi.png',
        '/images/partners/sofar.png',
        '/images/partners/trinasolar.jpg',
        '/images/partners/jinko.png',
        '/images/partners/deye.webp',
        '/images/partners/solaredge.webp',
        '/images/partners/foxess.png',
    ]

    return(
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
                {clientImg.map((item,index)=>{
                    return(
                        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <Image src={item} width={0} height={0} sizes="100vw" style={{width:'auto', maxHeight:'80px', minHeight:'40px'}} className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}