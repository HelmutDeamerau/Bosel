'use client'

const ContentDatenschutze: React.FC = () => {
  return (
    <div className="mx-auto text-white px-4 pt-8 max-w-5xl leading-relaxed">
      <section className="space-y-8">
        {/* Abschnitt 1 */}
        <div>
          <h4 className="text-xl font-bold text-gold mb-2">1. Datenschutz auf einen Blick</h4>
          <p>
            <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen...
          </p>
          <p>
            <strong>Datenerfassung auf unserer Website:</strong><br />
            <strong>Wer ist verantwortlich?</strong> Die Datenverarbeitung erfolgt durch den Websitebetreiber. Kontaktdaten finden Sie im Impressum.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong> Durch Ihre Eingaben (z.B. im Kontaktformular) oder automatisch durch technische Systeme.
          </p>
          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong> Für fehlerfreie Bereitstellung oder zur Analyse des Nutzerverhaltens.
          </p>
          <p>
            <strong>Welche Rechte haben Sie?</strong> Auskunft, Berichtigung, Löschung, Einschränkung und Beschwerderecht bei der Aufsichtsbehörde.
          </p>
        </div>

        {/* Abschnitt 2 */}
        <div>
          <h4 className="text-xl font-bold text-gold mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h4>
          <p>
            Wir behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Vorschriften. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wie wir damit umgehen...
          </p>
          <p>
            <strong>Verantwortliche Stelle:</strong><br />
            Marcel Uhlmann<br />
            Köhlerstraße 107<br />
            01640 Coswig OT Neusörnewitz<br />
            Tel: 03523774500<br />
            E-Mail: info@reitanlage-bosel.de
          </p>
          <p>
            <strong>Widerruf Ihrer Einwilligung:</strong> Sie können Ihre Einwilligung jederzeit widerrufen – formlos per E-Mail.
          </p>
          <p>
            <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Datenverarbeitung in bestimmten Fällen widersprechen – etwa bei Direktwerbung.
          </p>
          <p>
            <strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren, z. B. an Ihrem Wohnort.
          </p>
          <p>
            <strong>Recht auf Datenübertragbarkeit, Auskunft und Einschränkung:</strong> Sie können Ihre Daten anfordern, berichtigen lassen oder deren Verarbeitung einschränken.
          </p>
        </div>

        {/* Abschnitt 3 */}
        <div>
          <h4 className="text-xl font-bold text-gold mb-2">3. Datenerfassung auf unserer Website</h4>
          <p>
            <strong>Server-Log-Dateien:</strong> Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit, IP-Adresse. Grundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            <strong>Kontaktformular:</strong> Ihre Angaben werden zur Bearbeitung Ihrer Anfrage gespeichert. Grundlage: Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            <strong>Kundendaten:</strong> Wir verarbeiten Daten nur zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </div>

        {/* Abschnitt 4 */}
        <div>
          <h4 className="text-xl font-bold text-gold mb-2">4. Plugins und Tools</h4>
          <p>
            <strong>Google Web Fonts:</strong> Zur einheitlichen Darstellung werden Fonts von Google geladen. Dabei wird Ihre IP-Adresse an Google übermittelt (Art. 6 Abs. 1 lit. f DSGVO).
            <br />
            Weitere Infos: <a href="https://policies.google.com/privacy?hl=de" className="underline text-gold" target="_blank" rel="noopener noreferrer">Google Datenschutzerklärung</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default ContentDatenschutze
