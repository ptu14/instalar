"use client";
import React, { useState } from "react";
import { AiOutlineClockCircle, AiOutlineSafety, AiOutlineTool } from "react-icons/ai";

export default function ContactForm({ title, description, subject }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name || 'Klient',
                    phone: phone,
                    email: 'brak@email.com',
                    subject: subject || 'Nowa prośba o kontakt',
                    comments: `Nowa prośba o kontakt telefoniczny.\nImię: ${name}\nTelefon: ${phone}${postalCode ? `\nKod pocztowy: ${postalCode}` : ''}`
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setName('');
                setPhone('');
                setPostalCode('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 p-md-5 bg-white rounded shadow-lg border border-light">
            <div className="text-center">
                <h4 className="title mb-3 fw-bold">{title || 'Chcesz dowiedzieć się więcej?'}</h4>
                <p className="text-muted mb-4">{description || 'Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną ofertę'}</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group mb-3">
                        <input
                            name="given-name"
                            id="name"
                            type="text"
                            autoComplete="given-name"
                            className="form-control form-control-lg"
                            placeholder="Twoje imię"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            name="tel"
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            className="form-control form-control-lg"
                            placeholder="Numer telefonu"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <input
                            name="postal-code"
                            id="postalCode"
                            type="text"
                            autoComplete="postal-code"
                            inputMode="numeric"
                            className="form-control form-control-lg"
                            placeholder="Kod pocztowy (np. 32-444)"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Wysyłanie...' : 'Chcę bezpłatną wycenę'}
                    </button>
                </form>
                {status === 'success' && (
                    <div className="alert alert-success mt-4">
                        Dziękujemy! Nasz technik oddzwoni w ciągu 24 godzin.
                    </div>
                )}
                {status === 'error' && (
                    <div className="alert alert-danger mt-4">
                        Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.
                    </div>
                )}
                <div className="row mt-4 text-muted small">
                    <div className="col-md-6 mb-2">
                        <AiOutlineSafety className="text-primary me-1" />
                        Nie spamujemy
                    </div>
                    <div className="col-md-6 mb-2">
                        <AiOutlineTool className="text-primary me-1" />
                        Rozmawiasz z technikiem
                    </div>
                </div>
            </div>
        </div>
    );
} 