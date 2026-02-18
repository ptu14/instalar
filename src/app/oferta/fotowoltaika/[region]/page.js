import React from "react";
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

    const serviceData = region.services.fotowoltaika;

    return {
        title: `Fotowoltaika ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: serviceData.meta_description || `Profesjonalny montaż fotowoltaiki ${region.region_locative_phrase}. Bezpłatna wycena i doradztwo.`,
        alternates: {
            canonical: `https://www.komplexsystem.pl/oferta/fotowoltaika/${regionSlug}`,
        },
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        return <div>Region nie znaleziony</div>;
    }

    const serviceData = region.services.fotowoltaika;
    const regionData = { ...region, ...serviceData };

    return <RegionalServicePage region={regionData} serviceName="Fotowoltaika" heroImage="/images/fotowoltaika.jpg" />;
}
