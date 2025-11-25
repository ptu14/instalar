import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import regionsData from "../../data/regions.json";
import Link from "next/link";

export default function Klimatyzacja() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Klimatyzacja</h4>
                                <p className="text-muted">Komfortowa temperatura przez cały rok</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Klimatyzacja to rozwiązanie zapewniające komfortowe warunki w Twoim domu, biurze czy mieszkaniu niezależnie od pory roku. Nowoczesne systemy klimatyzacyjne nie tylko chłodzą, ale także ogrzewają i filtrują powietrze.
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
                                        Czyste i przefiltrowane powietrze
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Cicha praca i nowoczesny design
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Energooszczędność i ekologia
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
                                    alt="Klimatyzacja"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Dlaczego warto wybrać naszą firmę?</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Doświadczenie</h5>
                                    <p className="text-muted">Wieloletnie doświadczenie w montażu systemów klimatyzacyjnych</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Gwarancja</h5>
                                    <p className="text-muted">Długoletnia gwarancja na urządzenia i montaż</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Serwis</h5>
                                    <p className="text-muted">Szybki serwis i kompleksowa obsługa posprzedażowa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <ContactForm
                                title="Chcesz dowiedzieć się więcej o klimatyzacji?"
                                description="Skontaktuj się z nami, a przygotujemy indywidualną ofertę dopasowaną do Twoich potrzeb"
                                subject="Nowa prośba o kontakt - Klimatyzacja"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Klimatyzacja w Twoim regionie</h4>
                                <p className="text-muted para-desc mx-auto mb-0">
                                    Sprawdź naszą ofertę dla poszczególnych lokalizacji w Małopolsce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {regionsData.klimatyzacja.regions.map((region) => (
                            <div key={region.slug} className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm h-100 border">
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
            </section>

            <section className="section mt-4 pb-0">
                <KomplexFooter />
            </section>
        </>
    );
}
