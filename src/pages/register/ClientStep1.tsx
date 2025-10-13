import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { content } from "@/config/content";

const ClientStep1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    gdpr: false,
    ethics: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.gdpr && formData.ethics) {
      navigate("/register/client/step2");
    }
  };

  const fields = content.clientRegistration.step1.fields;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-foreground">
          {content.clientRegistration.step1.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">👤 Vārds un Uzvārds</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Jānis Bērziņš"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">📧 {fields.email}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">📱 {fields.phone}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">🔒 {fields.password}</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">📍 {fields.city}</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photo">📸 {fields.photo}</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
            />
          </div>

          <div className="flex items-start space-x-2 pt-4">
            <Checkbox
              id="gdpr"
              checked={formData.gdpr}
              onCheckedChange={(checked) => setFormData({...formData, gdpr: checked as boolean})}
            />
            <label htmlFor="gdpr" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {content.clientRegistration.step1.gdpr}{" "}
              <Link to="/privacy" className="underline text-primary hover:text-primary/80" target="_blank">
                (lasīt vairāk)
              </Link>
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="ethics"
              checked={formData.ethics}
              onCheckedChange={(checked) => setFormData({...formData, ethics: checked as boolean})}
            />
            <label htmlFor="ethics" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {content.clientRegistration.step1.ethics}{" "}
              <Link to="/ethics" className="underline text-primary hover:text-primary/80" target="_blank">
                (lasīt vairāk)
              </Link>
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-full"
            disabled={!formData.gdpr || !formData.ethics}
          >
             {content.clientRegistration.step1.nextButton}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ClientStep1;
