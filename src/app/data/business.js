import {HeatPump, LightMode, Savings, BatteryHoriz000} from "@project-lary/react-material-symbols";
export const aboutData = [
    {
        icon: HeatPump,
        title: 'Pompy ciepła',
        link: '/oferta/pompy-ciepla',
        desc: <>Energooszczędne pompy ciepła do ogrzewania domu i wody użytkowej. <strong>Dostępne dotacje do 21 tys. zł</strong> z programu Czyste Powietrze. Oszczędności na ogrzewaniu <strong>do 75%</strong> w porównaniu z tradycyjnymi rozwiązaniami.</>
    },
    {
        icon: LightMode,
        title: 'Instalacje fotowoltaiczne',
        link: '/oferta/fotowoltaika',
        desc: <>Nowoczesne instalacje fotowoltaiczne z <strong>dofinansowaniem do 6 tys. zł</strong> z programu Mój Prąd 6.0. Produkuj własny prąd, zmniejsz rachunki <strong>nawet o 90%</strong> i uniezależnij się od podwyżek cen energii.</>
    },
    {
        icon: BatteryHoriz000,
        title: 'Magazyny energii',
        link: '/oferta/magazyny-energii',
        desc: <>Nowoczesne magazyny energii pozwalające na większą niezależność energetyczną. Wykorzystaj wyprodukowaną energię gdy jej potrzebujesz, nawet po zachodzie słońca. <strong>Dotacje do 16 tys. zł</strong> w programie Mój Prąd.</>
    },
    {
        icon: Savings,
        title: 'Dotacje i finansowanie',
        link: '/dotacje',
        desc: 'Kompleksowa pomoc w uzyskaniu dofinansowania na instalacje OZE. Obsługujemy wszystkie programy dotacji: Mój Prąd, Czyste Powietrze, ulga termomodernizacyjna. Atrakcyjne finansowanie i leasing.'
    },
]

export const counterData = [
    {
        start:'0',
        end:'1000',
        title:'Wykonanych instalacji'
    },
    {
        start:'0',
        end:'2',
        title:'Uzyskanych Dotacji i finansowań',
        suffix: '+ MLN'
    },
    {
        start:'0',
        end:'5',
        title:'Ekip instalatorskich'
    },
    {
        start:'0',
        end:'2000',
        title:'Zadowolonych klientów'
    },
]