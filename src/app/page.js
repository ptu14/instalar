import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import Partners from "./components/partners";
import Faq from "./components/faq";
import Process from "./components/process";
import KomplexFooter from "./components/footer/komplexFooter";
import ContactForm from "./components/contact-form/contact-form";

import { aboutData } from "./data/business";
import HeroStatic from "@/app/components/business/heroStatic";
import ReviewsCarousel from "@/app/components/google-reviews/ReviewsCarousel";

import { AiOutlineCheckCircle } from "react-icons/ai";

export default function IndexBusiness() {
    return (
        <>
            <h1 style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>Komplex System - Instalacje Fotowoltaiczne, Pompy Ciepła, Magazyny Energii i Dotacje Mój Prąd</h1>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
            <HeroStatic />
            <section className="first-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 order-1 order-md-2">
                            <div className="features-absoluteTwo">
                                <div className="position-relative z-1">
                                    <Image src='/images/bus.webp' width={0} height={0} sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow"
                                        alt="Instalacja fotowoltaiczna i pompy ciepła - profesjonalny montaż" />
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
                                                <Icon className="icon icon-accent h1 d-block mb-3" />
                                                <Link href={item.link}
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
                <div className="row justify-content-center text-center px-5 mb-5">
                    <h2 className="my-1">Jesteśmy autoryzowanym salonem firmy <span style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', padding: '0', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>Daikin</span> <Image src='/images/partners/daikin.svg'
                        width={0} height={0} sizes="100vw"
                        style={{
                            width: '200px',
                            height: 'auto'
                        }}
                        className="img-fluid d-inline-flex"
                        alt="Logo partnera Daikin" /></h2>
                </div>
            </div>
            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Co mówią o nas klienci?</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Zaufanie naszych klientów jest dla nas najważniejsze. Sprawdź opinie o naszych realizacjach.</p>
                            </div>
                        </div>
                    </div>
                    <ReviewsCarousel />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <Image src='/images/monter.webp' width={0} height={0} sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow" alt="Monter pomp ciepła i instalacji fotowoltaicznych" />
                        </div>

                        <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h2 className="title fw-semibold mb-3">Profesjonalny Montaż Instalacji: Pompy Ciepła i Fotowoltaika</h2>
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
                                            className="align-middle" /></span>
                                        Doświadczenie w instalacjach fotowoltaicznych, pompach ciepła i systemach
                                        rekuperacji
                                    </li>
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle" /></span>
                                        Profesjonalizm i precyzja na każdym etapie montażu
                                    </li>
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle" /></span>
                                        Gwarancja jakości i bezpieczeństwa
                                    </li>
                                    <li className="mb-0">
                                        <span className="text-dark h5 me-2"><AiOutlineCheckCircle
                                            className="align-middle" /></span>
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
                        <h2 className="mb-5 text-center text-balance">Najlepsze Komponenty dla Twojej Instalacji Fotowoltaicznej i Pompy Ciepła</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <Partners />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title  text-center">
                                <h2 className="title mb-3">Jak rozpocząć współpracę?</h2>
                            </div>
                        </div>
                    </div>

                    <Process icon={false} />

                </div>
            </section>
            <section className="section" id="kontakt">
                <div className="container-fluid md-contact-form">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="row justify-content-center py-8 ">
                                <div className="col-lg-7 my-2 py-5">
                                    <ContactForm
                                        title="Zostaw swój numer telefonu, a my skontaktujemy się z Tobą w ciągu godziny!"
                                        description="Zyskaj niezależność energetyczną i sprawdź, ile możesz zaoszczędzić dzięki fotowoltaice i pompom ciepła. Otrzymaj informacje o aktualnych dotacjach z programów 'Mój Prąd' i 'Czyste Powietrze'."
                                        subject="Nowa prośba o kontakt - Strona główna"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-4">
                <Faq />
            </section>

            <section className="section mt-4 pb-0">
                <KomplexFooter />
            </section>
        </>
    )
}