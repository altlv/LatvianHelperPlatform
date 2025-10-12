import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { privacyContent } from "@/config/privacy";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">
        <div className="space-y-4">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              {privacyContent.backButton}
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold text-foreground">
            🔒 {privacyContent.title}
          </h1>
        </div>

        {/* Data Collection Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            {privacyContent.collection.title}
          </h2>
          
          <Card className="p-6">
            <ul className="space-y-3">
              {privacyContent.collection.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/80">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Data Protection Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            {privacyContent.protection.title}
          </h2>
          
          <Card className="p-6 space-y-4">
            <p className="text-lg font-semibold text-foreground">
              {privacyContent.protection.subtitle}
            </p>
            <p className="text-foreground/80">
              {privacyContent.protection.description}
            </p>
            
            <div className="pt-4 space-y-3">
              {privacyContent.protection.features.map((feature, index) => (
                <p key={index} className="text-foreground/80">
                  <span className="text-2xl mr-2">{feature.icon}</span>
                  {feature.text}
                </p>
              ))}
            </div>
          </Card>
        </section>

        <div className="pt-8">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">{privacyContent.backButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
