import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import annaLapinaImg from "@/assets/helpers/anna-lapina.jpg";

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock data for demo - in production this would come from auth/database
  const helperData = {
    name: "Anna Lapiņa",
    rating: 4.8,
    city: "Rīga",
    email: "anna.lapina@example.com",
    specializations: ["Mājas palīgs", "Eko tīrīšana", "Skapju kārtošana"],
    certifications: ["Green Cleaning", "Organizācijas kurss"],
    defaultPrice: 35,
    completedJobs: 47,
    totalEarnings: 1245,
    monthlyEarnings: 385,
    averageResponseTime: "2h",
    messages: [
      {
        from: "Līga K.",
        subject: "Jautājums par eko tīrīšanu",
        preview: "Labdien! Vai jūsu eko tīrīšanas pakalpojumi ir piemēroti mājām, kurās ir mājdzīvnieki - suņi un papagaiļi? Vai izmantojat tikai dabīgus līdzekļus?",
        date: "2025-10-12",
        unread: true
      }
    ],
    upcomingReservations: [
      {
        client: "Zane B.",
        service: "Eko tīrīšana",
        date: "2025-10-15",
        time: "10:00-13:00",
        price: 35
      },
      {
        client: "Māris S.",
        service: "Skapju kārtošana",
        date: "2025-10-18",
        time: "14:00-17:00",
        price: 35
      }
    ]
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={handleBack}>
          ← Atgriezties
        </Button>
        
        <h1 className="text-3xl font-bold text-center text-foreground">
          Mans profils
        </h1>

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-6">
            <img 
              src={annaLapinaImg} 
              alt={helperData.name}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
            />
            <div>
              <h2 className="text-3xl font-bold">{helperData.name}</h2>
              <p className="text-muted-foreground">📍 {helperData.city}</p>
              <p className="text-sm text-muted-foreground mt-1">
                ⭐ {helperData.rating > 0 ? `${helperData.rating.toFixed(1)} reitings` : "Jauns palīgs"}
              </p>
            </div>
          </div>

        </div>

        {/* Contact Info */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">📬 Kontakti</h2>
          <p className="text-foreground/80">{helperData.email}</p>
        </section>

        {/* Specializations */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🧩 Specializācijas</h2>
          <div className="flex flex-wrap gap-2">
            {helperData.specializations.map((spec) => (
              <span key={spec} className="px-3 py-1 bg-accent hover:bg-accent/80 rounded-full text-sm transition">
                {spec}
              </span>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🎓 Sertifikāti</h2>
          {helperData.certifications.length > 0 ? (
            <ul className="space-y-1">
              {helperData.certifications.map((cert) => (
                <li key={cert} className="text-foreground/80">• {cert}</li>
              ))}
            </ul>
          ) : (
            <p className="text-foreground/70">Nav sertifikātu</p>
          )}
        </section>

        {/* Prices & Jobs */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">💼 Cenas un Darbi</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Pamatcena</p>
              <p className="text-2xl font-bold">{helperData.defaultPrice} €/h</p>
            </div>
            <div className="p-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Pabeigti darbi</p>
              <p className="text-2xl font-bold">{helperData.completedJobs}</p>
            </div>
          </div>
        </section>

        {/* Statistics & Earnings */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">📊 Statistika un ienākumi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Šis mēnesis</p>
              <p className="text-xl font-bold">{helperData.monthlyEarnings} €</p>
            </div>
            <div className="p-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Kopējie ienākumi</p>
              <p className="text-xl font-bold">{helperData.totalEarnings} €</p>
            </div>
            <div className="p-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Atbildes laiks</p>
              <p className="text-xl font-bold">{helperData.averageResponseTime}</p>
            </div>
          </div>
        </section>

        {/* Calendar & Mailbox */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">🗓️ Rezervāciju kalendārs</h2>
            {helperData.upcomingReservations.length > 0 ? (
              <div className="space-y-3">
                {helperData.upcomingReservations.map((reservation, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-border bg-accent/20">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold">{reservation.service}</p>
                      <span className="text-sm font-bold">{reservation.price} €</span>
                    </div>
                    <p className="text-sm text-muted-foreground">👤 {reservation.client}</p>
                    <p className="text-sm text-muted-foreground">📅 {reservation.date}</p>
                    <p className="text-sm text-muted-foreground">🕐 {reservation.time}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-foreground/70">Nav gaidāmo rezervāciju</p>
            )}
          </section>
          <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">📬 Pastkastīte</h2>
            {helperData.messages.length > 0 ? (
              <>
                <div className="space-y-3">
                  {helperData.messages.map((message, idx) => (
                    <div key={idx} className={`p-3 rounded-lg border border-border ${message.unread ? 'bg-primary/10' : 'bg-accent/20'}`}>
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold">{message.from}</p>
                        {message.unread && (
                          <span className="px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs">
                            Jauns
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mb-1">{message.subject}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{message.preview}</p>
                      <p className="text-xs text-muted-foreground mt-2">{message.date}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/helper/mailbox">Atvērt pastkasti</Link>
                </Button>
              </>
            ) : (
              <>
                <p className="text-foreground/70 mb-3">Nav jaunu ziņu</p>
                <Button variant="outline" asChild>
                  <Link to="/helper/mailbox">Atvērt pastkasti</Link>
                </Button>
              </>
            )}
          </section>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="rounded-full" asChild>
            <Link to="/profile/edit">Rediģēt profilu</Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link to="/training">Apmācības</Link>
          </Button>
          <Button variant="ghost" onClick={handleBack}>
            ← Atgriezties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
