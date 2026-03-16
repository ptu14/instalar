import React from "react";
import { FiPhone, FiFileText, FiSettings } from "react-icons/fi";

export default function Process({ title, icon }) {
    const steps = [
        {
            number: "1",
            icon: FiPhone,
            title: "Konsultacja",
            desc: "Zadzwoń lub zostaw numer — doradzimy najlepsze rozwiązanie dla Twojego domu."
        },
        {
            number: "2",
            icon: FiFileText,
            title: "Indywidualna Oferta",
            desc: "Przygotujemy spersonalizowany kosztorys z uwzględnieniem dotacji i finansowania."
        },
        {
            number: "3",
            icon: FiSettings,
            title: "Montaż i Serwis",
            desc: "Nasi specjaliści zajmą się montażem, uruchomieniem i serwisem instalacji."
        }
    ];

    return (
        <>
            <div className="row">
                {steps.map((step, index) => {
                    let StepIcon = step.icon;
                    return (
                        <div className="col-md-4 mt-3" key={index}>
                            <div className="d-flex align-items-start p-3">
                                <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 me-3 flex-shrink-0">
                                    {icon === false ? step.number : <StepIcon className="icon" />}
                                </div>
                                <div>
                                    <h5 className="mb-1">{step.title}</h5>
                                    <p className="text-muted mb-0 small">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}
