import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import logo from "@/assets/logo.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Žanis | Žanna Logo" 
            className="h-48 w-auto"
          />
        </div>
        
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          {content.landing.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            asChild
            size="lg"
            className="text-lg px-12 py-6 rounded-full w-full sm:w-auto"
          >
            <Link to="/login">{content.landing.loginButton}</Link>
          </Button>
          
          <Button 
            asChild
            size="lg"
            className="text-lg px-12 py-6 rounded-full w-full sm:w-auto"
          >
            <Link to="/register/client">{content.landing.registerButton}</Link>
          </Button>
        </div>

        <div className="pt-4">
          <Button 
            asChild
            variant="secondary"
            size="lg"
            className="text-base px-8 py-5 rounded-full"
          >
            <Link to="/register/helper">{content.landing.becomeHelperButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
