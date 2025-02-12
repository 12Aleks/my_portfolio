import * as project from "framer-motion/m";

export const workProjects = [
    {
        id: 1,
        name: "Nowa strona korporacyjna Termaheat (produkty grzewcze)",
        description: "Odpowiadam za frontend oraz wybrane funkcjonalności backendowe w tworzeniu strony, opierając się na layoutach z Figmy.",
        technologies: ['CMS Drupal 10', 'Bootstrap', 'Twig', 'JavaScript', 'SCSS', 'HTML', 'Figma'],
        date: "2024-08-15",
        image: 'beta.termaheat.webp',
        demoLink: "https://beta.termaheat.pl/",
    },
    {
        id: 2,
        name: "Aplikacja webowa do testowania i oceny wiedzy",
        description: "Zaprojektowałem i wdrożyłem system oceny wiedzy po kursach, umożliwiający tworzenie testów, analizowanie wyników oraz generowanie raportów dla firmy Polkar.",
        technologies: ['Next', 'Nest', 'React', 'Mongoose', 'SCSS'],
        date: "2023-09",
        image: 'polcar.webp',
        demoLink: "https://testing-client-application.herokuapp.com/",
        git: ''
    },
    {
        id: 3,
        name: "Strona korporacyjna TermaHeat (produkty grzewcze)",
        description: "Pracowałem nad frontendem podstron kontaktowych w różnych wersjach językowych na podstawie layoutów z Figmy, implementując interaktywną mapę Polski i Niemiec.",
        technologies: ['CMS Drupal 7', 'Bootstrap 4', 'JavaScript', 'SCSS', 'HTML'],
        image: 'oldtermaheat.webp',
        date: "2023-04",
        demoLink: "https://www.termaheat.pl/formularz-kontakowy",
    },
    {
        id: 4,
        name: "Strona korporacyjna Termaplay (produkty medyczne)",
        description: "Odpowiedzialny za pełną realizację projektu – frontend i backend, wielojęzyczność, integracja CMS Drupal 9, oraz dodanie mapy Google z lokalizacją i filtrem urządzeń.",
        technologies: ['CMS Drupal 9', 'Bootstrap 5', 'Twig', 'JavaScript', 'SCSS', 'HTML', 'Figma'],
        date: "2022-10",
        image: 'termaplay.webp',
        demoLink: "https://termaplay.pl/pl",
    },
    {
        id: 5,
        name: "Strona korporacyjna TermaReh (urządzenia rehabilitacyjne)",
        description: "Pełna realizacja projektu – frontend, backend, wielojęzyczność, integracja CMS Drupal 9 oraz implementacja mapy Google z filtrem urządzeń.",
        technologies: ['CMS Drupal 9', 'Bootstrap 5', 'Twig', 'JavaScript', 'SCSS', 'HTML', 'Figma'],
        date: "2022-10",
        image: "termareh.webp",
        demoLink: "https://termareh.pl/pl",
    },
    {
        id: 6,
        name: "Strona korporacyjna TermaMed",
        description: "Zrealizowałem frontend i backend, implementując wielojęzyczność i integrację z CMS Drupal 9.",
        technologies: ['CMS Drupal 9', 'Bootstrap', 'Twig', 'JavaScript', 'SCSS', 'HTML', 'Figma'],
        image: "betatermamed.webp",
        date: "2022-10",
        demoLink: "https://beta9.termamed.pl/",
    },
    {
        id: 7,
        name: "Strona korporacyjna TermaServices",
        description: "Odpowiedzialny za pełną realizację projektu – frontend i backend, wielojęzyczność, integracja CMS Drupal 8 oraz aktualizacja do Drupal 10.",
        technologies: ['CMS Drupal 10', 'Bootstrap', 'Twig', 'JavaScript', 'SCSS', 'HTML', 'Figma'],
        date: "2022-01",
        image: 'termaservices.webp',
        demoLink: "https://termaservices.pl/",
    },
    {
        id: 8,
        name: "Strona korporacyjna TermaDrilling (maszyny budowlane)",
        description: "Pełna realizacja projektu – frontend i backend, wielojęzyczność, integracja CMS Drupal 9 oraz aktualizacja strony do Drupal 10.",
        technologies: ['CMS Drupal 10', 'Bootstrap', 'Twig', 'JavaScript', 'SCSS', 'HTML', 'Figma'],
        date: "2021-08",
        image: 'termadrilling.webp',
        demoLink: "https://termadrilling.com/",
    },
    {
        id: 9,
        name: "Strona korporacyjna TermaFiber (maszyny budowlane)",
        description: "Wielojęzyczna strona zbudowana w Vue 2 na podstawie layoutu z Figmy. Projekt wykonałem w całości samodzielnie.",
        technologies: ['Vue2', 'Bootstrap', 'JavaScript', 'SCSS', 'HTML'],
        date: "2020-05",
        image: 'termafiber.webp',
        demoLink: "https://termafiber.pl/pl",
    },
    {
        id: 10,
        name: "Strona docelowa TermaSmart",
        description: "Stworzenie wielojęzycznej strony docelowej na podstawie layoutu z Figmy. Projekt wykonałem samodzielnie.",
        technologies: ['JavaScript', 'SCSS', 'HTML', 'Bootstrap'],
        date: "2019-08",
        image: "termasmart.webp",
        demoLink: "https://termasmart.pl/",
    },
    {
        id: 11,
        name: "Strona korporacyjna TermaMed",
        description: "Zrealizowałem frontend i backend, w tym przebudowę podstron produktów oraz listy produktów, z częściowymi zmianami w backendzie.",
        technologies: ['CMS Drupal 7', 'Bootstrap 4', 'JavaScript', 'SCSS', 'HTML'],
        date: "2019-05",
        image: "termamed.webp",
        demoLink: "https://termamed.pl/pl",
    },
    {
        id: 12,
        name: "Podstrona produktowa Lux2",
        description: "Pracowałem nad frontendem podstrony zgodnie z layoutem z Figmy.",
        technologies: ['Bootstrap 4', 'SCSS', 'HTML'],
        date: "2018-06",
        image: "lux.webp",
        demoLink: "https://www.terma24.pl/lux2",
    },{
        id: 13,
        name: "Podstrona Dotacje Unii Europejskiej",
        description: "Pracowałem nad frontendem podstrony Kim jesteśmy, Dotacje Unijne.",
        technologies: ['Bootstrap 4', 'SCSS', 'HTML'],
        date: "2018-05",
        image: "podstronaDotacje.webp",
        demoLink: "https://www.termagroup.pl/whowearepages/dotacje-unijne",
    },
    {
        id: 14,
        name: "Podstrona produktowa DROP SHIP Heating Elements",
        description: "Zrealizowałem frontend podstrony, opierając się na layoutach z Figmy.",
        technologies: ['Bootstrap 4', 'SCSS', 'HTML'],
        date: "2018-04",
        image: "drop.webp",
        demoLink: "https://en.termaheat.com/uk-drop-ship-accessories",
    },
    {
        id: 15,
        name: "Strona www Pomorska Fundacja Bracia Mniejsi",
        description: "Zrealizowałem pełną stronę – frontend i backend, tworząc ją na WordPressie.",
        technologies: ['WordPress', 'Bootstrap', 'SCSS', 'HTML'],
        date: "2017-04",
        image: "pomorska.webp",
        demoLink: "https://bracia-mniejsi.pl/",
    }
];

