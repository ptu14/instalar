import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import regionsData from "../../data/regions.json";

export default function PompyCiepla() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Pompy Ciepła</h4>
                                <p className="text-muted">Nowoczesne i ekologiczne ogrzewanie Twojego domu</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Pompy ciepła to nowoczesne i ekologiczne rozwiązanie grzewcze, które wykorzystuje energię
                                    z otoczenia do ogrzewania domu i wody użytkowej. To rozwiązanie, które znacząco obniża
                                    koszty ogrzewania i jest przyjazne dla środowiska.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Oszczędność na rachunkach za ogrzewanie
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Dofinansowanie z programu Czyste Powietrze
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Ekologiczne rozwiązanie
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Idealne połączenie z fotowoltaiką
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/pompa-ciepla.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Pompa ciepła"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light" id="fotowoltaika">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/fotowoltaika.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Instalacja fotowoltaiczna"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Idealna synergia: Pompa Ciepła + Fotowoltaika</h4>
                                <p className="text-muted">
                                    Połączenie pompy ciepła z instalacją fotowoltaiczną to rozwiązanie, które maksymalizuje
                                    oszczędności. Fotowoltaika produkuje prąd, który zasila pompę ciepła, co pozwala na
                                    ogrzewanie domu praktycznie za darmo. To idealne rozwiązanie dla osób, które chcą
                                    maksymalnie obniżyć rachunki za ogrzewanie.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Zerowe rachunki za ogrzewanie
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Maksymalne wykorzystanie własnej energii
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Ekologiczne rozwiązanie
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Niezależność energetyczna
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="/oferta/fotowoltaika" className="btn btn-primary">
                                        Dowiedz się więcej o fotowoltaice
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Kompleksowe rozwiązanie: Pompa Ciepła + Fotowoltaika + Magazyn Energii</h4>
                                <p className="text-muted">
                                    Połączenie pompy ciepła z fotowoltaiką i magazynem energii to najbardziej efektywne rozwiązanie
                                    dla Twojego domu. Fotowoltaika produkuje prąd, magazyn energii go przechowuje, a pompa ciepła
                                    wykorzystuje do ogrzewania domu i wody. To system, który maksymalizuje oszczędności i zapewnia
                                    pełną niezależność energetyczną.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Zerowe rachunki za prąd i ogrzewanie
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Pełna niezależność energetyczna
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Maksymalne wykorzystanie własnej energii
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Ekologiczne rozwiązanie
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="/oferta/magazyny-energii" className="btn btn-primary">
                                        Dowiedz się więcej o magazynach energii
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/magazyn-energii.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Magazyn energii"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
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
                                    <h5 className="card-title">Certyfikowani instalatorzy</h5>
                                    <p className="text-muted">Zespół wykwalifikowanych specjalistów z uprawnieniami SEP</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Gwarancja</h5>
                                    <p className="text-muted">Długoletnia gwarancja na montaż i urządzenia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Serwis</h5>
                                    <p className="text-muted">Profesjonalny serwis i monitoring instalacji</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Działamy lokalnie w Twoim regionie</h4>
                                <p className="text-muted para-desc mx-auto mb-0">
                                    Sprawdź naszą ofertę dedykowaną dla konkretnych lokalizacji w Małopolsce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                {regionsData.seo_strategy_malopolska.regions.map((region, index) => (
                                    <div key={index} className="col-md-6 mt-4 pt-2">
                                        <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm h-100">
                                            <div className="icon text-primary h4 mb-0 me-3">
                                                <AiOutlineCheckCircle />
                                            </div>
                                            <div className="content">
                                                <Link href={`/oferta/pompy-ciepla/${region.slug}`} className="text-dark h5 title">
                                                    {region.region_name}
                                                </Link>
                                                <p className="text-muted mb-0 text-small mt-1">
                                                    {region.target_cities.slice(0, 3).join(", ")}...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                title="Chcesz dowiedzieć się więcej o pompach ciepła?"
                                description="Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną ofertę"
                                subject="Nowa prośba o kontakt - Pompy Ciepła"
                            />
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