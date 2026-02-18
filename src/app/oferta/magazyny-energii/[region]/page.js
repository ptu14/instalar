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

    const serviceData = region.services.magazyny_energii;
    const title = `Magazyny Energii ${region.region_name} - Montaż i Doradztwo | Komplex System`;
    const description = serviceData.meta_description || `Profesjonalny montaż magazynów energii ${region.region_locative_phrase}. Bezpłatna wycena i doradztwo.`;
    const url = `https://www.komplexsystem.pl/oferta/magazyny-energii/${regionSlug}`;

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
            images: [{ url: "/images/magazyn-energii.jpg", width: 600, height: 400, alt: `Magazyny energii ${region.region_name}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/images/magazyn-energii.jpg"],
        },
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        notFound();
    }

    const serviceData = region.services.magazyny_energii;
    const regionData = { ...region, ...serviceData };

    return (
        <RegionalServicePage
            region={regionData}
            serviceName="Magazyny Energii"
            serviceSlug="magazyny-energii"
            heroImage="/images/magazyn-energii.jpg"
        />
    );
}
