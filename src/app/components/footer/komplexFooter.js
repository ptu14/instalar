'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FiPhone, FiMail, FiMapPin, IoIosArrowForward, BiLogoFacebook, AiOutlineInstagram} from "../../assets/icons/vander"
import {AiOutlineLinkedin} from "react-icons/ai";

export default function KomplexFooter(){
    return(
        <footer className="footer bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60 pb-0">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="/" className="logo-footer">
                                        <Image src='/images/komplex_system_neg.png' width={150} height={50} alt="Komplex System" className="img-fluid"/>
                                    </Link>
                                    <p className="mt-4 text-foot">Oferujemy kompleksowe usługi w zakresie instalacji fotowoltaicznych i pomp ciepła. Pomagamy w uzyskaniu dotacji i zapewniamy profesjonalny montaż.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><Link href="https://www.facebook.com/profile.php?id=61573877295855" target="_blank" className="rounded"><BiLogoFacebook size={32}/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.linkedin.com/company/komplex-system" target="_blank" className="rounded"><AiOutlineLinkedin size={32}/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.instagram.com/komplexsystem" target="_blank" className="rounded"><AiOutlineInstagram size={32}/></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h6 className="footer-head">Oferta</h6>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link href="/#demos" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Fotowoltaika</Link></li>
                                                <li><Link href="/#demos" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Pompy ciepła</Link></li>
                                                <li><Link href="/#demos" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Magazyny energii</Link></li>
                                                <li><Link href="/#demos" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Instalacje hybrydowe</Link></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h6 className="footer-head">Dotacje</h6>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link href="/dotacje/moj-prad" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Mój Prąd</Link></li>
                                                <li><Link href="/dotacje/czyste-powietrze" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Czyste Powietrze</Link></li>
                                                <li><Link href="/dotacje/moje-cieplo" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Moje Ciepło</Link></li>
                                                <li><Link href="/dotacje/finansowanie" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Finansowanie</Link></li>
                                            </ul>
                                        </div>
                    
                                        <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                            <h6 className="footer-head">Kontakt</h6>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li className="d-flex align-items-center">
                                                    <FiPhone className="me-2 text-primary"/>
                                                    <Link href="tel:+48785076979" className="text-foot">+48 785 076 979</Link>
                                                </li>
                                                <li className="d-flex align-items-center mt-2">
                                                    <FiMail className="me-2 text-primary"/>
                                                    <Link href="mailto:kontakt@komplexsystem.pl" className="text-foot">kontakt@komplexsystem.pl</Link>
                                                </li>
                                                <li className="d-flex align-items-center mt-2">
                                                    <FiMapPin className="me-2 text-primary"/>
                                                    <Link href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x471667f6e33e8a85:0x35e4b3ee0b82dae?sa=X&ved=1t:8290&ictx=111" className="text-foot mb-0">Głogoczów 472, 32-444 Głogoczów</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center">
                                <p className="text-muted small mb-0">
                                    <span className="d-inline-block mx-1">Fotowoltaika</span> •
                                    <span className="d-inline-block mx-1">Pompy ciepła</span> •
                                    <span className="d-inline-block mx-1">Dofinansowanie Mój Prąd</span> •
                                    <span className="d-inline-block mx-1">Program Czyste Powietrze</span> •
                                    <span className="d-inline-block mx-1">OZE</span> •
                                    <span className="d-inline-block mx-1">Energia odnawialna</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-8 mt-4 mt-sm-0">
                            <div className="text-sm-end text-center">
                                <p className="mb-0 text-foot">© {new Date().getFullYear()} Komplex System. Wszelkie
                                    prawa zastrzeżone. <Link href="/polityka-prywatnosci" className="text-foot">Polityka Prywatności</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 