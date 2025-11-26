'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBolt, FaTimes } from 'react-icons/fa';

export default function MojPradBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDismissed, setIsDismissed] = useState(false);

    // Sprawdź czy banner był już zamknięty w localStorage
    useEffect(() => {
        const dismissed = localStorage.getItem('mojPradBannerDismissed');
        if (dismissed === 'true') {
            setIsDismissed(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem('mojPradBannerDismissed', 'true');
    };

    // Sprawdź czy program już się skończył (31 października 2025)
    const programEndDate = new Date('2025-10-31');
    const currentDate = new Date();
    const isProgramEnded = currentDate > programEndDate;

    // Jeśli program się skończył lub banner był zamknięty, nie pokazuj
    if (isProgramEnded || isDismissed) {
        return null;
    }

    return (
        <>
            {isVisible && (
                <div className="moj-prad-banner">
                    <div className="banner-content">
                        <div className="banner-icon">
                            <FaBolt className="pulse-animation" />
                        </div>
                        <div className="banner-text">
                            <strong>Program Mój Prąd 6.0 kończy się 31 października 2025</strong>
                            <span className="banner-subtitle">lub wcześniej przy wyczerpaniu budżetu 1,8 mld zł</span>
                        </div>
                        <div className="banner-actions">
                            <Link href="/dotacje/moj-prad" className="btn btn-warning btn-sm">
                                Sprawdź dostępność
                            </Link>
                            <button 
                                onClick={handleDismiss} 
                                className="banner-close"
                                aria-label="Zamknij banner"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 