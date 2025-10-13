import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const HelperProfile = () => {
  const { helperId } = useParams();
  const navigate = useNavigate();

  const helpers = content.helpers || [];  // may be undefined if not added
  const helper = helpers.find((h) => h.slug === helperId);

  if (!helper) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Palīgs nav atrasts.</p>
      </div>
    );
  }

  const servicesOffered = content.helpCards.filter((s) =>
    helper.specializations.includes(s.slug)
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          ← Atpakaļ
        </Button>

        <div className="text-center space-y-4">
          <div className="text-5xl">👤</div>
          <h1 className="text-3xl font-bold">{helper.name}</h1>
          <p className="text-sm text-muted-foreground">
            {helper.city} {helper.online ? "| 🌐 Tiešsaistē" : ""}
          </p>
          <p className="text-sm text-muted-foreground">
            ⭐ {helper.rating.toFixed(1)} atsauksmes
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Par mani</h2>
          <p className="text-foreground/80">{helper.bio}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Pakalpojumi un cenas</h2>
          <ul className="space-y-2">
            {servicesOffered.map((s) => {
              const base = helper.defaultPrice;
              const discount =
                (helper.discounts && helper.discounts[s.slug]) ?? 0;
              const final = base * (1 - discount);
              return (
                <li key={s.slug} className="flex justify-between">
                  <Link to={`/search/${s.categoryId}/${s.slug}`}>
                    {s.title}
                  </Link>
                  <span>
                    {final.toFixed(2)} €{" "}
                    {discount > 0 && `(-${(discount * 100).toFixed(0)} %)`}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Pieejamība</h2>
          <div className="grid grid-cols-1 gap-2">
            {helper.availability &&
              Object.entries(helper.availability).map(([date, times]) => (
                <div key={date} className="flex justify-between">
                  <span>{date}</span>
                  <span>{times.join(", ")}</span>
                </div>
              ))}
          </div>
        </section>

        <div className="flex gap-4 justify-center">
          <Button>Rediģēt profilu</Button>
          <Button variant="outline">Apmācības</Button>
        </div>
      </div>
    </div>
  );
};

export default HelperProfile;
