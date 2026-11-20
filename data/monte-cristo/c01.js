window.MultiReadChapter = {
  "schemaVersion": 3,
  "bookId": "monte-cristo",
  "chapterId": "c01",
  "chapterNumber": 1,
  "title": "Marseille. L’arrivee.",
  "status": "levels-a2-b2-original-first-pass",
  "nextChapterId": "c02",
  "source": {
    "epub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
    "file": "OEBPS/e08600196_c01.html",
    "paragraphCount": 141,
    "adaptations": "c01.adaptations.json"
  },
  "levels": [
    "simple",
    "advanced",
    "original"
  ],
  "processingNotes": [
    "Original retains the EPUB source text.",
    "Simple is an authored A2 retelling, paragraph by paragraph, with at most 20 supported words in the chapter.",
    "Advanced is an authored B2 rewrite that keeps every event and line of dialogue.",
    "Each level has its own vocabulary: representations carry vocabularyKeys and glossary entries list their levels.",
    "Recurrence counts use the 55-chapter available volume, not the complete novel.",
    "Sentence translations are blank."
  ],
  "vocabularyAnalysis": {
    "volumeChapters": 55,
    "analyzedContentTokens": 100081,
    "tokenizer": "spaCy fr_core_news_sm",
    "flelex": "FleLex_TT_Beacco.tsv",
    "lexique": "Lexique400.tsv",
    "vocabularyFile": "c01.vocabulary.json",
    "difficultyMapFile": "c01.difficulty-map.json",
    "tokensFile": "c01.tokens.json",
    "levelCheckFile": "c01.level-check.json"
  },
  "passages": [
    {
      "id": "c01-p001",
      "sequence": 1,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 1,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p001-simple-s01",
              "text": "Nous sommes le 24 février 1815, à Marseille. Un grand bateau arrive: c’est le Pharaon. Il vient de Smyrne, de Trieste et de Naples.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p001-advanced-s01",
              "text": "Le 24 février 1815, le guetteur de Notre-Dame-de-la-Garde signala le trois-mâts le Pharaon, qui venait de Smyrne, de Trieste et de Naples.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "trois-mats",
            "pharaon",
            "smyrne",
            "guetteur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p001-original-s01",
              "text": "Le 24 février 1815, la vigie de Notre-Dame-de-la-Garde signala le trois-màts le Pharaon, venant de Smyrne, Trieste et Naples.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "vigie",
            "trois-mats",
            "pharaon",
            "smyrne",
            "trieste",
            "naples"
          ]
        }
      },
      "originalComparison": [
        "Le 24 février 1815, la vigie de Notre-Dame-de-la-Garde signala le trois-màts le Pharaon, venant de Smyrne, Trieste et Naples."
      ]
    },
    {
      "id": "c01-p002",
      "sequence": 2,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 2,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p002-simple-s01",
              "text": "Comme toujours, un pilote part du port pour aider le bateau à entrer.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "pilote"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p002-advanced-s01",
              "text": "Comme d’habitude, un pilote côtier partit aussitôt du port, passa tout près du château d’If et monta à bord du navire entre le cap de Morgiou et l’île de Rion.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pilote-cotier",
            "chateau-d-if",
            "navire"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p002-original-s01",
              "text": "Comme d’habitude, un pilote côtier partit aussitôt du port, rasa le château d’If, et alla aborder le navire entre le cap de Morgiou et l’île de Rion.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pilote-cotier",
            "aussitot",
            "chateau-d-if",
            "navire"
          ]
        }
      },
      "originalComparison": [
        "Comme d’habitude, un pilote côtier partit aussitôt du port, rasa le château d’If, et alla aborder le navire entre le cap de Morgiou et l’île de Rion."
      ]
    },
    {
      "id": "c01-p003",
      "sequence": 3,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 3,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p003-simple-s01",
              "text": "Beaucoup de gens viennent regarder. À Marseille, l’arrivée d’un bateau est toujours un grand moment. Et le Pharaon est un bateau de la ville: son armateur, monsieur Morrel, habite à Marseille.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p003-advanced-s01",
              "text": "Aussitôt, comme d’habitude encore, la plate-forme du fort Saint-Jean s’était couverte de curieux; car l’arrivée d’un navire est toujours un événement à Marseille, surtout quand ce navire, comme le Pharaon, a été construit, équipé et chargé dans les chantiers de la ville, et qu’il appartient à un armateur marseillais.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "navire",
            "armateur",
            "curieux",
            "chantiers"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p003-original-s01",
              "text": "Aussitôt, comme d’habitude encore, la plate-forme du fort Saint-Jean s’était couverte de curieux; car c’est toujours une grande affaire à Marseille que l’arrivée d’un bâtiment, surtout quand ce bâtiment, comme le Pharaon, a été construit, gréé, arrimé sur les chantiers de la vieille Phocée, et appartient à un armateur de la ville.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "aussitot",
            "batiment",
            "armateur",
            "curieux",
            "marseille",
            "gree",
            "arrime"
          ]
        }
      },
      "originalComparison": [
        "Aussitôt, comme d’habitude encore, la plate-forme du fort Saint-Jean s’était couverte de curieux; car c’est toujours une grande affaire à Marseille que l’arrivée d’un bâtiment, surtout quand ce bâtiment, comme le Pharaon, a été construit, gréé, arrimé sur les chantiers de la vieille Phocée, et appartient à un armateur de la ville."
      ]
    },
    {
      "id": "c01-p004",
      "sequence": 4,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 4,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p004-simple-s01",
              "text": "Le bateau avance, mais très lentement. Il a l’air triste. Les gens se demandent: « Est-ce qu’il y a un problème à bord? » Mais le bateau va bien. À côté du pilote, il y a un jeune homme. Il regarde tout et il répète les ordres du pilote.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "pilote"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p004-advanced-s01",
              "text": "Cependant le navire avançait.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p004-advanced-s02",
              "text": "Il avait franchi sans difficulté le détroit qui sépare l’île de Calasareigne de l’île de Jaros, il avait contourné Pomègue et il avançait sous ses trois voiles hautes, sa grande voile d’avant et sa voile d’arrière, mais si lentement et d’une allure si triste que les curieux, avec cet instinct qui fait pressentir un malheur, se demandaient quel accident avait pu arriver à bord.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p004-advanced-s03",
              "text": "Pourtant, les connaisseurs voyaient bien que, si un accident était arrivé, ce ne pouvait pas être au navire lui-même, car il avançait comme un bâtiment parfaitement dirigé: son ancre était prête à être jetée et les cordages de l’avant étaient détachés.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p004-advanced-s04",
              "text": "Près du pilote, qui s’apprêtait à guider le Pharaon par l’étroite entrée du port de Marseille, se tenait un jeune homme aux gestes rapides et au regard vif, qui surveillait chaque mouvement du navire et répétait chaque ordre du pilote.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "navire",
            "batiment",
            "curieux",
            "allure",
            "detroit",
            "pressentir",
            "connaisseurs",
            "cordages"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p004-original-s01",
              "text": "Cependant ce bâtiment s’avançait; il avait heureusement franchi le détroit que quelque secousse volcanique a creusé entre l’île de Calasareigne et l’île de Jaros; il avait doublé Pomègue, et s’avançait sous ses trois huniers, son grand foc et sa brigantine, mais si lentement et d’une allure si triste, que les curieux, avec cet instinct qui pressent un malheur, se demandaient quel accident pouvait être arrivé à bord.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p004-original-s02",
              "text": "Néanmoins les experts en navigation reconnaissaient que si un accident était arrivé, ce ne pouvait être au bâtiment lui-même; car il s’avançait dans toutes les conditions d’un navire parfaitement gouverné; son ancre était au mouillage, ses haubans de beaupré décrochés; et près du pilote, qui s’apprêtait à diriger le Pharaon par l’étroite entrée du port de Marseille, était un jeune homme au geste rapide et à l’œil actif, qui surveillait chaque mouvement du navire et répétait chaque ordre du pilote.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "navire",
            "batiment",
            "curieux",
            "mouillage",
            "haubans",
            "beaupre",
            "huniers",
            "foc",
            "brigantine",
            "allure",
            "bord",
            "marseille"
          ]
        }
      },
      "originalComparison": [
        "Cependant ce bâtiment s’avançait; il avait heureusement franchi le détroit que quelque secousse volcanique a creusé entre l’île de Calasareigne et l’île de Jaros; il avait doublé Pomègue, et s’avançait sous ses trois huniers, son grand foc et sa brigantine, mais si lentement et d’une allure si triste, que les curieux, avec cet instinct qui pressent un malheur, se demandaient quel accident pouvait être arrivé à bord.",
        "Néanmoins les experts en navigation reconnaissaient que si un accident était arrivé, ce ne pouvait être au bâtiment lui-même; car il s’avançait dans toutes les conditions d’un navire parfaitement gouverné; son ancre était au mouillage, ses haubans de beaupré décrochés; et près du pilote, qui s’apprêtait à diriger le Pharaon par l’étroite entrée du port de Marseille, était un jeune homme au geste rapide et à l’œil actif, qui surveillait chaque mouvement du navire et répétait chaque ordre du pilote."
      ]
    },
    {
      "id": "c01-p005",
      "sequence": 5,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 5,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p005-simple-s01",
              "text": "Un homme est très inquiet. Il ne veut pas attendre. Il saute dans une petite barque et il va vers le Pharaon.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "barque"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p005-advanced-s01",
              "text": "La vague inquiétude qui flottait sur la foule avait particulièrement touché l’un des spectateurs de l’esplanade de Saint-Jean, si bien qu’il ne put attendre l’entrée du navire dans le port: il sauta dans une petite barque et ordonna de ramer à la rencontre du Pharaon, qu’il rejoignit en face de l’anse de la Réserve.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "navire",
            "barque",
            "anse",
            "ramer"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p005-original-s01",
              "text": "La vague inquiétude qui planait sur la foule avait particulièrement atteint un des spectateurs de l’esplanade de Saint-Jean, de sorte qu’il ne put attendre l’entrée du bâtiment dans le port; il sauta dans une petite barque et ordonna de ramer au-devant du Pharaon, qu’il atteignit en face de l’anse de la Réserve.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "batiment",
            "barque",
            "anse"
          ]
        }
      },
      "originalComparison": [
        "La vague inquiétude qui planait sur la foule avait particulièrement atteint un des spectateurs de l’esplanade de Saint-Jean, de sorte qu’il ne put attendre l’entrée du bâtiment dans le port; il sauta dans une petite barque et ordonna de ramer au-devant du Pharaon, qu’il atteignit en face de l’anse de la Réserve."
      ]
    },
    {
      "id": "c01-p006",
      "sequence": 6,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 6,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p006-simple-s01",
              "text": "Le jeune marin voit cet homme. Il quitte sa place et il vient au bord du bateau, son chapeau à la main.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p006-advanced-s01",
              "text": "En voyant venir cet homme, le jeune marin quitta son poste à côté du pilote et vint, le chapeau à la main, s’appuyer au bord du navire.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p006-original-s01",
              "text": "En voyant venir cet homme, le jeune marin quitta son poste à côté du pilote, et vint, le chapeau à la main, s’appuyer à la muraille du bâtiment.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "batiment",
            "muraille"
          ]
        }
      },
      "originalComparison": [
        "En voyant venir cet homme, le jeune marin quitta son poste à côté du pilote, et vint, le chapeau à la main, s’appuyer à la muraille du bâtiment."
      ]
    },
    {
      "id": "c01-p007",
      "sequence": 7,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 7,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p007-simple-s01",
              "text": "Il a dix-huit ou vingt ans. Il est grand et mince. Il a de beaux yeux noirs et des cheveux très noirs. Il a l’air calme et fort: il connaît le danger depuis qu’il est enfant.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p007-advanced-s01",
              "text": "C’était un jeune homme de dix-huit à vingt ans, grand, mince, avec de beaux yeux noirs et des cheveux d’un noir profond; il y avait dans toute sa personne cet air de calme et de détermination propre aux hommes habitués depuis l’enfance à lutter contre le danger.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p007-original-s01",
              "text": "C’était un jeune homme de dix-huit à vingt ans, grand, svelte, avec de beaux yeux noirs et des cheveux d’ébène; il y avait dans toute sa personne cet air de calme et de résolution particulier aux hommes habitués depuis leur enfance à lutter avec le danger.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "resolution"
          ]
        }
      },
      "originalComparison": [
        "C’était un jeune homme de dix-huit à vingt ans, grand, svelte, avec de beaux yeux noirs et des cheveux d’ébène; il y avait dans toute sa personne cet air de calme et de résolution particulier aux hommes habitués depuis leur enfance à lutter avec le danger."
      ]
    },
    {
      "id": "c01-p008",
      "sequence": 8,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 8,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p008-simple-s01",
              "text": "— Ah! c’est vous, Dantès! crie l’homme dans la barque. Qu’est-ce qui est arrivé? Pourquoi tout le monde est triste sur votre bateau?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "barque"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p008-advanced-s01",
              "text": "— Ah! c’est vous, Dantès! cria l’homme de la barque. Qu’est-il donc arrivé, et pourquoi cet air de tristesse sur tout votre bord?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "barque"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p008-original-s01",
              "text": "— Ah! c’est vous, Dantès! cria l’homme à la barque; qu’est-il donc arrivé, et pourquoi cet air de tristesse répandu sur tout votre bord?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "bord",
            "barque",
            "dantes",
            "tristesse"
          ]
        }
      },
      "originalComparison": [
        "— Ah! c’est vous, Dantès! cria l’homme à la barque; qu’est-il donc arrivé, et pourquoi cet air de tristesse répandu sur tout votre bord?"
      ]
    },
    {
      "id": "c01-p009",
      "sequence": 9,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 9,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p009-simple-s01",
              "text": "— Un grand malheur, monsieur Morrel! répond le jeune homme. Nous avons perdu notre bon capitaine Leclère.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine",
            "malheur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p009-advanced-s01",
              "text": "— Un grand malheur, monsieur Morrel! répondit le jeune homme, un grand malheur, pour moi surtout: au large de Civita-Vecchia, nous avons perdu ce brave capitaine Leclère.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "au-large"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p009-original-s01",
              "text": "— Un grand malheur, monsieur Morrel! répondit le jeune homme, un grand malheur, pour moi surtout: à la hauteur de Civita-Vecchia nous avons perdu ce brave capitaine Leclère.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel",
            "leclere",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Un grand malheur, monsieur Morrel! répondit le jeune homme, un grand malheur, pour moi surtout: à la hauteur de Civita-Vecchia nous avons perdu ce brave capitaine Leclère."
      ]
    },
    {
      "id": "c01-p010",
      "sequence": 10,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 10,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p010-simple-s01",
              "text": "— Et les marchandises? demande vite l’armateur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "marchandises"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p010-advanced-s01",
              "text": "— Et le chargement? demanda vivement l’armateur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "chargement"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p010-original-s01",
              "text": "— Et le chargement? demanda vivement l’armateur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "chargement"
          ]
        }
      },
      "originalComparison": [
        "— Et le chargement? demanda vivement l’armateur."
      ]
    },
    {
      "id": "c01-p011",
      "sequence": 11,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 11,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p011-simple-s01",
              "text": "— Elles sont bien arrivées, monsieur Morrel. Vous allez être content. Mais ce pauvre capitaine Leclère…",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p011-advanced-s01",
              "text": "— Il est arrivé à bon port, monsieur Morrel, et je crois que vous serez content de ce côté-là; mais ce pauvre capitaine Leclère…",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "a-bon-port"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p011-original-s01",
              "text": "— Il est arrivé à bon port, monsieur Morrel, et je crois que vous serez content sous ce rapport; mais ce Pauvre capitaine Leclère...",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel",
            "leclere",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Il est arrivé à bon port, monsieur Morrel, et je crois que vous serez content sous ce rapport; mais ce Pauvre capitaine Leclère..."
      ]
    },
    {
      "id": "c01-p012",
      "sequence": 12,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 12,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p012-simple-s01",
              "text": "— Qu’est-ce qui lui est arrivé? demande l’armateur. Maintenant, il est plus tranquille.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p012-advanced-s01",
              "text": "— Que lui est-il donc arrivé? demanda l’armateur, visiblement soulagé. Que lui est-il arrivé, à ce brave capitaine?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "soulage"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p012-original-s01",
              "text": "— Que lui est-il donc arrivé? demanda l’armateur d’un air visiblement soulagé, que lui est-il donc arrivé, à ce brave capitaine?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Que lui est-il donc arrivé? demanda l’armateur d’un air visiblement soulagé, que lui est-il donc arrivé, à ce brave capitaine?"
      ]
    },
    {
      "id": "c01-p013",
      "sequence": 13,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 13,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p013-simple-s01",
              "text": "— Il est mort.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p013-advanced-s01",
              "text": "— Il est mort.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p013-original-s01",
              "text": "— Il est mort.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Il est mort."
      ]
    },
    {
      "id": "c01-p014",
      "sequence": 14,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 14,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p014-simple-s01",
              "text": "— Il est tombé dans la mer?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p014-advanced-s01",
              "text": "— Tombé à la mer?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p014-original-s01",
              "text": "— Tombé à la mer?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Tombé à la mer?"
      ]
    },
    {
      "id": "c01-p015",
      "sequence": 15,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 15,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p015-simple-s01",
              "text": "— Non, monsieur. Il est mort d’une forte fièvre. Il a été très malade. Puis le jeune homme se tourne vers ses hommes:",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "fievre"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p015-advanced-s01",
              "text": "— Non, monsieur; il est mort d’une fièvre cérébrale, au milieu d’horribles souffrances. Puis, se retournant vers ses hommes:",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "fievre-cerebrale"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p015-original-s01",
              "text": "— Non, monsieur; mort d’une fièvre cérébrale, au milieu d’horribles souffrances. Puis, se retournant vers ses hommes:",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "fievre-cerebrale"
          ]
        }
      },
      "originalComparison": [
        "— Non, monsieur; mort d’une fièvre cérébrale, au milieu d’horribles souffrances. Puis, se retournant vers ses hommes:"
      ]
    },
    {
      "id": "c01-p016",
      "sequence": 16,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 16,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p016-simple-s01",
              "text": "— Attention! dit-il. Tout le monde à sa place! Nous allons jeter l’ancre!",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "ancre"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p016-advanced-s01",
              "text": "— Holà! dit-il, chacun à son poste pour le mouillage!",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "mouillage"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p016-original-s01",
              "text": "— Holà hé! dit-il, chacun à son poste pour le mouillage!",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "mouillage"
          ]
        }
      },
      "originalComparison": [
        "— Holà hé! dit-il, chacun à son poste pour le mouillage!"
      ]
    },
    {
      "id": "c01-p017",
      "sequence": 17,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 17,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p017-simple-s01",
              "text": "L’équipage obéit. Les huit ou dix marins courent et commencent à travailler avec les voiles.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "equipage",
            "marin",
            "voile",
            "obeir"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p017-advanced-s01",
              "text": "L’équipage obéit.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p017-advanced-s02",
              "text": "Au même instant, les huit ou dix matelots qui le composaient s’élancèrent vers les différents cordages qui commandent les voiles.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "matelots",
            "equipage",
            "cordages"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p017-original-s01",
              "text": "L’équipage obéit.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p017-original-s02",
              "text": "Au même instant, les huit ou dix matelots qui le composaient s’élancèrent, les uns sur les écoutes, les autres sur les bras, les autres aux drisses, les autres aux hallebas des focs, enfin les autres aux cargues des voiles.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "foc",
            "matelots",
            "ecoutes",
            "drisses",
            "cargues",
            "equipage"
          ]
        }
      },
      "originalComparison": [
        "L’équipage obéit.",
        "Au même instant, les huit ou dix matelots qui le composaient s’élancèrent, les uns sur les écoutes, les autres sur les bras, les autres aux drisses, les autres aux hallebas des focs, enfin les autres aux cargues des voiles."
      ]
    },
    {
      "id": "c01-p018",
      "sequence": 18,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 18,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p018-simple-s01",
              "text": "Le jeune marin regarde un moment. Tout va bien. Alors il revient parler avec monsieur Morrel.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p018-advanced-s01",
              "text": "Le jeune marin jeta un coup d’œil détaché sur ce début de manœuvre et, voyant que ses ordres allaient être exécutés, il revint à son interlocuteur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "interlocuteur",
            "man-uvre"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p018-original-s01",
              "text": "Le jeune marin jeta un coup d’œil nonchalant sur ce commencement de manœuvre, et voyant que ses ordres allaient s’exécuter, il revint à son interlocuteur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "interlocuteur"
          ]
        }
      },
      "originalComparison": [
        "Le jeune marin jeta un coup d’œil nonchalant sur ce commencement de manœuvre, et voyant que ses ordres allaient s’exécuter, il revint à son interlocuteur."
      ]
    },
    {
      "id": "c01-p019",
      "sequence": 19,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 19,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p019-simple-s01",
              "text": "— Et comment ce malheur est-il arrivé? demande l’armateur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "malheur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p019-advanced-s01",
              "text": "— Et comment ce malheur est-il donc arrivé? continua l’armateur, reprenant la conversation là où elle s’était interrompue.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p019-original-s01",
              "text": "— Et comment ce malheur est-il donc arrivé? continua l’armateur, reprenant la conversation où elle venait d’être abandonnée.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        }
      },
      "originalComparison": [
        "— Et comment ce malheur est-il donc arrivé? continua l’armateur, reprenant la conversation où elle venait d’être abandonnée."
      ]
    },
    {
      "id": "c01-p020",
      "sequence": 20,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 20,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p020-simple-s01",
              "text": "— C’est arrivé très vite, monsieur. À Naples, le capitaine a parlé longtemps avec le chef du port. Après, il était très nerveux. Le jour suivant, il a eu de la fièvre. Trois jours après, il était mort…",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine",
            "fievre"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p020-advanced-s01",
              "text": "— Mon Dieu, monsieur, de la façon la plus inattendue: après une longue conversation avec le commandant du port, le capitaine Leclère quitta Naples très agité; au bout de vingt-quatre heures, la fièvre le prit, et trois jours après il était mort…",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p020-original-s01",
              "text": "— Mon Dieu, monsieur, de la façon la plus imprévue: après une longue conversation avec le commandant du port, le capitaine Leclère quitta Naples fort agité; au bout de vingt-quatre heures la fièvre le prit, trois jours après il était mort...",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "naples",
            "leclere",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Mon Dieu, monsieur, de la façon la plus imprévue: après une longue conversation avec le commandant du port, le capitaine Leclère quitta Naples fort agité; au bout de vingt-quatre heures la fièvre le prit, trois jours après il était mort..."
      ]
    },
    {
      "id": "c01-p021",
      "sequence": 21,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 21,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p021-simple-s01",
              "text": "— Pauvre capitaine!",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p021-advanced-s01",
              "text": "— Pauvre capitaine!",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p021-original-s01",
              "text": "— Pauvre capitaine!",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Pauvre capitaine!"
      ]
    },
    {
      "id": "c01-p022",
      "sequence": 22,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 22,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p022-simple-s01",
              "text": "Nous l’avons mis dans la mer, comme on fait pour les marins. Nous avons ses affaires pour sa femme. Il a fait la guerre aux Anglais pendant dix ans, dit le jeune homme avec un sourire triste, et il est mort dans son lit, comme tout le monde.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p022-advanced-s01",
              "text": "Nous lui avons fait les funérailles habituelles, et il repose, décemment enveloppé dans un hamac, avec un boulet de canon aux pieds et un autre à la tête, au large de l’île d’El Giglio.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p022-advanced-s02",
              "text": "Nous rapportons à sa veuve sa croix d’honneur et son épée.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p022-advanced-s03",
              "text": "C’était bien la peine, continua le jeune homme avec un sourire mélancolique, de faire dix ans la guerre aux Anglais pour finir par mourir comme tout le monde, dans son lit.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "hamac",
            "boulet",
            "au-large",
            "funerailles",
            "decemment",
            "veuve",
            "epee"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p022-original-s01",
              "text": "Nous lui avons fait les funérailles ordinaires, et il repose décemment enveloppé dans un hamac, avec un boulet de trente-six aux pieds et un à la tête, à la hauteur de l’île d’el Giglio.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p022-original-s02",
              "text": "Nous rapportons à sa veuve sa croix d’honneur et son épée.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p022-original-s03",
              "text": "C’était bien la peine, continua le jeune homme avec un sourire mélancolique, de faire dix ans la guerre aux Anglais pour en arriver à mourir comme tout le monde, dans son lit.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "hamac",
            "boulet"
          ]
        }
      },
      "originalComparison": [
        "Nous lui avons fait les funérailles ordinaires, et il repose décemment enveloppé dans un hamac, avec un boulet de trente-six aux pieds et un à la tête, à la hauteur de l’île d’el Giglio.",
        "Nous rapportons à sa veuve sa croix d’honneur et son épée.",
        "C’était bien la peine, continua le jeune homme avec un sourire mélancolique, de faire dix ans la guerre aux Anglais pour en arriver à mourir comme tout le monde, dans son lit."
      ]
    },
    {
      "id": "c01-p023",
      "sequence": 23,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 23,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p023-simple-s01",
              "text": "— Eh oui, monsieur Edmond, dit l’armateur. Tout le monde doit mourir un jour, et les vieux laissent leur place aux jeunes. Et si les marchandises…",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "marchandises"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p023-advanced-s01",
              "text": "— Dame! que voulez-vous, monsieur Edmond, reprit l’armateur, qui semblait se consoler de plus en plus, nous sommes tous mortels, et il faut bien que les anciens laissent la place aux nouveaux; sans cela, il n’y aurait pas d’avancement. Et du moment que vous m’assurez que la cargaison…",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "cargaison",
            "avancement"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p023-original-s01",
              "text": "— Dam! que voulez-vous, monsieur Edmond, reprit l’armateur, qui paraissait se consoler de plus en plus, nous sommes tous mortels, et il faut bien que les anciens fassent place aux nouveaux; sans cela il n’y aurait pas d’avancement; et du moment que vous m’assurez que la cargaison...",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "cargaison",
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— Dam! que voulez-vous, monsieur Edmond, reprit l’armateur, qui paraissait se consoler de plus en plus, nous sommes tous mortels, et il faut bien que les anciens fassent place aux nouveaux; sans cela il n’y aurait pas d’avancement; et du moment que vous m’assurez que la cargaison..."
      ]
    },
    {
      "id": "c01-p024",
      "sequence": 24,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 24,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p024-simple-s01",
              "text": "— Tout va bien, monsieur Morrel. Avec ce voyage, vous allez gagner plus de 25 000 francs.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p024-advanced-s01",
              "text": "— Est en bon état, monsieur Morrel, je vous le garantis. Voilà un voyage dont je vous conseille de ne pas céder les bénéfices pour 25 000 francs.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "ceder"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p024-original-s01",
              "text": "— Est en bon état, monsieur Morrel, je vous en réponds. Voici un voyage que je vous donne le conseil de ne point escompter pour 25, 000 francs de bénéfice.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "escompter",
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Est en bon état, monsieur Morrel, je vous en réponds. Voici un voyage que je vous donne le conseil de ne point escompter pour 25, 000 francs de bénéfice."
      ]
    },
    {
      "id": "c01-p025",
      "sequence": 25,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 25,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p025-simple-s01",
              "text": "Le bateau passe devant la tour ronde. — Préparez-vous à descendre les voiles! crie le jeune marin.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin",
            "voile"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p025-advanced-s01",
              "text": "Puis, comme on venait de dépasser la tour ronde: — Préparez-vous à replier les voiles hautes, la voile d’avant et la voile d’arrière! cria le jeune marin.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p025-original-s01",
              "text": "Puis, comme on venait de dépasser la tour ronde: — Range à carguer les voiles de hune, le foc et la brigantine! cria le jeune marin; faites penaud!",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "foc",
            "brigantine"
          ]
        }
      },
      "originalComparison": [
        "Puis, comme on venait de dépasser la tour ronde: — Range à carguer les voiles de hune, le foc et la brigantine! cria le jeune marin; faites penaud!"
      ]
    },
    {
      "id": "c01-p026",
      "sequence": 26,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 26,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p026-simple-s01",
              "text": "Les marins obéissent très vite.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin",
            "obeir"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p026-advanced-s01",
              "text": "L’ordre fut exécuté presque aussi rapidement que sur un navire de guerre.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p026-original-s01",
              "text": "L’ordre s’exécuta avec presque autant de promptitude que sur un bâtiment de guerre.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "batiment"
          ]
        }
      },
      "originalComparison": [
        "L’ordre s’exécuta avec presque autant de promptitude que sur un bâtiment de guerre."
      ]
    },
    {
      "id": "c01-p027",
      "sequence": 27,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 27,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p027-simple-s01",
              "text": "— Descendez toutes les voiles!",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "voile"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p027-advanced-s01",
              "text": "— Abaissez et repliez tout!",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p027-original-s01",
              "text": "— Amène et cargue partout!",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "cargues"
          ]
        }
      },
      "originalComparison": [
        "— Amène et cargue partout!"
      ]
    },
    {
      "id": "c01-p028",
      "sequence": 28,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 28,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p028-simple-s01",
              "text": "Toutes les voiles descendent. Le bateau avance encore un peu, très doucement.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "voile"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p028-advanced-s01",
              "text": "À ce dernier commandement, toutes les voiles s’abaissèrent, et le navire n’avança plus que d’une façon presque imperceptible, porté par son seul élan.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "elan"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p028-original-s01",
              "text": "Au dernier commandement, toutes les voiles s’abaissèrent, et le navire s’avança d’une façon presque insensible, ne marchant plus que par l’impulsion donnée.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "navire"
          ]
        }
      },
      "originalComparison": [
        "Au dernier commandement, toutes les voiles s’abaissèrent, et le navire s’avança d’une façon presque insensible, ne marchant plus que par l’impulsion donnée."
      ]
    },
    {
      "id": "c01-p029",
      "sequence": 29,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 29,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p029-simple-s01",
              "text": "— Voulez-vous monter, monsieur Morrel? dit Dantès. Voici votre comptable, monsieur Danglars. Il sort de sa cabine. Il peut répondre à toutes vos questions. Moi, je dois m’occuper de l’ancre.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "comptable",
            "ancre"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p029-advanced-s01",
              "text": "— Et maintenant, si vous voulez monter, monsieur Morrel, dit Dantès en voyant l’impatience de l’armateur, voici votre comptable, M. Danglars, qui sort de sa cabine et qui vous donnera tous les renseignements que vous pouvez désirer. Quant à moi, il faut que je surveille le mouillage et que je mette le navire en deuil.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "armateur",
            "mouillage",
            "comptable",
            "deuil"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p029-original-s01",
              "text": "— Et maintenant si vous voulez monter, monsieur Morrel, dit Dantès voyant l’impatience de l’armateur, voici votre comptable, M. Danglars, qui sort de sa cabine, et qui vous donnera tous les renseignements que vous pouvez désirer. Quant à moi, il faut que je veille au mouillage et que je mette le navire en deuil.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "armateur",
            "mouillage",
            "comptable",
            "dantes",
            "morrel",
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— Et maintenant si vous voulez monter, monsieur Morrel, dit Dantès voyant l’impatience de l’armateur, voici votre comptable, M. Danglars, qui sort de sa cabine, et qui vous donnera tous les renseignements que vous pouvez désirer. Quant à moi, il faut que je veille au mouillage et que je mette le navire en deuil."
      ]
    },
    {
      "id": "c01-p030",
      "sequence": 30,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 30,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p030-simple-s01",
              "text": "L’armateur monte vite sur le bateau. Dantès retourne à sa place de second. Danglars vient vers l’armateur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "second"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p030-advanced-s01",
              "text": "L’armateur ne se le fit pas dire deux fois.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p030-advanced-s02",
              "text": "Il saisit un câble que lui lança Dantès et, avec une adresse digne d’un homme de mer, il grimpa les échelons fixés sur le flanc arrondi du navire, tandis que Dantès, retournant à son poste de second, laissait la conversation à celui qu’il avait annoncé sous le nom de Danglars et qui, sortant de sa cabine, s’avançait en effet à la rencontre de l’armateur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "armateur",
            "second",
            "echelons",
            "flanc"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p030-original-s01",
              "text": "L’armateur ne se le fit pas dire deux fois.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p030-original-s02",
              "text": "Il saisit un câble que lui jeta Dantès, et, avec une dextérité qui eût fait honneur à un homme de mer, il gravit les échelons cloués sur le flanc rebondi du bâtiment, tandis que celui-ci, retournant à son poste de second, cédait la conversation à celui qu’il avait annoncé sous le nom de Danglars, et qui, sortant de la cabine, s’avançait effectivement au-devant de l’armateur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "batiment",
            "armateur",
            "dantes",
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "L’armateur ne se le fit pas dire deux fois.",
        "Il saisit un câble que lui jeta Dantès, et, avec une dextérité qui eût fait honneur à un homme de mer, il gravit les échelons cloués sur le flanc rebondi du bâtiment, tandis que celui-ci, retournant à son poste de second, cédait la conversation à celui qu’il avait annoncé sous le nom de Danglars, et qui, sortant de la cabine, s’avançait effectivement au-devant de l’armateur."
      ]
    },
    {
      "id": "c01-p031",
      "sequence": 31,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 31,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p031-simple-s01",
              "text": "Danglars a vingt-cinq ou vingt-six ans. Son visage n’est pas agréable. Il est très gentil avec ses chefs, mais méchant avec les autres. Les marins ne l’aiment pas. Mais ils aiment beaucoup Edmond Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin",
            "mechant"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p031-advanced-s01",
              "text": "Le nouveau venu était un homme de vingt-cinq à vingt-six ans, au visage assez sombre, servile envers ses supérieurs, insolent envers ses subordonnés; aussi, en plus de sa fonction d’agent comptable, qui inspire toujours de l’aversion aux matelots, était-il généralement aussi mal vu de l’équipage qu’Edmond Dantès en était aimé.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "matelots",
            "comptable",
            "subordonnes",
            "equipage",
            "servile",
            "aversion"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p031-original-s01",
              "text": "Le nouveau venu était un homme de vingt-cinq à vingt-six ans, d’une figure assez sombre, obséquieux envers ses supérieurs, insolent envers ses subordonnés; aussi, outre son titre d’agent comptable, qui est toujours un motif de répulsion pour les matelots, était-il généralement aussi mal vu de l’équipage qu’Edmond Dantès au contraire en était aimé.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "matelots",
            "comptable",
            "obsequieux",
            "subordonnes",
            "dantes",
            "edmond",
            "equipage"
          ]
        }
      },
      "originalComparison": [
        "Le nouveau venu était un homme de vingt-cinq à vingt-six ans, d’une figure assez sombre, obséquieux envers ses supérieurs, insolent envers ses subordonnés; aussi, outre son titre d’agent comptable, qui est toujours un motif de répulsion pour les matelots, était-il généralement aussi mal vu de l’équipage qu’Edmond Dantès au contraire en était aimé."
      ]
    },
    {
      "id": "c01-p032",
      "sequence": 32,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 32,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p032-simple-s01",
              "text": "— Eh bien, monsieur Morrel, dit Danglars, vous connaissez déjà le malheur, n’est-ce pas?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "malheur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p032-advanced-s01",
              "text": "— Eh bien, monsieur Morrel, dit Danglars, vous savez déjà le malheur, n’est-ce pas?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p032-original-s01",
              "text": "— Eh bien, monsieur Morrel, dit Danglars, vous savez déjà le malheur, n’est-ce pas?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel",
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— Eh bien, monsieur Morrel, dit Danglars, vous savez déjà le malheur, n’est-ce pas?"
      ]
    },
    {
      "id": "c01-p033",
      "sequence": 33,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 33,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p033-simple-s01",
              "text": "— Oui, oui. Pauvre capitaine Leclère! C’était un homme très bon!",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p033-advanced-s01",
              "text": "— Oui, oui. Pauvre capitaine Leclère! C’était un brave et honnête homme!",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p033-original-s01",
              "text": "— Oui, oui. Pauvre capitaine Leclère! C’était un brave et honnête homme!",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "leclere",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Oui, oui. Pauvre capitaine Leclère! C’était un brave et honnête homme!"
      ]
    },
    {
      "id": "c01-p034",
      "sequence": 34,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 34,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p034-simple-s01",
              "text": "— Et surtout un très bon marin, avec beaucoup d’années de mer, répond Danglars. C’est important pour une grande maison comme la maison Morrel.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p034-advanced-s01",
              "text": "— Et surtout un excellent marin, vieilli entre le ciel et l’eau, comme il convient à un homme chargé des intérêts d’une maison aussi importante que la maison Morrel et fils, répondit Danglars.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p034-original-s01",
              "text": "— Et un excellent marin surtout, vieilli entre le ciel et l’eau, comme il convient à un homme chargé des intérêts d’une maison aussi importante que la maison Morrel et fils, répondit Danglars.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel",
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— Et un excellent marin surtout, vieilli entre le ciel et l’eau, comme il convient à un homme chargé des intérêts d’une maison aussi importante que la maison Morrel et fils, répondit Danglars."
      ]
    },
    {
      "id": "c01-p035",
      "sequence": 35,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 35,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p035-simple-s01",
              "text": "— Mais, dit l’armateur en regardant Dantès, on n’a pas besoin d’être vieux pour bien connaître son métier. Regardez notre ami Edmond: il fait très bien son travail.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p035-advanced-s01",
              "text": "— Mais, dit l’armateur en suivant des yeux Dantès, qui cherchait l’endroit où jeter l’ancre, il me semble qu’il n’est pas nécessaire d’être un aussi vieux marin que vous le dites, Danglars, pour connaître son métier. Voici notre ami Edmond qui fait le sien, me semble-t-il, en homme qui n’a de conseil à demander à personne.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p035-original-s01",
              "text": "— Mais, dit l’armateur, suivant des yeux Dantès, qui cherchait son mouillage, mais il me semble qu’il n’y a pas besoin d’être si vieux marin que vous le dites, Danglars, pour connaître son métier, et voici notre ami Edmond qui fait le sien, ce me semble, en homme qui n’a besoin de demander de conseil à personne.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "mouillage",
            "dantes",
            "edmond",
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— Mais, dit l’armateur, suivant des yeux Dantès, qui cherchait son mouillage, mais il me semble qu’il n’y a pas besoin d’être si vieux marin que vous le dites, Danglars, pour connaître son métier, et voici notre ami Edmond qui fait le sien, ce me semble, en homme qui n’a besoin de demander de conseil à personne."
      ]
    },
    {
      "id": "c01-p036",
      "sequence": 36,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 36,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p036-simple-s01",
              "text": "— Oui, dit Danglars. Il regarde Dantès avec des yeux méchants. Il est jeune, et il pense qu’il sait tout. Après la mort du capitaine, il a pris sa place et il n’a rien demandé à personne. Et nous avons perdu un jour et demi à l’île d’Elbe.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine",
            "mechant"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p036-advanced-s01",
              "text": "— Oui, dit Danglars en jetant sur Dantès un regard de côté où brilla un éclair de haine, oui, il est jeune, et il ne doute de rien. À peine le capitaine était-il mort qu’il a pris le commandement sans consulter personne, et il nous a fait perdre un jour et demi à l’île d’Elbe au lieu de revenir directement à Marseille.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "haine",
            "ile-d-elbe"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p036-original-s01",
              "text": "— Oui, dit Danglars en jetant sur Dantès un regard oblique où brilla un éclair de haine, oui, c’est jeune, et cela ne doute de rien. A peine le capitaine a-t-il été mort qu’il a pris le commandement sans consulter personne, et qu’il nous a fait perdre un jour et demi a l’île d’Elbe au lieu de revenir directement à Marseille.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes",
            "danglars",
            "marseille",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Oui, dit Danglars en jetant sur Dantès un regard oblique où brilla un éclair de haine, oui, c’est jeune, et cela ne doute de rien. A peine le capitaine a-t-il été mort qu’il a pris le commandement sans consulter personne, et qu’il nous a fait perdre un jour et demi a l’île d’Elbe au lieu de revenir directement à Marseille."
      ]
    },
    {
      "id": "c01-p037",
      "sequence": 37,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 37,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p037-simple-s01",
              "text": "— Prendre la place du capitaine, c’était son travail de second, dit l’armateur. Mais perdre un jour et demi à l’île d’Elbe, ce n’est pas bien. Est-ce que le bateau avait un problème?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine",
            "second"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p037-advanced-s01",
              "text": "— Prendre le commandement du navire, dit l’armateur, c’était son devoir de second; quant à perdre un jour et demi à l’île d’Elbe, il a eu tort, à moins que le navire n’ait eu quelque dégât à réparer.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "armateur",
            "second",
            "degat",
            "ile-d-elbe"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p037-original-s01",
              "text": "— Quant à prendre le commandement du navire, dit l’armateur, c’était son devoir comme second; quant à perdre un jour et demi à l’île d’Elbe, il a eu tort, à moins que le navire n’ait eu quelque avarie à réparer.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "armateur"
          ]
        }
      },
      "originalComparison": [
        "— Quant à prendre le commandement du navire, dit l’armateur, c’était son devoir comme second; quant à perdre un jour et demi à l’île d’Elbe, il a eu tort, à moins que le navire n’ait eu quelque avarie à réparer."
      ]
    },
    {
      "id": "c01-p038",
      "sequence": 38,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 38,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p038-simple-s01",
              "text": "— Le bateau allait très bien, monsieur Morrel. Dantès voulait seulement aller à terre, pour le plaisir. C’est tout.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p038-advanced-s01",
              "text": "— Le navire se portait aussi bien que moi, et que je vous souhaite de vous porter, monsieur Morrel; cette journée et demie a été perdue par pur caprice, pour le plaisir d’aller à terre, voilà tout.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "caprice"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p038-original-s01",
              "text": "— Le navire se portait comme je me porte, et comme je désire que vous vous portiez, monsieur Morrel; et cette journée et demie a été perdue par pur caprice, pour le plaisir d’aller à terre, voilà tout.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Le navire se portait comme je me porte, et comme je désire que vous vous portiez, monsieur Morrel; et cette journée et demie a été perdue par pur caprice, pour le plaisir d’aller à terre, voilà tout."
      ]
    },
    {
      "id": "c01-p039",
      "sequence": 39,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 39,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p039-simple-s01",
              "text": "— Dantès, dit l’armateur, venez ici, s’il vous plaît.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p039-advanced-s01",
              "text": "— Dantès, dit l’armateur en se tournant vers le jeune homme, venez donc ici.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p039-original-s01",
              "text": "— Dantès, dit l’armateur se retournant vers le jeune homme, venez donc ici.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Dantès, dit l’armateur se retournant vers le jeune homme, venez donc ici."
      ]
    },
    {
      "id": "c01-p040",
      "sequence": 40,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 40,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p040-simple-s01",
              "text": "— Pardon, monsieur, dit Dantès, j’arrive dans un instant. Puis il parle aux marins:",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p040-advanced-s01",
              "text": "— Pardon, monsieur, dit Dantès, je suis à vous dans un instant. Puis, s’adressant à l’équipage:",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "equipage"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p040-original-s01",
              "text": "— Pardon, monsieur, dit Dantès, je suis à vous dans un instant, Puis s’adressant à l’équipage:",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes",
            "equipage"
          ]
        }
      },
      "originalComparison": [
        "— Pardon, monsieur, dit Dantès, je suis à vous dans un instant, Puis s’adressant à l’équipage:"
      ]
    },
    {
      "id": "c01-p041",
      "sequence": 41,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 41,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p041-simple-s01",
              "text": "— Jetez l’ancre! dit-il.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "ancre"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p041-advanced-s01",
              "text": "— Mouillez! dit-il.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "mouillez"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p041-original-s01",
              "text": "— Mouille! dit-il.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Mouille! dit-il."
      ]
    },
    {
      "id": "c01-p042",
      "sequence": 42,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 42,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p042-simple-s01",
              "text": "L’ancre tombe dans l’eau avec beaucoup de bruit. Dantès reste à sa place jusqu’à la fin du travail. Puis il dit: — Descendez le drapeau. Notre capitaine est mort.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine",
            "ancre",
            "drapeau"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p042-advanced-s01",
              "text": "Aussitôt l’ancre tomba, et la chaîne fila bruyamment.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p042-advanced-s02",
              "text": "Dantès resta à son poste, malgré la présence du pilote, jusqu’à ce que cette dernière manœuvre soit terminée; puis: — Mettez les pavillons en berne, dit-il, en signe de deuil.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pavillon",
            "man-uvre",
            "deuil",
            "bruyamment",
            "en-berne"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p042-original-s01",
              "text": "Aussitôt l’ancre tomba, et la chaîne fila avec bruit.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p042-original-s02",
              "text": "Dantès resta à son poste, malgré la présence du pilote, jusqu’à ce que cette dernière manœuvre fût terminée; puis alors: — Abaissez la flamme à mi-mât, dit-il, mettez le pavillon en berne, croisez les vergues.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "aussitot",
            "dantes",
            "pavillon"
          ]
        }
      },
      "originalComparison": [
        "Aussitôt l’ancre tomba, et la chaîne fila avec bruit.",
        "Dantès resta à son poste, malgré la présence du pilote, jusqu’à ce que cette dernière manœuvre fût terminée; puis alors: — Abaissez la flamme à mi-mât, dit-il, mettez le pavillon en berne, croisez les vergues."
      ]
    },
    {
      "id": "c01-p043",
      "sequence": 43,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 43,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p043-simple-s01",
              "text": "— Vous voyez, dit Danglars, il pense qu’il est déjà capitaine.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p043-advanced-s01",
              "text": "— Vous voyez, dit Danglars, il se croit déjà capitaine, ma parole.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p043-original-s01",
              "text": "— Vous voyez, dit Danglars, il se croit déjà capitaine, sur ma parole.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Vous voyez, dit Danglars, il se croit déjà capitaine, sur ma parole."
      ]
    },
    {
      "id": "c01-p044",
      "sequence": 44,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 44,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p044-simple-s01",
              "text": "— C’est vrai, il fait déjà le travail du capitaine, dit l’armateur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p044-advanced-s01",
              "text": "— Et il l’est, de fait, dit l’armateur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p044-original-s01",
              "text": "— Et il l’est de fait, dit l’armateur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        }
      },
      "originalComparison": [
        "— Et il l’est de fait, dit l’armateur."
      ]
    },
    {
      "id": "c01-p045",
      "sequence": 45,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 45,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p045-simple-s01",
              "text": "— Oui, mais vous et votre associé, vous devez encore dire oui, monsieur Morrel.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "associe"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p045-advanced-s01",
              "text": "— Oui, à part votre signature et celle de votre associé, monsieur Morrel.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "associe"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p045-original-s01",
              "text": "— Oui, sauf votre signature et celle de votre associé, monsieur Morrel.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Oui, sauf votre signature et celle de votre associé, monsieur Morrel."
      ]
    },
    {
      "id": "c01-p046",
      "sequence": 46,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 46,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p046-simple-s01",
              "text": "— Et pourquoi pas? dit l’armateur. Il est jeune, je le sais. Mais il travaille bien et il connaît bien son métier.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p046-advanced-s01",
              "text": "— Ma foi! pourquoi ne le laisserions-nous pas à ce poste? dit l’armateur. Il est jeune, je le sais bien; mais il me paraît tout entier à sa tâche et très expérimenté dans son métier.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p046-original-s01",
              "text": "— Dame! pourquoi ne le laisserions-nous pas à ce poste? dit l’armateur; il est jeune, je le sais bien; mais il me parait tout à la chose et fort expérimenté dans son état.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        }
      },
      "originalComparison": [
        "— Dame! pourquoi ne le laisserions-nous pas à ce poste? dit l’armateur; il est jeune, je le sais bien; mais il me parait tout à la chose et fort expérimenté dans son état."
      ]
    },
    {
      "id": "c01-p047",
      "sequence": 47,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 47,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p047-simple-s01",
              "text": "Danglars n’est pas content. On le voit sur son visage.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p047-advanced-s01",
              "text": "Un nuage passa sur le front de Danglars.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p047-original-s01",
              "text": "Un nuage passa sur le front de Danglars.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "Un nuage passa sur le front de Danglars."
      ]
    },
    {
      "id": "c01-p048",
      "sequence": 48,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 48,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p048-simple-s01",
              "text": "— Pardon, monsieur Morrel, dit Dantès. Il arrive. L’ancre est dans l’eau, je suis libre maintenant. Vous m’avez appelé, je crois?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "ancre"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p048-advanced-s01",
              "text": "— Pardon, monsieur Morrel, dit Dantès en s’approchant; maintenant que le navire est à l’ancre, me voilà tout à vous: vous m’avez appelé, je crois?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p048-original-s01",
              "text": "— Pardon, monsieur Morrel, dit Dantès en s’approchant; maintenant que le navire est mouillé, me voilà tout à vous: vous m’avez appelé, je crois?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "dantes",
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Pardon, monsieur Morrel, dit Dantès en s’approchant; maintenant que le navire est mouillé, me voilà tout à vous: vous m’avez appelé, je crois?"
      ]
    },
    {
      "id": "c01-p049",
      "sequence": 49,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 49,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p049-simple-s01",
              "text": "Danglars va un peu plus loin.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p049-advanced-s01",
              "text": "Danglars fit un pas en arrière.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p049-original-s01",
              "text": "Danglars fit un pas en arrière.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "Danglars fit un pas en arrière."
      ]
    },
    {
      "id": "c01-p050",
      "sequence": 50,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 50,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p050-simple-s01",
              "text": "— Je voulais vous demander: pourquoi vous êtes-vous arrêté à l’île d’Elbe?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p050-advanced-s01",
              "text": "— Je voulais vous demander pourquoi vous vous étiez arrêté à l’île d’Elbe.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "ile-d-elbe"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p050-original-s01",
              "text": "— Je voulais vous demander pourquoi vous vous étiez arrêté à l’île d’Elbe?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Je voulais vous demander pourquoi vous vous étiez arrêté à l’île d’Elbe?"
      ]
    },
    {
      "id": "c01-p051",
      "sequence": 51,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 51,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p051-simple-s01",
              "text": "— Je ne sais pas, monsieur. C’était le dernier ordre du capitaine Leclère. Avant de mourir, il m’a donné un paquet pour le maréchal Bertrand.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine",
            "marechal"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p051-advanced-s01",
              "text": "— Je l’ignore, monsieur. C’était pour exécuter un dernier ordre du capitaine Leclère, qui, en mourant, m’avait remis un paquet pour le grand maréchal Bertrand.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "marechal"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p051-original-s01",
              "text": "— Je l’ignore, monsieur. C’était pour accomplir un dernier ordre du capitaine Leclère, qui, en mourant, m’avait remis un paquet pour le grand maréchal Bertrand.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "leclere",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Je l’ignore, monsieur. C’était pour accomplir un dernier ordre du capitaine Leclère, qui, en mourant, m’avait remis un paquet pour le grand maréchal Bertrand."
      ]
    },
    {
      "id": "c01-p052",
      "sequence": 52,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 52,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p052-simple-s01",
              "text": "— Vous l’avez vu, Edmond?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p052-advanced-s01",
              "text": "— L’avez-vous donc vu, Edmond?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p052-original-s01",
              "text": "— L’avez-vous donc vu, Edmond?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— L’avez-vous donc vu, Edmond?"
      ]
    },
    {
      "id": "c01-p053",
      "sequence": 53,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 53,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p053-simple-s01",
              "text": "— Qui?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p053-advanced-s01",
              "text": "— Qui?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p053-original-s01",
              "text": "— Qui?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Qui?"
      ]
    },
    {
      "id": "c01-p054",
      "sequence": 54,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 54,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p054-simple-s01",
              "text": "— Le maréchal.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marechal"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p054-advanced-s01",
              "text": "— Le grand maréchal.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "marechal"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p054-original-s01",
              "text": "— Le grand maréchal.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Le grand maréchal."
      ]
    },
    {
      "id": "c01-p055",
      "sequence": 55,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 55,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p055-simple-s01",
              "text": "— Oui.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p055-advanced-s01",
              "text": "— Oui.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p055-original-s01",
              "text": "— Oui.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Oui."
      ]
    },
    {
      "id": "c01-p056",
      "sequence": 56,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 56,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p056-simple-s01",
              "text": "Morrel regarde autour de lui. Puis il va un peu plus loin avec Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p056-advanced-s01",
              "text": "Morrel regarda autour de lui et prit Dantès à part.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p056-original-s01",
              "text": "Morrel regarda autour de lui, et tira Dantès à part.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes",
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "Morrel regarda autour de lui, et tira Dantès à part."
      ]
    },
    {
      "id": "c01-p057",
      "sequence": 57,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 57,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p057-simple-s01",
              "text": "— Et comment va l’Empereur? demande-t-il vite.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p057-advanced-s01",
              "text": "— Et comment va l’Empereur? demanda-t-il vivement.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p057-original-s01",
              "text": "— Et comment va l’Empereur? demanda-t-il vivement.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "empereur"
          ]
        }
      },
      "originalComparison": [
        "— Et comment va l’Empereur? demanda-t-il vivement."
      ]
    },
    {
      "id": "c01-p058",
      "sequence": 58,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 58,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p058-simple-s01",
              "text": "— Bien, je crois. Je l’ai vu.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p058-advanced-s01",
              "text": "— Bien, autant que j’ai pu en juger de mes propres yeux.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p058-original-s01",
              "text": "— Bien, autant que j’en ai pu juger par mes yeux.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Bien, autant que j’en ai pu juger par mes yeux."
      ]
    },
    {
      "id": "c01-p059",
      "sequence": 59,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 59,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p059-simple-s01",
              "text": "— Vous avez vu l’Empereur aussi?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p059-advanced-s01",
              "text": "— Vous avez donc vu l’Empereur aussi?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p059-original-s01",
              "text": "— Vous avez donc vu l’Empereur aussi?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "empereur"
          ]
        }
      },
      "originalComparison": [
        "— Vous avez donc vu l’Empereur aussi?"
      ]
    },
    {
      "id": "c01-p060",
      "sequence": 60,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 60,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p060-simple-s01",
              "text": "— Oui. Il est entré chez le maréchal quand j’étais là.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marechal"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p060-advanced-s01",
              "text": "— Il est entré chez le maréchal pendant que j’y étais.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "marechal"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p060-original-s01",
              "text": "— Il est entré chez le maréchal pendant que j’y étais.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Il est entré chez le maréchal pendant que j’y étais."
      ]
    },
    {
      "id": "c01-p061",
      "sequence": 61,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 61,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p061-simple-s01",
              "text": "— Et vous lui avez parlé?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p061-advanced-s01",
              "text": "— Et vous lui avez parlé?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p061-original-s01",
              "text": "— Et vous lui avez parlé?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Et vous lui avez parlé?"
      ]
    },
    {
      "id": "c01-p062",
      "sequence": 62,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 62,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p062-simple-s01",
              "text": "— C’est lui qui m’a parlé, monsieur, dit Dantès avec un sourire.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p062-advanced-s01",
              "text": "— C’est plutôt lui qui m’a parlé, monsieur, dit Dantès en souriant.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p062-original-s01",
              "text": "— C’est-à-dire que c’est lui qui m’a parlé, monsieur, dit Dantès en souriant.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— C’est-à-dire que c’est lui qui m’a parlé, monsieur, dit Dantès en souriant."
      ]
    },
    {
      "id": "c01-p063",
      "sequence": 63,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 63,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p063-simple-s01",
              "text": "— Et qu’est-ce qu’il vous a dit?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p063-advanced-s01",
              "text": "— Et que vous a-t-il dit?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p063-original-s01",
              "text": "— Et que vous a-t-il dit?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Et que vous a-t-il dit?"
      ]
    },
    {
      "id": "c01-p064",
      "sequence": 64,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 64,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p064-simple-s01",
              "text": "— Il m’a posé des questions sur le bateau, sur notre voyage et sur les marchandises. Je crois qu’il voulait acheter le bateau. Mais je lui ai dit: « Je suis seulement le second. Le bateau est à la maison Morrel. » Alors il a dit: « Ah! je connais les Morrel. Un Morrel était soldat avec moi, à Valence. »",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "second",
            "marchandises"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p064-advanced-s01",
              "text": "— Il m’a posé des questions sur le navire, sur la date de son départ pour Marseille, sur la route qu’il avait suivie et sur la cargaison qu’il transportait. Je crois que si le navire avait été vide, et que j’en avais été le propriétaire, il aurait eu l’intention de l’acheter; mais je lui ai dit que je n’étais que simple second, et que le navire appartenait à la maison Morrel et fils. « Ah! ah! a-t-il dit, je la connais. Les Morrel sont armateurs de père en fils, et il y avait un Morrel qui servait dans le même régiment que moi quand j’étais en garnison à Valence. »",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "armateur",
            "cargaison",
            "second",
            "garnison"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p064-original-s01",
              "text": "— Il m’a fait des questions sur le bâtiment, sur l’époque de son départ pour Marseille, sur la route qu’il avait suivie et sur la cargaison qu’il portait. Je crois que s’il eût été vide, et que j’en eusse été le maître, son intention eût été de l’acheter; mais je lui ai dit que je n’étais que simple second, et que le bâtiment appartenait à la maison Morrel et fils. — Ah! ah! a-t-il dit, je la connais. Les Morrel sont armateurs de père en fils, et il y avait un Morrel qui servait dans le même régiment que moi lorsque j’étais en garnison à Valence.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "batiment",
            "armateur",
            "cargaison",
            "morrel",
            "marseille"
          ]
        }
      },
      "originalComparison": [
        "— Il m’a fait des questions sur le bâtiment, sur l’époque de son départ pour Marseille, sur la route qu’il avait suivie et sur la cargaison qu’il portait. Je crois que s’il eût été vide, et que j’en eusse été le maître, son intention eût été de l’acheter; mais je lui ai dit que je n’étais que simple second, et que le bâtiment appartenait à la maison Morrel et fils. — Ah! ah! a-t-il dit, je la connais. Les Morrel sont armateurs de père en fils, et il y avait un Morrel qui servait dans le même régiment que moi lorsque j’étais en garnison à Valence."
      ]
    },
    {
      "id": "c01-p065",
      "sequence": 65,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 65,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p065-simple-s01",
              "text": "— C’est vrai! dit l’armateur, très content. C’était Policar Morrel, mon oncle. Il est devenu capitaine. Il faut lui dire que l’Empereur pense encore à lui. Il va pleurer, le vieux soldat! Vous avez bien fait, Dantès, de suivre les ordres du capitaine Leclère. Mais attention: vous avez donné un paquet au maréchal et vous avez parlé avec l’Empereur. Si les gens l’apprennent, c’est dangereux pour vous.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine",
            "marechal"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p065-advanced-s01",
              "text": "— C’est ma foi vrai! s’écria l’armateur, tout joyeux; c’était Policar Morrel, mon oncle, qui est devenu capitaine. Dantès, vous direz à mon oncle que l’Empereur s’est souvenu de lui, et vous le verrez pleurer, le vieux soldat. Allons, allons, continua l’armateur en frappant amicalement sur l’épaule du jeune homme, vous avez bien fait, Dantès, de suivre les instructions du capitaine Leclère et de vous arrêter à l’île d’Elbe; pourtant, si l’on savait que vous avez remis un paquet au maréchal et parlé avec l’Empereur, cela pourrait vous compromettre.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "marechal",
            "ile-d-elbe",
            "compromettre"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p065-original-s01",
              "text": "— C’est, pardieu, vrai! s’écria l’armateur tout joyeux; c’était Policar Morrel, mon oncle, qui est devenu capitaine. Dantès, vous direz à mon oncle que l’Empereur s’est souvenu de lui, et vous le verrez pleurer, le vieux grognard. Allons, allons, continua l’armateur en frappant amicalement sur l’épaule du jeune homme, vous avez bien fait, Dantès, de suivre les instructions du capitaine Leclère et de vous arrêter à l’île d’Elbe, quoique si l’on savait que vous avez remis un paquet au maréchal et causé avec l’Empereur, cela pourrait vous compromettre.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "dantes",
            "morrel",
            "leclere",
            "capitaine",
            "empereur"
          ]
        }
      },
      "originalComparison": [
        "— C’est, pardieu, vrai! s’écria l’armateur tout joyeux; c’était Policar Morrel, mon oncle, qui est devenu capitaine. Dantès, vous direz à mon oncle que l’Empereur s’est souvenu de lui, et vous le verrez pleurer, le vieux grognard. Allons, allons, continua l’armateur en frappant amicalement sur l’épaule du jeune homme, vous avez bien fait, Dantès, de suivre les instructions du capitaine Leclère et de vous arrêter à l’île d’Elbe, quoique si l’on savait que vous avez remis un paquet au maréchal et causé avec l’Empereur, cela pourrait vous compromettre."
      ]
    },
    {
      "id": "c01-p066",
      "sequence": 66,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 66,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p066-simple-s01",
              "text": "— Dangereux? Pourquoi, monsieur? dit Dantès. Je ne savais pas ce qu’il y avait dans le paquet. Et l’Empereur m’a posé des questions simples, c’est tout. Mais pardon: voici les hommes de la douane. Je dois aller les voir.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "douane"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p066-advanced-s01",
              "text": "— En quoi voulez-vous que cela me compromette, monsieur? dit Dantès; je ne savais même pas ce que je portais, et l’Empereur ne m’a posé que les questions qu’il aurait posées au premier venu. Mais pardon, reprit Dantès, voici les services de santé et la douane qui arrivent: vous permettez, n’est-ce pas?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "douane",
            "compromettre"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p066-original-s01",
              "text": "— En quoi voulez-vous, monsieur, que cela me compromette? dit Dantès; je ne savais même pas ce que je portais, et l’Empereur ne m’a fait que les questions qu’il eût faites au premier venu. Mais, pardon, reprit Dantès, voici la santé et la douane qui nous arrivent: vous permettez, n’est-ce pas?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "douane",
            "dantes",
            "empereur"
          ]
        }
      },
      "originalComparison": [
        "— En quoi voulez-vous, monsieur, que cela me compromette? dit Dantès; je ne savais même pas ce que je portais, et l’Empereur ne m’a fait que les questions qu’il eût faites au premier venu. Mais, pardon, reprit Dantès, voici la santé et la douane qui nous arrivent: vous permettez, n’est-ce pas?"
      ]
    },
    {
      "id": "c01-p067",
      "sequence": 67,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 67,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p067-simple-s01",
              "text": "— Allez, allez, mon cher Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p067-advanced-s01",
              "text": "— Faites, faites, mon cher Dantès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p067-original-s01",
              "text": "— Faites, faites, mon cher Dantès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Faites, faites, mon cher Dantès."
      ]
    },
    {
      "id": "c01-p068",
      "sequence": 68,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 68,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p068-simple-s01",
              "text": "Le jeune homme part. Alors Danglars revient vers l’armateur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p068-advanced-s01",
              "text": "Le jeune homme s’éloigna et, à mesure qu’il s’éloignait, Danglars se rapprochait.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p068-original-s01",
              "text": "Le jeune homme s’éloigna, et à mesure qu’il s’éloignait, Danglars se rapprochait.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "Le jeune homme s’éloigna, et à mesure qu’il s’éloignait, Danglars se rapprochait."
      ]
    },
    {
      "id": "c01-p069",
      "sequence": 69,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 69,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p069-simple-s01",
              "text": "— Eh bien! demande-t-il, est-ce qu’il vous a bien expliqué pourquoi il s’est arrêté à l’île d’Elbe?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p069-advanced-s01",
              "text": "— Eh bien! demanda-t-il, il paraît qu’il vous a donné de bonnes raisons pour son escale à Porto-Ferrajo?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "escale",
            "porto-ferrajo"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p069-original-s01",
              "text": "— Eh bien! demanda-t-il, il parait qu’il vous a donné de bonnes raisons de son mouillage à Porto-Ferrajo?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "mouillage"
          ]
        }
      },
      "originalComparison": [
        "— Eh bien! demanda-t-il, il parait qu’il vous a donné de bonnes raisons de son mouillage à Porto-Ferrajo?"
      ]
    },
    {
      "id": "c01-p070",
      "sequence": 70,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 70,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p070-simple-s01",
              "text": "— Oui, très bien, mon cher monsieur Danglars.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p070-advanced-s01",
              "text": "— D’excellentes, mon cher monsieur Danglars.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p070-original-s01",
              "text": "— D’excellentes, mon cher monsieur Danglars.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— D’excellentes, mon cher monsieur Danglars."
      ]
    },
    {
      "id": "c01-p071",
      "sequence": 71,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 71,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p071-simple-s01",
              "text": "— C’est bien, répond Danglars. Je n’aime pas voir un ami qui fait mal son travail.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p071-advanced-s01",
              "text": "— Tant mieux, répondit celui-ci, car il est toujours pénible de voir un camarade qui ne fait pas son devoir.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p071-original-s01",
              "text": "— Tant mieux, répondit celui-ci, car c’est toujours pénible de voir un camarade qui ne fait pas son devoir.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Tant mieux, répondit celui-ci, car c’est toujours pénible de voir un camarade qui ne fait pas son devoir."
      ]
    },
    {
      "id": "c01-p072",
      "sequence": 72,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 72,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p072-simple-s01",
              "text": "— Dantès a bien fait son travail, répond l’armateur. C’est le capitaine Leclère qui lui a demandé de s’arrêter là.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p072-advanced-s01",
              "text": "— Dantès a fait le sien, répondit l’armateur, et il n’y a rien à redire. C’est le capitaine Leclère qui lui avait ordonné cette escale.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "escale"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p072-original-s01",
              "text": "— Dantès a fait le sien, répondit l’armateur, et il n’y a rien à dire. C’était le capitaine Leclère qui lui avait ordonné cette relâche.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "relache",
            "dantes",
            "leclere",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Dantès a fait le sien, répondit l’armateur, et il n’y a rien à dire. C’était le capitaine Leclère qui lui avait ordonné cette relâche."
      ]
    },
    {
      "id": "c01-p073",
      "sequence": 73,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 73,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p073-simple-s01",
              "text": "— Et le capitaine Leclère… Il ne vous a pas donné une lettre de lui?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p073-advanced-s01",
              "text": "— À propos du capitaine Leclère, ne vous a-t-il pas remis une lettre de sa part?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p073-original-s01",
              "text": "— A propos du capitaine Leclère, ne vous a-t-il pas remis une lettre de lui?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "leclere",
            "capitaine",
            "lettre"
          ]
        }
      },
      "originalComparison": [
        "— A propos du capitaine Leclère, ne vous a-t-il pas remis une lettre de lui?"
      ]
    },
    {
      "id": "c01-p074",
      "sequence": 74,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 74,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p074-simple-s01",
              "text": "— Qui?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p074-advanced-s01",
              "text": "— Qui?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p074-original-s01",
              "text": "— Qui?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Qui?"
      ]
    },
    {
      "id": "c01-p075",
      "sequence": 75,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 75,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p075-simple-s01",
              "text": "— Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p075-advanced-s01",
              "text": "— Dantès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p075-original-s01",
              "text": "— Dantès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Dantès."
      ]
    },
    {
      "id": "c01-p076",
      "sequence": 76,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 76,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p076-simple-s01",
              "text": "— À moi? Non! Il avait une lettre?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p076-advanced-s01",
              "text": "— À moi, non! Il en avait donc une?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p076-original-s01",
              "text": "— A moi, non! En avait-il donc une?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— A moi, non! En avait-il donc une?"
      ]
    },
    {
      "id": "c01-p077",
      "sequence": 77,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 77,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p077-simple-s01",
              "text": "— Je crois que le capitaine Leclère lui a donné un paquet, et aussi une lettre.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p077-advanced-s01",
              "text": "— Je croyais qu’en plus du paquet, le capitaine Leclère lui avait confié une lettre.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p077-original-s01",
              "text": "— Je croyais qu’outre le paquet, le capitaine Leclère lui avait confié une lettre.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "leclere",
            "capitaine",
            "lettre"
          ]
        }
      },
      "originalComparison": [
        "— Je croyais qu’outre le paquet, le capitaine Leclère lui avait confié une lettre."
      ]
    },
    {
      "id": "c01-p078",
      "sequence": 78,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 78,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p078-simple-s01",
              "text": "— De quel paquet parlez-vous, Danglars?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p078-advanced-s01",
              "text": "— De quel paquet voulez-vous parler, Danglars?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p078-original-s01",
              "text": "— De quel paquet voulez-vous parler, Danglars?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— De quel paquet voulez-vous parler, Danglars?"
      ]
    },
    {
      "id": "c01-p079",
      "sequence": 79,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 79,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p079-simple-s01",
              "text": "— Du paquet que Dantès a laissé à l’île d’Elbe.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p079-advanced-s01",
              "text": "— Mais de celui que Dantès a déposé en passant à Porto-Ferrajo.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "porto-ferrajo"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p079-original-s01",
              "text": "— Mais de celui que Dantès a déposé en passant à Porto-Ferrajo.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Mais de celui que Dantès a déposé en passant à Porto-Ferrajo."
      ]
    },
    {
      "id": "c01-p080",
      "sequence": 80,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 80,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p080-simple-s01",
              "text": "— Comment savez-vous qu’il avait un paquet?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p080-advanced-s01",
              "text": "— Comment savez-vous qu’il avait un paquet à déposer à Porto-Ferrajo?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "porto-ferrajo"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p080-original-s01",
              "text": "— Comment savez-vous qu’il avait un paquet à déposer à Porto-Ferrajo?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Comment savez-vous qu’il avait un paquet à déposer à Porto-Ferrajo?"
      ]
    },
    {
      "id": "c01-p081",
      "sequence": 81,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 81,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p081-simple-s01",
              "text": "— Je passais devant la chambre du capitaine. La porte était un peu ouverte. J’ai vu le capitaine donner un paquet et une lettre à Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p081-advanced-s01",
              "text": "— Je passais devant la porte du capitaine, qui était entrouverte, et je l’ai vu remettre un paquet et cette lettre à Dantès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "entrouverte"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p081-original-s01",
              "text": "— Je passais devant la porte du capitaine qui était entr’ouverte, et je lui ai vu remettre un paquet et cette lettre à Dantès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes",
            "capitaine",
            "lettre"
          ]
        }
      },
      "originalComparison": [
        "— Je passais devant la porte du capitaine qui était entr’ouverte, et je lui ai vu remettre un paquet et cette lettre à Dantès."
      ]
    },
    {
      "id": "c01-p082",
      "sequence": 82,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 82,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p082-simple-s01",
              "text": "— Il ne m’a pas parlé de cette lettre, dit l’armateur. Mais s’il a une lettre pour moi, il va me la donner.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p082-advanced-s01",
              "text": "— Il ne m’en a pas parlé, dit l’armateur; mais s’il a cette lettre, il me la remettra.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p082-original-s01",
              "text": "— Il ne m’en a point parlé, dit l’armateur; mais s’il a cette lettre, il me la remettra.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "lettre"
          ]
        }
      },
      "originalComparison": [
        "— Il ne m’en a point parlé, dit l’armateur; mais s’il a cette lettre, il me la remettra."
      ]
    },
    {
      "id": "c01-p083",
      "sequence": 83,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 83,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p083-simple-s01",
              "text": "Danglars réfléchit un moment.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p083-advanced-s01",
              "text": "Danglars réfléchit un instant.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p083-original-s01",
              "text": "Danglars réfléchit un instant.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "Danglars réfléchit un instant."
      ]
    },
    {
      "id": "c01-p084",
      "sequence": 84,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 84,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p084-simple-s01",
              "text": "— Alors, monsieur Morrel, s’il vous plaît, ne parlez pas de cela à Dantès. Je me suis peut-être trompé.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p084-advanced-s01",
              "text": "— Alors, monsieur Morrel, je vous en prie, dit-il, ne parlez pas de cela à Dantès. Je me serai trompé.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p084-original-s01",
              "text": "— Alors, monsieur Morrel, je vous prie, dit-il, ne parlez point de cela à Dantès. Je me serai trompé.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes",
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Alors, monsieur Morrel, je vous prie, dit-il, ne parlez point de cela à Dantès. Je me serai trompé."
      ]
    },
    {
      "id": "c01-p085",
      "sequence": 85,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 85,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p085-simple-s01",
              "text": "À ce moment, le jeune homme revient. Danglars s’en va.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p085-advanced-s01",
              "text": "À ce moment, le jeune homme revenait; Danglars s’éloigna.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p085-original-s01",
              "text": "En ce moment le jeune homme revenait, Danglars s’éloigna.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "En ce moment le jeune homme revenait, Danglars s’éloigna."
      ]
    },
    {
      "id": "c01-p086",
      "sequence": 86,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 86,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p086-simple-s01",
              "text": "— Eh bien, mon cher Dantès, êtes-vous libre? demande l’armateur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p086-advanced-s01",
              "text": "— Eh bien! mon cher Dantès, êtes-vous libre? demanda l’armateur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p086-original-s01",
              "text": "— Eh bien! mon cher Dantès, êtes-vous libre? demanda l’armateur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Eh bien! mon cher Dantès, êtes-vous libre? demanda l’armateur."
      ]
    },
    {
      "id": "c01-p087",
      "sequence": 87,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 87,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p087-simple-s01",
              "text": "— Oui, monsieur.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p087-advanced-s01",
              "text": "— Oui, monsieur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p087-original-s01",
              "text": "— Oui, monsieur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Oui, monsieur."
      ]
    },
    {
      "id": "c01-p088",
      "sequence": 88,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 88,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p088-simple-s01",
              "text": "— Ça n’a pas été long.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p088-advanced-s01",
              "text": "— Cela n’a pas été long.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p088-original-s01",
              "text": "— La chose n’a pas été longue.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— La chose n’a pas été longue."
      ]
    },
    {
      "id": "c01-p089",
      "sequence": 89,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 89,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p089-simple-s01",
              "text": "— Non. J’ai donné la liste de nos marchandises aux hommes de la douane, et j’ai donné nos papiers à un homme du port.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "douane",
            "marchandises"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p089-advanced-s01",
              "text": "— Non, j’ai donné aux douaniers la liste de nos marchandises; quant aux autorités du port, elles avaient envoyé avec le pilote un homme à qui j’ai remis nos papiers.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "douaniers"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p089-original-s01",
              "text": "— Non, j’ai donné aux douaniers la liste de nos marchandises; et quant à la consigne, elle avait envoyé avec le pilote côtier un homme à qui j’ai remis nos papiers.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pilote-cotier",
            "consigne",
            "douaniers"
          ]
        }
      },
      "originalComparison": [
        "— Non, j’ai donné aux douaniers la liste de nos marchandises; et quant à la consigne, elle avait envoyé avec le pilote côtier un homme à qui j’ai remis nos papiers."
      ]
    },
    {
      "id": "c01-p090",
      "sequence": 90,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 90,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p090-simple-s01",
              "text": "— Alors, vous n’avez plus rien à faire ici?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p090-advanced-s01",
              "text": "— Alors, vous n’avez plus rien à faire ici?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p090-original-s01",
              "text": "— Alors, vous n’avez plus rien à faire ici?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Alors, vous n’avez plus rien à faire ici?"
      ]
    },
    {
      "id": "c01-p091",
      "sequence": 91,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 91,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p091-simple-s01",
              "text": "Dantès regarde vite autour de lui.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p091-advanced-s01",
              "text": "Dantès jeta un regard rapide autour de lui.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p091-original-s01",
              "text": "Dantès jeta un regard rapide autour de lui.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "Dantès jeta un regard rapide autour de lui."
      ]
    },
    {
      "id": "c01-p092",
      "sequence": 92,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 92,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p092-simple-s01",
              "text": "— Non, tout est en ordre, dit-il.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p092-advanced-s01",
              "text": "— Non, tout est en ordre, dit-il.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p092-original-s01",
              "text": "— Non, tout est en ordre, dit-il.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Non, tout est en ordre, dit-il."
      ]
    },
    {
      "id": "c01-p093",
      "sequence": 93,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 93,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p093-simple-s01",
              "text": "— Alors, vous pouvez venir dîner avec nous?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p093-advanced-s01",
              "text": "— Vous pouvez donc venir dîner avec nous?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p093-original-s01",
              "text": "— Vous pouvez donc alors venir dîner avec nous?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Vous pouvez donc alors venir dîner avec nous?"
      ]
    },
    {
      "id": "c01-p094",
      "sequence": 94,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 94,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p094-simple-s01",
              "text": "— Excusez-moi, monsieur Morrel. Je dois d’abord aller voir mon père. Mais merci beaucoup pour votre invitation.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p094-advanced-s01",
              "text": "— Excusez-moi, monsieur Morrel, excusez-moi, je vous en prie; mais je dois ma première visite à mon père. Je n’en suis pas moins très reconnaissant de l’honneur que vous me faites.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "reconnaissant"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p094-original-s01",
              "text": "— Excusez-moi, monsieur Morrel, excusez-moi, je vous en prie; mais je dois ma première visite à mon père. Je n’en suis pas moins bien reconnaissant de l’honneur que vous me faites.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Excusez-moi, monsieur Morrel, excusez-moi, je vous en prie; mais je dois ma première visite à mon père. Je n’en suis pas moins bien reconnaissant de l’honneur que vous me faites."
      ]
    },
    {
      "id": "c01-p095",
      "sequence": 95,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 95,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p095-simple-s01",
              "text": "— C’est normal, Dantès. Je sais que vous êtes un bon fils.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p095-advanced-s01",
              "text": "— C’est juste, Dantès, c’est juste. Je sais que vous êtes un bon fils.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p095-original-s01",
              "text": "— C’est juste, Dantès, c’est juste. Je sais que vous êtes un bon fils.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— C’est juste, Dantès, c’est juste. Je sais que vous êtes un bon fils."
      ]
    },
    {
      "id": "c01-p096",
      "sequence": 96,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 96,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p096-simple-s01",
              "text": "— Et… mon père va bien? demande Dantès. Vous le savez?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p096-advanced-s01",
              "text": "— Et… demanda Dantès avec une certaine hésitation, il se porte bien, mon père, à votre connaissance?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p096-original-s01",
              "text": "— Et, demanda Dantès avec une certaine hésitation, et il se porte bien, que vous sachiez, mon père?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Et, demanda Dantès avec une certaine hésitation, et il se porte bien, que vous sachiez, mon père?"
      ]
    },
    {
      "id": "c01-p097",
      "sequence": 97,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 97,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p097-simple-s01",
              "text": "— Je crois que oui, mon cher Edmond. Mais je ne l’ai pas vu.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p097-advanced-s01",
              "text": "— Je crois que oui, mon cher Edmond, bien que je ne l’aie pas aperçu.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p097-original-s01",
              "text": "— Mais je crois que oui, mon cher Edmond, quoique je ne l’aie pas aperçu.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— Mais je crois que oui, mon cher Edmond, quoique je ne l’aie pas aperçu."
      ]
    },
    {
      "id": "c01-p098",
      "sequence": 98,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 98,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p098-simple-s01",
              "text": "— Oui, il reste toujours dans sa petite chambre.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p098-advanced-s01",
              "text": "— Oui, il reste enfermé dans sa petite chambre.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p098-original-s01",
              "text": "— Oui, il se tient enfermé dans sa petite chambre.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Oui, il se tient enfermé dans sa petite chambre."
      ]
    },
    {
      "id": "c01-p099",
      "sequence": 99,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 99,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p099-simple-s01",
              "text": "— Alors il n’a pas eu de problème d’argent pendant votre voyage. Dantès sourit.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p099-advanced-s01",
              "text": "— Cela prouve au moins qu’il n’a manqué de rien pendant votre absence. Dantès sourit.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p099-original-s01",
              "text": "— Cela prouve au moins qu’il n’a manqué de rien pendant votre absence. Dantès sourit.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Cela prouve au moins qu’il n’a manqué de rien pendant votre absence. Dantès sourit."
      ]
    },
    {
      "id": "c01-p100",
      "sequence": 100,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 100,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p100-simple-s01",
              "text": "— Mon père est fier, monsieur. Même quand il n’a rien, il ne demande rien à personne. Il demande seulement à Dieu.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p100-advanced-s01",
              "text": "— Mon père est fier, monsieur, et même s’il avait manqué de tout, je doute qu’il ait demandé quoi que ce soit à qui que ce soit au monde, excepté à Dieu.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p100-original-s01",
              "text": "— Mon père est fier, monsieur, et eût-il manqué de tout, je doute qu’il eût demandé quelque chose à qui que ce soit au monde, excepté à Dieu.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Mon père est fier, monsieur, et eût-il manqué de tout, je doute qu’il eût demandé quelque chose à qui que ce soit au monde, excepté à Dieu."
      ]
    },
    {
      "id": "c01-p101",
      "sequence": 101,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 101,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p101-simple-s01",
              "text": "— Eh bien, après cette visite, venez chez nous.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p101-advanced-s01",
              "text": "— Eh bien! après cette première visite, nous comptons sur vous.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p101-original-s01",
              "text": "— Eh bien! après cette première visite, nous comptons sur vous.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Eh bien! après cette première visite, nous comptons sur vous."
      ]
    },
    {
      "id": "c01-p102",
      "sequence": 102,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 102,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p102-simple-s01",
              "text": "— Excusez-moi encore, monsieur Morrel. Après mon père, je dois faire une autre visite. Elle est aussi très importante pour moi.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p102-advanced-s01",
              "text": "— Excusez-moi encore, monsieur Morrel; mais après cette première visite, j’en ai une seconde qui ne me tient pas moins à cœur.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p102-original-s01",
              "text": "— Excusez-moi encore, monsieur Morrel; mais, après cette première visite, j’en ai une seconde qui ne me tient pas moins au cœur.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Excusez-moi encore, monsieur Morrel; mais, après cette première visite, j’en ai une seconde qui ne me tient pas moins au cœur."
      ]
    },
    {
      "id": "c01-p103",
      "sequence": 103,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 103,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p103-simple-s01",
              "text": "— Ah! c’est vrai, Dantès. J’oubliais: quelqu’un vous attend aussi au village des Catalans. C’est la belle Mercédès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p103-advanced-s01",
              "text": "— Ah! c’est vrai, Dantès, j’oubliais qu’il y a aux Catalans quelqu’un qui doit vous attendre avec autant d’impatience que votre père: c’est la belle Mercédès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "catalans",
            "mercedes"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p103-original-s01",
              "text": "— Ah! c’est vrai, Dantès, j’oubliais qu’il y a aux Catalans quelqu’un qui doit vous attendre avec non moins d’impatience que votre père: c’est la belle Mercédès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Ah! c’est vrai, Dantès, j’oubliais qu’il y a aux Catalans quelqu’un qui doit vous attendre avec non moins d’impatience que votre père: c’est la belle Mercédès."
      ]
    },
    {
      "id": "c01-p104",
      "sequence": 104,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 104,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p104-simple-s01",
              "text": "Dantès devient tout rouge.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p104-advanced-s01",
              "text": "Dantès rougit.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p104-original-s01",
              "text": "Dantès rougit.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "Dantès rougit."
      ]
    },
    {
      "id": "c01-p105",
      "sequence": 105,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 105,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p105-simple-s01",
              "text": "— Ah! ah! dit l’armateur. Je comprends maintenant. Elle est venue trois fois me demander des nouvelles du Pharaon. Vous avez de la chance, Edmond: votre amie est très jolie.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p105-advanced-s01",
              "text": "— Ah! ah! dit l’armateur, je ne m’étonne plus qu’elle soit venue trois fois me demander des nouvelles du Pharaon. Peste! Edmond, vous n’êtes pas à plaindre: vous avez là une jolie maîtresse.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "armateur",
            "peste",
            "a-plaindre",
            "maitresse"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p105-original-s01",
              "text": "— Ah! ah! dit l’armateur, cela ne m’étonne plus, qu’elle soit venue trois fois me demander des nouvelles du Pharaon. Peste! Edmond, vous n’êtes point à plaindre, et vous avez là une jolie maîtresse.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "armateur",
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— Ah! ah! dit l’armateur, cela ne m’étonne plus, qu’elle soit venue trois fois me demander des nouvelles du Pharaon. Peste! Edmond, vous n’êtes point à plaindre, et vous avez là une jolie maîtresse."
      ]
    },
    {
      "id": "c01-p106",
      "sequence": 106,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 106,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p106-simple-s01",
              "text": "— Ce n’est pas mon amie, monsieur, dit le jeune marin, très sérieux. C’est ma fiancée.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "marin",
            "fiancee"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p106-advanced-s01",
              "text": "— Ce n’est pas ma maîtresse, monsieur, dit gravement le jeune marin, c’est ma fiancée.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "maitresse"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p106-original-s01",
              "text": "— Ce n’est point ma maîtresse, monsieur, dit gravement le jeune marin, c’est ma fiancée.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Ce n’est point ma maîtresse, monsieur, dit gravement le jeune marin, c’est ma fiancée."
      ]
    },
    {
      "id": "c01-p107",
      "sequence": 107,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 107,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p107-simple-s01",
              "text": "— C’est parfois la même chose, dit l’armateur. Il rit.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p107-advanced-s01",
              "text": "— C’est quelquefois la même chose, dit l’armateur en riant.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p107-original-s01",
              "text": "— C’est quelquefois tout un, dit l’armateur en riant.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        }
      },
      "originalComparison": [
        "— C’est quelquefois tout un, dit l’armateur en riant."
      ]
    },
    {
      "id": "c01-p108",
      "sequence": 108,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 108,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p108-simple-s01",
              "text": "— Pas pour nous, monsieur, répond Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p108-advanced-s01",
              "text": "— Pas pour nous, monsieur, répondit Dantès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p108-original-s01",
              "text": "— Pas pour nous, monsieur, répondit Dantès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Pas pour nous, monsieur, répondit Dantès."
      ]
    },
    {
      "id": "c01-p109",
      "sequence": 109,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 109,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p109-simple-s01",
              "text": "— Allez, allez, mon cher Edmond, dit l’armateur. Vous avez bien travaillé pour moi. Maintenant, occupez-vous de vous. Avez-vous besoin d’argent?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p109-advanced-s01",
              "text": "— Allons, allons, mon cher Edmond, continua l’armateur, je ne veux pas vous retenir; vous vous êtes assez bien occupé de mes affaires pour que je vous laisse tout le temps de vous occuper des vôtres. Avez-vous besoin d’argent?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p109-original-s01",
              "text": "— Allons, allons, mon cher Edmond., continua l’armateur, que je ne vous retienne pas; vous avez assez bien fait mes affaires pour que je vous donne tout loisir de faire les vôtres. Avez-vous besoin d’argent?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— Allons, allons, mon cher Edmond., continua l’armateur, que je ne vous retienne pas; vous avez assez bien fait mes affaires pour que je vous donne tout loisir de faire les vôtres. Avez-vous besoin d’argent?"
      ]
    },
    {
      "id": "c01-p110",
      "sequence": 110,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 110,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p110-simple-s01",
              "text": "— Non, monsieur. J’ai tout l’argent de mon voyage: presque trois mois de travail.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p110-advanced-s01",
              "text": "— Non, monsieur; j’ai tout mon salaire du voyage, c’est-à-dire près de trois mois de paie.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "paie"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p110-original-s01",
              "text": "— Non, monsieur; j’ai tous mes appointements du voyage, c’est-à-dire près de trois mois de solde.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Non, monsieur; j’ai tous mes appointements du voyage, c’est-à-dire près de trois mois de solde."
      ]
    },
    {
      "id": "c01-p111",
      "sequence": 111,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 111,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p111-simple-s01",
              "text": "— Vous faites attention à votre argent, Edmond. C’est bien.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p111-advanced-s01",
              "text": "— Vous êtes un garçon sérieux, Edmond.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p111-original-s01",
              "text": "— Vous êtes un garçon rangé, Edmond.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— Vous êtes un garçon rangé, Edmond."
      ]
    },
    {
      "id": "c01-p112",
      "sequence": 112,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 112,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p112-simple-s01",
              "text": "— C’est aussi parce que mon père est pauvre, monsieur Morrel.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p112-advanced-s01",
              "text": "— Ajoutez que j’ai un père pauvre, monsieur Morrel.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p112-original-s01",
              "text": "— Ajoutez que j’ai un père pauvre, monsieur Morrel.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Ajoutez que j’ai un père pauvre, monsieur Morrel."
      ]
    },
    {
      "id": "c01-p113",
      "sequence": 113,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 113,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p113-simple-s01",
              "text": "— Oui, oui, je sais que vous êtes un bon fils. Allez voir votre père. Moi aussi, j’ai un fils. Après un voyage de trois mois, je veux le voir tout de suite!",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p113-advanced-s01",
              "text": "— Oui, oui, je sais que vous êtes un bon fils. Allez donc voir votre père: j’ai un fils aussi, et j’en voudrais beaucoup à celui qui, après un voyage de trois mois, le retiendrait loin de moi.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "en-voudrais"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p113-original-s01",
              "text": "— Oui, oui, je sais que vous êtes un bon fils. Allez donc voir votre père: j’ai un fils aussi, et j’en voudrais fort à celui qui, après un voyage de trois mois, le retiendrait loin de moi.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Oui, oui, je sais que vous êtes un bon fils. Allez donc voir votre père: j’ai un fils aussi, et j’en voudrais fort à celui qui, après un voyage de trois mois, le retiendrait loin de moi."
      ]
    },
    {
      "id": "c01-p114",
      "sequence": 114,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 114,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p114-simple-s01",
              "text": "— Alors, je peux partir? dit le jeune homme.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p114-advanced-s01",
              "text": "— Alors, vous permettez? dit le jeune homme en saluant.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p114-original-s01",
              "text": "— Alors vous permettez? dit le jeune homme en saluant.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Alors vous permettez? dit le jeune homme en saluant."
      ]
    },
    {
      "id": "c01-p115",
      "sequence": 115,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 115,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p115-simple-s01",
              "text": "— Oui, si vous n’avez plus rien à me dire.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p115-advanced-s01",
              "text": "— Oui, si vous n’avez rien de plus à me dire.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p115-original-s01",
              "text": "— Oui, si vous n’avez rien de plus à me dire.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Oui, si vous n’avez rien de plus à me dire."
      ]
    },
    {
      "id": "c01-p116",
      "sequence": 116,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 116,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p116-simple-s01",
              "text": "— Non.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p116-advanced-s01",
              "text": "— Non.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p116-original-s01",
              "text": "— Non.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Non."
      ]
    },
    {
      "id": "c01-p117",
      "sequence": 117,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 117,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p117-simple-s01",
              "text": "— Avant de mourir, le capitaine Leclère ne vous a pas donné une lettre pour moi?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p117-advanced-s01",
              "text": "— Le capitaine Leclère ne vous a pas, en mourant, donné une lettre pour moi?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p117-original-s01",
              "text": "— Le capitaine Leclère ne vous a pas, en mourant, donné une lettre pour moi?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "leclere",
            "capitaine",
            "lettre"
          ]
        }
      },
      "originalComparison": [
        "— Le capitaine Leclère ne vous a pas, en mourant, donné une lettre pour moi?"
      ]
    },
    {
      "id": "c01-p118",
      "sequence": 118,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 118,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p118-simple-s01",
              "text": "— Non, monsieur. Il ne pouvait plus écrire. Mais j’ai quelque chose à vous demander: je voudrais un congé de quelques jours.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p118-advanced-s01",
              "text": "— Il lui aurait été impossible d’écrire, monsieur; mais cela me rappelle que j’aurai un congé de quelques jours à vous demander.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "conge"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p118-original-s01",
              "text": "— Il lui eût été impossible d’écrire, monsieur; mais cela me rappelle que j’aurai un congé de quelques jours à vous demander.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Il lui eût été impossible d’écrire, monsieur; mais cela me rappelle que j’aurai un congé de quelques jours à vous demander."
      ]
    },
    {
      "id": "c01-p119",
      "sequence": 119,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 119,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p119-simple-s01",
              "text": "— Pour vous marier?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p119-advanced-s01",
              "text": "— Pour vous marier?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p119-original-s01",
              "text": "— Pour vous marier?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Pour vous marier?"
      ]
    },
    {
      "id": "c01-p120",
      "sequence": 120,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 120,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p120-simple-s01",
              "text": "— Oui, d’abord. Et après, pour aller à Paris.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p120-advanced-s01",
              "text": "— D’abord; puis pour aller à Paris.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p120-original-s01",
              "text": "— D’abord; puis pour aller à Paris.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— D’abord; puis pour aller à Paris."
      ]
    },
    {
      "id": "c01-p121",
      "sequence": 121,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 121,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p121-simple-s01",
              "text": "— Bien, bien! Prenez votre temps, Dantès. Le bateau ne repart pas avant trois mois. Mais dans trois mois, vous devez être là. Le Pharaon, dit l’armateur, ne peut pas partir sans son capitaine.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p121-advanced-s01",
              "text": "— Bon, bon! vous prendrez le temps que vous voudrez, Dantès; il nous faudra bien six semaines pour décharger le navire, et nous ne reprendrons guère la mer avant trois mois. Seulement, dans trois mois, il faudra que vous soyez là. Le Pharaon, continua l’armateur en frappant sur l’épaule du jeune marin, ne pourrait pas repartir sans son capitaine.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "navire",
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p121-original-s01",
              "text": "— Bon, bon! vous prendrez le temps que vous voudrez, Dantès; le temps de décharger le bâtiment nous prendra bien six semaines, et nous ne nous remettrons guère en mer avant trois mois; seulement, dans trois mois il faudra que vous soyez là. Le Pharaon, continua l’armateur, en frappant sur l’épaule du jeune marin, ne pourrait pas repartir sans son capitaine.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "batiment",
            "armateur",
            "dantes",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Bon, bon! vous prendrez le temps que vous voudrez, Dantès; le temps de décharger le bâtiment nous prendra bien six semaines, et nous ne nous remettrons guère en mer avant trois mois; seulement, dans trois mois il faudra que vous soyez là. Le Pharaon, continua l’armateur, en frappant sur l’épaule du jeune marin, ne pourrait pas repartir sans son capitaine."
      ]
    },
    {
      "id": "c01-p122",
      "sequence": 122,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 122,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p122-simple-s01",
              "text": "— Sans son capitaine! crie Dantès. Il est très heureux. Faites attention à ce que vous dites, monsieur: c’est mon plus grand rêve. Vous voulez vraiment que je sois le capitaine du Pharaon?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p122-advanced-s01",
              "text": "— Sans son capitaine! s’écria Dantès, les yeux brillants de joie; faites bien attention à ce que vous dites là, monsieur, car vous venez de répondre aux espérances les plus secrètes de mon cœur. Auriez-vous l’intention de me nommer capitaine du Pharaon?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p122-original-s01",
              "text": "— Sans son capitaine! s’écria Dantès les yeux brillants de joie; faites bien attention à ce que vous dites là, monsieur, car vous venez de répondre aux plus secrètes espérances de mon cœur. Votre intention serait-elle de me nommer capitaine du Pharaon?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "dantes",
            "capitaine",
            "esperance"
          ]
        }
      },
      "originalComparison": [
        "— Sans son capitaine! s’écria Dantès les yeux brillants de joie; faites bien attention à ce que vous dites là, monsieur, car vous venez de répondre aux plus secrètes espérances de mon cœur. Votre intention serait-elle de me nommer capitaine du Pharaon?"
      ]
    },
    {
      "id": "c01-p123",
      "sequence": 123,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 123,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p123-simple-s01",
              "text": "— Je ne suis pas seul, mon cher Dantès: j’ai un associé. Mais moi, je dis oui. Maintenant, il faut le oui de mon associé. Je vais lui parler et je vais faire de mon mieux.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "associe"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p123-advanced-s01",
              "text": "— Si j’étais seul, je vous tendrais la main, mon cher Dantès, et je vous dirais: c’est fait. Mais j’ai un associé, et vous connaissez le proverbe italien: « Che a compagno a padrone » — qui a un associé a un maître. Mais la moitié du travail est faite, au moins, puisque sur deux voix vous en avez déjà une. Comptez sur moi pour vous obtenir l’autre: je ferai de mon mieux.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "associe"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p123-original-s01",
              "text": "— Si j’étais seul, je vous tendrais la main, mon cher Dantès, et je vous dirais: C’est fait; mais j’ai un associé, et vous savez le proverbe italien: « Che a compagno a padrone. » Mais la moitié de la besogne est faite au moins, puisque sur deux voix vous en avez déjà une. Rapportez-vous-en à moi pour vous obtenir l’autre, et je ferai de mon mieux.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes",
            "besogne"
          ]
        }
      },
      "originalComparison": [
        "— Si j’étais seul, je vous tendrais la main, mon cher Dantès, et je vous dirais: C’est fait; mais j’ai un associé, et vous savez le proverbe italien: « Che a compagno a padrone. » Mais la moitié de la besogne est faite au moins, puisque sur deux voix vous en avez déjà une. Rapportez-vous-en à moi pour vous obtenir l’autre, et je ferai de mon mieux."
      ]
    },
    {
      "id": "c01-p124",
      "sequence": 124,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 124,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p124-simple-s01",
              "text": "— Oh! monsieur Morrel! dit le jeune marin. Il pleure presque et il prend les mains de l’armateur. Je vous remercie, pour mon père et pour Mercédès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p124-advanced-s01",
              "text": "— Oh! monsieur Morrel, s’écria le jeune marin en saisissant, les larmes aux yeux, les mains de l’armateur, monsieur Morrel, je vous remercie au nom de mon père et de Mercédès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "mercedes"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p124-original-s01",
              "text": "— Oh! monsieur Morrel, s’écria le jeune marin saisissant, les larmes aux yeux, les mains de l’armateur, monsieur Morrel, je vous remercie au nom de mon père et de Mercédès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Oh! monsieur Morrel, s’écria le jeune marin saisissant, les larmes aux yeux, les mains de l’armateur, monsieur Morrel, je vous remercie au nom de mon père et de Mercédès."
      ]
    },
    {
      "id": "c01-p125",
      "sequence": 125,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 125,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p125-simple-s01",
              "text": "— C’est bien, c’est bien, Edmond. Dieu aide les gens bons! Allez voir votre père, allez voir Mercédès, et revenez me voir après.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p125-advanced-s01",
              "text": "— C’est bien, c’est bien, Edmond; il y a un Dieu au ciel pour les braves gens, que diable! Allez voir votre père, allez voir Mercédès, et revenez me voir ensuite.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "mercedes"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p125-original-s01",
              "text": "— C’est bien, c’est bien, Edmond, il y a un Dieu au ciel pour les braves gens, que diable! Allez voir votre père, allez voir Mercédès, et revenez me voir après.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— C’est bien, c’est bien, Edmond, il y a un Dieu au ciel pour les braves gens, que diable! Allez voir votre père, allez voir Mercédès, et revenez me voir après."
      ]
    },
    {
      "id": "c01-p126",
      "sequence": 126,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 126,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p126-simple-s01",
              "text": "— Vous ne voulez pas rentrer au port avec moi?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p126-advanced-s01",
              "text": "— Vous ne voulez pas que je vous ramène à terre?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p126-original-s01",
              "text": "— Vous ne voulez pas que je vous ramène à terre?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Vous ne voulez pas que je vous ramène à terre?"
      ]
    },
    {
      "id": "c01-p127",
      "sequence": 127,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 127,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p127-simple-s01",
              "text": "— Non, merci. Je reste ici pour travailler avec Danglars. Avez-vous été content de lui pendant le voyage?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p127-advanced-s01",
              "text": "— Non, merci: je reste pour régler mes comptes avec Danglars. Avez-vous été content de lui pendant le voyage?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p127-original-s01",
              "text": "— Non, merci: je reste à régler mes comptes avec Danglars,. Avez-vous été content de lui pendant le voyage?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "— Non, merci: je reste à régler mes comptes avec Danglars,. Avez-vous été content de lui pendant le voyage?"
      ]
    },
    {
      "id": "c01-p128",
      "sequence": 128,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 128,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p128-simple-s01",
              "text": "— Ça dépend, monsieur. Comme ami, non. Je crois qu’il ne m’aime pas. Un jour, nous avons eu un problème, lui et moi. Je lui ai demandé de s’arrêter dix minutes à l’île de Monte-Cristo pour nous battre. C’était une mauvaise idée, et il a dit non. Il avait raison. Mais comme comptable, il travaille très bien. Vous allez être content de lui.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "comptable"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p128-advanced-s01",
              "text": "— Cela dépend du sens que vous donnez à cette question, monsieur. Si c’est comme bon camarade, non: je crois qu’il ne m’aime pas depuis le jour où, à la suite d’une petite querelle entre nous, j’ai eu la bêtise de lui proposer de nous arrêter dix minutes à l’île de Monte-Cristo pour régler cette querelle; proposition que j’avais eu tort de lui faire, et qu’il avait eu raison de refuser. Si c’est comme comptable que vous me posez la question, je crois qu’il n’y a rien à redire, et que vous serez content de la façon dont son travail est fait.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "comptable",
            "querelle",
            "betise"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p128-original-s01",
              "text": "— C’est selon le sens que vous attachez à cette question, monsieur: si c’est comme bon camarade, non; car je crois qu’il ne m’aime pas depuis le jour où j’ai eu la bêtise, à la suite d’une petite querelle que nous avions eue ensemble, de lui proposer de nous arrêter dix minutes à l’île de Monte-Cristo pour vider cette querelle; proposition que j’avais eu tort de lui faire, et qu’il avait eu, lui, raison de refuser. Si c’est comme comptable que vous me faites cette question, je crois qu’il n’y a rien à dire et que vous serez content de la façon dont sa besogne est faite.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "comptable",
            "besogne"
          ]
        }
      },
      "originalComparison": [
        "— C’est selon le sens que vous attachez à cette question, monsieur: si c’est comme bon camarade, non; car je crois qu’il ne m’aime pas depuis le jour où j’ai eu la bêtise, à la suite d’une petite querelle que nous avions eue ensemble, de lui proposer de nous arrêter dix minutes à l’île de Monte-Cristo pour vider cette querelle; proposition que j’avais eu tort de lui faire, et qu’il avait eu, lui, raison de refuser. Si c’est comme comptable que vous me faites cette question, je crois qu’il n’y a rien à dire et que vous serez content de la façon dont sa besogne est faite."
      ]
    },
    {
      "id": "c01-p129",
      "sequence": 129,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 129,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p129-simple-s01",
              "text": "— Mais dites-moi, Dantès: un jour, vous êtes capitaine du Pharaon. Est-ce que vous gardez Danglars avec plaisir?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "capitaine"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p129-advanced-s01",
              "text": "— Mais voyons, Dantès, demanda l’armateur, si vous étiez capitaine du Pharaon, garderiez-vous Danglars avec plaisir?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p129-original-s01",
              "text": "— Mais, demanda l’armateur, voyons, Dantès, si vous étiez capitaine du Pharaon, garderiez-vous Danglars avec plaisir?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "pharaon",
            "armateur",
            "dantes",
            "danglars",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Mais, demanda l’armateur, voyons, Dantès, si vous étiez capitaine du Pharaon, garderiez-vous Danglars avec plaisir?"
      ]
    },
    {
      "id": "c01-p130",
      "sequence": 130,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 130,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p130-simple-s01",
              "text": "— Capitaine ou second, monsieur Morrel, je respecte toujours les personnes que mes armateurs ont choisies.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "capitaine",
            "second"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p130-advanced-s01",
              "text": "— Capitaine ou second, monsieur Morrel, répondit Dantès, j’aurai toujours le plus grand respect pour ceux qui auront la confiance de mes armateurs.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "second"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p130-original-s01",
              "text": "— Capitaine ou second, monsieur Morrel, répondit Dantès, j’aurai toujours les plus grands égards pour ceux qui posséderont la confiance de mes armateurs.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "dantes",
            "morrel",
            "capitaine"
          ]
        }
      },
      "originalComparison": [
        "— Capitaine ou second, monsieur Morrel, répondit Dantès, j’aurai toujours les plus grands égards pour ceux qui posséderont la confiance de mes armateurs."
      ]
    },
    {
      "id": "c01-p131",
      "sequence": 131,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 131,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p131-simple-s01",
              "text": "— Bien, Dantès. Vous êtes vraiment un bon garçon. Allez, partez! Je vois que vous voulez partir très vite.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p131-advanced-s01",
              "text": "— Allons, allons, Dantès, je vois que vous êtes en tout point un brave garçon. Je ne vous retiens plus: allez, car je vois que vous êtes sur des charbons ardents.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "charbons-ardents"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p131-original-s01",
              "text": "— Allons, allons, Dantès, je vois qu’en tout point vous êtes un brave garçon; que je ne vous retienne plus; allez, car je vois que vous êtes sur des charbons.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— Allons, allons, Dantès, je vois qu’en tout point vous êtes un brave garçon; que je ne vous retienne plus; allez, car je vois que vous êtes sur des charbons."
      ]
    },
    {
      "id": "c01-p132",
      "sequence": 132,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 132,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p132-simple-s01",
              "text": "— Alors, je peux partir? demande Dantès.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p132-advanced-s01",
              "text": "— J’ai donc mon congé? demanda Dantès.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "conge"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p132-original-s01",
              "text": "— J’ai donc mon congé? demanda Dantès.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "dantes"
          ]
        }
      },
      "originalComparison": [
        "— J’ai donc mon congé? demanda Dantès."
      ]
    },
    {
      "id": "c01-p133",
      "sequence": 133,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 133,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p133-simple-s01",
              "text": "— Allez, je vous dis.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p133-advanced-s01",
              "text": "— Allez, je vous dis.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p133-original-s01",
              "text": "— Allez, je vous dis.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Allez, je vous dis."
      ]
    },
    {
      "id": "c01-p134",
      "sequence": 134,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 134,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p134-simple-s01",
              "text": "— Je peux prendre votre barque?",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "barque"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p134-advanced-s01",
              "text": "— Vous permettez que je prenne votre canot?",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "canot"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p134-original-s01",
              "text": "— Vous permettez que je prenne votre canot?",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Vous permettez que je prenne votre canot?"
      ]
    },
    {
      "id": "c01-p135",
      "sequence": 135,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 135,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p135-simple-s01",
              "text": "— Prenez.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p135-advanced-s01",
              "text": "— Prenez.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p135-original-s01",
              "text": "— Prenez.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "— Prenez."
      ]
    },
    {
      "id": "c01-p136",
      "sequence": 136,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 136,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p136-simple-s01",
              "text": "— Au revoir, monsieur Morrel, et mille fois merci.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p136-advanced-s01",
              "text": "— Au revoir, monsieur Morrel, et mille fois merci.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p136-original-s01",
              "text": "— Au revoir, monsieur Morrel, et mille fois merci.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "morrel"
          ]
        }
      },
      "originalComparison": [
        "— Au revoir, monsieur Morrel, et mille fois merci."
      ]
    },
    {
      "id": "c01-p137",
      "sequence": 137,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 137,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p137-simple-s01",
              "text": "— Au revoir, mon cher Edmond, bonne chance!",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p137-advanced-s01",
              "text": "— Au revoir, mon cher Edmond, bonne chance!",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p137-original-s01",
              "text": "— Au revoir, mon cher Edmond, bonne chance!",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "edmond"
          ]
        }
      },
      "originalComparison": [
        "— Au revoir, mon cher Edmond, bonne chance!"
      ]
    },
    {
      "id": "c01-p138",
      "sequence": 138,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 138,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p138-simple-s01",
              "text": "Le jeune marin saute dans la barque. Deux marins la conduisent vite vers la ville, entre beaucoup d’autres bateaux.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "barque",
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p138-advanced-s01",
              "text": "Le jeune marin sauta dans le canot, alla s’asseoir à l’arrière et donna l’ordre d’aborder à la Canebière.",
              "translation": "",
              "source": "authored-b2"
            },
            {
              "id": "c01-p138-advanced-s02",
              "text": "Deux matelots se penchèrent aussitôt sur leurs rames, et l’embarcation glissa aussi rapidement que possible au milieu des mille barques qui encombrent l’espèce de rue étroite menant, entre deux rangées de navires, de l’entrée du port au quai d’Orléans.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "navire",
            "barque",
            "matelots",
            "canebiere",
            "rames",
            "canot",
            "embarcation",
            "encombrent"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p138-original-s01",
              "text": "Le jeune marin sauta dans le canot, alla s’asseoir à la poupe et donna l’ordre d’aborder à la Canebière.",
              "translation": "",
              "source": "original"
            },
            {
              "id": "c01-p138-original-s02",
              "text": "Deux matelots se penchèrent aussitôt sur leurs rames, et l’embarcation glissa aussi rapidement qu’il est possible de le faire au milieu des mille barques qui obstruent l’espèce de rue étroite qui conduit, entre deux rangées de navires, de l’entrée du port au quai d’Orléans.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "aussitot",
            "navire",
            "barque",
            "matelots",
            "canebiere",
            "rames"
          ]
        }
      },
      "originalComparison": [
        "Le jeune marin sauta dans le canot, alla s’asseoir à la poupe et donna l’ordre d’aborder à la Canebière.",
        "Deux matelots se penchèrent aussitôt sur leurs rames, et l’embarcation glissa aussi rapidement qu’il est possible de le faire au milieu des mille barques qui obstruent l’espèce de rue étroite qui conduit, entre deux rangées de navires, de l’entrée du port au quai d’Orléans."
      ]
    },
    {
      "id": "c01-p139",
      "sequence": 139,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 139,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p139-simple-s01",
              "text": "L’armateur le regarde avec un sourire. Dantès saute à terre et entre dans la rue de la Canebière. Dans cette rue célèbre, il y a toujours beaucoup de monde. Les gens de Marseille l’aiment beaucoup. Pour eux, c’est la plus belle rue du monde, plus belle que les rues de Paris.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p139-advanced-s01",
              "text": "L’armateur le suivit des yeux en souriant jusqu’au bord, le vit sauter sur les dalles du quai et se perdre aussitôt dans la foule bariolée qui, de cinq heures du matin à neuf heures du soir, encombre cette fameuse rue de la Canebière, dont les Marseillais d’aujourd’hui sont si fiers qu’ils disent avec le plus grand sérieux du monde, et avec cet accent qui donne tant de caractère à leurs paroles: « Si Paris avait la Canebière, Paris serait un petit Marseille. »",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "canebiere",
            "encombrent",
            "dalles",
            "bariolee"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p139-original-s01",
              "text": "L’armateur le suivit des yeux en souriant jusqu’au bord, le vit sauter sur les dalles du quai, et se perdre aussitôt au milieu de la foule bariolée, qui, de cinq heures du matin à neuf heures de soir, encombre cette fameuse rue de la Canebière, dont les Phocéens modernes sont si fiers, qu’ils disent avec le plus grand sérieux du monde, et avec cet accent qui donne tant de caractère à ce qu’ils disent: Si Paris avait la Canebière, Paris serait un petit Marseille.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "aussitot",
            "armateur",
            "bord",
            "canebiere",
            "marseille"
          ]
        }
      },
      "originalComparison": [
        "L’armateur le suivit des yeux en souriant jusqu’au bord, le vit sauter sur les dalles du quai, et se perdre aussitôt au milieu de la foule bariolée, qui, de cinq heures du matin à neuf heures de soir, encombre cette fameuse rue de la Canebière, dont les Phocéens modernes sont si fiers, qu’ils disent avec le plus grand sérieux du monde, et avec cet accent qui donne tant de caractère à ce qu’ils disent: Si Paris avait la Canebière, Paris serait un petit Marseille."
      ]
    },
    {
      "id": "c01-p140",
      "sequence": 140,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 140,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p140-simple-s01",
              "text": "L’armateur se retourne. Danglars est derrière lui. Il a l’air d’attendre des ordres. Mais en fait, lui aussi, il regarde le jeune marin.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "marin"
          ]
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p140-advanced-s01",
              "text": "En se retournant, l’armateur vit derrière lui Danglars, qui, en apparence, semblait attendre ses ordres, mais qui, en réalité, suivait comme lui le jeune marin du regard.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": [
            "armateur"
          ]
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p140-original-s01",
              "text": "En se retournant, l’armateur vit derrière lui Danglars, qui, en apparence, semblait attendre ses ordres, mais qui, en réalité, suivait comme lui le jeune, marin du regard.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": [
            "armateur",
            "danglars"
          ]
        }
      },
      "originalComparison": [
        "En se retournant, l’armateur vit derrière lui Danglars, qui, en apparence, semblait attendre ses ordres, mais qui, en réalité, suivait comme lui le jeune, marin du regard."
      ]
    },
    {
      "id": "c01-p141",
      "sequence": 141,
      "title": "Marseille. L’arrivee.",
      "book": "Le Comte de Monte-Cristo",
      "author": "Alexandre Dumas",
      "sourceEpub": "Books/Le_comte_de_Monte-Cristo_Tome_[...]Dumas_Alexandre_btv1b8600196s.epub",
      "sourceChapter": "OEBPS/e08600196_c01.html",
      "sourceParagraph": 141,
      "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
      "representations": {
        "simple": {
          "label": "Simple",
          "level": "A2",
          "description": "The story in basic A2 French: short sentences, present tense, everyday words. About 20 words in the chapter need support.",
          "sentences": [
            {
              "id": "c01-p141-simple-s01",
              "text": "Les deux hommes regardent le même homme. Mais leurs yeux ne disent pas du tout la même chose.",
              "translation": "",
              "source": "authored-a2"
            }
          ],
          "vocabularyKeys": []
        },
        "advanced": {
          "label": "Advanced",
          "level": "B2",
          "description": "The full chapter in modern B2 French: every event and line of dialogue, without the rare nautical and archaic wording.",
          "sentences": [
            {
              "id": "c01-p141-advanced-s01",
              "text": "Seulement, il y avait une grande différence dans l’expression de ces deux regards qui suivaient le même homme.",
              "translation": "",
              "source": "authored-b2"
            }
          ],
          "vocabularyKeys": []
        },
        "original": {
          "label": "Original",
          "level": "Dumas",
          "description": "Dumas's original French, without word highlighting.",
          "sentences": [
            {
              "id": "c01-p141-original-s01",
              "text": "Seulement il y avait une grande différence dans l’expression de ce double regard qui suivait le même homme.",
              "translation": "",
              "source": "original"
            }
          ],
          "vocabularyKeys": []
        }
      },
      "originalComparison": [
        "Seulement il y avait une grande différence dans l’expression de ce double regard qui suivait le même homme."
      ]
    }
  ],
  "glossary": {
    "vigie": {
      "headword": "vigie",
      "meaning": "lookout; watch post",
      "note": "Can mean the watcher or the lookout position.",
      "levels": [
        "original"
      ],
      "lemma": "vigie",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "vigie"
      ]
    },
    "trois-mats": {
      "headword": "trois-mâts",
      "meaning": "three-masted ship",
      "note": "A sailing vessel with three masts.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "trois-mâts",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 3,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "trois-mâts",
        "trois-màts"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target."
    },
    "pharaon": {
      "headword": "Pharaon",
      "meaning": "the ship's name",
      "note": "Dantes is second mate on this vessel.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "pharaon",
      "partOfSpeech": "PROPN",
      "chapterCount": 8,
      "bookCount": 62,
      "futureFrequency": 54,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target.",
      "forms": [
        "pharaon"
      ]
    },
    "smyrne": {
      "headword": "Smyrne",
      "meaning": "Smyrna, now Izmir in Turkey",
      "note": "One of the Pharaon's eastern Mediterranean ports.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "smyrne",
      "partOfSpeech": "PROPN",
      "chapterCount": 1,
      "bookCount": 8,
      "futureFrequency": 7,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target.",
      "forms": [
        "smyrne"
      ]
    },
    "trieste": {
      "headword": "Trieste",
      "meaning": "a port city on the Adriatic",
      "note": "Another stop on the Pharaon's route.",
      "levels": [
        "original"
      ],
      "lemma": "trieste",
      "partOfSpeech": "PROPN",
      "chapterCount": 1,
      "bookCount": 3,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target.",
      "forms": [
        "trieste"
      ]
    },
    "naples": {
      "headword": "Naples",
      "meaning": "Naples",
      "note": "The last named port before Marseille.",
      "levels": [
        "original"
      ],
      "lemma": "naples",
      "partOfSpeech": "PROPN",
      "chapterCount": 2,
      "bookCount": 18,
      "futureFrequency": 16,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target.",
      "forms": [
        "naples"
      ]
    },
    "pilote-cotier": {
      "headword": "pilote côtier",
      "meaning": "coastal pilot",
      "note": "A local specialist who guides ships through harbor waters.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "pilote côtier",
      "partOfSpeech": "X",
      "chapterCount": 2,
      "bookCount": 2,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "pilote côtier"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target."
    },
    "aussitot": {
      "headword": "aussitôt",
      "meaning": "immediately, at once",
      "note": "Often marks quick action in narration.",
      "levels": [
        "original"
      ],
      "lemma": "aussitôt",
      "partOfSpeech": "ADV",
      "chapterCount": 4,
      "bookCount": 60,
      "futureFrequency": 56,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "aussitôt"
      ]
    },
    "chateau-d-if": {
      "headword": "château d'If",
      "meaning": "fortress on an island off Marseille",
      "note": "This place becomes important later in the novel.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "château d'if",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 39,
      "futureFrequency": 38,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "château d'If",
        "château d’If"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target."
    },
    "navire": {
      "headword": "navire",
      "meaning": "ship, vessel",
      "note": "A more formal word than bateau.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "navire",
      "partOfSpeech": "NOUN",
      "chapterCount": 8,
      "bookCount": 28,
      "futureFrequency": 20,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "navire",
        "navires"
      ]
    },
    "batiment": {
      "headword": "bâtiment",
      "meaning": "vessel, ship",
      "note": "In this chapter it is nautical, not a building.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "bâtiment",
      "partOfSpeech": "NOUN",
      "chapterCount": 11,
      "bookCount": 92,
      "futureFrequency": 81,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "bâtiment",
        "bâtiments"
      ]
    },
    "armateur": {
      "headword": "armateur",
      "meaning": "shipowner",
      "note": "A person or company that equips and operates merchant ships.",
      "levels": [
        "simple",
        "advanced",
        "original"
      ],
      "lemma": "armateur",
      "partOfSpeech": "NOUN",
      "chapterCount": 21,
      "bookCount": 52,
      "futureFrequency": 31,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": true,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "armateur",
        "armateurs"
      ]
    },
    "curieux": {
      "headword": "curieux",
      "meaning": "curious onlookers",
      "note": "As a noun here, people who gather to watch.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "curieux",
      "partOfSpeech": "ADJ",
      "chapterCount": 2,
      "bookCount": 36,
      "futureFrequency": 34,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "curieux",
        "curieuse",
        "curieuses"
      ]
    },
    "mouillage": {
      "headword": "mouillage",
      "meaning": "anchoring; anchorage",
      "note": "The act or place of anchoring a ship.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "mouillage",
      "partOfSpeech": "NOUN",
      "chapterCount": 5,
      "bookCount": 6,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "mouillage",
        "mouillages"
      ]
    },
    "haubans": {
      "headword": "haubans",
      "meaning": "stays, rigging cables",
      "note": "Cables that support a mast.",
      "levels": [
        "original"
      ],
      "lemma": "hauban",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "haubans"
      ]
    },
    "beaupre": {
      "headword": "beaupré",
      "meaning": "bowsprit",
      "note": "A spar projecting from the front of a sailing ship.",
      "levels": [
        "original"
      ],
      "lemma": "beaupré",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "beaupré"
      ]
    },
    "huniers": {
      "headword": "huniers",
      "meaning": "topsails",
      "note": "Sails set above the lower sails.",
      "levels": [
        "original"
      ],
      "lemma": "hunier",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 5,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": true,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "huniers"
      ]
    },
    "foc": {
      "headword": "foc",
      "meaning": "jib",
      "note": "A triangular sail near the front of a ship.",
      "levels": [
        "original"
      ],
      "lemma": "foc",
      "partOfSpeech": "NOUN",
      "chapterCount": 3,
      "bookCount": 4,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "foc",
        "focs"
      ]
    },
    "brigantine": {
      "headword": "brigantine",
      "meaning": "spanker sail",
      "note": "A fore-and-aft sail on the after mast.",
      "levels": [
        "original"
      ],
      "lemma": "brigantine",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 3,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "brigantine"
      ]
    },
    "allure": {
      "headword": "allure",
      "meaning": "bearing, pace, manner of moving",
      "note": "Here it describes the ship's slow, sad entrance.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "allur",
      "partOfSpeech": "ADJ",
      "chapterCount": 1,
      "bookCount": 3,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "allure"
      ]
    },
    "bord": {
      "headword": "bord",
      "meaning": "on board",
      "note": "A bord means aboard a ship.",
      "levels": [
        "original"
      ],
      "lemma": "bord",
      "partOfSpeech": "NOUN",
      "chapterCount": 3,
      "bookCount": 58,
      "futureFrequency": 55,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "bord",
        "bords"
      ]
    },
    "barque": {
      "headword": "barque",
      "meaning": "small boat",
      "note": "A small craft used in the harbor.",
      "levels": [
        "simple",
        "advanced",
        "original"
      ],
      "lemma": "barque",
      "partOfSpeech": "NOUN",
      "chapterCount": 3,
      "bookCount": 59,
      "futureFrequency": 56,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "barque",
        "barques"
      ]
    },
    "anse": {
      "headword": "anse",
      "meaning": "cove, small bay",
      "note": "A coastal indentation.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "anse",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 9,
      "futureFrequency": 8,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": true,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "anse",
        "anses"
      ]
    },
    "muraille": {
      "headword": "muraille",
      "meaning": "side, wall",
      "note": "Here, the side of the ship.",
      "levels": [
        "original"
      ],
      "lemma": "muraille",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 39,
      "futureFrequency": 38,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "muraille",
        "murailles"
      ]
    },
    "chargement": {
      "headword": "chargement",
      "meaning": "cargo",
      "note": "The goods carried by the ship.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "chargement",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 8,
      "futureFrequency": 7,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "chargement"
      ]
    },
    "cargaison": {
      "headword": "cargaison",
      "meaning": "cargo",
      "note": "The load of goods on a vessel.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "cargaison",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 4,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "cargaison"
      ]
    },
    "fievre-cerebrale": {
      "headword": "fièvre cérébrale",
      "meaning": "brain fever",
      "note": "An older expression for a severe fever affecting the brain.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "fièvre cérébrale",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "fièvre cérébrale"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target."
    },
    "matelots": {
      "headword": "matelots",
      "meaning": "sailors",
      "note": "Members of the ship's crew.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "matelot",
      "partOfSpeech": "NOUN",
      "chapterCount": 3,
      "bookCount": 51,
      "futureFrequency": 48,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "matelots",
        "matelot"
      ]
    },
    "ecoutes": {
      "headword": "écoutes",
      "meaning": "sheets",
      "note": "Ropes used to control sails.",
      "levels": [
        "original"
      ],
      "lemma": "écoute",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 7,
      "futureFrequency": 6,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "écoutes"
      ]
    },
    "drisses": {
      "headword": "drisses",
      "meaning": "halyards",
      "note": "Ropes used to raise sails.",
      "levels": [
        "original"
      ],
      "lemma": "drisse",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "drisses"
      ]
    },
    "cargues": {
      "headword": "cargues",
      "meaning": "clewlines or brails",
      "note": "Ropes used to gather in sails.",
      "levels": [
        "original"
      ],
      "lemma": "cargue",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 2,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Specialized one-off nautical vocabulary; Simple and Advanced use familiar French instead.",
      "forms": [
        "cargues",
        "cargue"
      ]
    },
    "hamac": {
      "headword": "hamac",
      "meaning": "hammock",
      "note": "Used here in the burial at sea description.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "hamac",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "hamac"
      ]
    },
    "boulet": {
      "headword": "boulet",
      "meaning": "cannonball",
      "note": "Used as a weight in the burial at sea.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "boulet",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 8,
      "futureFrequency": 7,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "boulet",
        "boulets"
      ]
    },
    "escompter": {
      "headword": "escompter",
      "meaning": "to discount; to reckon on",
      "note": "Here, to count a voyage's profit in advance.",
      "levels": [
        "original"
      ],
      "lemma": "escompter",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "escompter"
      ]
    },
    "comptable": {
      "headword": "comptable",
      "meaning": "accountant, purser",
      "note": "Danglars's role aboard the Pharaon.",
      "levels": [
        "simple",
        "advanced",
        "original"
      ],
      "lemma": "comptable",
      "partOfSpeech": "ADJ",
      "chapterCount": 3,
      "bookCount": 8,
      "futureFrequency": 5,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "comptable"
      ]
    },
    "obsequieux": {
      "headword": "obséquieux",
      "meaning": "obsequious",
      "note": "Overly deferential to superiors.",
      "levels": [
        "original"
      ],
      "lemma": "obséquieux",
      "partOfSpeech": "ADJ",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "obséquieux"
      ]
    },
    "subordonnes": {
      "headword": "subordonnés",
      "meaning": "subordinates",
      "note": "People lower in rank.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "subordonné",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 5,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "subordonnés",
        "subordonné"
      ]
    },
    "relache": {
      "headword": "relâche",
      "meaning": "stopover",
      "note": "A pause in a voyage.",
      "levels": [
        "original"
      ],
      "lemma": "relâche",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 5,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "relâche"
      ]
    },
    "douane": {
      "headword": "douane",
      "meaning": "customs",
      "note": "Officials who inspect goods entering port.",
      "levels": [
        "simple",
        "advanced",
        "original"
      ],
      "lemma": "douane",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 5,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "douane"
      ]
    },
    "consigne": {
      "headword": "consigne",
      "meaning": "port authority office",
      "note": "Here, harbor administration.",
      "levels": [
        "original"
      ],
      "lemma": "consigne",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 4,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Useful learner vocabulary that returns later.",
      "forms": [
        "consigne"
      ]
    },
    "canebiere": {
      "headword": "Canebière",
      "meaning": "La Canebiere",
      "note": "A famous street in Marseille.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "canebière",
      "partOfSpeech": "PROPN",
      "chapterCount": 3,
      "bookCount": 3,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Useful context here, but not an active vocabulary target.",
      "forms": [
        "canebière"
      ]
    },
    "dantes": {
      "headword": "Dantès",
      "meaning": "Edmond Dantès",
      "note": "The young sailor serving aboard the Pharaon.",
      "levels": [
        "original"
      ],
      "lemma": "dantès",
      "partOfSpeech": "PROPN",
      "chapterCount": 37,
      "bookCount": 763,
      "futureFrequency": 726,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "dantès"
      ]
    },
    "edmond": {
      "headword": "Edmond",
      "meaning": "Edmond Dantès",
      "note": "The young sailor at the center of the story.",
      "levels": [
        "original"
      ],
      "lemma": "edmond",
      "partOfSpeech": "PROPN",
      "chapterCount": 10,
      "bookCount": 246,
      "futureFrequency": 236,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "edmond"
      ]
    },
    "morrel": {
      "headword": "Morrel",
      "meaning": "Morrel",
      "note": "The shipowner who trusts Dantès.",
      "levels": [
        "original"
      ],
      "lemma": "morrel",
      "partOfSpeech": "PROPN",
      "chapterCount": 22,
      "bookCount": 310,
      "futureFrequency": 288,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "morrel"
      ]
    },
    "danglars": {
      "headword": "Danglars",
      "meaning": "Danglars",
      "note": "The ship's accountant, uneasy about Dantès.",
      "levels": [
        "original"
      ],
      "lemma": "danglars",
      "partOfSpeech": "PROPN",
      "chapterCount": 17,
      "bookCount": 304,
      "futureFrequency": 287,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "danglars"
      ]
    },
    "leclere": {
      "headword": "Leclère",
      "meaning": "Captain Leclère",
      "note": "The Pharaon's captain, whose death is reported in this chapter.",
      "levels": [
        "original"
      ],
      "lemma": "leclère",
      "partOfSpeech": "PROPN",
      "chapterCount": 10,
      "bookCount": 18,
      "futureFrequency": 8,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "leclère"
      ]
    },
    "marseille": {
      "headword": "Marseille",
      "meaning": "Marseille",
      "note": "The French port where the Pharaon returns.",
      "levels": [
        "original"
      ],
      "lemma": "marseille",
      "partOfSpeech": "PROPN",
      "chapterCount": 5,
      "bookCount": 92,
      "futureFrequency": 87,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "marseille"
      ]
    },
    "capitaine": {
      "headword": "capitaine",
      "meaning": "captain",
      "note": "The commander of a ship.",
      "levels": [
        "simple",
        "original"
      ],
      "lemma": "capitaine",
      "partOfSpeech": "NOUN",
      "chapterCount": 18,
      "bookCount": 87,
      "futureFrequency": 69,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "capitaine",
        "capitaines"
      ]
    },
    "equipage": {
      "headword": "équipage",
      "meaning": "crew",
      "note": "The people working on a ship.",
      "levels": [
        "simple",
        "advanced",
        "original"
      ],
      "lemma": "équipage",
      "partOfSpeech": "NOUN",
      "chapterCount": 3,
      "bookCount": 22,
      "futureFrequency": 19,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "équipage",
        "équipages"
      ]
    },
    "empereur": {
      "headword": "empereur",
      "meaning": "emperor",
      "note": "In this story, Napoleon.",
      "levels": [
        "original"
      ],
      "lemma": "empereur",
      "partOfSpeech": "NOUN",
      "chapterCount": 5,
      "bookCount": 36,
      "futureFrequency": 31,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "empereur"
      ]
    },
    "lettre": {
      "headword": "lettre",
      "meaning": "letter",
      "note": "Letters and messages drive several later plot turns.",
      "levels": [
        "original"
      ],
      "lemma": "lettre",
      "partOfSpeech": "NOUN",
      "chapterCount": 5,
      "bookCount": 147,
      "futureFrequency": 142,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "lettre",
        "lettres"
      ]
    },
    "esperance": {
      "headword": "espérance",
      "meaning": "hope",
      "note": "Here, Dantès's hope of becoming captain.",
      "levels": [
        "original"
      ],
      "lemma": "espérance",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 37,
      "futureFrequency": 36,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "espérance",
        "espérances"
      ]
    },
    "pavillon": {
      "headword": "pavillon",
      "meaning": "flag",
      "note": "The ship's flag is lowered to mark mourning.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "pavillon",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 12,
      "futureFrequency": 11,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "pavillon",
        "pavillons"
      ]
    },
    "douaniers": {
      "headword": "douaniers",
      "meaning": "customs officers",
      "note": "Officials checking the ship's cargo and papers.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "douanier",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 14,
      "futureFrequency": 13,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": true,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "douaniers",
        "douanier"
      ]
    },
    "besogne": {
      "headword": "besogne",
      "meaning": "work, task",
      "note": "A familiar word for work; here, part of a decision has been made.",
      "levels": [
        "original"
      ],
      "lemma": "besogne",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 19,
      "futureFrequency": 17,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "besogne"
      ]
    },
    "tristesse": {
      "headword": "tristesse",
      "meaning": "sadness",
      "note": "The mood on board after the captain's death.",
      "levels": [
        "original"
      ],
      "lemma": "tristesse",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 9,
      "futureFrequency": 8,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "tristesse"
      ]
    },
    "resolution": {
      "headword": "résolution",
      "meaning": "determination",
      "note": "Dantès's calm resolve in the face of danger.",
      "levels": [
        "original"
      ],
      "lemma": "résolution",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 23,
      "futureFrequency": 22,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "résolution",
        "résolutions"
      ]
    },
    "interlocuteur": {
      "headword": "interlocuteur",
      "meaning": "person being spoken to",
      "note": "The person in the conversation with Dantès.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "interlocuteur",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 9,
      "futureFrequency": 8,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "interlocuteur",
        "interlocuteurs"
      ]
    },
    "rames": {
      "headword": "rames",
      "meaning": "oars",
      "note": "The blades used to propel the small boat.",
      "levels": [
        "advanced",
        "original"
      ],
      "lemma": "rame",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 5,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Useful learner vocabulary that returns later.",
      "forms": [
        "rames"
      ]
    },
    "gree": {
      "headword": "gréé",
      "meaning": "rigged",
      "note": "Fitted with masts, ropes and sails.",
      "levels": [
        "original"
      ],
      "lemma": "gréer",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "gréé"
      ]
    },
    "arrime": {
      "headword": "arrimé",
      "meaning": "stowed, loaded",
      "note": "With its cargo packed and secured.",
      "levels": [
        "original"
      ],
      "lemma": "arrimer",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "arrimé"
      ]
    },
    "marin": {
      "headword": "marin",
      "meaning": "sailor",
      "note": "A person who works on a ship.",
      "levels": [
        "simple"
      ],
      "lemma": "marin",
      "partOfSpeech": "ADJ",
      "chapterCount": 7,
      "bookCount": 26,
      "futureFrequency": 19,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "marin",
        "marins"
      ]
    },
    "second": {
      "headword": "second",
      "meaning": "first mate",
      "note": "The officer just below the captain. This is Dantès's job on the Pharaon.",
      "levels": [
        "simple",
        "advanced"
      ],
      "lemma": "second",
      "partOfSpeech": "ADJ",
      "chapterCount": 5,
      "bookCount": 113,
      "futureFrequency": 108,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "second"
      ]
    },
    "pilote": {
      "headword": "pilote",
      "meaning": "harbour pilot",
      "note": "A local sailor who comes aboard to guide a ship into port.",
      "levels": [
        "simple"
      ],
      "lemma": "pilote",
      "partOfSpeech": "NOUN",
      "chapterCount": 6,
      "bookCount": 10,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "pilote"
      ]
    },
    "ancre": {
      "headword": "ancre",
      "meaning": "anchor",
      "note": "Jeter l'ancre: to drop anchor, to stop the ship.",
      "levels": [
        "simple"
      ],
      "lemma": "ancr",
      "partOfSpeech": "ADJ",
      "chapterCount": 2,
      "bookCount": 5,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "ancre"
      ]
    },
    "voile": {
      "headword": "voile",
      "meaning": "sail",
      "note": "La voile is a sail; le voile is a veil.",
      "levels": [
        "simple"
      ],
      "lemma": "voile",
      "partOfSpeech": "NOUN",
      "chapterCount": 3,
      "bookCount": 25,
      "futureFrequency": 22,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "voile",
        "voiles"
      ]
    },
    "marchandises": {
      "headword": "marchandises",
      "meaning": "goods, cargo",
      "note": "The things the ship carries to sell.",
      "levels": [
        "simple"
      ],
      "lemma": "marchandise",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 7,
      "futureFrequency": 6,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "marchandises",
        "marchandise"
      ]
    },
    "associe": {
      "headword": "associé",
      "meaning": "business partner",
      "note": "Morrel shares the company, so he cannot decide alone.",
      "levels": [
        "simple",
        "advanced"
      ],
      "lemma": "associé",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 3,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "associé"
      ]
    },
    "marechal": {
      "headword": "maréchal",
      "meaning": "marshal",
      "note": "A very high army officer. Bertrand is with Napoleon on the island of Elba.",
      "levels": [
        "simple",
        "advanced"
      ],
      "lemma": "maréchal",
      "partOfSpeech": "NOUN",
      "chapterCount": 4,
      "bookCount": 15,
      "futureFrequency": 11,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "maréchal"
      ]
    },
    "fievre": {
      "headword": "fièvre",
      "meaning": "fever",
      "note": "A high body temperature when you are ill.",
      "levels": [
        "simple"
      ],
      "lemma": "fièvre",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 12,
      "futureFrequency": 10,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "fièvre"
      ]
    },
    "malheur": {
      "headword": "malheur",
      "meaning": "misfortune, something very sad",
      "note": "The opposite of bonheur.",
      "levels": [
        "simple"
      ],
      "lemma": "malheur",
      "partOfSpeech": "NOUN",
      "chapterCount": 5,
      "bookCount": 57,
      "futureFrequency": 52,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "malheur"
      ]
    },
    "obeir": {
      "headword": "obéir",
      "meaning": "to obey",
      "note": "To do what someone tells you to do.",
      "levels": [
        "simple"
      ],
      "lemma": "obéir",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 21,
      "futureFrequency": 20,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "obéir",
        "obéit",
        "obéissent"
      ]
    },
    "fiancee": {
      "headword": "fiancée",
      "meaning": "fiancée",
      "note": "The woman he is going to marry.",
      "levels": [
        "simple"
      ],
      "lemma": "fiancée",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 25,
      "futureFrequency": 24,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "fiancée"
      ]
    },
    "drapeau": {
      "headword": "drapeau",
      "meaning": "flag",
      "note": "A lowered flag shows that someone has died.",
      "levels": [
        "simple"
      ],
      "lemma": "drapeau",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 1,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "drapeau"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "mechant": {
      "headword": "méchant",
      "meaning": "mean, nasty",
      "note": "The opposite of gentil.",
      "levels": [
        "simple"
      ],
      "lemma": "méchant",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 9,
      "futureFrequency": 9,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "méchant",
        "méchants",
        "méchante"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "guetteur": {
      "headword": "guetteur",
      "meaning": "lookout",
      "note": "The watchman who signals arriving ships.",
      "levels": [
        "advanced"
      ],
      "lemma": "guetteur",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "guetteur"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "chantiers": {
      "headword": "chantiers",
      "meaning": "shipyards",
      "note": "Un chantier naval is where ships are built.",
      "levels": [
        "advanced"
      ],
      "lemma": "chantier",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "chantiers",
        "chantier"
      ]
    },
    "detroit": {
      "headword": "détroit",
      "meaning": "strait",
      "note": "A narrow passage of sea between two pieces of land.",
      "levels": [
        "advanced"
      ],
      "lemma": "détroit",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "détroit"
      ]
    },
    "pressentir": {
      "headword": "pressentir",
      "meaning": "to sense in advance",
      "note": "To feel that something, usually bad, is about to happen.",
      "levels": [
        "advanced"
      ],
      "lemma": "pressentir",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "pressentir"
      ]
    },
    "connaisseurs": {
      "headword": "connaisseurs",
      "meaning": "experts",
      "note": "Here, people who know ships.",
      "levels": [
        "advanced"
      ],
      "lemma": "connaisseurs",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 1,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "connaisseurs"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "cordages": {
      "headword": "cordages",
      "meaning": "ropes, rigging",
      "note": "The ropes of a sailing ship.",
      "levels": [
        "advanced"
      ],
      "lemma": "cordages",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 1,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "cordages",
        "cordage"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "ramer": {
      "headword": "ramer",
      "meaning": "to row",
      "note": "Related to la rame, the oar.",
      "levels": [
        "advanced"
      ],
      "lemma": "ramer",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "ramer"
      ]
    },
    "au-large": {
      "headword": "au large",
      "meaning": "off (the coast of), out at sea",
      "note": "Au large de l'île: at sea, near the island.",
      "levels": [
        "advanced"
      ],
      "lemma": "au large",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "au large"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "a-bon-port": {
      "headword": "à bon port",
      "meaning": "safely to its destination",
      "note": "A fixed expression, here almost literal.",
      "levels": [
        "advanced"
      ],
      "lemma": "à bon port",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 3,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "à bon port"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "soulage": {
      "headword": "soulagé",
      "meaning": "relieved",
      "note": "Morrel worries about the cargo before the captain.",
      "levels": [
        "advanced"
      ],
      "lemma": "soulager",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "soulagé"
      ]
    },
    "man-uvre": {
      "headword": "manœuvre",
      "meaning": "manoeuvre, handling of the ship",
      "note": "The crew's coordinated work on sails and anchor.",
      "levels": [
        "advanced"
      ],
      "lemma": "manœuvre",
      "partOfSpeech": "ADP",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "manœuvre"
      ]
    },
    "funerailles": {
      "headword": "funérailles",
      "meaning": "funeral",
      "note": "Always plural. Here, a burial at sea.",
      "levels": [
        "advanced"
      ],
      "lemma": "funéraille",
      "partOfSpeech": "ADJ",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "funérailles"
      ]
    },
    "decemment": {
      "headword": "décemment",
      "meaning": "decently, properly",
      "note": "From décent.",
      "levels": [
        "advanced"
      ],
      "lemma": "décemment",
      "partOfSpeech": "ADV",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "décemment"
      ]
    },
    "veuve": {
      "headword": "veuve",
      "meaning": "widow",
      "note": "The masculine is veuf.",
      "levels": [
        "advanced"
      ],
      "lemma": "veuve",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 6,
      "futureFrequency": 5,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "veuve"
      ]
    },
    "epee": {
      "headword": "épée",
      "meaning": "sword",
      "note": "An officer's sword.",
      "levels": [
        "advanced"
      ],
      "lemma": "épée",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 7,
      "futureFrequency": 6,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "épée"
      ]
    },
    "avancement": {
      "headword": "avancement",
      "meaning": "promotion",
      "note": "Moving up in rank.",
      "levels": [
        "advanced"
      ],
      "lemma": "avancement",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "avancement"
      ]
    },
    "ceder": {
      "headword": "céder",
      "meaning": "to give up, to sell off",
      "note": "Dantès means the voyage's profit is worth more than 25,000 francs.",
      "levels": [
        "advanced"
      ],
      "lemma": "céder",
      "partOfSpeech": "VERB",
      "chapterCount": 1,
      "bookCount": 21,
      "futureFrequency": 20,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "céder"
      ]
    },
    "elan": {
      "headword": "élan",
      "meaning": "momentum",
      "note": "The ship keeps gliding with no sails set.",
      "levels": [
        "advanced"
      ],
      "lemma": "élan",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 3,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "élan"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "deuil": {
      "headword": "deuil",
      "meaning": "mourning",
      "note": "Mettre en deuil: to show the signs of mourning.",
      "levels": [
        "advanced"
      ],
      "lemma": "deuil",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 5,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "deuil"
      ]
    },
    "echelons": {
      "headword": "échelons",
      "meaning": "rungs",
      "note": "The steps fixed to the ship's side.",
      "levels": [
        "advanced"
      ],
      "lemma": "échelon",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "échelons"
      ]
    },
    "flanc": {
      "headword": "flanc",
      "meaning": "side",
      "note": "The side of the hull.",
      "levels": [
        "advanced"
      ],
      "lemma": "flanc",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 3,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "flanc"
      ]
    },
    "servile": {
      "headword": "servile",
      "meaning": "servile, fawning",
      "note": "Too eager to please those above him.",
      "levels": [
        "advanced"
      ],
      "lemma": "servile",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "servile"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "aversion": {
      "headword": "aversion",
      "meaning": "strong dislike",
      "note": "Sailors distrust the man who keeps the accounts.",
      "levels": [
        "advanced"
      ],
      "lemma": "aversion",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "aversion"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "haine": {
      "headword": "haine",
      "meaning": "hatred",
      "note": "The first sign of Danglars's feelings toward Dantès.",
      "levels": [
        "advanced"
      ],
      "lemma": "haine",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 25,
      "futureFrequency": 24,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "haine"
      ]
    },
    "degat": {
      "headword": "dégât",
      "meaning": "damage",
      "note": "Usually plural: des dégâts.",
      "levels": [
        "advanced"
      ],
      "lemma": "dégât",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 1,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "dégât"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "caprice": {
      "headword": "caprice",
      "meaning": "whim",
      "note": "A decision made for no good reason.",
      "levels": [
        "advanced"
      ],
      "lemma": "capric",
      "partOfSpeech": "ADJ",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "caprice"
      ]
    },
    "mouillez": {
      "headword": "mouillez",
      "meaning": "drop anchor!",
      "note": "From mouiller, which in sailing means to anchor.",
      "levels": [
        "advanced"
      ],
      "lemma": "mouillez",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "mouillez"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "bruyamment": {
      "headword": "bruyamment",
      "meaning": "noisily",
      "note": "From bruyant.",
      "levels": [
        "advanced"
      ],
      "lemma": "bruyamment",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 3,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "bruyamment"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "en-berne": {
      "headword": "en berne",
      "meaning": "at half-mast",
      "note": "Flags are lowered as a sign of mourning.",
      "levels": [
        "advanced"
      ],
      "lemma": "en berne",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "en berne"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "ile-d-elbe": {
      "headword": "île d'Elbe",
      "meaning": "Elba",
      "note": "The island where Napoleon is in exile in February 1815.",
      "levels": [
        "advanced"
      ],
      "lemma": "île d'elbe",
      "partOfSpeech": "X",
      "chapterCount": 4,
      "bookCount": 34,
      "futureFrequency": 30,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "île d'Elbe",
        "île d’Elbe"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "garnison": {
      "headword": "garnison",
      "meaning": "garrison",
      "note": "En garnison: stationed in a town.",
      "levels": [
        "advanced"
      ],
      "lemma": "garnison",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 4,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "garnison"
      ]
    },
    "compromettre": {
      "headword": "compromettre",
      "meaning": "to compromise, to put at risk",
      "note": "Contact with Napoleon is politically dangerous in royalist France.",
      "levels": [
        "advanced"
      ],
      "lemma": "compromettre",
      "partOfSpeech": "VERB",
      "chapterCount": 2,
      "bookCount": 13,
      "futureFrequency": 11,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "compromettre",
        "compromette"
      ]
    },
    "escale": {
      "headword": "escale",
      "meaning": "stopover, port of call",
      "note": "A stop during a voyage.",
      "levels": [
        "advanced"
      ],
      "lemma": "escale",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "escale"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "porto-ferrajo": {
      "headword": "Porto-Ferrajo",
      "meaning": "the main port of Elba",
      "note": "Today Portoferraio.",
      "levels": [
        "advanced"
      ],
      "lemma": "porto-ferrajo",
      "partOfSpeech": "X",
      "chapterCount": 3,
      "bookCount": 11,
      "futureFrequency": 8,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "forms": [
        "Porto-Ferrajo"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "entrouverte": {
      "headword": "entrouverte",
      "meaning": "ajar, half open",
      "note": "From entrouvrir.",
      "levels": [
        "advanced"
      ],
      "lemma": "entrouverte",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "entrouverte"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "reconnaissant": {
      "headword": "reconnaissant",
      "meaning": "grateful",
      "note": "Être reconnaissant de quelque chose.",
      "levels": [
        "advanced"
      ],
      "lemma": "reconnaître",
      "partOfSpeech": "VERB",
      "chapterCount": 2,
      "bookCount": 101,
      "futureFrequency": 99,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A1",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "reconnaissant"
      ]
    },
    "catalans": {
      "headword": "Catalans",
      "meaning": "a village near Marseille",
      "note": "Where Mercédès lives.",
      "levels": [
        "advanced"
      ],
      "lemma": "catalan",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 28,
      "futureFrequency": 27,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Recurs later in this volume, so learning it should pay off.",
      "forms": [
        "Catalans"
      ]
    },
    "mercedes": {
      "headword": "Mercédès",
      "meaning": "Mercédès",
      "note": "Dantès's fiancée.",
      "levels": [
        "advanced"
      ],
      "lemma": "mercédès",
      "partOfSpeech": "PROPN",
      "chapterCount": 3,
      "bookCount": 141,
      "futureFrequency": 138,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": true,
      "classification": "ignore_or_gloss",
      "reason": "Name or place; understand its role without memorizing it as vocabulary.",
      "forms": [
        "Mercédès"
      ]
    },
    "peste": {
      "headword": "peste",
      "meaning": "my word!",
      "note": "A mild, old-fashioned exclamation.",
      "levels": [
        "advanced"
      ],
      "lemma": "peste",
      "partOfSpeech": "ADV",
      "chapterCount": 1,
      "bookCount": 3,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "peste"
      ]
    },
    "a-plaindre": {
      "headword": "à plaindre",
      "meaning": "to be pitied",
      "note": "Vous n'êtes pas à plaindre: you are doing well for yourself.",
      "levels": [
        "advanced"
      ],
      "lemma": "à plaindre",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "à plaindre"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "maitresse": {
      "headword": "maîtresse",
      "meaning": "sweetheart; mistress",
      "note": "Morrel uses the older, lighter sense; Dantès corrects him.",
      "levels": [
        "advanced"
      ],
      "lemma": "maître",
      "partOfSpeech": "ADJ",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "maîtresse"
      ]
    },
    "paie": {
      "headword": "paie",
      "meaning": "pay, wages",
      "note": "Also spelled paye.",
      "levels": [
        "advanced"
      ],
      "lemma": "paie",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 2,
      "futureFrequency": 2,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "paie"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "en-voudrais": {
      "headword": "en voudrais",
      "meaning": "would hold it against",
      "note": "From en vouloir à quelqu'un: to be angry with someone.",
      "levels": [
        "advanced"
      ],
      "lemma": "en voudrais",
      "partOfSpeech": "X",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "en voudrais"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "conge": {
      "headword": "congé",
      "meaning": "leave; permission to go",
      "note": "Both senses appear in this chapter.",
      "levels": [
        "advanced"
      ],
      "lemma": "congé",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 5,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "congé"
      ]
    },
    "querelle": {
      "headword": "querelle",
      "meaning": "quarrel",
      "note": "Régler une querelle: here, to settle it by fighting.",
      "levels": [
        "advanced"
      ],
      "lemma": "querelle",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 6,
      "futureFrequency": 4,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "teach",
      "reason": "Useful learner vocabulary that returns later.",
      "forms": [
        "querelle"
      ]
    },
    "betise": {
      "headword": "bêtise",
      "meaning": "foolish thing",
      "note": "Avoir la bêtise de: to be foolish enough to.",
      "levels": [
        "advanced"
      ],
      "lemma": "bêtise",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "A2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "bêtise"
      ]
    },
    "charbons-ardents": {
      "headword": "charbons ardents",
      "meaning": "hot coals",
      "note": "Être sur des charbons ardents: to be on tenterhooks.",
      "levels": [
        "advanced"
      ],
      "lemma": "charbons ardents",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "charbons ardents"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "canot": {
      "headword": "canot",
      "meaning": "small boat, dinghy",
      "note": "The shipowner's boat.",
      "levels": [
        "advanced"
      ],
      "lemma": "canot",
      "partOfSpeech": "NOUN",
      "chapterCount": 2,
      "bookCount": 5,
      "futureFrequency": 3,
      "generalFrenchFrequencyBand": "mid",
      "cefrLevel": "C2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "Low recurrence; offer context without making it a learning target.",
      "forms": [
        "canot"
      ]
    },
    "embarcation": {
      "headword": "embarcation",
      "meaning": "small craft",
      "note": "A general word for a small boat.",
      "levels": [
        "advanced"
      ],
      "lemma": "embarcation",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 1,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": "rare",
      "cefrLevel": "C2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "simplify",
      "reason": "Difficult and seldom seen later in this volume.",
      "forms": [
        "embarcation"
      ]
    },
    "encombrent": {
      "headword": "encombrent",
      "meaning": "clutter, crowd",
      "note": "From encombrer.",
      "levels": [
        "advanced"
      ],
      "lemma": "encombrent",
      "partOfSpeech": "X",
      "chapterCount": 0,
      "bookCount": 0,
      "futureFrequency": 0,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "forms": [
        "encombrent",
        "encombre"
      ],
      "classification": "ignore_or_gloss",
      "reason": "Curated contextual help."
    },
    "dalles": {
      "headword": "dalles",
      "meaning": "paving stones",
      "note": "The stone slabs of the quay.",
      "levels": [
        "advanced"
      ],
      "lemma": "dalle",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 16,
      "futureFrequency": 15,
      "generalFrenchFrequencyBand": "common",
      "cefrLevel": "B2",
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "keep",
      "reason": "Common learner vocabulary; leave the original word in place.",
      "forms": [
        "dalles"
      ]
    },
    "bariolee": {
      "headword": "bariolée",
      "meaning": "brightly multicoloured",
      "note": "A crowd in clothes of many colours.",
      "levels": [
        "advanced"
      ],
      "lemma": "bariolée",
      "partOfSpeech": "NOUN",
      "chapterCount": 1,
      "bookCount": 2,
      "futureFrequency": 1,
      "generalFrenchFrequencyBand": null,
      "cefrLevel": null,
      "archaicOrLiterary": false,
      "properNoun": false,
      "classification": "ignore_or_gloss",
      "reason": "No reliable lexical match; review the tag before making it a teaching target.",
      "forms": [
        "bariolée"
      ]
    }
  }
};
