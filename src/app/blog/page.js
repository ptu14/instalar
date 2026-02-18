import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar/navbar";
import KomplexFooter from "../components/footer/komplexFooter";

import { FiArrowRight, FiCalendar, FiTag } from "@/app/assets/icons/vander";

import "./blog.css";

// Adres WordPress API
const API_URL = 'https://komplexsystem.com/wp-json/wp/v2';

// Konfiguracja ISR - rewalidacja co 1 godzinę
export const revalidate = 3600;

// Funkcja pomocnicza do formatowania daty
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pl-PL', options);
}

// Funkcja do usuwania tagów HTML
function stripHtml(html) {
    return html.replace(/<[^>]+>/g, '');
}

// Pobierz dane dla strony
export async function generateMetadata({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const categorySlug = resolvedSearchParams?.category;
    let categoryName = "";

    if (categorySlug) {
        try {
            const response = await fetch(`${API_URL}/categories?slug=${categorySlug}`, {
                next: { revalidate: 3600 }
            });

            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) {
                    categoryName = data[0].name;
                }
            }
        } catch (err) {
            console.error("Błąd podczas pobierania kategorii:", err);
        }
    }

    return {
        title: categoryName ? `Blog - ${categoryName} | Komplex System` : "Blog | Komplex System",
        description: "Najnowsze wpisy i artykuły o odnawialnych źródłach energii, fotowoltaice, pompach ciepła i efektywności energetycznej.",
        alternates: {
            canonical: "https://www.komplexsystem.pl/blog",
        },
    };
}

