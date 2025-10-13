// src/config/content.ts

export const content = {
  categories: [
    {
      id: "household",
      title: "🧺 Ikdienas saimnieciskie darbi",
      subtitle: "Mājas darbi · organizēšana · bērnu aprūpe · iepirkumi",
      description:
        "Tīrīšana, kārtošana, organizēšana, bērnu aprūpe un sadzīves atbalsts — ikdienas atvieglojums mājās.",
      icon: "🏠",
    },
    {
      id: "health",
      title: "💪 Veselība un labsajūta",
      subtitle: "Sports · relaksācija · kustība",
      description:
        "Aktivitātes, treniņi, elpošanas prakses un labsajūta — rūpe par ķermeni un prātu.",
      icon: "💚",
    },
    {
      id: "social",
      title: "🎨 Sociālais un radošais atbalsts",
      subtitle: "Sarunas · hobiji · emocionālais atbalsts",
      description:
        "Sarunu biedri, kopīgas radošas aktivitātes un emocionālais atbalsts — kopā kļūstam spēcīgāki.",
      icon: "🤗",
    },
    {
      id: "practical",
      title: "🧰 Praktiskie darbi",
      subtitle: "Remonti · tehniska palīdzība · dārzs",
      description:
        "Nelieli remontdarbi, tehniska palīdzība un dārzs — praktiska atbalsta projekti mājoklī.",
      icon: "🔧",
    },
    {
      id: "culture",
      title: "🎭 Kultūra un sabiedrība",
      subtitle: "Pasākumi · sarunas · kopīgas aktivitātes",
      description:
        "Pavadīšana uz kultūras notikumiem, intelektuālas sarunas, kopīgas aktivitātes sabiedrībā.",
      icon: "🎭",
    },
  ],

  helpCards: [
    {
      slug: "majas-paligs",
      categoryId: "household",
      title: "🧹 Mājas palīgs",
      description: "Palīgs, kas palīdz uzturēt mājokli kārtībā un harmonijā.",
      details: [
        "Tīrīšana (putekļošana, slaucīšana, vakuumēšana)",
        "Skapju un plauktu organizēšana",
        "Veļas mazgāšana un gludināšana",
        "Palīdzība ar iepirkumiem un mājas darbiem",
      ],
      ideal: "Ģimenes, aizņemti profesionāļi, seniori.",
      pricing: { basic: "2 h — 35 €", extended: "4 h — 60 €" },
      discounts: ["1× nedēļā abonements –10 %", "Pirmais apmeklējums –15 %"],
    },
    {
      slug: "skapju-kartosana",
      categoryId: "household",
      title: "🧺 Organizators skapjiem",
      description: "Kārtošana skapjos, pieliekamos, dokumentu uzglabāšana.",
      details: [
        "Skapju un plauktu kārtošana",
        "Lietu marķēšana un sistematizācija",
        "Dokumentu un mantu kārtošana",
      ],
      ideal: "Cilvēki, kas vēlas kārtību bez haosa.",
      pricing: { basic: "No 30 €/h" },
      discounts: ["Kombinēts ar Mājas palīgu –10 %"],
    },
    {
      slug: "eko-tirisana",
      categoryId: "household",
      title: "🧴 Eko tīrīšana",
      description: "Videi draudzīga tīrīšana bez agresīvām ķimikāliskām vielām.",
      details: [
        "Tīrīšana ar dabīgiem līdzekļiem",
        "Droši risinājumi bērniem un mājdzīvniekiem",
      ],
      ideal: "Cilvēki, kam svarīga vide un veselība.",
      pricing: { basic: "2 h — 40 €" },
      discounts: ["Atkārtotiem klientiem –10 %"],
    },
    {
      slug: "fitnesa-draugs",
      categoryId: "health",
      title: "🏃‍♀️ Fitnesa draugs",
      description: "Motivē un pavada treniņos, iedvesmo kustībai.",
      details: ["Vieglie treniņi vai pastaigas", "Kustību plāna sagatavošana"],
      ideal: "Vēlies kļūt aktīvāks vai noturēt formu.",
      pricing: { basic: "No 25 €/h" },
      discounts: [],
    },
    {
      slug: "labsajutas-atbalsts",
      categoryId: "health",
      title: "🧘 Labsajūtas atbalsts",
      description: "Meditācija, elpošanas prakses un relaksācija.",
      details: ["Elpošanas vingrinājumi", "Relaksācijas sesijas"],
      ideal: "Stresa mazināšanai un garīgajam līdzsvaram.",
      pricing: { basic: "No 25 €/h" },
      discounts: [],
    },
    {
      slug: "emocionalais-draugs",
      categoryId: "social",
      title: "🧠 Emocionālais draugs",
      description: "Empātiskas sarunas un klātbūtne — bez terapijas, ar sirdi.",
      details: ["Klausīšanās, emociju izpaušana, sarunas"],
      ideal: "Vientulības mazināšanai un emocionālajai atslodzei.",
      pricing: { basic: "25 €/h", packages: ["4 sesijas — 85 €"] },
      discounts: ["Pirmā sesija –20 %"],
    },
    {
      slug: "radosais-partneris",
      categoryId: "social",
      title: "🎨 Radošais partneris",
      description: "Kopā darām kreatīvas lietas — lasām, mākslojam, radām.",
      details: ["Radošas nodarbības", "Kopīgas aktivitātes mājās vai dabā"],
      ideal: "Ideju meklētāji un domubiedri.",
      pricing: { basic: "No 20 €/h" },
      discounts: [],
    },
    {
      slug: "nelieli-remontdarbi",
      categoryId: "practical",
      title: "🛠️ Nelieli remontdarbi",
      description: "Sīkremonti, mēbeļu salikšana un instrumentu darbi.",
      details: ["Mēbeļu montāža", "Plauktu nostiprināšana"],
      ideal: "Tas, kam vajadzīga neliela tehniska palīdzība.",
      pricing: { basic: "40 € / 2h" },
      discounts: ["Kombinēts ar organizāciju –10 %"],
    },
    {
      slug: "telpu-organizesana",
      categoryId: "practical",
      title: "📦 Telpu organizēšana",
      description: "Kārtošana garāžās, noliktavās, mantu zonās.",
      details: ["Plauktu plānošana", "Sistēmu izveide kārtībai"],
      ideal: "Pirms pārvākšanās vai sezonas tīrīšanas.",
      pricing: { basic: "30 €/h" },
      discounts: [],
    },
    {
      slug: "pasakumu-pavadisana",
      categoryId: "culture",
      title: "🎭 Pasākumu pavadīšana",
      description: "Kopā baudām kultūru — koncerti, izstādes, kino.",
      details: ["Pavadība, rekomendācijas, kompānija pasākumos"],
      ideal: "Vēlies, lai kultūra būtu vēl mierīgāka un patīkamāka.",
      pricing: { basic: "30 € / 2h" },
      discounts: [],
    },
    {
      slug: "kulturas-sarunu-biedrs",
      categoryId: "culture",
      title: "📖 Kultūras sarunu biedrs",
      description:
        "Sarunas par grāmatām, mākslu, vēsturi vai sabiedrības tēmām.",
      details: ["Lasīšana, diskusijas, ideju apmaiņa"],
      ideal: "Intelektuālās vajadzības un dialogi.",
      pricing: { basic: "20 €/h" },
      discounts: [],
    },
  ],

  helpers: [
    {
      slug: "anna-lapina",
      name: "Anna Lapiņa",
      rating: 5.0,
      city: "Rīga",
      online: true,
      specializations: ["majas-paligs", "eko-tirisana", "skapju-kartosana"],
      defaultPrice: 35,
      discounts: { "majas-paligs": 0.1, "eko-tirisana": 0.05 },
      bio: "Es esmu Anna — pieredzējusi mājas palīdze ar uzmanību detaļām un tīrību.",
      certifications: ["Green Cleaning", "Organizācijas kurss"],
      availability: {
        "2025-10-20": ["10:00", "14:00", "18:00"],
        "2025-10-21": ["09:00", "13:00"],
      },
    },
    {
      slug: "marija-karklina",
      name: "Marija Kārkliņa",
      rating: 4.8,
      city: "Jelgava",
      online: false,
      specializations: ["majas-paligs", "emocionalais-draugs"],
      defaultPrice: 40,
      discounts: { "majas-paligs": 0.08 },
      bio: "Sarunās mierīga un mērķtiecīga — mājas darbi un emocionālais atbalsts man ir svarīgs.",
      certifications: ["Emocionālā atbalsta kurss"],
      availability: {
        "2025-10-20": ["12:00", "16:00"],
        "2025-10-22": ["10:00", "15:00"],
      },
    },
    {
      slug: "dace-silmale",
      name: "Dace Silmale",
      rating: 4.9,
      city: "Sigulda",
      online: true,
      specializations: ["emocionalais-draugs", "labsajutas-atbalsts"],
      defaultPrice: 28,
      discounts: { "labsajutas-atbalsts": 0.10 },
      bio: "Ar smaidu un empātiju — emocionālais draugs un labsajūtas ceļabiedrs.",
      certifications: ["Mindfulness 1"],
      availability: {
        "2025-10-21": ["11:00", "17:00"],
        "2025-10-23": ["10:00", "14:00"],
      },
    },
    {
      slug: "zane-balode",
      name: "Zane Balode",
      rating: 4.7,
      city: "Liepāja",
      online: true,
      specializations: ["radosais-partneris", "kulturas-sarunu-biedrs", "pasakumu-pavadisana"],
      defaultPrice: 30,
      discounts: { "radosais-partneris": 0.05, "pasakumu-pavadisana": 0.08 },
      bio: "Radoša dvēsele — kopā radīsim un runāsim par mākslu un dzīvi.",
      certifications: [],
      availability: {
        "2025-10-20": ["14:00", "18:00"],
        "2025-10-22": ["16:00", "19:00"],
      },
    },
    {
      slug: "martins-fix",
      name: "Mārtiņš Fiks",
      rating: 4.7,
      city: "Ogre",
      online: false,
      specializations: ["nelieli-remontdarbi", "telpu-organizesana"],
      defaultPrice: 50,
      discounts: { "nelieli-remontdarbi": 0.1 },
      bio: "Remontu meistars — droši, ātri un profesionāli.",
      certifications: ["Remontdarbu kurss"],
      availability: {
        "2025-10-20": ["08:00", "13:00"],
        "2025-10-24": ["10:00", "14:00"],
      },
    },
    {
      slug: "ieva-ozola",
      name: "Ieva Ozoliņa",
      rating: 4.9,
      city: "Rīga",
      online: true,
      specializations: ["skapju-kartosana", "eko-tirisana", "telpu-organizesana"],
      defaultPrice: 32,
      discounts: { "skapju-kartosana": 0.12 },
      bio: "Organizācija ir mans elements — palīdzēšu izveidot kārtību un harmoniju jūsu mājās.",
      certifications: ["Profesionālā organizatora kurss", "KonMari metode"],
      availability: {
        "2025-10-21": ["10:00", "14:00", "16:00"],
        "2025-10-23": ["09:00", "15:00"],
      },
    },
    {
      slug: "janis-berzins",
      name: "Jānis Bērziņš",
      rating: 4.8,
      city: "Jūrmala",
      online: true,
      specializations: ["fitnesa-draugs", "labsajutas-atbalsts"],
      defaultPrice: 28,
      discounts: { "fitnesa-draugs": 0.15 },
      bio: "Sporta entuziasts ar pieredzi personālā trenera darbā — motivēšu un palīdzēšu sasniegt tavus mērķus.",
      certifications: ["Personālā trenera sertifikāts", "Joga instruktors"],
      availability: {
        "2025-10-20": ["07:00", "12:00", "17:00"],
        "2025-10-22": ["08:00", "18:00"],
      },
    },
    {
      slug: "liga-kalna",
      name: "Līga Kalniņa",
      rating: 5.0,
      city: "Rīga",
      online: true,
      specializations: ["emocionalais-draugs", "radosais-partneris", "kulturas-sarunu-biedrs", "pasakumu-pavadisana"],
      defaultPrice: 27,
      discounts: { "emocionalais-draugs": 0.08, "pasakumu-pavadisana": 0.10 },
      bio: "Empātiska klausītāja un radoša dvēsele — varu būt gan draugs grūtākos brīžos, gan iedvesmotājs jauniem piedzīvojumiem.",
      certifications: ["Aktīvās klausīšanās kurss", "Art therapy pamati"],
      availability: {
        "2025-10-21": ["11:00", "15:00", "19:00"],
        "2025-10-24": ["10:00", "14:00"],
      },
    },
    {
      slug: "rihards-liepins",
      name: "Rihards Liepiņš",
      rating: 4.6,
      city: "Cēsis",
      online: true,
      specializations: ["nelieli-remontdarbi"],
      defaultPrice: 45,
      discounts: {},
      bio: "IT speciālists ar prasmi arī praktiskos darbos — palīdzēšu ar sīkajiem remontiem un tehnoloģiju lietošanu.",
      certifications: ["IT tehniķis", "Elektrodrošības kurss"],
      availability: {
        "2025-10-20": ["14:00", "18:00"],
        "2025-10-23": ["16:00", "20:00"],
      },
    },
    {
      slug: "kristine-eglite",
      name: "Kristīne Eglīte",
      rating: 4.9,
      city: "Valmiera",
      online: true,
      specializations: ["labsajutas-atbalsts", "fitnesa-draugs", "emocionalais-draugs"],
      defaultPrice: 30,
      discounts: { "labsajutas-atbalsts": 0.12, "fitnesa-draugs": 0.08 },
      bio: "Veselīga dzīvesveida entuzijaste — palīdzēšu uzlabot gan fizisko, gan garīgo labsajūtu.",
      certifications: ["Wellness Coach", "Meditācijas instruktore", "Uztura padomniece"],
      availability: {
        "2025-10-22": ["09:00", "13:00", "17:00"],
        "2025-10-24": ["10:00", "15:00"],
      },
    },
  ],

  helpCategories: {
    title: "Meklēt Palīgu",
    subtitle: "Izvēlies kategoriju, ar ko sākt",
    backButton: "Atpakaļ",
    cardHint: "Spied, lai redzētu pakalpojumus"
  },

  profile: {
    title: "Mans profils",
    name: "Vārds",
    location: "Atrašanās vieta",
    mailbox: "E-pasts",
    interests: "Intereses",
    history: "Rezervāciju vēsture",
    reviews: "Atsauksmes",
    editButton: "Rediģēt profilu",
    supportButton: "Atbalsts"
  },

  clientRegistration: {
    step1: {
      title: "Reģistrācija klientam",
      subtitle: "1. solis — Pamatinformācija",
      fields: {
        firstName: "Vārds",
        lastName: "Uzvārds",
        email: "E-pasta adrese",
        phone: "Tālruņa numurs",
        password: "Parole",
        city: "Pilsēta",
        photo: "Profila foto"
      },
      gdpr: "Piekrītu datu apstrādes noteikumiem (GDPR)",
      ethics: "Piekrītu ētikas kodeksam",
      nextButton: "Turpināt"
    },
    step2: {
      title: "Reģistrācija klientam",
      subtitle: "2. solis — Izvēlies kategorijas",
      locationLabel: "Pilsēta/Reģions",
      needsLabel: "Kāda veida palīdzība nepieciešama?",
      categories: [
        {
          id: "household",
          title: "Ikdienas saimnieciskie darbi",
          subtitle: "Mājas darbi · organizēšana",
          description: "Tīrīšana, kārtošana un sadzīves atbalsts",
          icon: "🧺"
        },
        {
          id: "health",
          title: "Veselība un labsajūta",
          subtitle: "Sports · relaksācija",
          description: "Aktivitātes un labsajūta",
          icon: "💪"
        },
        {
          id: "social",
          title: "Sociālais atbalsts",
          subtitle: "Sarunas · emocionālais atbalsts",
          description: "Sarunu biedri un emocionālais atbalsts",
          icon: "🤗"
        },
        {
          id: "practical",
          title: "Praktiskie darbi",
          subtitle: "Remonti · tehniska palīdzība",
          description: "Nelieli remontdarbi un tehniska palīdzība",
          icon: "🧰"
        }
      ],
      nextButton: "Turpināt",
      backButton: "Atpakaļ"
    },
    step3: {
      title: "Reģistrācija klientam",
      subtitle: "3. solis — Apstiprinājums",
      confirmText: "Lūdzu, pārbaudi ievadītos datus:",
      traits: [
        "Sirsnīgs",
        "Uzticams",
        "Punktuāls",
        "Empātisks",
        "Profesionāls"
      ],
      notePlaceholder: "Papildu piezīmes vai īpašas vēlmes...",
      submitButton: "Pabeigt reģistrāciju",
      finishButton: "Pabeigt",
      backButton: "Atpakaļ"
    },
    welcome: {
      title: "Laipni lūgts!",
      subtitle: "Reģistrācija pabeigta",
      message: "Tagad tu vari sākt meklēt palīgu.",
      button: "Sākt meklēt",
      findHelperButton: "Meklēt palīgu",
      profileButton: "Uz profilu"
    }
  },

  helperRegistration: {
    step1: {
      title: "Reģistrācija palīgam",
      subtitle: "1. solis — Pamatinformācija",
      fields: {
        firstName: "Vārds",
        lastName: "Uzvārds",
        email: "E-pasta adrese",
        phone: "Tālruņa numurs",
        password: "Parole",
        city: "Pilsēta",
        photo: "Profila foto",
        id: "Personas apliecības numurs"
      },
      gdpr: "Piekrītu datu apstrādes noteikumiem (GDPR)",
      ethics: "Piekrītu ētikas kodeksam",
      nextButton: "Turpināt"
    },
    step2: {
      title: "Reģistrācija palīgam",
      subtitle: "2. solis — Ētikas kodekss",
      specializationLabel: "Izvēlies savas specializācijas",
      ethicsTitle: "Piekrītu ētikas kodeksam",
      gdprTitle: "Piekrītu datu apstrādes noteikumiem (GDPR)",
      ethicsSummary: "Ētikas kodeksa kopsavilkums",
      ethicsText: "Kā palīgs tu apņemies būt cieņpilns, uzticams un profesionāls. Tu ievērosi konfidencialitāti, būsi punktuāls un rūpēsies par klientu labsajūtu.",
      categories: [
        "Mājas palīgs",
        "Emocionālais atbalsts",
        "Praktiskie darbi",
        "Kultūras pavadīšana"
      ],
      nextButton: "Turpināt",
      finishButton: "Turpināt",
      backButton: "Atpakaļ"
    },
    step3: {
      title: "Reģistrācija palīgam",
      subtitle: "3. solis — Par sevi",
      bioLabel: "Pastāsti par sevi",
      bioPlaceholder: "Es esmu...",
      experienceLabel: "Pieredze",
      availabilityLabel: "Pieejamība",
      categories: [
        {
          id: "household",
          title: "Ikdienas saimnieciskie darbi",
          description: "Mājas darbi, tīrīšana, organizēšana un bērnu aprūpe",
          icon: "🧺"
        },
        {
          id: "health",
          title: "Veselība un labsajūta",
          description: "Sports, treniņi, relaksācija un kustība",
          icon: "💪"
        },
        {
          id: "social",
          title: "Sociālais atbalsts",
          description: "Sarunas, hobiji un emocionālais atbalsts",
          icon: "🤗"
        },
        {
          id: "practical",
          title: "Praktiskie darbi",
          description: "Nelieli remontdarbi, tehniska palīdzība un dārzs",
          icon: "🧰"
        }
      ],
      fields: {
        bio: "Par mani",
        experience: "Pieredze",
        availability: "Pieejamība"
      },
      nextButton: "Turpināt",
      backButton: "Atpakaļ"
    },
    step4: {
      title: "Apmācības",
      subtitle: "Izvēlies savu ceļu",
      message: "Lai kļūtu par palīgu, tev jāiziet verifikācija un apmācības.",
      wantToLearn: {
        title: "Vēlos mācīties",
        description: "Izej apmācību kursu un kļūsti par sertificētu palīgu.",
        button: "Uz apmācībām"
      },
      alreadyKnow: {
        title: "Man jau ir zināšanas",
        description: "Augšupielādē sertifikātus vai pieredzei",
        note: "Mūsu komanda pārbaudīs tavus dokumentus.",
        button: "Augšupielādēt dokumentus"
      },
      nextButton: "Uz apmācībām"
    },
    training: {
      title: "Apmācības",
      subtitle: "Obligātais kurss",
      message: "Lūdzu, izej obligāto kursu, lai kļūtu par sertificētu palīgu.",
      topics: [
        "💬 Komunikācija",
        "❤️ Empātija",
        "🛡️ Drošība",
        "📜 Ētikas kodekss"
      ],
      duration: "Ilgums: ~2 stundas",
      note: "Kurss ir obligāts visiem palīgiem.",
      modules: [
        "Komunikācija",
        "Empātija",
        "Drošība",
        "Ētikas kodekss"
      ],
      startButton: "Sākt kursu",
      nextButton: "Pabeigt kursu",
      profileButton: "Uz profilu"
    },
    welcome: {
      title: "Apsveicam!",
      subtitle: "Tu esi kļuvis par palīgu",
      message: "Tagad tu vari sākt palīdzēt citiem.",
      note: "Tagad tu vari izveidot savu profilu un sākt palīdzēt.",
      button: "Uz profilu",
      specializationButton: "Izvēlēties specializāciju",
      profileButton: "Uz profilu"
    }
  }
};
