import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import logo from "@/assets/logo.png";
import { Card } from "@/components/ui/card";

const Landing = () => {
  const navigate = useNavigate();

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

          {/* Demo & CTA Section */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-semibold rounded-xl shadow-sm px-6 py-3 transition"
            >
              <Link to="/meklet">Meklēt Palīgu</Link>
            </Button>
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-semibold rounded-xl shadow-sm px-6 py-3 transition"
            >
              <Link to="/register/helper">Pieteikties kā Palīgam</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-xl px-6 py-3 transition"
              onClick={() => { localStorage.setItem('demoRole', 'client'); navigate('/meklet'); }}
            >
              Pieslēgties kā klients (demo)
            </Button>
            <Button
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-xl px-6 py-3 transition"
              onClick={() => { localStorage.setItem('demoRole', 'helper'); navigate('/paligs/dainis-sprogis'); }}
            >
              Pieslēgties kā palīgs (demo)
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto mt-8">
            Atbalsta un tālākizglītības platforma sirsnīgiem cilvēkiem, kuri vēlas būt noderīgi un kļūt par palīgu vai arī meklē sev palīdzību dažādās ikdienas situācijās.
          </p>
        </div>
      </section>
      {/* ...rest of the file unchanged... */}
    </div>
  );
};

export default Landing;