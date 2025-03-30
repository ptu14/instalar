'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ navClass, manuClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isHomePage]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="topnav" className={`${isHomePage ? (isScrolled ? "nav-sticky" : "") : "nav-sticky"} defaultscroll sticky`}>
            <div className="container">
                <Link href="/" className="logo">
                    <Image
                        src="/images/logo.png"
                        height={50}
                        width={150}
                        className="logo-light-mode"
                        alt="Logo"
                    />
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <button
                            className={`navbar-toggle ${isOpen ? "open" : ""}`}
                            onClick={toggleMenu}
                        >
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="navigation">
                    <ul className={`navigation-menu ${manuClass} ${isOpen ? "open" : ""}`}>
                        <li>
                            <Link href="/" className={pathname === "/" ? "active" : ""}>
                                Strona główna
                            </Link>
                        </li>
                        <li>
                            <Link href="/oferta" className={pathname.startsWith("/oferta") ? "active" : ""}>
                                Oferta
                            </Link>
                        </li>
                        <li>
                            <Link href="/dotacje" className={pathname.startsWith("/dotacje") ? "active" : ""}>
                                Dotacje
                            </Link>
                        </li>
                        <li>
                            <Link href="/o-nas" className={pathname === "/o-nas" ? "active" : ""}>
                                O nas
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt" className={pathname === "/kontakt" ? "active" : ""}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar; 