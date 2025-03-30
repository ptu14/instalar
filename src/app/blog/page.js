import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import Navbar from "../components/navbar/navbar";
import KomplexFooter from "../components/footer/komplexFooter";

// Adres WordPress API
const API_URL = 'https://komplexsystem.com/wp-json/wp/v2';

// Funkcja pomocnicza do formatowania daty
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pl-PL', options);
}

// Pobierz dane dla strony
export async function generateMetadata({ searchParams }) {
    const categorySlug = searchParams?.category;
    let categoryName = "";
    
    if (categorySlug) {
        try {
            const catResponse = await axios.get(`${API_URL}/categories`, {
                params: { slug: categorySlug }
            });
            if (catResponse.data && catResponse.data.length > 0) {
                categoryName = catResponse.data[0].name;
            }
        } catch (err) {
            console.error("Błąd podczas pobierania kategorii:", err);
        }
    }
    
    return {
        title: categoryName ? `Blog - ${categoryName} | Komplex System` : "Blog | Komplex System",
        description: "Najnowsze wpisy i artykuły o odnawialnych źródłach energii, fotowoltaice, pompach ciepła i efektywności energetycznej.",
    };
}

export default async function BlogPage({ searchParams }) {
    const categorySlug = searchParams?.category;
    const page = searchParams?.page || 1;
    
    // Pobierz kategorie
    let categories = [];
    try {
        const categoriesResponse = await axios.get(`${API_URL}/categories`);
        categories = categoriesResponse.data;
    } catch (err) {
        console.error("Błąd podczas pobierania kategorii:", err);
    }
    
    // Przygotuj parametry zapytania
    let queryParams = { 
        _embed: true,
        per_page: 6,
        page: page
    };
    
    // Dodaj filtrowanie po kategorii
    if (categorySlug) {
        const categoryId = categories.find(cat => cat.slug === categorySlug)?.id;
        if (categoryId) {
            queryParams.categories = categoryId;
        }
    }
    
    // Pobierz posty
    let posts = [];
    let totalPages = 1;
    let error = null;
    
    try {
        const response = await axios.get(`${API_URL}/posts`, { params: queryParams });
        posts = response.data;
        totalPages = parseInt(response.headers['x-wp-totalpages'] || 1, 10);
    } catch (err) {
        error = "Nie udało się pobrać wpisów z bloga";
        console.error("Błąd podczas pobierania wpisów:", err);
    }

    // Funkcja do usuwania tagów HTML
    function stripHtml(html) {
        return html.replace(/<[^>]+>/g, '');
    }

    return (
        <>
            <Navbar navClass="nav-sticky defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" />

            <section className="first-section section">
                <div className="container">
                    {/* Kategorie */}
                    {categories.length > 0 && (
                        <div className="row justify-content-center">
                            <div className="col-12 mb-4">
                                <div className="section-title text-center">
                                    <h4>Kategorie</h4>
                                    <div className="mt-4">
                                        <Link href="/blog" className={`btn btn-sm ${!categorySlug ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}>
                                            Wszystkie
                                        </Link>
                                        {categories.map((category) => (
                                            <Link 
                                                key={category.id} 
                                                href={`/blog?category=${category.slug}`} 
                                                className={`btn btn-sm ${categorySlug === category.slug ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="row">
                        {error ? (
                            <div className="col-12 text-center">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                                <p>Spróbuj odświeżyć stronę lub sprawdź połączenie z internetem.</p>
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>Brak wpisów do wyświetlenia</p>
                            </div>
                        ) : (
                            posts.map((post) => {
                                // Pobranie URL obrazka
                                const featuredImageUrl = post._embedded && 
                                                       post._embedded['wp:featuredmedia'] && 
                                                       post._embedded['wp:featuredmedia'][0] ? 
                                                       post._embedded['wp:featuredmedia'][0].source_url : 
                                                       '/images/blog/01.jpg';

                                // Pobranie kategorii
                                const postCategories = post._embedded && 
                                                     post._embedded['wp:term'] && 
                                                     post._embedded['wp:term'][0] ?
                                                     post._embedded['wp:term'][0] : [];

                                // Skrócenie opisu
                                const excerpt = post.excerpt ? stripHtml(post.excerpt.rendered) : '';
                                
                                return (
                                    <div className="col-lg-4 col-md-6 mb-4 pb-2" key={post.id}>
                                        <div className="card blog blog-primary rounded border-0 shadow overflow-hidden">
                                            <div className="position-relative">
                                                <Image 
                                                    src={featuredImageUrl} 
                                                    alt={post.title.rendered || ""}
                                                    width={800}
                                                    height={600}
                                                    style={{ width: '100%', height: 'auto' }}
                                                    className="card-img-top"
                                                />
                                                <div className="overlay rounded-top"></div>
                                            </div>
                                            <div className="card-body content">
                                                <h5><Link href={`/blog/${post.slug}`} className="card-title title text-dark">{post.title.rendered}</Link></h5>
                                                <p className="text-muted">{excerpt}</p>
                                                <div className="post-meta d-flex justify-content-between mt-3">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="list-inline-item me-2 mb-0"><i className="mdi mdi-calendar-outline me-1"></i>{formatDate(post.date)}</li>
                                                        {postCategories.length > 0 && (
                                                            <li className="list-inline-item">
                                                                <i className="mdi mdi-tag me-1"></i>
                                                                <Link 
                                                                    href={`/blog?category=${postCategories[0].slug}`} 
                                                                    className="text-muted"
                                                                >
                                                                    {postCategories[0].name}
                                                                </Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                    <Link href={`/blog/${post.slug}`} className="text-muted readmore">Czytaj więcej <i className="mdi mdi-chevron-right"></i></Link>
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
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                                        <li key={pageNum} className={`page-item ${pageNum === parseInt(page) ? 'active' : ''}`}>
                                            <Link 
                                                className="page-link" 
                                                href={`/blog?page=${pageNum}${categorySlug ? `&category=${categorySlug}` : ''}`}
                                            >
                                                {pageNum}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <KomplexFooter/>
        </>
    );
}