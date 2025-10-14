import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
// If "@/config/content" does not exist, you can delete this import;
// the UI will still show the fallback title/subtitle below.
// import { content } from "@/config/content";
import logo from "@/assets/logo-new.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-2">
            <img
              src={logo}
              alt="Žanis | Žanna Logo"
              className="h-48 w-auto"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {/* {content?.landing?.title ?? "Atbalsts | Sirsnība"} */}
            Atbalsts | Sirsnība
          </h1>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {/* {content?.landing?.subtitle ?? "Tava drošā vieta, kur cilvēki palīdz viens otram — ar spējām, prasmēm un talantiem"} */}
            Tava drošā vieta, kur cilvēki palīdz viens otram — ar spējām, prasmēm un talantiem
          </p>

          {/* Registration & Demo Section */}
          <div className="space-y-4 mt-6">
            {/* Registration Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8962F] text-black font-semibold rounded-xl px-8 py-3 transition"
                asChild
              >
                <Link to="/register/client">Reģistrēties kā klients</Link>
              </Button>
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8962F] text-black font-semibold rounded-xl px-8 py-3 transition"
                asChild
              >
                <Link to="/register/helper">Reģistrēties kā palīgs</Link>
              </Button>
            </div>

            {/* Demo Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-xl px-6 py-3 transition"
                onClick={() => {
                  localStorage.setItem("demoRole", "client");
                  navigate("/register/client/welcome");
                }}
              >
                Pieslēgties kā klients (demo)
              </Button>
              <Button
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-xl px-6 py-3 transition"
                onClick={() => {
                  localStorage.setItem("demoRole", "helper");
                  navigate("/profile");
                }}
              >
                Pieslēgties kā palīgs (demo)
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mt-6">
            Atbalsta un tālākizglītības platforma sirsnīgiem cilvēkiem, kuri vēlas būt
            noderīgi un kļūt par palīgu vai arī meklē sev palīdzību dažādās ikdienas
            situācijās.
          </p>
        </div>
      </section>  {/* ← CLOSE the hero section before starting the next one */}

      {/* Info Sections */}
      <section className="bg-background py-12 px-6 text-center border-t border-foreground/10">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Kāpēc mēs pastāvam */}
          <div>
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">🤝 Kāpēc mēs pastāvam</h2>
            <p className="text-foreground/80 leading-relaxed">
              Mēs ticam, ka Latvijā ir daudz sirsnīgu, uzticamu cilvēku, kas vēlas būt
              noderīgi – un citi, kam tieši šāds atbalsts ir vajadzīgs. Platforma savieno
              cilvēkus, kuri palīdz, ar cilvēkiem, kuri meklē palīdzību. Tas ir drošs,
              pārbaudīts un cilvēcīgs tīkls, kur <em>cilvēks palīdz cilvēkam.</em>
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
            <p className="text-foreground/80 leading-relaxed mb-4">
              Mūsu apmācības ir radītas kā <strong>praktiska, mūža ilguma izglītības programma</strong> — vienotas kvalitātes, ikdienā izmantojamas zināšanas. Katra Palīga ceļš ir arī izaugsmes ceļš: no pamatprasmēm līdz profesionālām zināšanām.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Tās aptver plašu tēmu loku, tostarp: pirmās palīdzības pamatus, digitālo pratību, mājturību un amatniecību, komunikāciju un klientu apkalpošanu, datu drošību un lietvedību, emocionālo inteliģenci un empātiju, ētiku un konfidencialitāti, kā arī kultūru un vēsturi. Papildus moduļi tiks pielāgoti pēc izvēlētās specializācijas un pieredzes līmeņa.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              👉 Apmācībās palīdzība pārvēršas par aicinājumu, pieredze — par ieguldījumu sabiedrībā.
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

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
          <Link to="/ethics">Ētikas kodekss</Link>
          <Link to="/privacy">Privātuma politika</Link>
          <Link to="/about">Par mums</Link>
          <Link to="/contact">Kontakti</Link>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
