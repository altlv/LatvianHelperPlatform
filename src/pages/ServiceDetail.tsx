import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams();
  const navigate = useNavigate();

  // Find category by id (your routes use the category.id as slug)
  const category = content.categories.find((c) => c.id === categorySlug);

  // Find service card by slug (and ensure it belongs to this category)
  const card = content.helpCards.find(
    (h) => h.slug === serviceSlug && h.categoryId === categorySlug
  );

  if (!category || !card) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-2xl font-bold">Pakalpojums nav atrasts</h1>
          <p className="text-muted-foreground">
            Lūdzu, atgriezies iepriekšējā solī un mēģini vēlreiz.
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate(-1)}>← Atpakaļ</Button>
            <Button asChild>
              <Link to="/search">Uz kategorijām</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Helper placeholders for demo – later replace with real filtered helpers
  const demoHelpers = [
    { slug: "anna-lapina", name: "Anna Lapiņa", rating: 5.0, priceFrom: "35 €" },
    { slug: "marija-karklina", name: "Marija Kārkliņa", rating: 4.8, priceFrom: "40 €" },
    { slug: "dace-silmale", name: "Dace Silmale", rating: 4.9, priceFrom: "28 €" },
    { slug: "dainis-sprogis", name: "Dainis Sproģis", rating: 4.8, priceFrom: "40 €" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumbs / back */}
        <div className="flex items-center gap-3 text-sm">
          <Button variant="ghost" onClick={() => navigate(`/search/${category.id}`)}>
            ← Atpakaļ uz “{category.title}”
          </Button>
          <span className="text-muted-foreground">/</span>
          <Link className="underline" to="/search">Kategorijas</Link>
        </div>

        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl font-bold">
            {card.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {card.description}
          </p>
        </header>

        {/* Details grid */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Kas iekļauts</h2>
            <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
              {card.details?.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {card.ideal && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Ideāli:</span> {card.ideal}
              </p>
            )}
          </div>

          <div className="rounded-2xl border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Cenas un atlaides</h2>
            <ul className="text-sm text-foreground/80 space-y-1">
              {card.pricing?.basic && <li>• {card.pricing.basic}</li>}
              {card.pricing?.extended && <li>• {card.pricing.extended}</li>}
              {Array.isArray(card.pricing?.packages) &&
                card.pricing.packages.map((p: string, i: number) => <li key={i}>• {p}</li>)}
            </ul>
            {Array.isArray(card.discounts) && card.discounts.length > 0 && (
              <>
                <div className="h-px bg-border my-2" />
                <h3 className="font-medium">Atlaides</h3>
                <ul className="text-sm text-foreground/80 space-y-1">
                  {card.discounts.map((d: string, i: number) => <li key={i}>• {d}</li>)}
                </ul>
              </>
            )}
          </div>
        </section>

        {/* Helpers list (demo) */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Pieejamie palīgi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {demoHelpers.map(h => (
              <Link
                key={h.slug}
                to={`/paligs/${h.slug}`}
                className="rounded-2xl border p-5 hover:shadow-sm transition text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{h.name}</div>
                    <div className="text-sm text-muted-foreground">⭐ {h.rating.toFixed(1)}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Cena no {h.priceFrom}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-3 justify-center pt-4">
          <Button asChild>
            <Link to="/register/client">Meklēt palīgu šim pakalpojumam</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={`/search/${category.id}`}>Apskatīt citus pakalpojumus</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
