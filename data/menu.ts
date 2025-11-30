export const categories = {
  en: [
    { id: "all", label: "All" },
    { id: "starters", label: "Starters" },
    { id: "mains", label: "Main Dishes" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" }
  ],

  de: [
    { id: "all", label: "Alle" },
    { id: "starters", label: "Vorspeisen" },
    { id: "mains", label: "Hauptgerichte" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Getränke" }
  ],
};

export const dishes = {
  en: [
    // ⭐ STARTERS
    {
      id: 1,
      category: "starters",
      name: "Bruschetta al Pomodoro",
      description:
        "Grilled sourdough topped with fresh diced tomatoes, basil, olive oil and sea salt.",
      price: 12.5,
      image:
        "/images/menu/bruschetta.png",
    },

    {
      id: 2,
      category: "starters",
      name: "Burrata Cream & Prosciutto",
      description:
        "Soft burrata served with Parma ham, arugula and balsamic pearls.",
      price: 18.0,
      image:
        "/images/menu/burrata.png",
    },

    // ⭐ MAIN DISHES
    {
      id: 3,
      category: "mains",
      name: "Spaghetti al Pomodoro Fresco",
      description:
        "A classic Italian pasta served with fresh tomato sauce, basil leaves, and grated artisan parmesan.",
      price: 24.99,
      image: "/images/menu/spaghetti.png",
    },
    {
      id: 4,
      category: "mains",
      name: "Eggplant Parmigiana",
      description:
        "Layers of grilled eggplant, rich tomato sauce, and melted Italian cheese baked to golden perfection.",
      price: 19.7,
      image: "/images/menu/parmigiana.png",
    },
    {
      id: 5,
      category: "mains",
      name: "Lemon e Parmigiano Risotto",
      description:
        "A creamy Arborio rice risotto infused with Sicilian lemon zest, butter, and aged Parmigiano Reggiano.",
      price: 22.5,
      image: "/images/menu/risotto.png",
    },

    // ⭐ DESSERTS
    {
      id: 6,
      category: "desserts",
      name: "Tiramisu Classico",
      description:
        "Traditional Italian tiramisu with mascarpone cream and espresso-soaked ladyfingers.",
      price: 14.0,
      image:
        "/images/menu/tiramisu.png",
    },

    {
      id: 7,
      category: "desserts",
      name: "Panna Cotta ai Frutti Rossi",
      description:
        "Silky vanilla panna cotta topped with a vibrant coulis of mixed red berries.",
      price: 13.5,
      image:
        "/images/menu/pannacotta.png",
    },

    {
      id: 8,
      category: "desserts",
      name: "Gelato Artigianale al Pistacchio",
      description:
        "Creamy handmade pistachio gelato crafted from premium Sicilian pistachios.",
      price: 10.5,
      image:
        "/images/menu/gelato.png",
    },


    // ⭐ BEVERAGES
    {
      id: 9,
      category: "beverages",
      name: "Aperol Spritz",
      description:
        "Aperol, prosecco and soda water served over ice with an orange slice.",
      price: 11.0,
      image:
        "/images/menu/aperol-spritz.png",
    },

    {
      id: 10,
      category: "beverages",
      name: "Limoncello Spritz",
      description:
        "Refreshing blend of limoncello, prosecco and sparkling water with a lemon twist.",
      price: 12.0,
      image:
        "/images/menu/limoncello-spritz.png",
    },

    {
      id: 11,
      category: "beverages",
      name: "Negroni Classico",
      description:
        "A timeless mix of gin, Campari and sweet vermouth served over ice with an orange peel.",
      price: 13.0,
      image:
        "/images/menu/negroni.png",
    },
  ],

  de: [
    // ⭐ VORSPEISEN
    {
      id: 1,
      category: "starters",
      name: "Bruschetta al Pomodoro",
      description:
        "Geröstetes Sauerteigbrot, belegt mit frischen Tomatenwürfeln, Basilikum, Olivenöl und Meersalz.",
      price: 12.5,
      image: "/images/menu/bruschetta.png",
    },
  
    {
      id: 2,
      category: "starters",
      name: "Burrata Cream & Prosciutto",
      description:
        "Zarte Burrata, serviert mit Parmaschinken, Rucola und Balsamico-Perlen.",
      price: 18.0,
      image: "/images/menu/burrata.png",
    },
  
    // ⭐ HAUPTGERICHTE
    {
      id: 3,
      category: "mains",
      name: "Spaghetti al Pomodoro Fresco",
      description:
        "Klassische italienische Pasta mit frischer Tomatensoße, Basilikumblättern und geriebenem handwerklichem Parmesan.",
      price: 24.99,
      image: "/images/menu/spaghetti.png",
    },
  
    {
      id: 4,
      category: "mains",
      name: "Eggplant Parmigiana",
      description:
        "Schichten aus gegrillter Aubergine, reichhaltiger Tomatensoße und geschmolzenem italienischen Käse, perfekt goldbraun gebacken.",
      price: 19.7,
      image: "/images/menu/parmigiana.png",
    },
  
    {
      id: 5,
      category: "mains",
      name: "Lemon e Parmigiano Risotto",
      description:
        "Cremiges Arborio-Risotto mit sizilianischer Zitronenschale, Butter und gereiftem Parmigiano Reggiano.",
      price: 22.5,
      image: "/images/menu/risotto.png",
    },
  
    // ⭐ DESSERTS
    {
      id: 6,
      category: "desserts",
      name: "Tiramisu Classico",
      description:
        "Traditionelles italienisches Tiramisu mit Mascarponecreme und in Espresso getränkten Löffelbiskuits.",
      price: 14.0,
      image: "/images/menu/tiramisu.png",
    },
  
    {
      id: 7,
      category: "desserts",
      name: "Panna Cotta ai Frutti Rossi",
      description:
        "Zarte Vanille-Panna-Cotta mit einem lebhaften Coulis aus gemischten roten Beeren.",
      price: 13.5,
      image: "/images/menu/pannacotta.png",
    },
  
    {
      id: 8,
      category: "desserts",
      name: "Gelato Artigianale al Pistacchio",
      description:
        "Cremiges handwerklich hergestelltes Pistazieneis aus hochwertigen sizilianischen Pistazien.",
      price: 10.5,
      image: "/images/menu/gelato.png", 
    },
  
    // ⭐ GETRÄNKE
    {
      id: 9,
      category: "beverages",
      name: "Aperol Spritz",
      description:
        "Aperol, Prosecco und Sodawasser auf Eis serviert, garniert mit einer Orangenscheibe.",
      price: 11.0,
      image: "/images/menu/aperol-spritz.png",
    },
  
    {
      id: 10,
      category: "beverages",
      name: "Limoncello Spritz",
      description:
        "Erfrischender Mix aus Limoncello, Prosecco und Sprudelwasser, verfeinert mit einer Zitronenzeste.",
      price: 12.0,
      image: "/images/menu/limoncello-spritz.png",
    },
  
    {
      id: 11,
      category: "beverages",
      name: "Negroni Classico",
      description:
        "Klassische Mischung aus Gin, Campari und süßem Wermut, auf Eis serviert und mit einer Orangenzeste garniert.",
      price: 13.0,
      image: "/images/menu/negroni.png",
    },
  ]
};

export const special = {
  en: {
    name: "Herb-Pistachio Lamb Medallions",
    features: [
      {
        id: 1,
        label: "Lamb",
        description:
          "Tender lamb medallions coated in a fragrant blend of crushed pistachios, rosemary and thyme, seared for a golden, aromatic crust.",
      },
      {
        id: 2,
        label: "Purée",
        description:
          "A delicate quinoa and root-vegetable purée offering creaminess and subtle earthy notes that complement the lamb.",
      },
      {
        id: 3,
        label: "Vegetables",
        description:
          "A vibrant selection of seasonal vegetables including peas, carrot ribbons, and microgreens, adding freshness, color and balance.",
      },
      {
        id: 4,
        label: "Finishing touches",
        description:
          "Demi-glace drops, edible petals, and a hint of herb oil elevate the dish with refined flavor and visual elegance.",
      },
    ],
    image: "/images/special-menu.png",
  },

  de: {
    name: "Lammmedaillons mit Kräutern und Pistazien",
    features: [
      {
        id: 1,
        label: "Lamm",
        description:
          "Zarte Lammmedaillons, umhüllt von einer duftenden Mischung aus zerstoßenen Pistazien, Rosmarin und Thymian, perfekt angebraten für eine goldene, aromatische Kruste.",
      },
      {
        id: 2,
        label: "Püree",
        description:
          "Ein feines Quinoa- und Wurzelgemüse-Püree, das cremige Textur und dezente erdige Noten bietet, die das Lamm harmonisch ergänzen.",
      },
      {
        id: 3,
        label: "Gemüse",
        description:
          "Eine lebendige Auswahl saisonaler Gemüse wie Erbsen, Karottenstreifen und Microgreens, die Frische, Farbe und Balance verleihen.",
      },
      {
        id: 4,
        label: "Veredelung",
        description:
          "Demi-Glace-Tropfen, essbare Blüten und ein Hauch von Kräuteröl verleihen dem Gericht einen raffinierten Geschmack und elegante Optik.",
      },
    ],
    image: "/images/special-menu.png",
  },
};