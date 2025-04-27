"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1200, min: 992 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 992, min: 768 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 576 },
            items: 3
        },
        smallMobile: {
            breakpoint: { max: 576, min: 0 },
            items: 2
        }
    };

    return(
        <div className="container-fluid">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4500}
                arrows={false}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="partners-carousel"
                removeArrowOnDeviceType={["tablet", "mobile", "smallMobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {clientImg.map((item,index)=>{
                    return(
                        <div className="text-center" key={index}>
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:'auto', maxHeight:'80px'}} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}