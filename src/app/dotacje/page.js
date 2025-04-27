import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import KomplexFooter from "../components/footer/komplexFooter";
import ContactForm from "../components/contact-form/contact-form";
import {AiOutlineCheckCircle} from "react-icons/ai";
import "./styles.css";

export default function Dotacje() {

    const dotacje = [
        {
            title: "Mój Prąd",
            description: "Program dofinansowania instalacji fotowoltaicznych dla gospodarstw domowych. Możesz otrzymać nawet 28 000 zł na montaż instalacji PV.",
            image: "/images/moj-prad.svg",
            link: "/dotacje/moj-prad"
        },
        {
            title: "Czyste Powietrze",
            description: "Program wspierający wymianę źródeł ciepła i termomodernizację budynków jednorodzinnych. Możesz otrzymać do 170 100 zł na inwestycję.",
            image: "/images/czyste-powietrze.webp",
            link: "/dotacje/czyste-powietrze"
        },
        {
            title: "Moje Ciepło",
            description: "Program dofinansowania pomp ciepła dla nowych budynków jednorodzinnych. Możesz otrzymać do 21 000 zł na montaż pompy ciepła.",
            image: "/images/moje-cieplo.jpg",
            link: "/dotacje/moje-cieplo"
        },
        {
            title: "Finansowanie",
            description: "Oferujemy atrakcyjne finansowanie inwestycji w OZE. Sprawdź nasze oferty kredytowe i możliwości rozłożenia płatności na raty.",
            image: "/images/bgk.png",
            link: "/dotacje/finansowanie"
        }
    ];

    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

            <section className="first-section section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Dofinansowanie na OZE</h4>
                                <p className="text-muted">Sprawdź dostępne programy dotacyjne i dofinansowania na
                                    instalacje OZE</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {dotacje.map((dotacja, index) => (
                            <div className="col-lg-6 col-md-6 mb-4" key={index}>
                                <Link href={dotacja.link} className="text-decoration-none">
                                    <div className="card features feature-primary h-100 hover-shadow transition-all">
                                        <div className="position-relative"
                                             style={{height: "120px", overflow: "hidden"}}>
                                            <Image
                                                src={dotacja.image}
                                                fill={true}
                                                style={{objectFit: "contain"}}
                                                className="rounded-top"
                                                alt={dotacja.title}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">{dotacja.title}</h5>
                                            <p className="text-muted">{dotacja.description}</p>
                                            <div className="d-flex align-items-center text-primary">
                                                <span className="me-2">Dowiedz się więcej</span>
                                                <i className="uil uil-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Dlaczego warto skorzystać z dotacji?</h4>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Znaczące oszczędności na inwestycji
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Szybszy zwrot z inwestycji
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Profesjonalna pomoc w przygotowaniu wniosku
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Kompleksowa obsługa formalności
                                    </li>
                                </ul>
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
                                title="Oferujemy pomoc w uzyskaniu Dotacji"
                                description="Skontaktuj się z nami, a przygotujemy dopasowaną ofertę"
                                subject="Nowa prośba o kontakt - Fotowoltaika"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mt-4 pb-0">
                <KomplexFooter/>
            </section>
        </>
    );
}