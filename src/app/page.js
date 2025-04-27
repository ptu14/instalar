import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import Partners from "./components/partners";
import Counter from "./components/business/counter";
import Faq from "./components/faq";
import Process from "./components/process";
import KomplexFooter from "./components/footer/komplexFooter";
import ContactForm from "./components/contact-form/contact-form";

import { aboutData } from "./data/business";
import HeroSlider from "@/app/components/business/heroSlider";

import {AiOutlineCheckCircle} from "react-icons/ai";

export default function IndexBusiness(){
    return(
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
            <HeroSlider/>
            <section className="first-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 order-1 order-md-2">
                            <div className="features-absoluteTwo">
                                <div className="position-relative">
                                    <Image src='/images/bus.png' width={0} height={0} sizes="100vw"
                                           style={{width: '100%', height: 'auto'}} className="img-fluid rounded shadow"
                                           alt="Instalacja fotowoltaiczna i pompy ciepła - profesjonalny montaż"/>
                                    <div itemScope itemType="https://schema.org/LocalBusiness"
                                         style={{display: 'none'}}>
                                        <span itemProp="name">Komplex System</span>
                                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                            <span itemProp="streetAddress">Głogoczów 472</span>
                                            <span itemProp="postalCode">32-444</span>
                                            <span itemProp="addressLocality">Głogoczów</span>
                                            <span itemProp="addressCountry">Polska</span>
                                        </div>
                                        <a href="tel:+48785076979" itemProp="telephone">+48 785 076 979</a>
                                        <a itemProp="url" href="https://komplexsystem.pl">https://komplexsystem.pl</a>
                                        <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                                            <meta itemProp="latitude" content="52.2297"/>
                                            <meta itemProp="longitude" content="21.0122"/>
                                        </div>
                                        <div itemProp="openingHoursSpecification" itemScope
                                             itemType="https://schema.org/OpeningHoursSpecification">
                                            <meta itemProp="dayOfWeek"
                                                  content="Monday Tuesday Wednesday Thursday Friday"/>
                                            <meta itemProp="opens" content="09:00"/>
                                            <meta itemProp="closes" content="17:00"/>
                                        </div>
                                        <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
                                            <div itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                                                <meta itemProp="name" content="Instalacje fotowoltaiczne"/>
                                                <meta itemProp="description"
                                                      content="Profesjonalny montaż instalacji fotowoltaicznych z dotacją z programu Mój Prąd"/>
                                            </div>
                                        </div>
                                        <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
                                            <div itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                                                <meta itemProp="name" content="Pompy ciepła"/>
                                                <meta itemProp="description"
                                                      content="Montaż pomp ciepła z dofinansowaniem z programu Czyste Powietrze"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6 order-2 order-md-1">
                            <div className="row">
                                {aboutData.map((item, index) => {
                                    let Icon = item.icon
                                    return (
                                        <div className="col-lg-6 col-12 mb-4 pt-2" key={index}>
                                            <div className="card features feature-primary">
                                                <Icon className="icon icon-accent h1 d-block mb-3"/>
                                                <Link href="/page-single-service"
                                                      className="h5 title text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="container-fluid ">
                <div className="row justify-content-center text-center px-5">
                    <h2 className="my-1">Jesteśmy autoryzowanem salonem firmy <Image src='/images/partners/daikin.svg'
                                                                                     width={0} height={0} sizes="100vw"
                                                                                     style={{
                                                                                         width: '200px',
                                                                                         height: 'auto'
                                                                                     }}
                                                                                     className="img-fluid d-inline-flex"
                                                                                     alt="Logo Daikin"/></h2>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <Image src='/images/monter.png' width={0} height={0} sizes="100vw"
                                   style={{width: '100%', height: 'auto'}} className="img-fluid rounded shadow" alt=""/>
                        </div>

                        <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title fw-semibold mb-3">Nasi monterzy to profesjonaliści!</h4>
                                <p className="text-muted">
                                    Nasz zespół to wykwalifikowani specjaliści z <strong>wieloletnim
                                    doświadczeniem</strong> w
                                    instalacjach elektrycznych oraz wodno-kanalizacyjnych. Dzięki temu każda realizacja
                                    – niezależnie od skali – przebiega sprawnie, bezpiecznie i zgodnie z najwyższymi
                                    standardami branży OZE.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle"/></span>
                                        Doświadczenie w instalacjach fotowoltaicznych, pompach ciepła i systemach
                                        rekuperacji
                                    </li>
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle"/></span>
                                        Profesjonalizm i precyzja na każdym etapie montażu
                                    </li>
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle"/></span>
                                        Gwarancja jakości i bezpieczeństwa
                                    </li>
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle"/></span>
                                        <strong>Czystość i porządek</strong> po każdej instalacji
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <h3 className="mb-5 text-center">Nasze instalacje wykonujemy na najlepszych komponentach</h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <Partners/>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title  text-center">
                                <h4 className="title mb-3">Jak rozpocząć współpracę?</h4>
                            </div>
                        </div>
                    </div>

                    <Process icon={false}/>

                </div>
            </section>
            <section className="section">
                <div className="container-fluid md-contact-form">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="row justify-content-center py-8 ">
                                <div className="col-lg-7 my-2 py-5">
                                    <ContactForm
                                        title="Zostaw swój numer telefonu, a my skontaktujemy się z Tobą w ciągu godziny!"
                                        description="Sprawdź, ile możesz zaoszczędzić dzięki fotowoltaice i pompom ciepła. Otrzymaj informacje o aktualnych dotacjach z programów 'Mój Prąd' i 'Czyste Powietrze'."
                                        subject="Nowa prośba o kontakt - Strona główna"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-4">
                <Faq/>
            </section>

            <section className="section mt-4 pb-0">
                <KomplexFooter/>
            </section>
        </>
    )
}