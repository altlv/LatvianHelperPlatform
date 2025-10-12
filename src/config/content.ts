// Content configuration - Edit this file to change all text content
export const content = {
  landing: {
    title: "Palīgs | Atbalsts | Sirsnība",
    subtitle: "Tava drošā vieta, kur cilvēki palīdz viens otram – ar sirdi, prasmēm un cieņu.",
    becomeHelperButton: "Pieteikties kā Palīgam",
    findHelperButton: "Meklēt Palīgu",
    
    mission: {
      title: "Kāpēc mēs pastāvam",
      description: "Mēs ticam, ka Latvijā ir daudz sirsnīgu, uzticamu cilvēku, kas vēlas būt noderīgi – un citi, kam tieši šāds atbalsts ir vajadzīgs. Platforma savieno cilvēkus, kuri palīdz, ar cilvēkiem, kuri meklē palīdzību. Tas ir drošs, pārbaudīts un cilvēcīgs tīkls, kur cilvēks palīdz cilvēkam."
    },
    
    safety: {
      title: "Drošība un uzticība vispirms",
      subtitle: "Mēs sargājam gan Palīgus, gan Klientus:",
      features: [
        { icon: "✅", text: "Verificēti profili – katrs Palīgs iziet identitātes pārbaudi" },
        { icon: "📜", text: "Ētikas kodekss – skaidri noteikumi par cieņu un uzvedību" },
        { icon: "⚖️", text: "Sankcijas par pārkāpumiem – brīdinājumi, profila apturēšana vai dzēšana" },
        { icon: "🔒", text: "Privātuma aizsardzība – droša saziņa, dati netiek publiski izpausti" },
        { icon: "🧠", text: "Apmācības – katrs Palīgs apgūst pamata kursu par empātiju, robežām un komunikāciju" }
      ]
    },
    
    education: {
      title: "Attīstība un izglītība",
      description: "Katrs Palīgs var piedalīties Žaņa akadēmijas apmācībās: komunikācija, sociālais darbs, improvizācija, pašaizsardzība un praktiskās iemaņas.",
      note: "🎓 Palīdzība kļūst par profesiju. Pieredze kļūst par izaugsmi."
    },
    
    benefits: {
      title: "Ko iegūst cilvēki",
      helpers: {
        title: "Palīgiem:",
        items: [
          "Darbs ar jēgu un sirsnību",
          "Apmācības un izaugsme",
          "Sertifikācija un atsauksmes"
        ]
      },
      clients: {
        title: "Klientiem:",
        items: [
          "Droša, pārbaudīta palīdzība",
          "Cilvēcīga pieeja, ne mehāniska apkalpošana",
          "Personiska saderība pēc vērtībām un vajadzībām"
        ]
      }
    },
    
    principles: {
      title: "Kvalitātes un ētikas principi",
      items: [
        "Cieņa un empātija pret katru cilvēku",
        "Godīgums un uzticība",
        "Nulles tolerance pret agresiju vai diskrimināciju",
        "Privātuma aizsardzība",
        "Abpusēja mācīšanās un cieņa"
      ],
      warning: "🚫 Pārkāpumi tiek dokumentēti un var novest pie profila bloķēšanas vai līguma izbeigšanas."
    },
    
    promise: {
      title: "Mūsu solījums",
      description: "Mēs esam tilts starp tiem, kam vajag palīdzību, un tiem, kas vēlas palīdzēt. Ar cieņu, drošību un cilvēcību kā pamatvērtībām. Mēs nesolām ideālus – mēs radām īstus kontaktus."
    },
    
    footer: {
      links: [
        { text: "Ētikas kodekss", path: "/ethics" },
        { text: "Privātuma politika", path: "/privacy" },
        { text: "Par mums", path: "/about" },
        { text: "Kontakti", path: "/contact" }
      ]
    }
  },
  
  clientRegistration: {
    step1: {
      title: "Sāc izmantot Žaņa palīdzību!",
      fields: {
        firstName: "Vārds",
        lastName: "Uzvārds",
        email: "E-pasts",
        phone: "Telefons",
        password: "Parole",
        city: "Pilsēta / reģions",
        photo: "Profila foto (neobligāti)"
      },
      gdpr: "Piekrītu lietošanas noteikumiem un datu apstrādei (GDPR)",
      ethics: "Piekrītu Programmas ētikas kodeksam",
      nextButton: "Tālāk"
    },
    step2: {
      title: "Kādos dzīves gadījumos tev vajadzīga palīdzība?",
      subtitle: "Izvēlies, kādā jomā meklē palīdzību",
      categories: [
        {
          id: "household",
          icon: "🧺",
          title: "Ikdienas saimnieciskie darbi",
          subtitle: "Ikdiena / ģimene",
          description: "mājas darbi, kārtošana, organizēšana, bērnu aprūpe, iepirkšanās"
        },
        {
          id: "health",
          icon: "💪",
          title: "Veselība un sports",
          description: "fitnesa draugs, labsajūtas atbalsts, motivācija kustībai"
        },
        {
          id: "social",
          icon: "🎨",
          title: "Sociālais un radošais atbalsts",
          description: "sarunu biedrs, emocionāls draugs, hobiji, radošas aktivitātes"
        },
        {
          id: "practical",
          icon: "🧰",
          title: "Latvietis Praktiskais",
          subtitle: "aroddarbi",
          description: "remonti, praktiski darbi, dārzs, tehniska palīdzība"
        },
        {
          id: "culture",
          icon: "🎭",
          title: "Kultūra un sabiedrība",
          description: "pasākumu pavadīšana, kultūras sarunas, palīdzība notikumos"
        }
      ],
      nextButton: "Tālāk"
    },
    step3: {
      title: "Kādas iezīmes un īpašības tev ir svarīgas palīgā?",
      subtitle: "Izvēlies prioritātes",
      traits: [
        "Empātisks un saprotošs",
        "Precīzs un organizēts",
        "Aktīvs un motivējošs",
        "Pieredzējis konkrētā jomā",
        "Runā konkrētā valodā"
      ],
      notePlaceholder: "Apraksti īpašas vajadzības vai vēlmes (max 200 simboli)",
      finishButton: "Pabeigt reģistrāciju"
    },
    welcome: {
      title: "Paldies, ka pievienojies!",
      message: "Esam gatavi palīdzēt tev atrast pareizo palīgu.",
      findHelperButton: "Meklē palīgu",
      profileButton: "Mans profils"
    }
  },

  helperRegistration: {
    step1: {
      title: "Gribu palīdzēt citiem!",
      subtitle: "Pievienojies komandai, kas palīdz cilvēkiem ikdienā – kļūsti par Žani vai Žannu!",
      fields: {
        firstName: "Vārds",
        lastName: "Uzvārds",
        email: "E-pasts",
        phone: "Telefons",
        password: "Parole",
        photo: "Profila bilde (neobligāti)"
      },
      gdpr: "Piekrītu lietošanas noteikumiem un datu apstrādei (GDPR)",
      nextButton: "Tālāk"
    },
    step2: {
      title: "Svarīgi pirms uzsākšanas",
      ethicsTitle: "Piekrītu Žaņa/Žannu ētikas kodeksam",
      gdprTitle: "Piekrītu datu apstrādei",
      ethicsSummary: "Īss ētikas kopsavilkums:",
      ethicsText: "Žanis / Žanna strādā ar konfidencialitāti, godprātību, cieņu, un empātiju. Mēs palīdzam, nevis aizstājam ģimeni vai terapeitu.",
      finishButton: "Pabeigt reģistrāciju"
    },
    step3: {
      title: "Kādās jomās vēlies palīdzēt?",
      subtitle: "Vēlāk varēsi pievienot arī citas specializācijas.",
      categories: [
        {
          id: "household",
          title: "Ikdienas saimnieciskie darbi",
          description: "mājas palīgs, iepirkšanās asistents, organizators, māmiņu palīgs, māciņu asistents, hobija biedrs"
        },
        {
          id: "health",
          title: "Veselība un Sports",
          description: "fitnesa draugs un motivators, labsajūtas un stresa mazināšanas biedrs, veselīga uztura atbalsts"
        },
        {
          id: "social",
          title: "Sociālais un radošais atbalsts",
          description: "emocionālais draugs, senioru biedrs, pavadonis, radošais partneris, modes padomdevējs"
        },
        {
          id: "practical",
          title: "Latvietis praktiskais",
          description: "prasmīgs palīgs praktiskos darbos, digitālais asistents, seniora viedums"
        },
        {
          id: "culture",
          title: "Kultūra un Sabiedrība",
          description: "pasākumu pavadonis, kultūras sarunu biedrs"
        }
      ],
      nextButton: "Tālāk"
    },
    step4: {
      title: "Apmācības?",
      subtitle: "Vai vēlies uzsākt Žaņa akadēmijas mācības vai tev jau ir nepieciešamās prasmes?",
      wantToLearn: {
        title: "Gribu mācīties",
        description: "Sākt ar Žaņa pamata apmācībām (empātija, drošība, klientu apkalpošana)",
        button: "Tālāk"
      },
      alreadyKnow: {
        title: "Es jau protu",
        description: "Pievieno savas esošās sertifikācijas vai apmācību apliecinājumus",
        note: "Piemēram: pirmā palīdzība, aprūpes vai klientu servisa kursi",
        button: "Tālāk"
      }
    },
    training: {
      title: "Sāc ar apmācībām!",
      subtitle: "Pamata modulis:",
      topics: [
        "Komunikācija un empātija",
        "Drošība un datu aizsardzība",
        "Klientu apkalpošana"
      ],
      duration: "Ilgums: 2h | Tiešsaistē",
      note: "Kad apmācības pabeigtas, tavs profils tiks aktivizēts un būs redzams klientiem.",
      startButton: "Uzsākt mācības",
      profileButton: "Mans profils"
    },
    welcome: {
      title: "Apsveicam! 🎊",
      message: "Tu esi reģistrējies kā Žanis / Žanna – palīgs visiem dzīves gadījumiem.",
      note: "Drīzumā saņemsi uzaicinājumu uz apmācību programmu, lai kļūtu par sertificētu palīgu.",
      specializationButton: "Speciālizācijas izvēle",
      profileButton: "Mans Profils"
    }
  },

  profile: {
    title: "Mans Profils",
    name: "Vārds",
    location: "Atrašanās vieta",
    mailbox: "Pastkastīte",
    interests: "Intereses un vajadzības",
    history: "Rezervāciju vēsture",
    reviews: "Atsauksmes",
    editButton: "Rediģēt profilu",
    supportButton: "Sazināties ar atbalstu"
  },

  helpCategories: {
    title: "Izvēlies palīdzības jomu",
    subtitle: "Atrod palīgu, kas atbilst tavām vajadzībām",
    backButton: "Atpakaļ"
  },

  helpCards: {
    household: {
      title: "🧹 Mājas palīgs",
      description: "Palīgs, kas palīdz uzturēt mājokli kārtībā un harmonijā.",
      details: [
        "tīrīšanu un organizēšanu (virsmas, skapji, telpas)",
        "veļas kārtošanu, gludināšanu",
        "ikdienas uzkopšanu un nelielus uzdevumus",
        "palīdzību ar iepirkumiem un lietu kārtību mājās"
      ],
      ideal: "Ideāli piemērots aizņemtiem cilvēkiem, senioriem vai ģimenēm ar maziem bērniem, kuri vēlas sakārtotu un mierīgu vidi.",
      pricing: {
        basic: "Pamata vizīte (2h): 35 €",
        extended: "Paplašinātais serviss (4h): 60 €"
      },
      discounts: [
        "Abonements 1x nedēļā: 10% atlaide",
        "Pirmais izmēģinājuma apmeklējums: -15%"
      ]
    }
  },

  helperPublicProfile: {
    rating: "atsauksmes",
    online: "Tiešsaistē",
    aboutMe: "Par mani",
    certificates: "Sertifikāti",
    services: "Pakalpojumi",
    availability: "Pieejamība",
    reviews: "Atsauksmes",
    reserveButton: "Rezervēt Palīgu",
    askQuestionButton: "Uzdot Jautājumu",
    backButton: "Atgriezties"
  }
};
