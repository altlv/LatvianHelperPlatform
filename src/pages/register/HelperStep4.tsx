import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const HelperStep4 = () => {
  const navigate = useNavigate();

  const step4 = content.helperRegistration.step4;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <div className="flex items-center justify-center mb-2">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mr-auto"
          >
            ← Atpakaļ
          </Button>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            🧠 {step4.title}
          </h1>
          <p className="text-muted-foreground">
            {step4.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-2xl p-6 space-y-4 hover:bg-accent/50 transition-colors">
            <div className="text-center">
              <div className="text-4xl mb-2">🔘</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step4.wantToLearn.title}
              </h3>
            </div>
            <p className="text-foreground/80">
              💬 {step4.wantToLearn.description}
            </p>
            <Button 
              onClick={() => navigate("/register/helper/training")}
              className="w-full rounded-full"
            >
              {step4.wantToLearn.button}
            </Button>
          </div>

          <div className="border border-border rounded-2xl p-6 space-y-4 hover:bg-accent/50 transition-colors">
            <div className="text-center">
              <div className="text-4xl mb-2">🔘</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step4.alreadyKnow.title}
              </h3>
            </div>
            <p className="text-foreground/80">
              📎 {step4.alreadyKnow.description}
            </p>
            <p className="text-sm text-muted-foreground">
              💬 {step4.alreadyKnow.note}
            </p>
            <Button 
              onClick={() => navigate("/register/helper/welcome")}
              variant="secondary"
              className="w-full rounded-full"
            >
              {step4.alreadyKnow.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperStep4;
