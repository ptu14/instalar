// Banery promocyjne - dodaj nowy obiekt do tablicy, aby wyświetlić nowy baner.
// Po upływie daty `expiresAt` baner automatycznie przestaje się wyświetlać.

const promoBanners = [
    {
        id: 'krakow-oze-2026',
        // Data wygaśnięcia (włącznie - baner widoczny do końca tego dnia)
        expiresAt: '2026-04-24',
        badge: 'Nabór wniosków do 24 kwietnia',
        title: 'Dotacje na OZE w Krakowie - złóż wniosek razem z nami!',
        description: 'Gmina Miejska Kraków dofinansowuje do 60% kosztów instalacji OZE. Pomożemy Ci przygotować wniosek i zrealizować inwestycję.',
        highlights: [
            { label: 'Pompa ciepła powietrzna', value: 'do 18 000 zł' },
            { label: 'Pompa ciepła gruntowa', value: 'do 33 000 zł' },
            { label: 'Fotowoltaika', value: 'do 15 000 zł' },
            { label: 'Magazyn energii', value: 'do 9 000 zł' },
        ],
        ctaText: 'Zapytaj o dotację',
        ctaLink: '/kontakt',
    },
];

export default promoBanners;
