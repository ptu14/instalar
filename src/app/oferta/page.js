import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar2 from "../components/navbar/navbar";
import KomplexFooter from "../components/footer/komplexFooter";
import {AiOutlineCheckCircle} from "react-icons/ai";
import ContactForm from "@/app/components/contact-form/contact-form";

export default function Oferta() {
    const uslugi = [
        {
            title: "Pompy Ciepła",
            description: "Oferujemy profesjonalny montaż pomp ciepła różnych typów (powietrze-powietrze, powietrze-woda). Pomagamy w doborze odpowiedniego urządzenia i zapewniamy kompleksową obsługę instalacji.",
            image: "/images/pompa-ciepla.jpg",
            link: "/oferta/pompy-ciepla"
        },
        {
            title: "Fotowoltaika",
            description: "Instalujemy nowoczesne systemy fotowoltaiczne, które pozwolą Ci produkować własną energię elektryczną. Oferujemy doradztwo w zakresie doboru mocy instalacji i pomagamy w uzyskaniu dotacji.",
            image: "/images/fotowoltaika.jpg",
            link: "/oferta/fotowoltaika"
        },
        {
            title: "Magazyny Energii",
            description: "Rozwiązania do magazynowania energii elektrycznej, które pozwolą Ci maksymalnie wykorzystać produkowaną energię i zapewnią niezależność energetyczną.",
            image: "/images/magazyn-energii.jpg",
            link: "/oferta/magazyny-energii"
        },
        {
            title: "Pomoc przy Wnioskach o Dofinansowanie OZE",
            description: "Profesjonalne doradztwo i pomoc w przygotowaniu wniosków o dofinansowanie z programów takich jak Mój Prąd, Czyste Powietrze czy ulga termomodernizacyjna.",
            image: "/images/finansowanie.jpg",
            link: "/dotacje"
        },
        {
            title: "Klimatyzacja",
            description: "Projektujemy i montujemy nowoczesne systemy klimatyzacji do domów i obiektów użytkowych. Gwarantujemy komfort termiczny latem i energooszczędne rozwiązania dopasowane do Twoich potrzeb.",
            image: "/images/klimatyzacja.jpg",
            link: "/oferta/klimatyzacja"
        },
        {
            title: "Instalacje Sanitarne",
            description: "Wykonujemy kompleksowe instalacje sanitarne – wodno-kanalizacyjne oraz centralnego ogrzewania, w tym ogrzewanie podłogowe. Zapewniamy fachowe doradztwo i solidne wykonanie.",
            image: "/images/instalacje-sanitarne.jpg",
            link: "/oferta/instalacje-sanitarne"
        }
    ];

    return (
        <>
            <Navbar2 navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
            
            <section className="first-section section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Nasza Oferta</h4>
                                <p className="text-muted">Kompleksowe rozwiązania energetyczne dla Twojego domu</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {uslugi.map((usluga, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <Link href={usluga.link} className="text-decoration-none">
                                    <div className="card features feature-primary h-100 shadow transition-all">
                                        <div className="position-relative" style={{ height: "200px", overflow: "hidden" }}>
                                            <Image
                                                src={usluga.image}
                                                fill={true}
                                                style={{ objectFit: "cover" }}
                                                className="rounded-top"
                                                alt={usluga.title}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">{usluga.title}</h5>
                                            <p className="text-muted">{usluga.description}</p>
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

                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="p-4 bg-white rounded shadow">
                                <h5>Dlaczego my?</h5>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Doświadczeni specjaliści
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Profesjonalny montaż
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle"/>
                                        </span>
                                        Gwarancja na montaż i urządzenia
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ContactForm 
                                title="Chcesz dowiedzieć się więcej?"
                                description="Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną ofertę"
                                subject="Nowa prośba o kontakt - Oferta"
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