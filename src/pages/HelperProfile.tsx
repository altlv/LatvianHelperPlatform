import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/config/content";
import { Star } from "lucide-react";
import helpersData from "@/data/helpers.json";

const HelperProfile = () => {
  const navigate = useNavigate();
  const { helperId } = useParams();

  // Find helper by slug from JSON data
  const helper = helpersData.find(h => h.slug === helperId);

  const profileContent = content.helperPublicProfile;

  // If helper not found, show 404
  if (!helper) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <div className="text-6xl">😞</div>
            <h1 className="text-2xl font-bold text-foreground">Palīgs nav atrasts</h1>
            <p className="text-muted-foreground">
              Diemžēl šis profils neeksistē vai vairs nav pieejams.
            </p>
            <Button asChild className="rounded-full">
              <a href="/search">Atgriezties uz meklēšanu</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <div className="text-6xl">{helper.icon}</div>
              <h1 className="text-2xl font-bold text-foreground">{helper.name}</h1>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{helper.rating}</span>
                <span className="text-muted-foreground">({helper.reviewsCount} atsauksmes)</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {helper.specializations.map((spec, index) => (
                  <span key={index} className="px-3 py-1 bg-accent rounded-full text-sm">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📍 {helper.region}</span>
                {helper.online && <span>🌐 Tiešsaistē</span>}
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold mb-2">📝 Par mani</h3>
              <p className="text-muted-foreground">{helper.about}</p>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="font-semibold mb-3">🎓 Sertifikāti</h3>
              <div className="flex flex-wrap gap-2">
                {helper.certs.map((cert, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3">💼 Pakalpojumi un cenas</h3>
              <div className="space-y-2">
                {helper.services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                    <span className="text-sm">{service.title}</span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                ))}
                {helper.discounts.length > 0 && (
                  <div className="space-y-1 mt-2">
                    {helper.discounts.map((discount, index) => (
                      <p key={index} className="text-sm text-primary">🎁 {discount}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="font-semibold mb-2">📅 Pieejamība</h3>
              <div className="p-4 bg-accent/30 rounded-lg space-y-1">
                {helper.availability.map((line, index) => (
                  <p key={index} className="text-sm text-muted-foreground">{line}</p>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="font-semibold mb-3">💬 Atsauksmes</h3>
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
                Rezervēt Palīgu
              </Button>
              <Button variant="outline" className="flex-1 rounded-full" size="lg">
                Uzdot jautājumu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelperProfile;
