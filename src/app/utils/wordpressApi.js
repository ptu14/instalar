// Cache dla danych - zwiększam czas cache'a dla bloga
const cache = new Map();
const CACHE_TTL = 60 * 60 * 1000; // 1 godzina

// Adres WordPress API  
const API_URL = 'https://komplexsystem.com/wp-json/wp/v2';

// Funkcja cache'ująca dla zapytań HTTP
export async function fetchWithCache(endpoint, params = {}) {
    const url = `${API_URL}${endpoint}`;
    const cacheKey = `${url}?${new URLSearchParams(params).toString()}`;
    const cached = cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data;
    }
    
    try {
        const response = await fetch(url + '?' + new URLSearchParams(params).toString(), {
            next: { revalidate: 3600 } // Cache na 1 godzinę w Next.js
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const totalPages = response.headers.get('x-wp-totalpages');
        
        const result = { data, totalPages: parseInt(totalPages || 1, 10) };
        
        cache.set(cacheKey, {
            data: result,
            timestamp: Date.now()
        });
        
        return result;
    } catch (error) {
        console.error('Fetch error:', error);
        // Zwróć cached dane jeśli są dostępne, nawet jeśli są przestarzałe
        if (cached) {
            return cached.data;
        }
        throw error;
    }
}

// Funkcje helper dla konkretnych endpointów
export async function getCategories() {
    const result = await fetchWithCache('/categories');
    return result.data;
}

export async function getPosts(params = {}) {
    const defaultParams = {
        _embed: true,
        per_page: 6,
        ...params
    };
    return await fetchWithCache('/posts', defaultParams);
}

export async function getPostBySlug(slug) {
    const result = await fetchWithCache('/posts', { slug, _embed: true });
    return result.data[0] || null;
}

export async function getCategoryBySlug(slug) {
    const result = await fetchWithCache('/categories', { slug });
    return result.data[0] || null;
}

/**
 * Pobiera kategorie
 * @returns {Promise<Array>} - Lista kategorii
 */
export async function getCategories() {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania kategorii:', error);
    throw error;
  }
}

/**
 * Pobiera tagi
 * @returns {Promise<Array>} - Lista tagów
 */
export async function getTags() {
  try {
    const response = await api.get('/tags');
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania tagów:', error);
    throw error;
  }
}

/**
 * Formatuje datę w formacie czytelnym dla użytkownika
 * @param {string} dateString - Data w formacie ISO
 * @returns {string} - Sformatowana data
 */
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('pl-PL', options);
}

/**
 * Usuwa tagi HTML z tekstu
 * @param {string} html - Tekst z tagami HTML
 * @returns {string} - Czysty tekst
 */
export function stripHtml(html) {
  if (typeof window !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  } else {
    // Dla środowiska serwerowego (SSR)
    return html.replace(/<[^>]+>/g, '');
  }
}

/**
 * Tworzy skrót tekstu o określonej długości
 * @param {string} text - Tekst do skrócenia
 * @param {number} maxLength - Maksymalna długość
 * @returns {string} - Skrócony tekst
 */
export function truncateText(text, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export default {
  getPosts,
  getPostBySlug,
  getCategories,
  getTags,
  formatDate,
  stripHtml,
  truncateText
};