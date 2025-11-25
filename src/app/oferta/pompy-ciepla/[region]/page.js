import React from "react";
import { notFound } from "next/navigation";
import regionsData from "../../../data/regions.json";
import RegionalServicePage from "../../../components/regional/RegionalServicePage";


// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const { region: regionSlug } = await params;
    const region = regionsData.find((r) => r.slug === regionSlug);

    if (!region) {
        return {
            title: "Region nie znaleziony",
        };
    }

    const serviceData = region.services.pompy_ciepla;

    return {
        title: `Pompy Ciepła ${region.region_name} - Montaż i Serwis | Komplex System`,
        description: `Profesjonalny montaż pomp ciepła w regionie ${region.region_name}. ${serviceData.unique_lead.substring(0, 150)}...`,
    };
}

// Main Page Component
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
            heroImage="/images/pompa-ciepla.jpg"
        />
    );
}
