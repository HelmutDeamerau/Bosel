import ContentAusbildung from "@/components/ContentComponent/ContentAusbildung";
import ContentAussenanlage from "@/components/ContentComponent/ContentAussenanlage";
import ContentBewegungsplaetze from "@/components/ContentComponent/ContentBewegungsplaetze";
import ContentDatenschutze from "@/components/ContentComponent/ContentDatenschutze";
import ContentImpressum from "@/components/ContentComponent/ContentImpressum";
import ContentPferdepension from "@/components/ContentComponent/ContentPferdepension";
import ContentReitanlage from "@/components/ContentComponent/ContentReitanlage";
import ContentReiterferien from "@/components/ContentComponent/ContentReiterferien";
import ContentReitverein from "@/components/ContentComponent/ContentReiterverein";
import ContentTrainingsmoeg from "@/components/ContentComponent/ContentTrainingsmoeg";
import ExtraKonakt from "@/components/pagesComponents/ExtraKontakt";
import ExtraPferdepensio from "@/components/pagesComponents/ExtraPferdepensio";
import ExtraReiterferien from "@/components/pagesComponents/ExtraReiterferien";
import { ReactNode } from "react";

type PageContent = {
  title: string;
  description: string;
  images?: string[];
  extra?: ReactNode;
  content?: ReactNode;
};

export type FerienDataType = {
  season: string;
  price: string;
  dates: { week: string; from: string; to: string }[];
  registrationForm: string;
  mitbringen: string;
};

