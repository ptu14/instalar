import React from "react";
import regionsData from "../../../data/regions.json";
import RegionalServicePage from "../../../components/regional/RegionalServicePage";

export async function generateStaticParams() {
    return regionsData.klimatyzacja.regions.map((region) => ({
        region: region.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.klimatyzacja.regions.find((r) => r.slug === regionSlug);

    if (!region) {
        return {
            title: "Region nie znaleziony",
        };
    }

    return {
        title: `Klimatyzacja ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: `Profesjonalny montaż klimatyzacji w regionie ${region.region_name}. ${region.unique_lead.substring(0, 150)}...`,
    };
}

export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.klimatyzacja.regions.find((r) => r.slug === regionSlug);

    if (!region) {
        return <div>Region nie znaleziony</div>;
    }

    return <RegionalServicePage region={region} serviceName="Klimatyzacja" heroImage="/images/klimatyzacja.jpg" />;
}
