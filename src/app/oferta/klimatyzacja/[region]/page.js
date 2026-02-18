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

    const serviceData = region.services.klimatyzacja;
    const title = `Klimatyzacja ${region.region_name} - Montaż i Serwis Klimatyzacji | Komplex System`;
    const description = serviceData.meta_description || `Profesjonalny montaż klimatyzacji ${region.region_locative_phrase}. Bezpłatna wycena i doradztwo.`;
    const url = `https://www.komplexsystem.pl/oferta/klimatyzacja/${regionSlug}`;

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
            images: [{ url: "/images/klimatyzacja.jpg", width: 600, height: 400, alt: `Klimatyzacja ${region.region_name}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/images/klimatyzacja.jpg"],
        },
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        notFound();
    }

    const serviceData = region.services.klimatyzacja;
    const regionData = { ...region, ...serviceData };

    return (
        <RegionalServicePage
            region={regionData}
            serviceName="Klimatyzacja"
            serviceSlug="klimatyzacja"
            heroImage="/images/klimatyzacja.jpg"
        />
    );
}
