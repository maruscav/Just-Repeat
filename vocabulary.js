// Reduced set of 10 German words for this example.

const vocabulary5Words = [
  {
    german: "wie",
    english: "as",
  },
  {
    german: "ich",
    english: "I",
  },
  {
    german: "seine",
    english: "his",
  },
  {
    german: "dass",
    english: "that",
  },
  {
    german: "er",
    english: "he",
  },
  {
    german: "war",
    english: "was",
  },
  {
    german: "für",
    english: "for",
  },
  {
    german: "auf",
    english: "on",
  },
  {
    german: "sind",
    english: "are",
  },
  {
    german: "mit",
    english: "with",
  },
  {
    german: "sie",
    english: "they",
  },
  {
    german: "sein",
    english: "be",
  },
  {
    german: "bei",
    english: "at",
  },
  {
    german: "ein",
    english: "one",
  },
  {
    german: "haben",
    english: "have",
  },
  {
    german: "dies",
    english: "this",
  },
  {
    german: "aus",
    english: "from",
  },
  {
    german: "durch",
    english: "by",
  },
  {
    german: "heiß",
    english: "hot",
  },
  {
    german: "Wort",
    english: "word",
  },
  {
    german: "aber",
    english: "but",
  },
  {
    german: "was",
    english: "what",
  },
  {
    german: "einige",
    english: "some",
  },
  {
    german: "ist",
    english: "is",
  },
  {
    german: "es",
    english: "it",
  },
  {
    german: "Sie",
    english: "you",
  },
  {
    german: "oder",
    english: "or",
  },
  {
    german: "hatte",
    english: "had",
  },
  {
    german: "die",
    english: "the",
  },
  {
    german: "von",
    english: "of",
  },
  {
    german: "zu",
    english: "to",
  },
  {
    german: "und",
    english: "and",
  },
  {
    german: "ein",
    english: "a",
  },
  {
    german: "bei",
    english: "in",
  },
  {
    german: "wir",
    english: "we",
  },
  {
    german: "können",
    english: "can",
  },
  {
    german: "aus",
    english: "out",
  },
  {
    german: "andere",
    english: "other",
  },
  {
    german: "waren",
    english: "were",
  },
  {
    german: "die",
    english: "which",
  },
  {
    german: "tun",
    english: "do",
  },
  {
    german: "ihre",
    english: "their",
  },
  {
    german: "Zeit",
    english: "time",
  },
  {
    german: "wenn",
    english: "if",
  },
  {
    german: "werden",
    english: "will",
  },
  {
    german: "wie",
    english: "how",
  },
  {
    german: "sagte",
    english: "said",
  },
  {
    german: "ein",
    english: "an",
  },
  {
    german: "jeder",
    english: "each",
  },
  {
    german: "sagen",
    english: "tell",
  },
  {
    german: "tut",
    english: "does",
  },
  {
    german: "Satz",
    english: "set",
  },
  {
    german: "drei",
    english: "three",
  },
  {
    german: "wollen",
    english: "want",
  },
  {
    german: "Luft",
    english: "air",
  },
  {
    german: "gut",
    english: "well",
  },
  {
    german: "auch",
    english: "also",
  },
  {
    german: "spielen",
    english: "play",
  },
  {
    german: "klein",
    english: "small",
  },
  {
    german: "Ende",
    english: "end",
  },
  {
    german: "setzen",
    english: "put",
  },
  {
    german: "Zuhause",
    english: "home",
  },
  {
    german: "lesen",
    english: "read",
  },
  {
    german: "seits",
    english: "hand",
  },
  {
    german: "Hafen",
    english: "port",
  },
  {
    german: "groß",
    english: "large",
  },
  {
    german: "buchstabieren",
    english: "spell",
  },
  {
    german: "hinzufügen",
    english: "add",
  },
  {
    german: "auch",
    english: "even",
  },
  {
    german: "Lande",
    english: "land",
  },
  {
    german: "hier",
    english: "here",
  },
  {
    german: "muss",
    english: "must",
  },
  {
    german: "groß",
    english: "big",
  },
  {
    german: "hoch",
    english: "high",
  },
  {
    german: "so",
    english: "such",
  },
  {
    german: "folgen",
    english: "follow",
  },
  {
    german: "Akt",
    english: "act",
  },
  {
    german: "warum",
    english: "why",
  },
  {
    german: "fragen",
    english: "ask",
  },
  {
    german: "Männer",
    english: "men",
  },
  {
    german: "Veränderung",
    english: "change",
  },
  {
    german: "ging",
    english: "went",
  },
  {
    german: "Licht",
    english: "light",
  },
  {
    german: "Art",
    english: "kind",
  },
  {
    german: "aus",
    english: "off",
  },
  {
    german: "müssen",
    english: "need",
  },
  {
    german: "Haus",
    english: "house",
  },
  {
    german: "Bild",
    english: "picture",
  },
  {
    german: "versuchen",
    english: "try",
  },
  {
    german: "uns",
    english: "us",
  },
  {
    german: "wieder",
    english: "again",
  },
  {
    german: "Tier",
    english: "animal",
  },
  {
    german: "Punkt",
    english: "point",
  },
  {
    german: "Mutter",
    english: "mother",
  },
  {
    german: "Welt",
    english: "world",
  },
  {
    german: "in der Nähe von",
    english: "near",
  },
  {
    german: "bauen",
    english: "build",
  },
  {
    german: "selbst",
    english: "self",
  },
  {
    german: "Erde",
    english: "earth",
  },
  {
    german: "Vater",
    english: "father",
  },
  {
    german: "jeder",
    english: "any",
  },
  {
    german: "neu",
    english: "new",
  },
  {
    german: "Arbeit",
    english: "work",
  },
  {
    german: "Teil",
    english: "part",
  },
  {
    german: "nehmen",
    english: "take",
  },
  {
    german: "erhalten",
    english: "get",
  },
  {
    german: "Ort",
    english: "place",
  },
  {
    german: "gemacht",
    english: "made",
  },
  {
    german: "leben",
    english: "live",
  },
  {
    german: "wo",
    english: "where",
  },
  {
    german: "nach",
    english: "after",
  },
  {
    german: "zurück",
    english: "back",
  },
  {
    german: "wenig",
    english: "little",
  },
  {
    german: "nur",
    english: "only",
  },
  {
    german: "Runde",
    english: "round",
  },
  {
    german: "Mann",
    english: "man",
  },
  {
    german: "Jahr",
    english: "year",
  },
  {
    german: "kam",
    english: "came",
  },
  {
    german: "zeigen",
    english: "show",
  },
  {
    german: "jeder",
    english: "every",
  },
  {
    german: "gut",
    english: "good",
  },
  {
    german: "mir",
    english: "me",
  },
  {
    german: "geben",
    english: "give",
  },
  {
    german: "unsere",
    english: "our",
  },
  {
    german: "unter",
    english: "under",
  },
  {
    german: "Name",
    english: "name",
  },
  {
    german: "sehr",
    english: "very",
  },
  {
    german: "durch",
    english: "through",
  },
  {
    german: "nur",
    english: "just",
  },
  {
    german: "Formular",
    english: "form",
  },
  {
    german: "Satz",
    english: "sentence",
  },
  {
    german: "groß",
    english: "great",
  },
  {
    german: "denken",
    english: "think",
  },
  {
    german: "sagen",
    english: "say",
  },
  {
    german: "Hilfe",
    english: "help",
  },
  {
    german: "niedrig",
    english: "low",
  },
  {
    german: "Linie",
    english: "line",
  },
  {
    german: "abweichen",
    english: "differ",
  },
  {
    german: "wiederum",
    english: "turn",
  },
  {
    german: "Ursache",
    english: "cause",
  },
  {
    german: "viel",
    english: "much",
  },
  {
    german: "bedeuten",
    english: "mean",
  },
  {
    german: "vor",
    english: "before",
  },
  {
    german: "Umzug",
    english: "move",
  },
  {
    german: "Recht",
    english: "right",
  },
  {
    german: "Junge",
    english: "boy",
  },
  {
    german: "alt",
    english: "old",
  },
  {
    german: "zu",
    english: "too",
  },
  {
    german: "gleich",
    english: "same",
  },
  {
    german: "sie",
    english: "she",
  },
  {
    german: "alle",
    english: "all",
  },
  {
    german: "da",
    english: "there",
  },
  {
    german: "wenn",
    english: "when",
  },
  {
    german: "nach oben",
    english: "up",
  },
  {
    german: "Verwendung",
    english: "use",
  },
  {
    german: "Ihre",
    english: "your",
  },
  {
    german: "Weg",
    english: "way",
  },
  {
    german: "über",
    english: "about",
  },
  {
    german: "viele",
    english: "many",
  },
  {
    german: "dann",
    english: "then",
  },
  {
    german: "sie",
    english: "them",
  },
  {
    german: "schreiben",
    english: "write",
  },
  {
    german: "würde",
    english: "would",
  },
  {
    german: "wie",
    english: "like",
  },
  {
    german: "so",
    english: "so",
  },
  {
    german: "diese",
    english: "these",
  },
  {
    german: "sie",
    english: "her",
  },
  {
    german: "lange",
    english: "long",
  },
  {
    german: "machen",
    english: "make",
  },
  {
    german: "Sache",
    english: "thing",
  },
  {
    german: "sehen",
    english: "see",
  },
  {
    german: "ihm",
    english: "him",
  },
  {
    german: "zwei",
    english: "two",
  },
  {
    german: "hat",
    english: "has",
  },
  {
    german: "suchen",
    english: "look",
  },
  {
    german: "mehr",
    english: "more",
  },
  {
    german: "Tag",
    english: "day",
  },
  {
    german: "könnte",
    english: "could",
  },
  {
    german: "gehen",
    english: "go",
  },
  {
    german: "kommen",
    english: "come",
  },
  {
    german: "tat",
    english: "did",
  },
  {
    german: "Anzahl",
    english: "number",
  },
  {
    german: "klingen",
    english: "sound",
  },
  {
    german: "nicht",
    english: "no",
  },
  {
    german: "am meisten",
    english: "most",
  },
  {
    german: "Menschen",
    english: "people",
  },
  {
    german: "meine",
    english: "my",
  },
  {
    german: "über",
    english: "over",
  },
  {
    german: "wissen",
    english: "know",
  },
  {
    german: "Wasser",
    english: "water",
  },
  {
    german: "als",
    english: "than",
  },
  {
    german: "Anruf",
    english: "call",
  },
  {
    german: "erste",
    english: "first",
  },
  {
    german: "die",
    english: "who",
  },
  {
    german: "können",
    english: "may",
  },
  {
    german: "nach unten",
    english: "down",
  },
  {
    german: "Seite",
    english: "side",
  },
  {
    german: "gewesen",
    english: "been",
  },
  {
    german: "jetzt",
    english: "now",
  },
  {
    german: "finden",
    english: "find",
  },
  {
    german: "Kopf",
    english: "head",
  },
  {
    german: "stehen",
    english: "stand",
  },
  {
    german: "besitzen",
    english: "own",
  },
  {
    german: "Seite",
    english: "page",
  },
  {
    german: "sollte",
    english: "should",
  },
  {
    german: "Land",
    english: "country",
  },
  {
    german: "gefunden",
    english: "found",
  },
  {
    german: "Antwort",
    english: "answer",
  },
  {
    german: "Schule",
    english: "school",
  },
  {
    german: "wachsen",
    english: "grow",
  },
  {
    german: "Studie",
    english: "study",
  },
  {
    german: "noch",
    english: "still",
  },
  {
    german: "lernen",
    english: "learn",
  },
  {
    german: "Anlage",
    english: "plant",
  },
  {
    german: "Abdeckung",
    english: "cover",
  },
  {
    german: "Lebensmittel",
    english: "food",
  },
  {
    german: "Sonne",
    english: "sun",
  },
  {
    german: "vier",
    english: "four",
  },
  {
    german: "zwischen",
    english: "between",
  },
  {
    german: "Zustand",
    english: "state",
  },
  {
    german: "halten",
    english: "keep",
  },
  {
    german: "Auge",
    english: "eye",
  },
  {
    german: "nie",
    english: "never",
  },
  {
    german: "letzte",
    english: "last",
  },
  {
    german: "lassen",
    english: "let",
  },
  {
    german: "Gedanken",
    english: "thought",
  },
  {
    german: "Stadt",
    english: "city",
  },
  {
    german: "Baum",
    english: "tree",
  },
  {
    german: "überqueren",
    english: "cross",
  },
  {
    german: "Bauernhof",
    english: "farm",
  },
  {
    german: "schwer",
    english: "hard",
  },
  {
    german: "Beginn",
    english: "start",
  },
  {
    german: "Macht",
    english: "might",
  },
  {
    german: "Geschichte",
    english: "story",
  },
  {
    german: "Säge",
    english: "saw",
  },
  {
    german: "weit",
    english: "far",
  },
  {
    german: "Meer",
    english: "sea",
  },
  {
    german: "ziehen",
    english: "draw",
  },
  {
    german: "links",
    english: "left",
  },
  {
    german: "spät",
    english: "late",
  },
  {
    german: "laufen",
    english: "run",
  },
  {
    german: "unterlassen Sie",
    english: "don’t",
  },
  {
    german: "während",
    english: "while",
  },
  {
    german: "Presse",
    english: "press",
  },
  {
    german: "Schließen",
    english: "close",
  },
  {
    german: "Nacht",
    english: "night",
  },
  {
    german: "realen",
    english: "real",
  },
  {
    german: "Leben",
    english: "life",
  },
  {
    german: "wenige",
    english: "few",
  },
  {
    german: "Norden",
    english: "north",
  },
  {
    german: "Buch",
    english: "book",
  },
  {
    german: "tragen",
    english: "carry",
  },
  {
    german: "nahm",
    english: "took",
  },
  {
    german: "Wissenschaft",
    english: "science",
  },
  {
    german: "essen",
    english: "eat",
  },
  {
    german: "Zimmer",
    english: "room",
  },
  {
    german: "Freund",
    english: "friend",
  },
  {
    german: "begann",
    english: "began",
  },
  {
    german: "Idee",
    english: "idea",
  },
  {
    german: "Fisch",
    english: "fish",
  },
  {
    german: "berg",
    english: "mountain",
  },
  {
    german: "Stopp",
    english: "stop",
  },
  {
    german: "einmal",
    english: "once",
  },
  {
    german: "Basis",
    english: "base",
  },
  {
    german: "hören",
    english: "hear",
  },
  {
    german: "Pferd",
    english: "horse",
  },
  {
    german: "Schnitt",
    english: "cut",
  },
  {
    german: "sicher",
    english: "sure",
  },
  {
    german: "beobachten",
    english: "watch",
  },
  {
    german: "Farbe",
    english: "color",
  },
  {
    german: "Gesicht",
    english: "face",
  },
  {
    german: "Holz",
    english: "wood",
  },
  {
    german: "Haupt-",
    english: "main",
  },
  {
    german: "geöffnet",
    english: "open",
  },
  {
    german: "scheinen",
    english: "seem",
  },
  {
    german: "zusammen",
    english: "together",
  },
  {
    german: "nächste",
    english: "next",
  },
  {
    german: "weiß",
    english: "white",
  },
  {
    german: "Kinder",
    english: "children",
  },
  {
    german: "Start",
    english: "begin",
  },
  {
    german: "bekam",
    english: "got",
  },
  {
    german: "gehen",
    english: "walk",
  },
  {
    german: "Beispiel",
    english: "example",
  },
  {
    german: "erleichtern",
    english: "ease",
  },
  {
    german: "Papier",
    english: "paper",
  },
  {
    german: "Gruppe",
    english: "group",
  },
  {
    german: "immer",
    english: "always",
  },
  {
    german: "Musik",
    english: "music",
  },
  {
    german: "diejenigen",
    english: "those",
  },
  {
    german: "beide",
    english: "both",
  },
  {
    german: "Marke",
    english: "mark",
  },
  {
    german: "oft",
    english: "often",
  },
  {
    german: "Schreiben",
    english: "letter",
  },
  {
    german: "bis",
    english: "until",
  },
  {
    german: "Meile",
    english: "mile",
  },
  {
    german: "Fluss",
    english: "river",
  },
  {
    german: "Auto",
    english: "car",
  },
  {
    german: "Füße",
    english: "feet",
  },
  {
    german: "Pflege",
    english: "care",
  },
  {
    german: "zweite",
    english: "second",
  },
  {
    german: "genug",
    english: "enough",
  },
  {
    german: "Ebene",
    english: "plain",
  },
  {
    german: "Mädchen",
    english: "girl",
  },
  {
    german: "üblich",
    english: "usual",
  },
  {
    german: "jung",
    english: "young",
  },
  {
    german: "bereit",
    english: "ready",
  },
  {
    german: "oben",
    english: "above",
  },
  {
    german: "je",
    english: "ever",
  },
  {
    german: "rot",
    english: "red",
  },
  {
    german: "Liste",
    english: "list",
  },
  {
    german: "obwohl",
    english: "though",
  },
  {
    german: "fühlen",
    english: "feel",
  },
  {
    german: "Vortrag",
    english: "talk",
  },
  {
    german: "Vogel",
    english: "bird",
  },
  {
    german: "bald",
    english: "soon",
  },
  {
    german: "Körper",
    english: "body",
  },
  {
    german: "Hund",
    english: "dog",
  },
  {
    german: "Familie",
    english: "family",
  },
  {
    german: "direkt",
    english: "direct",
  },
  {
    german: "Pose",
    english: "pose",
  },
  {
    german: "verlassen",
    english: "leave",
  },
  {
    german: "Lied",
    english: "song",
  },
  {
    german: "messen",
    english: "measure",
  },
  {
    german: "Tür",
    english: "door",
  },
  {
    german: "Produkt",
    english: "product",
  },
  {
    german: "schwarz",
    english: "black",
  },
  {
    german: "kurz",
    english: "short",
  },
  {
    german: "Zahl",
    english: "numeral",
  },
  {
    german: "Klasse",
    english: "class",
  },
  {
    german: "Wind",
    english: "wind",
  },
  {
    german: "Frage",
    english: "question",
  },
  {
    german: "passieren",
    english: "happen",
  },
  {
    german: "vollständig",
    english: "complete",
  },
  {
    german: "Schiff",
    english: "ship",
  },
  {
    german: "Bereich",
    english: "area",
  },
  {
    german: "Hälfte",
    english: "half",
  },
  {
    german: "Stein",
    english: "rock",
  },
  {
    german: "bestellen",
    english: "order",
  },
  {
    german: "Feuer",
    english: "fire",
  },
  {
    german: "Süden",
    english: "south",
  },
  {
    german: "Problem",
    english: "problem",
  },
  {
    german: "Stück",
    english: "piece",
  },
  {
    german: "sagte",
    english: "told",
  },
  {
    german: "wusste",
    english: "knew",
  },
  {
    german: "passieren",
    english: "pass",
  },
  {
    german: "seit",
    english: "since",
  },
  {
    german: "obere",
    english: "top",
  },
  {
    german: "ganze",
    english: "whole",
  },
  {
    german: "König",
    english: "king",
  },
  {
    german: "Straße",
    english: "street",
  },
  {
    german: "Zoll",
    english: "inch",
  },
  {
    german: "multiplizieren",
    english: "multiply",
  },
  {
    german: "nichts",
    english: "nothing",
  },
  {
    german: "Kurs",
    english: "course",
  },
  {
    german: "bleiben",
    english: "stay",
  },
  {
    german: "Rad",
    english: "wheel",
  },
  {
    german: "voll",
    english: "full",
  },
  {
    german: "Kraft",
    english: "force",
  },
  {
    german: "blau",
    english: "blue",
  },
  {
    german: "Objekt",
    english: "object",
  },
  {
    german: "entscheiden",
    english: "decide",
  },
  {
    german: "Oberfläche",
    english: "surface",
  },
  {
    german: "tief",
    english: "deep",
  },
  {
    german: "Mond",
    english: "moon",
  },
  {
    german: "Insel",
    english: "island",
  },
  {
    german: "Fuß",
    english: "foot",
  },
  {
    german: "System",
    english: "system",
  },
  {
    german: "beschäftigt",
    english: "busy",
  },
  {
    german: "Prüfung",
    english: "test",
  },
  {
    german: "Rekord",
    english: "record",
  },
  {
    german: "Boot",
    english: "boat",
  },
  {
    german: "gemeinsam",
    english: "common",
  },
  {
    german: "goldenen",
    english: "gold",
  },
  {
    german: "möglich",
    english: "possible",
  },
  {
    german: "Flugzeug",
    english: "plane",
  },
  {
    german: "statt",
    english: "stead",
  },
  {
    german: "trocken",
    english: "dry",
  },
  {
    german: "Wunder",
    english: "wonder",
  },
  {
    german: "Lachen",
    english: "laugh",
  },
  {
    german: "tausend",
    english: "thousand",
  },
  {
    german: "vor",
    english: "ago",
  },
  {
    german: "lief",
    english: "ran",
  },
  {
    german: "überprüfen",
    english: "check",
  },
  {
    german: "Spiel",
    english: "game",
  },
  {
    german: "Form",
    english: "shape",
  },
  {
    german: "gleichsetzen",
    english: "equate",
  },
  {
    german: "heiß",
    english: "hot",
  },
  {
    german: "Fehl",
    english: "miss",
  },
  {
    german: "gebracht",
    english: "brought",
  },
  {
    german: "Wärme",
    english: "heat",
  },
  {
    german: "Schnee",
    english: "snow",
  },
  {
    german: "Reifen",
    english: "tire",
  },
  {
    german: "bringen",
    english: "bring",
  },
  {
    german: "ja",
    english: "yes",
  },
  {
    german: "entfernt",
    english: "distant",
  },
  {
    german: "füllen",
    english: "fill",
  },
  {
    german: "Osten",
    english: "east",
  },
  {
    german: "malen",
    english: "paint",
  },
  {
    german: "Sprache",
    english: "language",
  },
  {
    german: "unter",
    english: "among",
  },
  {
    german: "Einheit",
    english: "unit",
  },
  {
    german: "Macht",
    english: "power",
  },
  {
    german: "Stadt",
    english: "town",
  },
  {
    german: "fein",
    english: "fine",
  },
  {
    german: "sicher",
    english: "certain",
  },
  {
    german: "fliegen",
    english: "fly",
  },
  {
    german: "fallen",
    english: "fall",
  },
  {
    german: "führen",
    english: "lead",
  },
  {
    german: "Schrei",
    english: "cry",
  },
  {
    german: "dunkel",
    english: "dark",
  },
  {
    german: "Maschine",
    english: "machine",
  },
  {
    german: "note",
    english: "note",
  },
  {
    german: "warten",
    english: "wait",
  },
  {
    german: "Plan",
    english: "plan",
  },
  {
    german: "Abbildung",
    english: "figure",
  },
  {
    german: "Stern",
    english: "star",
  },
  {
    german: "Kasten",
    english: "box",
  },
  {
    german: "Nomen",
    english: "noun",
  },
  {
    german: "Feld",
    english: "field",
  },
  {
    german: "Rest",
    english: "rest",
  },
  {
    german: "richtig",
    english: "correct",
  },
  {
    german: "fähig",
    english: "able",
  },
  {
    german: "Pfund",
    english: "pound",
  },
  {
    german: "getan",
    english: "done",
  },
  {
    german: "Schönheit",
    english: "beauty",
  },
  {
    german: "Antriebs",
    english: "drive",
  },
  {
    german: "stand",
    english: "stood",
  },
  {
    german: "enthalten",
    english: "contain",
  },
  {
    german: "Front",
    english: "front",
  },
  {
    german: "lehren",
    english: "teach",
  },
  {
    german: "Woche",
    english: "week",
  },
  {
    german: "Finale",
    english: "final",
  },
  {
    german: "gab",
    english: "gave",
  },
  {
    german: "grün",
    english: "green",
  },
  {
    german: "oh",
    english: "oh",
  },
  {
    german: "schnell",
    english: "quick",
  },
  {
    german: "entwickeln",
    english: "develop",
  },
  {
    german: "Ozean",
    english: "ocean",
  },
  {
    german: "warme",
    english: "warm",
  },
  {
    german: "kostenlos",
    english: "free",
  },
  {
    german: "Minute",
    english: "minute",
  },
  {
    german: "stark",
    english: "strong",
  },
  {
    german: "besondere",
    english: "special",
  },
  {
    german: "Geist",
    english: "mind",
  },
  {
    german: "hinter",
    english: "behind",
  },
  {
    german: "klar",
    english: "clear",
  },
  {
    german: "Schwanz",
    english: "tail",
  },
  {
    german: "produzieren",
    english: "produce",
  },
  {
    german: "Tatsache",
    english: "fact",
  },
  {
    german: "Raum",
    english: "space",
  },
  {
    german: "gehört",
    english: "heard",
  },
  {
    german: "beste",
    english: "best",
  },
  {
    german: "Stunde",
    english: "hour",
  },
  {
    german: "besser",
    english: "better",
  },
  {
    german: "wahr",
    english: "TRUE",
  },
  {
    german: "während",
    english: "during",
  },
  {
    german: "hundert",
    english: "hundred",
  },
  {
    german: "fünf",
    english: "five",
  },
  {
    german: "merken",
    english: "remember",
  },
  {
    german: "Schritt",
    english: "step",
  },
  {
    german: "früh",
    english: "early",
  },
  {
    german: "halten",
    english: "hold",
  },
  {
    german: "Westen",
    english: "west",
  },
  {
    german: "Boden",
    english: "ground",
  },
  {
    german: "Interesse",
    english: "interest",
  },
  {
    german: "erreichen",
    english: "reach",
  },
  {
    german: "schnell",
    english: "fast",
  },
  {
    german: "Verbum",
    english: "verb",
  },
  {
    german: "singen",
    english: "sing",
  },
  {
    german: "hören",
    english: "listen",
  },
  {
    german: "sechs",
    english: "six",
  },
  {
    german: "Tabelle",
    english: "table",
  },
  {
    german: "Reise",
    english: "travel",
  },
  {
    german: "weniger",
    english: "less",
  },
  {
    german: "Morgen",
    english: "morning",
  },
  {
    german: "zehn",
    english: "ten",
  },
  {
    german: "einfach",
    english: "simple",
  },
  {
    german: "mehrere",
    english: "several",
  },
  {
    german: "Vokal",
    english: "vowel",
  },
  {
    german: "auf",
    english: "toward",
  },
  {
    german: "Krieg",
    english: "war",
  },
  {
    german: "legen",
    english: "lay",
  },
  {
    german: "gegen",
    english: "against",
  },
  {
    german: "Muster",
    english: "pattern",
  },
  {
    german: "schleppend",
    english: "slow",
  },
  {
    german: "Zentrum",
    english: "center",
  },
  {
    german: "Liebe",
    english: "love",
  },
  {
    german: "Person",
    english: "person",
  },
  {
    german: "Geld",
    english: "money",
  },
  {
    german: "dienen",
    english: "serve",
  },
  {
    german: "erscheinen",
    english: "appear",
  },
  {
    german: "Straße",
    english: "road",
  },
  {
    german: "",
    english: "",
  },
  {
    german: "Karte",
    english: "map",
  },
  {
    german: "regen",
    english: "rain",
  },
  {
    german: "Regel",
    english: "rule",
  },
  {
    german: "regieren",
    english: "govern",
  },
  {
    german: "ziehen",
    english: "pull",
  },
  {
    german: "Kälte",
    english: "cold",
  },
  {
    german: "Hinweis",
    english: "notice",
  },
  {
    german: "Stimme",
    english: "voice",
  },
  {
    german: "Energie",
    english: "energy",
  },
  {
    german: "Jagd",
    english: "hunt",
  },
  {
    german: "wahrscheinlich",
    english: "probable",
  },
  {
    german: "Bett",
    english: "bed",
  },
  {
    german: "Bruder",
    english: "brother",
  },
  {
    german: "Ei",
    english: "egg",
  },
  {
    german: "Fahrt",
    english: "ride",
  },
  {
    german: "Zelle",
    english: "cell",
  },
  {
    german: "glauben",
    english: "believe",
  },
  {
    german: "vielleicht",
    english: "perhaps",
  },
  {
    german: "pflücken",
    english: "pick",
  },
  {
    german: "plötzlich",
    english: "sudden",
  },
  {
    german: "zählen",
    english: "count",
  },
  {
    german: "Platz",
    english: "square",
  },
  {
    german: "Grund",
    english: "reason",
  },
  {
    german: "Dauer",
    english: "length",
  },
  {
    german: "vertreten",
    english: "represent",
  },
  {
    german: "Kunst",
    english: "art",
  },
  {
    german: "Thema",
    english: "subject",
  },
  {
    german: "Region",
    english: "region",
  },
  {
    german: "Größe",
    english: "size",
  },
  {
    german: "variieren",
    english: "vary",
  },
  {
    german: "regeln",
    english: "settle",
  },
  {
    german: "sprechen",
    english: "speak",
  },
  {
    german: "Gewicht",
    english: "weight",
  },
  {
    german: "allgemein",
    english: "general",
  },
  {
    german: "Eis",
    english: "ice",
  },
  {
    german: "Materie",
    english: "matter",
  },
  {
    german: "Kreis",
    english: "circle",
  },
  {
    german: "Paar",
    english: "pair",
  },
  {
    german: "umfassen",
    english: "include",
  },
  {
    german: "Kluft",
    english: "divide",
  },
  {
    german: "Silbe",
    english: "syllable",
  },
  {
    german: "Filz",
    english: "felt",
  },
  {
    german: "groß",
    english: "grand",
  },
  {
    german: "Kugel",
    english: "ball",
  },
  {
    german: "noch",
    english: "yet",
  },
  {
    german: "Welle",
    english: "wave",
  },
  {
    german: "fallen",
    english: "drop",
  },
  {
    german: "Herz",
    english: "heart",
  },
  {
    german: "Uhr",
    english: "am",
  },
  {
    german: "vorhanden",
    english: "present",
  },
  {
    german: "schwer",
    english: "heavy",
  },
  {
    german: "Tanz",
    english: "dance",
  },
  {
    german: "Motor",
    english: "engine",
  },
  {
    german: "Position",
    english: "position",
  },
  {
    german: "Arm",
    english: "arm",
  },
  {
    german: "breit",
    english: "wide",
  },
  {
    german: "Segel",
    english: "sail",
  },
  {
    german: "Material",
    english: "material",
  },
  {
    german: "Fraktion",
    english: "fraction",
  },
  {
    german: "Wald",
    english: "forest",
  },
  {
    german: "sitzen",
    english: "sit",
  },
  {
    german: "Rennen",
    english: "race",
  },
  {
    german: "Fenster",
    english: "window",
  },
  {
    german: "Speicher",
    english: "store",
  },
  {
    german: "Sommer",
    english: "summer",
  },
  {
    german: "Zug",
    english: "train",
  },
  {
    german: "Schlaf",
    english: "sleep",
  },
  {
    german: "beweisen",
    english: "prove",
  },
  {
    german: "einsam",
    english: "lone",
  },
  {
    german: "Bein",
    english: "leg",
  },
  {
    german: "Übung",
    english: "exercise",
  },
  {
    german: "Wand",
    english: "wall",
  },
  {
    german: "Fang",
    english: "catch",
  },
  {
    german: "Berg",
    english: "mount",
  },
  {
    german: "wünschen",
    english: "wish",
  },
  {
    german: "Himmel",
    english: "sky",
  },
  {
    german: "Board",
    english: "board",
  },
  {
    german: "Freude",
    english: "joy",
  },
  {
    german: "Winter",
    english: "winter",
  },
  {
    german: "sa",
    english: "sat",
  },
  {
    german: "geschrieben",
    english: "written",
  },
  {
    german: "wilden",
    english: "wild",
  },
  {
    german: "Instrument",
    english: "instrument",
  },
  {
    german: "gehalten",
    english: "kept",
  },
  {
    german: "Glas",
    english: "glass",
  },
  {
    german: "Gras",
    english: "grass",
  },
  {
    german: "Kuh",
    english: "cow",
  },
  {
    german: "Arbeit",
    english: "job",
  },
  {
    german: "Rand",
    english: "edge",
  },
  {
    german: "Zeichen",
    english: "sign",
  },
  {
    german: "Besuch",
    english: "visit",
  },
  {
    german: "Vergangenheit",
    english: "past",
  },
  {
    german: "weich",
    english: "soft",
  },
  {
    german: "Spaß",
    english: "fun",
  },
  {
    german: "hell",
    english: "bright",
  },
  {
    german: "Gases",
    english: "gas",
  },
  {
    german: "Wetter",
    english: "weather",
  },
  {
    german: "Monat",
    english: "month",
  },
  {
    german: "Million",
    english: "million",
  },
  {
    german: "tragen",
    english: "bear",
  },
  {
    german: "Finish",
    english: "finish",
  },
  {
    german: "glücklich",
    english: "happy",
  },
  {
    german: "hoffen",
    english: "hope",
  },
  {
    german: "blume",
    english: "flower",
  },
  {
    german: "kleiden",
    english: "clothe",
  },
  {
    german: "seltsam",
    english: "strange",
  },
  {
    german: "Vorbei",
    english: "gone",
  },
  {
    german: "Handel",
    english: "trade",
  },
  {
    german: "Melodie",
    english: "melody",
  },
  {
    german: "Reise",
    english: "trip",
  },
  {
    german: "Büro",
    english: "office",
  },
  {
    german: "empfangen",
    english: "receive",
  },
  {
    german: "Reihe",
    english: "row",
  },
  {
    german: "Mund",
    english: "mouth",
  },
  {
    german: "genau",
    english: "exact",
  },
  {
    german: "Zeichen",
    english: "symbol",
  },
  {
    german: "sterben",
    english: "die",
  },
  {
    german: "am wenigsten",
    english: "least",
  },
  {
    german: "Ärger",
    english: "trouble",
  },
  {
    german: "Schrei",
    english: "shout",
  },
  {
    german: "außer",
    english: "except",
  },
  {
    german: "schrieb",
    english: "wrote",
  },
  {
    german: "Samen",
    english: "seed",
  },
  {
    german: "Ton",
    english: "tone",
  },
  {
    german: "beitreten",
    english: "join",
  },
  {
    german: "vorschlagen",
    english: "suggest",
  },
  {
    german: "sauber",
    english: "clean",
  },
  {
    german: "Pause",
    english: "break",
  },
  {
    german: "Dame",
    english: "lady",
  },
  {
    german: "Hof",
    english: "yard",
  },
  {
    german: "steigen",
    english: "rise",
  },
  {
    german: "schlecht",
    english: "bad",
  },
  {
    german: "Schlag",
    english: "blow",
  },
  {
    german: "Öl",
    english: "oil",
  },
  {
    german: "Blut",
    english: "blood",
  },
  {
    german: "berühren",
    english: "touch",
  },
  {
    german: "wuchs",
    english: "grew",
  },
  {
    german: "Cent",
    english: "cent",
  },
  {
    german: "mischen",
    english: "mix",
  },
  {
    german: "Mannschaft",
    english: "team",
  },
  {
    german: "Draht",
    english: "wire",
  },
  {
    german: "Kosten",
    english: "cost",
  },
  {
    german: "verloren",
    english: "lost",
  },
  {
    german: "braun",
    english: "brown",
  },
  {
    german: "tragen",
    english: "wear",
  },
  {
    german: "Garten",
    english: "garden",
  },
  {
    german: "gleich",
    english: "equal",
  },
  {
    german: "gesendet",
    english: "sent",
  },
  {
    german: "wählen",
    english: "choose",
  },
  {
    german: "fiel",
    english: "fell",
  },
  {
    german: "passen",
    english: "fit",
  },
  {
    german: "fließen",
    english: "flow",
  },
  {
    german: "Messe",
    english: "fair",
  },
  {
    german: "Bank",
    english: "bank",
  },
  {
    german: "sammeln",
    english: "collect",
  },
  {
    german: "sparen",
    english: "save",
  },
  {
    german: "Kontrolle",
    english: "control",
  },
  {
    german: "dezimal",
    english: "decimal",
  },
  {
    german: "Ohr",
    english: "ear",
  },
  {
    german: "sonst",
    english: "else",
  },
  {
    german: "ganz",
    english: "quite",
  },
  {
    german: "pleite",
    english: "broke",
  },
  {
    german: "Fall",
    english: "case",
  },
  {
    german: "Mitte",
    english: "middle",
  },
  {
    german: "töten",
    english: "kill",
  },
  {
    german: "Sohn",
    english: "son",
  },
  {
    german: "See",
    english: "lake",
  },
  {
    german: "Moment",
    english: "moment",
  },
  {
    german: "Maßstab",
    english: "scale",
  },
  {
    german: "laut",
    english: "loud",
  },
  {
    german: "Frühling",
    english: "spring",
  },
  {
    german: "beobachten",
    english: "observe",
  },
  {
    german: "Kind",
    english: "child",
  },
  {
    german: "gerade",
    english: "straight",
  },
  {
    german: "Konsonant",
    english: "consonant",
  },
  {
    german: "Nation",
    english: "nation",
  },
  {
    german: "Wörterbuch",
    english: "dictionary",
  },
  {
    german: "milch",
    english: "milk",
  },
  {
    german: "Geschwindigkeit",
    english: "speed",
  },
  {
    german: "Verfahren",
    english: "method",
  },
  {
    german: "Orgel",
    english: "organ",
  },
  {
    german: "zahlen",
    english: "pay",
  },
  {
    german: "Alter",
    english: "age",
  },
  {
    german: "Abschnitt",
    english: "section",
  },
  {
    german: "Kleid",
    english: "dress",
  },
  {
    german: "Wolke",
    english: "cloud",
  },
  {
    german: "Überraschung",
    english: "surprise",
  },
  {
    german: "ruhig",
    english: "quiet",
  },
  {
    german: "Stein",
    english: "stone",
  },
  {
    german: "winzig",
    english: "tiny",
  },
  {
    german: "Aufstieg",
    english: "climb",
  },
  {
    german: "kühlen",
    english: "cool",
  },
  {
    german: "Entwurf",
    english: "design",
  },
  {
    german: "arm",
    english: "poor",
  },
  {
    german: "Menge",
    english: "lot",
  },
  {
    german: "Versuch",
    english: "experiment",
  },
  {
    german: "Boden",
    english: "bottom",
  },
  {
    german: "Schlüssel",
    english: "key",
  },
  {
    german: "Eisen",
    english: "iron",
  },
  {
    german: "Einzel",
    english: "single",
  },
  {
    german: "Stick",
    english: "stick",
  },
  {
    german: "Wohnung",
    english: "flat",
  },
  {
    german: "zwanzig",
    english: "twenty",
  },
  {
    german: "Haut",
    english: "skin",
  },
  {
    german: "Lächeln",
    english: "smile",
  },
  {
    german: "Falte",
    english: "crease",
  },
  {
    german: "Loch",
    english: "hole",
  },
  {
    german: "springen",
    english: "jump",
  },
  {
    german: "Kind",
    english: "baby",
  },
  {
    german: "acht",
    english: "eight",
  },
  {
    german: "Dorf",
    english: "village",
  },
  {
    german: "treffen",
    english: "meet",
  },
  {
    german: "Wurzel",
    english: "root",
  },
  {
    german: "kaufen",
    english: "buy",
  },
  {
    german: "erhöhen",
    english: "raise",
  },
  {
    german: "lösen",
    english: "solve",
  },
  {
    german: "Metall",
    english: "metal",
  },
  {
    german: "ob",
    english: "whether",
  },
  {
    german: "drücken",
    english: "push",
  },
  {
    german: "sieben",
    english: "seven",
  },
  {
    german: "Absatz",
    english: "paragraph",
  },
  {
    german: "dritte",
    english: "third",
  },
  {
    german: "wird",
    english: "shall",
  },
  {
    german: "Hand",
    english: "held",
  },
  {
    german: "Haar",
    english: "hair",
  },
  {
    german: "beschreiben",
    english: "describe",
  },
  {
    german: "Koch",
    english: "cook",
  },
  {
    german: "Boden",
    english: "floor",
  },
  {
    german: "entweder",
    english: "either",
  },
  {
    german: "Ergebnis",
    english: "result",
  },
  {
    german: "brennen",
    english: "burn",
  },
  {
    german: "Hügel",
    english: "hill",
  },
  {
    german: "sicher",
    english: "safe",
  },
  {
    german: "Katze",
    english: "cat",
  },
  {
    german: "Jahrhundert",
    english: "century",
  },
  {
    german: "betrachten",
    english: "consider",
  },
  {
    german: "Typ",
    english: "type",
  },
  {
    german: "Gesetz",
    english: "law",
  },
  {
    german: "Bit",
    english: "bit",
  },
  {
    german: "Küste",
    english: "coast",
  },
  {
    german: "Kopie",
    english: "copy",
  },
  {
    german: "Ausdruck",
    english: "phrase",
  },
  {
    german: "still",
    english: "silent",
  },
  {
    german: "hoch",
    english: "tall",
  },
  {
    german: "Sand",
    english: "sand",
  },
  {
    german: "Boden",
    english: "soil",
  },
  {
    german: "Rolle",
    english: "roll",
  },
  {
    german: "Temperatur",
    english: "temperature",
  },
  {
    german: "Finger",
    english: "finger",
  },
  {
    german: "Industrie",
    english: "industry",
  },
  {
    german: "Wert",
    english: "value",
  },
  {
    german: "Kampf",
    english: "fight",
  },
  {
    german: "Lüge",
    english: "lie",
  },
  {
    german: "schlagen",
    english: "beat",
  },
  {
    german: "begeistern",
    english: "excite",
  },
  {
    german: "natürlich",
    english: "natural",
  },
  {
    german: "Blick",
    english: "view",
  },
  {
    german: "Sinn",
    english: "sense",
  },
  {
    german: "Hauptstadt",
    english: "capital",
  },
  {
    german: "wird nicht",
    english: "won’t",
  },
  {
    german: "Stuhl",
    english: "chair",
  },
  {
    german: "Achtung",
    english: "danger",
  },
  {
    german: "Obst",
    english: "fruit",
  },
  {
    german: "reich",
    english: "rich",
  },
  {
    german: "dick",
    english: "thick",
  },
  {
    german: "Soldat",
    english: "soldier",
  },
  {
    german: "Prozess",
    english: "process",
  },
  {
    german: "betreiben",
    english: "operate",
  },
  {
    german: "Praxis",
    english: "practice",
  },
  {
    german: "trennen",
    english: "separate",
  },
  {
    german: "schwierig",
    english: "difficult",
  },
  {
    german: "Arzt",
    english: "doctor",
  },
  {
    german: "Bitte",
    english: "please",
  },
  {
    german: "schützen",
    english: "protect",
  },
  {
    german: "Mittag",
    english: "noon",
  },
  {
    german: "Ernte",
    english: "crop",
  },
  {
    german: "modernen",
    english: "modern",
  },
  {
    german: "Elementes",
    english: "element",
  },
  {
    german: "treffen",
    english: "hit",
  },
  {
    german: "Schüler",
    english: "student",
  },
  {
    german: "Ecke",
    english: "corner",
  },
  {
    german: "Partei",
    english: "party",
  },
  {
    german: "Versorgung",
    english: "supply",
  },
  {
    german: "deren",
    english: "whose",
  },
  {
    german: "lokalisieren",
    english: "locate",
  },
  {
    german: "Rings",
    english: "ring",
  },
  {
    german: "Charakter",
    english: "character",
  },
  {
    german: "insekt",
    english: "insect",
  },
  {
    german: "gefangen",
    english: "caught",
  },
  {
    german: "Zeit",
    english: "period",
  },
  {
    german: "zeigen",
    english: "indicate",
  },
  {
    german: "Funk",
    english: "radio",
  },
  {
    german: "Speiche",
    english: "spoke",
  },
  {
    german: "Atom",
    english: "atom",
  },
  {
    german: "Mensch",
    english: "human",
  },
  {
    german: "Geschichte",
    english: "history",
  },
  {
    german: "Wirkung",
    english: "effect",
  },
  {
    german: "elektrisch",
    english: "electric",
  },
  {
    german: "erwarten",
    english: "expect",
  },
  {
    german: "Knochen",
    english: "bone",
  },
  {
    german: "Schiene",
    english: "rail",
  },
  {
    german: "vorstellen",
    english: "imagine",
  },
  {
    german: "bieten",
    english: "provide",
  },
  {
    german: "zustimmen",
    english: "agree",
  },
  {
    german: "so",
    english: "thus",
  },
  {
    german: "sanft",
    english: "gentle",
  },
  {
    german: "Frau",
    english: "woman",
  },
  {
    german: "Kapitän",
    english: "captain",
  },
  {
    german: "erraten",
    english: "guess",
  },
  {
    german: "erforderlich",
    english: "necessary",
  },
  {
    german: "scharf",
    english: "sharp",
  },
  {
    german: "Flügel",
    english: "wing",
  },
  {
    german: "schaffen",
    english: "create",
  },
  {
    german: "Nachbar",
    english: "neighbor",
  },
  {
    german: "Wasch",
    english: "wash",
  },
  {
    german: "Fledermaus",
    english: "bat",
  },
  {
    german: "eher",
    english: "rather",
  },
  {
    german: "Menge",
    english: "crowd",
  },
  {
    german: "mais",
    english: "corn",
  },
  {
    german: "vergleichen",
    english: "compare",
  },
  {
    german: "Gedicht",
    english: "poem",
  },
  {
    german: "Schnur",
    english: "string",
  },
  {
    german: "Glocke",
    english: "bell",
  },
  {
    german: "abhängen",
    english: "depend",
  },
  {
    german: "Fleisch",
    english: "meat",
  },
  {
    german: "einreiben",
    english: "rub",
  },
  {
    german: "Rohr",
    english: "tube",
  },
  {
    german: "berühmt",
    english: "famous",
  },
  {
    german: "Dollar",
    english: "dollar",
  },
  {
    german: "Strom",
    english: "stream",
  },
  {
    german: "Angst",
    english: "fear",
  },
  {
    german: "Blick",
    english: "sight",
  },
  {
    german: "dünn",
    english: "thin",
  },
  {
    german: "Dreieck",
    english: "triangle",
  },
  {
    german: "Erde",
    english: "planet",
  },
  {
    german: "Eile",
    english: "hurry",
  },
  {
    german: "Chef",
    english: "chief",
  },
  {
    german: "Kolonie",
    english: "colony",
  },
  {
    german: "Uhr",
    english: "clock",
  },
  {
    german: "Mine",
    english: "mine",
  },
  {
    german: "Krawatte",
    english: "tie",
  },
  {
    german: "eingeben",
    english: "enter",
  },
  {
    german: "Dur",
    english: "major",
  },
  {
    german: "frisch",
    english: "fresh",
  },
  {
    german: "Suche",
    english: "search",
  },
  {
    german: "senden",
    english: "send",
  },
  {
    german: "gelb",
    english: "yellow",
  },
  {
    german: "Pistole",
    english: "gun",
  },
  {
    german: "erlauben",
    english: "allow",
  },
  {
    german: "Druck",
    english: "print",
  },
  {
    german: "tot",
    english: "dead",
  },
  {
    german: "Stelle",
    english: "spot",
  },
  {
    german: "Wüste",
    english: "desert",
  },
  {
    german: "Anzug",
    english: "suit",
  },
  {
    german: "Strom",
    english: "current",
  },
  {
    german: "Aufzug",
    english: "lift",
  },
  {
    german: "stiegen",
    english: "rose",
  },
  {
    german: "ankommen",
    english: "arrive",
  },
  {
    german: "Stamm",
    english: "master",
  },
  {
    german: "Spur",
    english: "track",
  },
  {
    german: "Elternteil",
    english: "parent",
  },
  {
    german: "Ufer",
    english: "shore",
  },
  {
    german: "Teilung",
    english: "division",
  },
  {
    german: "Blatt",
    english: "sheet",
  },
  {
    german: "Substanz",
    english: "substance",
  },
  {
    german: "begünstigen",
    english: "favor",
  },
  {
    german: "verbinden",
    english: "connect",
  },
  {
    german: "nach",
    english: "post",
  },
  {
    german: "verbringen",
    english: "spend",
  },
  {
    german: "Akkord",
    english: "chord",
  },
  {
    german: "Fett",
    english: "fat",
  },
  {
    german: "froh",
    english: "glad",
  },
  {
    german: "Original",
    english: "original",
  },
  {
    german: "Aktie",
    english: "share",
  },
  {
    german: "Station",
    english: "station",
  },
  {
    german: "Papa",
    english: "dad",
  },
  {
    german: "Brot",
    english: "bread",
  },
  {
    german: "aufladen",
    english: "charge",
  },
  {
    german: "richtig",
    english: "proper",
  },
  {
    german: "Leiste",
    english: "bar",
  },
  {
    german: "Angebot",
    english: "offer",
  },
  {
    german: "Segment",
    english: "segment",
  },
  {
    german: "Sklave",
    english: "slave",
  },
  {
    german: "ente",
    english: "duck",
  },
  {
    german: "Augenblick",
    english: "instant",
  },
  {
    german: "Markt",
    english: "market",
  },
  {
    german: "Grad",
    english: "degree",
  },
  {
    german: "besiedeln",
    english: "populate",
  },
  {
    german: "küken",
    english: "chick",
  },
  {
    german: "liebe",
    english: "dear",
  },
  {
    german: "Feind",
    english: "enemy",
  },
  {
    german: "antworten",
    english: "reply",
  },
  {
    german: "Getränk",
    english: "drink",
  },
  {
    german: "auftreten",
    english: "occur",
  },
  {
    german: "Unterstützung",
    english: "support",
  },
  {
    german: "Rede",
    english: "speech",
  },
  {
    german: "Natur",
    english: "nature",
  },
  {
    german: "Angebot",
    english: "range",
  },
  {
    german: "Dampf",
    english: "steam",
  },
  {
    german: "Bewegung",
    english: "motion",
  },
  {
    german: "Weg",
    english: "path",
  },
  {
    german: "Flüssigkeit",
    english: "liquid",
  },
  {
    german: "protokollieren",
    english: "log",
  },
  {
    german: "gemeint",
    english: "meant",
  },
  {
    german: "Quotient",
    english: "quotient",
  },
  {
    german: "Gebiss",
    english: "teeth",
  },
  {
    german: "Schale",
    english: "shell",
  },
  {
    german: "Hals",
    english: "neck",
  },
  {
    german: "Sauerstoff",
    english: "oxygen",
  },
  {
    german: "Zucker",
    english: "sugar",
  },
  {
    german: "Tod",
    english: "death",
  },
  {
    german: "ziemlich",
    english: "pretty",
  },
  {
    german: "Geschicklichkeit",
    english: "skill",
  },
  {
    german: "Frauen",
    english: "women",
  },
  {
    german: "Saison",
    english: "season",
  },
  {
    german: "Lösung",
    english: "solution",
  },
  {
    german: "Magnet",
    english: "magnet",
  },
  {
    german: "Silber",
    english: "silver",
  },
  {
    german: "danken",
    english: "thank",
  },
  {
    german: "Zweig",
    english: "branch",
  },
  {
    german: "Spiel",
    english: "match",
  },
  {
    german: "Suffix",
    english: "suffix",
  },
  {
    german: "insbesondere",
    english: "especially",
  },
  {
    german: "Feige",
    english: "fig",
  },
  {
    german: "ängstlich",
    english: "afraid",
  },
  {
    german: "riesig",
    english: "huge",
  },
  {
    german: "Schwester",
    english: "sister",
  },
  {
    german: "Stahl",
    english: "steel",
  },
  {
    german: "diskutieren",
    english: "discuss",
  },
  {
    german: "vorwärts",
    english: "forward",
  },
  {
    german: "ähnlich",
    english: "similar",
  },
  {
    german: "führen",
    english: "guide",
  },
  {
    german: "Erfahrung",
    english: "experience",
  },
  {
    german: "Partitur",
    english: "score",
  },
  {
    german: "apfel",
    english: "apple",
  },
  {
    german: "gekauft",
    english: "bought",
  },
  {
    german: "geführt",
    english: "led",
  },
  {
    german: "Tonhöhe",
    english: "pitch",
  },
  {
    german: "Mantel",
    english: "coat",
  },
  {
    german: "Masse",
    english: "mass",
  },
  {
    german: "Karte",
    english: "card",
  },
  {
    german: "Band",
    english: "band",
  },
  {
    german: "Seil",
    english: "rope",
  },
  {
    german: "Rutsch",
    english: "slip",
  },
  {
    german: "gewinnen",
    english: "win",
  },
  {
    german: "träumen",
    english: "dream",
  },
  {
    german: "Abend",
    english: "evening",
  },
  {
    german: "Zustand",
    english: "condition",
  },
  {
    german: "Futtermittel",
    english: "feed",
  },
  {
    german: "Werkzeug",
    english: "tool",
  },
  {
    german: "gesamt",
    english: "total",
  },
  {
    german: "Basis",
    english: "basic",
  },
  {
    german: "Geruch",
    english: "smell",
  },
  {
    german: "Tal",
    english: "valley",
  },
  {
    german: "noch",
    english: "nor",
  },
  {
    german: "doppelt",
    english: "double",
  },
  {
    german: "Sitz",
    english: "seat",
  },
  {
    german: "fortsetzen",
    english: "continue",
  },
  {
    german: "Block",
    english: "block",
  },
  {
    german: "Tabelle",
    english: "chart",
  },
  {
    german: "Hut",
    english: "hat",
  },
  {
    german: "verkaufen",
    english: "sell",
  },
  {
    german: "Erfolg",
    english: "success",
  },
  {
    german: "Firma",
    english: "company",
  },
  {
    german: "subtrahieren",
    english: "subtract",
  },
  {
    german: "Veranstaltung",
    english: "event",
  },
  {
    german: "besondere",
    english: "particular",
  },
  {
    german: "viel",
    english: "deal",
  },
  {
    german: "schwimmen",
    english: "swim",
  },
  {
    german: "Begriff",
    english: "term",
  },
  {
    german: "Gegenteil",
    english: "opposite",
  },
  {
    german: "Frau",
    english: "wife",
  },
  {
    german: "Schuh",
    english: "shoe",
  },
  {
    german: "Schulter",
    english: "shoulder",
  },
  {
    german: "Verbreitung",
    english: "spread",
  },
  {
    german: "arrangieren",
    english: "arrange",
  },
  {
    german: "Lager",
    english: "camp",
  },
  {
    german: "erfinden",
    english: "invent",
  },
  {
    german: "Baumwolle",
    english: "cotton",
  },
  {
    german: "geboren",
    english: "born",
  },
  {
    german: "bestimmen",
    english: "determine",
  },
  {
    german: "Quart",
    english: "quart",
  },
  {
    german: "neun",
    english: "nine",
  },
  {
    german: "Lastwagen",
    english: "truck",
  },
  {
    german: "Lärm",
    english: "noise",
  },
  {
    german: "Ebene",
    english: "level",
  },
  {
    german: "Chance",
    english: "chance",
  },
  {
    german: "sammeln",
    english: "gather",
  },
  {
    german: "Geschäft",
    english: "shop",
  },
  {
    german: "Stretch",
    english: "stretch",
  },
  {
    german: "werfen",
    english: "throw",
  },
  {
    german: "Glanz",
    english: "shine",
  },
  {
    german: "Immobilien",
    english: "property",
  },
  {
    german: "Spalte",
    english: "column",
  },
  {
    german: "Molekül",
    english: "molecule",
  },
  {
    german: "wählen",
    english: "select",
  },
  {
    german: "falsch",
    english: "wrong",
  },
  {
    german: "grau",
    english: "gray",
  },
  {
    german: "Wiederholung",
    english: "repeat",
  },
  {
    german: "erfordern",
    english: "require",
  },
  {
    german: "breit",
    english: "broad",
  },
  {
    german: "vorbereiten",
    english: "prepare",
  },
  {
    german: "Salz",
    english: "salt",
  },
  {
    german: "Nase",
    english: "nose",
  },
  {
    german: "mehreren",
    english: "plural",
  },
  {
    german: "Zorn",
    english: "anger",
  },
  {
    german: "Anspruch",
    english: "claim",
  },
  {
    german: "Kontinent",
    english: "continent",
  },
];

