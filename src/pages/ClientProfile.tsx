import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import janisBerzinsImg from "@/assets/helpers/janis-berzins.jpg";

const ClientProfile = () => {
  const navigate = useNavigate();

  // Mock data for demo - in production this would come from auth/database
  const clientData = {
    name: "Jānis Bērziņš",
    location: "Rīga, Latvija",
    email: "janis.berzins@example.com",
    phone: "+371 20 123 456",
    memberSince: "2024. gada janvāris",
    interests: ["Ikdienas palīdzība", "Sports", "Kultūra"],
    reservationHistory: [],
    reviews: [],
    unreadMessages: 0,
    avatar: janisBerzinsImg
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

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-6">
            {clientData.avatar ? (
              <img 
                src={clientData.avatar} 
                alt={clientData.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
              />
            ) : (
              <div className="text-7xl">👤</div>
            )}
            <div>
              <h1 className="text-3xl font-bold">{clientData.name}</h1>
              <p className="text-muted-foreground">
                📍 {clientData.location}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                📅 Dalībnieks kopš {clientData.memberSince}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">📞 Kontaktinformācija</h2>
          <div className="space-y-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">E-pasts</h3>
              <p className="text-foreground">{clientData.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Telefons</h3>
              <p className="text-foreground">{clientData.phone}</p>
            </div>
          </div>
        </section>

        {/* Mailbox */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">📬 Pastkastīte</h2>
            {clientData.unreadMessages > 0 && (
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                {clientData.unreadMessages} jauni
              </span>
            )}
          </div>
          <p className="text-muted-foreground">
            {clientData.unreadMessages === 0 
              ? "Nav jaunu ziņu" 
              : `Tev ir ${clientData.unreadMessages} jauni ziņojumi`}
          </p>
          <Button variant="outline" asChild>
            <Link to="/mailbox">Atvērt pastkasti</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Šeit saņemsi atbildes no palīgiem un administrācijas ziņojumus
          </p>
        </section>

        {/* Interests & Needs */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🧩 Intereses un vajadzības</h2>
          <div className="flex flex-wrap gap-2">
            {clientData.interests.map((interest) => (
              <span key={interest} className="px-3 py-1 bg-accent hover:bg-accent/80 rounded-full text-sm transition">
                {interest}
              </span>
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link to="/search">Meklēt palīgus</Link>
          </Button>
        </section>

        {/* Reservation History */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">🗓️ Rezervāciju vēsture</h2>
          {clientData.reservationHistory.length > 0 ? (
            <div className="space-y-3">
              {clientData.reservationHistory.map((reservation: any, idx: number) => (
                <div key={idx} className="p-3 rounded-lg border border-border hover:bg-accent/50 transition">
                  <p className="font-medium">{reservation.service}</p>
                  <p className="text-sm text-muted-foreground">{reservation.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-foreground/70 mb-4">Nav iepriekšēju rezervāciju</p>
              <Button asChild>
                <Link to="/search">Rezervēt palīgu</Link>
              </Button>
            </div>
          )}
        </section>

        {/* Reviews */}
        <section className="bg-card border border-border rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold">💬 Atsauksmes</h2>
          {clientData.reviews.length > 0 ? (
            <div className="space-y-4">
              {clientData.reviews.map((review: any, idx: number) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.helperName}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                  <p className="text-foreground/80">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-foreground/70">Nav atsauksmju</p>
          )}
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="rounded-full">
            Rediģēt profilu
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Sazināties ar atbalstu
          </Button>
          <Button variant="ghost" onClick={handleBack}>
            ← Atgriezties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
