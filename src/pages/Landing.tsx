import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import logo from "@/assets/logo.png";
import { Card } from "@/components/ui/card";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Žanis | Žanna Logo" 
              className="h-48 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {content?.landing?.title ?? "Palīgs | Atbalsts | Cilvēcība"}
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {content?.landing?.subtitle ?? "Tava drošā vieta, kur cilvēki palīdz viens otram – ar sirdi, prasmēm un cieņu."}
          </p>

          {/* Demo Mode Buttons */}
          {/* ...rest of the file unchanged... */}
        </div>
      </section>
      {/* ...rest of the file unchanged... */}
    </div>
  );
};

export default Landing;