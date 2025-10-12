import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ethicsContent } from "@/config/ethics";
import { ArrowLeft } from "lucide-react";

const Ethics = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
        <div className="space-y-4">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              {ethicsContent.backButton}
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold text-foreground">
            📜 {ethicsContent.title}
          </h1>
        </div>

        {/* Values Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            {ethicsContent.values.title}
          </h2>
          
          <div className="space-y-4">
            {ethicsContent.values.items.map((value) => (
              <Card key={value.number} className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.number}. {value.title}
                </h3>
                <p className="text-foreground/80">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Sanctions Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            {ethicsContent.sanctions.title}
          </h2>
          
          <Card className="p-6">
            <ul className="space-y-3">
              {ethicsContent.sanctions.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <div className="pt-8">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">{ethicsContent.backButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ethics;
