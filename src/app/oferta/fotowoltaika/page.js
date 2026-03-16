import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiAward, FiShield, FiTool } from "react-icons/fi";
import ContactForm from "@/app/components/contact-form/contact-form";
import regionsData from "../../data/regions.json";

export const metadata = {
    title: 'Fotowoltaika – Montaż Paneli Słonecznych w Małopolsce | Komplex System',
    description: 'Profesjonalny montaż instalacji fotowoltaicznych w Małopolsce. Produkuj własną energię i oszczędzaj na rachunkach. Dotacja Mój Prąd do 28 000 zł. Bezpłatna wycena.',
    alternates: { canonical: 'https://www.komplexsystem.pl/oferta/fotowoltaika' },
};

export default function Fotowoltaika() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero — pełna szerokość */}
            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Fotowoltaika</h4>
                                <p className="text-muted">Profesjonalny montaż instalacji fotowoltaicznych w Małopolsce</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Instalacja fotowoltaiczna to sprawdzony sposób na produkcję własnej energii elektrycznej ze słońca
                                    i realne obniżenie rachunków za prąd. Nowoczesne panele słoneczne montowane na dachu Twojego domu
                                    pozwalają <strong>uniezależnić się od rosnących cen energii</strong> i czerpać korzyści z systemu net-billing, który
                                    umożliwia rozliczanie nadwyżek produkowanej energii z zakładem energetycznym.
                                </p>
                                <p className="text-muted">
                                    Jako doświadczony instalator fotowoltaiki w Małopolsce oferujemy kompleksową obsługę — od bezpłatnej
                                    analizy zużycia energii i doboru mocy instalacji, przez montaż paneli i falownika, aż po zgłoszenie
                                    do operatora sieci. Nasi klienci mogą skorzystać z <strong>dotacji Mój Prąd pokrywającej nawet do 28 000 zł</strong> kosztów instalacji.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Realna oszczędność na rachunkach za prąd
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        <strong>Dofinansowanie z programu Mój Prąd do 28 000 zł</strong>
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Rozliczanie nadwyżek energii w systemie net-billing
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Ekologiczna energia — bez emisji CO₂
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/fotowoltaika.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Montaż instalacji fotowoltaicznej na dachu domu w Małopolsce"
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
                                title="Zamów bezpłatną wycenę fotowoltaiki"
                                description="Nasz technik oddzwoni w ciągu 24h i policzy, ile możesz zaoszczędzić"
                                subject="Nowa prośba o kontakt - Fotowoltaika"
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
                                <div className="row g-2">
                                    <div className="col-12">
                                        <div className="d-flex align-items-start p-3 bg-light rounded">
                                            <div className="icon text-primary h3 mb-0 me-3">
                                                <FiAward />
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Certyfikowani instalatorzy</h5>
                                                <p className="text-muted mb-0 small">
                                                    Zespół wykwalifikowanych specjalistów z uprawnieniami SEP i certyfikatami
                                                    producenckich szkoleń. Każdy montaż wykonujemy zgodnie z wytycznymi producenta
                                                    paneli i falowników, co gwarantuje pełną wydajność instalacji.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex align-items-start p-3 bg-light rounded">
                                            <div className="icon text-primary h3 mb-0 me-3">
                                                <FiShield />
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Gwarancja</h5>
                                                <p className="text-muted mb-0 small">
                                                    Wieloletnia gwarancja na montaż i urządzenia — <strong>do 25 lat gwarancji wydajności</strong> na panele słoneczne i <strong>do 12 lat na falownik</strong>. Dodatkowo udzielamy 5-letniej
                                                    gwarancji na wykonane prace montażowe.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex align-items-start p-3 bg-light rounded">
                                            <div className="icon text-primary h3 mb-0 me-3">
                                                <FiTool />
                                            </div>
                                            <div>
                                                <h5 className="mb-1">Serwis</h5>
                                                <p className="text-muted mb-0 small">
                                                    Profesjonalny serwis i monitoring instalacji fotowoltaicznej. Oferujemy zdalne
                                                    monitorowanie produkcji energii, regularne przeglądy oraz szybką reakcję
                                                    serwisową na terenie całej Małopolski.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Linki regionalne */}
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="section-title mb-4">
                                    <h4 className="title mb-3">Fotowoltaika w Twoim regionie</h4>
                                    <p className="text-muted">
                                        Sprawdź naszą ofertę dla poszczególnych lokalizacji w Małopolsce.
                                    </p>
                                </div>
                                <div className="row">
                                    {regionsData.map((region) => (
                                        <div key={region.slug} className="col-md-6 mt-3">
                                            <div className="d-flex align-items-center p-3 bg-light rounded h-100">
                                                <div className="content">
                                                    <Link href={`/oferta/fotowoltaika/${region.slug}`} className="title h5 text-dark d-block mb-0 hover-text-primary">
                                                        {region.region_name}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Synergia 1: FW + Magazyn */}
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="position-relative mb-4 mb-md-0">
                                            <Image
                                                src="/images/magazyn-energii.png"
                                                width={600}
                                                height={400}
                                                className="img-fluid rounded"
                                                alt="Magazyn energii"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="section-title">
                                            <h4 className="title mb-3">Idealna synergia: Fotowoltaika + Magazyn Energii</h4>
                                            <p className="text-muted">
                                                Połączenie instalacji fotowoltaicznej z magazynem energii to rozwiązanie, które
                                                maksymalizuje wykorzystanie produkowanej energii. Magazyn pozwala na przechowywanie
                                                nadwyżek prądu i wykorzystanie ich wtedy, gdy instalacja nie produkuje energii.
                                            </p>
                                            <ul className="list-unstyled text-muted mb-0">
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    Maksymalne wykorzystanie własnej energii
                                                </li>
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    Niezależność energetyczna
                                                </li>
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    Ochrona przed przerwami w dostawie prądu
                                                </li>
                                            </ul>
                                            <div className="mt-3">
                                                <Link href="/oferta/magazyny-energii" className="btn btn-primary">
                                                    Dowiedz się więcej o magazynach energii
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Synergia 2: FW + Magazyn + PC */}
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="section-title">
                                            <h4 className="title mb-3">Kompleksowe rozwiązanie: Fotowoltaika + Magazyn Energii + Pompa Ciepła</h4>
                                            <p className="text-muted">
                                                Połączenie fotowoltaiki, magazynu energii i pompy ciepła to najbardziej efektywne
                                                rozwiązanie dla Twojego domu. Fotowoltaika produkuje prąd, magazyn energii go
                                                przechowuje, a pompa ciepła wykorzystuje do ogrzewania domu i wody.
                                            </p>
                                            <ul className="list-unstyled text-muted mb-0">
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    <strong>Zerowe rachunki za prąd i ogrzewanie</strong>
                                                </li>
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    <strong>Pełna niezależność energetyczna</strong>
                                                </li>
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    Ekologiczne rozwiązanie
                                                </li>
                                            </ul>
                                            <div className="mt-3">
                                                <Link href="/oferta/pompy-ciepla" className="btn btn-primary">
                                                    Dowiedz się więcej o pompach ciepła
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative mt-4 mt-md-0">
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

                        </div>

                        {/* Prawa kolumna — sticky formularz (tylko desktop) */}
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="sticky-bar">
                                <ContactForm
                                    title="Zamów bezpłatną wycenę fotowoltaiki"
                                    description="Nasz technik oddzwoni w ciągu 24h i policzy, ile możesz zaoszczędzić"
                                    subject="Nowa prośba o kontakt - Fotowoltaika"
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
