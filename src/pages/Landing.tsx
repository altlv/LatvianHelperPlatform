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
            {content?.landing?.title ?? "Atbalsts | Sirsnība"}
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {content?.landing?.subtitle ?? "Tava drošā vieta, kur cilvēki palīdz viens otram – ar sirdi, prasmēm un cieņu."}
          </p>

          {/* Demo & CTA Section */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            
            <Button
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-xl px-6 py-3 transition"
              onClick={() => { localStorage.setItem('demoRole', 'client'); navigate('/search'); }}
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
        {/* Info Sections */}
<section className="bg-background py-20 px-6 text-center border-t border-foreground/10">
  <div className="max-w-4xl mx-auto space-y-12">
    
    {/* Kāpēc mēs pastāvam */}
    <div>
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">🤝 Kāpēc mēs pastāvam</h2>
      <p className="text-foreground/80 leading-relaxed">
        Mēs ticam, ka Latvijā ir daudz sirsnīgu, uzticamu cilvēku, kas vēlas būt noderīgi – un citi, kam tieši šāds atbalsts ir vajadzīgs.
        Platforma savieno cilvēkus, kuri palīdz, ar cilvēkiem, kuri meklē palīdzību.
        Tas ir drošs, pārbaudīts un cilvēcīgs tīkls, kur <em>cilvēks palīdz cilvēkam.</em>
      </p>
    </div>

    {/* Drošība un uzticība */}
    <div>
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">🛡️ Drošība un uzticība vispirms</h2>
      <ul className="text-left list-disc list-inside text-foreground/80 space-y-1">
        <li>✅ Verificēti profili – katrs Palīgs iziet identitātes pārbaudi</li>
        <li>📜 Ētikas kodekss – skaidri noteikumi par cieņu un uzvedību</li>
        <li>⚖️ Sankcijas par pārkāpumiem – brīdinājumi, profila apturēšana vai dzēšana</li>
        <li>🔒 Privātuma aizsardzība – droša saziņa, dati netiek publiski izpausti</li>
        <li>🧠 Apmācības – katrs Palīgs apgūst pamata kursu par empātiju, robežām un komunikāciju</li>
      </ul>
    </div>

    {/* Attīstība un izglītība */}
    <div>
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">🎓 Attīstība un izglītība</h2>
      <p className="text-foreground/80 leading-relaxed">
        Katrs Palīgs var piedalīties <strong>Žaņa akadēmijas apmācībās</strong> — komunikācija, sociālais darbs, improvizācija,
        pašaizsardzība un praktiskās iemaņas. <br />
        🎓 Palīdzība kļūst par profesiju. Pieredze kļūst par izaugsmi.
      </p>
    </div>

    {/* Ko iegūst cilvēki */}
    <div>
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">💬 Ko iegūst cilvēki</h2>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div>
          <h3 className="font-semibold text-lg mb-2">Palīgiem:</h3>
          <ul className="list-disc list-inside text-foreground/80 space-y-1">
            <li>Darbs ar jēgu un sirsnību</li>
            <li>Apmācības un izaugsme</li>
            <li>Sertifikācija un atsauksmes</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Klientiem:</h3>
          <ul className="list-disc list-inside text-foreground/80 space-y-1">
            <li>Droša, pārbaudīta palīdzība</li>
            <li>Cilvēcīga pieeja, ne mehāniska apkalpošana</li>
            <li>Personiska saderība pēc vērtībām un vajadzībām</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Kvalitātes principi */}
    <div>
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">⚖️ Kvalitātes un ētikas principi</h2>
      <ul className="text-left list-disc list-inside text-foreground/80 space-y-1">
        <li>Cieņa un empātija pret katru cilvēku</li>
        <li>Godīgums un uzticība</li>
        <li>Nulles tolerance pret agresiju vai diskrimināciju</li>
        <li>Privātuma aizsardzība</li>
        <li>Abpusēja mācīšanās un cieņa</li>
      </ul>
      <p className="mt-3 text-foreground/70 text-sm">
        🚫 Pārkāpumi tiek dokumentēti un var novest pie profila bloķēšanas vai līguma izbeigšanas.
      </p>
    </div>

    {/* Mūsu solījums */}
    <div>
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">❤️ Mūsu solījums</h2>
      <p className="text-foreground/80 leading-relaxed">
        Mēs esam tilts starp tiem, kam vajag palīdzību, un tiem, kas vēlas palīdzēt. <br />
        Ar cieņu, drošību un cilvēcību kā pamatvērtībām. <br />
        Mēs nesolām ideālus – mēs radām īstus kontaktus.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-semibold rounded-xl shadow-sm px-6 py-3 transition">
          Pieteikties kā Palīgam
        </Button>
        <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-semibold rounded-xl shadow-sm px-6 py-3 transition">
          Meklēt Palīgu
        </Button>
      </div>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="py-10 border-t border-foreground/10 mt-16">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
          <Link to="/ethics">Ētikas kodekss</Link>
          <Link to="/privacy">Privātuma politika</Link>
          <Link to="/about">Par mums</Link>
          <Link to="/contact">Kontakti</Link>
        </div>
      </footer>
      {/* ...rest of the file unchanged... */}
    </div>
  );
};

export default Landing;
