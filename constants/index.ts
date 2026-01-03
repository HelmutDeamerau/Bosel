export const NAV_LINKS = [
  {
    key: "reitanlage",
    label: "Reitanlage",
    href: "/reitanlage",
    sublinks: [
      { key: "reithalle", label: "Reithalle", href: "/reitanlage/reithalle" },
      { key: "trainingsmoeglichkeiten", label: "Trainingsmöglichkeiten", href: "/reitanlage/trainingsmoeglichkeiten" },
      { key: "aussenanlage", label: "Außenanlage", href: "/reitanlage/aussenanlage" },
      { key: "theater-show", label: "Theater Pferde Show 2016", href: "/reitanlage/theater-show-2016" },
      { key: "hoffest-2015", label: "Hoffest 2015", href: "/reitanlage/hoffest-2015" },
    ],
  },
  {
    key: "pferdepension",
    label: "Pferdepension",
    href: "/pferdepension",
    sublinks: [
      { key: "stallungen", label: "Stallungen", href: "/pferdepension/stallungen" },
      { key: "betreuung", label: "Betreuung & Fütterung", href: "/pferdepension/betreuung-und-fuetterung" },
      { key: "reitplaetze", label: "Reit- & Bewegungsplätze", href: "/pferdepension/reit-und-bewegungsplaetze" },
    ],
  },
  { key: "ausbildung", label: "Ausbildung", href: "/ausbildung" },
  { key: "reitschule", label: "Reitschule", href: "/reitschule" },
  { key: "reiterferien", label: "Reiterferien", href: "/reiterferien" },
  { key: "reitverein", label: "Reitverein", href: "/reitverein" },
  { key: "kontakt", label: "Kontakt", href: "/kontakt" },
  
];

export const faqs = [
  {
    question: "Reiterferien für Kinder",
    answer: "Es werden Ferienprogramme für Kinder am Ostern ,Herbst und Sommer angeboten, die Reiten und Pferdepflege beinhalten.",
  },
  {
    question: "Pferdepension",
    answer: "Wir bieten Plätze für die Unterbringung von Pferden (aktuell freie Boxen).",
  },
  {
    question: "Reitschule",
    answer: "Es gibt Reitstunden für Anfänger und Fortgeschrittene.",
  },
  {
    question: "Ist unsere Anlage weitweg?",
    answer: "Nein ,jeder schafft es,weil es wertvoll ist",
  },
];


export const FOOTER_CONTACT_INFO = {
  title: 'Kontakt',
  links: [
    { label: 'Telefon', value: '03523-77 45 00' },    
    { label: 'telefon2', value: '0172-44 17 297' },
    { label: 'E-Mail', value: 'info@reitanlage-bosel.de' },
    { label: 'Adresse', value: 'Köhlerstraße 107, 01640 Coswig, OT Neusörnewitz ' },
  ],
};

export const SOCIALS = {
  title: 'Folge uns bitte hier',
  links: [
    { href: "https://www.facebook.com/profile.php?id=61574104532123", icon: '/icons/facebook.svg' },
    { href: "https://www.instagram.com/reit_anlage?igsh=ZTAzdTVsaGo5bDJs", icon: '/icons/instagram.svg' },
  ]
};

export const FEATURES_CARD_CONTENT = [
    {
      title: "Osterferien 2026",
      description:
        "1. Woche  06.04  bis  11.04.2026",
      image: "/Features/feature-1.webp",
    },
    {
      title: "Sommerferien 2026",
      description:{
        1:"Woche  06.07.  bis  11.07.2026.",
        2:"Woche  13.07.  bis  18.07.2026",
        3:"Woche  20.07.  bis  25.07.2026",
        4:"Woche  27.07.  bis  01.08.2026",
        5:"Woche  03.08.  bis  08.08.2026",
        6:"Woche  10.08.  bis  15.08.2026",
      },
      image: "/Features/feature-2.webp",
    },
    {
      title: "Herbstferien 2026",
      description:{
        1:"Woche  12.10 bis  17.10.2026",
        2:"Woche  19.10.  bis  24.10.2026"
        
      },
      image: "/Features/feature-3.webp",
    },
  ];
