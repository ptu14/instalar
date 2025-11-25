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

    const serviceData = region.services.klimatyzacja;

    return {
        title: `Klimatyzacja ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: `Profesjonalny montaż klimatyzacji w regionie ${region.region_name}. ${serviceData.unique_lead.substring(0, 150)}...`,
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        return <div>Region nie znaleziony</div>;
    }

    const serviceData = region.services.klimatyzacja;
    const regionData = { ...region, ...serviceData };

    return <RegionalServicePage region={regionData} serviceName="Klimatyzacja" heroImage="/images/klimatyzacja.jpg" />;
}
