'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

export default function Navbar({navClass,manuClass,navDark}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setScroll(window.scrollY > 50)
          }
          if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
            window.scrollTo(0, 0);
          }
          return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
      }, []);

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
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="px-lg-5 mx-lg-5">
                        {navDark === true ?  
                            <Link className="logo" href="/">
                                <Image src='/images/logo-ie.svg' width={110} height={30} className="logo-light-mode" alt=""/>
                                <Image src='/images/logo-ie.svg' width={110} height={30} className="logo-dark-mode" alt=""/>
                            </Link> :
                            <Link className="logo" href="/">
                                <span className="logo-light-mode">
                                    <Image src='/images/logo-ie.svg' width={160} height={50} className="l-dark" alt=""/>
                                    <Image src='/images/logo-ie-dark.svg' width={160} height={50} className="l-light" alt=""/>
                                </span>
                                <Image src='/images/logo-ie.svg' width={110} height={30} className="logo-dark-mode" alt=""/>
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
                                    <Link href="" target="_blank">
                                        <div className="btn btn-primary">Kontakt</div>
                                    </Link>
                                </li>
                            </ul>
                    
                            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                                <ul className="navigation-menu nav-right" id="navmenu-nav">
                                    <li className="has-submenu">
                                        <Link1 to="demos" activeClass="active" spy={true} smooth={true} duration={500}>Oferta</Link1>
                                    </li>
                                    <li className="has-submenu">
                                        <Link1 to="service" activeClass="active" spy={true} smooth={true} duration={500}>współpraca</Link1>
                                    </li>
                                    <li className="has-submenu">
                                        <Link1 to="inner" activeClass="active" spy={true} smooth={true} duration={500}>FAQ</Link1>
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