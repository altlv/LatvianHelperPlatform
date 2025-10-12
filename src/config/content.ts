export const content = {
  categories: [
    { id: "household", title: "Mājas darbi", icon: "🏠" },
    { id: "health", title: "Labsajūta", icon: "💚" },
    { id: "social", title: "Sociālais", icon: "🤗" },
    { id: "practical", title: "Praktiskie darbi", icon: "🔧" },
    { id: "culture", title: "Kultūra", icon: "🎭" }
  ],
  helpCards: [
    {
      slug: "majas-paligs",
      categoryId: "household",
      title: "🧹 Mājas palīgs",
      description: "Palīgs, kas palīdz uzturēt mājokli kārtībā un harmonijā.",
      details: [
        "tīrīšana un organizēšana (virsmas, skapji, telpas)",
        "veļas kārtošana, gludināšana",
        "ikdienas uzkopšana un nelieli uzdevumi",
        "palīdzība ar iepirkumiem un lietu kārtību mājās"
      ],
      ideal: "Aizņemti cilvēki, seniori, ģimenes ar bērniem.",
      pricing: { basic: "Pamata vizīte (2h): 35 €", extended: "Paplašinātais serviss (4h): 60 €" },
      discounts: ["Abonements 1x nedēļā: 10% atlaide", "Pirmais izmēģinājuma apmeklējums: -15%"]
    },
    {
      slug: "skapju-kartosana",
      categoryId: "household",
      title: "🧺 Mājas organizators (skapji, pieliekamie)",
      description: "Sistēmiska kārtība telpās un dokumentos.",
      details: [
        "skapju un pieliekamo kārtošana",
        "dokumentu un lietu sistematizācija",
        "organizācijas sistēmas izveide, lai kārtība saglabājas"
      ],
      ideal: "Ģimenes, kas vēlas noturīgu kārtību.",
      pricing: { basic: "No 30 € / h" },
      discounts: ["Komplekts ar 'Mājas palīgs' – -10%"]
    },
    {
      slug: "eko-tirisana",
      categoryId: "household",
      title: "🧴 Eko mājas tīrīšana",
      description: "Tīrīšana ar videi draudzīgiem līdzekļiem.",
      details: ["eko līdzekļi iekļauti cenā", "droša pieeja ģimenēm un mājdzīvniekiem"],
      ideal: "Cilvēki, kam svarīga vide un veselība.",
      pricing: { basic: "40 € / 2h" },
      discounts: ["Atkārtotiem klientiem -10%"]
    },
    {
      slug: "fitnesa-draugs",
      categoryId: "health",
      title: "💪 Fitnesa draugs",
      description: "Kustību motivācija un droša pavadīšana treniņos.",
      details: ["pastaigas un viegli treniņi", "motivācija, rutīnas uzturēšana"],
      ideal: "Sākuma līmeņa kustību atbalsts.",
      pricing: { basic: "No 25 € / h" }
    },
    {
      slug: "labsajutas-atbalsts",
      categoryId: "health",
      title: "🧘 Labsajūtas atbalsts",
      description: "Elpošana, relaksācija un apzinātība (ne terapija).",
      details: ["elpošanas vingrinājumi", "relaksācija mājās", "vieglas stiepšanās prakses"],
      ideal: "Stressa mazināšana un miega kvalitāte.",
      pricing: { basic: "No 25 € / h" }
    },
    {
      slug: "emocionalais-draugs",
      categoryId: "social",
      title: "🧠 Emocionālais draugs",
      description: "Empātiskas sarunas, klātbūtne un atbalsts (bez terapijas).",
      details: ["klausīšanās bez nosodījuma", "sarunas par ikdienu vai notikumiem"],
      ideal: "Vientulības mazināšana, līdzsvars ikdienā.",
      pricing: { basic: "25 € / h", packages: ["4x sarunu pakete: 85 €"] },
      discounts: ["Pirmajai sarunai: -20%"]
    },
    {
      slug: "radosais-partneris",
      categoryId: "social",
      title: "🎨 Radošais partneris",
      description: "Zīmēšana, rokdarbi, mūzika vai lasīšana kopā.",
      details: ["radošas nodarbības mājās", "kopīga izstāžu vai muzeju apmeklēšana"],
      ideal: "Iedvesmai un radošai izpausmei.",
      pricing: { basic: "No 20 € / h" }
    },
    {
      slug: "nelieli-remontdarbi",
      categoryId: "practical",
      title: "🧰 Nelieli remontdarbi",
      description: "Mēbeļu salikšana, plauktu stiprināšana, sīki labojumi.",
      details: ["instrumentu pamata komplekts", "drošības ievērošana"],
      ideal: "Ātri, nelieli darbi mājoklī.",
      pricing: { basic: "40 € / 2h" },
      discounts: ["Kombinēts ar telpu organizēšanu: -10%"]
    },
    {
      slug: "telpu-organizesana",
      categoryId: "practical",
      title: "📦 Telpu organizēšana (garāžas, pieliekamie)",
      description: "Sakārtošana un sistēmas izveide lielākām telpām.",
      details: ["plauktu plānojums", "konteineru un etiķešu sistēma"],
      ideal: "Pirms/ pēc pārvākšanās vai pavasara kārtības.",
      pricing: { basic: "30 € / h" }
    },
    {
      slug: "pasakumu-pavadisana",
      categoryId: "culture",
      title: "🎭 Pasākumu pavadīšana",
      description: "Kopīga došanās uz teātri, kino, koncertu vai izstādi.",
      details: ["iepriekšēja plānošana", "saruna un droša klātbūtne"],
      ideal: "Drošāk un patīkamāk doties kopā.",
      pricing: { basic: "30 € / 2h" }
    },
    {
      slug: "kulturas-sarunu-biedrs",
      categoryId: "culture",
      title: "📖 Kultūras sarunu biedrs",
      description: "Sarunas par mākslu, literatūru, vēsturi vai aktualitātēm.",
      details: ["kopīgas grāmatas", "apspriešana pēc pasākumiem"],
      ideal: "Intelektuāls un cilvēcīgs dialogs.",
      pricing: { basic: "20 € / h" }
    }
  ]
};
