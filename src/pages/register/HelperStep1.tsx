import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { content } from "@/config/content";

const HelperStep1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    gdpr: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.gdpr) {
      navigate("/register/helper/step2");
    }
  };

  const fields = content.helperRegistration.step1.fields;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {content.helperRegistration.step1.title}
          </h1>
          <p className="text-muted-foreground">
            {content.helperRegistration.step1.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">👤 {fields.firstName}</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">{fields.lastName}</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
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
              ☑️ {content.helperRegistration.step1.gdpr}
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-full"
            disabled={!formData.gdpr}
          >
            🔘 {content.helperRegistration.step1.nextButton}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HelperStep1;
