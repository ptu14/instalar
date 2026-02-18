import React from "react";
import { notFound } from "next/navigation";
import regionsData from "../../../data/regions.json";
import RegionalServicePage from "../../../components/regional/RegionalServicePage";

export async function generateStaticParams() {
    return regionsData.map((region) => ({
        region: region.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        return {
            title: "Region nie znaleziony",
        };
    }

    const serviceData = region.services.pompy_ciepla;
    const title = `Pompy Ciepła ${region.region_name} - Profesjonalny Montaż | Komplex System`;
    const description = serviceData.meta_description || `Profesjonalny montaż pomp ciepła ${region.region_locative_phrase}. Bezpłatna wycena i doradztwo.`;
    const url = `https://www.komplexsystem.pl/oferta/pompy-ciepla/${regionSlug}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            locale: "pl_PL",
            siteName: "Komplex System",
            images: [{ url: "/images/pompa-ciepla.jpg", width: 600, height: 400, alt: `Pompy ciepła ${region.region_name}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/images/pompa-ciepla.jpg"],
        },
    };
}

// Main Page Component
export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        notFound();
    }

    const serviceData = region.services.pompy_ciepla;
    const regionData = { ...region, ...serviceData };

    return (
        <RegionalServicePage
            region={regionData}
            serviceName="Pompy Ciepła"
            serviceSlug="pompy-ciepla"
            heroImage="/images/pompa-ciepla.jpg"
        />
    );
}
