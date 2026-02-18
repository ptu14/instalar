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

    const serviceData = region.services.magazyny_energii;

    return {
        title: `Magazyny Energii ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: serviceData.meta_description || `Profesjonalny montaż magazynów energii ${region.region_locative_phrase}. Bezpłatna wycena i doradztwo.`,
        alternates: {
            canonical: `https://www.komplexsystem.pl/oferta/magazyny-energii/${regionSlug}`,
        },
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        return <div>Region nie znaleziony</div>;
    }

    const serviceData = region.services.magazyny_energii;
    const regionData = { ...region, ...serviceData };

    return <RegionalServicePage region={regionData} serviceName="Magazyny Energii" heroImage="/images/magazyn-energii.jpg" />;
}
