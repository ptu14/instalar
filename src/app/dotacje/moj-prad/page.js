import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";

export default function MojPrad() {
  return (
    <>
      <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
      
      <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/cta.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h1 className="heading text-white mb-3">Program "Mój Prąd"</h1>
                <p className="para-desc text-white-50 mx-auto">Dofinansowanie do instalacji fotowoltaicznych dla gospodarstw domowych</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="me-lg-5">
                <Image src="/images/seo.png" width={600} height={400} className="img-fluid rounded shadow" alt="Program Mój Prąd" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="section-title">
                <h4 className="title mb-4">Czym jest program "Mój Prąd"?</h4>
                <p className="text-muted">Program "Mój Prąd" to rządowy program wsparcia dla mikroinstalacji fotowoltaicznych, skierowany do gospodarstw domowych wytwarzających energię elektryczną na własne potrzeby.</p>
                <p className="text-muted mt-3">Aktualnie trwa 6. edycja programu, w ramach której można otrzymać dofinansowanie do instalacji fotowoltaicznej, magazynu energii, magazynu ciepła i systemu zarządzania energią.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Na co można otrzymać dofinansowanie?</h4>
                <p className="text-muted para-desc mx-auto">W ramach programu "Mój Prąd" można uzyskać dofinansowanie do:</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4 text-center">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-sun fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Instalacja fotowoltaiczna</h5>
                  <p className="text-muted mt-3">Dofinansowanie do 7 000 zł na nowe instalacje fotowoltaiczne o mocy od 2 kW do 20 kW.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4 text-center">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-battery-bolt fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Magazyn energii</h5>
                  <p className="text-muted mt-3">Dofinansowanie do magazynów energii elektrycznej o pojemności min. 2 kWh.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4 text-center">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-temperature fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Magazyn ciepła</h5>
                  <p className="text-muted mt-3">Dofinansowanie do magazynów ciepła w postaci zasobników c.w.u. z wężownicą.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4 text-center">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-processor fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>System zarządzania energią</h5>
                  <p className="text-muted mt-3">Dofinansowanie do systemów umożliwiających zarządzanie przepływami energii.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Wysokość dofinansowania</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="table-responsive bg-white shadow rounded">
                <table className="table mb-0 table-center">
                  <thead>
                    <tr>
                      <th className="border-bottom py-3" style={{minWidth: "200px"}}>Komponent</th>
                      <th className="border-bottom py-3">Maksymalna kwota dofinansowania</th>
                      <th className="border-bottom py-3">Maksymalny % kosztów kwalifikowanych</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3">Instalacja fotowoltaiczna</td>
                      <td className="py-3">7 000 zł</td>
                      <td className="py-3">50%</td>
                    </tr>
                    <tr>
                      <td className="py-3">Magazyn energii elektrycznej</td>
                      <td className="py-3">16 000 zł</td>
                      <td className="py-3">50%</td>
                    </tr>
                    <tr>
                      <td className="py-3">Magazyn ciepła</td>
                      <td className="py-3">5 000 zł</td>
                      <td className="py-3">50%</td>
                    </tr>
                    <tr>
                      <td className="py-3">System zarządzania energią</td>
                      <td className="py-3">3 000 zł</td>
                      <td className="py-3">50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-3">
            <div className="col-12">
              <div className="card border-0 bg-primary rounded shadow p-4">
                <div className="d-flex">
                  <div className="icon text-white title-dark">
                    <i className="uil uil-exclamation-circle fs-1"></i>
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="text-white">Łączne dofinansowanie</h5>
                    <p className="text-white-50 mb-0">Maksymalna wysokość dofinansowania dla wszystkich komponentów to łącznie <strong className="text-white">23 000 zł</strong> (przy 50% kosztów kwalifikowanych).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Jak uzyskać dofinansowanie?</h4>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline-page pt-4">
                <div className="timeline-item ms-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="duration date-label-left">Krok 1</div>
                      <div className="event event-description-right rounded shadow px-4 py-3">
                        <h6 className="fw-bold">Montaż instalacji</h6>
                        <p className="text-muted mb-0">Instalacja fotowoltaiczna musi zostać zamontowana i przyłączona do sieci elektroenergetycznej.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item ms-3 mt-4">
                  <div className="row">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="event event-description-left rounded shadow px-4 py-3">
                        <h6 className="fw-bold">Złożenie wniosku</h6>
                        <p className="text-muted mb-0">Wniosek o dofinansowanie składa się przez portal gov.pl po zakończeniu inwestycji.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div className="duration date-label-right">Krok 2</div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item ms-3 mt-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="duration date-label-left">Krok 3</div>
                      <div className="event event-description-right rounded shadow px-4 py-3">
                        <h6 className="fw-bold">Rozpatrzenie wniosku</h6>
                        <p className="text-muted mb-0">Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej rozpatruje wniosek.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-item ms-3 mt-4">
                  <div className="row">
                    <div className="col-lg-6 order-lg-1 order-2">
                      <div className="event event-description-left rounded shadow px-4 py-3">
                        <h6 className="fw-bold">Wypłata dofinansowania</h6>
                        <p className="text-muted mb-0">Po pozytywnym rozpatrzeniu wniosku, dotacja zostaje wypłacona na wskazane konto bankowe.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                      <div className="duration date-label-right">Krok 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="section-title">
                <h4 className="title mb-4">Pomożemy Ci uzyskać dofinansowanie</h4>
                <p className="text-muted para-desc">W Komplex System oferujemy kompleksową pomoc w uzyskaniu dofinansowania z programu "Mój Prąd". Zajmiemy się wszystkimi formalnościami, abyś mógł cieszyć się korzyściami z fotowoltaiki bez zbędnego stresu.</p>
                <ul className="list-unstyled text-muted mt-4">
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Doradzimy, jaka instalacja będzie optymalna dla Twojego domu</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Przygotujemy wszystkie wymagane dokumenty</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Złożymy wniosek o dofinansowanie w Twoim imieniu</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Zadbamy o prawidłowe rozliczenie dotacji</li>
                </ul>
                <div className="mt-4 pt-2">
                  <Link href="/kontakt" className="btn btn-primary">Skontaktuj się z nami</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
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
                            <button type="submit" className="btn btn-primary w-100">Bezpłatna konsultacja</button>
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