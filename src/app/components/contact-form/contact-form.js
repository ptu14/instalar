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
        <div className="p-4 bg-white rounded shadow">
            <div className="text-center">
                <h5>{title || 'Chcesz dowiedzieć się więcej?'}</h5>
                <p className="text-muted">{description || 'Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną ofertę'}</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="phone" 
                        id="phone" 
                        type="tel" 
                        className="form-control mb-3" 
                        placeholder="Twój numer telefonu:" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Wysyłanie...' : 'Bezpłatna wycena'}
                    </button>
                </form>
                {status === 'success' && (
                    <div className="alert alert-success mt-3">
                        Dziękujemy! Skontaktujemy się z Tobą wkrótce.
                    </div>
                )}
                {status === 'error' && (
                    <div className="alert alert-danger mt-3">
                        Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.
                    </div>
                )}
            </div>
        </div>
    );
} 