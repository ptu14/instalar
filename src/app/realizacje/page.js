import React from "react";
import Navbar from "../components/navbar/navbar";
import KomplexFooter from "../components/footer/komplexFooter";
import Realizations from "../components/realizations/realizations";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

async function getImages() {
    try {
        const results = await cloudinary.search
            .expression('folder:realizacje AND resource_type:image')
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute();
        return results.resources.map(resource => resource.public_id);
    } catch (error) {
        console.error("Cloudinary Search Error:", error);
        return [];
    }
}

export default async function RealizationsPage() {
    const images = await getImages();

    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <Realizations initialImages={images} />
            <section className="section mt-4 pb-0">
                <KomplexFooter />
            </section>
        </>
    );
}
