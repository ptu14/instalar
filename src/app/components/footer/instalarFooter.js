import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FiPhone, FiMail,FiMapPin} from "../../assets/icons/vander"

export default function InstalarFooter(){
    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="footer-py-24 text-center">
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <div className="card border-0 text-center features feature-clean bg-transparent">
                                        <div className="icons text-primary text-center mx-auto">
                                           <FiPhone className="d-block rounded h3 mb-0"/>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="footer-head text-light">Telefon</h5>
                                            <p className="text-muted">Skontaktuj się z nami, aby omówić instalację fotowoltaiczną lub pompę ciepła</p>
                                            <Link href="tel:+48123456789" className="text-foot">+48 123 456 789</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="card border-0 text-center features feature-clean bg-transparent">
                                        <div className="icons text-primary text-center mx-auto">
                                            <FiMail className="d-block rounded h3 mb-0"/>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="footer-head text-light">Email</h5>
                                            <p className="text-muted">Napisz do nas, aby otrzymać darmową wycenę instalacji</p>
                                            <Link href="mailto:kontakt@instalarenergy.pl" className="text-foot">kontakt@instalarenergy.pl</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="card border-0 text-center features feature-clean bg-transparent">
                                        <div className="icons text-primary text-center mx-auto">
                                            <FiMapPin className="d-block rounded h3 mb-0"/>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="footer-head text-light">Lokalizacja</h5>
                                            <p className="text-muted">ul. Słoneczna 15, <br/>00-000, Warszawa</p>
                                            <Link href="https://www.google.com/maps" target="_blank" className="text-foot">Zobacz na mapie</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container text-center">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3 col-md-2 col-sm-3">
                            <div className="text-sm-start">
                                <Link href="/" className="logo-footer">
                                    <Image src='/images/logo-ie.svg' width={110} height={30} alt="Instalar Energy"/>
                                </Link>
                            </div>
                        </div>
    
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled footer-list terms-service mb-0">
                                <li className="list-inline-item mb-0"><Link href="#demos" className="text-foot me-2">Oferta</Link></li>
                                <li className="list-inline-item mb-0"><Link href="#service" className="text-foot me-2">Współpraca</Link></li>
                                <li className="list-inline-item mb-0"><Link href="#inner" className="text-foot me-2">FAQ</Link></li>
                                <li className="list-inline-item mb-0"><Link href="/blog" className="text-foot">Blog</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="text-sm-end">
                                <p className="mb-0 text-foot">© {new Date().getFullYear()} Instalar Energy. Wszelkie prawa zastrzeżone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}