import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Par mums</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Platforma, kas savieno cilvēkus — ar sirdi, prasmēm un cieņu.
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#D4AF37]">🤝 Mūsu misija</h2>
            <p className="text-foreground/80 leading-relaxed">
              Mēs ticam, ka Latvijā ir daudz sirsnīgu, uzticamu cilvēku, kas vēlas būt noderīgi
              un palīdzēt citiem. Mūsu platforma savieno šos cilvēkus ar tiem, kam ir vajadzīgs
              atbalsts dažādās dzīves situācijās.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#D4AF37]">💡 Kā tas darbojas</h2>
            <p className="text-foreground/80 leading-relaxed">
              Katrs palīgs iziet pārbaudi, apmācības un sertifikāciju. Klienti var izvēlēties
              palīgu pēc specializācijas, reģiona un atsauksmēm. Viss notiek drošā un cieņpilnā vidē.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#D4AF37]">❤️ Mūsu vērtības</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Cieņa un empātija pret katru cilvēku</li>
              <li>Drošība un uzticība</li>
              <li>Godīgums un atklātība</li>
              <li>Profesionalitāte un kvalitāte</li>
            </ul>
          </section>
        </div>

        <div className="text-center pt-8">
          <Link to="/">
            <Button variant="outline" className="rounded-xl">
              Atpakaļ uz sākumu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
