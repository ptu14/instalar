import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import Partners from "./components/partners";
import HeroSlider from "./components/business/heroSlider";
import Counter from "./components/business/counter";
import Faq from "./components/faq";
import Process from "./components/process"

import { aboutData } from "./data/business";

export default function IndexBusiness(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <HeroSlider/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 order-1 order-md-2">
                        <div className="features-absoluteTwo">
                            <div className="position-relative">
                                <Image src='/images/instalator.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 order-2 order-md-1">
                        <div className="row">
                            {aboutData.map((item,index)=>{
                                let Icon = item.icon
                                return(
                                <div className="col-lg-6 col-12 mb-4 pt-2" key={index}>
                                    <div className="card features feature-primary">
                                        <Icon className="icon h1 d-block mb-3"/>
                                        <Link href="/page-single-service" className="h5 title text-dark">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <Partners/>
            </div>
        </section>

        <section className="section bg-light">

            <Counter/>

        </section>



        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title  text-center">
                            <h4 className="title mb-3">Jak rozpocząć współpracę?</h4>
                        </div>
                    </div>
                </div>

                <Process icon={false}/>

                <div className="row justify-content-center mt-4 pt-2">
                    <div className="col-lg-7 mt-4 pt-2">
                        <div className="p-md-5 p-4 bg-light rounded shadow">
                            <div className="subcribe-form text-center">
                            <h5>Zostaw swój numer telefonu, a my skontaktujemy się z Tobą w ciągu godziny!</h5>
                                <form>
                                    <input name="email" id="email3" type="email" className="rounded shadow" placeholder="Twój numer:" required=""/>
                                    <button type="submit" className="btn btn-primary">Wyślij</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="container mt-4">
            <Faq />
        </section>

        </>
    )
}