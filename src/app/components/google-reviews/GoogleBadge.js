'use client'
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function GoogleBadge({ className = "" }) {
    return (
        <Link
            href="https://www.google.com/search?q=Komplex+System+G%C5%82ogocz%C3%B3w"
            target="_blank"
            className={`d-inline-flex align-items-center bg-white rounded-pill shadow-sm px-2 px-md-3 py-2 text-decoration-none ${className}`}
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div className="d-flex align-items-center border-end pe-2 me-2 pe-md-3 me-md-3">
                <FcGoogle className="h4 mb-0" />
            </div>
            <div>
                <div className="d-flex align-items-center">
                    <span className="fw-bold text-dark me-2">5.0</span>
                    <div className="d-flex text-warning">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="text-muted small d-none d-md-block" style={{ fontSize: '0.75rem' }}>
                    Zobacz opinie w Google
                </div>
            </div>
        </Link>
    );
}
