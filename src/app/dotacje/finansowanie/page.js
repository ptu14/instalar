import React,  from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import {AiOutlineCheckCircle} from "react-icons/ai";

export default function Finansowanie() {

    const opcjeFinansowania = [
        {
            title: "Pożyczka na OZE BGK",
            description: "Specjalna pożyczka dla mieszkańców Małopolski na inwestycje w odnawialne źródła energii. Pomagamy w składaniu wniosków i doradzamy w wyborze najlepszego rozwiązania.",
            image: "/images/bgk.png",
            features: [
                "Do 250 000 zł na okres 15 lat",
                "Stałe oprocentowanie 0%",
                "Możliwość umorzenia do 50% kwoty pożyczki",

            ],
            szczegoly: {
                maxMoc: "20 kWe dla instalacji fotowoltaicznych i wiatrowych",
                maxMocCieplo: "30 kWt dla pomp ciepła i kotłów na biomasę",
                maxMocKolektory: "40 kWh dla magazynów energii",
                beneficjenci: "Właściciele budynków jednorodzinnych nowych i modernizowanych",
                budynki: "Wolnostojące, bliźniacze, szeregowe lub grupowe"
            }
        },
        {
            title: "Dotacje lokalne",
            description: "Profesjonalne doradztwo i pomoc w przygotowaniu dokumentacji do lokalnych dotacji gminnych. Zapewniamy kompleksową obsługę formalności związanych z pozyskaniem finansowania.",
            image: "/images/wniosek.jpg",
            features: [
                "Analiza dokumentacji",
                "Pomoc w wypełnianiu wniosków",
                "Doradztwo w wyborze najlepszej oferty",
                "Wsparcie na każdym etapie realizacji"
            ]
        },
        {
            title: "Inne opcje finansowania",
            description: "Oferujemy dostęp do szerokiej gamy produktów finansowych, w tym kredytów i leasingu. Pomagamy wybrać najlepsze rozwiązanie dopasowane do Twoich potrzeb.",
            image: "/images/finansowanie.jpg",
            features: [
                "Kredyty na OZE",
                "Leasing sprzętu",
                "Elastyczne formy płatności"
            ]
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Klient',
                    phone: phone,
                    email: 'brak@email.com',
                    subject: 'Nowa prośba o kontakt - Finansowanie',
                    comments: `Nowa prośba o kontakt telefoniczny. Numer telefonu: ${phone}`
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setPhone('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

            <section className="first-section section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Finansowanie inwestycji w OZE</h4>
                                <p className="text-muted">Pomagamy w pozyskaniu finansowania i składaniu wniosków o dofinansowanie</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {opcjeFinansowania.map((opcja, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card border-0 shadow rounded h-100">
                                    <div className="position-relative" style={{ height: "200px" }}>
                                        <Image
                                            src={opcja.image}
                                            fill={true}
                                            style={{ objectFit: "cover" }}
                                            className="rounded-top"
                                            alt={opcja.title}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{opcja.title}</h5>
                                        <p className="text-muted">{opcja.description}</p>
                                        <ul className="list-unstyled text-muted mb-0">
                                            {opcja.features.map((feature, idx) => (
                                                <li key={idx} className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle"/>
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        {opcja.szczegoly && (
                                            <div className="mt-4">
                                                <h6 className="mb-3">Szczegóły programu:</h6>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">
                                                        <strong>Maksymalna moc instalacji:</strong>
                                                        <ul className="list-unstyled ms-3">
                                                            <li>• {opcja.szczegoly.maxMoc}</li>
                                                            <li>• {opcja.szczegoly.maxMocCieplo}</li>
                                                            <li>• {opcja.szczegoly.maxMocKolektory}</li>
                                                        </ul>
                                                    </li>
                                                    <li className="mb-2">
                                                        <strong>Beneficjenci:</strong> {opcja.szczegoly.beneficjenci}
                                                    </li>
                                                    <li className="mb-2">
                                                        <strong>Rodzaje budynków:</strong> {opcja.szczegoly.budynki}
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="section-title">
                                <h4 className="title mb-3">Co można sfinansować?</h4>
                                <div className="card border-0 shadow rounded">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5 className="mb-3">Instalacje wytwarzające energię elektryczną:</h5>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Mikroinstalacje fotowoltaiczne
                                                    </li>
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Elektrownie wiatrowe
                                                    </li>
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Instalacje hybrydowe
                                                    </li>
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Magazyny energii
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <h5 className="mb-3">Instalacje wytwarzające ciepło:</h5>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Pompy ciepła
                                                    </li>
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Kotły na biomasę
                                                    </li>
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Kolektory słoneczne
                                                    </li>
                                                    <li className="mb-3">
                                                        <span className="text-dark h5 me-2">
                                                            <AiOutlineCheckCircle className="align-middle"/>
                                                        </span>
                                                        Magazyny ciepła
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="text-center">
                                <h4 className="title mb-3">Chcesz skorzystać z finansowania?</h4>
                                <p className="text-muted mb-4">Skontaktuj się z nami, a pomożemy Ci w wyborze najlepszego rozwiązania i przygotowaniu wniosku</p>
                                <ContactForm 
                                    title="Zostaw swój numer telefonu"
                                    description="Skontaktujemy się z Tobą i pomożemy w wyborze najlepszego rozwiązania finansowego"
                                    subject="Nowa prośba o kontakt - Finansowanie"
                                />
                            </div>
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