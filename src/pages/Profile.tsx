import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  // Mock data for demo - in production this would come from auth/database
  const helperData = {
    name: "Anna Lapiņa",
    rating: 0, // New helper
    city: "Rīga",
    email: "anna.lapina@example.com",
    specializations: ["Mājas palīgs", "Eko tīrīšana", "Skapju kārtošana"],
    certifications: ["Green Cleaning", "Organizācijas kurss"],
    defaultPrice: 35,
    completedJobs: 0,
    totalEarnings: 0,
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <h1 className="text-3xl font-bold text-center text-foreground">
          Mans profils
        </h1>

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-6xl">👤</div>
            <div>
              <h2 className="text-2xl font-bold">{helperData.name}</h2>
              <p className="text-muted-foreground">📍 {helperData.city}</p>
              <p className="text-sm text-muted-foreground">
                ⭐ {helperData.rating > 0 ? helperData.rating.toFixed(1) : "Jauns palīgs"}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-border pt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">📬 Kontakti</h3>
            <p className="text-foreground">{helperData.email}</p>
          </div>

          {/* Specializations */}
          <div className="border-t border-border pt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">🧩 Specializācijas</h3>
            <div className="flex flex-wrap gap-2">
              {helperData.specializations.map((spec) => (
                <span key={spec} className="px-3 py-1 bg-accent rounded-full text-sm">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-border pt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">🎓 Sertifikāti</h3>
            {helperData.certifications.length > 0 ? (
              <ul className="space-y-1">
                {helperData.certifications.map((cert) => (
                  <li key={cert} className="text-foreground/80">• {cert}</li>
                ))}
              </ul>
            ) : (
              <p className="text-foreground/70">Nav sertifikātu</p>
            )}
          </div>
        </div>

        {/* Prices & Jobs */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">💼 Cenas un Darbi</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Pamatcena</p>
              <p className="text-2xl font-bold">{helperData.defaultPrice} €/h</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pabeigti darbi</p>
              <p className="text-2xl font-bold">{helperData.completedJobs}</p>
            </div>
          </div>
        </div>

        {/* Statistics & Earnings */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">📊 Statistika un ienākumi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Šis mēnesis</p>
              <p className="text-xl font-bold">{helperData.totalEarnings} €</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Vidējais reitings</p>
              <p className="text-xl font-bold">
                {helperData.rating > 0 ? helperData.rating.toFixed(1) : "—"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Atbildes laiks</p>
              <p className="text-xl font-bold">—</p>
            </div>
          </div>
        </div>

        {/* Calendar & Mailbox */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">🗓️ Rezervāciju kalendārs</h2>
            <p className="text-foreground/70">Nav gaidāmo rezervāciju</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">📬 Pastkastīte</h2>
            <p className="text-foreground/70">Nav jaunu ziņu</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="rounded-full" asChild>
            <Link to="/profile/edit">Rediģēt profilu</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/training">Apmācības</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
