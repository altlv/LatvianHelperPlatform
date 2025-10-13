// src/pages/ServiceDetail.tsx
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams();
  const navigate = useNavigate();

  const category = content.categories.find((c) => c.id === categorySlug);
  const service = content.helpCards.find(
    (h) => h.slug === serviceSlug && h.categoryId === categorySlug
  );

  if (!category || !service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-2xl font-bold">Pakalpojums nav atrasts</h1>
          <p className="text-muted-foreground">
            Lūdzu, atgriezies un mēģini vēlreiz.
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate(-1)}>
              ← Atpakaļ
            </Button>
            <Button asChild>
              <Link to="/search">Uz kategorijām</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Get helpers who offer this service
  const helpers = (content.helpers || []).filter((h) =>
    h.specializations.includes(serviceSlug!)
  );

  const helpersWithPrice = helpers.map((h) => {
    const base = h.defaultPrice;
    const discount = (h.discounts && h.discounts[serviceSlug!]) ?? 0;
    const final = base * (1 - discount);
    return { ...h, finalPrice: final.toFixed(2) };
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Breadcrumb / back link */}
        <div className="flex items-center gap-3 text-sm">
          <Button
            variant="ghost"
            onClick={() => navigate(`/search/${category.id}`)}
          >
            ← Atpakaļ uz “{category.title}”
          </Button>
          <span className="text-muted-foreground">/</span>
          <Link className="underline" to="/search">
            Kategorijas
          </Link>
        </div>

        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {service.description}
          </p>
        </header>

        {/* Details & pricing */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Kas iekļauts</h2>
            <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
              {service.details?.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            {service.ideal && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Ideāli:</span> {service.ideal}
              </p>
            )}
          </div>
          <div className="rounded-2xl border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Cenas un atlaides</h2>
            <ul className="text-sm text-foreground/80 space-y-1">
              {service.pricing?.basic && <li>• {service.pricing.basic}</li>}
              {service.pricing?.extended && <li>• {service.pricing.extended}</li>}
            </ul>
            {service.discounts && service.discounts.length > 0 && (
              <>
                <div className="h-px bg-border my-2" />
                <h3 className="font-medium">Atlaides</h3>
                <ul className="text-sm text-foreground/80 space-y-1">
                  {service.discounts.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        {/* Helpers list */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Pieejamie palīgi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {helpersWithPrice.length === 0 ? (
              <p className="text-muted-foreground">Šobrīd nav palīgu šim pakalpojumam.</p>
            ) : (
              helpersWithPrice.map((h) => (
                <Link
                  key={h.slug}
                  to={`/paligs/${h.slug}`}
                  className="rounded-2xl border p-5 hover:shadow-sm transition text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{h.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ⭐ {h.rating.toFixed(1)}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Cena no {h.finalPrice} €
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {h.specializations.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs border rounded-full px-2 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* CTA / navigation */}
        <div className="flex gap-3 justify-center pt-4">
          <Button asChild>
            <Link to="/register/client">Meklēt palīgu</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={`/search/${category.id}`}>Citi pakalpojumi</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
