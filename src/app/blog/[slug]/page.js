import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import "../blog.css";

import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "@/app/components/footer/komplexFooter";

import {FiArrowRight, FiCalendar, FiTag, FiUser, FiShare2, FiFacebook, FiTwitter, FiLinkedin, FiMail, FiEye, FiClock} from "../../assets/icons/vander";

// Adres WordPress API
const API_URL = 'https://komplexsystem.com/wp-json/wp/v2';

// Funkcja pomocnicza do formatowania daty
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pl-PL', options);
}

// Funkcja do usuwania tagów HTML
function stripHtml(html) {
    return html.replace(/<[^>]+>/g, '');
}

// Funkcja do szacowania czasu czytania
function estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const words = stripHtml(content).split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

// Dynamicznie generuj metadane SEO dla wpisu
export async function generateMetadata({ params }) {
    const { slug } = params;
    
    try {
        const response = await axios.get(`${API_URL}/posts`, {
            params: {
                slug: slug,
                _embed: true,
            }
        });
        
        if (response.data && response.data.length > 0) {
            const post = response.data[0];
            
            // Skrócenie opisu do 160 znaków
            let description = stripHtml(post.excerpt.rendered || post.content.rendered);
            description = description.substring(0, 160).trim() + (description.length > 160 ? '...' : '');
            
            // Pobranie URL obrazu wyróżniającego
            let ogImage;
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                ogImage = post._embedded['wp:featuredmedia'][0].source_url;
            }
            
            return {
                title: `${post.title.rendered} | Komplex System Blog`,
                description: description,
                openGraph: ogImage ? {
                    images: [{ url: ogImage }],
                } : undefined,
            };
        }
    } catch (error) {
        console.error("Błąd podczas pobierania metadanych wpisu:", error);
    }
    
    // Domyślne metadane
    return {
        title: "Blog | Komplex System",
        description: "Artykuły o odnawialnych źródłach energii, fotowoltaice i pompach ciepła.",
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;
    
    let post = null;
    let error = null;
    
    try {
        const response = await axios.get(`${API_URL}/posts`, {
            params: {
                slug: slug,
                _embed: true,
            }
        });
        
        if (response.data && response.data.length > 0) {
            post = response.data[0];
        } else {
            error = "Nie znaleziono wpisu";
        }
    } catch (err) {
        error = "Nie udało się pobrać wpisu z bloga";
        console.error("Błąd podczas pobierania wpisu:", err);
    }

    // Pobierz powiązane wpisy z tej samej kategorii
    let relatedPosts = [];
    if (post && post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]) {
        const categoryIds = post._embedded['wp:term'][0].map(cat => cat.id);
        if (categoryIds.length > 0) {
            try {
                const relatedResponse = await axios.get(`${API_URL}/posts`, {
                    params: {
                        categories: categoryIds.join(','),
                        exclude: post.id, // Wyklucz bieżący post
                        per_page: 3,
                        _embed: true,
                    }
                });
                relatedPosts = relatedResponse.data;
            } catch (err) {
                console.error("Błąd podczas pobierania powiązanych wpisów:", err);
            }
        }
    }

    // Pobierz popularne wpisy dla sidebara
    let popularPosts = [];
    try {
        const popularResponse = await axios.get(`${API_URL}/posts`, { 
            params: { _embed: true, per_page: 4, orderby: 'date' }
        });
        popularPosts = popularResponse.data;
    } catch (err) {
        console.error("Błąd podczas pobierania popularnych wpisów:", err);
    }

    // Pobierz kategorie dla sidebara
    let categories = [];
    try {
        const categoriesResponse = await axios.get(`${API_URL}/categories`);
        categories = categoriesResponse.data;
    } catch (err) {
        console.error("Błąd podczas pobierania kategorii:", err);
    }

    if (error) {
        return (
            <>
                <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
                
                <section className="bg-half-170 d-table w-100" style={{background: `linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)`}}>
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-12">
                                <div className="title-heading text-center">
                                    <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                                        Błąd 404
                                    </h5>
                                    <p className="text-white-50 para-desc mb-0 mx-auto">
                                        Nie znaleziono artykułu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                                <Link href="/blog" className="btn btn-primary">Powrót do bloga</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <KomplexFooter/>
            </>
        );
    }

    if (!post) {
        return (
            <>
                <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Ładowanie...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <KomplexFooter/>
            </>
        );
    }

    const featuredImageUrl = post._embedded && 
                           post._embedded['wp:featuredmedia'] && 
                           post._embedded['wp:featuredmedia'][0] ? 
                           post._embedded['wp:featuredmedia'][0].source_url : 
                           '/images/blog/01.jpg';

    const postCategories = post._embedded && 
                         post._embedded['wp:term'] && 
                         post._embedded['wp:term'][0] ?
                         post._embedded['wp:term'][0] : [];

    const authorName = post._embedded && post._embedded.author && post._embedded.author[0] ? 
                      post._embedded.author[0].name : 'Komplex System';

    const readingTime = estimateReadingTime(post.content.rendered);
    const postUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

            {/* Hero Section */}
            <section className="bg-half-170 d-table w-100 blog-post-hero" 
                     style={{
                         background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${featuredImageUrl}) center/cover no-repeat`,
                         minHeight: '500px'
                     }}>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h1 className="heading fw-semibold mb-3 sub-heading text-white title-dark">
                                    {post.title.rendered}
                                </h1>
                                
                                <div className="d-flex justify-content-center align-items-center text-white-50 mb-4 post-meta-hero flex-wrap">
                                    <span className="me-3 mb-2">
                                        <FiCalendar className="me-1" />
                                        {formatDate(post.date)}
                                    </span>
                                    <span className="me-3 mb-2">
                                        <FiClock className="me-1" />
                                        {readingTime} min czytania
                                    </span>
                                    {postCategories.length > 0 && (
                                        <span className="mb-2">
                                            <FiTag className="me-1" />
                                            {postCategories[0].name}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                            <ul className="breadcrumb breadcrumb-muted mb-0 px-2 py-0">
                                <li className="breadcrumb-item"><Link href="/">Strona główna</Link></li>
                                <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Artykuł</li>
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
                        <div className="col-lg-8 col-md-7">
                            <div className="card blog blog-detail border-0 shadow rounded">
                                <div className="card-body content">

                                    {/* Post Content */}
                                    <div className="post-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>

                                    {/* Post Footer */}
                                    <div className="post-meta d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
                                        <div>
                                            <h6 className="mb-2">Kategorie:</h6>
                                            <div className="d-flex flex-wrap">
                                                {postCategories.map((category) => (
                                                    <Link key={category.id} href={`/blog?category=${category.slug}`}
                                                          className="badge bg-soft-primary me-2 mb-2">
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-2">Autor:</h6>
                                            <span className="text-muted">{authorName}</span>
                                        </div>
                                    </div>

                                    {/* Author Bio */}
                                    <div className="p-4 mt-4 rounded bg-light">
                                        <div className="d-flex align-items-center">
                                            <Image src="/images/paulina.webp" width={60} height={60} 
                                                   className="avatar avatar-medium rounded-circle me-3" alt="Paulina - Komplex System" />
                                            <div>
                                                <h6 className="mb-1">Paulina - Komplex System</h6>
                                                <p className="text-muted mb-0">
                                                    Ekspert w dziedzinie odnawialnych źródeł energii, fotowoltaiki i efektywności energetycznej. 
                                                    Specjalizuje się w doradztwie energetycznym i nowoczesnych rozwiązaniach ekologicznych.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comments Section */}
                                    {/*<div className="mt-5 pt-4 border-top">*/}
                                    {/*    <h5 className="mb-4">Komentarze</h5>*/}
                                    {/*    <div className="p-4 rounded bg-light text-center">*/}
                                    {/*        <h6>Dołącz do dyskusji!</h6>*/}
                                    {/*        <p className="text-muted mb-3">*/}
                                    {/*            Podziel się swoimi przemyśleniami na temat tego artykułu. */}
                                    {/*            Twoje zdanie jest dla nas ważne!*/}
                                    {/*        </p>*/}
                                    {/*        <Link href="/contact" className="btn btn-primary">Skontaktuj się z nami</Link>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="sidebar sticky-bar">
                                
                                {/* Recent Posts Widget */}
                                {popularPosts.length > 0 && (
                                    <div className="widget">
                                        <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                                            Najnowsze artykuły
                                        </h6>
                                        <div className="mt-4">
                                            {popularPosts.slice(0, 4).map((popularPost) => {
                                                const popularImageUrl = popularPost._embedded && 
                                                                       popularPost._embedded['wp:featuredmedia'] && 
                                                                       popularPost._embedded['wp:featuredmedia'][0] ? 
                                                                       popularPost._embedded['wp:featuredmedia'][0].source_url : 
                                                                       '/images/blog/01.jpg';
                                                
                                                return (
                                                    <div className="d-flex align-items-center mt-3" key={popularPost.id}>
                                                        <Image 
                                                            src={popularImageUrl} 
                                                            alt={popularPost.title.rendered}
                                                            width={70}
                                                            height={70}
                                                            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                                            className="avatar avatar-small rounded" 
                                                        />
                                                        <div className="flex-1 ms-3">
                                                            <Link href={`/blog/${popularPost.slug}`} className="d-block title text-dark fw-medium">
                                                                {popularPost.title.rendered.length > 60 ? 
                                                                    popularPost.title.rendered.substring(0, 60) + '...' : 
                                                                    popularPost.title.rendered
                                                                }
                                                            </Link>
                                                            <span className="text-muted small">
                                                                <FiCalendar className="me-1" />
                                                                {formatDate(popularPost.date)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Categories Widget */}
                                {categories.length > 0 && (
                                    <div className="widget mt-4">
                                        <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                                            Kategorie
                                        </h6>
                                        <ul className="list-unstyled mt-4 mb-0">
                                            {categories.slice(0, 6).map((category) => (
                                                <li key={category.id} className="d-flex justify-content-between mb-2">
                                                    <Link href={`/blog?category=${category.slug}`} className="title text-dark">
                                                        {category.name}
                                                    </Link>
                                                    <span className="badge bg-soft-primary">{category.count}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTA Widget */}
                                <div className="widget mt-4">
                                    <div className="p-4 rounded shadow bg-light">
                                        <h6 className="widget-title">Bezpłatna konsultacja</h6>
                                        <p className="text-muted mb-3">
                                            Potrzebujesz pomocy w wyborze rozwiązania energetycznego? 
                                            Skontaktuj się z naszymi ekspertami!
                                        </p>
                                        <Link href="/kontakt" className="btn btn-primary btn-sm">Umów konsultację</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="row mt-5">
                            <div className="col-12">
                                <h4 className="mb-4">Powiązane artykuły</h4>
                                <div className="row">
                                    {relatedPosts.map(relatedPost => {
                                        const relatedImageUrl = relatedPost._embedded &&
                                        relatedPost._embedded['wp:featuredmedia'] &&
                                        relatedPost._embedded['wp:featuredmedia'][0] ?
                                            relatedPost._embedded['wp:featuredmedia'][0].source_url :
                                            '/images/blog/01.jpg';

                                        const relatedExcerpt = relatedPost.excerpt ? stripHtml(relatedPost.excerpt.rendered) : '';
                                        const shortRelatedExcerpt = relatedExcerpt.length > 100 ? relatedExcerpt.substring(0, 100) + '...' : relatedExcerpt;

                                        return (
                                            <div className="col-lg-4 col-md-6 mb-4 pb-2" key={relatedPost.id}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden h-100">
                                                    <div className="image position-relative overflow-hidden">
                                                        <Image
                                                            src={relatedImageUrl}
                                                            alt={relatedPost.title.rendered}
                                                            width={400}
                                                            height={200}
                                                            style={{width: '100%', height: '200px', objectFit: 'cover'}}
                                                            className="img-fluid"
                                                        />
                                                        <div className="overlay rounded-top bg-dark"></div>
                                                    </div>
                                                    <div className="card-body content d-flex flex-column">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <small className="text-muted">
                                                                <FiCalendar className="me-1" />
                                                                {formatDate(relatedPost.date)}
                                                            </small>
                                                        </div>
                                                        <h5 className="mb-3">
                                                            <Link href={`/blog/${relatedPost.slug}`} className="card-title title text-dark">
                                                                {relatedPost.title.rendered}
                                                            </Link>
                                                        </h5>
                                                        <p className="text-muted flex-grow-1">{shortRelatedExcerpt}</p>
                                                        <div className="mt-auto">
                                                            <Link href={`/blog/${relatedPost.slug}`} className="btn btn-link text-dark p-0">
                                                                Czytaj więcej <FiArrowRight className="align-middle ms-1" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <KomplexFooter/>
        </>
    );
}