export const pageContents: Record<string, PageContent> = {
  "reitanlage": {
    title: "Reitanlage",
    description: `Hier findest du alles über unsere Trainingsmöglichkeiten, Außenanlagen und mehr.`,
    content: (
      <ContentReitanlage />    
    ),
    images: ["/Reitanlage/ra1.webp", "/Reitanlage/ra2.webp","/Reitanlage/ra3.webp", "/Reitanlage/ra4.webp","/Reitanlage/ra5.webp", "/Reitanlage/ra6.webp","/Reitanlage/ra7.webp", "/Reitanlage/ra8.webp","/Reitanlage/ra9.webp", "/Reitanlage/ra10.webp","/Reitanlage/ra11.webp", "/Reitanlage/ra12.webp"],
  },

  "reitanlage/trainingsmoeglichkeiten": {
    title: "Trainingsmöglichkeiten",
    description: `fdsfsdcken im Grünen – perfekt für jede Reiteinheit.`,
    content: (
      <ContentTrainingsmoeg />    
    ),
    
  },

 "reitanlage/reithalle": {
    title: "Reithalle",
    description: `Herzstück unserer Reitanlage bildet die im Jahr 2013 erbaute Reithalle mit den Maßen 22m x 60m. Äußerlich punktet sie durch eine der Landschaft angepassten Gestaltung in Holzbaukonstruktion. Großzügige Rundumverglasung, ein Lichtband im Dachfirst und gute Beleuchtung für die Abendstunden gewährleisten jederzeit ideale Lichtverhältnisse und eine taghelle Atmosphäre.

      Das wärmeisolierende Dach reguliert die Temperaturen und bietet somit bei jeder Jahreszeit optimale Trainingsbedingungen. Besonders innovativ ist die Ausführung der Hufschlagbande in Tropfenform. Durch ihr abgerundetes Profil, welches dem Körper des Pferdes angepasst ist, gibt sie den Pferden eine sichere Anlehnung.

                    Ein hochwertiger Hallenreitboden, bestehend aus einer abgestimmten Mischung aus speziellem Fein­sand und synthetischen Stoffen, bietet eine hohe Elastizität und ist somit für jede Art des Reitsports ausgerichtet. Selbst bei Belastung und dem Reiten von anspruchsvollen Aufgaben bleibt unser Reitboden trittstabil und ermöglicht einen hervorragenden Reitkomfort. Die Gelenke der Pferde werden geschont, Bänder und Knochen entlastet, Schwung sowie Durchlässigkeit werden aktiviert.

                 Eine automatische Beregnungsanlage in der Reithalle trägt wesentlich zur Verbesserung der Elastizität der Tret­schicht bei, vermeidet Staubbildung und sorgt somit zur Verbesserung des Hallenklimas.

                        Unsere Zuschauerplätze auf einer seitlichen Tribüne sind für den perfekten Überblick konstruiert.`,
    images: ["/Reithalle/rh1.webp","/Reithalle/rh2.webp","/Reithalle/rh3.webp","/Reithalle/rh4.webp"],
  },

  "reitanlage/aussenanlage": {
    title: "Außenanlage",
    description: `Großzügige Außenplätze und Galoppstrecken im Grünen – perfekt für jede Reiteinheit.`,
    content: (
      <ContentAussenanlage />    
    ),
  },

  "reitanlage/theater-show-2016": {
    title: "Theater Pferde Show 2016",
    description: `Ein Rückblick auf unsere spektakuläre Pferdeshow im Jahr 2016.`,
    content: (
      <>
        Die Mitglieder der Coswiger Theatergruppe "immer dieselben" unter der Leitung von Sabine Kralacek, die Mitglieder unseres Reitsportvereines sowie das Team unserer Reitanlage stellten an diesen zwei Tagen eine Veranstaltung der besonderen Art auf die Beine.
        <br /><br />
        In dem zweistündigem Programm wurden Szenen aus bekannten Pferdefilmen dargestellt, vertreten waren u.a. "Spirit der wilde Mustang" sowie "Bibi und Tina", das allseits beliebte "Drei Haselnüsse für Aschenbrödel" oder "Der mit dem Wolf tant".
        <br /><br />
        Die Schauspieler und Sänger der Theatergruppe teilten sich dabei die Bühne mit zahlreichen tierischen Akteuren. Es wurde gesungen, getanzt und natürlich geritten. Besonders begeistert waren die Zuschauer von den freilaufenden Ponys und auch das letzte Einhorn drehte anmutig seine Runden.
        <br /><br />
        Ein besonderer Programmpunkt war die klassische Dressur-Quadrille, geritten zu eindrucksvoller Musik von vier Mitgliedern unseres Reitvereins.
        <br /><br />
        Abgerundet wurde die Show durch das bunte Rahmenprogramm, denn es wurde nicht nur ausgiebig für das leibliche Wohl gesorgt. Außerdem wurde auch Kinderschminken angeboten, eine Hüpfburg stand zum Austoben zur Verfügung und die Gäste konnten sich auf der Reitanlage umschauen und in den Ställen die Pferde und Ponys streichel.
        <br /><br />
        Ein großes Dankeschön gilt allen aktiven Teilnehmern der Theatergruppe und unseres Vereins bzw. der Reitanlage und natürlich den Sponsoren.
      </>
    ),
    images: ["/Theater Pferde Show 2016/t1.webp","/Theater Pferde Show 2016/t2.webp","/Theater Pferde Show 2016/t3.webp","/Theater Pferde Show 2016/t4.webp","/Theater Pferde Show 2016/t5.webp","/Theater Pferde Show 2016/t6.webp","/Theater Pferde Show 2016/t7.webp","/Theater Pferde Show 2016/t8.webp","/Theater Pferde Show 2016/t9.webp","/Theater Pferde Show 2016/t10.webp","/Theater Pferde Show 2016/t11.webp","/Theater Pferde Show 2016/t12.webp","/Theater Pferde Show 2016/t13.webp","/Theater Pferde Show 2016/t14.webp","/Theater Pferde Show 2016/t15.webp","/Theater Pferde Show 2016/t16.webp","/Theater Pferde Show 2016/t17.webp","/Theater Pferde Show 2016/t18.webp","/Theater Pferde Show 2016/t19.webp","/Theater Pferde Show 2016/t20.webp","/Theater Pferde Show 2016/t21.webp"],
  },

  "reitanlage/hoffest-2015": {
    title: "Hoffest 2015",
    description: `Impressionen zum Hoffest am 3. Oktober 2015`,
    images: ["/Hoffest 2015/h1.webp", "/Hoffest 2015/h2.webp","/Hoffest 2015/h3.webp", "/Hoffest 2015/h4.webp","/Hoffest 2015/h5.webp", "/Hoffest 2015/h6.webp","/Hoffest 2015/h7.webp", "/Hoffest 2015/h8.webp","/Hoffest 2015/h9.webp", "/Hoffest 2015/h10.webp","/Hoffest 2015/h11.webp", "/Hoffest 2015/h12.webp","/Hoffest 2015/h13.webp", "/Hoffest 2015/h14.webp","/Hoffest 2015/h15.webp", "/Hoffest 2015/h16.webp","/Hoffest 2015/h17.webp", "/Hoffest 2015/h18.webp"],
  },

  "pferdepension": {
    title: "Pferdepension",
    description: `du suchst ein liebevolles und fürsorgliches Zuhause für Ihr Pferd bzw. Pony? - Bei uns bist du genau richtig!`,
    content: (
      <ContentPferdepension  />
    ),
    extra: ( <ExtraPferdepensio/> ),
    images: ["/Stallungen/st10.webp","/Stallungen/st11.webp", "/Stallungen/st12.webp","/Stallungen/st13.webp", "/Stallungen/st14.webp"],
  },

  "pferdepension/stallungen": {
    title: "Stallungen",
    description: `Unser Ziel: Glückliche Pferde und ein rundum zufriedener Kunde!
Unserer Pferdepension steht eine Vielzahl großräumiger, komfortabler Boxen zur Verfügung. Zahlreiche Glaselemente, weitläufige Lichtfronten und breite Stallgassen sorgen für viel Hellig- und Großräumigkeit. Ein perfektes Abluftsystem sorgt für eine gute Belüftung und ein angenehmes Stallklima zu jeder Jahreszeit. Die Aufteilung in verschiedene Stallbereiche gewährleistet, dass die unterschiedlichen Funktionsbereiche wie Schulbetrieb, Jungpferdetraining und private Einstaller mit einem gewissen Abstand voneinander stattfinden können. Somit wird sichergestellt, dass jedes Pferd eine stressfreie Umgebung genießen und genügend Ruhe bekommen kann.

Alle Stallanlagen verfügen über eigene Sattelkammern mit abschließbaren Sattelschränken zur Unterbringung Ihrer persönlichen Reitutensiliens.

Vor bzw. in jedem Stallgebäude befinden sich Putzplätze für die Pflege Ihres Pferdes. Für eine wohlwollende Abkühlung nach dem Training oder an heißen Sommertagen sorgt unsere Pferdedusche im Außenbereich.`,
    images: ["/Stallungen/st1.webp", "/Stallungen/st2.webp","/Stallungen/st3.webp", "/Stallungen/st4.webp","/Stallungen/st5.webp", "/Stallungen/st6.webp","/Stallungen/st7.webp", "/Stallungen/st8.webp","/Stallungen/st9.webp", "/Stallungen/st10.webp","/Stallungen/st11.webp", "/Stallungen/st12.webp","/Stallungen/st13.webp", "/Stallungen/st14.webp"],
  },

 "pferdepension/betreuung-und-fuetterung": {
    title: "Betreuung & Fütterung",
    description: `Die uns anvertrauten Pferde genießen unsere ganze Aufmerksamkeit und Fürsorge. Ein Team aus erfahrenen Helfern und langjährigen Mitarbeitern sorgt sich fachkundig um das Wohl und die Gesundheit sowie um eine liebevolle Betreuung der Pferde. Die Pferdeboxen werden täglich gemistet und frische Einstreu eingebracht. Durch regelmäßige Boxen- und Stallreinigungen sichern wir eine saubere, optimale Stallatmosphäre. Die Futtergabe erfolgt nach individuellem Bedarf mit Raufutter (Heu, Stroh) und Kraftfutter (Hafer, Gerste etc.). Das Raufutter stammt aus eigener Herstellung und zeichnet sich durch eine hohe Qualität aus. Die Menge an Kraftfutter wird individuell auf den Bedarf Ihres Pferdes abgestimmt. Beheizte Selbsttränken in jeder Box versorgen die Pferde mit frischem und temperiertem Wasser.

Ein wesentlicher Baustein einer artgerechten Pferdehaltung ist die Gesundheit des Tieres zu erhalten bzw. wiederherzustellen. Externe Partner unterstützen uns hier umfassend in der medizinischen Betreuung (Tierarzt, Hufschmied, -orthopädie) und therapeutischen Behandlung (Physiotherapie, Osteopathie, Akupunktur).`,
    images: ["/Betreuung & Fütterung/bf1.webp","/Betreuung & Fütterung/bf2.webp","/Betreuung & Fütterung/bf3.webp","/Betreuung & Fütterung/bf4.webp","/Betreuung & Fütterung/bf5.webp","/Betreuung & Fütterung/bf6.webp","/Betreuung & Fütterung/bf7.webp","/Betreuung & Fütterung/bf8.webp"],
  },

  "pferdepension/reit-und-bewegungsplaetze": {
    title: "Reit- & Bewegungsplätze",
    description: `Eine Vielzahl an Trainings- und Bewegungsmöglichkeiten für Ihr Pferd stellen wir dir in unserer Reitanlage zur Verfügung:`,
    images: ["/Reit- & Bewegungsplätze/rb1.webp","/Reit- & Bewegungsplätze/rb2.webp","/Reit- & Bewegungsplätze/rb3.webp","/Reit- & Bewegungsplätze/rb4.webp","/Reit- & Bewegungsplätze/rb5.webp"],
    content: (
      <ContentBewegungsplaetze />
    ),
    
  },

 "ausbildung": {
    title: "Ausbildung",
    description: `Die Ausbildung eines jungen Pferdes ist prägend für die gesamte Entwicklung des Pferdes. Hauptsächlich wird ein Pferd nach seiner Reitausbildung bzw. Reiteignung bewertet. Wir können Ihr Pferd professionell und behutsam auf seinen Weg als Reit- bzw.  Sportpferd vorbereiten, fördern und begleiten.

Mit viel Geduld, Behutsamkeit und besonderem Feeling für Jungtiere reiten unsere erfahrenen Reiter Ihren Youngster an. Gefühlvoll lernen sie dabei Ihrem jungen Pferd den Reiter auf seinem Rücken zu akzeptieren, seine Hilfen zu respektieren und folgsam dem Wunsch des Reiters nach zu kommen.

Je nach physischer und psychischer Eignung sowie unter Beachtung des Alters, des Charakters, der Neigung und des Talents des Pferdes bilden wir es gezielt, solide und nachhaltig gemäß den Grundsätzen der Ausbildungsskala der klassischen Reitlehre aus. Vertrauen, Freude an der Arbeit und die Harmonie zwischen Pferd und Reiter bilden dabei die Grundlage für das Erreichen sportlicher Erfolge.`,
    images: ["/Ausbildung/aus1.webp","/Ausbildung/aus2.webp","/Ausbildung/aus3.webp","/Ausbildung/aus4.webp"],
    content: (
      <ContentAusbildung />
    ),
  },

  "reitschule": {
    title: "Reitschule",
    description: `Guter Reitunterricht bildet die Basis für dauerhafte Freude und Spaß am Reiten!
Unser Ziel ist es:  Kindern (ab 8 Jahre), den Umgang mit dem Pferd zu ermöglichen und dir den Reitsport näher zu brin­gen.

Du möchtest erste Erfahrungen auf dem Pferderücken sammeln, sich weiterbilden. Wir bieten fachkundigen Reitunterricht auf lieben, gut ausgebildeten Schulpferden (Ponys) bei qualifizierten, erfah­renen Reitlehrern. Großen Wert legen unsere Ausbilder auf eine vielseitige Grundausbildung und einen abwechslungsrei­chen Unterricht, denn sie sind beste Garanten, um dem Reitschüler sowohl Fertigkeiten als auch Freude im Sattel zu vermitteln.`,
    
  },

  "reitverein": {
    title: "Reitsportverein",
    description: `Am 09. Februar 2014 gründete sich unser Reitsportverein "RSV- An der Bosel e.V." und ist im Vereinsregister Dresden unter der Nummer VR 6914 eingetragen.

Unser Verein hat es sich zur Aufgabe gemacht, vor allem die Reiterjugend an ein umweltverträgliches und im Einklang mit der Natur befindliches Reiten heranzuführen und Reitern jeden Alters ein Umfeld zur Ausübung ihres Hobbys zu schaffen. In unserem Reitsportverein finden die Reiterjugend sowie die gestande­nen Reiterinnen und Reiter einen Heimatverein für die ersten und weite­ren sportlichen Erfolge. Und nicht zuletzt pflegen wir ein geselliges und freundschaftliches Mit­einander zwischen Jung und Alt, Reiter und Nichtreiter, Pferdebesitzer oder Pferdefreund.

Jeder kann unserem Verein beitreten, der die Ziele und Interessen des Vereins, die in der Satzung niedergelegt sind, anerkennt.`,
    images: ["/Reitverein/rv1.webp","/Reitverein/rv2.webp","/Reitverein/rv3.webp","/Reitverein/rv4.webp","/Reitverein/rv5.webp","/Reitverein/rv6.webp"],
    content: (
      <ContentReitverein  />
    ),
  },

 "kontakt": {
  title: "Kontakt",
  description: 'Melde dich einfach-wir freuen uns, von dir zu hören oder dich mal zu sehen',
  
  extra: (
    <ExtraKonakt />
  ),
},
"impressum": {
  title: "Impressum",
  description: 'Reitsportanlage "An der Bosel"',
  content: (
    <ContentImpressum  />
  ),
  
 
},
"datenschutz": {
  title: "Datenschutzerklärung",
  description: 'Reitsportanlage "An der Bosel"',
  content: (
    <ContentDatenschutze   />
  ),
  
 
},


"reiterferien": {
  title: "Reiterferien in Sachsen | Reitanlage Bosel",
  description: `Erleben Sie unvergessliche Reiterferien bei der Reitanlage Bosel in Coswig bei Dresden. Professioneller Reitunterricht, Pferdepension und Reitschule für Kinder und Erwachsene.`,
  images: ["/Reiterferien/rf1.webp", "/Reiterferien/rf2.webp","/Reiterferien/rf3.webp", "/Reiterferien/rf4.webp","/Reiterferien/rf5.webp", "/Reiterferien/rf6.webp","/Reiterferien/rf7.webp", "/Reiterferien/rf8.webp","/Reiterferien/rf9.webp", "/Reiterferien/rf10.webp","/Reiterferien/rf11.webp", "/Reiterferien/rf12.webp","/Reiterferien/rf13.webp", "/Reiterferien/rf14.webp","/Reiterferien/rf15.webp", "/Reiterferien/rf16.webp","/Reiterferien/rf17.webp", "/Reiterferien/rf18.webp","/Reiterferien/rf19.webp", "/Reiterferien/rf20.webp","/Reiterferien/rf21.jpg", "/Reiterferien/rf22.jpg","/Reiterferien/rf23.jpg", "/Reiterferien/rf24.jpg","/Reiterferien/rf25.jpg", "/Reiterferien/rf26.jpg","/Reiterferien/rf27.jpg", "/Reiterferien/rf28.jpg","/Reiterferien/rf29.jpg", "/Reiterferien/rf30.jpg"],
  content: (
    <>
      <h2 className="text-2xl font-bold mb-4">Reiterferien bei der Reitanlage Bosel</h2>
      <p className="mb-6">
        Willkommen bei der Reitanlage Bosel! Wir bieten Ihnen und Ihren Kindern ein unvergessliches Reiterlebnis in Coswig bei Dresden. Mit unserer langjährigen Erfahrung als Reiterhof garantieren wir professionellen Reitunterricht und eine liebevolle Betreuung.
      </p>
      <h2 className="text-2xl font-bold mb-4">Unsere Reiterferien für Kinder</h2>
      <p className="mb-6">
        Speziell für Kinder ab 7 Jahren bieten wir spannende Reiterferien an. In kleinen Gruppen lernen die jungen Reiter den sicheren Umgang mit Pferden, erhalten qualifizierten Reitunterricht und erleben unvergessliche Abenteuer auf unserem Reiterhof.
      </p>
      <ContentReiterferien />
    </>
  ),
  extra: (
    <>
      <ExtraReiterferien />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Warum Reiterferien bei uns?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Professioneller Reitunterricht durch qualifizierte Reitlehrer</li>
          <li>Gut ausgebildete und liebevolle Schulpferde</li>
          <li>Moderne Reitanlage mit Halle und Außenplätzen</li>
          <li>Vollverpflegung während der Reiterferien</li>
          <li>Unterbringung in gemütlichen Zimmern</li>
          <li>Abwechslungsreiches Freizeitprogramm</li>
        </ul>
      </div>
    </>
  ),
},
};
 

