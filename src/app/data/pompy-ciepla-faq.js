const pompyCieplaFaqData = [
    {
        id: 1,
        title: 'Czy pompa ciepła ogrzeje dom zimą, także przy mrozach?',
        desc: 'Tak. Dobrze dobrana pompa ciepła może skutecznie ogrzewać dom również zimą. Kluczowe są poprawny dobór mocy urządzenia, parametry budynku i właściwie zaprojektowana instalacja grzewcza.'
    },
    {
        id: 2,
        title: 'Czy pompa ciepła nadaje się do starego domu?',
        desc: 'Tak, ale przed montażem warto sprawdzić zapotrzebowanie budynku na ciepło, izolację i parametry obecnej instalacji. W wielu modernizowanych domach pompa ciepła działa poprawnie, choć czasem potrzebne są dodatkowe zmiany, np. w grzejnikach lub ociepleniu.'
    },
    {
        id: 3,
        title: 'Czy do pompy ciepła trzeba mieć ogrzewanie podłogowe?',
        desc: 'Nie. Ogrzewanie podłogowe jest bardzo korzystne, bo pracuje na niskiej temperaturze zasilania, ale pompa ciepła może współpracować także z grzejnikami. Trzeba tylko ocenić, czy instalacja pozwoli osiągnąć dobrą efektywność.'
    },
    {
        id: 4,
        title: 'Czy pompa ciepła zużywa dużo prądu?',
        desc: 'Pompa ciepła pobiera energię elektryczną, ale nie zamienia jej 1:1 w ciepło jak zwykły grzejnik elektryczny. Większość energii pobiera z otoczenia, dlatego przy dobrze dobranym systemie koszty eksploatacji mogą być korzystne.'
    },
    {
        id: 5,
        title: 'Czy pompa ciepła działa bez fotowoltaiki?',
        desc: 'Tak. Fotowoltaika nie jest wymagana do działania pompy ciepła. Może obniżyć rachunki za prąd, ale sama pompa ciepła może być opłacalna również bez instalacji PV.'
    },
    {
        id: 6,
        title: 'Ile kosztuje pompa ciepła z montażem?',
        desc: 'Cena zależy od metrażu domu, zapotrzebowania na ciepło, rodzaju instalacji, zakresu modernizacji i wybranego urządzenia. Dlatego rzetelna wycena powinna być przygotowana po analizie budynku i potrzeb domowników, a nie tylko "na telefon". To podejście ogranicza ryzyko przewymiarowania lub niedowymiarowania systemu.'
    },
    {
        id: 7,
        title: 'Ile trwa montaż pompy ciepła?',
        desc: 'W wielu realizacjach montaż trwa od 1 do 4 dni, ale czas zależy od stopnia skomplikowania instalacji i zakresu prac dodatkowych. Dłużej mogą potrwać realizacje wymagające większej przebudowy kotłowni lub instalacji.'
    },
    {
        id: 8,
        title: 'Czy pompa ciepła jest głośna?',
        desc: 'Nowoczesne pompy ciepła są zwykle znacznie cichsze niż wiele osób zakłada, ale poziom hałasu zależy od modelu, miejsca montażu i sposobu wykonania instalacji. Dlatego ważny jest dobór urządzenia i prawidłowe usytuowanie jednostki zewnętrznej.'
    },
    {
        id: 9,
        title: 'W jakiej odległości od granicy działki można zamontować pompę ciepła?',
        desc: 'To zależy od konkretnej lokalizacji, sposobu montażu i wymagań dotyczących hałasu. W praktyce trzeba uwzględnić nie tylko miejsce technicznego montażu, ale też komfort sąsiadów i parametry akustyczne urządzenia.'
    },
    {
        id: 10,
        title: 'Czy pompa ciepła może również chłodzić dom?',
        desc: 'Tak, część pomp ciepła może wspierać chłodzenie budynku. Zakres tej funkcji zależy od modelu urządzenia i rodzaju całej instalacji.'
    },
    {
        id: 11,
        title: 'Czy pompa ciepła podgrzewa też ciepłą wodę użytkową?',
        desc: 'Tak. Pompa ciepła może ogrzewać dom i jednocześnie przygotowywać ciepłą wodę użytkową, jeśli system został tak zaprojektowany.'
    },
    {
        id: 12,
        title: 'Czy trzeba wymieniać grzejniki przy montażu pompy ciepła?',
        desc: 'Nie zawsze. W części budynków obecne grzejniki mogą pozostać, ale trzeba sprawdzić ich wydajność przy niższej temperaturze zasilania. Czasem konieczna jest wymiana tylko wybranych elementów instalacji.'
    },
    {
        id: 13,
        title: 'Jak dobrać moc pompy ciepła do domu?',
        desc: 'Moc pompy ciepła powinno się dobierać na podstawie rzeczywistego zapotrzebowania budynku na ciepło, a nie wyłącznie według metrażu. Znaczenie mają m.in. izolacja, powierzchnia, wentylacja, liczba domowników i sposób przygotowania ciepłej wody.'
    },
    {
        id: 14,
        title: 'Czy pompa ciepła wymaga dużo miejsca w kotłowni?',
        desc: 'Zwykle nie. W domu jednorodzinnym często wystarcza niewielka przestrzeń techniczna, choć dokładne wymagania zależą od konfiguracji systemu i osprzętu.'
    },
    {
        id: 15,
        title: 'Jak często trzeba robić serwis pompy ciepła?',
        desc: 'Pompa ciepła wymaga okresowych przeglądów, aby zachować sprawność, bezpieczeństwo i prawidłową pracę całego układu. Zakres i częstotliwość serwisu zależą od producenta oraz rodzaju instalacji.'
    },
    {
        id: 16,
        title: 'Czy można dostać dofinansowanie na pompę ciepła?',
        desc: 'Tak, w Polsce funkcjonują programy i ulgi wspierające zakup oraz montaż pomp ciepła, ale dostępność zależy od rodzaju budynku, inwestycji i aktualnych zasad programu. Przed złożeniem wniosku warto sprawdzić bieżące warunki kwalifikacji.'
    },
    {
        id: 17,
        title: 'Co obejmuje oferta Komplex System przy montażu pompy ciepła?',
        desc: 'Najczęściej klienci oczekują nie tylko samego urządzenia, ale pełnej obsługi: doboru mocy, wyceny, montażu, uruchomienia, konfiguracji i wsparcia serwisowego. Taki model odpowiada na realne pytania klientów i dobrze wpisuje się w standard rynkowy stron ofertowych firm instalacyjnych.'
    },
    {
        id: 18,
        title: 'Czy przed wyceną potrzebna jest wizja lokalna?',
        desc: 'W wielu przypadkach tak, bo dopiero oględziny budynku i instalacji pozwalają przygotować trafną rekomendację. Dzięki temu łatwiej dobrać odpowiednie urządzenie i uniknąć błędów projektowych lub montażowych.'
    },
];

export default pompyCieplaFaqData;
