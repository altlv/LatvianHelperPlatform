import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const HelperTraining = () => {
  const training = content.helperRegistration.training;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-foreground">
          {training.title}
        </h1>

        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              🧭 {training.subtitle}
            </h2>
            <ul className="space-y-2">
              {training.topics.map((topic, index) => (
                <li key={index} className="text-foreground/80 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <p className="text-foreground font-medium">
              📆 {training.duration}
            </p>
            <p className="text-sm text-muted-foreground">
              💡 {training.note}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/register/helper/training/course">{training.startButton}</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/profile">{training.profileButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperTraining;
