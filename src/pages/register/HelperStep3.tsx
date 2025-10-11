import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import { content } from "@/config/content";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HelperStep3 = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (selectedCategories.length > 0) {
      navigate("/register/helper/step4");
    }
  };

  const categories = content.helperRegistration.step3.categories;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {content.helperRegistration.step3.title}
          </h1>
          <p className="text-muted-foreground">
            💬 {content.helperRegistration.step3.subtitle}
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
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <p className="text-sm">{category.description}</p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
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
          {content.helperRegistration.step3.nextButton}
        </Button>
      </div>
    </div>
  );
};

export default HelperStep3;
