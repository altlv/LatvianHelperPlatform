import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/config/content";

const HelpCategories = () => {
  const navigate = useNavigate();
  const categories = content.clientRegistration.step2.categories;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            ← {content.helpCategories.backButton}
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {content.helpCategories.title}
          </h1>
          <p className="text-muted-foreground">
            {content.helpCategories.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => navigate(`/help-category/${category.id}`)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    {category.subtitle && (
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCategories;
