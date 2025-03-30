import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "../../components/footer/komplexFooter";

export default function CzystePowietrze() {
  return (
    <>
      <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
      
      <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/cta02.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h1 className="heading text-white mb-3">Program "Czyste Powietrze"</h1>
                <p className="para-desc text-white-50 mx-auto">Dofinansowanie do wymiany źródeł ciepła i termomodernizacji domów jednorodzinnych</p>
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
                <Image src="/images/czyste-powietrze.webp" width={600} height={400} className="img-fluid rounded shadow" alt="Program Czyste Powietrze" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="section-title">
                <h4 className="title mb-4">Czym jest program "Czyste Powietrze"?</h4>
                <p className="text-muted">Program "Czyste Powietrze" to kompleksowy program dotacyjny, którego celem jest poprawa jakości powietrza oraz zmniejszenie emisji gazów cieplarnianych poprzez wymianę źródeł ciepła i poprawę efektywności energetycznej budynków mieszkalnych jednorodzinnych.</p>
                <p className="text-muted mt-3">Program oferuje dofinansowanie do wymiany starych pieców i kotłów na paliwo stałe na nowoczesne źródła ciepła spełniające najwyższe normy, a także przeprowadzenia prac termomodernizacyjnych budynku.</p>
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
                <h4 className="title mb-4">Co można sfinansować z programu "Czyste Powietrze"?</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-temperature-half fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Wymiana źródła ciepła</h5>
                  <p className="text-muted mt-3">Dofinansowanie do wymiany starych pieców i kotłów na paliwo stałe na nowoczesne urządzenia, w tym:</p>
                  <ul className="list-unstyled text-muted mt-3">
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Pompy ciepła</li>
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Kotły gazowe kondensacyjne</li>
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Kotły na pellet</li>
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Ogrzewanie elektryczne</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-house fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Termomodernizacja</h5>
                  <p className="text-muted mt-3">Wsparcie prac poprawiających efektywność energetyczną budynku:</p>
                  <ul className="list-unstyled text-muted mt-3">
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Ocieplenie ścian, dachu, podłóg</li>
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Wymiana okien i drzwi</li>
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Modernizacja instalacji centralnego ogrzewania</li>
                    <li className="mb-1"><i className="uil uil-check-circle text-primary me-2"></i>Instalacja wentylacji z odzyskiem ciepła</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card features feature-primary feature-clean rounded p-4">
                <div className="icon text-center rounded-pill">
                  <i className="uil uil-sun fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Odnawialne źródła energii</h5>
                  <p className="text-muted mt-3">Dofinansowanie do montażu mikroinstalacji fotowoltaicznej i kolektorów słonecznych.</p>
                  <p className="text-muted mt-2">Program przewiduje wsparcie zarówno dla już istniejących instalacji, jak i dla nowych inwestycji.</p>
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
                <h4 className="title mb-4">Poziomy dofinansowania</h4>
                <p className="text-muted para-desc mx-auto">Program oferuje trzy poziomy dofinansowania uzależnione od dochodu wnioskodawcy:</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="table-responsive bg-white shadow rounded">
                <table className="table mb-0 table-center">
                  <thead>
                    <tr>
                      <th className="border-bottom py-3">Poziom dofinansowania</th>
                      <th className="border-bottom py-3">Dla kogo</th>
                      <th className="border-bottom py-3">Maksymalna kwota dotacji</th>
                      <th className="border-bottom py-3">% kosztów kwalifikowanych</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 fw-bold text-primary">Podstawowy</td>
                      <td className="py-3">Dla osób o dochodzie rocznym do 135 000 zł</td>
                      <td className="py-3">66 000 zł</td>
                      <td className="py-3">do 30%</td>
                    </tr>
                    <tr>
                      <td className="py-3 fw-bold text-primary">Podwyższony</td>
                      <td className="py-3">Dla gospodarstw o miesięcznym dochodzie do 1894 zł/os. (gosp. wieloosobowe) lub 2651 zł (gosp. jednoosobowe)</td>
                      <td className="py-3">99 000 zł</td>
                      <td className="py-3">do 60%</td>
                    </tr>
                    <tr>
                      <td className="py-3 fw-bold text-primary">Najwyższy</td>
                      <td className="py-3">Dla gospodarstw o miesięcznym dochodzie do 1090 zł/os. (gosp. wieloosobowe) lub 1526 zł (gosp. jednoosobowe) lub mających prawo do zasiłku</td>
                      <td className="py-3">135 000 zł</td>
                      <td className="py-3">do 90%</td>
                    </tr>
                  </tbody>
                </table>
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
            <div className="col-md-4 mt-4 pt-2">
              <div className="card features feature-primary rounded p-4 text-center">
                <div className="icon text-center rounded-pill mx-auto">
                  <i className="uil uil-file-alt fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Krok 1: Przygotowanie wniosku</h5>
                  <p className="text-muted mt-3">Przygotuj potrzebne dokumenty i wypełnij wniosek o dofinansowanie.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 pt-2">
              <div className="card features feature-primary rounded p-4 text-center">
                <div className="icon text-center rounded-pill mx-auto">
                  <i className="uil uil-mailbox fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Krok 2: Złożenie wniosku</h5>
                  <p className="text-muted mt-3">Złóż wniosek elektronicznie przez portal gov.pl lub w Wojewódzkim Funduszu Ochrony Środowiska i Gospodarki Wodnej.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 pt-2">
              <div className="card features feature-primary rounded p-4 text-center">
                <div className="icon text-center rounded-pill mx-auto">
                  <i className="uil uil-search fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Krok 3: Ocena wniosku</h5>
                  <p className="text-muted mt-3">Twój wniosek zostanie zweryfikowany przez WFOŚiGW.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 pt-2">
              <div className="card features feature-primary rounded p-4 text-center">
                <div className="icon text-center rounded-pill mx-auto">
                  <i className="uil uil-contract fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Krok 4: Podpisanie umowy</h5>
                  <p className="text-muted mt-3">Po pozytywnej weryfikacji podpisz umowę o dofinansowanie.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 pt-2">
              <div className="card features feature-primary rounded p-4 text-center">
                <div className="icon text-center rounded-pill mx-auto">
                  <i className="uil uil-shovel fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Krok 5: Realizacja inwestycji</h5>
                  <p className="text-muted mt-3">Przeprowadź zaplanowane prace zgodnie z umową o dofinansowanie.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 pt-2">
              <div className="card features feature-primary rounded p-4 text-center">
                <div className="icon text-center rounded-pill mx-auto">
                  <i className="uil uil-money-withdrawal fs-1"></i>
                </div>
                <div className="card-body p-0 mt-4">
                  <h5>Krok 6: Rozliczenie</h5>
                  <p className="text-muted mt-3">Złóż wniosek o płatność wraz z dokumentami potwierdzającymi realizację inwestycji.</p>
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
                <h4 className="title mb-4">Komplex System - kompleksowa pomoc w uzyskaniu dotacji</h4>
                <p className="text-muted para-desc">Oferujemy pełne wsparcie w procesie pozyskania dofinansowania z programu "Czyste Powietrze". Nasi doradcy pomogą wybrać optymalne rozwiązania i przeprowadzą Cię przez cały proces.</p>
                <ul className="list-unstyled text-muted mt-4">
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Bezpłatna wstępna ocena możliwości uzyskania dofinansowania</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Dobór optymalnego rozwiązania grzewczego i zakresu termomodernizacji</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Profesjonalne przygotowanie i złożenie wniosku</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Kompleksowa realizacja inwestycji - od projektu po montaż</li>
                  <li className="mb-0"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Pomoc w rozliczeniu dotacji</li>
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