import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar/navbar";
import KomplexFooter from "../components/footer/komplexFooter";

export default function Dotacje() {
  return (
    <>
      <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
      
      <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/cta03.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h1 className="heading text-white mb-3">Dotacje i Finansowanie</h1>
                <p className="para-desc text-white-50 mx-auto">Oferujemy pomoc w uzyskaniu środków z programów krajowych i lokalnych, a także w zorganizowaniu finansowania poprzez pożyczki lub kredyty bankowe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="mb-4">Dostępne Programy Dotacyjne</h2>
              <p className="text-muted">Jesteśmy gotowi załatwić wszystkie formalności w imieniu klienta. Skorzystaj z dofinansowania i obniż koszt inwestycji w odnawialne źródła energii.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-sun fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <Link href="/dotacje/moj-prad" className="title h5 text-dark">Program "Mój Prąd"</Link>
                  <p className="text-muted mt-3">Dofinansowanie do 7 000 zł na instalacje fotowoltaiczne dla gospodarstw domowych. Skorzystaj z 6. edycji programu i uzyskaj zwrot części kosztów inwestycji.</p>
                  <Link href="/dotacje/moj-prad" className="text-primary">Dowiedz się więcej <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-house-user fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <Link href="/dotacje/czyste-powietrze" className="title h5 text-dark">Program "Czyste Powietrze"</Link>
                  <p className="text-muted mt-3">Dofinansowanie do wymiany starych pieców i termomodernizacji domów. Dotacje nawet do 135 000 zł na kompleksowe inwestycje w efektywność energetyczną.</p>
                  <Link href="/dotacje/czyste-powietrze" className="text-primary">Dowiedz się więcej <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-temperature-half fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <Link href="/dotacje/moje-cieplo" className="title h5 text-dark">Program "Moje Ciepło"</Link>
                  <p className="text-muted mt-3">Dofinansowanie do pomp ciepła w nowych budynkach mieszkalnych. Dotacje pokrywające do 30% kosztów kwalifikowanych inwestycji, maksymalnie do 21 000 zł.</p>
                  <Link href="/dotacje/moje-cieplo" className="text-primary">Dowiedz się więcej <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2 offset-lg-4">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-credit-card fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <Link href="/dotacje/finansowanie" className="title h5 text-dark">Finansowanie Inwestycji</Link>
                  <p className="text-muted mt-3">Oferujemy pomoc w uzyskaniu atrakcyjnych kredytów i pożyczek na instalacje OZE. Współpracujemy z bankami oferującymi specjalne warunki finansowania dla ekologicznych inwestycji.</p>
                  <Link href="/dotacje/finansowanie" className="text-primary">Dowiedz się więcej <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-4">
            <div className="col-12">
              <div className="section-title text-center">
                <h3>Dlaczego warto skorzystać z naszej pomocy?</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary">
                <div className="icon text-center rounded-circle me-3 mt-2">
                  <i className="uil uil-file-check-alt fs-4"></i>
                </div>
                <div className="flex-1">
                  <h5>Kompleksowa obsługa</h5>
                  <p className="text-muted mb-0">Zapewniamy pomoc na każdym etapie - od wyboru programu po rozliczenie dotacji.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary">
                <div className="icon text-center rounded-circle me-3 mt-2">
                  <i className="uil uil-money-withdrawal fs-4"></i>
                </div>
                <div className="flex-1">
                  <h5>Maksymalne dofinansowanie</h5>
                  <p className="text-muted mb-0">Pomagamy dobrać optymalne źródła finansowania, aby maksymalnie obniżyć koszt inwestycji.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex features feature-primary">
                <div className="icon text-center rounded-circle me-3 mt-2">
                  <i className="uil uil-clock fs-4"></i>
                </div>
                <div className="flex-1">
                  <h5>Oszczędność czasu</h5>
                  <p className="text-muted mb-0">Zajmiemy się wszystkimi formalnościami, więc Ty nie musisz tracić czasu na biurokrację.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h4 className="title mb-4">Skontaktuj się z nami</h4>
                <p className="text-muted para-desc">Nasi doradcy pomogą Ci wybrać najlepszy program dotacyjny dla Twojej inwestycji i przeprowadzą Cię przez cały proces uzyskania dofinansowania.</p>
                <div className="mt-4 pt-2">
                  <Link href="/kontakt" className="btn btn-primary">Umów konsultację</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="card shadow rounded border-0">
                <div className="card-body py-5">
                  <h5 className="card-title">Zostaw swój numer telefonu</h5>
                  <div className="custom-form mt-3">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-3">
                            <input name="name" id="name" type="text" className="form-control" placeholder="Imię i nazwisko" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <input name="phone" id="phone" type="tel" className="form-control" placeholder="Numer telefonu" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <button type="submit" className="btn btn-primary w-100">Oddzwońcie do mnie</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KomplexFooter />
    </>
  );
} 