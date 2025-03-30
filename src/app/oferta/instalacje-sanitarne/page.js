import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function InstalacjeSanitarne() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Instalacje Sanitarne</h4>
                                <p className="text-muted">Kompleksowe rozwiązania wodno-kanalizacyjne dla Twojego domu i firmy</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Oferujemy projektowanie, montaż oraz serwis instalacji sanitarnych – wodnych, kanalizacyjnych i deszczowych.
                                    Pracujemy z zachowaniem najwyższych standardów, korzystając z nowoczesnych technologii i sprawdzonych materiałów.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Instalacje wodne i kanalizacyjne
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Odwodnienia i systemy deszczowe
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Nowoczesne rozwiązania technologiczne
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Profesjonalny montaż i serwis
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
                                    alt="Instalacje sanitarne"
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
                                    <p className="text-muted">Wieloletnie doświadczenie w branży instalacyjnej</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Jakość</h5>
                                    <p className="text-muted">Wysokiej jakości materiały i sprawdzone rozwiązania</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="card features feature-primary h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Wsparcie</h5>
                                    <p className="text-muted">Kompleksowe doradztwo i obsługa techniczna</p>
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
                            <div className="p-4 bg-white rounded shadow">
                                <div className="text-center">
                                    <h5>Potrzebujesz instalacji sanitarnej?</h5>
                                    <p className="text-muted">Skontaktuj się z nami, a przygotujemy dopasowaną ofertę</p>
                                    <form>
                                        <input name="phone" id="phone" type="tel" className="form-control mb-3" placeholder="Twój numer telefonu:" required />
                                        <button type="submit" className="btn btn-primary">Bezpłatna wycena</button>
                                    </form>
                                </div>
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
