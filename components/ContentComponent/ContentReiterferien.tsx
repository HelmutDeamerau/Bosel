import Image from 'next/image'

const ContentReiterferien = () => {
  return (
    <main>
      <section className='flex flex-col gap-3 mb-4 text-white'>
        <h2 className="text-xl font-semibold mb-2">An- und Abreise</h2>
        <p>Anreise Montag ab <span className='text-gold'>10:00-11:00</span> Uhr.</p>
        <p>Die Abreise ist am Samstag ab <span className='text-gold'>10:00 - 10:30</span></p>
        <p>Abenteuer & Erlebnis mit den Pferden!</p>
      </section>

      <section>
        <h2 className='my-3 font-semibold'>Unser Programm</h2>
        <p className='mb-4'>Neben der täglichen Pferdepflege, dem Reiten und der Teilhabe am Stallalltag wird ein abwechslungsreiches, unterhaltsames und lehrreiches Programm geboten:</p>
        <div className='flex items-center justify-between gap-5 md:flex-row flex-col'>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li>jeden Tag Theorie und Praxis rund ums Pferd</li>
            <li>Pferdepflege, Füttern, Stallalltag</li>
            <li>Bodenarbeit mit den Pferden, Reiten</li>
            <li>Spaziergänge mit und ohne Pferde</li>
            <li>Wettbewerbe (schönstes Pferd, sauberes Zimmer, Mannschaftsspiele)</li>
            <li>Spieleabende</li>
            <li>Nachtwanderung im Herbst</li>
          </ul>
          <Image
            src="/Reiterferien/rf3.webp"
            alt='Reiterferien auf der Reitanlage Bosel - Kinder und Pferde'
            width={300}
            height={200}
            loading='lazy'
            className='rounded-md border-gold border w-fit h-45 mt-4'
          />
        </div>
      </section>
    </main>
  )
}

export default ContentReiterferien