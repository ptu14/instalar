import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";
import {AiOutlineCheckCircle} from "react-icons/ai";

export default function MojeCieplo() {
    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Program Moje Ciepło</h4>
                                <p className="text-muted">Dofinansowanie do pomp ciepła dla nowych budynków jednorodzinnych</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title mb-3">O programie</h4>
                                <p className="text-muted mb-4">
                                    Program Moje Ciepło to inicjatywa Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej, 
                                    która ma na celu wsparcie inwestycji w pompy ciepła w nowych budynkach jednorodzinnych. 
                                    Program oferuje atrakcyjne dofinansowanie do zakupu i montażu pomp ciepła.
                                </p>
                                <div className="mt-4">
                                    <h5 className="mb-3">Główne korzyści:</h5>
                                    <ul className="list-unstyled text-muted mb-0">
                                        <li className="mb-3">
                                            <span className="text-dark h5 me-2">
                                                <AiOutlineCheckCircle className="align-middle"/>
                                            </span>
                                            Dofinansowanie do 21 000 zł
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-dark h5 me-2">
                                                <AiOutlineCheckCircle className="align-middle"/>
                                            </span>
                                            Możliwość łączenia z innymi programami
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-dark h5 me-2">
                                                <AiOutlineCheckCircle className="align-middle"/>
                                            </span>
                                            Wsparcie dla nowych budynków
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-dark h5 me-2">
                                                <AiOutlineCheckCircle className="align-middle"/>
                                            </span>
                                            Szybka procedura wnioskowania
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative" style={{ height: "400px" }}>
                                <Image
                                    src="/images/moje-cieplo.jpg"
                                    fill={true}
                                    style={{ objectFit: "contain" }}
                                    className="rounded"
                                    alt="Program Moje Ciepło"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="section-title">
                                <h4 className="title mb-3">Warunki programu</h4>
                                <div className="card border-0 shadow rounded">
                                    <div className="card-body">
                                        <ul className="list-unstyled text-muted mb-0">
                                            <li className="mb-3">
                                                <span className="text-dark h5 me-2">
                                                    <AiOutlineCheckCircle className="align-middle"/>
                                                </span>
                                                Program skierowany jest do właścicieli nowych budynków jednorodzinnych
                                            </li>
                                            <li className="mb-3">
                                                <span className="text-dark h5 me-2">
                                                    <AiOutlineCheckCircle className="align-middle"/>
                                                </span>
                                                Maksymalna kwota dofinansowania wynosi 21 000 zł
                                            </li>
                                            <li className="mb-3">
                                                <span className="text-dark h5 me-2">
                                                    <AiOutlineCheckCircle className="align-middle"/>
                                                </span>
                                                Wymagane jest złożenie wniosku przed rozpoczęciem inwestycji
                                            </li>
                                            <li className="mb-3">
                                                <span className="text-dark h5 me-2">
                                                    <AiOutlineCheckCircle className="align-middle"/>
                                                </span>
                                                Pompa ciepła musi być nowa i spełniać wymagania techniczne programu
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="text-center">
                                <h4 className="title mb-3">Chcesz skorzystać z programu?</h4>
                                <p className="text-muted mb-4">Skontaktuj się z nami, a pomożemy Ci w przygotowaniu wniosku</p>
                                <form className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <input name="phone" id="phone" type="tel" className="form-control mb-3" placeholder="Twój numer telefonu:" required=""/>
                                        <button type="submit" className="btn btn-primary">Bezpłatne doradztwo</button>
                                    </div>
                                </form>
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