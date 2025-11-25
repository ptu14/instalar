import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import regionsData from "../../data/regions.json";

export default function MagazynyEnergii() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Magazyny Energii</h4>
                                <p className="text-muted">Maksymalnie wykorzystaj produkowaną energię</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Magazyny energii pozwalają na przechowywanie wyprodukowanej energii elektrycznej i wykorzystanie jej wtedy,
                                    gdy jest najbardziej potrzebna. To idealne rozwiązanie dla osób, które chcą maksymalnie wykorzystać
                                    własną produkcję energii.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
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
                                        Niezależność energetyczna
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Ochrona przed przerwami w dostawie prądu
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Optymalizacja zużycia energii
                                    </li>
                                </ul>
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
                                <h4 className="title mb-3">Idealna synergia: Magazyn Energii + Fotowoltaika</h4>
                                <p className="text-muted">
                                    Połączenie magazynu energii z instalacją fotowoltaiczną to rozwiązanie, które maksymalizuje
                                    wykorzystanie produkowanej energii. Magazyn energii pozwala na przechowywanie nadwyżek
                                    prądu i wykorzystanie ich wtedy, gdy instalacja nie produkuje energii (np. w nocy).
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
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
                                        Niezależność energetyczna
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Ochrona przed przerwami w dostawie prądu
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Optymalizacja zużycia energii
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
                                <h4 className="title mb-3">Kompleksowe rozwiązanie: Magazyn Energii + Fotowoltaika + Pompa Ciepła</h4>
                                <p className="text-muted">
                                    Połączenie magazynu energii z fotowoltaiką i pompą ciepła to najbardziej efektywne rozwiązanie
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
                                    <Link href="/oferta/pompy-ciepla" className="btn btn-primary">
                                        Dowiedz się więcej o pompach ciepła
                                    </Link>
                                </div>
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
                                    <h5 className="card-title">Doświadczenie</h5>
                                    <p className="text-muted">Wieloletnie doświadczenie w montażu systemów magazynowania energii</p>
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
                                    <p className="text-muted">Profesjonalny serwis i monitoring systemu</p>
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
                                title="Chcesz dowiedzieć się więcej o magazynach energii?"
                                description="Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną ofertę"
                                subject="Nowa prośba o kontakt - Magazyny Energii"
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
                                <h4 className="title mb-4">Magazyny Energii w Twoim regionie</h4>
                                <p className="text-muted para-desc mx-auto mb-0">
                                    Sprawdź naszą ofertę dla poszczególnych lokalizacji w Małopolsce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {regionsData.magazyny_energii.regions.map((region) => (
                            <div key={region.slug} className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm h-100 border">
                                    <div className="content">
                                        <Link href={`/oferta/magazyny-energii/${region.slug}`} className="title h5 text-dark d-block mb-0 hover-text-primary">
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