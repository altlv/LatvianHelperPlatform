import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Training = () => {
  const levels = [
    {
      level: "1",
      name: "Pamata līmenis",
      description: "Pabeigt vispārīgi kursi un ir vismaz viena specializācija"
    },
    {
      level: "2",
      name: "Profesionālais līmenis",
      description: "Divas vai vairāk specializācijas un praktiskais tests"
    },
    {
      level: "3",
      name: "Mentora līmenis",
      description: "Var apmācīt citus, piedalās kvalitātes uzraudzībā"
    }
  ];

  const baseTraining = {
    title: "🧭 BĀZES APGŪSTAMĀS PRASMES (VISIEM)",
    subtitle: "Mērķis – nodrošināt vienotu kvalitāti, attieksmi un profesionālu ētiku.",
    topics: [
      { icon: "🗣️", title: "Komunikācijas un empātijas pamati", description: "Kā veidot sarunu, klausīties, izprast vajadzības, saglabāt cieņu." },
      { icon: "👥", title: "Klientu apkalpošanas kultūra", description: "Etiķete, saskarsme, apģērbs, uzvedība." },
      { icon: "🧠", title: "Emocionālā inteliģence un robežu ievērošana", description: "Robežu izpratne un ievērošana." },
      { icon: "🔐", title: "Drošība un datu aizsardzība", description: "GDPR, privātums." },
      { icon: "🕊️", title: "Konfidencialitāte un ētika", description: "Ētikas kodeksa pamati." },
      { icon: "🧰", title: "Pirmās palīdzības pamati", description: "Obligāti visiem." },
      { icon: "💻", title: "Digitālā pratība", description: "Lieto aplikāciju, komun. rīkus." }
    ],
    certificate: "✅ Žaņa Akadēmijas pamata sertifikāts: \"Pakalpojumu sniedzējs – 1. līmenis\""
  };

  const specializations = [
    {
      icon: "🏠",
      category: "IKDIENA",
      title: "Mājas palīgs, Iepirkšanās asistents, Organizators",
      trainings: [
        "Sadzīves organizēšana un tīrīšanas tehnoloģijas",
        "Uztura pamati un pārtikas drošība",
        "Laika un darba plānošana",
        "Darbs ar cilvēkiem mājās (cieņas, robežu ievērošana)",
        "Mājas estētika un kārtības psiholoģija"
      ],
      certificates: [
        "🧹 \"Mājas un sadzīves asistents\" (iekšējā)",
        "🎓 \"Household Management / Home Assistant\" (ārējā)",
        "🍽️ \"Food Safety & Hygiene Level 1\""
      ]
    },
    {
      icon: "💪",
      category: "VESELĪBA",
      title: "Fitnesa draugs, Labsajūta, Uztura atbalsts",
      trainings: [
        "Fitnesa un fizisko aktivitāšu pamati (drošība, slodze)",
        "Motivācijas tehnikas",
        "Stiepšanās, joga, apzinātība (mindfulness)",
        "Veselīga uztura pamatprincipi",
        "Stresa mazināšanas tehnikas"
      ],
      certificates: [
        "🏅 \"Wellness & Lifestyle Assistant\" (iekšējā)",
        "🧘 \"Mindfulness Practitioner – Level 1\" (ārējā)",
        "🥗 \"Basic Nutrition Course\"",
        "💪 \"Fitness motivator\" (iekšējais sertifikāts)"
      ],
      note: "⚠️ Svarīgi: Šie Žaņi/Žannas nesniedz medicīnisku konsultāciju, tikai atbalsta un motivē."
    },
    {
      icon: "💬",
      category: "SOCIĀLAIS",
      title: "Emocionālais draugs, Senioru biedrs, Pavadonis",
      trainings: [
        "Sarunu un empātijas prakse",
        "Senioru psiholoģija un vajadzības",
        "Sociālās saskarsmes etiķete",
        "Palīdzība cilvēkiem ar ierobežotām spējām",
        "Drošība pavadīšanas laikā",
        "Konfliktu novēršana"
      ],
      certificates: [
        "🎓 \"Sociālā atbalsta asistents\" (iekšējā)",
        "🧠 \"Active Listening & Empathy\"",
        "🚗 \"Accompaniment Safety & Etiquette\"",
        "🧓 \"Senior Care Basics\" (ārējā)"
      ]
    },
    {
      icon: "🎨",
      category: "RADOŠAIS",
      title: "Radošais partneris, Modes padomdevējs",
      trainings: [
        "Radošuma pamati un aktivitāšu vadīšana",
        "Stilistikas pamati un garderobes plānošana",
        "Modes un vizuālā tēla saskaņošana",
        "Radošā terapija (bez terapeitiskas iejaukšanās)",
        "Krāsu psiholoģija un personīgā izpausme"
      ],
      certificates: [
        "🎨 \"Radošo aktivitāšu vadītājs\" (iekšējā)",
        "💇 \"Style & Image Consultant – Level 1\" (ārējā)",
        "🎭 \"Art & Creative Companion\" (iekšējā)"
      ]
    },
    {
      icon: "🧰",
      category: "PRAKTISKAIS",
      title: "Palīgs darbos, Digitālais asistents",
      trainings: [
        "Pamata drošība praktiskajos darbos",
        "Nelielu remontu pamati (mēbeles, instrumenti, uzstādīšana)",
        "Digitālās sistēmas un tiešsaistes pakalpojumi",
        "Palīdzība e-pastos, rēķinos, e-veselībā"
      ],
      certificates: [
        "🧰 \"Mājsaimniecības tehniskais asistents\"",
        "💻 \"Digital Literacy Certificate\" (Microsoft / Coursera)",
        "⚙️ \"Basic Home Repairs & Maintenance\" (ārējā)"
      ]
    },
    {
      icon: "👶",
      category: "ĢIMENE",
      title: "Māmiņu palīgs, Mācību asistents",
      trainings: [
        "Darbs ar bērniem, bērnu drošība",
        "Mājdzemdību un pēcdzemdību atbalsta pamati",
        "Mācīšanās atbalsta metodes (pedagoģiskā pieeja)",
        "Empātija, pacietība, robežu ievērošana"
      ],
      certificates: [
        "👶 \"Family Support Assistant\" (iekšējā)",
        "🎓 \"Childcare Basics\" (ārējā)",
        "📚 \"Learning Support Assistant\" (pedagoģijas pamati)",
        "🧠 \"Emotional Support for Parents\""
      ]
    },
    {
      icon: "🎭",
      category: "KULTŪRA",
      title: "Pasākumu pavadonis, Kultūras sarunu biedrs",
      trainings: [
        "Kultūras pamatzināšanas (māksla, teātris, vēsture)",
        "Pasākumu etiķete un uzvedība",
        "Komunikācija dažādos sabiedrības slāņos",
        "Aktīvā klausīšanās un sarunu vadīšana"
      ],
      certificates: [
        "🎭 \"Cultural Companion\" (iekšējā)",
        "📖 \"Art & Culture Appreciation\" (ārējā)",
        "🧠 \"Conversational Intelligence Basics\""
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link to="/profile">← Atpakaļ uz profilu</Link>
          </Button>
        </div>

        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-foreground">Palīgu apmācības</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Palīgu apmācības vismēŗķis ir nodrošināt vienotu kvalitāti, attieksmi un profesionālu ētiku.
          </p>
        </div>

        {/* Training Levels */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Apmācību līmeņi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {levels.map((level) => (
              <Card key={level.level} className="bg-accent/20">
                <CardHeader>
                  <CardTitle className="text-center text-3xl font-bold">{level.level}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">{level.name}</h3>
                  <CardDescription>{level.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6 italic">
            Palīgu apmācības vismēŗķis ir nodrošināt vienotu kvalitāti, attieksmi un profesionālu ētiku. 
            Apmācības: komunikācijas un empātijas pamati; klientu apkalpošanas kultūra; emocionālā 
            inteliģence un robežu ievērošana; drošība un datu aizsardzība; konfidencialitāte un ētika; 
            pirmās palīdzības pamati; digitālā pratība, un citas atbilstoši specializācijai.
          </p>
        </div>

        {/* Base Training */}
        <Card className="bg-gradient-to-br from-accent/30 to-accent/10">
          <CardHeader>
            <CardTitle className="text-2xl">{baseTraining.title}</CardTitle>
            <CardDescription className="text-base">{baseTraining.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              {baseTraining.topics.map((topic) => (
                <div key={topic.title} className="flex gap-3 items-start">
                  <span className="text-2xl">{topic.icon}</span>
                  <div>
                    <h4 className="font-semibold">{topic.title}</h4>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 mt-4">
              <h4 className="font-semibold mb-2">Sertifikācija:</h4>
              <p className="text-foreground/80">{baseTraining.certificate}</p>
            </div>
          </CardContent>
        </Card>

        {/* Specializations */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Specializācijas</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {specializations.map((spec, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-4 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{spec.icon}</span>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{spec.category}</h3>
                      <p className="text-sm text-muted-foreground">{spec.title}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Apmācības:</h4>
                    <ul className="space-y-1">
                      {spec.trainings.map((training, i) => (
                        <li key={i} className="text-sm text-foreground/80">• {training}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sertifikācijas:</h4>
                    <ul className="space-y-1">
                      {spec.certificates.map((cert, i) => (
                        <li key={i} className="text-sm text-foreground/80">{cert}</li>
                      ))}
                    </ul>
                  </div>
                  {spec.note && (
                    <p className="text-sm text-muted-foreground italic">{spec.note}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center pt-6">
          <Button size="lg" className="rounded-full" asChild>
            <Link to="/register/helper/training">Sākt apmācības</Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link to="/profile">Atpakaļ uz profilu</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Training;
