import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import KomplexFooter from "../footer/komplexFooter";
import ContactForm from "../contact-form/contact-form";
import { AiOutlineCheckCircle, AiOutlineEnvironment } from "react-icons/ai";

export default function RegionalServicePage({ region, serviceName = "Pompy Ciepła", serviceSlug = "pompy-ciepla", heroImage = "/images/pompa-ciepla.jpg" }) {
    const { region_name, target_cities, seo_context, unique_lead, local_challenges, local_benefits, region_genitive, region_locative_phrase, slug } = region;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${serviceName} - ${region_name}`,
        "description": unique_lead,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Komplex System",
            "url": "https://www.komplexsystem.pl",
            "telephone": "+48660969071",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Głogoczów 472",
                "addressLocality": "Głogoczów",
                "postalCode": "32-444",
                "addressCountry": "PL"
            }
        },
        "areaServed": target_cities.map(city => ({
            "@type": "City",
            "name": city
        })),
        "url": `https://www.komplexsystem.pl/oferta/${serviceSlug}/${slug}`
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona główna",
                "item": "https://www.komplexsystem.pl"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Oferta",
                "item": "https://www.komplexsystem.pl/oferta"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": serviceName,
                "item": `https://www.komplexsystem.pl/oferta/${serviceSlug}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": region_name
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero Section */}
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/bg/01.jpg')", backgroundPosition: "center center" }}>
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="pages-heading">
                                <h1 className="title text-white title-dark mb-0"> {serviceName} - {region_name} </h1>
                                <p className="para-desc mx-auto text-white-50 mt-4">{unique_lead}</p>
                            </div>
                            {/* Breadcrumbs UI */}
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-transparent rounded shadow-none mb-0 p-0">
                                    <li className="breadcrumb-item"><Link href="/" className="text-white-50">Strona główna</Link></li>
                                    <li className="breadcrumb-item"><Link href="/oferta" className="text-white-50">Oferta</Link></li>
                                    <li className="breadcrumb-item"><Link href={`/oferta/${serviceSlug}`} className="text-white-50">{serviceName}</Link></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">{region_name}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section with SEO Context and Local Benefits */}
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2 className="title mb-3">Dlaczego wybrać Komplex System {region_locative_phrase || region_name}?</h2>
                                <p className="text-muted mb-0">{seo_context}</p>
                                <div className="mt-4">
                                    <p className="text-muted">
                                        Rozumiemy specyfikę {region_genitive || region_name}. Nasze instalacje są projektowane tak, aby sprostać lokalnym wymaganiom.
                                    </p>
                                    <ul className="list-unstyled text-muted mb-0">
                                        {local_benefits && local_benefits.map((benefit, index) => (
                                            <li key={index} className="mb-3">
                                                <span className="text-dark h5 me-2">
                                                    <AiOutlineCheckCircle className="align-middle" />
                                                </span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="position-relative">
                                <Image
                                    src={heroImage}
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt={`${serviceName} ${region_name} - montaż i serwis`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Challenges Section */}
            {local_challenges && (
                <section className="section bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="position-relative">
                                    <Image
                                        src={heroImage}
                                        width={600}
                                        height={400}
                                        className="img-fluid rounded shadow"
                                        alt={`${local_challenges.title} - ${serviceName} ${region_name}`}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 order-1 order-md-2">
                                <div className="section-title ms-lg-5">
                                    <h2 className="title mb-3">{local_challenges.title}</h2>
                                    <p className="text-muted mb-0">{local_challenges.content}</p>
                                    <div className="mt-4">
                                        <Link href="/kontakt" className="btn btn-primary">Skonsultuj swój projekt</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Supported Locations Section */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h2 className="title mb-4">{serviceName} - obsługiwane miejscowości {region_locative_phrase || `w regionie ${region_name}`}</h2>
                                <p className="text-muted para-desc mx-auto mb-0">
                                    Działamy aktywnie w następujących miastach i ich okolicach. Zapewniamy szybki dojazd i bezpłatną wycenę.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {target_cities.map((city, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm h-100 border">
                                    <div className="icon text-primary h4 mb-0 me-3">
                                        <AiOutlineEnvironment />
                                    </div>
                                    <div className="content">
                                        <h3 className="h5 title mb-0">{city}</h3>
                                        <p className="text-muted mb-0 text-small">Montaż i serwis {serviceName}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <ContactForm
                                title={`Zamów wycenę - ${serviceName} ${region_locative_phrase || region_name}`}
                                description="Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24h."
                                subject={`Zapytanie z regionu: ${region_name} - ${serviceName}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pb-0">
                <KomplexFooter />
            </section>
        </>
    );
}
