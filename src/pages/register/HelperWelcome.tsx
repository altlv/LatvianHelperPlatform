import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import gratitudeImage from "@/assets/helper-welcome-gratitude.jpg";

const HelperWelcome = () => {
  const welcome = content.helperRegistration.welcome;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <img 
          src={gratitudeImage} 
          alt="Thank you for joining us" 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h1 className="text-4xl font-bold text-foreground">
          {welcome.title}
        </h1>
        
        <p className="text-lg text-foreground/80">
          {welcome.message}
        </p>

        <p className="text-muted-foreground">
          {welcome.note}
        </p>

        <div className="flex flex-col gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/register/helper/step3">{welcome.specializationButton}</Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/profile"> {welcome.profileButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelperWelcome;
