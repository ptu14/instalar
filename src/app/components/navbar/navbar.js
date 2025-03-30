'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';
import {usePathname} from "next/navigation";

export default function Navbar({navClass,manuClass,navDark}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setScroll(window.scrollY > 50)
          }
          if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
          }
          return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
      }, []);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
      const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    return(
        <>
         <header id="topnav" className={`${!isHomePage || scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="px-lg-5 mx-lg-5">
                        {navDark === true ?  
                            <Link className="logo" href="/">
                                <Image src='/images/komplex_system.png' width={650} height={413} className="logo-img logo-light-mode" alt=""/>
                                <Image src='/images/komplex_system.png' width={650} height={413} className="logo-img logo-dark-mode" alt=""/>
                            </Link> :
                            <Link className="logo" href="/">
                                <span className="logo-light-mode">
                                    <Image src='/images/komplex_system.png' width={650} height={413} className="logo-img l-dark" alt=""/>
                                    <Image src='/images/komplex_system_neg.png' width={650} height={413} className="logo-img l-light" alt=""/>
                                </span>
                                <Image src='/images/komplex_system.png' width={650} height={413} className="logo-img logo-dark-mode" alt=""/>
                            </Link>
                            }

                            <div className="menu-extras">
                                <div className="menu-item">
                                    <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                        <div className="lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <ul className="buy-button list-inline mb-0">                    
                                <li className="list-inline-item ps-1 mb-0">
                                    <Link href="/kontakt">
                                        <div className="btn btn-primary">Bezpłatna wycena</div>
                                    </Link>
                                </li>
                            </ul>
                    
                            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                                <ul className="navigation-menu nav-right" id="navmenu-nav">
                                    <li className="">
                                        <Link href="/" activeClass="active">Start</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link href="/oferta">Oferta</Link>
                                        <ul className="submenu">
                                            <li><Link href="/oferta/pompy-ciepla">Pompy Ciepła</Link></li>
                                            <li><Link href="/oferta/fotowoltaika">Fotowoltaika</Link></li>
                                            <li><Link href="/oferta/magazyny-energii">Magazyny Energii</Link></li>
                                            <li><Link href="/dotacje">Wnioski o Dofinansowanie OZE</Link></li>
                                            <li><Link href="/oferta/klimatyzacja">Klimatyzacja</Link></li>
                                            <li><Link href="/oferta/instalacje-sanitarne">Instalacje Sanitarne</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <Link href="/dotacje">Dotacje <span className="menu-arrow"></span></Link>
                                        <ul className="submenu">
                                            <li><Link href="/dotacje/moj-prad">Mój Prąd</Link></li>
                                            <li><Link href="/dotacje/czyste-powietrze">Czyste Powietrze</Link></li>
                                            <li><Link href="/dotacje/moje-cieplo">Moje Ciepło</Link></li>
                                            <li><Link href="/dotacje/finansowanie">Finansowanie</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </header>
        </>
    )
}