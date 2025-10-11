import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { content } from "@/config/content";

const HelperStep2 = () => {
  const navigate = useNavigate();
  const [ethics, setEthics] = useState(false);
  const [gdpr, setGdpr] = useState(false);

  const handleSubmit = () => {
    if (ethics && gdpr) {
      navigate("/register/helper/step3");
    }
  };

  const step2 = content.helperRegistration.step2;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-foreground">
          {step2.title}
        </h1>

        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="ethics"
              checked={ethics}
              onCheckedChange={(checked) => setEthics(checked as boolean)}
            />
            <label htmlFor="ethics" className="text-foreground font-medium cursor-pointer flex-1">
              {step2.ethicsTitle}
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="gdpr"
              checked={gdpr}
              onCheckedChange={(checked) => setGdpr(checked as boolean)}
            />
            <label htmlFor="gdpr" className="text-foreground font-medium cursor-pointer flex-1">
              {step2.gdprTitle}
            </label>
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <h3 className="font-semibold text-foreground">{step2.ethicsSummary}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {step2.ethicsText}
            </p>
          </div>
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full rounded-full"
          disabled={!ethics || !gdpr}
        >
          {step2.finishButton}
        </Button>
      </div>
    </div>
  );
};

export default HelperStep2;
