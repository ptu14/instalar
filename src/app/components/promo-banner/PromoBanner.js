"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi2";
import styles from "./PromoBanner.module.scss";

export default function PromoBanner({ banners, delay = 3000 }) {
    const [activeBanner, setActiveBanner] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const now = new Date();
        const banner = banners.find((b) => {
            const expires = new Date(b.expiresAt + "T23:59:59");
            if (now > expires) return false;
            return !sessionStorage.getItem(`promo-dismissed-${b.id}`);
        });
        if (!banner) return;

        setActiveBanner(banner);
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [banners, delay]);

    const dismiss = (id) => {
        setVisible(false);
        setTimeout(() => {
            sessionStorage.setItem(`promo-dismissed-${id}`, "1");
            setActiveBanner(null);
        }, 300);
    };

    if (!activeBanner) return null;

    return (
        <div className={`${styles.overlay} ${visible ? styles.overlayVisible : ""}`} onClick={() => dismiss(activeBanner.id)}>
            <div className={`${styles.dialog} ${visible ? styles.dialogVisible : ""}`} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.close}
                    onClick={() => dismiss(activeBanner.id)}
                    aria-label="Zamknij"
                >
                    <IoClose />
                </button>

                {activeBanner.badge && (
                    <span className={styles.badge}>
                        <HiOutlineSparkles className={styles.badgeIcon} />
                        {activeBanner.badge}
                    </span>
                )}
                <h3 className={styles.title}>{activeBanner.title}</h3>
                <p className={styles.description}>{activeBanner.description}</p>

                {activeBanner.highlights && activeBanner.highlights.length > 0 && (
                    <div className={styles.highlights}>
                        {activeBanner.highlights.map((item, i) => (
                            <div key={i} className={styles.highlightItem}>
                                <span className={styles.highlightValue}>{item.value}</span>
                                <span className={styles.highlightLabel}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeBanner.ctaText && (
                    <Link href={activeBanner.ctaLink || "#kontakt"} className={styles.cta} onClick={() => dismiss(activeBanner.id)}>
                        {activeBanner.ctaText}
                    </Link>
                )}
            </div>
        </div>
    );
}
