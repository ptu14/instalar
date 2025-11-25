import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import KomplexFooter from "../footer/komplexFooter";
import ContactForm from "../contact-form/contact-form";
import { AiOutlineCheckCircle, AiOutlineEnvironment, AiOutlineInfoCircle } from "react-icons/ai";

export default function RegionalServicePage({ region, serviceName = "Pompy Ciepła", heroImage = "/images/pompa-ciepla.jpg" }) {
    const { region_name, target_cities, seo_context, unique_lead, local_challenges, local_benefits, region_genitive, region_locative_phrase } = region;

    return (
        <>
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
                                <h4 className="title mb-3">Dlaczego wybrać Komplex System {region_locative_phrase || region_name}?</h4>
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
                                    alt={`${serviceName} ${region_name}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Challenges Section (New Unique Content) */}
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
                                        alt="Wyzwania lokalne"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 order-1 order-md-2">
                                <div className="section-title ms-lg-5">
                                    <h4 className="title mb-3">{local_challenges.title}</h4>
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
                                <h4 className="title mb-4">Obsługiwane miejscowości w regionie {region_name}</h4>
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
                                        <h5 className="title mb-0">{city}</h5>
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
                                title={`Zamów wycenę w: ${region_name}`}
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
