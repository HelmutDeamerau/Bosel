import { notFound } from "next/navigation";
import { pageContents } from "@/constants/pagesContents";
import { PageHeader } from "@/components/pagesComponents/PageHeader";
import { ImageSlider } from "@/components/pagesComponents/ImageSlider";
import InfoCard from "@/components/pagesComponents/InfoCard";
import AnimatePageWrapper from "@/components/AnimatePageWrapper";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = (resolvedParams.slug ?? []).join("/");
  const content = pageContents[slugPath];

  if (!content) {
    return {
      title: "Seite nicht gefunden",
      description: "Diese Seite existiert leider nicht.",
    };
  }

  return {
    title: content.title,
    description: content.description?.slice(0, 160),
    openGraph: {
      title: content.title,
      description: content.description?.slice(0, 160),
      images: content.images?.length ? [content.images[0]] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug?.join("/") || "";
  const content = pageContents[slugPath];

  if (!content) return notFound();

  const isKontaktPage = slugPath === "kontakt";
  const isReiterferienPage = slugPath === "reiterferien";

  return (
    <div className="bg-primary-foreground">
      {isReiterferienPage && (
        <JsonLd
          type="TouristAttraction"
          data={{
            name: "Reiterferien in Sachsen - Reitanlage An derBosel",
            description: content.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Köhlerstraße 107",
              addressLocality: "Coswig",
              addressRegion: "Sachsen",
              postalCode: "01640",
              addressCountry: "DE"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "51.1333",
              longitude: "13.5833"
            },
            url: "https://reitanlage-bosel.de/reiterferien",
            telephone: "+493523774500",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "08:00",
              closes: "20:00"
            },
            priceRange: "€€",
            image: content.images?.[0],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150"
            }
          }}
        />
      )}
      <PageHeader title={content.title} />
      <AnimatePageWrapper>
        <main className="padding-section mx-auto px-4 py-12 space-y-12 text-white 2xl:mt-0 lg:mt-4">
          <section className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-white title-border-gradient">{content.title}</h1>
              <p className="text-lg text-white/90 leading-relaxed whitespace-pre-line">
                {content.description}
              </p>
              {content.content}
            </div>
            {!isKontaktPage && <InfoCard />}
          </section>
          {content.extra && <section className="space-y-4">{content.extra}</section>}
          {content.images && (
            <section>
              <ImageSlider images={content.images} />
            </section>
          )}
        </main>
      </AnimatePageWrapper>
    </div>
  );
}