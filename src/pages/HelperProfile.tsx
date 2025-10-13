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
        {/* Back Button */}
        <Button variant="ghost" onClick={() => navigate(-1)}>
          ← Atgriezties
        </Button>

        {/* Header */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-6">
            <div className="text-7xl">👤</div>
            <div>
              <h1 className="text-3xl font-bold">{helper.name}</h1>
              <p className="text-muted-foreground">
                📍 {helper.city} {helper.online ? "| 🌐 Tiešsaistē" : ""}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                ⭐ {helper.rating.toFixed(1)} reitings
              </p>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🧩 Specializācijas</h2>
          <div className="flex flex-wrap gap-2">
            {helper.specializations.map((spec) => {
              const service = content.helpCards.find((s) => s.slug === spec);
              return (
                <Link
                  key={spec}
                  to={`/search/${service?.categoryId}/${spec}`}
                  className="px-3 py-1 bg-accent hover:bg-accent/80 rounded-full text-sm transition"
                >
                  {service?.title || spec}
                </Link>
              );
            })}
          </div>
        </section>

        {/* About Me */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">📝 Par mani</h2>
          <p className="text-foreground/80">{helper.bio}</p>
        </section>

        {/* Certificates */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🎓 Sertifikāti</h2>
          {helper.certifications && helper.certifications.length > 0 ? (
            <ul className="space-y-1">
              {helper.certifications.map((cert) => (
                <li key={cert} className="text-foreground/80">• {cert}</li>
              ))}
            </ul>
          ) : (
            <p className="text-foreground/70">Nav sertifikātu</p>
          )}
        </section>

        {/* Services & Pricing */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">💼 Pakalpojumi un cenas</h2>
          <div className="space-y-3">
            {servicesOffered.map((s) => {
              const base = helper.defaultPrice;
              const discount =
                (helper.discounts && helper.discounts[s.slug]) ?? 0;
              const final = base * (1 - discount);
              return (
                <div
                  key={s.slug}
                  className="flex justify-between items-center p-3 rounded-lg border border-border hover:bg-accent/50 transition"
                >
                  <Link
                    to={`/search/${s.categoryId}/${s.slug}`}
                    className="font-medium hover:underline"
                  >
                    {s.title}
                  </Link>
                  <span className="font-bold">
                    {final.toFixed(2)} €{" "}
                    {discount > 0 && (
                      <span className="text-sm text-muted-foreground">
                        (-{(discount * 100).toFixed(0)}%)
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Availability Calendar */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🗓️ Pieejamības kalendārs</h2>
          <div className="grid grid-cols-1 gap-3">
            {helper.availability && Object.keys(helper.availability).length > 0 ? (
              Object.entries(helper.availability).map(([date, times]) => (
                <div
                  key={date}
                  className="flex justify-between items-center p-3 rounded-lg border border-border"
                >
                  <span className="font-medium">{date}</span>
                  <span className="text-muted-foreground">{times.join(", ")}</span>
                </div>
              ))
            ) : (
              <p className="text-foreground/70">Nav pieejamības informācijas</p>
            )}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">💬 Atsauksmes</h2>
          <p className="text-foreground/70">Pagaidām nav atsauksmju</p>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="rounded-full">
            Rezervēt palīgu
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Uzdot jautājumu
          </Button>
          <Button variant="ghost" onClick={() => navigate(-1)}>
            ← Atgriezties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelperProfile;
