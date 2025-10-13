import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import heartwarmingImage from "@/assets/client-welcome-heartwarming.jpg";
import logoImage from "@/assets/logo-new.png";
import { ArrowLeft } from "lucide-react";

const ClientWelcome = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4" />
          <span>Atpakaļ uz sākumlapu</span>
        </Link>
        <img 
          src={heartwarmingImage} 
          alt="Welcome to our community" 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h1 className="text-4xl font-bold text-foreground">
          🎊 {content.clientRegistration.welcome.title}
        </h1>
        
        <p className="text-lg text-muted-foreground">
          {content.clientRegistration.welcome.message}
        </p>

        <div className="flex flex-col gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/search">{content.clientRegistration.welcome.findHelperButton}</Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/profile/client">{content.clientRegistration.welcome.profileButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientWelcome;
