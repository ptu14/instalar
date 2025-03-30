import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import "../blog.css";

import Navbar from "../../components/navbar/navbar";
import KomplexFooter from "@/app/components/footer/komplexFooter";

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

    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

            <section className="section-blog bg-light d-table w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="pages-heading">
                                <div className="page-next">
                                    <nav className="d-inline-block">
                                        <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                                            <li className="breadcrumb-item"><Link href="/">Strona główna</Link></li>
                                            <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                {error ? "Nie znaleziono wpisu" : post ? post.title.rendered : "Ładowanie..."}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        {error ? (
                            <div className="col-12 text-center">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </div>
                        ) : post ? (
                            <>
                                <div className="col-lg-8 col-md-6 mx-auto">
                                    <div className="card blog blog-detail border-0 shadow rounded">
                                        <div className="position-relative">
                                            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                                                <Image
                                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                                    alt={post.title.rendered}
                                                    width={1200}
                                                    height={800}
                                                    style={{width: '100%', height: 'auto'}}
                                                    className="img-fluid rounded-top"
                                                    priority
                                                />
                                            )}
                                        </div>
                                        <div className="card-body content">
                                            <h6><i className="mdi mdi-calendar-outline me-1"></i>{formatDate(post.date)}
                                            </h6>
                                            <h5 className="mt-3">{post.title.rendered}</h5>

                                            <div className="post-content mt-3"
                                                 dangerouslySetInnerHTML={{__html: post.content.rendered}}/>

                                            {post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && (
                                                <div
                                                    className="post-meta d-flex justify-content-between mt-5 pt-4 border-top">
                                                    <div>
                                                        <h6 className="mb-0">Kategorie: </h6>
                                                        <ul className="list-unstyled mb-0">
                                                            {post._embedded['wp:term'][0].map((category) => (
                                                                <li key={category.id} className="list-inline-item">
                                                                    <Link href={`/blog?category=${category.slug}`}
                                                                          className="text-muted">
                                                                        {category.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {post._embedded && post._embedded.author && post._embedded.author[0] && (
                                                        <div>
                                                            <h6 className="mb-0">Autor: </h6>
                                                            <span
                                                                className="text-muted">{post._embedded.author[0].name}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Powiązane wpisy */}
                                {relatedPosts.length > 0 && (
                                    <div className="col-12 mt-5">
                                        <div className="section-title mb-4 pb-2">
                                            <h4 className="title mb-3">Powiązane artykuły</h4>
                                        </div>

                                        <div className="row">
                                            {relatedPosts.map(relatedPost => {
                                                const featuredImageUrl = relatedPost._embedded &&
                                                relatedPost._embedded['wp:featuredmedia'] &&
                                                relatedPost._embedded['wp:featuredmedia'][0] ?
                                                    relatedPost._embedded['wp:featuredmedia'][0].source_url :
                                                    '/images/blog/01.jpg';

                                                return (
                                                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={relatedPost.id}>
                                                        <div className="card blog blog-primary rounded border-0 shadow">
                                                            <div className="position-relative">
                                                                <Image
                                                                    src={featuredImageUrl}
                                                                    alt={relatedPost.title.rendered}
                                                                    width={400}
                                                                    height={300}
                                                                    style={{width: '100%', height: 'auto'}}
                                                                    className="card-img-top"
                                                                />
                                                                <div className="overlay rounded-top"></div>
                                                            </div>
                                                            <div className="card-body content">
                                                                <h5>
                                                                    <Link href={`/blog/${relatedPost.slug}`}
                                                                          className="card-title title text-dark">
                                                                        {relatedPost.title.rendered}
                                                                    </Link>
                                                                </h5>
                                                                <div
                                                                    className="post-meta d-flex justify-content-between mt-3">
                                                                    <ul className="list-unstyled mb-0">
                                                                        <li className="list-inline-item me-2 mb-0">
                                                                            <i className="mdi mdi-calendar-outline me-1"></i>
                                                                            {formatDate(relatedPost.date)}
                                                                        </li>
                                                                    </ul>
                                                                    <Link href={`/blog/${relatedPost.slug}`}
                                                                          className="text-muted readmore">
                                                                        Czytaj więcej <i
                                                                        className="mdi mdi-chevron-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="col-12 text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Ładowanie...</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className="section mt-4 pb-0">
                <KomplexFooter/>
            </section>
        </>
    );
}