export const ferienData: FerienDataType[] = [
  {
    season: 'Osterferien 2025',
    price: '400,00 Euro pro Kind und Ferienwoche (5 Übernachtungen)',
    dates: [
      { week: '1. Woche', from: '21.04.', to: '26.04.2025' }
    ],
    registrationForm: '/Unterlagen//Anmeldung_Reiterferien_Ostern_2025.pdf',
    mitbringen: '/Unterlagen//mitbringen-liste.pdf'
  },
  {
    season: 'Sommerferien 2025',
    price: '400,00 Euro pro Kind und Ferienwoche (5 Übernachtungen)',
    dates: [
      { week: '1. Woche', from: '30.06.', to: '05.07.2025' },
      { week: '2. Woche', from: '07.07.', to: '12.07.2025' },
      { week: '3. Woche', from: '14.07.', to: '19.07.2025' },
      { week: '4. Woche', from: '21.07.', to: '26.07.2025' },
      { week: '5. Woche', from: '28.07.', to: '01.08.2025' },
      { week: '6. Woche', from: '04.08.', to: '09.08.2025' },
    ],
    registrationForm: '/Unterlagen/Anmeldung_Sommer_2025.pdf',
    mitbringen: '/Unterlagen//mitbringen-liste.pdf'
  },
  {
    season: 'Herbstferien 2025',
    price: '400,00 Euro pro Kind und Ferienwoche (5 Übernachtungen)',
    dates: [
      { week: '1. Woche', from: '06.10.', to: '11.10.2025' },
      { week: '2. Woche', from: '13.10.', to: '18.10.2025' },
    ],
    registrationForm: '/Unterlagen//Anmeldung_Herbst_2025.pdf',
    mitbringen: '/Unterlagen//mitbringen-liste.pdf'
  }
];