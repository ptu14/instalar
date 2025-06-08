import React from 'react';

export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <div className="text-center">
                <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Ładowanie...</span>
                </div>
                <h5 className="text-muted">Ładowanie wpisów...</h5>
                <p className="text-muted small">Pobieranie najnowszych artykułów z bloga</p>
            </div>
        </div>
    );
} 