import React from "react";
import regionsData from "../../../data/regions.json";
import RegionalServicePage from "../../../components/regional/RegionalServicePage";

export async function generateStaticParams() {
    return regionsData.fotowoltaika.regions.map((region) => ({
        region: region.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.fotowoltaika.regions.find((r) => r.slug === regionSlug);

    if (!region) {
        return {
            title: "Region nie znaleziony",
        };
    }

    return {
        title: `Fotowoltaika ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: `Profesjonalny montaż instalacji fotowoltaicznych w regionie ${region.region_name}. ${region.unique_lead.substring(0, 150)}...`,
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.fotowoltaika.regions.find((r) => r.slug === regionSlug);

    if (!region) {
        return <div>Region nie znaleziony</div>;
    }

    return <RegionalServicePage region={region} serviceName="Fotowoltaika" heroImage="/images/fotowoltaika.jpg" />;
}
