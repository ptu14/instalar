'use client'
import React from 'react';
import Link from 'next/link';

const FloatingPhone = () => {
    return (
        <Link
            href="tel:+48575508698"
            className="btn rounded-pill d-inline-flex align-items-center gap-2 shadow-sm px-2 px-md-3 py-2 floating-phone-btn text-white"
            style={{ transition: 'transform 0.3s ease', backgroundColor: '#013b60' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <i className="mdi mdi-phone fs-5 ring-animation"></i>
            <span className="fw-bold d-none d-md-block">+48 575 508 698</span>
        </Link>
    );
};

export default FloatingPhone;
