"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function InstalacjeSanitarne() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero — pełna szerokość */}
            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Instalacje Sanitarne</h4>
                                <p className="text-muted">Profesjonalny montaż instalacji wodno-kanalizacyjnych w Małopolsce</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Wykonujemy kompleksowe instalacje sanitarne dla domów jednorodzinnych, budynków wielorodzinnych oraz obiektów
                                    komercyjnych na terenie Małopolski. Nasz zakres obejmuje instalacje wodne, kanalizacyjne, deszczowe oraz
                                    centralnego ogrzewania — od projektu, przez montaż, aż po serwis i konserwację.
                                </p>
                                <p className="text-muted">
                                    Pracujemy zarówno przy budowach od zera, jak i przy remontach oraz modernizacjach istniejących systemów.
                                    Stosujemy sprawdzone materiały renomowanych producentów i realizujemy prace zgodnie z obowiązującymi normami
                                    budowlanymi. Każdą instalację wykonujemy z myślą o trwałości, bezawaryjności i wygodzie użytkowania.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Instalacje wodne, kanalizacyjne i centralnego ogrzewania
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Odwodnienia, systemy deszczowe i drenaże
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Nowoczesne materiały i technologie montażu
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Realizacje dla domów, firm i deweloperów
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/instalacje-sanitarne.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Profesjonalny montaż instalacji sanitarnych w Małopolsce"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formularz mobilny — widoczny tylko na mobile */}
            <section className="section bg-light d-lg-none">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ContactForm
                                title="Zamów bezpłatną wycenę instalacji sanitarnej"
                                description="Nasz specjalista skontaktuje się z Tobą w ciągu 24 godzin"
                                subject="Nowa prośba o kontakt - Instalacje Sanitarne"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Główna treść + sticky sidebar */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        {/* Lewa kolumna — treść */}
                        <div className="col-lg-8">

                            {/* Dlaczego warto? */}
                            <div>
                                <div className="section-title mb-4">
                                    <h4 className="title mb-3">Dlaczego warto wybrać naszą firmę?</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-4">
                                        <div className="card features feature-primary h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Doświadczenie</h5>
                                                <p className="text-muted">
                                                    Wieloletnie doświadczenie w branży instalacyjnej potwierdzone setkami zrealizowanych
                                                    projektów. Nasz zespół posiada pełne uprawnienia budowlane i regularnie uczestniczy
                                                    w szkoleniach z zakresu nowych technologii instalacyjnych.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <div className="card features feature-primary h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Jakość</h5>
                                                <p className="text-muted">
                                                    Stosujemy wyłącznie materiały renomowanych producentów z pełną certyfikacją.
                                                    Każda instalacja jest wykonywana zgodnie z obowiązującymi normami budowlanymi
                                                    i poddawana próbom ciśnieniowym przed odbiorem.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <div className="card features feature-primary h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Wsparcie</h5>
                                                <p className="text-muted">
                                                    Kompleksowe doradztwo na każdym etapie — od doboru materiałów, przez projekt,
                                                    aż po serwis pogwarancyjny. Zapewniamy szybki czas reakcji serwisowej
                                                    i pomoc w sytuacjach awaryjnych.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Prawa kolumna — sticky formularz (tylko desktop) */}
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="sticky-bar">
                                <ContactForm
                                    title="Zamów bezpłatną wycenę instalacji sanitarnej"
                                    description="Nasz specjalista skontaktuje się z Tobą w ciągu 24 godzin"
                                    subject="Nowa prośba o kontakt - Instalacje Sanitarne"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-4 pb-0">
                <KomplexFooter />
            </section>
        </>
    );
}