export const petProjects = [
    {
        id: 1,
        name: "Apartments",
        description: "Platforma webowa do sprzedaży mieszkań, z funkcją filtrowania, dodawania ogłoszeń oraz zarządzania ofertami. Aplikacja wykonana z użyciem Next.js, React, Prisma i Tailwind.",
        technologies: ['Next', 'React', 'Kinde', 'Prisma', 'Tailwind'],
        date: "2024-09",
        image: "applicataioAppartmets.webp",
        demoLink: "https://apartments-pied.vercel.app/",
        git: 'https://github.com/12Aleks/apartments'
    },
    {
        id: 2,
        name: "Pixem",
        description: "Pet project do automatycznej konwersji wartości, np. z px na rem, zbudowany w Next.js i React.",
        technologies: ['Next', 'React', 'React Bootstrap', 'Redux Toolkit', 'SCSS'],
        date: "2022-08-15",
        image: "pixem.webp",
        demoLink: "https://pixem.vercel.app/",
        git: 'https://github.com/12Aleks/pixem'
    },
    {
        id: 3,
        name: "Weather pet project",
        description: "Wielojęzyczna aplikacja pogodowa, wykorzystująca dane z openweathermap.org. Zbudowana w React, Mobx i SCSS.",
        technologies: ['React', 'React Bootstrap', 'Mobx', 'SCSS'],
        date: "2020-09",
        image: 'weather.webp',
        demoLink: "https://weather-97994.web.app/",
        git: 'https://github.com/12Aleks/Weather-app'
    },
    {
        id: 4,
        name: "Departments",
        description: "Aplikacja do zarządzania wynagrodzeniami w zespołach. Zbudowana w Vue 2 i Firebase.",
        technologies: ['Vue 2', 'Vue-cli', 'vuex', 'SCSS', 'Firebase'],
        date: "2019-09",
        image: "departments.webp",
        demoLink: "https://departments-1c007.web.app/login?message=logout",
        git: 'https://github.com/12Aleks/organizational_department'
    },
];

export const BtnList = [
    {label: "Home", link: "/", icon: "home", newTab: false},
    {label: "About", link: "/about", icon: "about", newTab: false},
    {label: "Projects", link: "/projects", icon: "projects", newTab: false},
    {label: "Contact", link: "/contact", icon: "contact", newTab: false},
    {
        label: "Github",
        link: "https://github.com/12Aleks",
        icon: "github",
        newTab: true,
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/leszek-koba-78130b140/",
        icon: "linkedin",
        newTab: true,
    },
    {
        label: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100002408135162",
        icon: "facebook",
        newTab: true,
    },
    {
        label: "Resume",
        link: "/CV_Oleksii_Koba.pdf",
        icon: "resume",
        newTab: true,
    },
];

export const BtnListSmallLeft = [
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/leszek-koba-78130b140/",
        icon: "linkedin",
        newTab: true,
    },
    {
        label: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100002408135162",
        icon: "facebook",
        newTab: true,
    }
];

export const BtnListSmallRight = [
    {
        label: "Github",
        link: "https://github.com/12Aleks",
        icon: "github",
        newTab: true,
    },
    {
        label: "Resume",
        link: "/CV_Oleksii_Koba.pdf",
        icon: "resume",
        newTab: true,
    },
];