const vocabulary10Words = [
  {
    german: "ab",
    english: "from (e.g. time)",
    "": "",
  },
  {
    german: "ab und zu",
    english: "now and again",
    "": "",
  },
  {
    german: "Abend (abends)",
    english: "(in the) evening",
    "": "",
  },
  {
    german: "als/ wenn",
    english: "when (conj)",
    "": "",
  },
  {
    german: "bald (bis bald)",
    english: "soon (see you…soon!)",
    "": "",
  },
  {
    german: "bevor",
    english: "before",
    "": "",
  },
  {
    german: "damals",
    english: "then (= at that time)",
    "": "",
  },
  {
    german: "dann",
    english: "then (= at that time)",
    "": "",
  },
  {
    german: "endlich / zuletzt",
    english: "finally / at last",
    "": "",
  },
  {
    german: "erst (um)",
    english: "not until",
    "": "",
  },
  {
    german: "früh (früher)",
    english: "early (previously)",
    "": "",
  },
  {
    german: "gestern",
    english: "yesterday",
    "": "",
  },
  {
    german: "gewöhnlich",
    english: "usually",
    "": "",
  },
  {
    german: "heute",
    english: "today",
    "": "",
  },
  {
    german: "immer (noch)",
    english: "always (still)",
    "": "",
  },
  {
    german: "manchmal",
    english: "sometime(s)",
    "": "",
  },
  {
    german: "Mittag (mittags)",
    english: "midday (at midday)",
    "": "",
  },
  {
    german: "Mitte (mitten in)",
    english: "middle (in the middle of)",
    "": "",
  },
  {
    german: "Mitternacht",
    english: "midnight",
    "": "",
  },
  {
    german: "Monat (monatlich)",
    english: "month(ly)",
    "": "",
  },
  {
    german: "morgen",
    english: "tomorrow",
    "": "",
  },
  {
    german: "Morgen (morgens)",
    english: "(in the) morning",
    "": "",
  },
  {
    german: "nachdem",
    english: "after",
    "": "",
  },
  {
    german: "nachher",
    english: "afterwards",
    "": "",
  },
  {
    german: "Nachmittag (nachmittags)",
    english: "(in the) afternoon",
    "": "",
  },
  {
    german: "nächst",
    english: "following/next (e.g.day/week)",
    "": "",
  },
  {
    german: "neulich",
    english: "recently",
    "": "",
  },
  {
    german: "nicht mehr",
    english: "no longer",
    "": "",
  },
  {
    german: "nie",
    english: "never",
    "": "",
  },
  {
    german: "noch",
    english: "still (=even now)",
    "": "",
  },
  {
    german: "noch nicht",
    english: "not yet",
    "": "",
  },
  {
    german: "plötzlich",
    english: "suddenly",
    "": "",
  },
  {
    german: "schon",
    english: "already",
    "": "",
  },
  {
    german: "sobald",
    english: "as soon as",
    "": "",
  },
  {
    german: "sofort",
    english: "immediately",
    "": "",
  },
  {
    german: "täglich",
    english: "daily",
    "": "",
  },
  {
    german: "übermorgen",
    english: "day after tomorrow",
    "": "",
  },
  {
    german: "vorgestern",
    english: "day before yesterday",
    "": "",
  },
  {
    german: "vorher",
    english: "beforehand/ previously",
    "": "",
  },
  {
    german: "Vormittag (vormittags)",
    english: "morning (in the morning)",
    "": "",
  },
  {
    german: "zuerst",
    english: "at first",
    "": "",
  },
  {
    german: "aber",
    english: "but / however",
    "": "",
  },
  {
    german: "alle",
    english: "all / everyone",
    "": "",
  },
  {
    german: "allein",
    english: "alone",
    "": "",
  },
  {
    german: "also / so",
    english: "therefore / so",
    "": "",
  },
  {
    german: "andere",
    english: "other",
    "": "",
  },
  {
    german: "anderthalb",
    english: "one and a half",
    "": "",
  },
  {
    german: "anfangen",
    english: "to begin/ start",
    "": "",
  },
  {
    german: "Antwort",
    english: "answer",
    "": "",
  },
  {
    german: "antworten",
    english: "to answer",
    "": "",
  },
  {
    german: "Art",
    english: "sort / kind",
    "": "",
  },
  {
    german: "auch",
    english: "also",
    "": "",
  },
  {
    german: "Auf Wiedersehen",
    english: "good-bye!",
    "": "",
  },
  {
    german: "Augenblick",
    english: "moment",
    "": "",
  },
  {
    german: "ausgezeichnet",
    english: "excellent",
    "": "",
  },
  {
    german: "außer",
    english: "except for",
    "": "",
  },
  {
    german: "befriedigend",
    english: "satisfactory",
    "": "",
  },
  {
    german: "beginnen",
    english: "to begin/start",
    "": "",
  },
  {
    german: "begrüßen",
    english: "to greet",
    "": "",
  },
  {
    german: "behalten",
    english: "to keep",
    "": "",
  },
  {
    german: "behandeln",
    english: "to treat",
    "": "",
  },
  {
    german: "Behandlung",
    english: "treatment",
    "": "",
  },
  {
    german: "beide",
    english: "both",
    "": "",
  },
  {
    german: "Beispiel",
    english: "example",
    "": "",
  },
  {
    german: "bekommen",
    english: "to receive",
    "": "",
  },
  {
    german: "beliebt",
    english: "popular",
    "": "",
  },
  {
    german: "bemerken",
    english: "to notice",
    "": "",
  },
  {
    german: "benutzen",
    english: "to use",
    "": "",
  },
  {
    german: "bequem",
    english: "comfortable",
    "": "",
  },
  {
    german: "besitzen",
    english: "to own",
    "": "",
  },
  {
    german: "besonders",
    english: "particular(ly)",
    "": "",
  },
  {
    german: "besser",
    english: "better",
    "": "",
  },
  {
    german: "besprechen",
    english: "to discuss",
    "": "",
  },
  {
    german: "bestimmt",
    english: "definitely",
    "": "",
  },
  {
    german: "bestrafen",
    english: "to punish",
    "": "",
  },
  {
    german: "besuchen",
    english: "to visit",
    "": "",
  },
  {
    german: "bieten / anbieten",
    english: "to offer",
    "": "",
  },
  {
    german: "billig",
    english: "cheap",
    "": "",
  },
  {
    german: "bisschen (ein)",
    english: "a little",
    "": "",
  },
  {
    german: "bitte",
    english: "please",
    "": "",
  },
  {
    german: "brauchen",
    english: "to need",
    "": "",
  },
  {
    german: "brechen",
    english: "to break",
    "": "",
  },
  {
    german: "breit",
    english: "wide",
    "": "",
  },
  {
    german: "bringen",
    english: "to bring",
    "": "",
  },
  {
    german: "danke(n)",
    english: "thank you (to thank)",
    "": "",
  },
  {
    german: "dass",
    english: "that",
    "": "",
  },
  {
    german: "Datum",
    english: "date",
    "": "",
  },
  {
    german: "dauern",
    english: "to last",
    "": "",
  },
  {
    german: "denken",
    english: "to think",
    "": "",
  },
  {
    german: "dies",
    english: "this",
    "": "",
  },
  {
    german: "Ding",
    english: "thing",
    "": "",
  },
  {
    german: "doch",
    english: "yes (contradicting)",
    "": "",
  },
  {
    german: "drücken",
    english: "to press / push",
    "": "",
  },
  {
    german: "dürfen",
    english: "to be allowed to / “may”",
    "": "",
  },
  {
    german: "eben",
    english: "just",
    "": "",
  },
  {
    german: "ebenso",
    english: "just as",
    "": "",
  },
  {
    german: "egal (das ist mir egal)",
    english: "(I don’t care!)",
    "": "",
  },
  {
    german: "ehemalig",
    english: "former / previous",
    "": "",
  },
  {
    german: "eigen",
    english: "own",
    "": "",
  },
  {
    german: "eilen (sich beeilen)",
    english: "to hurry (up)",
    "": "",
  },
  {
    german: "einander",
    english: "one another/ each other",
    "": "",
  },
  {
    german: "einige",
    english: "some / a few",
    "": "",
  },
  {
    german: "einmal (noch einmal)",
    english: "once (more)",
    "": "",
  },
  {
    german: "einverstanden",
    english: "agreed",
    "": "",
  },
  {
    german: "Ende",
    english: "end / finish",
    "": "",
  },
  {
    german: "eng",
    english: "narrow / tight",
    "": "",
  },
  {
    german: "entfernt",
    english: "away / distant",
    "": "",
  },
  {
    german: "entschuldigen Sie! (sich entschuldigen)",
    english: "excuse me! (to apologise)",
    "": "",
  },
  {
    german: "Entschuldigung!",
    english: "sorry!",
    "": "",
  },
  {
    german: "entweder … oder",
    english: "either … or",
    "": "",
  },
  {
    german: "erinnern (sich)",
    english: "to remind (remember)",
    "": "",
  },
  {
    german: "erkennen",
    english: "to recognise",
    "": "",
  },
  {
    german: "erzählen (Erzählung)",
    english: "to tell / recount (story)",
    "": "",
  },
  {
    german: "es gibt",
    english: "there is / are",
    "": "",
  },
  {
    german: "es macht nichts",
    english: "it doesn't matter",
    "": "",
  },
  {
    german: "etwa / ungefähr",
    english: "about / roughly / approximately",
    "": "",
  },
  {
    german: "fallen (lassen)",
    english: "to fall (to drop)",
    "": "",
  },
  {
    german: "falsch",
    english: "wrong",
    "": "",
  },
  {
    german: "fast",
    english: "almost",
    "": "",
  },
  {
    german: "fehlen",
    english: "to be missing",
    "": "",
  },
  {
    german: "Fehler",
    english: "mistake",
    "": "",
  },
  {
    german: "fertig",
    english: "ready / finished",
    "": "",
  },
  {
    german: "finden",
    english: "to find",
    "": "",
  },
  {
    german: "folgen",
    english: "to follow",
    "": "",
  },
  {
    german: "Frage (eine Frage stellen)",
    english: "question (to ask a question)",
    "": "",
  },
  {
    german: "fragen",
    english: "to ask",
    "": "",
  },
  {
    german: "gar nicht",
    english: "not at all",
    "": "",
  },
  {
    german: "geben (es gibt)",
    english: "to give (there is)",
    "": "",
  },
  {
    german: "genau",
    english: "exactly",
    "": "",
  },
  {
    german: "genug",
    english: "enough",
    "": "",
  },
  {
    german: "gern",
    english: "glad(ly)",
    "": "",
  },
  {
    german: "geschlossen",
    english: "closed",
    "": "",
  },
  {
    german: "getrennt",
    english: "separate(ly)",
    "": "",
  },
  {
    german: "glauben",
    english: "to think / believe",
    "": "",
  },
  {
    german: "gleich (der/das/die gleiche)",
    english: "immediately (the same)",
    "": "",
  },
  {
    german: "glücklich (Glück)",
    english: "happy (good luck)",
    "": "",
  },
  {
    german: "Gott",
    english: "God",
    "": "",
  },
  {
    german: "gratulieren",
    english: "to congratulate",
    "": "",
  },
  {
    german: "Grund",
    english: "ground / reason",
    "": "",
  },
  {
    german: "Gruss",
    english: "greeting",
    "": "",
  },
  {
    german: "günstig",
    english: "favourable",
    "": "",
  },
  {
    german: "gut",
    english: "good",
    "": "",
  },
  {
    german: "guten Tag",
    english: "hello",
    "": "",
  },
  {
    german: "haben",
    english: "to have",
    "": "",
  },
  {
    german: "halb",
    english: "half",
    "": "",
  },
  {
    german: "Hälfte",
    english: "a half",
    "": "",
  },
  {
    german: "halten",
    english: "to hold / to stop (moving)",
    "": "",
  },
  {
    german: "hier",
    english: "here",
    "": "",
  },
  {
    german: "hochachtungsvoll",
    english: "yours faithfully",
    "": "",
  },
  {
    german: "hoffen",
    english: "to hope",
    "": "",
  },
  {
    german: "Idee",
    english: "idea",
    "": "",
  },
  {
    german: "in Ordnung / klar!",
    english: "O.K.!",
    "": "",
  },
  {
    german: "inbegriffen",
    english: "included",
    "": "",
  },
  {
    german: "irgendwo",
    english: "somewhere (or other)",
    "": "",
  },
  {
    german: "jemand",
    english: "someone/ somebody",
    "": "",
  },
  {
    german: "jener",
    english: "that",
    "": "",
  },
  {
    german: "jetzt",
    english: "now",
    "": "",
  },
  {
    german: "kaputt",
    english: "broken",
    "": "",
  },
  {
    german: "kein",
    english: "no (= not any)",
    "": "",
  },
  {
    german: "klar",
    english: "clear",
    "": "",
  },
  {
    german: "können",
    english: '"to be able to/ ""can"""',
    "": "",
  },
  {
    german: "kriegen",
    english: "to get",
    "": "",
  },
  {
    german: "lang",
    english: "long",
    "": "",
  },
  {
    german: "lange",
    english: "long (e.g. a long time)",
    "": "",
  },
  {
    german: "langsam",
    english: "slow",
    "": "",
  },
  {
    german: "lassen",
    english: "to let / leave (s.th)",
    "": "",
  },
  {
    german: "leider",
    english: "unfortunately",
    "": "",
  },
  {
    german: "leid tun (es tut mir leid)",
    english: "to feel sorry for (I’m sorry)",
    "": "",
  },
  {
    german: "leihen (sich)",
    english: "to lend (to borrow)",
    "": "",
  },
  {
    german: "letzt",
    english: "last (adj)",
    "": "",
  },
  {
    german: "machen",
    english: "to do / make",
    "": "",
  },
  {
    german: "mal e.g. zweimal",
    english: "times e.g. twice",
    "": "",
  },
  {
    german: "mäßig",
    english: "moderate",
    "": "",
  },
  {
    german: "mehr",
    english: "more",
    "": "",
  },
  {
    german: "mehrere",
    english: "several",
    "": "",
  },
  {
    german: "Meinung",
    english: "opinion",
    "": "",
  },
  {
    german: "mit freundlichen Grüßen",
    english: "yours sincerely",
    "": "",
  },
  {
    german: "mögen",
    english: "to like (to)",
    "": "",
  },
  {
    german: "möglich",
    english: "possible",
    "": "",
  },
  {
    german: "müssen",
    english: '"to have to / ""must"""',
    "": "",
  },
  {
    german: "natürlich",
    english: "of course",
    "": "",
  },
  {
    german: "nehmen",
    english: "to take",
    "": "",
  },
  {
    german: "nein",
    english: "no",
    "": "",
  },
  {
    german: "neu",
    english: "new",
    "": "",
  },
  {
    german: "nicht",
    english: "not",
    "": "",
  },
  {
    german: "nichts",
    english: "nothing",
    "": "",
  },
  {
    german: "niemand",
    english: "no-one / nobody",
    "": "",
  },
  {
    german: "Nummer",
    english: "number",
    "": "",
  },
  {
    german: "nur",
    english: "only",
    "": "",
  },
  {
    german: "oder",
    english: "or",
    "": "",
  },
  {
    german: "offen",
    english: "open",
    "": "",
  },
  {
    german: "öffnen",
    english: "to open",
    "": "",
  },
  {
    german: "oft",
    english: "often",
    "": "",
  },
  {
    german: "ohne",
    english: "without",
    "": "",
  },
  {
    german: "prima!",
    english: "great! / cool!",
    "": "",
  },
  {
    german: "pro",
    english: "per",
    "": "",
  },
  {
    german: "Prost!",
    english: "Cheers!",
    "": "",
  },
  {
    german: "Prozent",
    english: "per cent",
    "": "",
  },
  {
    german: "Qualität",
    english: "quality",
    "": "",
  },
  {
    german: "Quatsch",
    english: "nonsense",
    "": "",
  },
  {
    german: "rufen",
    english: "to call / shout",
    "": "",
  },
  {
    german: "ruhig (Ruhe)",
    english: "quiet (rest / quiet)",
    "": "",
  },
  {
    german: "rund",
    english: "round (=shape)",
    "": "",
  },
  {
    german: "sagen",
    english: "to say / tell",
    "": "",
  },
  {
    german: "Schade!",
    english: "a pity!",
    "": "",
  },
  {
    german: "schlecht",
    english: "bad",
    "": "",
  },
  {
    german: "schließen (abschließen)",
    english: "to close (lock)",
    "": "",
  },
  {
    german: "schließlich",
    english: "finally",
    "": "",
  },
  {
    german: "schlimm",
    english: "bad",
    "": "",
  },
  {
    german: "schrecklich",
    english: "terrible",
    "": "",
  },
  {
    german: "schreien",
    english: "to shout/ scream",
    "": "",
  },
  {
    german: "sehr",
    english: "very",
    "": "",
  },
  {
    german: "sein",
    english: "to be",
    "": "",
  },
  {
    german: "seitdem",
    english: "since",
    "": "",
  },
  {
    german: "Sekunde",
    english: "second",
    "": "",
  },
  {
    german: "selbe (der/das/dieselbe)",
    english: "same",
    "": "",
  },
  {
    german: "sicher",
    english: "certain(ly) / sure(ly)",
    "": "",
  },
  {
    german: "sogar",
    english: "even",
    "": "",
  },
  {
    german: '"sollen (""sollte"")"',
    english: "(ought to / should)",
    "": "",
  },
  {
    german: "sonst",
    english: "otherwise",
    "": "",
  },
  {
    german: "sowohl ... als auch",
    english: "both ... and",
    "": "",
  },
  {
    german: "toll!",
    english: "great! cool!",
    "": "",
  },
  {
    german: "Tschüs(s) !",
    english: "cheerio!/ bye!/ see you!",
    "": "",
  },
  {
    german: "tun",
    english: "to do",
    "": "",
  },
  {
    german: "überall",
    english: "everywhere",
    "": "",
  },
  {
    german: "Uhr",
    english: "clock / watch / o'clock",
    "": "",
  },
  {
    german: "um ... zu",
    english: "to (=in order to)",
    "": "",
  },
  {
    german: "und",
    english: "and",
    "": "",
  },
  {
    german: "unmöglich",
    english: "impossible",
    "": "",
  },
  {
    german: "verschieden",
    english: "different/ various",
    "": "",
  },
  {
    german: "Verzeihung!",
    english: "Sorry!",
    "": "",
  },
  {
    german: "viel",
    english: "a lot / much / many",
    "": "",
  },
  {
    german: "vielleicht",
    english: "perhaps",
    "": "",
  },
  {
    german: "Viertel",
    english: "a quarter",
    "": "",
  },
  {
    german: "voll",
    english: "full",
    "": "",
  },
  {
    german: "wahr (nicht wahr?)",
    english: "true (isn't it?)",
    "": "",
  },
  {
    german: "wechseln",
    english: "to change",
    "": "",
  },
  {
    german: "weil",
    english: "because",
    "": "",
  },
  {
    german: "Weise (auf diese Weise)",
    english: "way (in this way)",
    "": "",
  },
  {
    german: "wenig(er)",
    english: "little (less)",
    "": "",
  },
  {
    german: "wenigstens",
    english: "at least",
    "": "",
  },
  {
    german: "wenn",
    english: "when / if",
    "": "",
  },
  {
    german: "werden",
    english: "to become / get",
    "": "",
  },
  {
    german: "wichtig",
    english: "important",
    "": "",
  },
  {
    german: "wie",
    english: "as / like",
    "": "",
  },
  {
    german: "Wie bitte?",
    english: "pardon?",
    "": "",
  },
  {
    german: "Wie geht's?",
    english: "how are you?",
    "": "",
  },
  {
    german: "wieder",
    english: "again",
    "": "",
  },
  {
    german: "wiederholen",
    english: "to repeat",
    "": "",
  },
  {
    german: "willkommen",
    english: "welcome",
    "": "",
  },
  {
    german: "wirklich",
    english: "really",
    "": "",
  },
  {
    german: "wollen",
    english: "to want to",
    "": "",
  },
  {
    german: "wunderbar",
    english: "wonderful",
    "": "",
  },
  {
    german: "Wunsch",
    english: "wish",
    "": "",
  },
  {
    german: "wünschen",
    english: "to wish",
    "": "",
  },
  {
    german: "Zahl",
    english: "figure / number",
    "": "",
  },
  {
    german: "ziehen",
    english: "to pull",
    "": "",
  },
  {
    german: "Ziel",
    english: "aim",
    "": "",
  },
  {
    german: "ziemlich",
    english: "quite / fairly",
    "": "",
  },
  {
    german: "zu",
    english: "too (e.g. too old) / closed",
    "": "",
  },
  {
    german: "zufrieden",
    english: "contented",
    "": "",
  },
  {
    german: "zumachen",
    english: "to close",
    "": "",
  },
  {
    german: "zusammen",
    english: "together",
    "": "",
  },
  {
    german: "Absicht",
    english: "intention",
    "": "",
  },
  {
    german: "Achtung",
    english: "attention",
    "": "",
  },
  {
    german: "ähnlich",
    english: "similar",
    "": "",
  },
  {
    german: "ahnen",
    english: "to suspect",
    "": "",
  },
  {
    german: "Ahnung",
    english: "idea",
    "": "",
  },
  {
    german: "außer(dem)",
    english: "except (besides)",
    "": "",
  },
  {
    german: "äußerst",
    english: "extremely",
    "": "",
  },
  {
    german: "bedeuten",
    english: "to mean",
    "": "",
  },
  {
    german: "damit",
    english: "so that",
    "": "",
  },
  {
    german: "enttäuschen",
    english: "to disappoint",
    "": "",
  },
  {
    german: "enttäuscht",
    english: "disappointed",
    "": "",
  },
  {
    german: "erklären",
    english: "to explain",
    "": "",
  },
  {
    german: "erlauben",
    english: "to allow / permit",
    "": "",
  },
  {
    german: "es kommt darauf an",
    english: "to depend (it depends)",
    "": "",
  },
  {
    german: "fließend",
    english: "fluently",
    "": "",
  },
  {
    german: "Folge",
    english: "consequence",
    "": "",
  },
  {
    german: "gehören",
    english: "to belong to",
    "": "",
  },
  {
    german: "genügen",
    english: "to suffice",
    "": "",
  },
  {
    german: "geschehen",
    english: "to happen",
    "": "",
  },
  {
    german: "häufig",
    english: "frequently",
    "": "",
  },
  {
    german: "heutzutage",
    english: "nowadays",
    "": "",
  },
  {
    german: "höchstens",
    english: "at most",
    "": "",
  },
  {
    german: "im voraus",
    english: "in advance",
    "": "",
  },
  {
    german: "insgesamt",
    english: "altogether",
    "": "",
  },
  {
    german: "irren (sich)",
    english: "to be wrong",
    "": "",
  },
  {
    german: "kaum",
    english: "hardly / scarcely",
    "": "",
  },
  {
    german: "ob",
    english: "whether",
    "": "",
  },
  {
    german: "obgleich / obwohl",
    english: "although",
    "": "",
  },
  {
    german: "sobald",
    english: "as soon as",
    "": "",
  },
  {
    german: "statt",
    english: "instead of",
    "": "",
  },
  {
    german: "umsonst",
    english: "in vain / free",
    "": "",
  },
  {
    german: "völlig",
    english: "completely / fully",
    "": "",
  },
  {
    german: "vor allem",
    english: "above all",
    "": "",
  },
  {
    german: "vor kurzem",
    english: "recently / a short time ago",
    "": "",
  },
  {
    german: "Vorsicht (vorsichtig)",
    english: "careful(!)",
    "": "",
  },
  {
    german: "wagen",
    english: "to dare",
    "": "",
  },
  {
    german: "während",
    english: "while",
    "": "",
  },
  {
    german: "weder … noch",
    english: "neither ... nor",
    "": "",
  },
  {
    german: "wertvoll / wertlos",
    english: "valuable / worthless",
    "": "",
  },
  {
    german: "zusätzlich",
    english: "additional",
    "": "",
  },
  {
    german: "zwar",
    english: "indeed",
    "": "",
  },
  {
    german: "abtrocknen",
    english: "to dry up",
    "": "",
  },
  {
    german: "abwaschen",
    english: "to wash up",
    "": "",
  },
  {
    german: "anmachen",
    english: "to put on / turn on",
    "": "",
  },
  {
    german: "anziehen (sich)",
    english: "to put on (get dressed)",
    "": "",
  },
  {
    german: "aufstehen",
    english: "to get up / stand up",
    "": "",
  },
  {
    german: "aufwachen",
    english: "to wake up",
    "": "",
  },
  {
    german: "auskommen mit",
    english: "to get on with",
    "": "",
  },
  {
    german: "ausruhen (sich)",
    english: "to have a rest",
    "": "",
  },
  {
    german: "aussehen",
    english: "to look (appearance)",
    "": "",
  },
  {
    german: "ausziehen (sich)",
    english: "to get undressed",
    "": "",
  },
  {
    german: "backen",
    english: "to bake",
    "": "",
  },
  {
    german: "beschreiben",
    english: "to describe",
    "": "",
  },
  {
    german: "Buchstabe",
    english: "letter (=of alphabet)",
    "": "",
  },
  {
    german: "buchstabieren",
    english: "to spell",
    "": "",
  },
  {
    german: "bügeln (Bügeleisen)",
    english: "to iron (iron)",
    "": "",
  },
  {
    german: "bürsten",
    english: "to brush e.g.hair",
    "": "",
  },
  {
    german: "decken",
    english: "to lay e.g. table",
    "": "",
  },
  {
    german: "einschlafen",
    english: "to go to sleep",
    "": "",
  },
  {
    german: "hinlegen (sich)",
    english: "to lie down",
    "": "",
  },
  {
    german: "hinsetzen (sich)",
    english: "to sit down",
    "": "",
  },
  {
    german: "kehren",
    english: "to sweep",
    "": "",
  },
  {
    german: "leer",
    english: "empty",
    "": "",
  },
  {
    german: "leeren",
    english: "to empty",
    "": "",
  },
  {
    german: "legen",
    english: "to put (= to lay)",
    "": "",
  },
  {
    german: "Liebe",
    english: "love",
    "": "",
  },
  {
    german: "lieben",
    english: "to love",
    "": "",
  },
  {
    german: "liegen",
    english: "to lie (be lying down)",
    "": "",
  },
  {
    german: "mähen",
    english: "to mow",
    "": "",
  },
  {
    german: "organisieren",
    english: "to organise",
    "": "",
  },
  {
    german: "putzen",
    english: "to clean",
    "": "",
  },
  {
    german: "schlafen",
    english: "to sleep",
    "": "",
  },
  {
    german: "schneiden",
    english: "to cut",
    "": "",
  },
  {
    german: "sitzen (sich setzen)",
    english: "to sit (down)",
    "": "",
  },
  {
    german: "spülen (abspülen)",
    english: "to wash up",
    "": "",
  },
  {
    german: "Staub saugen",
    english: "to hoover / vacuum clean",
    "": "",
  },
  {
    german: "stecken",
    english: "to put (inside something)",
    "": "",
  },
  {
    german: "stehen",
    english: "to stand",
    "": "",
  },
  {
    german: "stellen",
    english: "to put / place (e.g. a vase)",
    "": "",
  },
  {
    german: "Teil",
    english: "part",
    "": "",
  },
  {
    german: "teilen",
    english: "to share",
    "": "",
  },
  {
    german: "trocken",
    english: "dry",
    "": "",
  },
  {
    german: "trocknen",
    english: "to dry",
    "": "",
  },
  {
    german: "umziehen (sich)",
    english: "to move house (to get changed)",
    "": "",
  },
  {
    german: "vorbereiten",
    english: "to prepare",
    "": "",
  },
  {
    german: "waschen (sich)",
    english: "to wash (o.s.)",
    "": "",
  },
  {
    german: "wecken",
    english: "to wake s.o.",
    "": "",
  },
  {
    german: "wiegen",
    english: "to weigh",
    "": "",
  },
  {
    german: "zunehmen",
    english: "to grow / get bigger / increase",
    "": "",
  },
  {
    german: "Adresse",
    english: "address",
    "": "",
  },
  {
    german: "Alter",
    english: "age",
    "": "",
  },
  {
    german: "Bart",
    english: "beard",
    "": "",
  },
  {
    german: "Brille",
    english: "glasses",
    "": "",
  },
  {
    german: "Familienname",
    english: "surname",
    "": "",
  },
  {
    german: "geboren",
    english: "born",
    "": "",
  },
  {
    german: "Geburts(tag / ort)",
    english: "birth(day / place of)",
    "": "",
  },
  {
    german: "Heimat",
    english: "home",
    "": "",
  },
  {
    german: "Heimfahrt / Heimweg",
    english: "home journey / way home",
    "": "",
  },
  {
    german: "heiraten",
    english: "to marry",
    "": "",
  },
  {
    german: "heißen",
    english: "to be called",
    "": "",
  },
  {
    german: "ledig",
    english: "single / unmarried",
    "": "",
  },
  {
    german: "Lieber / Liebe",
    english: "Dear (=letters)",
    "": "",
  },
  {
    german: "verheiratet",
    english: "married",
    "": "",
  },
  {
    german: "verlobt",
    english: "engaged",
    "": "",
  },
  {
    german: "versprechen",
    english: "to promise",
    "": "",
  },
  {
    german: "Vorname",
    english: "first name",
    "": "",
  },
  {
    german: "alt(modisch)",
    english: "old(fashioned)",
    "": "",
  },
  {
    german: "angenehm",
    english: "pleasant / enjoyable",
    "": "",
  },
  {
    german: "ängstlich",
    english: "anxious",
    "": "",
  },
  {
    german: "berühmt",
    english: "famous",
    "": "",
  },
  {
    german: "blöd / dumm",
    english: "stupid",
    "": "",
  },
  {
    german: "böse",
    english: "angry",
    "": "",
  },
  {
    german: "dick",
    english: "fat / thick",
    "": "",
  },
  {
    german: "doof",
    english: "stupid",
    "": "",
  },
  {
    german: "ehrlich",
    english: "honest",
    "": "",
  },
  {
    german: "ernst",
    english: "serious",
    "": "",
  },
  {
    german: "fleißig",
    english: "hard working",
    "": "",
  },
  {
    german: "frech",
    english: "cheeky",
    "": "",
  },
  {
    german: "Freude",
    english: "joy",
    "": "",
  },
  {
    german: "freundlich",
    english: "friendly",
    "": "",
  },
  {
    german: "furchtbar",
    english: "awful",
    "": "",
  },
  {
    german: "geduldig",
    english: "patient",
    "": "",
  },
  {
    german: "gefallen",
    english: "to like",
    "": "",
  },
  {
    german: "gemütlich",
    english: "cosy / cheery",
    "": "",
  },
  {
    german: "glatt (Glatteis)",
    english: "smooth / straight e.g.hair (black ice)",
    "": "",
  },
  {
    german: "groß",
    english: "tall",
    "": "",
  },
  {
    german: "Größe",
    english: "size / height (of people)",
    "": "",
  },
  {
    german: "hassen",
    english: "to hate",
    "": "",
  },
  {
    german: "hässlich",
    english: "ugly",
    "": "",
  },
  {
    german: "hilfsbereit / hilfreich",
    english: "helpful",
    "": "",
  },
  {
    german: "höflich",
    english: "polite",
    "": "",
  },
  {
    german: "hübsch",
    english: "pretty",
    "": "",
  },
  {
    german: "klein",
    english: "small / short",
    "": "",
  },
  {
    german: "klug",
    english: "clever",
    "": "",
  },
  {
    german: "komisch",
    english: "funny",
    "": "",
  },
  {
    german: "kurz",
    english: "short",
    "": "",
  },
  {
    german: "Laune (guter / schlechter)",
    english: "in a good / bad mood",
    "": "",
  },
  {
    german: "laut",
    english: "noisy / loud",
    "": "",
  },
  {
    german: "lockig",
    english: "curly",
    "": "",
  },
  {
    german: "lustig",
    english: "funny",
    "": "",
  },
  {
    german: "merkwürdig",
    english: "funny / strange",
    "": "",
  },
  {
    german: "mittelgroß / mittellang",
    english: "medium / average (=height/length)",
    "": "",
  },
  {
    german: "müde (ermüdend)",
    english: "tired (tiring)",
    "": "",
  },
  {
    german: "nervös",
    english: "nervous",
    "": "",
  },
  {
    german: "nett",
    english: "nice",
    "": "",
  },
  {
    german: "ordentlich",
    english: "tidy",
    "": "",
  },
  {
    german: "Pech",
    english: "luck (bad)",
    "": "",
  },
  {
    german: "reich",
    english: "rich",
    "": "",
  },
  {
    german: "sanft",
    english: "soft / gentle",
    "": "",
  },
  {
    german: "satt",
    english: "full up / fed up",
    "": "",
  },
  {
    german: "sauber",
    english: "clean",
    "": "",
  },
  {
    german: "scharf",
    english: "sharp",
    "": "",
  },
  {
    german: "schick",
    english: "smart (e.g. dress)",
    "": "",
  },
  {
    german: "schlank",
    english: "slim",
    "": "",
  },
  {
    german: "schmutzig",
    english: "dirty",
    "": "",
  },
  {
    german: "schüchtern",
    english: "shy",
    "": "",
  },
  {
    german: "stark",
    english: "strong",
    "": "",
  },
  {
    german: "streng",
    english: "strict",
    "": "",
  },
  {
    german: "tot",
    english: "dead",
    "": "",
  },
  {
    german: "traurig",
    english: "sad",
    "": "",
  },
  {
    german: "unordentlich",
    english: "untidy",
    "": "",
  },
  {
    german: "Unrecht haben",
    english: "to be wrong",
    "": "",
  },
  {
    german: "verstehen (sich)",
    english: "to understand (get on with)",
    "": "",
  },
  {
    german: "Anzug",
    english: "suit (men's)",
    "": "",
  },
  {
    german: "Armband(uhr)",
    english: "bracelet (wrist watch)",
    "": "",
  },
  {
    german: "BH / Büstenhalter",
    english: "bra",
    "": "",
  },
  {
    german: "Bluse",
    english: "blouse",
    "": "",
  },
  {
    german: "Gürtel",
    english: "belt",
    "": "",
  },
  {
    german: "Halskette",
    english: "necklace",
    "": "",
  },
  {
    german: "Handschuh",
    english: "glove",
    "": "",
  },
  {
    german: "Handtasche",
    english: "handbag",
    "": "",
  },
  {
    german: "Hemd",
    english: "shirt",
    "": "",
  },
  {
    german: "Hose",
    english: "trousers",
    "": "",
  },
  {
    german: "Hut",
    english: "hat",
    "": "",
  },
  {
    german: "Jacke",
    english: "jacket",
    "": "",
  },
  {
    german: "Kleid",
    english: "dress",
    "": "",
  },
  {
    german: "Kleider / Kleidung",
    english: "clothes / clothing",
    "": "",
  },
  {
    german: "Kostüm",
    english: "suit (women's)",
    "": "",
  },
  {
    german: "Krawatte / Schlips",
    english: "tie",
    "": "",
  },
  {
    german: "Lippe(nstift)",
    english: "lip(stick)",
    "": "",
  },
  {
    german: "Mantel",
    english: "coat",
    "": "",
  },
  {
    german: "Mode (modisch)",
    english: "fashion(able)",
    "": "",
  },
  {
    german: "Mütze",
    english: "cap",
    "": "",
  },
  {
    german: "Nacht(hemd)",
    english: "night (dress)",
    "": "",
  },
  {
    german: "Ohrringe",
    english: "earrings",
    "": "",
  },
  {
    german: "Parfüm",
    english: "perfume",
    "": "",
  },
  {
    german: "Pulli",
    english: "pullover",
    "": "",
  },
  {
    german: "Rock",
    english: "skirt",
    "": "",
  },
  {
    german: "Schal",
    english: "scarf",
    "": "",
  },
  {
    german: "Schlafanzug",
    english: "pyjamas",
    "": "",
  },
  {
    german: "Schuhe",
    english: "shoes",
    "": "",
  },
  {
    german: "Slip",
    english: "panties",
    "": "",
  },
  {
    german: "Socke",
    english: "sock",
    "": "",
  },
  {
    german: "Stiefel",
    english: "boot",
    "": "",
  },
  {
    german: "Strumpfhose",
    english: "tights",
    "": "",
  },
  {
    german: "Tasche (Einkaufstasche)",
    english: "pocket / bag (shopping bag)",
    "": "",
  },
  {
    german: "tragen",
    english: "to carry / wear",
    "": "",
  },
  {
    german: "Trainingsanzug",
    english: "tracksuit",
    "": "",
  },
  {
    german: "Turnschuhe",
    english: "trainers",
    "": "",
  },
  {
    german: "Unterhose",
    english: "underpants",
    "": "",
  },
  {
    german: "Unterwäsche",
    english: "underwear",
    "": "",
  },
  {
    german: "Arbeitszimmer",
    english: "workspace",
    "": "",
  },
  {
    german: "Backofen",
    english: "oven",
    "": "",
  },
  {
    german: "Badewanne",
    english: "bath (tub)",
    "": "",
  },
  {
    german: "Badezimmer",
    english: "bathroom",
    "": "",
  },
  {
    german: "Bücherregal",
    english: "book case",
    "": "",
  },
  {
    german: "Bude",
    english: "stall / stand/ room",
    "": "",
  },
  {
    german: "Decke",
    english: "blanket / ceiling",
    "": "",
  },
  {
    german: "Diele",
    english: "hall (=entrance to house)",
    "": "",
  },
  {
    german: "Doppelhaus",
    english: "semi-detached house",
    "": "",
  },
  {
    german: "Dusche",
    english: "shower",
    "": "",
  },
  {
    german: "duschen",
    english: "to have a shower",
    "": "",
  },
  {
    german: "Einfamilienhaus",
    english: "detached house",
    "": "",
  },
  {
    german: "Elektroherd",
    english: "electric cooker",
    "": "",
  },
  {
    german: "Erdgeschoss",
    english: "ground floor",
    "": "",
  },
  {
    german: "Esszimmer",
    english: "dining room",
    "": "",
  },
  {
    german: "Etagenbett",
    english: "bunk bed",
    "": "",
  },
  {
    german: "Fenster",
    english: "window",
    "": "",
  },
  {
    german: "Flur",
    english: "hall",
    "": "",
  },
  {
    german: "Fußboden",
    english: "floor",
    "": "",
  },
  {
    german: "Gardine",
    english: "curtain",
    "": "",
  },
  {
    german: "Garten",
    english: "garden",
    "": "",
  },
  {
    german: "Gasherd",
    english: "gas cooker",
    "": "",
  },
  {
    german: "Haarbürste",
    english: "hairbrush",
    "": "",
  },
  {
    german: "Handtuch (Badetuch)",
    english: "towel (bath towel)",
    "": "",
  },
  {
    german: "Heizkörper",
    english: "radiator",
    "": "",
  },
  {
    german: "Heizung (Zentralheizung)",
    english: "heating (central)",
    "": "",
  },
  {
    german: "Kamm",
    english: "comb",
    "": "",
  },
  {
    german: "kämmen",
    english: "to comb (hair)",
    "": "",
  },
  {
    german: "Keller",
    english: "cellar",
    "": "",
  },
  {
    german: "Kissen",
    english: "cushion",
    "": "",
  },
  {
    german: "Kleiderschrank",
    english: "wardrobe",
    "": "",
  },
  {
    german: "Klingel",
    english: "(door) bell",
    "": "",
  },
  {
    german: "Klo",
    english: "loo",
    "": "",
  },
  {
    german: "Knopf",
    english: "button",
    "": "",
  },
  {
    german: "Kommode",
    english: "chest of drawers",
    "": "",
  },
  {
    german: "Kühlschrank",
    english: "fridge",
    "": "",
  },
  {
    german: "Lampe",
    english: "lamp",
    "": "",
  },
  {
    german: "Licht",
    english: "light",
    "": "",
  },
  {
    german: "Mikrowellenherd",
    english: "microwave",
    "": "",
  },
  {
    german: "Möbel",
    english: "furniture",
    "": "",
  },
  {
    german: "möbliert",
    english: "furnished",
    "": "",
  },
  {
    german: "oben",
    english: "at the top / upstairs",
    "": "",
  },
  {
    german: "Pflanze",
    english: "plant",
    "": "",
  },
  {
    german: "Rasen",
    english: "lawn",
    "": "",
  },
  {
    german: "Regal",
    english: "shelf",
    "": "",
  },
  {
    german: "Reihe",
    english: "row (e.g. of seats etc)",
    "": "",
  },
  {
    german: "Reihenhaus",
    english: "terraced house",
    "": "",
  },
  {
    german: "Schlafzimmer (Schlafraum)",
    english: "bedroom (dormitory)",
    "": "",
  },
  {
    german: "Schlüssel(bund)",
    english: "key (ring)",
    "": "",
  },
  {
    german: "Schrank",
    english: "cupboard",
    "": "",
  },
  {
    german: "Seife",
    english: "soap",
    "": "",
  },
  {
    german: "Sessel",
    english: "armchair",
    "": "",
  },
  {
    german: "Sofa",
    english: "sofa / settee",
    "": "",
  },
  {
    german: "Spülbecken",
    english: "sink",
    "": "",
  },
  {
    german: "Spülmaschine",
    english: "dishwasher",
    "": "",
  },
  {
    german: "Steppdecke",
    english: "duvet",
    "": "",
  },
  {
    german: "Stereoanlage",
    english: "stereo system",
    "": "",
  },
  {
    german: "Stock (im ersten Stock)",
    english: "floor (e.g. on the 1st floor)",
    "": "",
  },
  {
    german: "Stufe",
    english: "step/ stair",
    "": "",
  },
  {
    german: "Stuhl",
    english: "chair",
    "": "",
  },
  {
    german: "Tablett",
    english: "tray",
    "": "",
  },
  {
    german: "Tapete",
    english: "wallpaper",
    "": "",
  },
  {
    german: "Teppich",
    english: "carpet",
    "": "",
  },
  {
    german: "Terasse",
    english: "terrace / patio",
    "": "",
  },
  {
    german: "tief",
    english: "deep",
    "": "",
  },
  {
    german: "Tiefkühltruhe",
    english: "freezer",
    "": "",
  },
  {
    german: "Tisch",
    english: "table",
    "": "",
  },
  {
    german: "Tischtuch",
    english: "tablecloth",
    "": "",
  },
  {
    german: "Toilettenpapier",
    english: "toilet paper",
    "": "",
  },
  {
    german: "Topf",
    english: "saucepan",
    "": "",
  },
  {
    german: "Treppe",
    english: "stairs",
    "": "",
  },
  {
    german: "Tuch",
    english: "cloth",
    "": "",
  },
  {
    german: "Tür",
    english: "door",
    "": "",
  },
  {
    german: "unten",
    english: "at the bottom / downstairs",
    "": "",
  },
  {
    german: "Vorhang",
    english: "curtain",
    "": "",
  },
  {
    german: "Wand",
    english: "wall (interior)",
    "": "",
  },
  {
    german: "Waschbecken",
    english: "washbasin",
    "": "",
  },
  {
    german: "Wäsche",
    english: "washing",
    "": "",
  },
  {
    german: "Waschküche",
    english: "utility room / laundry room",
    "": "",
  },
  {
    german: "Waschmaschine",
    english: "washing machine",
    "": "",
  },
  {
    german: "Waschpulver",
    english: "wash powder",
    "": "",
  },
  {
    german: "Wasserhahn",
    english: "tap",
    "": "",
  },
  {
    german: "Wecker",
    english: "alarm clock",
    "": "",
  },
  {
    german: "Wohnzimmer",
    english: "living room",
    "": "",
  },
  {
    german: "Brief",
    english: "letter",
    "": "",
  },
  {
    german: "Brieffreund/in",
    english: "pen friend",
    "": "",
  },
  {
    german: "Bruder",
    english: "brother",
    "": "",
  },
  {
    german: "Cousin / Vetter / Kusine",
    english: "cousin",
    "": "",
  },
  {
    german: "Dame",
    english: "lady",
    "": "",
  },
  {
    german: "Ehefrau/ Ehemann/ Ehepaar",
    english: "wife / husband / married couple",
    "": "",
  },
  {
    german: "Einzelkind",
    english: "only child",
    "": "",
  },
  {
    german: "Eltern",
    english: "parents",
    "": "",
  },
  {
    german: "Enkel/in / Enkelkind",
    english: "grandson / daughter / child",
    "": "",
  },
  {
    german: "Erwachsene",
    english: "adult",
    "": "",
  },
  {
    german: "Familie",
    english: "family`",
    "": "",
  },
  {
    german: "Frau",
    english: "Mrs / woman",
    "": "",
  },
  {
    german: "Fräulein(!)",
    english: "Miss (waitress!)",
    "": "",
  },
  {
    german: "Freund/in",
    english: "friend (boy / girl)",
    "": "",
  },
  {
    german: "Geschwister",
    english: "brothers and sisters",
    "": "",
  },
  {
    german: "Großvater / Großmutter / Großeltern",
    english: "grandfather / mother / parents",
    "": "",
  },
  {
    german: "Junge",
    english: "boy",
    "": "",
  },
  {
    german: "Leute / Menschen",
    english: "people",
    "": "",
  },
  {
    german: "Mädchen",
    english: "girl",
    "": "",
  },
  {
    german: "männlich",
    english: "male",
    "": "",
  },
  {
    german: "Mutter / Mutti",
    english: "mother / mum",
    "": "",
  },
  {
    german: "Nachbar/in",
    english: "neighbour",
    "": "",
  },
  {
    german: "Neffe",
    english: "nephew",
    "": "",
  },
  {
    german: "Nichte",
    english: "niece",
    "": "",
  },
  {
    german: "Onkel",
    english: "uncle",
    "": "",
  },
  {
    german: "Opa / Oma",
    english: "grandad / granny",
    "": "",
  },
  {
    german: "Schwester",
    english: "sister",
    "": "",
  },
  {
    german: "Sohn",
    english: "son",
    "": "",
  },
  {
    german: "Tante",
    english: "aunt",
    "": "",
  },
  {
    german: "Tochter",
    english: "daughter",
    "": "",
  },
  {
    german: "Vater / Vati",
    english: "father / dad",
    "": "",
  },
  {
    german: "Verwandte",
    english: "relative (= relation)",
    "": "",
  },
  {
    german: "weiblich",
    english: "female",
    "": "",
  },
  {
    german: "Zwillinge",
    english: "twins",
    "": "",
  },
  {
    german: "Biene",
    english: "bee",
    "": "",
  },
  {
    german: "Ente",
    english: "duck",
    "": "",
  },
  {
    german: "fressen",
    english: "to eat (animals)",
    "": "",
  },
  {
    german: "füttern",
    english: "to feed (=pets)",
    "": "",
  },
  {
    german: "Hase",
    english: "hare",
    "": "",
  },
  {
    german: "Hund",
    english: "dog",
    "": "",
  },
  {
    german: "Kaninchen",
    english: "rabbit",
    "": "",
  },
  {
    german: "Katze",
    english: "cat",
    "": "",
  },
  {
    german: "Kuh",
    english: "cow",
    "": "",
  },
  {
    german: "Meerschweinchen",
    english: "guinea pig",
    "": "",
  },
  {
    german: "Pferd",
    english: "horse",
    "": "",
  },
  {
    german: "Schaf",
    english: "sheep",
    "": "",
  },
  {
    german: "Schildkröte",
    english: "tortoise",
    "": "",
  },
  {
    german: "Schlange (stehen)",
    english: "snake (to queue)",
    "": "",
  },
  {
    german: "Tier (Haustier)",
    english: "animal (pet)",
    "": "",
  },
  {
    german: "Vogel",
    english: "bird",
    "": "",
  },
  {
    german: "Wellensittich",
    english: "budgerigar",
    "": "",
  },
  {
    german: "Backstein",
    english: "brick",
    "": "",
  },
  {
    german: "Baumwolle",
    english: "cotton",
    "": "",
  },
  {
    german: "Holz",
    english: "wood",
    "": "",
  },
  {
    german: "Kohle",
    english: "coal",
    "": "",
  },
  {
    german: "Kunststoff",
    english: "plastic",
    "": "",
  },
  {
    german: "Leder",
    english: "leather",
    "": "",
  },
  {
    german: "Metall",
    english: "metal",
    "": "",
  },
  {
    german: "Seide",
    english: "silk",
    "": "",
  },
  {
    german: "Stahl",
    english: "steel",
    "": "",
  },
  {
    german: "Stein",
    english: "stone",
    "": "",
  },
  {
    german: "Stoff",
    english: "material",
    "": "",
  },
  {
    german: "Wolle",
    english: "wool",
    "": "",
  },
  {
    german: "blau",
    english: "blue",
    "": "",
  },
  {
    german: "bunt",
    english: "bright (= colour)",
    "": "",
  },
  {
    german: "Farbe",
    english: "colour / paint",
    "": "",
  },
  {
    german: "gelb",
    english: "yellow",
    "": "",
  },
  {
    german: "grau",
    english: "grey",
    "": "",
  },
  {
    german: "grün",
    english: "green",
    "": "",
  },
  {
    german: "hell",
    english: "pale (colour)",
    "": "",
  },
  {
    german: "lila",
    english: "purple",
    "": "",
  },
  {
    german: "rosa",
    english: "pink",
    "": "",
  },
  {
    german: "rot",
    english: "red",
    "": "",
  },
  {
    german: "schwarz",
    english: "black",
    "": "",
  },
  {
    german: "silber",
    english: "silver",
    "": "",
  },
  {
    german: "abnehmen",
    english: "to lose weight / slim",
    "": "",
  },
  {
    german: "Alptraum",
    english: "nightmare",
    "": "",
  },
  {
    german: "altmodisch",
    english: "old fashioned",
    "": "",
  },
  {
    german: "ändern",
    english: "to change",
    "": "",
  },
  {
    german: "anprobieren",
    english: "to try on",
    "": "",
  },
  {
    german: "Anrichte",
    english: "sideboard",
    "": "",
  },
  {
    german: "anschalten",
    english: "to switch on",
    "": "",
  },
  {
    german: "anstrengend",
    english: "tiring",
    "": "",
  },
  {
    german: "anziehen",
    english: "to attract",
    "": "",
  },
  {
    german: "ärgerlich",
    english: "annoying",
    "": "",
  },
  {
    german: "ärgern",
    english: "to annoy",
    "": "",
  },
  {
    german: "artig",
    english: "well behaved",
    "": "",
  },
  {
    german: "aufgeregt",
    english: "excited",
    "": "",
  },
  {
    german: "aufschließen",
    english: "to unlock",
    "": "",
  },
  {
    german: "ausschalten",
    english: "to switch off",
    "": "",
  },
  {
    german: "ausschlafen",
    english: "to have a lie in",
    "": "",
  },
  {
    german: "begießen",
    english: "to water (plants)",
    "": "",
  },
  {
    german: "beißen (Biss)",
    english: "to bite (bite)",
    "": "",
  },
  {
    german: "bewundern",
    english: "to admire",
    "": "",
  },
  {
    german: "Beziehung",
    english: "relationship",
    "": "",
  },
  {
    german: "Braut (Bräutigam)",
    english: "bride (bridegroom)",
    "": "",
  },
  {
    german: "Dachboden",
    english: "attic / loft",
    "": "",
  },
  {
    german: "duzen",
    english: "to call du",
    "": "",
  },
  {
    german: "echt",
    english: "genuine",
    "": "",
  },
  {
    german: "Ehe",
    english: "marriage",
    "": "",
  },
  {
    german: "Eigenschaft",
    english: "quality / characteristic",
    "": "",
  },
  {
    german: "Eindruck",
    english: "impression",
    "": "",
  },
  {
    german: "erscheinen",
    english: "to appear",
    "": "",
  },
  {
    german: "Fensterladen",
    english: "shutter",
    "": "",
  },
  {
    german: "Fernbedienung",
    english: "remote control",
    "": "",
  },
  {
    german: "Freundschaft",
    english: "friendship",
    "": "",
  },
  {
    german: "Gebrauchsanweisung",
    english: "instructions for use",
    "": "",
  },
  {
    german: "Gedächtnis",
    english: "memory",
    "": "",
  },
  {
    german: "Gefahr (gefährlich)",
    english: "danger(ous)",
    "": "",
  },
  {
    german: "geschieden",
    english: "divorced",
    "": "",
  },
  {
    german: "Geschlecht",
    english: "sex / gender",
    "": "",
  },
  {
    german: "getrennt",
    english: "separated",
    "": "",
  },
  {
    german: "Gewicht",
    english: "weight",
    "": "",
  },
  {
    german: "Griff",
    english: "handle",
    "": "",
  },
  {
    german: "gütig",
    english: "kind",
    "": "",
  },
  {
    german: "heizen",
    english: "to heat",
    "": "",
  },
  {
    german: "Hütte",
    english: "shed / hut",
    "": "",
  },
  {
    german: "Jahrhundert",
    english: "century",
    "": "",
  },
  {
    german: "Kabel",
    english: "cable / wiring",
    "": "",
  },
  {
    german: "Käfig",
    english: "cage",
    "": "",
  },
  {
    german: "Kamin",
    english: "fireplace (hearth)",
    "": "",
  },
  {
    german: "Klapp- (stuhl / tisch)",
    english: "folding (chair / table)",
    "": "",
  },
  {
    german: "Klimaanlage",
    english: "air-conditioning",
    "": "",
  },
  {
    german: "klopfen",
    english: "to knock",
    "": "",
  },
  {
    german: "König",
    english: "king",
    "": "",
  },
  {
    german: "Königin",
    english: "queen",
    "": "",
  },
  {
    german: "Kontaktlinsen",
    english: "contact lenses",
    "": "",
  },
  {
    german: "Krug",
    english: "jug",
    "": "",
  },
  {
    german: "lächeln",
    english: "to smile",
    "": "",
  },
  {
    german: "lächerlich",
    english: "ridiculous",
    "": "",
  },
  {
    german: "Lage",
    english: "situation",
    "": "",
  },
  {
    german: "Lärm",
    english: "noise (loud)",
    "": "",
  },
  {
    german: "lebhaft",
    english: "lively",
    "": "",
  },
  {
    german: "nennen",
    english: "to name",
    "": "",
  },
  {
    german: "neugierig",
    english: "curious / inquisitive",
    "": "",
  },
  {
    german: "Persönlichkeit",
    english: "personality",
    "": "",
  },
  {
    german: "Puppe",
    english: "doll",
    "": "",
  },
  {
    german: "Quadratmeter",
    english: "square metre",
    "": "",
  },
  {
    german: "Rasierapparat",
    english: "shaver",
    "": "",
  },
  {
    german: "sich rasieren",
    english: "to shave",
    "": "",
  },
  {
    german: "reißen",
    english: "to tear",
    "": "",
  },
  {
    german: "Reißverschluss",
    english: "zip",
    "": "",
  },
  {
    german: "Rowdy",
    english: "lout / hooligan",
    "": "",
  },
  {
    german: "rücksichtslos",
    english: "careless",
    "": "",
  },
  {
    german: "sanft",
    english: "gentle",
    "": "",
  },
  {
    german: "Schloss",
    english: "lock (of door)",
    "": "",
  },
  {
    german: "schminken (sich)",
    english: "to put on make-up",
    "": "",
  },
  {
    german: "Schmuck",
    english: "jewellery",
    "": "",
  },
  {
    german: "Schublade",
    english: "drawer",
    "": "",
  },
  {
    german: "Schuppen",
    english: "shed",
    "": "",
  },
  {
    german: "Schwager",
    english: "brother-in-law",
    "": "",
  },
  {
    german: "Schwägerin",
    english: "sister-in-law",
    "": "",
  },
  {
    german: "schwanger",
    english: "pregnant",
    "": "",
  },
  {
    german: "Schwiegermutter",
    english: "mother-in-law",
    "": "",
  },
  {
    german: "Schwiegervater",
    english: "father-in-law",
    "": "",
  },
  {
    german: "sehr geehrte(r) Herr / Frau",
    english: "dear Sir / Madam",
    "": "",
  },
  {
    german: "selbständig",
    english: "independently",
    "": "",
  },
  {
    german: "seltsam",
    english: "odd / strange",
    "": "",
  },
  {
    german: "Senioren",
    english: "senior citizens",
    "": "",
  },
  {
    german: "Spülküche",
    english: "utility room",
    "": "",
  },
  {
    german: "Stiefmutter / vater",
    english: "step-mother / father",
    "": "",
  },
  {
    german: "Streichhölzer",
    english: "matches",
    "": "",
  },
  {
    german: "Streit",
    english: "argument / quarrel",
    "": "",
  },
  {
    german: "stumm",
    english: "silent / mute",
    "": "",
  },
  {
    german: "sympathisch",
    english: "nice",
    "": "",
  },
  {
    german: "Tastatur",
    english: "keyboard (computer)",
    "": "",
  },
  {
    german: "taub",
    english: "deaf",
    "": "",
  },
  {
    german: "Teppichboden",
    english: "fitted carpet",
    "": "",
  },
  {
    german: "Traum",
    english: "dream",
    "": "",
  },
  {
    german: "träumen",
    english: "to dream",
    "": "",
  },
  {
    german: "Verantwortung",
    english: "responsibility",
    "": "",
  },
  {
    german: "Vergnügen",
    english: "pleasure",
    "": "",
  },
  {
    german: "vergrößern",
    english: "to enlarge",
    "": "",
  },
  {
    german: "vernünftig",
    english: "sensible / reasonable",
    "": "",
  },
  {
    german: "verrückt",
    english: "mad",
    "": "",
  },
  {
    german: "Vertrauen",
    english: "trust",
    "": "",
  },
  {
    german: "Waschlappen",
    english: "flannel",
    "": "",
  },
  {
    german: "weinen",
    english: "to cry (tears)",
    "": "",
  },
  {
    german: "Werkzeug",
    english: "implement",
    "": "",
  },
  {
    german: "Wintergarten",
    english: "conservatory",
    "": "",
  },
  {
    german: "winzig",
    english: "tiny",
    "": "",
  },
  {
    german: "Witwe",
    english: "widow",
    "": "",
  },
  {
    german: "Witwer",
    english: "widower",
    "": "",
  },
  {
    german: "zornig",
    english: "angry",
    "": "",
  },
  {
    german: "Zufall (zufällig)",
    english: "(by) chance",
    "": "",
  },
  {
    german: "zunehmen",
    english: "to put on weight / increase",
    "": "",
  },
  {
    german: "Acker",
    english: "field (=arable)",
    "": "",
  },
  {
    german: "Allee",
    english: "avenue",
    "": "",
  },
  {
    german: "Bach",
    english: "stream",
    "": "",
  },
  {
    german: "bauen",
    english: "to build",
    "": "",
  },
  {
    german: "Bauer / Bäuerin",
    english: "farmer / farmer(‘s wife)",
    "": "",
  },
  {
    german: "Bauernhof",
    english: "farm",
    "": "",
  },
  {
    german: "Baum",
    english: "tree",
    "": "",
  },
  {
    german: "Berg",
    english: "mountain",
    "": "",
  },
  {
    german: "Blatt",
    english: "leaf / piece of paper",
    "": "",
  },
  {
    german: "Boden",
    english: "ground",
    "": "",
  },
  {
    german: "Bundesstraße",
    english: "A-road",
    "": "",
  },
  {
    german: "Bürgersteig",
    english: "pavement",
    "": "",
  },
  {
    german: "Bushaltestelle",
    english: "bus stop",
    "": "",
  },
  {
    german: "Dach",
    english: "roof",
    "": "",
  },
  {
    german: "Einbahnstraße",
    english: "one way street",
    "": "",
  },
  {
    german: "Feld",
    english: "field",
    "": "",
  },
  {
    german: "flach",
    english: "flat",
    "": "",
  },
  {
    german: "Fluss",
    english: "river",
    "": "",
  },
  {
    german: "Gebiet",
    english: "region / area",
    "": "",
  },
  {
    german: "Gebirge",
    english: "mountain range",
    "": "",
  },
  {
    german: "Gegend",
    english: "district",
    "": "",
  },
  {
    german: "Hecke",
    english: "hedge",
    "": "",
  },
  {
    german: "Hügel (hügelig)",
    english: "hill(y)",
    "": "",
  },
  {
    german: "Kanal",
    english: "canal / channel",
    "": "",
  },
  {
    german: "Loch",
    english: "hole",
    "": "",
  },
  {
    german: "Straße",
    english: "street / road",
    "": "",
  },
  {
    german: "Straßenbahn",
    english: "tram",
    "": "",
  },
  {
    german: "Tal",
    english: "valley",
    "": "",
  },
  {
    german: "Ufer (Flussufer)",
    english: "(river) bank",
    "": "",
  },
  {
    german: "Wald",
    english: "wood / forest",
    "": "",
  },
  {
    german: "Wiese",
    english: "field / meadow",
    "": "",
  },
  {
    german: "Wohnblock",
    english: "block of flats",
    "": "",
  },
  {
    german: "wohnen",
    english: "to live",
    "": "",
  },
  {
    german: "Wohnung",
    english: "flat",
    "": "",
  },
  {
    german: "Apotheke (Apotheker)",
    english: "chemist's (chemist)",
    "": "",
  },
  {
    german: "Bäcker/in (Bäckerei)",
    english: "baker(‘s shop)",
    "": "",
  },
  {
    german: "Bibliothek(ar/in)",
    english: "library (librarian)",
    "": "",
  },
  {
    german: "Briefkasten",
    english: "letter box",
    "": "",
  },
  {
    german: "Briefmarke",
    english: "postage stamp",
    "": "",
  },
  {
    german: "Brücke",
    english: "bridge",
    "": "",
  },
  {
    german: "Buch(handlung)",
    english: "book (shop)",
    "": "",
  },
  {
    german: "Burg",
    english: "castle",
    "": "",
  },
  {
    german: "Delikatessengeschäft",
    english: "delicatessen",
    "": "",
  },
  {
    german: "Dom / Kathedrale",
    english: "cathedral",
    "": "",
  },
  {
    german: "Drogerie",
    english: "chemists",
    "": "",
  },
  {
    german: "Einkaufszentrum",
    english: "shopping centre",
    "": "",
  },
  {
    german: "einwerfen",
    english: "to post",
    "": "",
  },
  {
    german: "Gemüsehändler",
    english: "greengrocer’s",
    "": "",
  },
  {
    german: "Geschäft",
    english: "shop",
    "": "",
  },
  {
    german: "Juwelier",
    english: "jeweller",
    "": "",
  },
  {
    german: "Kapelle",
    english: "chapel",
    "": "",
  },
  {
    german: "Kino",
    english: "cinema",
    "": "",
  },
  {
    german: "Kirche",
    english: "church",
    "": "",
  },
  {
    german: "Kneipe",
    english: "pub",
    "": "",
  },
  {
    german: "Konditorei",
    english: "cake / sweet shop",
    "": "",
  },
  {
    german: "Kunst(galerie)",
    english: "art (gallery)",
    "": "",
  },
  {
    german: "Leben",
    english: "life",
    "": "",
  },
  {
    german: "leben",
    english: "to live",
    "": "",
  },
  {
    german: "Lebensmittel(geschäft)",
    english: "food/ groceries (grocer’s shop)",
    "": "",
  },
  {
    german: "Markt (Marktplatz)",
    english: "market (place)",
    "": "",
  },
  {
    german: "Metzger(ei)",
    english: "butcher (‘s shop)",
    "": "",
  },
  {
    german: "Modegeschäft",
    english: "clothes shop",
    "": "",
  },
  {
    german: "Post(amt)",
    english: "post office",
    "": "",
  },
  {
    german: "Postleitzahl",
    english: "post code",
    "": "",
  },
  {
    german: "Rathaus",
    english: "town hall",
    "": "",
  },
  {
    german: "Schloss",
    english: "castle",
    "": "",
  },
  {
    german: "sparen",
    english: "to save",
    "": "",
  },
  {
    german: "Sparkasse",
    english: "savings bank",
    "": "",
  },
  {
    german: "tanken",
    english: "to fill up with petrol",
    "": "",
  },
  {
    german: "Tankstelle",
    english: "petrol station",
    "": "",
  },
  {
    german: "Turm",
    english: "tower",
    "": "",
  },
  {
    german: "Verkehrsamt",
    english: "tourist office",
    "": "",
  },
  {
    german: "Zentrum",
    english: "centre",
    "": "",
  },
  {
    german: "Ausgang / Ausfahrt",
    english: "exit (= building / motorway)",
    "": "",
  },
  {
    german: "Auto",
    english: "car",
    "": "",
  },
  {
    german: "Autobahn",
    english: "motorway",
    "": "",
  },
  {
    german: "Benzin",
    english: "petrol",
    "": "",
  },
  {
    german: "bremsen",
    english: "to brake",
    "": "",
  },
  {
    german: "Bremsen",
    english: "brakes",
    "": "",
  },
  {
    german: "Eingang / Einfahrt",
    english: "entrance",
    "": "",
  },
  {
    german: "einsteigen",
    english: "to get on / in (vehicles)",
    "": "",
  },
  {
    german: "Fähre (Autofähre)",
    english: "ferry (car ferry)",
    "": "",
  },
  {
    german: "fahren",
    english: "to go / drive",
    "": "",
  },
  {
    german: "Fahrer/in",
    english: "driver",
    "": "",
  },
  {
    german: "Fahrgast / Passagier",
    english: "passenger",
    "": "",
  },
  {
    german: "führen",
    english: "to lead",
    "": "",
  },
  {
    german: "Führerschein",
    english: "driving licence",
    "": "",
  },
  {
    german: "Fußgänger(zone)",
    english: "pedestrian (area)",
    "": "",
  },
  {
    german: "gehen",
    english: "to go / walk",
    "": "",
  },
  {
    german: "holen",
    english: "to fetch",
    "": "",
  },
  {
    german: "kommen",
    english: "to come",
    "": "",
  },
  {
    german: "Kreuzung",
    english: "crossroads",
    "": "",
  },
  {
    german: "Kurve",
    english: "bend",
    "": "",
  },
  {
    german: "Lastwagen / LKW",
    english: "lorry",
    "": "",
  },
  {
    german: "Lieferwagen",
    english: "van (delivery)",
    "": "",
  },
  {
    german: "Linie",
    english: "line / bus route",
    "": "",
  },
  {
    german: "Marke",
    english: "make (of car)",
    "": "",
  },
  {
    german: "Mofa",
    english: "moped",
    "": "",
  },
  {
    german: "Motorrad (fahrer/in)",
    english: "motorbike(rider)",
    "": "",
  },
  {
    german: "Raststätte",
    english: "motorway services",
    "": "",
  },
  {
    german: "Schild (Straßenschild)",
    english: "sign (roadsign)",
    "": "",
  },
  {
    german: "verlassen",
    english: "to leave (place)",
    "": "",
  },
  {
    german: "Wagen",
    english: "car",
    "": "",
  },
  {
    german: "Weg / Fußweg",
    english: "way / path",
    "": "",
  },
  {
    german: "weggehen",
    english: "to go away",
    "": "",
  },
  {
    german: "Werkstatt",
    english: "repair workshop / garage",
    "": "",
  },
  {
    german: "Werkzeug",
    english: "tools",
    "": "",
  },
  {
    german: "abfahren",
    english: "to depart",
    "": "",
  },
  {
    german: "Abfahrt / Abflug",
    english: "departure",
    "": "",
  },
  {
    german: "abholen",
    english: "to meet (= pick up/ fetch)",
    "": "",
  },
  {
    german: "Abteil",
    english: "compartment",
    "": "",
  },
  {
    german: "anhalten",
    english: "to stop (vehicles)",
    "": "",
  },
  {
    german: "ankommen",
    english: "to arrive",
    "": "",
  },
  {
    german: "Ankunft",
    english: "arrival",
    "": "",
  },
  {
    german: "aussteigen",
    english: "to get off",
    "": "",
  },
  {
    german: "Automat",
    english: "machine",
    "": "",
  },
  {
    german: "Bahn (Bahnsteig)",
    english: "railway (platform)",
    "": "",
  },
  {
    german: "Bahnhof",
    english: "station",
    "": "",
  },
  {
    german: "besetzt",
    english: "occupied (e.g. seat)",
    "": "",
  },
  {
    german: "D-Zug",
    english: "express train",
    "": "",
  },
  {
    german: "einfach",
    english: "easy / single (ticket)",
    "": "",
  },
  {
    german: "Eisen",
    english: "iron",
    "": "",
  },
  {
    german: "Eisenbahnlinie",
    english: "railway line",
    "": "",
  },
  {
    german: "Fahrgeld",
    english: "fare",
    "": "",
  },
  {
    german: "Fahrkarte",
    english: "ticket",
    "": "",
  },
  {
    german: "Fahrkartenschalter",
    english: "ticket office",
    "": "",
  },
  {
    german: "Fahrplan",
    english: "timetable (bus / train)",
    "": "",
  },
  {
    german: "Fahrt",
    english: "journey (short)",
    "": "",
  },
  {
    german: "Gleis",
    english: "platform / line",
    "": "",
  },
  {
    german: "hin und zurück",
    english: "there & back i.e. return",
    "": "",
  },
  {
    german: "Rücken",
    english: "back",
    "": "",
  },
  {
    german: "Rückfahrt",
    english: "return journey",
    "": "",
  },
  {
    german: "S-Bahn",
    english: "suburban railway",
    "": "",
  },
  {
    german: "U-Bahn(station)",
    english: "underground / tube / métro (station)",
    "": "",
  },
  {
    german: "umsteigen",
    english: "to change (e.g. trains)",
    "": "",
  },
  {
    german: "Verbindung (verbinden)",
    english: "connection e.g. trains (to connect)",
    "": "",
  },
  {
    german: "Verkehr(smittel)",
    english: "traffic (means of transport)",
    "": "",
  },
  {
    german: "verpassen",
    english: "to miss e.g. bus / train",
    "": "",
  },
  {
    german: "Verspätung",
    english: "delay",
    "": "",
  },
  {
    german: "warten auf",
    english: "to wait for",
    "": "",
  },
  {
    german: "Warteraum / saal / zimmer",
    english: "waiting room",
    "": "",
  },
  {
    german: "Zug(führer)",
    english: "train (driver)",
    "": "",
  },
  {
    german: "zurück",
    english: "back",
    "": "",
  },
  {
    german: "zurückkommen",
    english: "to return / come / go back",
    "": "",
  },
  {
    german: "Boot",
    english: "boat",
    "": "",
  },
  {
    german: "Bord",
    english: "board (on)",
    "": "",
  },
  {
    german: "Fahrrad / Rad",
    english: "bicycle",
    "": "",
  },
  {
    german: "fliegen",
    english: "to fly",
    "": "",
  },
  {
    german: "Flug",
    english: "flight",
    "": "",
  },
  {
    german: "Flughafen",
    english: "airport",
    "": "",
  },
  {
    german: "Flugzeug",
    english: "plane",
    "": "",
  },
  {
    german: "Hubschrauber",
    english: "helicopter",
    "": "",
  },
  {
    german: "Miete",
    english: "rent",
    "": "",
  },
  {
    german: "mieten",
    english: "to rent / hire",
    "": "",
  },
  {
    german: "Rad",
    english: "wheel",
    "": "",
  },
  {
    german: "Radfahren",
    english: "cycling",
    "": "",
  },
  {
    german: "radfahren",
    english: "to cycle",
    "": "",
  },
  {
    german: "Radfahrer/in",
    english: "cyclist",
    "": "",
  },
  {
    german: "Schiff",
    english: "ship",
    "": "",
  },
  {
    german: "starten",
    english: "to take off (plane)",
    "": "",
  },
  {
    german: "vermieten",
    english: "to rent / hire (out)",
    "": "",
  },
  {
    german: "Dorf",
    english: "village",
    "": "",
  },
  {
    german: "dort(hin)",
    english: "there (to there)",
    "": "",
  },
  {
    german: "dort drüben",
    english: "over there",
    "": "",
  },
  {
    german: "draußen",
    english: "outside",
    "": "",
  },
  {
    german: "drinnen",
    english: "inside",
    "": "",
  },
  {
    german: "Ecke",
    english: "corner",
    "": "",
  },
  {
    german: "Einwohner/in",
    english: "inhabitant",
    "": "",
  },
  {
    german: "geradeaus",
    english: "straight ahead",
    "": "",
  },
  {
    german: "Großstadt",
    english: "city",
    "": "",
  },
  {
    german: "Hafen(stadt)",
    english: "harbour (port)",
    "": "",
  },
  {
    german: "Hauptbahnhof / Hauptstraße",
    english: "main station/ road",
    "": "",
  },
  {
    german: "Hauptstadt",
    english: "capital",
    "": "",
  },
  {
    german: "hinten",
    english: "at the back",
    "": "",
  },
  {
    german: "hinter",
    english: "behind",
    "": "",
  },
  {
    german: "links",
    english: "left (on the left side)",
    "": "",
  },
  {
    german: "Nähe (in der Nähe von)",
    english: "near to / nearby",
    "": "",
  },
  {
    german: "Rand",
    english: "edge",
    "": "",
  },
  {
    german: "rechts",
    english: "right (on the)",
    "": "",
  },
  {
    german: "Richtung",
    english: "direction",
    "": "",
  },
  {
    german: "Stadt (Partnerstadt)",
    english: "town (twin town)",
    "": "",
  },
  {
    german: "Stadtrundfahrt",
    english: "town tour",
    "": "",
  },
  {
    german: "vor",
    english: "in front of / outside / before",
    "": "",
  },
  {
    german: "vorbeigehen/fahren",
    english: "to go past",
    "": "",
  },
  {
    german: "vorne",
    english: "at the front",
    "": "",
  },
  {
    german: "Vorort",
    english: "suburb",
    "": "",
  },
  {
    german: "weit",
    english: "far (away) from/ distant",
    "": "",
  },
  {
    german: "anbauen",
    english: "to grow (crops)",
    "": "",
  },
  {
    german: "anschnallen (sich)",
    english: "to fasten seat belt",
    "": "",
  },
  {
    german: "außer Betrieb",
    english: "out of order / not working",
    "": "",
  },
  {
    german: "Autobahnkreuz",
    english: "motorway junction",
    "": "",
  },
  {
    german: "Bahnübergang",
    english: "level crossing",
    "": "",
  },
  {
    german: "Baustelle",
    english: "building site / roadworks",
    "": "",
  },
  {
    german: "befinden (sich)",
    english: "to be situated",
    "": "",
  },
  {
    german: "beilegen",
    english: "to enclose",
    "": "",
  },
  {
    german: "Eimer",
    english: "bucket",
    "": "",
  },
  {
    german: "einwerfen",
    english: "to post (a letter)",
    "": "",
  },
  {
    german: "entwerten",
    english: "to cancel / stamp a ticket",
    "": "",
  },
  {
    german: "Fahrzeug",
    english: "vehicle",
    "": "",
  },
  {
    german: "Fels",
    english: "rock (mineral)",
    "": "",
  },
  {
    german: "fließen",
    english: "to flow",
    "": "",
  },
  {
    german: "gebrauchen (gebraucht)",
    english: "to use (second hand)",
    "": "",
  },
  {
    german: "Gegenteil",
    english: "opposite",
    "": "",
  },
  {
    german: "Geschwindigkeits(begrenzung)",
    english: "speed (limit)",
    "": "",
  },
  {
    german: "Gipfel",
    english: "summit",
    "": "",
  },
  {
    german: "Hauptverkehrszeit",
    english: "rush hour",
    "": "",
  },
  {
    german: "hupen",
    english: "to hoot",
    "": "",
  },
  {
    german: "Kennzeichen",
    english: "registration number",
    "": "",
  },
  {
    german: "Klippe",
    english: "cliff",
    "": "",
  },
  {
    german: "Kofferraum",
    english: "boot (of car)",
    "": "",
  },
  {
    german: "Kreis(verkehr)",
    english: "circle (roundabout)",
    "": "",
  },
  {
    german: "Leitung",
    english: "cable / wiring / pipes",
    "": "",
  },
  {
    german: "Lenkrad",
    english: "steering wheel",
    "": "",
  },
  {
    german: "liefern",
    english: "to deliver",
    "": "",
  },
  {
    german: "Luftdruck",
    english: "tyre pressure",
    "": "",
  },
  {
    german: "öffentlich",
    english: "public",
    "": "",
  },
  {
    german: "Reinigung",
    english: "dry cleaning",
    "": "",
  },
  {
    german: "Rückspiegel",
    english: "rear-view mirror",
    "": "",
  },
  {
    german: "Rundfunk",
    english: "radio",
    "": "",
  },
  {
    german: "Sicherheit",
    english: "safety",
    "": "",
  },
  {
    german: "Sicherheitsgurt",
    english: "seatbelt",
    "": "",
  },
  {
    german: "Stau",
    english: "hold-up / traffic jam",
    "": "",
  },
  {
    german: "Steuer(rad)",
    english: "steering wheel",
    "": "",
  },
  {
    german: "überfahren",
    english: "to run over",
    "": "",
  },
  {
    german: "überholen",
    english: "to overtake",
    "": "",
  },
  {
    german: "überqueren",
    english: "to cross (road)",
    "": "",
  },
  {
    german: "umgeben von",
    english: "surrounded by",
    "": "",
  },
  {
    german: "Umleitung",
    english: "diversion",
    "": "",
  },
  {
    german: "Vorfahrt",
    english: "priority / right of way",
    "": "",
  },
  {
    german: "wachsen",
    english: "to grow",
    "": "",
  },
  {
    german: "Weinberg",
    english: "vineyard",
    "": "",
  },
  {
    german: "Windschutzscheibe",
    english: "windscreen",
    "": "",
  },
  {
    german: "Zebrastreifen",
    english: "zebra-crossing",
    "": "",
  },
  {
    german: "zusammenstoßen mit",
    english: "to collide with",
    "": "",
  },
  {
    german: "Auge",
    english: "eye",
    "": "",
  },
  {
    german: "Bauch",
    english: "tummy",
    "": "",
  },
  {
    german: "Bein",
    english: "leg",
    "": "",
  },
  {
    german: "Gesicht",
    english: "face",
    "": "",
  },
  {
    german: "Haare",
    english: "hair",
    "": "",
  },
  {
    german: "Hals",
    english: "neck/ throat",
    "": "",
  },
  {
    german: "Knie",
    english: "knee",
    "": "",
  },
  {
    german: "Körper",
    english: "body",
    "": "",
  },
  {
    german: "Mund",
    english: "mouth",
    "": "",
  },
  {
    german: "Nase",
    english: "nose",
    "": "",
  },
  {
    german: "Ohr",
    english: "ear",
    "": "",
  },
  {
    german: "Schulter",
    english: "shoulder",
    "": "",
  },
  {
    german: "angeln",
    english: "to fish",
    "": "",
  },
  {
    german: "Angelrute",
    english: "fishing rod",
    "": "",
  },
  {
    german: "Bad",
    english: "bath",
    "": "",
  },
  {
    german: "baden",
    english: "to bathe",
    "": "",
  },
  {
    german: "Badeanzug/hose",
    english: "swimming costume/trunks",
    "": "",
  },
  {
    german: "Badeort",
    english: "seaside resort",
    "": "",
  },
  {
    german: "bewegen",
    english: "to move",
    "": "",
  },
  {
    german: "Endspiel",
    english: "final (e.g. sport)",
    "": "",
  },
  {
    german: "Freibad",
    english: "swimming pool (open air)",
    "": "",
  },
  {
    german: "Fuß (zu Fuß gehen)",
    english: "foot (go on foot)",
    "": "",
  },
  {
    german: "Fußball",
    english: "football",
    "": "",
  },
  {
    german: "gewinnen",
    english: "to win",
    "": "",
  },
  {
    german: "Hallenbad",
    english: "indoor swimming pool",
    "": "",
  },
  {
    german: "joggen",
    english: "to jog",
    "": "",
  },
  {
    german: "Kanufahren",
    english: "canoeing",
    "": "",
  },
  {
    german: "kegeln",
    english: "to play skittles",
    "": "",
  },
  {
    german: "klettern",
    english: "to climb",
    "": "",
  },
  {
    german: "laufen",
    english: "to run",
    "": "",
  },
  {
    german: "Leichtathletik",
    english: "athletics",
    "": "",
  },
  {
    german: "Liga",
    english: "league",
    "": "",
  },
  {
    german: "Mannschaft",
    english: "team",
    "": "",
  },
  {
    german: "Netz",
    english: "net",
    "": "",
  },
  {
    german: "Reiten",
    english: "horse riding",
    "": "",
  },
  {
    german: "rennen",
    english: "to run",
    "": "",
  },
  {
    german: "Rennen",
    english: "race",
    "": "",
  },
  {
    german: "Rollbrett",
    english: "skateboard",
    "": "",
  },
  {
    german: "Roller",
    english: "scooter",
    "": "",
  },
  {
    german: "Rollschuh laufen",
    english: "to roller skate",
    "": "",
  },
  {
    german: "Ruderboot",
    english: "rowing boat",
    "": "",
  },
  {
    german: "rudern",
    english: "to row",
    "": "",
  },
  {
    german: "schießen",
    english: "to shoot",
    "": "",
  },
  {
    german: "schlagen",
    english: "to hit",
    "": "",
  },
  {
    german: "Schläger",
    english: "racquet / stick / bat",
    "": "",
  },
  {
    german: "Schließfach",
    english: "locker",
    "": "",
  },
  {
    german: "Schlittschuhlaufen",
    english: "to ice skate",
    "": "",
  },
  {
    german: "Schwimmbad",
    english: "swimming pool",
    "": "",
  },
  {
    german: "schwimmen",
    english: "to swim",
    "": "",
  },
  {
    german: "See (der/die) (an der See)",
    english: "lake / sea (at the sea-side)",
    "": "",
  },
  {
    german: "segeln",
    english: "to sail",
    "": "",
  },
  {
    german: "Ski fahren",
    english: "to ski",
    "": "",
  },
  {
    german: "Skilehrer/in",
    english: "ski instructor",
    "": "",
  },
  {
    german: "spazierengehen",
    english: "to go for a walk",
    "": "",
  },
  {
    german: "Spaziergang",
    english: "walk",
    "": "",
  },
  {
    german: "Spiel(film)",
    english: "game / match (feature film)",
    "": "",
  },
  {
    german: "spielen",
    english: "to play (music / sports / cards)",
    "": "",
  },
  {
    german: "Spieler",
    english: "player",
    "": "",
  },
  {
    german: "Spielzeug",
    english: "toy(s)",
    "": "",
  },
  {
    german: "Sport treiben",
    english: "to do sport",
    "": "",
  },
  {
    german: "Sportplatz",
    english: "sports ground / school field",
    "": "",
  },
  {
    german: "springen",
    english: "to jump",
    "": "",
  },
  {
    german: "Stadion",
    english: "stadium",
    "": "",
  },
  {
    german: "steigen",
    english: "to climb",
    "": "",
  },
  {
    german: "Surfbrett",
    english: "surfboard",
    "": "",
  },
  {
    german: "Tor (ein Tor schießen)",
    english: "gate / goal (to score a goal)",
    "": "",
  },
  {
    german: "Umkleideraum",
    english: "changing room",
    "": "",
  },
  {
    german: "Verein",
    english: "club",
    "": "",
  },
  {
    german: "verlieren",
    english: "to lose",
    "": "",
  },
  {
    german: "wandern",
    english: "to hike",
    "": "",
  },
  {
    german: "Wanderung",
    english: "hike",
    "": "",
  },
  {
    german: "werfen",
    english: "to throw",
    "": "",
  },
  {
    german: "windsurfen",
    english: "to windsurf",
    "": "",
  },
  {
    german: "Biene",
    english: "bee",
    "": "",
  },
  {
    german: "Erkältung (sich erkälten)",
    english: "a cold (to catch a cold)",
    "": "",
  },
  {
    german: "Fieber",
    english: "fever / a temperature",
    "": "",
  },
  {
    german: "Fliege",
    english: "fly",
    "": "",
  },
  {
    german: "fühlen",
    english: "to feel",
    "": "",
  },
  {
    german: "Gefühl",
    english: "feeling",
    "": "",
  },
  {
    german: "gesund (Gesundheit)",
    english: "healthy (health)",
    "": "",
  },
  {
    german: "Grippe",
    english: "flu",
    "": "",
  },
  {
    german: "Halsschmerzen",
    english: "sore throat",
    "": "",
  },
  {
    german: "Hansaplast",
    english: "sticking plaster",
    "": "",
  },
  {
    german: "Heftpflaster",
    english: "sticking plaster",
    "": "",
  },
  {
    german: "helfen (Hilfe!)",
    english: "to help (help!)",
    "": "",
  },
  {
    german: "Husten",
    english: "cough",
    "": "",
  },
  {
    german: "husten",
    english: "to cough",
    "": "",
  },
  {
    german: "Kopfschmerzen",
    english: "headache",
    "": "",
  },
  {
    german: "krank (Krankheit)",
    english: "ill(ness)",
    "": "",
  },
  {
    german: "Krankenhaus",
    english: "hospital",
    "": "",
  },
  {
    german: "Krankenpfleger/ Krankenschwester",
    english: "nurse(male/female)",
    "": "",
  },
  {
    german: "Krankenwagen",
    english: "ambulance",
    "": "",
  },
  {
    german: "Magen(schmerzen)",
    english: "stomach (ache)",
    "": "",
  },
  {
    german: "Medikament",
    english: "medicine",
    "": "",
  },
  {
    german: "Operation",
    english: "operation (=medical)",
    "": "",
  },
  {
    german: "Patient/in",
    english: "patient",
    "": "",
  },
  {
    german: "Rezept",
    english: "prescription / recipe",
    "": "",
  },
  {
    german: "Schmerzen (schmerzhaft)",
    english: "pain(ful)",
    "": "",
  },
  {
    german: "Schnupfen",
    english: "cold",
    "": "",
  },
  {
    german: "seekrank",
    english: "seasick",
    "": "",
  },
  {
    german: "sprechen",
    english: "to speak",
    "": "",
  },
  {
    german: "Sprechstunde",
    english: "surgery hours",
    "": "",
  },
  {
    german: "stechen",
    english: "to sting",
    "": "",
  },
  {
    german: "Stich",
    english: "sting",
    "": "",
  },
  {
    german: "Tablette",
    english: "tablet/pill",
    "": "",
  },
  {
    german: "Unfall",
    english: "accident",
    "": "",
  },
  {
    german: "verletzen (sich)",
    english: "to injure (o.s.)",
    "": "",
  },
  {
    german: "Wespe",
    english: "wasp",
    "": "",
  },
  {
    german: "Wunde",
    english: "wound",
    "": "",
  },
  {
    german: "Zahn(schmerzen)",
    english: "tooth (ache)",
    "": "",
  },
  {
    german: "Zahnarzt / Zahnärztin",
    english: "dentist",
    "": "",
  },
  {
    german: "Zahnbürste",
    english: "toothbrush",
    "": "",
  },
  {
    german: "Zahnpasta",
    english: "toothpaste",
    "": "",
  },
  {
    german: "Anfänger",
    english: "beginner",
    "": "",
  },
  {
    german: "bluten",
    english: "to bleed",
    "": "",
  },
  {
    german: "Blutprobe",
    english: "blood test",
    "": "",
  },
  {
    german: "brennen",
    english: "to burn",
    "": "",
  },
  {
    german: "Brust",
    english: "chest",
    "": "",
  },
  {
    german: "Chirurg(in)",
    english: "surgeon",
    "": "",
  },
  {
    german: "Durchfall",
    english: "diarrhoea",
    "": "",
  },
  {
    german: "Ellbogen",
    english: "elbow",
    "": "",
  },
  {
    german: "erbrechen (sich)",
    english: "to be sick",
    "": "",
  },
  {
    german: "Ereignis",
    english: "event",
    "": "",
  },
  {
    german: "Erfolg",
    english: "success",
    "": "",
  },
  {
    german: "Ergebnis",
    english: "result / score",
    "": "",
  },
  {
    german: "erhalten",
    english: "to receive",
    "": "",
  },
  {
    german: "erholen (sich)",
    english: "to recover / get better",
    "": "",
  },
  {
    german: "Erleichterung",
    english: "relief",
    "": "",
  },
  {
    german: "erreichen",
    english: "to reach / catch",
    "": "",
  },
  {
    german: "erste Hilfe",
    english: "first aid",
    "": "",
  },
  {
    german: "fangen",
    english: "to catch",
    "": "",
  },
  {
    german: "Fußgelenk",
    english: "ankle",
    "": "",
  },
  {
    german: "Gehirn",
    english: "brain",
    "": "",
  },
  {
    german: "Geruch",
    english: "smell",
    "": "",
  },
  {
    german: "geschwollen",
    english: "swollen",
    "": "",
  },
  {
    german: "Gips(verband)",
    english: "plaster",
    "": "",
  },
  {
    german: "Glatze",
    english: "bald patch",
    "": "",
  },
  {
    german: "Handgelenk",
    english: "wrist",
    "": "",
  },
  {
    german: "Haut",
    english: "skin",
    "": "",
  },
  {
    german: "heben",
    english: "to lift / raise",
    "": "",
  },
  {
    german: "Heimweh",
    english: "homesickness",
    "": "",
  },
  {
    german: "Helm",
    english: "helmet",
    "": "",
  },
  {
    german: "Heuschnupfen",
    english: "hay fever",
    "": "",
  },
  {
    german: "Höhe",
    english: "height",
    "": "",
  },
  {
    german: "Höhle",
    english: "cave",
    "": "",
  },
  {
    german: "Hustensaft",
    english: "cough mixture",
    "": "",
  },
  {
    german: "jagen",
    english: "to hunt",
    "": "",
  },
  {
    german: "Kinn",
    english: "chin",
    "": "",
  },
  {
    german: "Knochen",
    english: "bone",
    "": "",
  },
  {
    german: "leiden",
    english: "to suffer",
    "": "",
  },
  {
    german: "Magenverstimmung",
    english: "stomach upset",
    "": "",
  },
  {
    german: "Meister(schaft)",
    english: "champion(ship)",
    "": "",
  },
  {
    german: "Menge (Menschenmenge)",
    english: "quantity (crowd)",
    "": "",
  },
  {
    german: "messen",
    english: "to measure",
    "": "",
  },
  {
    german: "nackt",
    english: "naked",
    "": "",
  },
  {
    german: "Pfeil",
    english: "arrow",
    "": "",
  },
  {
    german: "pflegen",
    english: "to look after (patient)",
    "": "",
  },
  {
    german: "Pokal",
    english: "cup (trophy)",
    "": "",
  },
  {
    german: "Röntgenbild",
    english: "x-ray",
    "": "",
  },
  {
    german: "Salbe",
    english: "cream / ointment",
    "": "",
  },
  {
    german: "schaden",
    english: "to do harm",
    "": "",
  },
  {
    german: "Schaden",
    english: "damage",
    "": "",
  },
  {
    german: "Schiedsrichter",
    english: "referee",
    "": "",
  },
  {
    german: "schlucken",
    english: "to swallow",
    "": "",
  },
  {
    german: "Sieg",
    english: "win / victory",
    "": "",
  },
  {
    german: "Sonnenstich",
    english: "sun stroke",
    "": "",
  },
  {
    german: "Sorge (sich Sorgen machen)",
    english: "worry (to worry)",
    "": "",
  },
  {
    german: "sorgen für",
    english: "to look after",
    "": "",
  },
  {
    german: "Spritze",
    english: "injection",
    "": "",
  },
  {
    german: "tauchen",
    english: "to dive",
    "": "",
  },
  {
    german: "teilnehmen",
    english: "to take part",
    "": "",
  },
  {
    german: "Turnier",
    english: "tournament",
    "": "",
  },
  {
    german: "übergeben (sich)",
    english: "to be sick",
    "": "",
  },
  {
    german: "unentschieden",
    english: "undecided / drawn (match)",
    "": "",
  },
  {
    german: "untersuchen",
    english: "to examine (patient)",
    "": "",
  },
  {
    german: "Verband",
    english: "bandage",
    "": "",
  },
  {
    german: "verstauchen (sich)",
    english: "to sprain",
    "": "",
  },
  {
    german: "verstopft",
    english: "constipated",
    "": "",
  },
  {
    german: "Wange",
    english: "cheek",
    "": "",
  },
  {
    german: "Wettbewerb",
    english: "competition",
    "": "",
  },
  {
    german: "Wettkampf",
    english: "competition",
    "": "",
  },
  {
    german: "Zeh",
    english: "toe",
    "": "",
  },
  {
    german: "Zunge",
    english: "tongue",
    "": "",
  },
  {
    german: "Abendessen",
    english: "dinner / evening meal",
    "": "",
  },
  {
    german: "Appetit (guten Appetit!)",
    english: "appetite (enjoy your meal!)",
    "": "",
  },
  {
    german: "Durst (durstig)",
    english: "thirst(y)",
    "": "",
  },
  {
    german: "Flamme",
    english: "flame",
    "": "",
  },
  {
    german: "Flasche",
    english: "bottle",
    "": "",
  },
  {
    german: "frisch",
    english: "fresh",
    "": "",
  },
  {
    german: "Frühstück",
    english: "breakfast",
    "": "",
  },
  {
    german: "Gabel",
    english: "fork",
    "": "",
  },
  {
    german: "gemischt",
    english: "mixed",
    "": "",
  },
  {
    german: "Gericht",
    english: "dish / course",
    "": "",
  },
  {
    german: "Geschirr(tuch)",
    english: "crockery (tea towel)",
    "": "",
  },
  {
    german: "Getränk",
    english: "drink",
    "": "",
  },
  {
    german: "Glas",
    english: "jar / pot (e.g. jam)",
    "": "",
  },
  {
    german: "grillen",
    english: "to grill / barbecue",
    "": "",
  },
  {
    german: "Imbiss(stube)",
    english: "snack (bar)",
    "": "",
  },
  {
    german: "Kännchen",
    english: "small pot",
    "": "",
  },
  {
    german: "Kantine",
    english: "canteen",
    "": "",
  },
  {
    german: "Küche",
    english: "kitchen",
    "": "",
  },
  {
    german: "lecker",
    english: "delicious",
    "": "",
  },
  {
    german: "Löffel",
    english: "spoon",
    "": "",
  },
  {
    german: "Mahlzeit (!)",
    english: "meal (enjoy your meal!)",
    "": "",
  },
  {
    german: "Messer",
    english: "knife",
    "": "",
  },
  {
    german: "Mittagessen",
    english: "lunch / midday meal",
    "": "",
  },
  {
    german: "Nachtisch",
    english: "dessert",
    "": "",
  },
  {
    german: "schmecken",
    english: "to taste",
    "": "",
  },
  {
    german: "schnell",
    english: "quick",
    "": "",
  },
  {
    german: "Schnellimbiss",
    english: "fast food restaurant",
    "": "",
  },
  {
    german: "Schüssel",
    english: "bowl",
    "": "",
  },
  {
    german: "Selbstbedienung",
    english: "self-service",
    "": "",
  },
  {
    german: "Speisekarte",
    english: "menu",
    "": "",
  },
  {
    german: "Speisewagen",
    english: "dining car",
    "": "",
  },
  {
    german: "Supermarkt",
    english: "supermarket",
    "": "",
  },
  {
    german: "süß",
    english: "sweet",
    "": "",
  },
  {
    german: "Tageskarte",
    english: "menu / dish (of the day)",
    "": "",
  },
  {
    german: "Tasse",
    english: "cup",
    "": "",
  },
  {
    german: "Tee (kanne)",
    english: "tea (pot)",
    "": "",
  },
  {
    german: "Tee / Kaffee trinken",
    english: "to have afternoon tea / coffee",
    "": "",
  },
  {
    german: "Teller",
    english: "plate",
    "": "",
  },
  {
    german: "trinken",
    english: "to drink",
    "": "",
  },
  {
    german: "Untertasse",
    english: "saucer",
    "": "",
  },
  {
    german: "Vorspeise",
    english: "starter/ first course",
    "": "",
  },
  {
    german: "zum Mitnehmen",
    english: "take away meals",
    "": "",
  },
  {
    german: "zum Wohl!",
    english: "cheers!",
    "": "",
  },
  {
    german: "alkohol(frei)",
    english: "alcohol (non-alcoholic)",
    "": "",
  },
  {
    german: "Bier",
    english: "beer",
    "": "",
  },
  {
    german: "Cola",
    english: "coke",
    "": "",
  },
  {
    german: "Fruchtsaft",
    english: "fruit juice",
    "": "",
  },
  {
    german: "Kaffee(kanne)",
    english: "coffee (pot)",
    "": "",
  },
  {
    german: "Limonade",
    english: "lemonade",
    "": "",
  },
  {
    german: "Milch",
    english: "milk",
    "": "",
  },
  {
    german: "Saft",
    english: "juice",
    "": "",
  },
  {
    german: "Schnaps",
    english: "schnaps / spirits",
    "": "",
  },
  {
    german: "Sekt",
    english: "champagne (German)",
    "": "",
  },
  {
    german: "Sprudel",
    english: "pop (=fizzy drink)",
    "": "",
  },
  {
    german: "Wasser (Trink / Mineral)",
    english: "water (drinking / mineral)",
    "": "",
  },
  {
    german: "Wein (Rot / Weiß)",
    english: "wine (red / white)",
    "": "",
  },
  {
    german: "Ananas",
    english: "pineapple",
    "": "",
  },
  {
    german: "Apfel",
    english: "apple",
    "": "",
  },
  {
    german: "Apfelsine",
    english: "orange",
    "": "",
  },
  {
    german: "Aprikose",
    english: "apricot",
    "": "",
  },
  {
    german: "Aufschnitt",
    english: "sliced meats (e.g. salami)",
    "": "",
  },
  {
    german: "Birne",
    english: "pear / light bulb",
    "": "",
  },
  {
    german: "Blumenkohl",
    english: "cauliflower",
    "": "",
  },
  {
    german: "Bockwurst",
    english: "boiled sausage",
    "": "",
  },
  {
    german: "Bohnen",
    english: "beans",
    "": "",
  },
  {
    german: "Bonbons",
    english: "sweets",
    "": "",
  },
  {
    german: "Braten",
    english: "joint / roast meat",
    "": "",
  },
  {
    german: "braten",
    english: "to roast",
    "": "",
  },
  {
    german: "Bratkartoffeln (Bratpfanne)",
    english: "fried potatoes (frying pan)",
    "": "",
  },
  {
    german: "Bratwurst",
    english: "sausage (fried)",
    "": "",
  },
  {
    german: "Brot",
    english: "bread / loaf",
    "": "",
  },
  {
    german: "Brötchen",
    english: "bread roll",
    "": "",
  },
  {
    german: "Butterbrot",
    english: "sandwich",
    "": "",
  },
  {
    german: "Chips / Kartoffelschips",
    english: "crisps",
    "": "",
  },
  {
    german: "Cornflakes",
    english: "cereals",
    "": "",
  },
  {
    german: "Ei",
    english: "egg",
    "": "",
  },
  {
    german: "Eintopf",
    english: "stew",
    "": "",
  },
  {
    german: "Eis(becher)",
    english: "ice / ice-cream (sundae)",
    "": "",
  },
  {
    german: "Erbsen",
    english: "peas",
    "": "",
  },
  {
    german: "Erdbeere",
    english: "strawberry",
    "": "",
  },
  {
    german: "essen",
    english: "to eat",
    "": "",
  },
  {
    german: "Essen",
    english: "meal / food",
    "": "",
  },
  {
    german: "Essig",
    english: "vinegar",
    "": "",
  },
  {
    german: "Fleisch",
    english: "meat",
    "": "",
  },
  {
    german: "Forelle",
    english: "trout",
    "": "",
  },
  {
    german: "Frikadelle",
    english: "meatball",
    "": "",
  },
  {
    german: "Gans",
    english: "goose",
    "": "",
  },
  {
    german: "gekochtes Ei (ein)",
    english: "boiled egg",
    "": "",
  },
  {
    german: "Gemüse",
    english: "vegetables",
    "": "",
  },
  {
    german: "Gewürz",
    english: "spice",
    "": "",
  },
  {
    german: "Gurke",
    english: "cucumber",
    "": "",
  },
  {
    german: "Hähnchen",
    english: "chicken (food)",
    "": "",
  },
  {
    german: "Himbeere",
    english: "raspberry",
    "": "",
  },
  {
    german: "Honig",
    english: "honey",
    "": "",
  },
  {
    german: "Kalbfleisch",
    english: "veal",
    "": "",
  },
  {
    german: "Karotte",
    english: "carrot",
    "": "",
  },
  {
    german: "Kartoffel(salat)",
    english: "potato (salad)",
    "": "",
  },
  {
    german: "Kartoffelbrei/püree",
    english: "mashed potato",
    "": "",
  },
  {
    german: "Käse",
    english: "cheese",
    "": "",
  },
  {
    german: "Kaugummi",
    english: "chewing gum",
    "": "",
  },
  {
    german: "Kekse",
    english: "biscuits",
    "": "",
  },
  {
    german: "Kirsche",
    english: "cherry",
    "": "",
  },
  {
    german: "Kohl",
    english: "cabbage",
    "": "",
  },
  {
    german: "Kopfsalat",
    english: "lettuce",
    "": "",
  },
  {
    german: "Kotelett",
    english: "chop / cutlet",
    "": "",
  },
  {
    german: "Kuchen",
    english: "cake",
    "": "",
  },
  {
    german: "Lachs",
    english: "salmon",
    "": "",
  },
  {
    german: "Lamm(fleisch)",
    english: "lamb= animal (lamb =meat)",
    "": "",
  },
  {
    german: "Leber",
    english: "liver",
    "": "",
  },
  {
    german: "Marmelade",
    english: "jam",
    "": "",
  },
  {
    german: "Nudeln",
    english: "pasta / noodles",
    "": "",
  },
  {
    german: "Nuss (Erdnuss)",
    english: "nut (peanut)",
    "": "",
  },
  {
    german: "Obst",
    english: "fruit",
    "": "",
  },
  {
    german: "Öl",
    english: "oil",
    "": "",
  },
  {
    german: "Orangenmarmelade",
    english: "marmelade",
    "": "",
  },
  {
    german: "Pampelmuse",
    english: "grapefruit",
    "": "",
  },
  {
    german: "Pfeffer",
    english: "pepper",
    "": "",
  },
  {
    german: "Pfirsich",
    english: "peach",
    "": "",
  },
  {
    german: "Pflaume",
    english: "plum",
    "": "",
  },
  {
    german: "Pilz",
    english: "mushroom",
    "": "",
  },
  {
    german: "Pommes (frites)",
    english: "chips",
    "": "",
  },
  {
    german: "Pralinen",
    english: "chocolates",
    "": "",
  },
  {
    german: "Riegel",
    english: "bar (e.g. of chocolate)",
    "": "",
  },
  {
    german: "Rindfleisch",
    english: "beef",
    "": "",
  },
  {
    german: "Rosenkohl",
    english: "brussel sprouts",
    "": "",
  },
  {
    german: "Salz",
    english: "salt",
    "": "",
  },
  {
    german: "Salzkartoffeln",
    english: "boiled potatoes",
    "": "",
  },
  {
    german: "Sauerkraut",
    english: "pickled cabbage",
    "": "",
  },
  {
    german: "Schaschlick",
    english: "kebab",
    "": "",
  },
  {
    german: "Scheibe",
    english: "slice",
    "": "",
  },
  {
    german: "Schinken",
    english: "ham",
    "": "",
  },
  {
    german: "Schlagsahne",
    english: "whipped cream",
    "": "",
  },
  {
    german: "Schnitzel",
    english: "escalope / schnitzel",
    "": "",
  },
  {
    german: "Schokolade",
    english: "chocolate / chocolate drink",
    "": "",
  },
  {
    german: "schwarze Johannisbeere",
    english: "blackcurrant",
    "": "",
  },
  {
    german: "Schweinefleisch",
    english: "pork",
    "": "",
  },
  {
    german: "Senf",
    english: "mustard",
    "": "",
  },
  {
    german: "Soße",
    english: "gravy / sauce",
    "": "",
  },
  {
    german: "Speck",
    english: "bacon",
    "": "",
  },
  {
    german: "Spiegelei",
    english: "fried egg",
    "": "",
  },
  {
    german: "Spinat",
    english: "spinach",
    "": "",
  },
  {
    german: "Suppe",
    english: "soup",
    "": "",
  },
  {
    german: "Süßigkeiten",
    english: "sweets",
    "": "",
  },
  {
    german: "Toastbrot",
    english: "toast",
    "": "",
  },
  {
    german: "Traube / Weintraube",
    english: "grape",
    "": "",
  },
  {
    german: "Truthahn",
    english: "turkey",
    "": "",
  },
  {
    german: "weiß (Weißbrot)",
    english: "white (white bread)",
    "": "",
  },
  {
    german: "Wurst",
    english: "sausage",
    "": "",
  },
  {
    german: "Zitrone",
    english: "lemon",
    "": "",
  },
  {
    german: "Zucker",
    english: "sugar",
    "": "",
  },
  {
    german: "Zwiebel",
    english: "onion",
    "": "",
  },
  {
    german: "Büchse",
    english: "can",
    "": "",
  },
  {
    german: "Dose(nöffner)",
    english: "can / tin (opener)",
    "": "",
  },
  {
    german: "Karton",
    english: "cardboard box",
    "": "",
  },
  {
    german: "Korb",
    english: "basket",
    "": "",
  },
  {
    german: "Packung / Paket",
    english: "packet",
    "": "",
  },
  {
    german: "Portion",
    english: "helping / portion",
    "": "",
  },
  {
    german: "Schachtel",
    english: "box (e.g.chocolates)",
    "": "",
  },
  {
    german: "Tüte",
    english: "bag (= paper/ plastic)",
    "": "",
  },
  {
    german: "Besteck",
    english: "cutlery",
    "": "",
  },
  {
    german: "bestehen aus",
    english: "to consist of",
    "": "",
  },
  {
    german: "Diät (eine Diät halten)",
    english: "diet (to be on a diet)",
    "": "",
  },
  {
    german: "dienen",
    english: "to serve",
    "": "",
  },
  {
    german: "enthalten",
    english: "to contain",
    "": "",
  },
  {
    german: "Fett",
    english: "fat / grease",
    "": "",
  },
  {
    german: "Geflügel",
    english: "poultry",
    "": "",
  },
  {
    german: "Geschmack",
    english: "taste",
    "": "",
  },
  {
    german: "gießen",
    english: "to pour",
    "": "",
  },
  {
    german: "pikant",
    english: "spicy",
    "": "",
  },
  {
    german: "probieren",
    english: "to try",
    "": "",
  },
  {
    german: "reichen",
    english: "to pass (e.g. salt)",
    "": "",
  },
  {
    german: "riechen",
    english: "to smell (sth)",
    "": "",
  },
  {
    german: "satt",
    english: "full up (food)",
    "": "",
  },
  {
    german: "schälen",
    english: "to peel",
    "": "",
  },
  {
    german: "Spargel",
    english: "asparagus",
    "": "",
  },
  {
    german: "Vegetarier(in)",
    english: "vegetarian",
    "": "",
  },
  {
    german: "Verpackung",
    english: "packaging",
    "": "",
  },
  {
    german: "Weinprobe (Weinlese)",
    english: "wine-tasting (grape harvest)",
    "": "",
  },
  {
    german: "amüsieren (sich)",
    english: "to enjoy oneself",
    "": "",
  },
  {
    german: "Ansichtskarte",
    english: "postcard (picture)",
    "": "",
  },
  {
    german: "ausgeben",
    english: "to spend (money)",
    "": "",
  },
  {
    german: "ausgehen",
    english: "to go out",
    "": "",
  },
  {
    german: "Auskunft",
    english: "information",
    "": "",
  },
  {
    german: "Ausstellung",
    english: "exhibition",
    "": "",
  },
  {
    german: "basteln",
    english: "to make things / do DIY",
    "": "",
  },
  {
    german: "bestellen (abbestellen)",
    english: "to order (to cancel)",
    "": "",
  },
  {
    german: "bezahlen",
    english: "to pay (for)",
    "": "",
  },
  {
    german: "Bild",
    english: "picture",
    "": "",
  },
  {
    german: "Blume(nhändler)",
    english: "flower (florist)",
    "": "",
  },
  {
    german: "Chor",
    english: "choir",
    "": "",
  },
  {
    german: "Computerspiel",
    english: "computer game",
    "": "",
  },
  {
    german: "die Sehenswürdigkeiten besichtigen",
    english: "to go sight-seeing",
    "": "",
  },
  {
    german: "einkaufen (gehen)",
    english: "to shop / go shopping",
    "": "",
  },
  {
    german: "Einladung (einladen)",
    english: "invitation (to invite)",
    "": "",
  },
  {
    german: "Eintritt",
    english: "admission charge",
    "": "",
  },
  {
    german: "Eisbahn (Eis laufen)",
    english: "ice rink (to ice skate)",
    "": "",
  },
  {
    german: "Erfrischungen",
    english: "refreshments",
    "": "",
  },
  {
    german: "Fest",
    english: "festival / party",
    "": "",
  },
  {
    german: "Feuer(werk)",
    english: "fire(works)",
    "": "",
  },
  {
    german: "frei (im Freien)",
    english: "free / (in the open air)",
    "": "",
  },
  {
    german: "Freizeit(beschäftigung)",
    english: "free time/ leisure (activity)",
    "": "",
  },
  {
    german: "fröhliche Weihnachten",
    english: "Happy Christmas",
    "": "",
  },
  {
    german: "Heiligabend",
    english: "Christmas Eve",
    "": "",
  },
  {
    german: "Ostern",
    english: "Easter",
    "": "",
  },
  {
    german: "Silvester",
    english: "New Year's Eve",
    "": "",
  },
  {
    german: "Weihnachten",
    english: "Christmas",
    "": "",
  },
  {
    german: "Weihnachtsbaum / Tannenbaum",
    english: "Christmas/fir tree",
    "": "",
  },
  {
    german: "funktionieren",
    english: "to work (function)",
    "": "",
  },
  {
    german: "genießen",
    english: "to enjoy",
    "": "",
  },
  {
    german: "Geschenk",
    english: "present",
    "": "",
  },
  {
    german: "Handy",
    english: "mobile phone",
    "": "",
  },
  {
    german: "Herr",
    english: "Mr / gentleman",
    "": "",
  },
  {
    german: "Herr Ober!",
    english: "waiter!",
    "": "",
  },
  {
    german: "Herz",
    english: "heart",
    "": "",
  },
  {
    german: "im Freien",
    english: "open air (in the)",
    "": "",
  },
  {
    german: "Jugendklub",
    english: "youth club",
    "": "",
  },
  {
    german: "Jugendliche (r)",
    english: "young person",
    "": "",
  },
  {
    german: "jung",
    english: "young",
    "": "",
  },
  {
    german: "Kalender/Terminkalender",
    english: "diary (for appointments)",
    "": "",
  },
  {
    german: "Karte(n)",
    english: "card (playing/ greetings)",
    "": "",
  },
  {
    german: "kaufen",
    english: "to buy",
    "": "",
  },
  {
    german: "Kaufhaus",
    english: "department store",
    "": "",
  },
  {
    german: "kennen",
    english: "to know (people)",
    "": "",
  },
  {
    german: "kennen lernen",
    english: "to get to know",
    "": "",
  },
  {
    german: "kosten(los)",
    english: "to cost (free)",
    "": "",
  },
  {
    german: "Kuss",
    english: "kiss",
    "": "",
  },
  {
    german: "lachen",
    english: "to laugh",
    "": "",
  },
  {
    german: "Lust haben",
    english: "to feel like (doing something)",
    "": "",
  },
  {
    german: "malen",
    english: "to paint",
    "": "",
  },
  {
    german: "Mitglied",
    english: "member",
    "": "",
  },
  {
    german: "Preis",
    english: "price / prize",
    "": "",
  },
  {
    german: "preiswert",
    english: "cheap / value for money",
    "": "",
  },
  {
    german: "Rechnung",
    english: "bill (e.g. restaurant)",
    "": "",
  },
  {
    german: "reservieren",
    english: "to reserve",
    "": "",
  },
  {
    german: "sammeln",
    english: "to collect",
    "": "",
  },
  {
    german: "Schach",
    english: "chess",
    "": "",
  },
  {
    german: "schenken",
    english: "to give (a present)",
    "": "",
  },
  {
    german: "schicken (eine SMS / eine E-mail)",
    english: "to send (to text / e-mail)",
    "": "",
  },
  {
    german: "Schlussverkauf",
    english: "sale",
    "": "",
  },
  {
    german: "Sonderangebot",
    english: "special offer",
    "": "",
  },
  {
    german: "spannend",
    english: "exciting",
    "": "",
  },
  {
    german: "Spaß",
    english: "fun",
    "": "",
  },
  {
    german: "spät",
    english: "late",
    "": "",
  },
  {
    german: "teuer",
    english: "expensive/ dear",
    "": "",
  },
  {
    german: "treffen",
    english: "to meet (by intention)",
    "": "",
  },
  {
    german: "Treffpunkt",
    english: "meeting place",
    "": "",
  },
  {
    german: "verbringen",
    english: "to spend (=time)",
    "": "",
  },
  {
    german: "verkaufen (ausverkaufen)",
    english: "to sell (out)",
    "": "",
  },
  {
    german: "vorstellen (sich)",
    english: "to introduce oneself",
    "": "",
  },
  {
    german: "zahlen",
    english: "to pay (the bill)",
    "": "",
  },
  {
    german: "begegnen",
    english: "to meet",
    "": "",
  },
  {
    german: "begleiten",
    english: "to accompany",
    "": "",
  },
  {
    german: "bekannt",
    english: "well-known",
    "": "",
  },
  {
    german: "Bekannter",
    english: "acquaintance",
    "": "",
  },
  {
    german: "drucken",
    english: "to print",
    "": "",
  },
  {
    german: "Drucker",
    english: "printer",
    "": "",
  },
  {
    german: "empfehlen",
    english: "to recommend",
    "": "",
  },
  {
    german: "Ergebnis",
    english: "result / score",
    "": "",
  },
  {
    german: "Ermässigung",
    english: "discount",
    "": "",
  },
  {
    german: "Faschingsdienstag",
    english: "Shrove Tuesday",
    "": "",
  },
  {
    german: "faulenzen",
    english: "to laze about",
    "": "",
  },
  {
    german: "feiern",
    english: "to celebrate",
    "": "",
  },
  {
    german: "Festtag",
    english: "public holiday",
    "": "",
  },
  {
    german: "Gebühr",
    english: "fee",
    "": "",
  },
  {
    german: "gebührenfrei / gratis",
    english: "free",
    "": "",
  },
  {
    german: "Gemälde",
    english: "painting",
    "": "",
  },
  {
    german: "herunterladen",
    english: "to download",
    "": "",
  },
  {
    german: "Hochzeit",
    english: "wedding",
    "": "",
  },
  {
    german: "Kabel",
    english: "cable / wiring",
    "": "",
  },
  {
    german: "Karneval",
    english: "carnival",
    "": "",
  },
  {
    german: "Kerze",
    english: "candle",
    "": "",
  },
  {
    german: "Messe",
    english: "mass (church)",
    "": "",
  },
  {
    german: "plaudern",
    english: "to chat",
    "": "",
  },
  {
    german: "Schaufensterbummel",
    english: "window shopping",
    "": "",
  },
  {
    german: "schieben",
    english: "to push",
    "": "",
  },
  {
    german: "schmücken",
    english: "to decorate (garlands)",
    "": "",
  },
  {
    german: "Sitten",
    english: "customs/ traditions",
    "": "",
  },
  {
    german: "Tastatur",
    english: "keyboard (computer)",
    "": "",
  },
  {
    german: "tippen",
    english: "to type",
    "": "",
  },
  {
    german: "überraschen",
    english: "to surprise",
    "": "",
  },
  {
    german: "Verabredung",
    english: "appointment",
    "": "",
  },
  {
    german: "Veranstaltung",
    english: "event",
    "": "",
  },
  {
    german: "vorziehen",
    english: "to prefer",
    "": "",
  },
  {
    german: "Blockflöte",
    english: "recorder",
    "": "",
  },
  {
    german: "Flöte/ Querflöte",
    english: "flute",
    "": "",
  },
  {
    german: "Geige",
    english: "violin",
    "": "",
  },
  {
    german: "Gitarre",
    english: "guitar",
    "": "",
  },
  {
    german: "Klarinette",
    english: "clarinet",
    "": "",
  },
  {
    german: "Klavier",
    english: "piano",
    "": "",
  },
  {
    german: "Schlagzeug",
    english: "drums / percussion",
    "": "",
  },
  {
    german: "Trompete",
    english: "trumpet",
    "": "",
  },
  {
    german: "üben",
    english: "to practise",
    "": "",
  },
  {
    german: "Dokumentarfilm",
    english: "documentary",
    "": "",
  },
  {
    german: "Komödie",
    english: "comedy",
    "": "",
  },
  {
    german: "Krimi",
    english: "crime story/ thriller",
    "": "",
  },
  {
    german: "Nachrichten",
    english: "news",
    "": "",
  },
  {
    german: "Quizsendung",
    english: "quiz show",
    "": "",
  },
  {
    german: "Seifenoper",
    english: "soap opera",
    "": "",
  },
  {
    german: "Sendung",
    english: "programme (e.g. TV)",
    "": "",
  },
  {
    german: "Serie",
    english: "series (e.g. on TV)",
    "": "",
  },
  {
    german: "Zeichentrickfilm",
    english: "cartoon",
    "": "",
  },
  {
    german: "anschauen / ansehen",
    english: "to look at",
    "": "",
  },
  {
    german: "Ball",
    english: "ball (= sport / dance)",
    "": "",
  },
  {
    german: "fernsehen",
    english: "to watch TV",
    "": "",
  },
  {
    german: "Fernseher",
    english: "TV set",
    "": "",
  },
  {
    german: "hören",
    english: "to hear",
    "": "",
  },
  {
    german: "Hörer",
    english: "receiver (telephone)",
    "": "",
  },
  {
    german: "Illustrierte",
    english: "magazine",
    "": "",
  },
  {
    german: "Konzert",
    english: "concert",
    "": "",
  },
  {
    german: "Kopf(hörer)",
    english: "head(phones)",
    "": "",
  },
  {
    german: "Lieblings-",
    english: "favourite",
    "": "",
  },
  {
    german: "Lied",
    english: "song",
    "": "",
  },
  {
    german: "Musik (Pop/Volks/klassische)",
    english: "music (pop /folk /classical)",
    "": "",
  },
  {
    german: "Musiker/in (musizieren)",
    english: "musician (to play music)",
    "": "",
  },
  {
    german: "Oper",
    english: "opera",
    "": "",
  },
  {
    german: "Roman",
    english: "novel",
    "": "",
  },
  {
    german: "Sänger/in",
    english: "singer",
    "": "",
  },
  {
    german: "Schauspieler/in",
    english: "actor/ actress",
    "": "",
  },
  {
    german: "sehen",
    english: "to see",
    "": "",
  },
  {
    german: "singen",
    english: "to sing",
    "": "",
  },
  {
    german: "Stereoanlage",
    english: "stereo system",
    "": "",
  },
  {
    german: "Tanz",
    english: "dance",
    "": "",
  },
  {
    german: "tanzen",
    english: "to dance",
    "": "",
  },
  {
    german: "Taschenbuch",
    english: "paperback",
    "": "",
  },
  {
    german: "Theater(stück)",
    english: "theatre (play)",
    "": "",
  },
  {
    german: "Tragödie",
    english: "tragedy",
    "": "",
  },
  {
    german: "zeichnen",
    english: "to draw",
    "": "",
  },
  {
    german: "zeigen",
    english: "to show",
    "": "",
  },
  {
    german: "Zeit",
    english: "time",
    "": "",
  },
  {
    german: "Zeitschrift",
    english: "magazine",
    "": "",
  },
  {
    german: "Zeitung",
    english: "newspaper",
    "": "",
  },
  {
    german: "Abenteuer",
    english: "adventure",
    "": "",
  },
  {
    german: "aufführen",
    english: "to perform",
    "": "",
  },
  {
    german: "Aufführung",
    english: "performance",
    "": "",
  },
  {
    german: "Bildschirm",
    english: "screen",
    "": "",
  },
  {
    german: "blasen",
    english: "to blow",
    "": "",
  },
  {
    german: "Blaskapelle",
    english: "brass band",
    "": "",
  },
  {
    german: "Bühne",
    english: "stage",
    "": "",
  },
  {
    german: "Fernbedienung",
    english: "remote control",
    "": "",
  },
  {
    german: "Garderobe",
    english: "cloakroom (theatre)",
    "": "",
  },
  {
    german: "Gerät",
    english: "implement/equipment",
    "": "",
  },
  {
    german: "Geräusch",
    english: "sound / quiet noise",
    "": "",
  },
  {
    german: "Medien (Massenmedien)",
    english: "media",
    "": "",
  },
  {
    german: "Moderator",
    english: "TV presenter",
    "": "",
  },
  {
    german: "Parkett",
    english: "stalls (theatre)",
    "": "",
  },
  {
    german: "passieren",
    english: "to happen",
    "": "",
  },
  {
    german: "Rang",
    english: "circle (theatre)",
    "": "",
  },
  {
    german: "Stimme",
    english: "voice",
    "": "",
  },
  {
    german: "Stimmung",
    english: "atmosphere",
    "": "",
  },
  {
    german: "Tagesschau",
    english: "TV evening news",
    "": "",
  },
  {
    german: "Unterhaltung",
    english: "entertainment",
    "": "",
  },
  {
    german: "Untertitel",
    english: "subtitle",
    "": "",
  },
  {
    german: "Vorstellung",
    english: "performance / introduction",
    "": "",
  },
  {
    german: "Werbung",
    english: "advertising",
    "": "",
  },
  {
    german: "Zuschauer",
    english: "audience / viewers",
    "": "",
  },
  {
    german: "Affe",
    english: "monkey",
    "": "",
  },
  {
    german: "anders(wo)",
    english: "different (somewhere else)",
    "": "",
  },
  {
    german: "Anmeldung",
    english: "reception",
    "": "",
  },
  {
    german: "annehmen",
    english: "to accept",
    "": "",
  },
  {
    german: "anrufen",
    english: "to phone",
    "": "",
  },
  {
    german: "Aufenthalt",
    english: "stay",
    "": "",
  },
  {
    german: "Aufzug",
    english: "lift",
    "": "",
  },
  {
    german: "Ausflug",
    english: "excursion / trip",
    "": "",
  },
  {
    german: "ausfüllen",
    english: "to fill in (form)",
    "": "",
  },
  {
    german: "Auskunft",
    english: "information",
    "": "",
  },
  {
    german: "Ausland (ins / im)",
    english: "abroad",
    "": "",
  },
  {
    german: "Ausländer/in",
    english: "foreigner",
    "": "",
  },
  {
    german: "Aussicht",
    english: "view",
    "": "",
  },
  {
    german: "Auswahl",
    english: "choice/ selection",
    "": "",
  },
  {
    german: "Ausweis",
    english: "identity card / I.D",
    "": "",
  },
  {
    german: "Bär",
    english: "bear",
    "": "",
  },
  {
    german: "bedienen",
    english: "to serve",
    "": "",
  },
  {
    german: "Bedienung",
    english: "service (=in restaurant)",
    "": "",
  },
  {
    german: "Bett (Einzel / Doppel)",
    english: "bed (single/double)",
    "": "",
  },
  {
    german: "Bettwäsche",
    english: "bedlinen",
    "": "",
  },
  {
    german: "bedecken",
    english: "to cover",
    "": "",
  },
  {
    german: "bedeckt",
    english: "overcast",
    "": "",
  },
  {
    german: "bewölkt",
    english: "overcast",
    "": "",
  },
  {
    german: "donnern",
    english: "to thunder",
    "": "",
  },
  {
    german: "dunkel",
    english: "dark",
    "": "",
  },
  {
    german: "frieren",
    english: "to freeze",
    "": "",
  },
  {
    german: "Gewitter",
    english: "thunderstorm",
    "": "",
  },
  {
    german: "Hagel",
    english: "hail",
    "": "",
  },
  {
    german: "hageln",
    english: "to hail",
    "": "",
  },
  {
    german: "heiß",
    english: "hot",
    "": "",
  },
  {
    german: "heiter",
    english: "bright (= weather)",
    "": "",
  },
  {
    german: "Hitze",
    english: "heat",
    "": "",
  },
  {
    german: "kalt",
    english: "cold",
    "": "",
  },
  {
    german: "Klima",
    english: "climate",
    "": "",
  },
  {
    german: "kühl",
    english: "cool",
    "": "",
  },
  {
    german: "Löwe",
    english: "lion",
    "": "",
  },
  {
    german: "nass",
    english: "wet",
    "": "",
  },
  {
    german: "Nebel (nebelig)",
    english: "fog(gy)/ mist(y)",
    "": "",
  },
  {
    german: "Regen(mantel)",
    english: "rain(coat)",
    "": "",
  },
  {
    german: "Regenschirm",
    english: "umbrella",
    "": "",
  },
  {
    german: "regnen",
    english: "to rain",
    "": "",
  },
  {
    german: "regnerisch",
    english: "rainy",
    "": "",
  },
  {
    german: "Schauer",
    english: "shower (=weather)",
    "": "",
  },
  {
    german: "scheinen",
    english: "to shine",
    "": "",
  },
  {
    german: "Schnee",
    english: "snow",
    "": "",
  },
  {
    german: "schneien",
    english: "to snow",
    "": "",
  },
  {
    german: "schön",
    english: "beautiful / fine (= weather)",
    "": "",
  },
  {
    german: "sich sonnen",
    english: "to sunbathe",
    "": "",
  },
  {
    german: "Sonne",
    english: "sun",
    "": "",
  },
  {
    german: "sonnig",
    english: "sunny",
    "": "",
  },
  {
    german: "Sturm / stürmisch",
    english: "storm(y)",
    "": "",
  },
  {
    german: "Wetter(bericht / vorhersage)",
    english: "weather (forecast)",
    "": "",
  },
  {
    german: "windig",
    english: "windy",
    "": "",
  },
  {
    german: "Wolke (wolkenlos)",
    english: "cloud(less)",
    "": "",
  },
  {
    german: "wolkig",
    english: "cloudy",
    "": "",
  },
  {
    german: "Blick",
    english: "look/ glance",
    "": "",
  },
  {
    german: "bleiben",
    english: "to stay / remain",
    "": "",
  },
  {
    german: "Broschüre",
    english: "brochure",
    "": "",
  },
  {
    german: "Campingplatz",
    english: "camping/ camp site",
    "": "",
  },
  {
    german: "Empfang(sdame)",
    english: "reception(ist)",
    "": "",
  },
  {
    german: "Ferien",
    english: "holiday",
    "": "",
  },
  {
    german: "Formular",
    english: "form",
    "": "",
  },
  {
    german: "Fotoapparat",
    english: "camera",
    "": "",
  },
  {
    german: "Fotograf/in",
    english: "photographer(‘s)",
    "": "",
  },
  {
    german: "Fundbüro",
    english: "lost property office",
    "": "",
  },
  {
    german: "Gast",
    english: "guest",
    "": "",
  },
  {
    german: "Gastgeber",
    english: "host",
    "": "",
  },
  {
    german: "Gasthaus / Gasthof",
    english: "pub",
    "": "",
  },
  {
    german: "Gaststätte",
    english: "restaurant / pub",
    "": "",
  },
  {
    german: "Gepäck",
    english: "luggage",
    "": "",
  },
  {
    german: "gültig",
    english: "valid",
    "": "",
  },
  {
    german: "Herbergseltern",
    english: "wardens (of youth hostel)",
    "": "",
  },
  {
    german: "Insel",
    english: "island",
    "": "",
  },
  {
    german: "Jugendherberge",
    english: "youth hostel",
    "": "",
  },
  {
    german: "Koffer",
    english: "suitcase",
    "": "",
  },
  {
    german: "Küste",
    english: "coast",
    "": "",
  },
  {
    german: "Lagerfeuer",
    english: "camp fire",
    "": "",
  },
  {
    german: "Land (auf dem / aufs)",
    english: "country (in the / to the)",
    "": "",
  },
  {
    german: "Landkarte",
    english: "map",
    "": "",
  },
  {
    german: "Landschaft",
    english: "countryside / scenery",
    "": "",
  },
  {
    german: "Luxus",
    english: "luxury",
    "": "",
  },
  {
    german: "Meer",
    english: "sea",
    "": "",
  },
  {
    german: "mitnehmen",
    english: "to take (with you)",
    "": "",
  },
  {
    german: "Ort",
    english: "place",
    "": "",
  },
  {
    german: "Pass (Reisepass)",
    english: "passport",
    "": "",
  },
  {
    german: "Pension (Vollpension)",
    english: "boarding house (full board)",
    "": "",
  },
  {
    german: "Personalausweis",
    english: "identity card",
    "": "",
  },
  {
    german: "Prospekt",
    english: "leaflet",
    "": "",
  },
  {
    german: "Reise",
    english: "journey (longer)",
    "": "",
  },
  {
    german: "Reisebüro",
    english: "travel agent’s",
    "": "",
  },
  {
    german: "Reisebus",
    english: "coach",
    "": "",
  },
  {
    german: "reisen",
    english: "to travel",
    "": "",
  },
  {
    german: "Reisende(r)",
    english: "traveller",
    "": "",
  },
  {
    german: "Reisescheck",
    english: "traveller’s cheque",
    "": "",
  },
  {
    german: "Reiseziel",
    english: "destination",
    "": "",
  },
  {
    german: "Sand(burg)",
    english: "sand (castle)",
    "": "",
  },
  {
    german: "Scheckheft",
    english: "cheque book",
    "": "",
  },
  {
    german: "Schlafsack",
    english: "sleeping bag",
    "": "",
  },
  {
    german: "Sonnenbrand",
    english: "sunburn",
    "": "",
  },
  {
    german: "Sonnencreme",
    english: "sun cream/ lotion",
    "": "",
  },
  {
    german: "Steward/ess",
    english: "air steward / hostess",
    "": "",
  },
  {
    german: "Strand",
    english: "beach",
    "": "",
  },
  {
    german: "suchen",
    english: "to look for",
    "": "",
  },
  {
    german: "Taschenlampe",
    english: "torch",
    "": "",
  },
  {
    german: "Taschenmesser",
    english: "pocket knife / pen-knife",
    "": "",
  },
  {
    german: "Überfahrt",
    english: "crossing (sea)",
    "": "",
  },
  {
    german: "übernachten",
    english: "to stay the night",
    "": "",
  },
  {
    german: "Unterkunft",
    english: "accommodation",
    "": "",
  },
  {
    german: "unterwegs",
    english: "on the way",
    "": "",
  },
  {
    german: "Urlaub",
    english: "holiday",
    "": "",
  },
  {
    german: "Welle",
    english: "wave",
    "": "",
  },
  {
    german: "Wohnwagen",
    english: "caravan",
    "": "",
  },
  {
    german: "Zelt",
    english: "tent",
    "": "",
  },
  {
    german: "zelten",
    english: "to camp",
    "": "",
  },
  {
    german: "Zimmer (Einzel-, Doppel-, Familien-)",
    english: "room (single / double / family)",
    "": "",
  },
  {
    german: "Zimmer frei",
    english: "rooms available/ B & B",
    "": "",
  },
  {
    german: "Zimmermädchen",
    english: "maid",
    "": "",
  },
  {
    german: "Aufenthaltsdauer",
    english: "length (of stay)",
    "": "",
  },
  {
    german: "Aufheiterungen",
    english: "bright periods",
    "": "",
  },
  {
    german: "austauschen",
    english: "to exchange",
    "": "",
  },
  {
    german: "entkommen",
    english: "to escape",
    "": "",
  },
  {
    german: "entscheiden",
    english: "to decide",
    "": "",
  },
  {
    german: "entspannen (sich)",
    english: "to relax",
    "": "",
  },
  {
    german: "feucht",
    english: "humid",
    "": "",
  },
  {
    german: "Fremdenführer",
    english: "tour guide",
    "": "",
  },
  {
    german: "freuen (sich) auf",
    english: "to look forward to",
    "": "",
  },
  {
    german: "freuen (sich) über",
    english: "to be pleased about",
    "": "",
  },
  {
    german: "Führung",
    english: "guided tour",
    "": "",
  },
  {
    german: "Kurs",
    english: "exchange rate",
    "": "",
  },
  {
    german: "lauwarm",
    english: "lukewarm",
    "": "",
  },
  {
    german: "Niederschlag",
    english: "precipitation",
    "": "",
  },
  {
    german: "Reiseführer",
    english: "tourist guide",
    "": "",
  },
  {
    german: "Rolltreppe",
    english: "escalator",
    "": "",
  },
  {
    german: "Rundgang / Rundfahrt",
    english: "guided tour",
    "": "",
  },
  {
    german: "Schatten",
    english: "shade",
    "": "",
  },
  {
    german: "Tropfen",
    english: "drop (e.g. water)",
    "": "",
  },
  {
    german: "veränderlich",
    english: "changeable",
    "": "",
  },
  {
    german: "verändern (sich)",
    english: "to change",
    "": "",
  },
  {
    german: "wechselhaft",
    english: "changeable",
    "": "",
  },
  {
    german: "Abfall(eimer)",
    english: "rubbish (bin/dustbin)",
    "": "",
  },
  {
    german: "Ampel",
    english: "traffic lights",
    "": "",
  },
  {
    german: "Angst haben",
    english: "to be frightened",
    "": "",
  },
  {
    german: "anspringen",
    english: "to start (cars)",
    "": "",
  },
  {
    german: "arm",
    english: "poor",
    "": "",
  },
  {
    german: "Blei",
    english: "lead",
    "": "",
  },
  {
    german: "Brand",
    english: "fire",
    "": "",
  },
  {
    german: "Erde",
    english: "earth",
    "": "",
  },
  {
    german: "Grad",
    english: "degree",
    "": "",
  },
  {
    german: "Grenze",
    english: "border",
    "": "",
  },
  {
    german: "herrlich",
    english: "splendid / wonderful",
    "": "",
  },
  {
    german: "Himmel",
    english: "sky",
    "": "",
  },
  {
    german: "hoch",
    english: "high",
    "": "",
  },
  {
    german: "Jahr(eszeit)",
    english: "year (season)",
    "": "",
  },
  {
    german: "jährlich",
    english: "annually",
    "": "",
  },
  {
    german: "Luft",
    english: "air",
    "": "",
  },
  {
    german: "Müll(tonne)",
    english: "rubbish/waste (dustbin)",
    "": "",
  },
  {
    german: "Nachteil",
    english: "disadvantage",
    "": "",
  },
  {
    german: "niedrig / tief",
    english: "low",
    "": "",
  },
  {
    german: "Norden (nördlich)",
    english: "north (to the north)",
    "": "",
  },
  {
    german: "Osten (östlich)",
    english: "east (to the east)",
    "": "",
  },
  {
    german: "Panne",
    english: "breakdown",
    "": "",
  },
  {
    german: "Parkhaus",
    english: "multi-storey car park",
    "": "",
  },
  {
    german: "Parkplatz",
    english: "car park/ parking space",
    "": "",
  },
  {
    german: "Partei",
    english: "party (=political)",
    "": "",
  },
  {
    german: "Polizei(wache)",
    english: "police (station)",
    "": "",
  },
  {
    german: "Polizist/in",
    english: "policeman/woman",
    "": "",
  },
  {
    german: "Portemonnaie",
    english: "purse",
    "": "",
  },
  {
    german: "Rauch",
    english: "smoke",
    "": "",
  },
  {
    german: "rauchen",
    english: "to smoke",
    "": "",
  },
  {
    german: "Recht haben",
    english: "to be right",
    "": "",
  },
  {
    german: "Rechtsanwalt/anwältin",
    english: "lawyer",
    "": "",
  },
  {
    german: "Rede",
    english: "speech",
    "": "",
  },
  {
    german: "reden",
    english: "to talk",
    "": "",
  },
  {
    german: "Reifen",
    english: "tyre",
    "": "",
  },
  {
    german: "Reifenpanne",
    english: "puncture",
    "": "",
  },
  {
    german: "Reparatur",
    english: "repair",
    "": "",
  },
  {
    german: "reparieren",
    english: "to repair",
    "": "",
  },
  {
    german: "Scheinwerfer",
    english: "headlight",
    "": "",
  },
  {
    german: "Schornstein",
    english: "chimney",
    "": "",
  },
  {
    german: "Strom",
    english: "electricity",
    "": "",
  },
  {
    german: "Süden (südlich)",
    english: "south (to the south)",
    "": "",
  },
  {
    german: "Umwelt",
    english: "environment",
    "": "",
  },
  {
    german: "verbieten (verboten)",
    english: "to forbid (forbidden)",
    "": "",
  },
  {
    german: "vergessen",
    english: "to forget",
    "": "",
  },
  {
    german: "Vorteil",
    english: "advantage",
    "": "",
  },
  {
    german: "Welt",
    english: "world",
    "": "",
  },
  {
    german: "Westen",
    english: "west",
    "": "",
  },
  {
    german: "Zigarette",
    english: "cigarette",
    "": "",
  },
  {
    german: "Zoll",
    english: "customs",
    "": "",
  },
  {
    german: "Abschleppwagen",
    english: "breakdown lorry",
    "": "",
  },
  {
    german: "abschliessen",
    english: "to lock up",
    "": "",
  },
  {
    german: "Altpapier",
    english: "recycled paper",
    "": "",
  },
  {
    german: "anzünden",
    english: "to light",
    "": "",
  },
  {
    german: "aufgeben",
    english: "to stop / give up e.g.smoking",
    "": "",
  },
  {
    german: "behandeln",
    english: "to treat",
    "": "",
  },
  {
    german: "Behandlung",
    english: "treatment",
    "": "",
  },
  {
    german: "behindert",
    english: "disabled",
    "": "",
  },
  {
    german: "beklagen (sich)",
    english: "to complain",
    "": "",
  },
  {
    german: "beleuchten",
    english: "to light up",
    "": "",
  },
  {
    german: "beschädigen",
    english: "to damage",
    "": "",
  },
  {
    german: "beschäftigt",
    english: "busy",
    "": "",
  },
  {
    german: "beschließen",
    english: "to decide",
    "": "",
  },
  {
    german: "beschweren (sich)",
    english: "to complain",
    "": "",
  },
  {
    german: "bessern (sich)",
    english: "to improve",
    "": "",
  },
  {
    german: "Besserung",
    english: "improvement / getting better",
    "": "",
  },
  {
    german: "bestätigen",
    english: "to confirm",
    "": "",
  },
  {
    german: "bestehen auf",
    english: "to insist on",
    "": "",
  },
  {
    german: "betrügen",
    english: "to deceive",
    "": "",
  },
  {
    german: "betrunken",
    english: "drunk",
    "": "",
  },
  {
    german: "beweisen",
    english: "to prove",
    "": "",
  },
  {
    german: "Dieb(stahl)",
    english: "thief (theft)",
    "": "",
  },
  {
    german: "dringend",
    english: "urgent",
    "": "",
  },
  {
    german: "drogensüchtig",
    english: "drug dependent",
    "": "",
  },
  {
    german: "drohen",
    english: "to threaten",
    "": "",
  },
  {
    german: "Einbrecher",
    english: "burglar",
    "": "",
  },
  {
    german: "ertrinken",
    english: "to drown",
    "": "",
  },
  {
    german: "Flaschencontainer",
    english: "bottle bank",
    "": "",
  },
  {
    german: "Fleck",
    english: "stain / spot",
    "": "",
  },
  {
    german: "Gefängnis",
    english: "prison",
    "": "",
  },
  {
    german: "Geldstrafe",
    english: "fine (money)",
    "": "",
  },
  {
    german: "Gesetz",
    english: "law",
    "": "",
  },
  {
    german: "gestattet",
    english: "permitted",
    "": "",
  },
  {
    german: "Gewohnheit",
    english: "custom / habit",
    "": "",
  },
  {
    german: "globale Erwärmung",
    english: "global warming",
    "": "",
  },
  {
    german: "klagen",
    english: "to complain",
    "": "",
  },
  {
    german: "Kraftwerk",
    english: "power station",
    "": "",
  },
  {
    german: "löschen",
    english: "to extinguish / put out",
    "": "",
  },
  {
    german: "lösen",
    english: "to solve",
    "": "",
  },
  {
    german: "lügen",
    english: "to lie",
    "": "",
  },
  {
    german: "Missverständnis",
    english: "misunderstanding",
    "": "",
  },
  {
    german: "Mond",
    english: "moon",
    "": "",
  },
  {
    german: "Mord",
    english: "murder",
    "": "",
  },
  {
    german: "Not(ruf)",
    english: "emergency (phone call)",
    "": "",
  },
  {
    german: "Rat",
    english: "advice / council",
    "": "",
  },
  {
    german: "raten",
    english: "to advise / guess",
    "": "",
  },
  {
    german: "recyceln",
    english: "to recycle",
    "": "",
  },
  {
    german: "reduzieren",
    english: "to reduce",
    "": "",
  },
  {
    german: "Regel",
    english: "rule",
    "": "",
  },
  {
    german: "Regierung",
    english: "government",
    "": "",
  },
  {
    german: "Retten",
    english: "to save / rescue",
    "": "",
  },
  {
    german: "Rettung",
    english: "rescue",
    "": "",
  },
  {
    german: "Risiko",
    english: "risk",
    "": "",
  },
  {
    german: "Rollstuhl",
    english: "wheelchair",
    "": "",
  },
  {
    german: "schämen (sich)",
    english: "to be ashamed",
    "": "",
  },
  {
    german: "schulden",
    english: "to owe",
    "": "",
  },
  {
    german: "schuldig",
    english: "guilty / owing",
    "": "",
  },
  {
    german: "schützen",
    english: "to protect",
    "": "",
  },
  {
    german: "Sozialwohnung",
    english: "council house",
    "": "",
  },
  {
    german: "stehlen",
    english: "to steal",
    "": "",
  },
  {
    german: "sterben",
    english: "to die",
    "": "",
  },
  {
    german: "Tod",
    english: "death",
    "": "",
  },
  {
    german: "töten",
    english: "to kill",
    "": "",
  },
  {
    german: "trampen / per Anhalter fahren",
    english: "to hitch-hike",
    "": "",
  },
  {
    german: "Treibhauseffekt",
    english: "greenhouse effect",
    "": "",
  },
  {
    german: "überschwemmen",
    english: "to flood",
    "": "",
  },
  {
    german: "umkommen / ums Leben kommen",
    english: "to die",
    "": "",
  },
  {
    german: "umtauschen",
    english: "to exchange",
    "": "",
  },
  {
    german: "Unterschied",
    english: "difference",
    "": "",
  },
  {
    german: "verbrauchen",
    english: "to consume / use up",
    "": "",
  },
  {
    german: "verderben",
    english: "to spoil / pollute",
    "": "",
  },
  {
    german: "vergiften",
    english: "to poison",
    "": "",
  },
  {
    german: "Vergleich (vergleichen)",
    english: "comparison (to compare)",
    "": "",
  },
  {
    german: "verhaften",
    english: "to arrest",
    "": "",
  },
  {
    german: "verirren / verlaufen (sich)",
    english: "to lose one’s way/ to get lost",
    "": "",
  },
  {
    german: "vermeiden",
    english: "to avoid",
    "": "",
  },
  {
    german: "verschmutzen (Verschmutzung)",
    english: "to pollute (pollution)",
    "": "",
  },
  {
    german: "verschwenden",
    english: "to waste",
    "": "",
  },
  {
    german: "verschwinden",
    english: "to disappear",
    "": "",
  },
  {
    german: "versichern (Versicherung)",
    english: "to insure (insurance)",
    "": "",
  },
  {
    german: "verstecken",
    english: "to hide",
    "": "",
  },
  {
    german: "wegwerfen",
    english: "to throw away",
    "": "",
  },
  {
    german: "wieder verwerten",
    english: "to recycle",
    "": "",
  },
  {
    german: "zerstören",
    english: "to destroy",
    "": "",
  },
  {
    german: "Zeuge",
    english: "witness",
    "": "",
  },
  {
    german: "Abitur (Abiturient/in)",
    english: "A level exam (A level student)",
    "": "",
  },
  {
    german: "Aufgabe",
    english: "exercise/ task",
    "": "",
  },
  {
    german: "aufhören",
    english: "to stop (doing something)",
    "": "",
  },
  {
    german: "aufmachen",
    english: "to open",
    "": "",
  },
  {
    german: "aufräumen",
    english: "to tidy /clear up /away",
    "": "",
  },
  {
    german: "aufpassen",
    english: "to pay attention",
    "": "",
  },
  {
    german: "Aula",
    english: "school hall",
    "": "",
  },
  {
    german: "ausmachen",
    english: "to turn off",
    "": "",
  },
  {
    german: "Doppelstunde",
    english: "double period",
    "": "",
  },
  {
    german: "Gebäude",
    english: "building",
    "": "",
  },
  {
    german: "Gespräch",
    english: "conversation",
    "": "",
  },
  {
    german: "Gruppe",
    english: "group",
    "": "",
  },
  {
    german: "Haus(aufgaben/arbeit)",
    english: "home(work/housework)",
    "": "",
  },
  {
    german: "Hause (zu / nach)",
    english: "home (at / going)",
    "": "",
  },
  {
    german: "Hausmeister/in",
    english: "caretaker",
    "": "",
  },
  {
    german: "Haustür",
    english: "front door",
    "": "",
  },
  {
    german: "Heft",
    english: "exercise book",
    "": "",
  },
  {
    german: "interessant",
    english: "interesting",
    "": "",
  },
  {
    german: "interessieren (sich) für",
    english: "to be interested in",
    "": "",
  },
  {
    german: "Kind(heit)",
    english: "child(hood)",
    "": "",
  },
  {
    german: "Klasse (zweiter Klasse)",
    english: "class (2nd class)",
    "": "",
  },
  {
    german: "Klassenarbeit",
    english: "test / assessment",
    "": "",
  },
  {
    german: "Klassenkamarad/in",
    english: "classmate",
    "": "",
  },
  {
    german: "Klassenzimmer",
    english: "classroom",
    "": "",
  },
  {
    german: "kompliziert",
    english: "complicated",
    "": "",
  },
  {
    german: "korrigieren",
    english: "to correct / mark",
    "": "",
  },
  {
    german: "Labor",
    english: "laboratory",
    "": "",
  },
  {
    german: "sich langweilen",
    english: "to be bored",
    "": "",
  },
  {
    german: "langweilig",
    english: "boring",
    "": "",
  },
  {
    german: "Lärm",
    english: "noise (loud)",
    "": "",
  },
  {
    german: "lehren",
    english: "to teach",
    "": "",
  },
  {
    german: "Lehrer/in",
    english: "teacher",
    "": "",
  },
  {
    german: "Lehrling (Lehre)",
    english: "apprentice (-ship)",
    "": "",
  },
  {
    german: "leicht",
    english: "light (weight) / easy",
    "": "",
  },
  {
    german: "lernen",
    english: "to learn",
    "": "",
  },
  {
    german: "lesen",
    english: "to read",
    "": "",
  },
  {
    german: "Lesen",
    english: "reading",
    "": "",
  },
  {
    german: "Note",
    english: "mark",
    "": "",
  },
  {
    german: "nötig",
    english: "necessary",
    "": "",
  },
  {
    german: "notwendig",
    english: "necessary",
    "": "",
  },
  {
    german: "nützlich",
    english: "useful",
    "": "",
  },
  {
    german: "nutzlos",
    english: "useless",
    "": "",
  },
  {
    german: "Oberstufe",
    english: "sixth form",
    "": "",
  },
  {
    german: "Pause (Mittagspause)",
    english: "break (lunch)",
    "": "",
  },
  {
    german: "Platz",
    english: "seat / room / square / court / pitch",
    "": "",
  },
  {
    german: "prüfen",
    english: "to test / examine / check",
    "": "",
  },
  {
    german: "Prüfung / Examen",
    english: "examination",
    "": "",
  },
  {
    german: "Punkt",
    english: "point (place / score / idea); full stop",
    "": "",
  },
  {
    german: "pünktlich",
    english: "punctual / on time",
    "": "",
  },
  {
    german: "richtig",
    english: "right / correct",
    "": "",
  },
  {
    german: "Saal / Halle",
    english: "hall (large room / concert)",
    "": "",
  },
  {
    german: "schreiben",
    english: "to write",
    "": "",
  },
  {
    german: "Schreibpapier",
    english: "writing paper",
    "": "",
  },
  {
    german: "Schreibwarengeschäft",
    english: "stationer's",
    "": "",
  },
  {
    german: "Schuldirektor/in",
    english: "head teacher",
    "": "",
  },
  {
    german: "Schule",
    english: "school",
    "": "",
  },
  {
    german: "Schüler/in",
    english: "pupil",
    "": "",
  },
  {
    german: "Schüleraustausch",
    english: "school exchange",
    "": "",
  },
  {
    german: "Schulhof",
    english: "school playground",
    "": "",
  },
  {
    german: "Schulstunde",
    english: "lesson",
    "": "",
  },
  {
    german: "schwach",
    english: "weak / poor (work)",
    "": "",
  },
  {
    german: "schweigen",
    english: "to be silent / to say nothing",
    "": "",
  },
  {
    german: "schwer",
    english: "hard / difficult",
    "": "",
  },
  {
    german: "schwierig",
    english: "difficult",
    "": "",
  },
  {
    german: "Seite",
    english: "page / side",
    "": "",
  },
  {
    german: "Semester / Trimester",
    english: "term",
    "": "",
  },
  {
    german: "stimmt (das stimmt)",
    english: "that's right",
    "": "",
  },
  {
    german: "Student/in",
    english: "student",
    "": "",
  },
  {
    german: "studieren",
    english: "to study",
    "": "",
  },
  {
    german: "Stunde",
    english: "hour",
    "": "",
  },
  {
    german: "Stundenplan",
    english: "timetable (school)",
    "": "",
  },
  {
    german: "Tafel",
    english: "board (black / white)",
    "": "",
  },
  {
    german: "Tag",
    english: "day",
    "": "",
  },
  {
    german: "Tagebuch",
    english: "diary (account)",
    "": "",
  },
  {
    german: "Unterricht",
    english: "lessons",
    "": "",
  },
  {
    german: "unterrichten",
    english: "to teach",
    "": "",
  },
  {
    german: "Versuch",
    english: "experiment / attempt",
    "": "",
  },
  {
    german: "versuchen",
    english: "to try (to do s.th)",
    "": "",
  },
  {
    german: "Wahl(fach)",
    english: "choice (option subject)",
    "": "",
  },
  {
    german: "wählen",
    english: "to choose",
    "": "",
  },
  {
    german: "wissen",
    english: "to know (facts)",
    "": "",
  },
  {
    german: "Woche",
    english: "week",
    "": "",
  },
  {
    german: "Wochenende",
    english: "weekend",
    "": "",
  },
  {
    german: "Wort",
    english: "word",
    "": "",
  },
  {
    german: "zuhören",
    english: "to listen to",
    "": "",
  },
  {
    german: "Bleistift",
    english: "pencil",
    "": "",
  },
  {
    german: "Etui",
    english: "pencil case",
    "": "",
  },
  {
    german: "Filzstift",
    english: "felt tip pen",
    "": "",
  },
  {
    german: "füllen",
    english: "to fill",
    "": "",
  },
  {
    german: "Füller",
    english: "fountain pen",
    "": "",
  },
  {
    german: "Gummi",
    english: "rubber",
    "": "",
  },
  {
    german: "Kugelschreiber / Kuli",
    english: "biro / ball point pen",
    "": "",
  },
  {
    german: "Lineal",
    english: "ruler",
    "": "",
  },
  {
    german: "Notizbuch",
    english: "note book",
    "": "",
  },
  {
    german: "Papier(e)",
    english: "paper(s) / documents",
    "": "",
  },
  {
    german: "Radiergummi",
    english: "rubber (=eraser)",
    "": "",
  },
  {
    german: "Sache(n)",
    english: "thing (things / belongings)",
    "": "",
  },
  {
    german: "Schere",
    english: "scissors",
    "": "",
  },
  {
    german: "Stift",
    english: "something to write with",
    "": "",
  },
  {
    german: "Stück",
    english: "piece (paper / cake etc)",
    "": "",
  },
  {
    german: "Taschenrechner",
    english: "calculator",
    "": "",
  },
  {
    german: "Taschentuch",
    english: "handkerchief",
    "": "",
  },
  {
    german: "Wörterbuch",
    english: "dictionary",
    "": "",
  },
  {
    german: "Zettel",
    english: "note / piece of paper",
    "": "",
  },
  {
    german: "Chemie",
    english: "chemistry",
    "": "",
  },
  {
    german: "Erdkunde",
    english: "geography",
    "": "",
  },
  {
    german: "Fach (Wahlfach)",
    english: "subject (option)",
    "": "",
  },
  {
    german: "Fremdsprache",
    english: "language (foreign)",
    "": "",
  },
  {
    german: "GCSE-Prüfungen",
    english: "GCSE exams",
    "": "",
  },
  {
    german: "Geschichte",
    english: "history",
    "": "",
  },
  {
    german: "Hauswirtschaftslehre",
    english: "home economics",
    "": "",
  },
  {
    german: "Informatik",
    english: "I.T.",
    "": "",
  },
  {
    german: "Mathe(matik)",
    english: "maths",
    "": "",
  },
  {
    german: "Naturwissenschaften",
    english: "science",
    "": "",
  },
  {
    german: "Pflichtfach",
    english: "compulsory subject",
    "": "",
  },
  {
    german: "Physik",
    english: "physics",
    "": "",
  },
  {
    german: "Religion",
    english: "R.E",
    "": "",
  },
  {
    german: "Technologie",
    english: "CDT",
    "": "",
  },
  {
    german: "Turnen",
    english: "P.E",
    "": "",
  },
  {
    german: "Turnhalle",
    english: "gymnasium",
    "": "",
  },
  {
    german: "Berufsschule",
    english: "technical college",
    "": "",
  },
  {
    german: "Gesamtschule",
    english: "comprehensive school",
    "": "",
  },
  {
    german: "Grundschule",
    english: "primary school",
    "": "",
  },
  {
    german: "Gymnasium",
    english: "grammar school",
    "": "",
  },
  {
    german: "Hauptschule",
    english: "secondary modern school",
    "": "",
  },
  {
    german: "Internat",
    english: "boarding school",
    "": "",
  },
  {
    german: "Kindergarten",
    english: "nursery school",
    "": "",
  },
  {
    german: "Privatschule",
    english: "private school",
    "": "",
  },
  {
    german: "Realschule",
    english: "secondary technical school",
    "": "",
  },
  {
    german: "Universität /Uni",
    english: "college / university",
    "": "",
  },
  {
    german: "Aufsatz",
    english: "essay",
    "": "",
  },
  {
    german: "Belohnung",
    english: "reward",
    "": "",
  },
  {
    german: "Bemerken",
    english: "to notice",
    "": "",
  },
  {
    german: "benehmen (sich)",
    english: "to behave",
    "": "",
  },
  {
    german: "beobachten",
    english: "to watch / observe",
    "": "",
  },
  {
    german: "Betriebswirtschaft",
    english: "business studies",
    "": "",
  },
  {
    german: "Bildung",
    english: "education",
    "": "",
  },
  {
    german: "brav",
    english: "well behaved",
    "": "",
  },
  {
    german: "Brett (schwarzes)",
    english: "notice board",
    "": "",
  },
  {
    german: "durchfallen",
    english: "to fail (exam)",
    "": "",
  },
  {
    german: "einreichen",
    english: "to hand in",
    "": "",
  },
  {
    german: "falten",
    english: "to fold",
    "": "",
  },
  {
    german: "Fortschritt(e)",
    english: "progress",
    "": "",
  },
  {
    german: "Gang",
    english: "corridor / gear",
    "": "",
  },
  {
    german: "herausfinden",
    english: "to find out / learn",
    "": "",
  },
  {
    german: "herunterladen",
    english: "to (down)load",
    "": "",
  },
  {
    german: "kleben",
    english: "to stick",
    "": "",
  },
  {
    german: "loben",
    english: "to praise",
    "": "",
  },
  {
    german: "lohnen (sich)",
    english: "to be worthwhile",
    "": "",
  },
  {
    german: "mangelhaft",
    english: "poor",
    "": "",
  },
  {
    german: "meinen",
    english: "to mean / think",
    "": "",
  },
  {
    german: "mündlich",
    english: "oral",
    "": "",
  },
  {
    german: "nachdenken",
    english: "to think over / reflect",
    "": "",
  },
  {
    german: "nachsitzen müssen",
    english: "to be kept in",
    "": "",
  },
  {
    german: "rechnen",
    english: "to calculate",
    "": "",
  },
  {
    german: "Rolle",
    english: "rôle",
    "": "",
  },
  {
    german: "schaffen",
    english: "to suceed / achieve",
    "": "",
  },
  {
    german: "schriftlich",
    english: "in writing",
    "": "",
  },
  {
    german: "Schulzeugnis",
    english: "school report",
    "": "",
  },
  {
    german: "sitzen bleiben",
    english: "to repeat the year",
    "": "",
  },
  {
    german: "Sozialkunde",
    english: "social science",
    "": "",
  },
  {
    german: "stören",
    english: "to disturb / interrupt",
    "": "",
  },
  {
    german: "übersetzen",
    english: "to translate",
    "": "",
  },
  {
    german: "Übersetzung",
    english: "translation",
    "": "",
  },
  {
    german: "Umfrage / Meinungsumfrage",
    english: "survey",
    "": "",
  },
  {
    german: "verbessern",
    english: "to correct / improve",
    "": "",
  },
  {
    german: "Versammlung",
    english: "meeting / school assembly",
    "": "",
  },
  {
    german: "Vokabeln",
    english: "vocabulary",
    "": "",
  },
  {
    german: "zählen",
    english: "to count",
    "": "",
  },
  {
    german: "Aktentasche",
    english: "briefcase",
    "": "",
  },
  {
    german: "am Apparat",
    english: "speaking! (on telephone)",
    "": "",
  },
  {
    german: "Anzeige",
    english: "advertisement",
    "": "",
  },
  {
    german: "Arbeit",
    english: "work",
    "": "",
  },
  {
    german: "arbeiten",
    english: "to work",
    "": "",
  },
  {
    german: "Arbeiter/in",
    english: "worker",
    "": "",
  },
  {
    german: "Ausbildung",
    english: "training",
    "": "",
  },
  {
    german: "ausbilden",
    english: "to train",
    "": "",
  },
  {
    german: "Bericht",
    english: "report",
    "": "",
  },
  {
    german: "Beruf",
    english: "profession",
    "": "",
  },
  {
    german: "Betriebspraktikum",
    english: "work experience",
    "": "",
  },
  {
    german: "Brieftasche",
    english: "wallet",
    "": "",
  },
  {
    german: "Büro",
    english: "office",
    "": "",
  },
  {
    german: "Fabrik",
    english: "factory",
    "": "",
  },
  {
    german: "Feierabend",
    english: "end of work day",
    "": "",
  },
  {
    german: "Feiertag",
    english: "public holiday",
    "": "",
  },
  {
    german: "Firma / Betrieb",
    english: "firm / company",
    "": "",
  },
  {
    german: "Ganztagsstelle",
    english: "full time job",
    "": "",
  },
  {
    german: "Gehalt",
    english: "salary / pay",
    "": "",
  },
  {
    german: "Geld(tasche)",
    english: "money (purse)",
    "": "",
  },
  {
    german: "Kasse",
    english: "till / cash desk",
    "": "",
  },
  {
    german: "Kleingeld",
    english: "change (small)",
    "": "",
  },
  {
    german: "Konto",
    english: "account (bank)",
    "": "",
  },
  {
    german: "Kreditkarte",
    english: "credit card",
    "": "",
  },
  {
    german: "Kunde / Kundin",
    english: "customer",
    "": "",
  },
  {
    german: "Lohn",
    english: "wages",
    "": "",
  },
  {
    german: "Münze",
    english: "coin",
    "": "",
  },
  {
    german: "Pfund",
    english: "pound (= sterling/ weight)",
    "": "",
  },
  {
    german: "Reklame",
    english: "advert",
    "": "",
  },
  {
    german: "Schein (e.g. 50-Euro-Schein)",
    english: "note (e.g. 50 euros)",
    "": "",
  },
  {
    german: "Stelle",
    english: "place / job",
    "": "",
  },
  {
    german: "Taschengeld",
    english: "pocket money",
    "": "",
  },
  {
    german: "Teilzeitarbeit",
    english: "part time work",
    "": "",
  },
  {
    german: "Telefonbuch",
    english: "telephone directory",
    "": "",
  },
  {
    german: "Telefonzelle",
    english: "telephone box",
    "": "",
  },
  {
    german: "Termin",
    english: "appointment",
    "": "",
  },
  {
    german: "Theke",
    english: "counter",
    "": "",
  },
  {
    german: "Trinkgeld",
    english: "tip (money)",
    "": "",
  },
  {
    german: "Umschlag",
    english: "envelope",
    "": "",
  },
  {
    german: "unterschreiben",
    english: "to sign",
    "": "",
  },
  {
    german: "Unterschrift",
    english: "signature",
    "": "",
  },
  {
    german: "verdienen",
    english: "to earn",
    "": "",
  },
  {
    german: "Vorwahl",
    english: "dialling code",
    "": "",
  },
  {
    german: "weiter machen",
    english: "to continue / carry on (doing s.th)",
    "": "",
  },
  {
    german: "Zukunft",
    english: "future",
    "": "",
  },
  {
    german: "arbeitslos",
    english: "unemployed",
    "": "",
  },
  {
    german: "Armee",
    english: "army",
    "": "",
  },
  {
    german: "Arzt / Ärztin",
    english: "doctor",
    "": "",
  },
  {
    german: "Babysitten",
    english: "babysitting",
    "": "",
  },
  {
    german: "babysitten",
    english: "to baby sit",
    "": "",
  },
  {
    german: "Beamte / Beamtin",
    english: "civil servant / official",
    "": "",
  },
  {
    german: "Briefträger/in",
    english: "postman / woman",
    "": "",
  },
  {
    german: "Chef/in",
    english: "boss",
    "": "",
  },
  {
    german: "Elektriker",
    english: "electrician",
    "": "",
  },
  {
    german: "Feuerwehr",
    english: "fire brigade",
    "": "",
  },
  {
    german: "Feuerwehrmann/frau",
    english: "fireman / woman",
    "": "",
  },
  {
    german: "Frisör / Friseuse",
    english: "hairdresser",
    "": "",
  },
  {
    german: "Geschäftsmann/frau",
    english: "businessman / woman",
    "": "",
  },
  {
    german: "Händler(in)",
    english: "shopkeeper",
    "": "",
  },
  {
    german: "Ingenieur/in",
    english: "engineer",
    "": "",
  },
  {
    german: "Kassierer(in)",
    english: "cashier",
    "": "",
  },
  {
    german: "Kellner(in)",
    english: "waiter/waitress",
    "": "",
  },
  {
    german: "Klempner/in",
    english: "plumber",
    "": "",
  },
  {
    german: "Koch / Köchin",
    english: "cook / chef",
    "": "",
  },
  {
    german: "kochen",
    english: "to cook",
    "": "",
  },
  {
    german: "Künstler/in",
    english: "artist",
    "": "",
  },
  {
    german: "Laden(besitzer)",
    english: "shop (owner / keeper)",
    "": "",
  },
  {
    german: "Leiter",
    english: "manager / leader",
    "": "",
  },
  {
    german: "Leiter",
    english: "ladder",
    "": "",
  },
  {
    german: "Mauer",
    english: "wall (exterior)",
    "": "",
  },
  {
    german: "Maurer",
    english: "builder",
    "": "",
  },
  {
    german: "Mechaniker/in",
    english: "mechanic",
    "": "",
  },
  {
    german: "Programmierer/in",
    english: "computer programmer",
    "": "",
  },
  {
    german: "Sekretär/in",
    english: "secretary",
    "": "",
  },
  {
    german: "Soldat",
    english: "soldier",
    "": "",
  },
  {
    german: "Tierarzt/ärztin",
    english: "vet",
    "": "",
  },
  {
    german: "Verkäufer/in",
    english: "sales assistant",
    "": "",
  },
  {
    german: "Arbeitgeber",
    english: "employer",
    "": "",
  },
  {
    german: "Arbeitnehmer",
    english: "employee",
    "": "",
  },
  {
    german: "Arbeitsamt",
    english: "job centre",
    "": "",
  },
  {
    german: "Arbeitslosigkeit",
    english: "unemployment",
    "": "",
  },
  {
    german: "Berufsberatung",
    english: "careers advice",
    "": "",
  },
  {
    german: "bewerben (sich)",
    english: "to apply for a job",
    "": "",
  },
  {
    german: "Bewerbungsgespräch",
    english: "job interview",
    "": "",
  },
  {
    german: "Gelegenheit",
    english: "opportunity / chance",
    "": "",
  },
  {
    german: "gelingen",
    english: "to succeed",
    "": "",
  },
  {
    german: "Hochschulabschluß",
    english: "degree (university)",
    "": "",
  },
  {
    german: "Jura",
    english: "law",
    "": "",
  },
  {
    german: "Lebenslauf",
    english: "CV",
    "": "",
  },
  {
    german: "leisten",
    english: "to achieve",
    "": "",
  },
  {
    german: "Leistung",
    english: "achievement",
    "": "",
  },
  {
    german: "Matrose / Seemann",
    english: "sailor",
    "": "",
  },
  {
    german: "Pension (in Pension gehen)",
    english: "(to retire)",
    "": "",
  },
  {
    german: "Personal",
    english: "staff",
    "": "",
  },
  {
    german: "qualifiziert",
    english: "qualified",
    "": "",
  },
  {
    german: "Quittung",
    english: "receipt",
    "": "",
  },
  {
    german: "Rente",
    english: "pension",
    "": "",
  },
  {
    german: "tippen",
    english: "to type",
    "": "",
  },
  {
    german: "Universitätsabschluss/grad",
    english: "degree (university)",
    "": "",
  },
  {
    german: "vorhaben",
    english: "to intend, to plan to",
    "": "",
  },
  {
    german: "Vorschlag",
    english: "suggestion",
    "": "",
  },
  {
    german: "Vorstellungsgespräch",
    english: "job interview",
    "": "",
  },
];
