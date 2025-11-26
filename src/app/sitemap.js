import regionsData from "./data/regions.json";

export default function sitemap() {
    const baseUrl = "https://komplexsystem.pl";

    // Static pages
    const staticPages = [
        "",
        "/kontakt",
        "/realizacje",
        "/polityka-prywatnosci",
        "/oferta",
        "/oferta/fotowoltaika",
        "/oferta/pompy-ciepla",
        "/oferta/klimatyzacja",
        "/oferta/magazyny-energii",
        "/oferta/instalacje-sanitarne",
        "/dotacje",
        "/dotacje/czyste-powietrze",
        "/dotacje/finansowanie",
        "/dotacje/moj-prad",
        "/dotacje/moje-cieplo",
        "/blog",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
    }));

    // Dynamic regional pages
    const regionalPages = [];
    const services = [
        "fotowoltaika",
        "pompy-ciepla",
        "klimatyzacja",
        "magazyny-energii",
    ];

    regionsData.forEach((region) => {
        services.forEach((service) => {
            regionalPages.push({
                url: `${baseUrl}/oferta/${service}/${region.slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            });
        });
    });

    return [...staticPages, ...regionalPages];
}