export default async function BlogPage({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const categorySlug = resolvedSearchParams?.category;
    const page = resolvedSearchParams?.page || 1;

    // Pobierz kategorie
    let categories = [];
    try {
        const categoriesResponse = await fetch(`${API_URL}/categories`, {
            next: { revalidate: 3600 }
        });

        if (categoriesResponse.ok) {
            categories = await categoriesResponse.json();
        }
    } catch (err) {
        console.error("Błąd podczas pobierania kategorii:", err);
    }

    // Pobierz ID kategorii jeśli jest slug
    let categoryId = null;
    if (categorySlug) {
        const category = categories.find(cat => cat.slug === categorySlug);
        if (category) {
            categoryId = category.id;
        }
    }

    // Pobierz posty główne
    let posts = [];
    let totalPages = 1;
    try {
        const queryParams = new URLSearchParams({
            _embed: 'true',
            per_page: '6',
            page: page.toString()
        });

        if (categoryId) {
            queryParams.append('categories', categoryId.toString());
        }

        const postsResponse = await fetch(`${API_URL}/posts?${queryParams.toString()}`, {
            next: { revalidate: 3600 }
        });

        if (postsResponse.ok) {
            posts = await postsResponse.json();
            const totalPagesHeader = postsResponse.headers.get('x-wp-totalpages');
            totalPages = parseInt(totalPagesHeader || '1', 10);
        }
    } catch (err) {
        console.error("Błąd podczas pobierania postów:", err);
    }

    // Pobierz popularne posty
    let popularPosts = [];
    try {
        const popularResponse = await fetch(`${API_URL}/posts?_embed=true&per_page=3&orderby=date`, {
            next: { revalidate: 3600 }
        });

        if (popularResponse.ok) {
            popularPosts = await popularResponse.json();
        }
    } catch (err) {
        console.error("Błąd podczas pobierania popularnych wpisów:", err);
    }

    // Pobranie nazwy aktualnej kategorii
    const currentCategory = categorySlug ? categories.find(cat => cat.slug === categorySlug) : null;

    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            {/* Hero Section */}
            <section className="bg-half-170 d-table w-100" style={{background: `linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)`}}>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                                    {currentCategory ? `Blog - ${currentCategory.name}` : 'Blog'}
                                </h5>
                                <p className="text-white-50 para-desc mb-0 mx-auto">
                                    Najnowsze wpisy i artykuły o odnawialnych źródłach energii, fotowoltaice i efektywności energetycznej
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                            <ul className="breadcrumb breadcrumb-muted mt-2 mb-0 px-2 py-0">
                                <li className="breadcrumb-item"><Link href="/">Strona główna</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <div className="col-lg-8 col-md-6">
                            <div className="row">
                                {posts.length === 0 ? (
                                    <div className="col-12 text-center">
                                        <div className="text-center">
                                            <h5>Brak wpisów do wyświetlenia</h5>
                                            <p className="text-muted">Sprawdź ponownie później lub wybierz inną kategorię.</p>
                                        </div>
                                    </div>
                                ) : (
                                    posts.map((post) => {
                                        const featuredImageUrl = post._embedded &&
                                                               post._embedded['wp:featuredmedia'] &&
                                                               post._embedded['wp:featuredmedia'][0] ?
                                                               post._embedded['wp:featuredmedia'][0].source_url :
                                                               '/images/blog/01.jpg';

                                        const postCategories = post._embedded &&
                                                              post._embedded['wp:term'] &&
                                                              post._embedded['wp:term'][0] ?
                                                              post._embedded['wp:term'][0] : [];

                                        const excerpt = post.excerpt ? stripHtml(post.excerpt.rendered) : '';
                                        const shortExcerpt = excerpt.length > 150 ? excerpt.substring(0, 150) + '...' : excerpt;

                                        return (
                                            <div className="col-lg-6 col-md-12 mb-4 pb-2" key={post.id}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden h-100">
                                                    <div className="image position-relative overflow-hidden">
                                                        <Image
                                                            src={featuredImageUrl}
                                                            alt={post.title.rendered || ""}
                                                            width={800}
                                                            height={600}
                                                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                                            className="img-fluid"
                                                            loading="lazy"
                                                        />
                                                        <div className="overlay rounded-top bg-dark"></div>

                                                        {postCategories.length > 0 && (
                                                            <div className="blog-tag">
                                                                <Link href={`/blog?category=${postCategories[0].slug}`} className="badge text-bg-light">
                                                                    {postCategories[0].name}
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="card-body content d-flex flex-column">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <small className="text-muted me-3">
                                                                <FiCalendar className="me-1" />
                                                                {formatDate(post.date)}
                                                            </small>
                                                            {postCategories.length > 0 && (
                                                                <small className="text-muted">
                                                                    <FiTag className="me-1" />
                                                                    <Link
                                                                        href={`/blog?category=${postCategories[0].slug}`}
                                                                        className="text-muted"
                                                                    >
                                                                        {postCategories[0].name}
                                                                    </Link>
                                                                </small>
                                                            )}
                                                        </div>

                                                        <h5 className="mb-3">
                                                            <Link href={`/blog/${post.slug}`} className="card-title title text-dark">
                                                                {post.title.rendered}
                                                            </Link>
                                                        </h5>

                                                        <p className="text-muted flex-grow-1">{shortExcerpt}</p>

                                                        <div className="mt-auto">
                                                            <Link href={`/blog/${post.slug}`} className="btn btn-link text-dark p-0">
                                                                Czytaj więcej <FiArrowRight className="align-middle ms-1" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            {/* Paginacja */}
                            {totalPages > 1 && (
                                <div className="row">
                                    <div className="col-12 mt-4 pt-2">
                                        <ul className="pagination justify-content-center mb-0">
                                            {/* Previous */}
                                            {parseInt(page) > 1 && (
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        href={`/blog?page=${parseInt(page) - 1}${categorySlug ? `&category=${categorySlug}` : ''}`}
                                                        aria-label="Previous"
                                                    >
                                                        <span aria-hidden="true">
                                                            <i className="mdi mdi-chevron-left mdi-18px"></i>
                                                        </span>
                                                    </Link>
                                                </li>
                                            )}

                                            {/* Page Numbers */}
                                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                                const pageNum = i + 1;
                                                const isActive = pageNum === parseInt(page);

                                                return (
                                                    <li key={pageNum} className={`page-item ${isActive ? 'active' : ''}`}>
                                                        <Link
                                                            className="page-link"
                                                            href={`/blog?page=${pageNum}${categorySlug ? `&category=${categorySlug}` : ''}`}
                                                        >
                                                            {pageNum}
                                                        </Link>
                                                    </li>
                                                );
                                            })}

                                            {/* Next */}
                                            {parseInt(page) < totalPages && (
                                                <li className="page-item">
                                                    <Link
                                                        className="page-link"
                                                        href={`/blog?page=${parseInt(page) + 1}${categorySlug ? `&category=${categorySlug}` : ''}`}
                                                        aria-label="Next"
                                                    >
                                                        <span aria-hidden="true">
                                                            <i className="mdi mdi-chevron-right mdi-18px"></i>
                                                        </span>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="sidebar sticky-bar">

                                {/* Categories Widget */}
                                {categories.length > 0 && (
                                    <div className="widget">
                                        <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Kategorie</h6>
                                        <ul className="list-unstyled mt-4 mb-0">
                                            <li className={`d-flex justify-content-between mb-2 ${!categorySlug ? 'fw-bold' : ''}`}>
                                                <Link href="/blog" className="title text-dark">Wszystkie</Link>
                                                <span className="badge bg-soft-primary">Wszystkie</span>
                                            </li>
                                            {categories.slice(0, 6).map((category) => (
                                                <li key={category.id} className={`d-flex justify-content-between mb-2 ${categorySlug === category.slug ? 'fw-bold' : ''}`}>
                                                    <Link href={`/blog?category=${category.slug}`} className="title text-dark">
                                                        {category.name}
                                                    </Link>
                                                    <span className="badge bg-soft-primary">{category.count}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Recent Posts Widget */}
                                {popularPosts.length > 0 && (
                                    <div className="widget mt-4 pt-2">
                                        <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Najnowsze wpisy</h6>
                                        <div className="mt-4">
                                            {popularPosts.map((post) => {
                                                const featuredImageUrl = post._embedded &&
                                                                       post._embedded['wp:featuredmedia'] &&
                                                                       post._embedded['wp:featuredmedia'][0] ?
                                                                       post._embedded['wp:featuredmedia'][0].source_url :
                                                                       '/images/blog/01.jpg';

                                                return (
                                                    <div className="d-flex align-items-center mt-3" key={post.id}>
                                                        <Image
                                                            src={featuredImageUrl}
                                                            alt={post.title.rendered}
                                                            width={65}
                                                            height={65}
                                                            style={{ width: '65px', height: '65px', objectFit: 'cover' }}
                                                            className="avatar avatar-small rounded"
                                                            loading="lazy"
                                                        />
                                                        <div className="flex-1 ms-3">
                                                            <Link href={`/blog/${post.slug}`} className="d-block title text-dark fw-medium">
                                                                {post.title.rendered.length > 50 ?
                                                                    post.title.rendered.substring(0, 50) + '...' :
                                                                    post.title.rendered
                                                                }
                                                            </Link>
                                                            <span className="text-muted small">
                                                                <FiCalendar className="me-1" />
                                                                {formatDate(post.date)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Tags Widget */}
                                <div className="widget mt-4 pt-2 text-center">
                                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tagi</h6>
                                    <div className="tagcloud mt-4">
                                        <Link href="/blog?category=fotowoltaika" className="rounded text-dark">Fotowoltaika</Link>
                                        <Link href="/blog?category=pompy-ciepla" className="rounded text-dark">Pompy ciepła</Link>
                                        <Link href="/blog?category=energia-odnawialna" className="rounded text-dark">Energia odnawialna</Link>
                                        <Link href="/blog?category=efektywnosc-energetyczna" className="rounded text-dark">Efektywność energetyczna</Link>
                                        <Link href="/blog?category=dotacje" className="rounded text-dark">Dotacje</Link>
                                        <Link href="/blog?category=technologie" className="rounded text-dark">Technologie</Link>
                                        <Link href="/blog?category=poradniki" className="rounded text-dark">Poradniki</Link>
                                        <Link href="/blog?category=nowosci" className="rounded text-dark">Nowości</Link>
                                    </div>
                                </div>

                                {/* CTA Widget */}
                                <div className="widget mt-4 pt-2">
                                    <div className="p-4 rounded shadow bg-light">
                                        <h6 className="widget-title">Potrzebujesz doradztwa?</h6>
                                        <p className="text-muted mb-3">Skontaktuj się z naszymi ekspertami i uzyskaj darmową konsultację.</p>
                                        <Link href="/kontakt" className="btn btn-primary btn-sm">Skontaktuj się</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <KomplexFooter/>
        </>
    );
}

