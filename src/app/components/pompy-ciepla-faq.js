'use client'
import React, { useState } from "react";
import faqData from "../data/pompy-ciepla-faq";

export default function PompyCieplaFaq() {
    let [activeIndex, setActiveIndex] = useState(1)

    const half = Math.ceil(faqData.length / 2);

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h2 className="title mb-3">Najczęściej Zadawane Pytania o Pompy Ciepła</h2>
                        <p className="text-muted mx-auto para-desc mb-0">
                            Zebraliśmy odpowiedzi na pytania, które najczęściej słyszymy od klientów
                            rozważających montaż pompy ciepła. Jeśli nie znajdziesz odpowiedzi na swoje
                            pytanie — zadzwoń lub wpadnij do naszego salonu.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-10 mt-4 pt-2">
                    <div className="accordion" id="pompyCieplaFaq">
                        <div className="row">
                            <div className="col-md-6">
                                {faqData.slice(0, half).map((item, index) => (
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`}
                                                onClick={() => setActiveIndex(activeIndex === item.id ? 0 : item.id)}
                                            >
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id && (
                                            <div className="show accordion-collapse border-0 collapse">
                                                <div className="accordion-body text-muted bg-white collapsed">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-6">
                                {faqData.slice(half).map((item, index) => (
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`}
                                                onClick={() => setActiveIndex(activeIndex === item.id ? 0 : item.id)}
                                            >
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id && (
                                            <div className="show accordion-collapse border-0 collapse">
                                                <div className="accordion-body text-muted bg-white collapsed">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
