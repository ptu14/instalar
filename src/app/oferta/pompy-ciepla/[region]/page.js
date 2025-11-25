import React from "react";
import { notFound } from "next/navigation";
import regionsData from "../../../data/regions.json";
import RegionalServicePage from "../../../components/regional/RegionalServicePage";

// Helper to find region by slug
const getRegion = (slug) => {
    return regionsData.seo_strategy_malopolska.regions.find(
        (r) => r.slug === slug
    );
};

// Generate static params for all regions (SSG)
export async function generateStaticParams() {
    return regionsData.seo_strategy_malopolska.regions.map((region) => ({
        region: region.slug,
    }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const { region: regionSlug } = await params;
    const region = getRegion(regionSlug);

    if (!region) {
        return {
            title: "Region nie znaleziony",
        };
    }

    const citiesList = region.target_cities.slice(0, 3).join(", ");

    return {
        title: `Pompy Ciepła ${region.region_name} - Montaż i Serwis | omplex System`,
        description: `Profesjonalny montaż pomp ciepła w regionie ${region.region_name} (${citiesList} i okolice). ${region.seo_context} Sprawdź naszą ofertę!`,
        openGraph: {
            title: `Pompy Ciepła ${region.region_name} - Komplex System`,
            description: `Autoryzowany instalator pomp ciepła. Obsługujemy: ${region.target_cities.join(", ")}.`,
        },
    };
}

// Main Page Component
export default async function Page({ params }) {
    const { region: regionSlug } = await params;
    const region = getRegion(regionSlug);

    if (!region) {
        notFound();
    }

    return (
        <RegionalServicePage
            region={region}
            serviceName="Pompy Ciepła"
        />
    );
}
