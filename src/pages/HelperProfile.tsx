import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/config/content";

const HelperProfile = () => {
  const navigate = useNavigate();
  const { helperId } = useParams();

  // Example data - in real app this would come from backend
  const helper = {
    name: "Elīna Vītola",
    photo: "👩‍🦰",
    rating: 4.9,
    reviewCount: 47,
    specializations: ["🧠 Emocionālais draugs", "🧘 Labsajūtas pavadonis"],
    location: "Rīga",
    isOnline: true,
    about: "Sirsnīga un empātiska sarunu biedre. Palīdzu atrast mieru un līdzsvaru ikdienā, sniedzu emocionālu atbalstu un iedvesmu.",
    tagline: "Saruna, kas dziedē un iedrošina.",
    certificates: [
      "Emocionālā atbalsta pamati",
      "Mindfulness Level 1",
      "Pirmā palīdzība"
    ],
    services: [
      { name: "1h saruna", price: "25 €" },
      { name: "Labsajūtas saruna + relaksācija", price: "30 €" }
    ],
    discount: "Pirmajai reizei: -20%",
    availability: "Pirmd.–Piektd. 9:00–18:00\nSestd. pēc vienošanās",
    reviews: [
      { author: "Maija, 54", text: "Elīna palīdzēja man sakārtot domas un nomierināties." },
      { author: "Artūrs, 62", text: "Klausās ar sirdi." }
    ]
  };

  const profileContent = content.helperPublicProfile;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto space-y-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="rounded-full"
        >
          ← {profileContent.backButton}
        </Button>

        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="text-6xl">{helper.photo}</div>
              <h1 className="text-2xl font-bold text-foreground">{helper.name}</h1>
              <div className="flex items-center justify-center gap-2 text-lg">
                <span>⭐ {helper.rating}</span>
                <span className="text-muted-foreground">({helper.reviewCount} {profileContent.rating})</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {helper.specializations.map((spec, index) => (
                  <span key={index} className="px-3 py-1 bg-accent rounded-full text-sm">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📍 {helper.location}</span>
                {helper.isOnline && <span>🌐 {profileContent.online}</span>}
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold mb-2">📝 {profileContent.aboutMe}</h3>
              <p className="text-muted-foreground mb-2">{helper.about}</p>
              <p className="text-sm italic">💬 "{helper.tagline}"</p>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="font-semibold mb-3">🎓 {profileContent.certificates}</h3>
              <div className="flex flex-wrap gap-2">
                {helper.certificates.map((cert, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3">💼 {profileContent.services}</h3>
              <div className="space-y-2">
                {helper.services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                    <span className="text-sm">💬 {service.name}</span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                ))}
                <p className="text-sm text-primary">🎁 {helper.discount}</p>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="font-semibold mb-2">📅 {profileContent.availability}</h3>
              <div className="p-4 bg-accent/30 rounded-lg">
                {helper.availability.split('\n').map((line, index) => (
                  <p key={index} className="text-sm text-muted-foreground">{line}</p>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="font-semibold mb-3">💬 {profileContent.reviews}</h3>
              <div className="space-y-3">
                {helper.reviews.map((review, index) => (
                  <div key={index} className="p-3 bg-accent/20 rounded-lg">
                    <p className="text-sm mb-1">🗨️ "{review.text}"</p>
                    <p className="text-xs text-muted-foreground">– {review.author}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="flex-1 rounded-full" size="lg">
                {profileContent.reserveButton}
              </Button>
              <Button variant="outline" className="flex-1 rounded-full" size="lg">
                {profileContent.askQuestionButton}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelperProfile;
