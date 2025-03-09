import axios from 'axios';

// Zmień na adres swojego WordPress API
const API_URL = 'https://seashell-okapi-485470.hostingersite.com/wp-json/wp/v2';

// Konfiguracja axios do obsługi WordPress API
const api = axios.create({
  baseURL: API_URL,
  params: {
    _embed: true // Zawsze pobieraj powiązane dane (media, kategorie, itp.)
  }
});

/**
 * Pobiera listę postów z WordPress
 * @param {Object} options - Opcje zapytania
 * @param {number} options.page - Numer strony
 * @param {number} options.per_page - Ilość postów na stronę
 * @param {string} options.category - Filtruj po ID kategorii
 * @param {string} options.search - Wyszukaj po słowie kluczowym
 * @returns {Promise<Array>} - Lista postów
 */
export async function getPosts(options = {}) {
  try {
    const response = await api.get('/posts', { params: options });
    return {
      posts: response.data,
      totalPages: parseInt(response.headers['x-wp-totalpages'] || 1, 10),
      total: parseInt(response.headers['x-wp-total'] || 0, 10)
    };
  } catch (error) {
    console.error('Błąd podczas pobierania postów:', error);
    throw error;
  }
}

/**
 * Pobiera pojedynczy post po jego slugu (nazwie w URL)
 * @param {string} slug - Slug posta
 * @returns {Promise<Object>} - Post
 */
export async function getPostBySlug(slug) {
  try {
    const response = await api.get('/posts', {
      params: { slug }
    });
    
    if (response.data && response.data.length > 0) {
      return response.data[0];
    }
    
    throw new Error('Post nie znaleziony');
  } catch (error) {
    console.error(`Błąd podczas pobierania posta o slugu ${slug}:`, error);
    throw error;
  }
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