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
            {content.landing.title}
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {content.landing.subtitle}
          </p>

          {/* Demo Mode Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6 border-t mt-8 pt-8">
            <p className="text-sm text-foreground/60 w-full sm:w-auto text-center">Demo režīms:</p>
            <Button 
              variant="outline"
              size="sm"
              className="rounded-full w-full sm:w-auto"
              onClick={() => {
                localStorage.setItem('demoRole', 'client');
                window.location.href = '/meklet';
              }}
            >
              Pieslēgties kā klients (demo)
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              className="rounded-full w-full sm:w-auto"
              onClick={() => {
                localStorage.setItem('demoRole', 'helper');
                window.location.href = '/paligs/dainis-sprogis';
              }}
            >
              Pieslēgties kā palīgs (demo)
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
            🤝 {content.landing.mission.title}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {content.landing.mission.description}
          </p>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
              🛡️ {content.landing.safety.title}
            </h2>
            <p className="text-lg text-foreground/80">
              {content.landing.safety.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {content.landing.safety.features.map((feature, index) => (
              <Card key={index} className="p-6 space-y-2">
                <p className="text-foreground/90">
                  <span className="text-2xl mr-2">{feature.icon}</span>
                  {feature.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
            🎓 {content.landing.education.title}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {content.landing.education.description}
          </p>
          <p className="text-xl font-semibold text-foreground pt-4">
            {content.landing.education.note}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-3">
            💬 {content.landing.benefits.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">{content.landing.benefits.helpers.title}</h3>
              <ul className="space-y-3">
                {content.landing.benefits.helpers.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">{content.landing.benefits.clients.title}</h3>
              <ul className="space-y-3">
                {content.landing.benefits.clients.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-3">
            ⚖️ {content.landing.principles.title}
          </h2>
          
          <ul className="space-y-3 max-w-2xl mx-auto">
            {content.landing.principles.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-lg text-foreground/80">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-center text-foreground/90 pt-4">
            {content.landing.principles.warning}
          </p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
            ❤️ {content.landing.promise.title}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {content.landing.promise.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild
              size="lg"
              className="text-lg px-12 py-6 rounded-full w-full sm:w-auto"
            >
              <Link to="/register/helper">{content.landing.becomeHelperButton}</Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-6 rounded-full w-full sm:w-auto"
            >
              <Link to="/help-categories">{content.landing.findHelperButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {content.landing.footer.links.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
