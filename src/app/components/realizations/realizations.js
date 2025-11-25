'use client'
import React, { useState } from "react";
import Link from "next/link"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { LuZoomIn } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

// Cloudinary SDK imports
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qAuto } from "@cloudinary/url-gen/qualifiers/quality";

export default function Realizations({ initialImages = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    // Use the images passed from the server component
    // If initialImages is empty, we can fallback to demo images or just show nothing
    const imagePublicIds = initialImages.length > 0 ? initialImages : [
        'cld-sample-2', 'cld-sample-3', 'cld-sample-4', 'cld-sample-5',
        'cld-sample', 'cld-sample-2', 'cld-sample-3', 'cld-sample-4', 'cld-sample-5'
    ];

    // Initialize Cloudinary instance
    // Replace 'demo' with your actual cloud name or use env variable
    const cld = new Cloudinary({
        cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'
        }
    });

    // Create Cloudinary Image objects for the grid (thumbnails)
    const gridImages = imagePublicIds.map(publicId => {
        const img = cld.image(publicId);
        // Apply transformations: fill to 300x400 (or any aspect ratio), auto gravity
        img.resize(fill().width(300).height(400).gravity(autoGravity()));
        return {
            id: publicId,
            cldImg: img
        };
    });

    // Create slides for the lightbox (full size images)
    const slides = imagePublicIds.map(publicId => {
        const img = cld.image(publicId);
        // Apply optimization and format
        img.delivery(format(auto()));
        img.delivery(quality(qAuto()));
        return { src: img.toURL() };
    });

    const visibleGridImages = showAll ? gridImages : gridImages.slice(0, 6);

    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <section className="section" id="realizations">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Nasze Realizacje</h4>
                            <p className="text-muted para-desc mx-auto mb-0">
                                Zobacz przykłady naszych instalacji fotowoltaicznych i pomp ciepła.
                                Dbamy o estetykę i najwyższą jakość wykonania.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {visibleGridImages.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card portfolio portfolio-classic border-0 position-relative d-block overflow-hidden rounded">
                                <div className="card-body p-0" onClick={() => handleImageClick(index)} style={{ cursor: 'pointer' }}>
                                    {/* Use AdvancedImage from Cloudinary SDK */}
                                    <AdvancedImage
                                        cldImg={item.cldImg}
                                        className="img-fluid"
                                        alt="Realizacja"
                                        style={{ width: '100%', height: 'auto' }}
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

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            {!showAll && imagePublicIds.length > 6 && (
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="btn btn-outline-primary me-2"
                                >
                                    Zobacz wszystkie realizacje <BsArrowRight className="align-middle" />
                                </button>
                            )}

                            <Link href="/kontakt" className="btn btn-primary">
                                Bezpłatna wycena <BsArrowRight className="align-middle" />
                            </Link>
                        </div>
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
