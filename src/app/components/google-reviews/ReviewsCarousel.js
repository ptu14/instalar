'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { reviewsData } from '@/app/data/reviews';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsCarousel() {
    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-5"
                >
                    {reviewsData.map((review, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div className="card border-0 shadow rounded-3 h-100 p-4" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className="d-flex align-items-center">
                                        {review.avatar ? (
                                            <Image
                                                src={review.avatar}
                                                alt={review.name}
                                                width={40}
                                                height={40}
                                                className="avatar avatar-small rounded-circle shadow me-3"
                                            />
                                        ) : (
                                            <div className="avatar avatar-small rounded-circle bg-light d-flex align-items-center justify-content-center text-primary fw-bold me-3" style={{ width: '40px', height: '40px' }}>
                                                {review.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <h6 className="mb-0 text-dark">{review.name}</h6>
                                            <small className="text-muted">{review.date}</small>
                                        </div>
                                    </div>
                                    <FcGoogle className="h4 mb-0" />
                                </div>

                                <div className="mb-3 text-warning">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="small" />
                                    ))}
                                </div>

                                <p className="text-muted mb-0 fst-italic">
                                    "{review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
