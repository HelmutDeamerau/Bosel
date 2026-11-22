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
      title: "Osterferien 2027",
      description:
        "1. Woche  29.03  bis 03.04.2027",
      image: "/Features/feature-1.webp",
    },
    {
      title: "Sommerferien 2027",
      description:{
        1:"Woche  12.07  bis  17.07.2027",
        2:"Woche  19.07.  bis  24.07.2027",
        3:"Woche  26.07.  bis  31.07.2027",
        4:"Woche  02.08.  bis  07.08.2027",
        5:"Woche  09.08.  bis  14.08.2027",
        6:"Woche  16.08.  bis  21.08.2027",
      },
      image: "/Features/feature-2.webp",
    },
    {
      title: "Herbstferien 2027",
      description:{
        1:"Woche  11.10 bis  16.10.2027",
        2:"Woche  18.10.  bis  23.10.2027"
        
      },
      image: "/Features/feature-3.webp",
    },
  ];
