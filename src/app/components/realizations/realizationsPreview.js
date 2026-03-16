'use client'
import React, { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { LuZoomIn } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qAuto } from "@cloudinary/url-gen/qualifiers/quality";

export default function RealizationsPreview({ images = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const cld = new Cloudinary({
        cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'
        }
    });

    const gridImages = images.map(publicId => {
        const img = cld.image(publicId);
        img.resize(fill().width(400).height(300).gravity(autoGravity()));
        img.delivery(format(auto()));
        img.delivery(quality(qAuto()));
        return { id: publicId, cldImg: img };
    });

    const slides = images.map(publicId => {
        const img = cld.image(publicId);
        img.delivery(format(auto()));
        img.delivery(quality(qAuto()));
        return { src: img.toURL() };
    });

    return (
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h2 className="title mb-3">Nasze Realizacje</h2>
                            <p className="text-muted para-desc mx-auto mb-0">
                                Zobacz przykłady naszych instalacji. Każdy projekt realizujemy z dbałością o detale i estetykę.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row g-3 justify-content-center">
                    {gridImages.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-6" key={index}>
                            <div
                                className="card portfolio portfolio-classic border-0 position-relative d-block overflow-hidden rounded shadow-sm"
                                onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="card-body p-0" style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                                    <AdvancedImage
                                        cldImg={item.cldImg}
                                        className="img-fluid"
                                        alt={`Realizacja instalacji OZE nr ${index + 1}`}
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className="overlay"></div>
                                    <div className="pop-icon">
                                        <div className="btn btn-pills btn-icon bg-white text-primary lightbox">
                                            <LuZoomIn className="fea icon-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4 pt-2">
                    <div className="col-12 text-center">
                        <Link href="/realizacje" className="btn btn-primary">
                            Zobacz wszystkie realizacje <BsArrowRight className="align-middle ms-1" />
                        </Link>
                    </div>
                </div>

                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    index={photoIndex}
                    slides={slides}
                />
            </div>
        </section>
    );
}
