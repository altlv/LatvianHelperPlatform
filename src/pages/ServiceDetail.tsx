import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/config/content";
import homeHelperImg from "@/assets/services/home-helper.jpg";
import closetOrganizationImg from "@/assets/services/closet-organization.jpg";
import ecoCleaningImg from "@/assets/services/eco-cleaning-new.jpg";
import fitnessFriendImg from "@/assets/services/fitness-friend.jpg";
import wellnessSupportImg from "@/assets/services/wellness-support.jpg";
import emotionalFriendImg from "@/assets/services/emotional-friend.jpg";
import creativePartnerImg from "@/assets/services/creative-partner.jpg";
import furnitureAssemblyImg from "@/assets/services/furniture-assembly.jpg";
import spaceOrganizationImg from "@/assets/services/space-organization.jpg";
import eventCompanionImg from "@/assets/services/event-companion.jpg";
import cultureConversationImg from "@/assets/services/culture-conversation.jpg";

// Map service slugs to images
const serviceImages: Record<string, string> = {
  // Household category
  "majas-paligs": homeHelperImg,
  "skapju-kartosana": closetOrganizationImg,
  "eko-tirisana": ecoCleaningImg,
  // Health category
  "fitnesa-draugs": fitnessFriendImg,
  "labsajutas-atbalsts": wellnessSupportImg,
  // Social category
  "emocionalais-draugs": emotionalFriendImg,
  "radosais-partneris": creativePartnerImg,
  // Practical category
  "nelieli-remontdarbi": furnitureAssemblyImg,
  "telpu-organizesana": spaceOrganizationImg,
  // Culture category
  "pasakumu-pavadisana": eventCompanionImg,
  "kulturas-sarunu-biedrs": cultureConversationImg,
};

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    window.scrollTo(0, 0);
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

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
            <Button variant="outline" onClick={handleBack}>
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

  const serviceImage = serviceImages[serviceSlug!] || homeHelperImg;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Breadcrumb / back link */}
        <div className="flex items-center gap-3 text-sm">
          <Button
            variant="ghost"
            onClick={() => navigate(`/search/${category.id}`)}
          >
            ← Atpakaļ uz "{category.title}"
          </Button>
          <span className="text-muted-foreground">/</span>
          <Link className="underline" to="/search">
            Kategorijas
          </Link>
        </div>

        {/* Hero Section with Image */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl italic text-foreground/80">
                  {service.description}
                </p>
              </div>
              
              <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  {service.ideal ? service.ideal : "Ideāli seniōriem cilvēkiem, kuri vēlas sakārtotu un mierīgu vidi."}
                </p>
                {service.details && service.details.length > 0 && (
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
                <img 
                  src={serviceImage} 
                  alt={service.title}
                  className="relative w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-primary/20"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Details & pricing */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Kas iekļauts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-foreground/80">
                {service.details?.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Cenas un atlaides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-foreground/80">
                {service.pricing?.basic && <p>• {service.pricing.basic}</p>}
                {service.pricing?.extended && <p>• {service.pricing.extended}</p>}
              </div>
              {service.discounts && service.discounts.length > 0 && (
                <>
                  <div className="h-px bg-border my-3" />
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Atlaides</h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {service.discounts.map((d, i) => (
                        <li key={i}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Helpers list */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Pieejamie palīgi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {helpersWithPrice.length === 0 ? (
              <div className="col-span-2">
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">Šobrīd nav palīgu šim pakalpojumam.</p>
                  <Button asChild>
                    <Link to="/register/helper">Kļūt par palīgu</Link>
                  </Button>
                </Card>
              </div>
            ) : (
              helpersWithPrice.map((h) => (
                <Link
                  key={h.slug}
                  to={`/paligs/${h.slug}`}
                  className="group"
                >
                  <Card className="p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <div className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {h.name}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span className="text-yellow-500">⭐</span>
                          <span>{h.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">No</div>
                        <div className="text-xl font-bold text-primary">{h.finalPrice} €</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {h.specializations.slice(0, 3).map((s) => {
                        const spec = content.helpCards.find(card => card.slug === s);
                        return (
                          <span
                            key={s}
                            className="text-xs bg-accent/50 border border-accent rounded-full px-3 py-1"
                          >
                            {spec?.title || s}
                          </span>
                        );
                      })}
                    </div>
                  </Card>
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
