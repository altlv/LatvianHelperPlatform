import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { content } from "@/config/content";

const ClientStep2 = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (selectedCategories.length > 0) {
      navigate("/register/client/step3");
    }
  };

  const categories = content.clientRegistration.step2.categories;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {content.clientRegistration.step2.title}
          </h1>
          <p className="text-muted-foreground">
            {content.clientRegistration.step2.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-border rounded-2xl p-4 hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                  </div>
                  {category.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{category.subtitle}</p>
                  )}
                  <p className="text-sm text-foreground/70 mt-2">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full rounded-full"
          disabled={selectedCategories.length === 0}
        >
          🔘 {content.clientRegistration.step2.nextButton}
        </Button>
      </div>
    </div>
  );
};

export default ClientStep2;
