import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroStatic() {
    return (
        <section className="home-slider position-relative" style={{ height: '100vh' }}>
            <Image
                src="/images/1.webp"
                alt="Profesjonalna instalacja pompy ciepła i fotowoltaiki - Komplex System Małopolska"
                fill
                style={{ objectFit: 'cover' }}
                quality={75}
                priority
            />
            <div className="bg-overlay bg-linear-gradient position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}></div>

            <div className="position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="title-heading text-center">
                                <h2 className="fw-semibold display-3 text-white title-dark mb-4">
                                    Kompleksowe Instalacje OZE
                                </h2>
                                <p className="para-desc mx-auto text-white mb-2">
                                    Fotowoltaika, pompy ciepła, magazyny energii i ogrzewanie podłogowe w jednym miejscu. Oszczędzaj do 75% na ogrzewaniu i do 90% na prądzie dzięki dotacjom z programów Mój Prąd i Czyste Powietrze.
                                </p>
                                <div className="mt-4 pt-2">
                                    <Link href="/oferta" className="btn btn-primary">Poznaj Ofertę</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
