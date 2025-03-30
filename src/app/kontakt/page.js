'use client';
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";

import { FiPhone, FiMail, FiMapPin } from '../assets/icons/vander';
import ScrollTop from "../components/scrollTop";
import KomplexFooter from "@/app/components/footer/komplexFooter";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comments: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    loading: false,
                    success: true,
                    error: false,
                    message: 'Wiadomość została wysłana pomyślnie!'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    comments: ''
                });
            } else {
                throw new Error(data.message || 'Wystąpił błąd podczas wysyłania wiadomości');
            }
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: error.message
            });
        }
    };

    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: "url('/images/salon.jpg')" }}>
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
                                    <p className="text-muted">Skontaktuj się z nami, aby uzyskać więcej informacji</p>
                                    <Link href="tel:+48785076979" className="text-foot">+48 785 076 979</Link>
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
                                    <p className="text-muted">Skontaktuj się z nami, aby uzyskać więcej informacji</p>
                                    <Link href="mailto:kontakt@komplexsystem.pl" className="text-foot">kontakt@komplexsystem.pl</Link>
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
                                    <p className="text-muted">Głogoczów 472, 32-444 Głogoczów</p>
                                    <Link href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x471667f6e33e8a85:0x35e4b3ee0b82dae?sa=X&ved=1t:8290&ictx=111" className="text-foot mb-0">Zobacz na mapie Google</Link>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Twoje imię <span className="text-danger">*</span></label>
                                                <input 
                                                    name="name" 
                                                    id="name" 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Imię :" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Twój email <span className="text-danger">*</span></label>
                                                <input 
                                                    name="email" 
                                                    id="email" 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Email :" 
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Temat</label>
                                                <input 
                                                    name="subject" 
                                                    id="subject" 
                                                    className="form-control" 
                                                    placeholder="Temat :" 
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Wiadomość <span className="text-danger">*</span></label>
                                                <textarea 
                                                    name="comments" 
                                                    id="comments" 
                                                    rows="4" 
                                                    className="form-control" 
                                                    placeholder="Wiadomość :"
                                                    value={formData.comments}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button 
                                                    type="submit" 
                                                    id="submit" 
                                                    name="send" 
                                                    className="btn btn-primary"
                                                    disabled={status.loading}
                                                >
                                                    {status.loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {status.message && (
                                        <div className={`alert ${status.success ? 'alert-success' : status.error ? 'alert-danger' : ''} mt-3`}>
                                            {status.message}
                                        </div>
                                    )}
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


