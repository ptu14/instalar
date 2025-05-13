"use client";
import React, { useState } from "react";

export default function ContactForm({ title, description, subject }) {
    const [phone, setPhone] = useState('');
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
                    name: 'Klient',
                    phone: phone,
                    email: 'brak@email.com',
                    subject: subject || 'Nowa prośba o kontakt',
                    comments: `Nowa prośba o kontakt telefoniczny. Numer telefonu: ${phone}`
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setPhone('');
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
                    <div className="form-group mb-4">
                        <input 
                            name="phone" 
                            id="phone" 
                            type="tel" 
                            className="form-control form-control-lg" 
                            placeholder="Twój numer telefonu:" 
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-lg w-100"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Wysyłanie...' : 'Bezpłatna wycena'}
                    </button>
                </form>
                {status === 'success' && (
                    <div className="alert alert-success mt-4">
                        Dziękujemy! Skontaktujemy się z Tobą wkrótce.
                    </div>
                )}
                {status === 'error' && (
                    <div className="alert alert-danger mt-4">
                        Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.
                    </div>
                )}
            </div>
        </div>
    );
} 