import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { content } from "@/config/content";

const ClientStep3 = () => {
  const navigate = useNavigate();
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const toggleTrait = (trait: string) => {
    setSelectedTraits(prev =>
      prev.includes(trait) ? prev.filter(t => t !== trait) : [...prev, trait]
    );
  };

  const handleSubmit = () => {
    navigate("/register/client/welcome");
  };

  const traits = content.clientRegistration.step3.traits;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {content.clientRegistration.step3.title}
          </h1>
          <p className="text-muted-foreground">
            {content.clientRegistration.step3.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {traits.map((trait) => (
            <div
              key={trait}
              className="flex items-start space-x-3 p-3 border border-border rounded-xl hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => toggleTrait(trait)}
            >
              <Checkbox
                checked={selectedTraits.includes(trait)}
                onCheckedChange={() => toggleTrait(trait)}
              />
              <label className="text-foreground cursor-pointer flex-1">
                 {trait}
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-2 pt-4">
          <Label htmlFor="notes">💬 {content.clientRegistration.step3.notePlaceholder}</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value.slice(0, 200))}
            maxLength={200}
            rows={4}
            placeholder={content.clientRegistration.step3.notePlaceholder}
          />
          <p className="text-sm text-muted-foreground text-right">{notes.length}/200</p>
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full rounded-full"
        >
          {content.clientRegistration.step3.finishButton}
        </Button>
      </div>
    </div>
  );
};

export default ClientStep3;
