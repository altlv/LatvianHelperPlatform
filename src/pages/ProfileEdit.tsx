import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Header from "@/components/Header";

const ProfileEdit = () => {
  const navigate = useNavigate();
  
  // Mock data - in production this would come from auth/database
  const [formData, setFormData] = useState({
    name: "Anna Lapiņa",
    email: "anna.lapina@example.com",
    phone: "+371 12345678",
    city: "Rīga",
    bio: "Es esmu Anna — pieredzējusi mājas palīdze ar uzmanību detaļām un tīrību.",
    defaultPrice: "35",
    specializations: ["majas-paligs", "eko-tirisana", "skapju-kartosana"]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would save to database
    toast.success("Profils veiksmīgi atjaunināts!");
    navigate("/profile");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto space-y-6 py-8">
        <Header title="Rediģēt profilu" showBack={true} />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            {/* Profile Photo */}
            <div className="space-y-2">
              <Label>Profila foto</Label>
              <div className="flex items-center gap-4">
                <div className="text-6xl">👤</div>
                <Button type="button" variant="outline">
                  Augšupielādēt foto
                </Button>
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Vārds</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Pilsēta</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-pasts</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Tālrunis</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio">Par mani</Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                placeholder="Pastāsti par sevi..."
              />
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <Label htmlFor="defaultPrice">Pamatcena (€/h)</Label>
              <Input
                id="defaultPrice"
                name="defaultPrice"
                type="number"
                value={formData.defaultPrice}
                onChange={handleChange}
                required
                min="0"
                step="0.5"
              />
            </div>

            {/* Specializations */}
            <div className="space-y-2">
              <Label>Specializācijas</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Pašlaik: {formData.specializations.length} izvēlētas
              </p>
              <Button type="button" variant="outline" asChild>
                <Link to="/register/helper/step3">Mainīt specializācijas</Link>
              </Button>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <Label>Pieejamības kalendārs</Label>
              <Button type="button" variant="outline">
                Rediģēt kalendāru
              </Button>
              <p className="text-sm text-muted-foreground">
                Iestati laikus, kad tu esi pieejams pakalpojumiem
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <Label>Sertifikāti</Label>
              <div className="space-y-2">
                <p className="text-sm text-foreground/80">• Green Cleaning</p>
                <p className="text-sm text-foreground/80">• Organizācijas kurss</p>
              </div>
              <Button type="button" variant="outline" asChild>
                <Link to="/training">Skatīt visas apmācības</Link>
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button type="submit" size="lg" className="rounded-full">
              Saglabāt izmaiņas
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => navigate("/profile")}
            >
              Atcelt
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
