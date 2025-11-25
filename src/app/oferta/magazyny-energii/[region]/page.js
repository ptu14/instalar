import React from "react";
import regionsData from "../../../data/regions.json";
import RegionalServicePage from "../../../components/regional/RegionalServicePage";

export async function generateStaticParams() {
    return regionsData.magazyny_energii.regions.map((region) => ({
        region: region.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.magazyny_energii.regions.find((r) => r.slug === regionSlug);

    if (!region) {
        return {
            title: "Region nie znaleziony",
        };
    }

    return {
        title: `Magazyny Energii ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: `Profesjonalny montaż magazynów energii w regionie ${region.region_name}. ${region.unique_lead.substring(0, 150)}...`,
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.magazyny_energii.regions.find((r) => r.slug === regionSlug);

    if (!region) {
        return <div>Region nie znaleziony</div>;
    }

    return <RegionalServicePage region={region} serviceName="Magazyny Energii" heroImage="/images/magazyn-energii.jpg" />;
}
