import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiAward, FiShield, FiTool } from "react-icons/fi";
import regionsData from "../../data/regions.json";

export const metadata = {
    title: 'Magazyny Energii – Montaż do Fotowoltaiki w Małopolsce | Komplex System',
    description: 'Profesjonalny montaż magazynów energii LiFePO4 do instalacji fotowoltaicznych w Małopolsce. Wykorzystaj 100% wyprodukowanej energii. Dotacja Mój Prąd na magazyn. Bezpłatna wycena.',
    alternates: { canonical: 'https://www.komplexsystem.pl/oferta/magazyny-energii' },
};

export default function MagazynyEnergii() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero — pełna szerokość */}
            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Magazyny Energii</h4>
                                <p className="text-muted">Profesjonalny montaż magazynów energii do fotowoltaiki w Małopolsce</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Magazyn energii pozwala przechowywać nadwyżki prądu wyprodukowanego przez instalację fotowoltaiczną
                                    i wykorzystywać je wtedy, gdy jest to najbardziej opłacalne — wieczorem, w nocy lub podczas awarii
                                    sieci. Dzięki temu znacząco zwiększasz autokonsumpcję własnej energii i uniezależniasz się od
                                    rosnących cen prądu oraz zmian w taryfach energetycznych.
                                </p>
                                <p className="text-muted">
                                    Montujemy magazyny energii oparte na bezpiecznych ogniwach LiFePO4, które charakteryzują się
                                    długą żywotnością (ponad 6000 cykli ładowania), wysoką stabilnością termiczną i brakiem ryzyka
                                    samozapłonu. Dobieramy pojemność magazynu indywidualnie do profilu zużycia energii i mocy
                                    instalacji fotowoltaicznej. Nasi klienci mogą skorzystać z dotacji Mój Prąd na magazyn energii.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Maksymalne wykorzystanie energii z fotowoltaiki
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Niezależność energetyczna i zasilanie awaryjne
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Bezpieczne ogniwa LiFePO4 o długiej żywotności
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Dotacja z programu Mój Prąd na magazyn energii
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
                                    alt="Montaż magazynu energii LiFePO4 do fotowoltaiki"
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
                                title="Zamów bezpłatną wycenę magazynu energii"
                                description="Nasz technik oddzwoni w ciągu 24h i dobierze magazyn do Twojej instalacji"
                                subject="Nowa prośba o kontakt - Magazyny Energii"
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
                                                <h5 className="mb-1">Doświadczenie</h5>
                                                <p className="text-muted mb-0 small">
                                                    Wieloletnie doświadczenie w montażu systemów magazynowania energii i instalacji
                                                    fotowoltaicznych. Nasz zespół posiada certyfikaty producentów magazynów energii
                                                    i regularnie szkoli się z najnowszych technologii bateryjnych.
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
                                                    Wieloletnia gwarancja na montaż i urządzenia — do 10 lat gwarancji producenta
                                                    na magazyn energii i 5 lat na wykonane prace instalacyjne. Gwarancja obejmuje
                                                    ogniwa, falownik hybrydowy oraz całą instalację elektryczną.
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
                                                    Profesjonalny serwis i zdalny monitoring systemu magazynowania energii.
                                                    Oferujemy regularne przeglądy, aktualizacje oprogramowania oraz szybką
                                                    reakcję serwisową na terenie całej Małopolski.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Linki regionalne */}
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="section-title mb-4">
                                    <h4 className="title mb-3">Magazyny Energii w Twoim regionie</h4>
                                    <p className="text-muted">
                                        Sprawdź naszą ofertę dla poszczególnych lokalizacji w Małopolsce.
                                    </p>
                                </div>
                                <div className="row">
                                    {regionsData.map((region) => (
                                        <div key={region.slug} className="col-md-6 mt-3">
                                            <div className="d-flex align-items-center p-3 bg-light rounded h-100">
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

                            {/* Synergia 1: Magazyn + Fotowoltaika */}
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="position-relative mb-4 mb-md-0">
                                            <Image
                                                src="/images/fotowoltaika.jpg"
                                                width={600}
                                                height={400}
                                                className="img-fluid rounded shadow"
                                                alt="Instalacja fotowoltaiczna"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="section-title">
                                            <h4 className="title mb-3">Idealna synergia: Magazyn Energii + Fotowoltaika</h4>
                                            <p className="text-muted">
                                                Połączenie magazynu energii z instalacją fotowoltaiczną to rozwiązanie, które maksymalizuje
                                                wykorzystanie produkowanej energii. Magazyn pozwala na przechowywanie nadwyżek prądu
                                                i wykorzystanie ich wtedy, gdy instalacja nie produkuje energii.
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
                                                <Link href="/oferta/fotowoltaika" className="btn btn-primary">
                                                    Dowiedz się więcej o fotowoltaice
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Synergia 2: Magazyn + FW + PC */}
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="section-title">
                                            <h4 className="title mb-3">Kompleksowe rozwiązanie: Magazyn Energii + Fotowoltaika + Pompa Ciepła</h4>
                                            <p className="text-muted">
                                                Połączenie magazynu energii z fotowoltaiką i pompą ciepła to najbardziej efektywne rozwiązanie
                                                dla Twojego domu. Fotowoltaika produkuje prąd, magazyn energii go przechowuje, a pompa ciepła
                                                wykorzystuje do ogrzewania domu i wody.
                                            </p>
                                            <ul className="list-unstyled text-muted mb-0">
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    Zerowe rachunki za prąd i ogrzewanie
                                                </li>
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    Pełna niezależność energetyczna
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
                                    title="Zamów bezpłatną wycenę magazynu energii"
                                    description="Nasz technik oddzwoni w ciągu 24h i dobierze magazyn do Twojej instalacji"
                                    subject="Nowa prośba o kontakt - Magazyny Energii"
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
