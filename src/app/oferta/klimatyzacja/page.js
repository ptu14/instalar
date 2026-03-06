import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import regionsData from "../../data/regions.json";
import Link from "next/link";

export const metadata = {
    title: 'Klimatyzacja – Montaż Klimatyzacji Domowej i Firmowej | Komplex System',
    description: 'Profesjonalny montaż klimatyzacji split i multi-split w Małopolsce. Chłodzenie latem, dogrzewanie zimą. Energooszczędne urządzenia klasy A+++. Bezpłatna wycena i serwis.',
    alternates: { canonical: 'https://www.komplexsystem.pl/oferta/klimatyzacja' },
};

export default function Klimatyzacja() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero — pełna szerokość */}
            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Klimatyzacja</h4>
                                <p className="text-muted">Profesjonalny montaż klimatyzacji w domach i firmach w Małopolsce</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Montujemy nowoczesne systemy klimatyzacyjne typu split i multi-split, które zapewniają komfortową
                                    temperaturę przez cały rok. Nasze instalacje nie tylko chłodzą latem, ale także skutecznie
                                    dogrzewają pomieszczenia w okresach przejściowych — działając na zasadzie pompy ciepła powietrze-powietrze.
                                </p>
                                <p className="text-muted">
                                    Dobieramy urządzenia renomowanych marek o najwyższej klasie energetycznej A+++, co przekłada się na
                                    niskie koszty eksploatacji. Każda instalacja obejmuje dobór mocy chłodniczej do powierzchni
                                    pomieszczenia, profesjonalny montaż jednostek wewnętrznych i zewnętrznych oraz pełne uruchomienie systemu
                                    z konfiguracją sterowania.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Chłodzenie i ogrzewanie w jednym urządzeniu
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Czyste, przefiltrowane powietrze i filtracja antyalergiczna
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Cicha praca od 19 dB i sterowanie przez Wi-Fi
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Energooszczędność klasy A+++ i niskie koszty eksploatacji
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/klimatyzacja.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Montaż klimatyzacji split w domu w Małopolsce"
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
                                title="Zamów bezpłatną wycenę klimatyzacji"
                                description="Nasz technik oddzwoni w ciągu 24h i doradzi optymalne rozwiązanie"
                                subject="Nowa prośba o kontakt - Klimatyzacja"
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
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="section-title mb-4">
                                    <h4 className="title mb-3">Dlaczego warto wybrać naszą firmę?</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mt-4">
                                        <div className="card features feature-primary h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Doświadczenie</h5>
                                                <p className="text-muted">
                                                    Wieloletnie doświadczenie w montażu systemów klimatyzacyjnych dla domów, mieszkań
                                                    i obiektów komercyjnych. Posiadamy certyfikaty F-gazowe uprawniające do pracy
                                                    z czynnikami chłodniczymi i regularnie szkolimy się u producentów urządzeń.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <div className="card features feature-primary h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Gwarancja</h5>
                                                <p className="text-muted">
                                                    Udzielamy wieloletniej gwarancji na montaż oraz urządzenia. Gwarancja obejmuje
                                                    zarówno jednostki wewnętrzne, jak i zewnętrzne oraz wszystkie elementy instalacji
                                                    chłodniczej — rury, złączki i okablowanie sterujące.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <div className="card features feature-primary h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">Serwis</h5>
                                                <p className="text-muted">
                                                    Zapewniamy kompleksowy serwis klimatyzacji — od regularnych przeglądów
                                                    i czyszczenia filtrów, po naprawy gwarancyjne i pogwarancyjne. Szybki czas
                                                    reakcji serwisowej na terenie całej Małopolski.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Linki regionalne */}
                            <div>
                                <div className="section-title mb-4">
                                    <h4 className="title mb-3">Klimatyzacja w Twoim regionie</h4>
                                    <p className="text-muted">
                                        Sprawdź naszą ofertę dla poszczególnych lokalizacji w Małopolsce.
                                    </p>
                                </div>
                                <div className="row">
                                    {regionsData.map((region) => (
                                        <div key={region.slug} className="col-md-6 mt-3">
                                            <div className="d-flex align-items-center p-3 bg-light rounded h-100">
                                                <div className="content">
                                                    <Link href={`/oferta/klimatyzacja/${region.slug}`} className="title h5 text-dark d-block mb-0 hover-text-primary">
                                                        {region.region_name}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Prawa kolumna — sticky formularz (tylko desktop) */}
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="sticky-bar">
                                <ContactForm
                                    title="Zamów bezpłatną wycenę klimatyzacji"
                                    description="Nasz technik oddzwoni w ciągu 24h i doradzi optymalne rozwiązanie"
                                    subject="Nowa prośba o kontakt - Klimatyzacja"
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
