import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const ClientWelcome = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          🎊 {content.clientRegistration.welcome.title}
        </h1>
        
        <p className="text-lg text-muted-foreground">
          {content.clientRegistration.welcome.message}
        </p>

        <div className="flex flex-col gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/search"> {content.clientRegistration.welcome.findHelperButton}</Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/profile"> {content.clientRegistration.welcome.profileButton}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientWelcome;
