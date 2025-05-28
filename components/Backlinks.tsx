import { FC } from 'react';

const Backlinks: FC = () => {
  const backlinks = [
    {
      category: 'Reiterportale',
      links: [
        {
          name: 'meinreiterhof.info',
          url: 'https://www.meinreiterhof.info/reiterhof-eintragen',
          description: 'Deutschlands größtes Reiterhof-Verzeichnis'
        },
        {
          name: 'will-reiten.de',
          url: 'https://www.will-reiten.de',
          description: 'Reiterhof-Suchportal'
        },
        {
          name: 'landsichten.de',
          url: 'https://www.landsichten.de',
          description: 'Reiterferien und Reitunterricht'
        }
      ]
    },
    {
      category: 'Regionale Verbände',
      links: [
        {
          name: 'Pferdesportverband Sachsen',
          url: 'https://www.pferdesport-sachsen.de',
          description: 'Offizieller Verband für Pferdesport in Sachsen'
        },
        {
          name: 'FN - Deutsche Reiterliche Vereinigung',
          url: 'https://www.pferd-aktuell.de',
          description: 'Deutscher Pferdesportverband'
        }
      ]
    },
    {
      category: 'Tourismus',
      links: [
        {
          name: 'Sachsen Tourismus',
          url: 'https://www.sachsen-tourismus.de',
          description: 'Offizielles Tourismusportal Sachsen'
        },
        {
          name: 'Dresden Tourismus',
          url: 'https://www.dresden.de/tourismus',
          description: 'Tourismusportal Dresden'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner & Verbände</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {backlinks.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-4">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:bg-gray-50 rounded-md p-3 transition-colors"
                    >
                      <div className="font-medium text-blue-600">{link.name}</div>
                      <div className="text-sm text-gray-500">{link.description}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backlinks; 