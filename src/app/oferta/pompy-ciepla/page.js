import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import ContactForm from "../../components/contact-form/contact-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiCoffee, FiEye, FiAward, FiShield, FiTool } from "react-icons/fi";
import PompyCieplaFaq from "../../components/pompy-ciepla-faq";
import pompyCieplaFaqData from "../../data/pompy-ciepla-faq";
import regionsData from "../../data/regions.json";

export const metadata = {
    title: 'Pompy Ciepła – Montaż i Serwis w Małopolsce | Komplex System',
    description: 'Profesjonalny montaż pomp ciepła powietrze-woda w Małopolsce. Ogrzewanie domu taniej nawet o 60%. Dotacja Czyste Powietrze do 66 300 zł. Bezpłatna wycena od projektu do uruchomienia.',
    alternates: { canonical: 'https://www.komplexsystem.pl/oferta/pompy-ciepla' },
};

export default function PompyCiepla() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero — pełna szerokość */}
            <section className="first-section section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">Pompy Ciepła</h4>
                                <p className="text-muted">Profesjonalny montaż pomp ciepła powietrze-woda w Małopolsce</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-muted">
                                    Pompa ciepła powietrze-woda to nowoczesne i ekologiczne rozwiązanie grzewcze, które pobiera energię
                                    z powietrza zewnętrznego i zamienia ją w ciepło do ogrzewania domu oraz wody użytkowej. Przy
                                    współczynniku COP sięgającym 4,5 — z każdego 1 kWh prądu uzyskujesz nawet 4,5 kWh ciepła, co
                                    oznacza <strong>oszczędności na ogrzewaniu sięgające 60%</strong> w porównaniu z tradycyjnymi źródłami ciepła.
                                </p>
                                <p className="text-muted">
                                    Montaż pompy ciepła w Małopolsce to także doskonała okazja do skorzystania z dotacji — program Czyste
                                    Powietrze oferuje <strong>dofinansowanie do 66 300 zł</strong>, a program Moje Ciepło <strong>do 21 000 zł</strong>. Jako certyfikowany
                                    instalator pomagamy w całym procesie — od doboru urządzenia i projektu, przez montaż i uruchomienie,
                                    aż po obsługę formalności związanych z dotacjami.
                                </p>
                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        <strong>Oszczędność na ogrzewaniu nawet do 60%</strong>
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        <strong>Dofinansowanie z programu Czyste Powietrze i Moje Ciepło</strong>
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-dark h5 me-2">
                                            <AiOutlineCheckCircle className="align-middle" />
                                        </span>
                                        Kompleksowa obsługa — od projektu do uruchomienia
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <Image
                                    src="/images/pompa-ciepla-daikin.jpg"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded shadow"
                                    alt="Montaż pompy ciepła powietrze-woda w Małopolsce"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Salon Pomp Ciepła Daikin */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <Image
                                src="/images/salon-daikin.png"
                                width={800}
                                height={600}
                                className="img-fluid rounded shadow"
                                alt="Salon pomp ciepła Daikin — Komplex System"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title mb-4">
                                <Image
                                    src="/images/partners/daikin.svg"
                                    width={140}
                                    height={40}
                                    alt="Logo Daikin"
                                    className="mb-2"
                                />
                                <h4 className="title mb-3">Autoryzowany Salon Pomp Ciepła Daikin</h4>
                                <p className="text-muted">
                                    Zapraszamy do naszej siedziby, gdzie pompy ciepła zobaczysz na żywo.
                                    Wpadnij na kawę, porozmawiaj ze specjalistą i dowiedz się,
                                    jak realnie obniżyć rachunki za ogrzewanie — spokojnie, kompleksowo i bez zobowiązań.
                                </p>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="text-primary h4 mb-0 me-3 mt-1">
                                    <FiEye />
                                </div>
                                <div className="flex-1">
                                    <h5 className="mb-1">Obejrzyj pompy na żywo</h5>
                                    <p className="text-muted mb-0">
                                        Dotknij, porównaj modele i przekonaj się, jak działają
                                        pompy ciepła Daikin — zanim podejmiesz decyzję.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="text-primary h4 mb-0 me-3 mt-1">
                                    <FiCoffee />
                                </div>
                                <div className="flex-1">
                                    <h5 className="mb-1">Porozmawiaj przy kawie</h5>
                                    <p className="text-muted mb-0">
                                        Usiądź wygodnie i opowiedz nam o swoim domu. Doradzimy
                                        najlepsze rozwiązanie i policzymy, ile możesz zaoszczędzić.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="text-primary h4 mb-0 me-3 mt-1">
                                    <FiAward />
                                </div>
                                <div className="flex-1">
                                    <h5 className="mb-1">Autoryzowany partner Daikin</h5>
                                    <p className="text-muted mb-0">
                                        Jako oficjalny salon Daikin oferujemy pełne wsparcie — od doboru
                                        urządzenia, przez montaż, po serwis i obsługę gwarancji.
                                        <br /><a href="https://www.daikin.pl/pl_pl/klienci/lokalizator-dystrybutorow/2106623.html" target="_blank" rel="noopener" className="text-primary fw-semibold">Sprawdź nas na daikin.pl&nbsp;→</a>
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted mb-0 small fst-italic">
                                Specjalizujemy się w Daikin, ale montujemy również pompy ciepła innych producentów — dobierzemy rozwiązanie najlepsze dla Twojego domu i budżetu.
                            </p>
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
                                title="Zamów bezpłatną wycenę pompy ciepła"
                                description="Nasz technik oddzwoni w ciągu 24h i przygotuje indywidualny kosztorys montażu"
                                subject="Nowa prośba o kontakt - Pompy Ciepła"
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
                                                    Zespół wykwalifikowanych specjalistów z uprawnieniami SEP oraz certyfikatami
                                                    producenckich szkoleń. Posiadamy uprawnienia do pracy z czynnikami chłodniczymi
                                                    (F-gazy) oraz wieloletnie doświadczenie w montażu pomp ciepła różnych producentów.
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
                                                    Wieloletnia gwarancja na montaż i urządzenia — <strong>do 10 lat gwarancji producenta</strong> na pompę ciepła i <strong>5 lat na wykonane prace instalacyjne</strong>. Gwarancja obejmuje
                                                    wszystkie elementy systemu grzewczego, w tym armaturę i automatykę.
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
                                                    Profesjonalny serwis gwarancyjny i pogwarancyjny z szybkim czasem reakcji
                                                    na terenie całej Małopolski. Oferujemy regularne przeglądy, monitoring pracy
                                                    instalacji oraz wsparcie techniczne przez cały okres użytkowania.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Linki regionalne */}
                            <div className="mb-5 pb-5 border-bottom">
                                <div className="section-title mb-4">
                                    <h4 className="title mb-3">Działamy lokalnie w Twoim regionie</h4>
                                    <p className="text-muted">
                                        Sprawdź naszą ofertę dedykowaną dla konkretnych lokalizacji w Małopolsce.
                                    </p>
                                </div>
                                <div className="row">
                                    {regionsData.map((region) => (
                                        <div key={region.slug} className="col-md-6 mt-3">
                                            <div className="d-flex align-items-center p-3 bg-light rounded h-100">
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

                            {/* Synergia 1: PC + Fotowoltaika */}
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
                                            <h4 className="title mb-3">Idealna synergia: Pompa Ciepła + Fotowoltaika</h4>
                                            <p className="text-muted">
                                                Połączenie pompy ciepła z instalacją fotowoltaiczną to rozwiązanie, które maksymalizuje
                                                oszczędności. Fotowoltaika produkuje prąd, który zasila pompę ciepła, co pozwala na
                                                ogrzewanie domu praktycznie za darmo.
                                            </p>
                                            <ul className="list-unstyled text-muted mb-0">
                                                <li className="mb-2">
                                                    <span className="text-dark h5 me-2">
                                                        <AiOutlineCheckCircle className="align-middle" />
                                                    </span>
                                                    <strong>Zerowe rachunki za ogrzewanie</strong>
                                                </li>
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

                            {/* Synergia 2: PC + FW + Magazyn */}
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="section-title">
                                            <h4 className="title mb-3">Kompleksowe rozwiązanie: Pompa Ciepła + Fotowoltaika + Magazyn Energii</h4>
                                            <p className="text-muted">
                                                Połączenie pompy ciepła z fotowoltaiką i magazynem energii to najbardziej efektywne rozwiązanie
                                                dla Twojego domu. Fotowoltaika produkuje prąd, magazyn energii go przechowuje, a pompa ciepła
                                                wykorzystuje do ogrzewania domu i wody.
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
                                                <Link href="/oferta/magazyny-energii" className="btn btn-primary">
                                                    Dowiedz się więcej o magazynach energii
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative mt-4 mt-md-0">
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

                        </div>

                        {/* Prawa kolumna — sticky formularz (tylko desktop) */}
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="sticky-bar">
                                <ContactForm
                                    title="Zamów bezpłatną wycenę pompy ciepła"
                                    description="Nasz technik oddzwoni w ciągu 24h i przygotuje indywidualny kosztorys montażu"
                                    subject="Nowa prośba o kontakt - Pompy Ciepła"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-light">
                <div className="container">
                    <PompyCieplaFaq />
                </div>
            </section>

            {/* FAQ Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": pompyCieplaFaqData.map((item) => ({
                            "@type": "Question",
                            "name": item.title,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.desc
                            }
                        }))
                    })
                }}
            />

            <section className="section mt-4 pb-0">
                <KomplexFooter />
            </section>
        </>
    );
}
