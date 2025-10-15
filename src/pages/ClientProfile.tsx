import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const ClientProfile = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    window.scrollTo(0, 0);
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Mock data for demo - in production this would come from auth/database
  const clientData = {
    name: "Jānis Bērziņš",
    location: "Rīga, Latvija",
    email: "janis.berzins@example.com",
    interests: ["Ikdienas palīdzība", "Sports", "Kultūra"],
    reservationHistory: [
      {
        id: 1,
        service: "Ekoloģiska tīrīšana",
        helperName: "Liga Kalniņa",
        date: "2024-10-08",
        status: "Pabeigts",
        feedback: "Liga bija ļoti rūpīga un profesionāla! Māja izskatās lieliski. Paldies!"
      },
      {
        id: 2,
        service: "Palīdzība sadzīvē",
        helperName: "Kristīne Eglīte",
        date: "2024-09-22",
        status: "Pabeigts",
        feedback: "Kristīne man palīdzēja ar iepirkšanos un virtuvē. Ļoti laipna un uzmanīga!"
      },
      {
        id: 3,
        service: "Emocionāls atbalsts",
        helperName: "Anna Lapiņa",
        date: "2024-09-10",
        status: "Pabeigts",
        feedback: "Anna ir brīnišķīga klausītāja. Pēc tikšanās jutos daudz labāk. Sirsnīgi iesaku!"
      }
    ],
    reviews: [
      {
        helperName: "Liga Kalniņa",
        rating: 5,
        comment: "Jānis bija ļoti laipns un saprotošs klients. Viņš skaidri izskaidroja, ko vēlas, un novērtēja darbu. Prieks strādāt!"
      },
      {
        helperName: "Kristīne Eglīte",
        rating: 5,
        comment: "Brīnišķīgs klients! Vienmēr pieklājīgs un pateicīgs. Iesaku visiem palīgiem!"
      },
      {
        helperName: "Anna Lapiņa",
        rating: 5,
        comment: "Jānis ir sirsnīgs un cienījams cilvēks. Bija patīkami viņam palīdzēt. Paldies par uzticēšanos!"
      }
    ],
    unreadMessages: 0
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={handleBack}>
            ← Atgriezties
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-foreground">
          Mans Profils
        </h1>

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="text-6xl">👤</div>
            <div>
              <h2 className="text-2xl font-bold">{clientData.name}</h2>
              <p className="text-muted-foreground">📍 {clientData.location}</p>
            </div>
          </div>

          {/* Mailbox */}
          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">📬 Pastkastīte</h3>
              {clientData.unreadMessages > 0 && (
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {clientData.unreadMessages} jauni
                </span>
              )}
            </div>
            <p className="text-muted-foreground mt-2">
              {clientData.unreadMessages === 0 
                ? "Nav jaunu ziņu" 
                : `Tev ir ${clientData.unreadMessages} jauni ziņojumi`}
            </p>
            <Button variant="outline" className="mt-3" asChild>
              <Link to="/mailbox">Atvērt pastkasti</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Šeit saņemsi atbildes no palīgiem un administrācijas ziņojumus
            </p>
          </div>

          {/* Contact Info */}
          <div className="border-t border-border pt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">E-pasts</h3>
            <p className="text-foreground">{clientData.email}</p>
          </div>

          {/* Interests & Needs */}
          <div className="border-t border-border pt-4">
            <h3 className="text-lg font-semibold mb-3">🧩 Intereses un vajadzības</h3>
            <div className="flex flex-wrap gap-2">
              {clientData.interests.map((interest) => (
                <span key={interest} className="px-3 py-1 bg-accent rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Search for Helpers */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">🔍 Meklēt palīgus</h2>
          <p className="text-muted-foreground">
            Atrod piemērotu palīgu savām vajadzībām
          </p>
          <Button asChild size="lg">
            <Link to="/search">Meklēt palīgu</Link>
          </Button>
        </div>

        {/* Reservation History */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">🗓️ Rezervāciju vēsture</h2>
          {clientData.reservationHistory.length > 0 ? (
            <div className="space-y-3">
              {clientData.reservationHistory.map((reservation: any) => (
                <div key={reservation.id} className="p-4 border border-border rounded-lg space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{reservation.service}</p>
                      <p className="text-sm text-muted-foreground">Palīgs: {reservation.helperName}</p>
                      <p className="text-sm text-muted-foreground">{reservation.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded text-xs font-medium">
                      {reservation.status}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">💬 "{reservation.feedback}"</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-foreground/70">Nav iepriekšēju rezervāciju</p>
            </div>
          )}
        </div>

        {/* Reviews */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">💬 Atsauksmes</h2>
          {clientData.reviews.length > 0 ? (
            <div className="space-y-3">
              {clientData.reviews.map((review: any, idx: number) => (
                <div key={idx} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{review.helperName}</p>
                    <span className="text-sm">⭐ {review.rating}</span>
                  </div>
                  <p className="text-sm text-foreground/80">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-foreground/70">Nav atsauksmju</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
