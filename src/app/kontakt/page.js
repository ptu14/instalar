import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";

import { FiPhone, FiMail, FiMapPin } from '../assets/icons/vander';
import ScrollTop from "../components/scrollTop";
import KomplexFooter from "@/app/components/footer/komplexFooter";

export default function Contact() {
    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/bg/about.jpg')" }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Skontaktuj się z nami</small>
                                <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Kontakt</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Kontakt</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="section pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-0 text-center features feature-clean bg-transparent">
                                <div className="icons text-primary text-center mx-auto">
                                    <FiPhone className="d-block rounded h3 mb-0" />
                                </div>
                                <div className="content mt-3">
                                    <h5 className="footer-head">Telefon</h5>
                                    <p className="text-muted">Rozpocznij współpracę z Starty, który zapewni wszystko, czego potrzebujesz</p>
                                    <Link href="tel:+152534-468-854" className="text-foot">+152 534-468-854</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 text-center features feature-clean bg-transparent">
                                <div className="icons text-primary text-center mx-auto">
                                    <FiMail className="d-block rounded h3 mb-0" />
                                </div>
                                <div className="content mt-3">
                                    <h5 className="footer-head">Email</h5>
                                    <p className="text-muted">Rozpocznij współpracę z Starty, który zapewni wszystko, czego potrzebujesz</p>
                                    <Link href="mailto:contact@example.com" className="text-foot">contact@example.com</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 text-center features feature-clean bg-transparent">
                                <div className="icons text-primary text-center mx-auto">
                                    <FiMapPin className="d-block rounded h3 mb-0" />
                                </div>
                                <div className="content mt-3">
                                    <h5 className="footer-head">Lokalizacja</h5>
                                    <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                                    <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                          data-type="iframe" className="video-play-icon text-foot lightbox">Zobacz na mapie Google</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title mb-5 pb-2 text-center">
                                <h4 className="title mb-3">Skontaktuj się z nami!</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Nasze projekty są świeże i proste, co przynosi ogromne korzyści Twojej firmie. Dowiedz się więcej o naszej pracy!</p>
                            </div>
                            <div className="custom-form">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Twoje imię <span className="text-danger">*</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Imię :" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Twój email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Temat</label>
                                                <input name="subject" id="subject" className="form-control" placeholder="Temat :" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Wiadomość <span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Wiadomość :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button type="submit" id="submit" name="send" className="btn btn-primary">Wyślij wiadomość</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-100 mt-60">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="card map border-0">
                                <div className="card-body p-0">
                                    <iframe
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=G%C5%82ogocz%C3%B3w%20472+(Komplex%20System)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        style={{ border: '0' }} title="starty" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <KomplexFooter />
            <ScrollTop />
        </>
    );
}
