export const configSheet = async () => {
    // Pass module sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        statClock: 3,
        minMod: -3,
        maxMod: 4,
        statToggle: {
            label: "Scar",
            modifier: "-1"
        },
        rollResults: {
            miss: {
                start: null,
                end: 6,
                label: "Miss"
            },
            weakHit: {
                start: 7,
                end: 9,
                label: "Weak Hit"
            },
            strongHit: {
                start: 10,
                end: null,
                label: "Strong Hit"
            }
        },
        actorTypes: {
            character: {
                stats: {
                    blood: {
                        label: "Blood",
                        value: 0,
                    },
                    heart: {
                        label: "Heart",
                        value: 0,
                    },
                    mind: {
                        label: "Mind",
                        value: 0,
                    },
                    spirit: {
                        label: "Spirit",
                        value: 0,
                    },
                    mortalis: {
                        label: "Mortalis",
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    },
                    night: {
                        label: "Night",
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    },
                    power: {
                        label: "Power",
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    },
                    wild: {
                        label: "Wild",
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    }
                },
                attributes: {
                    harm: {
                        label: "Harm",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "Armor",
                                value: false
                            },
                            1: {
                                label: "Faint",
                                value: false
                            },
                            2: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    }
                                },
                                label: "Serious"
                            },
                            3: {
                                values: {
                                    0: {
                                        value: false
                                    },
                                    1: {
                                        value: false
                                    }
                                },
                                label: "Critical"
                            }
                        }
                    },
                    advancement: {
                        label: "Advancement",
                        description: "When you've marked all four, clear & advance",
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "Mortalis",
                                value: false
                            },
                            1: {
                                label: "Night",
                                value: false
                            },
                            2: {
                                label: "Power",
                                value: false
                            },
                            3: {
                                label: "Wild",
                                value: false
                            }
                        }
                    },
                    corruption: {
                        label: "Corruption",
                        description: "Corruption trigger: ",
                        customLabel: false,
                        userLabel: false,
                        playbook: true,
                        limited: false,
                        position: "top",
                        type: "Clock",
                        value: 0,
                        max: 5
                    },
                    trauma: {
                        label: "Trauma",
                        description: "When you witness a scene of violence or victimization and do nothing, mark trauma and corruption.",
                        customLabel: false,
                        userLabel: false,
                        playbook: "spectre",
                        limited: false,
                        position: "left",
                        type: "Clock",
                        value: 0,
                        max: 5
                    },
                    web: {
                        label: "Your Web",
                        description: "Those trapped in your web:",
                        customLabel: false,
                        userLabel: false,
                        playbook: "vamp",
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    letItOut: {
                        label: "Let it out Abilities",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: true,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    debts: {
                        label: "Debts",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: true,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    advancements: {
                        label: "Advancements",
                        description: "Available at the beginning of play:",
                        customLabel: false,
                        userLabel: false,
                        playbook: true,
                        limited: false,
                        position: null,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "+1 Status (max+1)",
                                value: false
                            },
                            1: {
                                label: "+1 Status (max+1)",
                                value: false
                            },
                            2: {
                                label: "+1 Status (max+1)",
                                value: false
                            },
                            3: {
                                label: "a new Aware move",
                                value: false
                            },
                            4: {
                                label: "a new Aware move",
                                value: false
                            },
                            5: {
                                label: "a move from another archetype",
                                value: false
                            },
                            6: {
                                label: "a move from another archetype",
                                value: false
                            },
                            7: {
                                label: "open a new mortal relationship",
                                value: false
                            }
                        }
                    },
                    expertAdvancements: {
                        label: "Expert advancements",
                        description: "After five advances, you may select:",
                        customLabel: false,
                        userLabel: false,
                        playbook: true,
                        limited: false,
                        position: null,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "+1 any Circle (max+3)",
                                value: false
                            },
                            1: {
                                label: "+1 any Circle (max+3)",
                                value: false
                            },
                            2: {
                                label: "Mortalis Status: 2",
                                value: false
                            },
                            3: {
                                label: "erase a scar",
                                value: false
                            },
                            4: {
                                label: "change your Circle",
                                value: false
                            },
                            5: {
                                label: "advance 3 basic moves",
                                value: false
                            },
                            6: {
                                label: "advance 3 basic moves",
                                value: false
                            },
                            7: {
                                label: "change to a new archetype",
                                value: false
                            }
                        }
                    },
                    corruptionAdvances: {
                        label: "Corruption advances",
                        description: "Corruption represents your character slipping toward the worst parts of their nature. As your corruption mounts, your powers only grow...",
                        customLabel: false,
                        userLabel: false,
                        playbook: true,
                        limited: false,
                        position: null,
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "take +1 to any stat (max+3)",
                                value: false
                            },
                            1: {
                                label: "take +1 to any stat (max+3)",
                                value: false
                            },
                            2: {
                                label: "take a new corruption move",
                                value: false
                            },
                            3: {
                                label: "take a new corruption move",
                                value: false
                            },
                            4: {
                                label: "take a new corruption move from another archetype or your own",
                                value: false
                            },
                            5: {
                                label: "retire your character; they may return as a Threat",
                                value: false
                            }
                        }
                    },
                    TheAware: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.description"),
                        playbook: "the-aware",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheAWARE.MortalRelationships.options.5"),
                                value: false,
                            },
                        },
                    },
                    TheFaePowers: {
                        label: "FAERIE POWERS",
                        description: "Choose three:",
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "Nature’s Caress: Your touch heals 2-harm, starting with critical harm; wounds close, bones knit back together, etc. You cannot use this power on yourself.",
                                value: false,
                            },
                            1: {
                                label: "Wither: You can imbue your touch with the power to kill (3-harm intimate ap). The effect is instantly understood by the target as an attack and leaves behind a nasty mark or scar at the point of contact.",
                                value: false,
                            },
                            2: {
                                label: "Glamours: You create illusions to fool the senses. The effects don’t last long, but they are compelling. You cannot disguise or conceal yourself or your actions with these tricks.",
                                value: false,
                            },
                            3: {
                                label: "Shape Change: You can change your shape into that of a small animal—a bird, a mouse, a snake, a fish, etc.—for a scene. Up to three people you designate can still understand your speech, but everyone else perceives you to be barking, chirping, etc.",
                                value: false,
                            },
                            4: {
                                label: "Bedlam: You can touch a vulnerable target to place them in a specific emotional state (your choice) for the scene. Mark corruption to have that emotion directed toward a target of your choosing.",
                                value: false,
                            },
                        },
                    },
                    TheFaeCourtCourtIs: {
                        label: "YOUR COURT",
                        description: "You belong to a faerie court, presided over by a monarch to whom you have sworn loyalty. Your monarch holds 2 Debts over you; tell the MC what favors they granted you to earn such holdings. Your court is...",
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "baroque and formal",
                                value: false,
                            },
                            1: {
                                label: "savage and unruly",
                                value: false,
                            },
                            2: {
                                label: "aloof and cold",
                                value: false,
                            },
                            3: {
                                label: "mysterious and exotic",
                                value: false,
                            },
                        },
                    },
                    TheFaeCourtMonarchsStanding: {
                        label: "",
                        description: "Your monarch’s standing is represented by…",
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "a crown, magically imbued with your court’s royal authority",
                                value: false,
                            },
                            1: {
                                label: "a scepter, forged from the elements of your court",
                                value: false,
                            },
                            2: {
                                label: "a magical aura, unconcealable by even faerie magics",
                                value: false,
                            },
                            3: {
                                label: "a seat of power, capable of summoning your entire court",
                                value: false,
                            },
                        },
                    },
                    TheFaeCourtRival: {
                        label: "",
                        description: "Your rival is…",
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "a jealous sibling; you owe them a Debt for their loyalty",
                                value: false,
                            },
                            1: {
                                label: "a former lover; you owe them a Debt for their kindness",
                                value: false,
                            },
                            2: {
                                label: "an old mentor; you owe them a Debt for their tutelage",
                                value: false,
                            },
                            3: {
                                label: "a contemptuous peer; you owe them a Debt for their patience",
                                value: false,
                            },
                        },
                    },
                    TheHunterSocietyPrey: {
                        label: "YOUR SOCIETY",
                        description: "You belong to a society of hunters, an affiliation of fellow mortals who stalk dangerous prey to protect the mortal world from the supernatural. Tell your MC to stat up your society as a Size-2, Strength-2 faction within Mortalis. WHAT IS YOUR PREY?",
                        playbook: "the-hunter",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "vampires who feed on the weak and coerced",
                                value: false,
                            },
                            1: {
                                label: "demons who corrupt the good and the just",
                                value: false,
                            },
                            2: {
                                label: "angels who subjugate the will of the faithful",
                                value: false,
                            },
                            3: {
                                label: "ghosts who plague the lives of the innocent",
                                value: false,
                            },
                            4: {
                                label: "wizards who abuse their power and authority",
                                value: false,
                            },
                        },
                    },
                    TheHunterSocietySacrifice: {
                        label: "",
                        description: "WHAT DID YOU SACRIFICE TO JOIN?",
                        playbook: "the-hunter",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "my soul, forever tainted by magic ritual",
                                value: false,
                            },
                            1: {
                                label: "my family, forever excised from my life",
                                value: false,
                            },
                            2: {
                                label: "my childhood, forever lost to my training",
                                value: false,
                            },
                            3: {
                                label: "my body, forever scarred by ceremony",
                                value: false,
                            },
                        },
                    },
                    TheHunterSocietyGather: {
                        label: "",
                        description: "WHERE DOES YOUR SOCIETY GATHER?",
                        playbook: "the-hunter",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "a swanky, expensive hotel",
                                value: false,
                            },
                            1: {
                                label: "a dive bar or gambling den",
                                value: false,
                            },
                            2: {
                                label: "a union or veterans hall",
                                value: false,
                            },
                            3: {
                                label: "hallowed religious ground",
                                value: false,
                            },
                        },
                    },
                    TheImpEstablishmentServices: {
                        label: "YOUR ESTABLISHMENT",
                        description: "You once served a powerful demon, but you seized upon a loophole in your contracted fealty and won your freedom. Now you cater to supernatural clientele from all four Circles, securing your place in this world...for now. By default, your establishment has a permanent location, a small but loyal staff, and many regular customers. Choose two services you offer:",
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "Transporting and selling otherworldly creatures",
                                value: false,
                            },
                            1: {
                                label: "Appraising and auctioning magical relics and artifacts",
                                value: false,
                            },
                            2: {
                                label: "Creating forgeries, disguises, and stolen identities",
                                value: false,
                            },
                            3: {
                                label: "Providing news, gossip, and rumor to the city at large",
                                value: false,
                            },
                            4: {
                                label: "Operating a gathering place; name the relevant Circle",
                                value: false,
                            },
                        },
                    },
                    TheImpEstablishmentInvestments: {
                        label: "",
                        description: "Choose two investments you’ve made over the years:",
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "A skilled bodyguard dedicated solely to your security",
                                value: false,
                            },
                            1: {
                                label: "An expansive, expert staff appropriate to your services",
                                value: false,
                            },
                            2: {
                                label: "A secure venue, impenetrable by intruders and thieves",
                                value: false,
                            },
                            3: {
                                label: "A magical dead zone secured by wards and ritual",
                                value: false,
                            },
                            4: {
                                label: "A Status-3 regular in another Circle; take three Debts on them",
                                value: false,
                            },
                        },
                    },
                    TheImpEstablishmentPlague: {
                        label: "",
                        description: "Choose two problems that plague your business:",
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "A dangerous competitor edging in on your market",
                                value: false,
                            },
                            1: {
                                label: "A hard-to-move acquisition attracting unwanted attention",
                                value: false,
                            },
                            2: {
                                label: "A besmirched reputation complicating any new deals",
                                value: false,
                            },
                            3: {
                                label: "A demonic ex-liege seeking your immediate return",
                                value: false,
                            },
                            4: {
                                label: "A severe state of disrepair endangering your staff",
                                value: false,
                            },
                        },
                    },
                    TheImpSchemesText: {
                        label: "YOUR SCHEMES",
                        description: "Schemes are risky deals and shady cons designed to expand your business. When you generate a scheme, choose a primary Circle, one of your services, and two complications—the MC will tell you what opportunity you’ve seized upon. When you accomplish a scheme, select two boons and a payout; the MC will detail how they arrive. Generate a scheme whenever a boon or a move tells you to generate a new scheme. COMPLICATIONS: • you promised someone involved something you don’t yet have • you require an unreliable or untrustworthy co-conspirator • you must fool or deceive a powerful and dangerous NPC • you need to steal something from a secure location • you need to wait for a predetermined time or event • you have attracted the attention of dangerous opposition. BOONS: • attract new business; generate a new scheme • pay down your debts; cancel a Debt you owe • throw your weight around; take a Debt on an NPC • grow your reputation; mark a Circle affected by the deal.",
                        playbook: "the-imp",
                        position: "playbook",
                        type: "Text",
                    },
                    TheImpSchemePayouts1: {
                        label: "PAYOUTS",
                        description: "Available at the start of play:",
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "+1 any Circle (max+3)",
                                value: false,
                            },
                            1: {
                                label: "hire Fiendish Underlings",
                                value: false,
                            },
                            2: {
                                label: "acquire an arsenal",
                                value: false,
                            },
                            3: {
                                label: "secure a new investment",
                                value: false,
                            },
                            4: {
                                label: "secure a new investment",
                                value: false,
                            },
                            5: {
                                label: "resolve a problem",
                                value: false,
                            },
                        },
                    },
                    TheImpSchemePayouts2: {
                        label: "",
                        description: "After 4+ payouts:",
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "+1 any Circle (max+3)",
                                value: false,
                            },
                            1: {
                                label: "+1 Status (max+2)",
                                value: false,
                            },
                            2: {
                                label: "acquire a legendary weapon",
                                value: false,
                            },
                            3: {
                                label: "acquire a sanctum",
                                value: false,
                            },
                            4: {
                                label: "get 2 new let it out abilities",
                                value: false,
                            },
                            5: {
                                label: "retire your character to safety",
                                value: false,
                            },
                        },
                    },
                    TheOracleBenefactor: {
                        label: "YOUR BENEFACTOR",
                        description: "You have a benefactor, a powerful NPC whose fate is intertwined with your own; you came into their service as a result of your prophetic visions, but they now demand more and more from you and your powers. Name their Circle—Mortalis, Night, Power, or Wild—and choose the prophecy that binds you together, two strengths, and two flaws: (Ask the MC what life your benefactor has provided for you after you make your choices. Their continued largesse depends on how well you serve their interests.)",
                        value: "<p><b>NAME:</b> </p><p><b>CIRCLE:</b> </p>",
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "LongText",
                    },
                    TheOracleBenefactorProphecy: {
                        label: "YOUR PROPHECY (Choose one):",
                        description: "",
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "they alone can guide you to the mystical answers you seek",
                                value: false,
                            },
                            1: {
                                label: "they alone can protect you from a dark fate you have foreseen",
                                value: false,
                            },
                            2: {
                                label: "they alone can destroy a uniquely evil foe within their own Circle",
                                value: false,
                            },
                            3: {
                                label: "they alone must play a critical role in the war against a coming darkness",
                                value: false,
                            },
                        },
                    },
                    TheOracleBenefactorStrengths: {
                        label: "",
                        description: "STRENGTHS (Choose two):",
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "they are a Status-3 member of their Circle",
                                value: false,
                            },
                            1: {
                                label: "they speak truthfully and honor their word",
                                value: false,
                            },
                            2: {
                                label: "they wield significant supernatural power",
                                value: false,
                            },
                            3: {
                                label: "their minions are disciplined and loyal",
                                value: false,
                            },
                        },
                    },
                    TheOracleBenefactorFlaws: {
                        label: "",
                        description: "FLAWS (Choose two):",
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "they are terrifyingly violent and cruel",
                                value: false,
                            },
                            1: {
                                label: "they have defenses against your sight",
                                value: false,
                            },
                            2: {
                                label: "they are at war with powerful enemies",
                                value: false,
                            },
                            3: {
                                label: "they are madly in love with you",
                                value: false,
                            },
                        },
                    },
                    TheSpectreTrauma: {
                        label: "TRAUMA",
                        description: "Your sense of self has been shattered by your death, leaving you traumatized. You begin each session with at least 2-trauma marked, but can clear it—and any additional trauma you take—via trauma moves. If you ever fill your trauma track, the MC may call for you to make a trauma move at any time, but you may always choose which trauma move you make in the moment.  The first time you take harm in a scene, mark trauma; when you fill up on harm, your corpus is scattered. Mark trauma to reform in a few days at one of your anchors, or mark 3-trauma to reform immediately at an anchor of the MC’s choice. If you cannot mark trauma while destroyed, the MC decides how/when you reform.",
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "Clock",
                        value: 0,
                        max: 5
                    },
                    TheSpectreAnchors: {
                        label: "ANCHORS (Choose 4):",
                        description: "You have several anchors in the city—important places, people, or objects that keep you from moving on. You might have an opportunity to put an anchor to rest, but anchors can also be ruined or destroyed. (When one of your anchors is put in danger, you know; mark trauma and take a +1 ongoing to all moves until you see it to safety. When you resolve an anchor, clear your trauma track and erase a corruption advance; when an anchor is destroyed or ruined, fill your trauma track and take a corruption advance.)",
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "a family member or inheritor, unaware of your existence",
                                value: false,
                            },
                            1: {
                                label: "a witness to your death, bound to you by chance or fate",
                                value: false,
                            },
                            2: {
                                label: "a friendly household pet, constant companion in your unlife",
                                value: false,
                            },
                            3: {
                                label: "a beloved possession of your youth, passed to a new owner",
                                value: false,
                            },
                            4: {
                                label: "a marker of your success in life, now claimed by another",
                                value: false,
                            },
                            5: {
                                label: "an item related to your death, grimly marking your violent end",
                                value: false,
                            },
                            6: {
                                label: "a location of personal importance, a reminder of a past love",
                                value: false,
                            },
                            7: {
                                label: "a space you used to live or work, abandoned by the world",
                                value: false,
                            },
                        },
                    },
                    TheSpectrePassingOn: {
                        label: "PASSING ON",
                        description: "When your last anchor is resolved or destroyed, you pass on; pick one blessing or haunting you bestow upon the city for each one of your anchors that was resolved or destroyed, respectively. If all four of your anchors are destroyed, you do not pass on, but are instead swallowed by oblivion and inflict all three hauntings. BLESSINGS:",
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "you inspire an NPC to forgive someone who once wronged them, ending a long-standing conflict",
                                value: false,
                            },
                            1: {
                                label: "you cleanse or restore a cherished place once thought by all to be ruined or beyond repair",
                                value: false,
                            },
                            2: {
                                label: "you heal or restore someone you once injured or wronged",
                                value: false,
                            },
                            3: {
                                label: "you reveal to an NPC the truth of your death and passing",
                                value: false,
                            },
                        },
                    },
                    TheSpectrePassingOn2: {
                        label: "",
                        description: "HAUNTINGS:",
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "you leave behind a psychic reflection of your fear and anger, a terrible thing that hunts mortals in the night",
                                value: false,
                            },
                            1: {
                                label: "you imbue an object with nightmarish power; the MC chooses who ends up with the cursed item",
                                value: false,
                            },
                            2: {
                                label: "you drive an NPC close to you into a downward spiral",
                                value: false,
                            },
                        },
                    },
                    TheSwornOathMasters: {
                        label: "YOUR MASTERS (choose one):",
                        description: "You’ve sworn an oath to serve an influential faction of Power, an organization that relies on you to protect its members, punish its enemies, and defend its holdings. Tell your MC to stat up your masters as a Size-3, Strength-3 faction within Power. Ask them what you know about the organization’s structure, culture, and assets.",
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "an abbey of prescient oracles",
                                value: false,
                            },
                            1: {
                                label: "a council of haughty wizards",
                                value: false,
                            },
                            2: {
                                label: "an order of secret immortals",
                                value: false,
                            },
                            3: {
                                label: "an academy of religious scholars",
                                value: false,
                            },
                            4: {
                                label: "a covenant of earthbound deities",
                                value: false,
                            },
                        },
                    },
                    TheSwornOathCharged: {
                        label: "YOU ARE CHARGED WITH (choose two):",
                        description: "",
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "protecting and policing their members",
                                value: false,
                            },
                            1: {
                                label: "recovering lost artifacts and tomes",
                                value: false,
                            },
                            2: {
                                label: "investigating threats and problems",
                                value: false,
                            },
                            3: {
                                label: "destroying those who would thwart them",
                                value: false,
                            },
                            4: {
                                label: "negotiating with their allies and vassals",
                                value: false,
                            },
                        },
                    },
                    TheSwornVows: {
                        label: "YOUR VOWS, You must… (choose 5):",
                        description: "When you break one of your vows, mark corruption. When you take a corruption advance, cross out one of your vows—it no longer binds you. If you strike out every vow, your oath is broken—change playbooks immediately.",
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "...never trespass on another’s property",
                                value: false,
                            },
                            1: {
                                label: "...never strike the first blow",
                                value: false,
                            },
                            2: {
                                label: "...never lie about your identity or purpose",
                                value: false,
                            },
                            3: {
                                label: "...never reveal your faction’s secrets",
                                value: false,
                            },
                            4: {
                                label: "...always avoid collateral damage",
                                value: false,
                            },
                            5: {
                                label: "...always protect members of Power from harm",
                                value: false,
                            },

                            6: {
                                label: "...always thwart the enemies of your masters",
                                value: false,
                            },
                            7: {
                                label: "...always seize that which your masters desire",
                                value: false,
                            },
                        },
                    },
                    TheSwornOathWeapon: {
                        label: "YOUR LEGENDARY WEAPON (Choose one):",
                        description: "Your masters have given you a weapon (3-harm mythic anchored) to wield, a legendary artifact of an age long lost. So long as you bear this legendary armament, advance the named move. When you wield the weapon in the service of your masters, you can roll with Mind instead of Spirit when you keep your cool. But your weapon—like your oath—is bound to your loyalty. If your oath is broken, the weapon will be lost to you, even betraying you to ensure it exits your service.",
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "a sword wielded by rightful kings (figure someone out)",
                                value: false,
                            },
                            1: {
                                label: "a knife cut from demonic steel (mislead, distract or trick)",
                                value: false,
                            },
                            2: {
                                label: "a spear stolen from heaven itself (let it out)",
                                value: false,
                            },
                            3: {
                                label: "an axe forged in the blood of gods (turn to violence)",
                                value: false,
                            },
                            4: {
                                label: "a staff imbued with stealthy sorcery (escape a situation)",
                                value: false,
                            },
                            5: {
                                label: "a hammer blessed by otherworldly magic (keep your cool)",
                                value: false,
                            },
                        },
                    },
                    TheTaintedDarkPatron: {
                        label: "YOUR DARK PATRON (Choose 2):",
                        description: "Your soul has fallen into the hands of a dark patron, a powerful demon whose reputation precedes them, but whose true name is known to few. They have given you terms of employment, access to terrible power, and terrifying insight into their true nature.",
                        playbook: "the-tainted",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "they seduce all who come into contact with them with pleasantries, gifts, and vices",
                                value: false,
                            },
                            1: {
                                label: "they govern their sprawling organization through strict and severe rules and punishments",
                                value: false,
                            },
                            2: {
                                label: "they require deference from their minions to their strange obsession with a mortal pastime",
                                value: false,
                            },
                            3: {
                                label: "they manipulate their friends, allies, and enemies alike into conflicts that serve their secret designs",
                                value: false,
                            },
                            4: {
                                label: "they have seeded eyes and ears across the city, always alert to any sign of betrayal or profitable opportunity",
                                value: false,
                            },
                            5: {
                                label: "they employ only dedicated and loyal minons who are all too happy to report on your activities",
                                value: false,
                            },
                            6: {
                                label: "they are slow to anger, but their commitment to their wrath is unstoppable once truly provoked",
                                value: false,
                            },
                        },
                    },
                    TheTaintedYourDemonForm: {
                        label: "YOUR DEMON FORM",
                        description: "Since your patron claimed your soul, you have a new look: a demon form. Pick as many as apply from the lists below:",
                        playbook: "the-tainted",
                        position: "playbook",
                        type: "LongText",
                        value: "<ul><li><b>Head:</b> bone, concave, crown, flames, halo, horns, spikes</li><li><b>Eyes:</b> absent, animal, empty, glowing, smoky, un-blinking</li><li><b>Limbs:</b> claws, heavy, hoofed, many, severed, twisted</li><li><b>Wings:</b> blood, feathers, insects, leather, metal, paper, none</li><li><b>Skin:</b> chitinous, marked, misty, sticky, stretched, translucent</li></ul>",
                    },
                    TheTaintedDemonicJobs: {
                        label: "DEMONIC JOBS",
                        description: "Your dark patron keeps you on Earth for a reason; they could always have decided to drag you to hell. Choose two jobs you regularly do for them from the list below:",
                        playbook: "the-tainted",
                        position: "playbook",
                        type: "LongText",
                        value: "<p><il>Collecting souls, tracking down rogue demons, delivering threats and messages, cleaning up gruesome messes, guarding someone or something, destroying your patron’s enemies, brokering demonic contracts, hiding and securing demonic contraband, operating a demonic establishment, policing your patron’s minions</li></p>",
                    },
                    TheVampWeb: {
                        label: "YOUR WEB",
                        description: "",
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "LongText",
                        value: "<p>When someone comes to you to ask for a favor, seek advice, bargain for info, or threaten your interests, they enter your web and owe you a Debt...even if you don’t offer them anything in return. People leave your web only when they no longer owe you a Debt. When someone is in your web, you gain the following:</p><ul><li>Take +1 ongoing to lend them a hand or get in their way</li><li>Add the following option whenever you figure them out: “what is your character’s true hunger?”</li><li>Spend a Debt (before rolling) when persuading them to advance persuade for the roll in addition to adding +3 to your total</li></ul><p>When time passes—or at the start of the game—choose someone in your web and learn a secret about them that they’d rather keep buried. Mark corruption to ask a follow-up question about the answer; their player must answer you honestly.</p>",
                    },
                    TheVampHarbor: {
                        label: "YOUR HARBOR",
                        description: "You have a safe place—a haven—secure from outside dangers, located within a larger harbor. Your haven is a reinforced bolthole with emergency rations and an escape vector; when someone willingly enters your haven, add them to your web. Your harbor is a public-facing staple of the community (Choose one):",
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "a flashy nightclub",
                                value: false,
                            },
                            1: {
                                label: "an oversized restaurant",
                                value: false,
                            },
                            2: {
                                label: "an outdated library",
                                value: false,
                            },
                            3: {
                                label: "a public transport station",
                                value: false,
                            },
                            4: {
                                label: "a restored theater",
                                value: false,
                            },
                            5: {
                                label: "a religious hospital",
                                value: false,
                            },
                            6: {
                                label: "a historic hotel",
                                value: false,
                            },
                            7: {
                                label: "an open-air market",
                                value: false,
                            },
                        },
                    },
                    TheVampHarborAdvantages: {
                        label: "",
                        description: "CHOOSE 2 ADVANTAGES:",
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "your harbor is popular with ordinary mortals, giving you easy access to unsuspecting prey",
                                value: false,
                            },
                            1: {
                                label: "your harbor hosts a way to quickly dispose of bodies, attracting little to no suspicion",
                                value: false,
                            },
                            2: {
                                label: "your harbor is directly controlled by an allied Status-3 NPC from Night, granting you some limited protections",
                                value: false,
                            },
                            3: {
                                label: "your harbor allows you a space to entertain and entrance admirers, bringing in a steady stream of gifts and favors",
                                value: false,
                            },
                            4: {
                                label: "your harbor is staffed by ghouls loyal to you, bringing you news of anything they hear or see",
                                value: false,
                            },
                        },
                    },
                    TheVampHarborDangers: {
                        label: "",
                        description: "CHOOSE 2 DANGERS:",
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "your harbor lies within the territory of a Status-3 vampire lord; they often demand tribute and Debts",
                                value: false,
                            },
                            1: {
                                label: "your harbor is home to a number of ghostly entities; they range from mildly annoying to deeply dangerous",
                                value: false,
                            },
                            2: {
                                label: "your harbor has attracted the attention of a dedicated group of mortal hunters; they may soon make their move",
                                value: false,
                            },
                            3: {
                                label: "your harbor is constantly busy, day and night; those who frequent it make strict security impossible",
                                value: false,
                            },
                            4: {
                                label: "your harbor is closely tied to several mortals you care for; they have been thrust into the supernatural world by your unlife",
                                value: false,
                            },
                        },
                    },
                    TheVeteranWorkshop: {
                        label: "YOUR WORKSHOP",
                        description: "",
                        playbook: "the-veteran",
                        position: "playbook",
                        type: "LongText",
                        value: "<p>You have a workshop that includes a large space for your tools and/or supplies. When you go into your workshop to work on something, the MC tells you, “Sure, no problem, but…” and then 1 to 4 of the following.</p><ul><li>It’s going to take you hours/days/weeks/months of work or recovery time</li><li>First you’ll have to summon/build/construct ________</li><li>You’ll require the services of ________ to complete it</li><li>You require a rare and expensive ingredient or material</li><li>It will only work for a short time, and may be unreliable</li><li>It’s going to mean exposing anyone nearby to serious fallout</li><li>Your workshop lacks _______; add this and you’ll be able to complete it</li><li>It will require a part of yourself to complete</li><li>You must journey to ________ in order to complete it</li></ul><p>The MC can combine any set of requirements or offer two sets of costs to the same task. Once the requirements are completed, the work is completed. The MC will stat it up, reveal some info, or whatever is called for now that you’ve finished.</p><p>Items created in your workshop are safe from the MC. They can’t be destroyed or taken without your permission, even if you sell or give them away to another character. When you create something specifically for another character, mark their Circle when the project is complete.</p><p>Choose and underline 3 resources your workshop includes: <em>automotive hoist and tools, a darkroom, a regulated growing environment, two or three skilled assistants, a junkyard of raw materials, machining tools, transmitters and receivers, a testing ground, deadly booby traps, a library of old books, a scattering of ancient relics, a mystical focus, magical wards, a medical station, an operating room, high-tech electronics and computers, an advanced surveillance system, a forge, a science lab, a portal to another dimension</em></p>",
                    },
                    TheWizardSanctum: {
                        label: "YOUR SANCTUM",
                        description: "",
                        playbook: "the-wizard",
                        position: "playbook",
                        type: "LongText",
                        value: "<p>Choose and underline 4 resources of your sanctum:</p> <ul> <li>an extremely knowledgeable assistant</li> <li>a testing ground</li> <li>magical booby traps</li> <li>a library of old tomes</li> <li>a scattering of ancient relics</li> <li>a mystical prison</li> <li>magical wards</li> <li>a portal to another dimension</li> <li>a focus circle</li> <li>an apothecary</li> </ul> <p>Choose and underline 2 downsides of your Sanctum:</p> <ul> <li>it's cursed by a previous owner</li> <li>it attracts otherworldly attention</li> <li>it contains many volatile substances</li> <li>its location is known by many</li> <li>it always lacks a key piece or ingredient</li> <li>it's tough for you to access</li> <li>it contains secrets unfamiliar even to you</li> </ul> <p>When you go into your sanctum to work on something, the MC will tell you, \"Sure, no problem, but…\" and then 1 to 4 of the following:</p> <ul> <li>It's going to take you hours/days/weeks/months of work or recovery time</li> <li>First you'll have to summon/build/construct ________</li> <li>You'll require the services of ________ to complete it</li> <li>You require a rare and expensive ingredient or material</li> <li>It will only work for a short time, and may be unreliable</li> <li>It's going to mean exposing anyone nearby to serious fallout</li> <li>Your sanctum lacks ________; add this and you'll be able to complete it</li> <li>It will require a part of yourself or comparable sacrifice to complete</li> <li>You must journey to________ in order to complete it</li> </ul> <p>The MC can combine any set of requirements or offer two sets of costs to the same task. Once the requirements are completed, the work is completed. The MC will stat it up, reveal some info, or whatever is called for now that you've finished.</p>",
                    },
                    TheWolfTerritory1: {
                        label: "YOUR TERRITORY",
                        description: "You’ve claimed an area of the city as your own. By default, your territory covers a city block or two and has the trouble: +crime. CHOOSE 2:",
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "Your territory spans several city blocks you’ve owned for years (add blessing: +influence)",
                                value: false,
                            },
                            1: {
                                label: "People in your territory work hard to keep the streets safe (remove +crime)",
                                value: false,
                            },
                            2: {
                                label: "You are widely accepted as this place’s protector (add blessing: +supported)",
                                value: false,
                            },
                            3: {
                                label: "Your territory includes open grounds for you to roam and hunt (add blessing: +sanctuary)",
                                value: false,
                            },
                            4: {
                                label: "You’ve made a deal with someone, or something, to protect your territory when you’re not around (add blessing: +guardian)",
                                value: false,
                            },
                        },
                    },
                    TheWolfTerritory2: {
                        label: "",
                        description: "CHOOSE 2:",
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "Your territory owes fealty to someone more powerful than you (add trouble: +obligations)",
                                value: false,
                            },
                            1: {
                                label: "A Status-3 NPC wants your territory and is working to get it (add trouble: +encroachment)",
                                value: false,
                            },
                            2: {
                                label: "Mortals in the area are actively trying to revitalize local businesses and infrastructure (add trouble: +upheaval)",
                                value: false,
                            },
                            3: {
                                label: "Your territory is plagued by a mystical or supernatural presence (add trouble: +haunted)",
                                value: false,
                            },
                            4: {
                                label: "You have offered protection within your territory to someone, and now their problems are yours (add trouble: +fealty)",
                                value: false,
                            },
                        },
                    },

                    TheWolfTransformationQualities: {
                        label: "THE TRANSFORMATION",
                        description: "By default, you can change into your wolf form—at will—in the sight of the moon: you gain natural weaponry (2-harm), 1-armor, and all of the qualities and weaknesses you choose below. CHOOSE 3 QUALITIES:",
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "You are massive: gain armor+1 and harm +1",
                                value: false,
                            },
                            1: {
                                label: "You are savage: your harm is armor piercing (ap) and messy",
                                value: false,
                            },
                            2: {
                                label: "You are versatile: take +1 ongoing to letting it out",
                                value: false,
                            },  
                            3: {
                                label: "You are swift: take +1 ongoing to escaping",
                                value: false,
                            },
                            4: {
                                label: "You are cunning: take +1 ongoing to keeping your cool",
                                value: false,
                            },
                            5: {
                                label: "You are steadfast: you fight like a small group against groups",
                                value: false,
                            },
                        },
                    },
                    TheWolfTransformationWeaknesses: {
                        label: "",
                        description: "CHOOSE 3 WEAKNESSES:",
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: "Silver weapons ignore your armor and inflict harm+1",
                                value: false,
                            },
                            1: {
                                label: "Sometimes you lose control while transformed",
                                value: false,
                            },
                            2: {
                                label: "Sometimes you transform when you are stressed or angry",
                                value: false,
                            },
                            3: {
                                label: "The transformation is brief; you shift back at the end of a scene",
                                value: false,
                            },
                            4: {
                                label: "The transformation is violent and painful; suffer 1-harm (ap)",
                                value: false,
                            },
                            5: {
                                label: "The transformation draws the attention of supernatural creatures",
                                value: false,
                            },
                        },
                    },
                },
                details: {
                    lookOne: {
                        label: "Look",
                        value: "",
                        playbook: true
                    },
                    lookTwo: {
                        label: "Look Two",
                        value: "",
                        playbook: true
                    },
                    lookThree: {
                        label: "Look Three",
                        value: "",
                        playbook: true
                    },
                    demeanor: {
                        label: "Demeanor",
                        value: "",
                        playbook: true
                    },
                    questionOne: {
                        label: "Questions",
                        value: "",
                        playbook: true
                    },
                    questionTwo: {
                        label: "Question Two",
                        value: "",
                        playbook: true
                    },
                    questionThree: {
                        label: "Question Three",
                        value: "",
                        playbook: true
                    },
                    questionFour: {
                        label: "Question Four",
                        value: "",
                        playbook: true
                    },
                    questionFive: {
                        label: "Question Five",
                        value: "",
                        playbook: true
                    },
                    notes: {
                        label: "Notes",
                        value: "",
                    }
                },
                moveTypes: {
                    basic: {
                        label: "Basic Moves",
                        playbook: false,
                        creation: true
                    },
                    playbook: {
                        label: "Playbook Moves",
                        playbook: true,
                        creation: false
                    },
                    debt: {
                        label: "Debt Moves",
                        playbook: false,
                        creation: true
                    },
                    circle: {
                        label: "Circle Moves",
                        playbook: false,
                        creation: true
                    },
                    city: {
                        label: "City Moves",
                        playbook: false,
                        creation: false
                    },
                    hub: {
                        label: "Hub Moves",
                        playbook: false,
                        creation: false
                    },
                    corruption: {
                        label: "Corruption Moves",
                        playbook: true,
                        creation: false
                    },
                    spells: {
                        label: "Spells",
                        playbook: true,
                        creation: false
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: "Gear"
                    },
                    debt: {
                        label: "Debt"
                    }
                }
            },
            faction: {
                label: "Faction",
                stats: {
                    size: {
                        label: "Size",
                        value: 0
                    },
                    strength: {
                        label: "Strength",
                        value: 0
                    }
                },
                attributes: {
                    circles: {
                        label: "Circle(s)",
                        description: "",
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "Mortalis",
                                value: false
                            },
                            1: {
                                label: "Night",
                                value: false
                            },
                            2: {
                                label: "Power",
                                value: false
                            },
                            3: {
                                label: "Wild",
                                value: false
                            }
                        }
                    },
                    recruitment: {
                        label: "Recruitment",
                        description: "Filling this track adds +1 to Size. If something reduces the Size of a faction, the track clears.",
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "Clock",
                        value: 0,
                        max: 3
                    },
                    resources: {
                        label: "Resources",
                        description: "Filling this track adds +1 Strength and gains a new asset. If something reduces the Strength of a faction, the resource track clears.",
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "Clock",
                        value: 0,
                        max: 3
                    },
                    stance: {
                        label: "Stance",
                        description: "",
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "Striving",
                                value: false
                            },
                            1: {
                                label: "Maintaining",
                                value: false
                            },
                            2: {
                                label: "Collapsing",
                                value: false
                            }
                        }
                    },
                    goals: {
                        label: "Goals",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    leaders: {
                        label: "Leaders",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    assets: {
                        label: "Assets",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    }
                },
                details: {
                    notes: {
                        label: "Notes",
                        value: "",
                        type: "LongText"
                    }
                },
                moveTypes: {
                    faction: {
                        label: "Faction Moves"
                    }
                },
                equipmentTypes: {
                    assets: {
                        label: "Assets"
                    }
                },
                baseType: "character"
            },
            npc: {
                attributes: {
                    harm: {
                        label: "Harm Capacity",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "Resource",
                        value: 0,
                        max: 1
                    },
                    status: {
                        label: "Status",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "Clock",
                        value: 0,
                        max: 3
                    },
                    circle: {
                        label: "Circle",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "ListMany",
                        condition: false,
                        sort: false,
                        options: {
                            0: {
                                label: "Mortalis",
                                value: false
                            },
                            1: {
                                label: "Night",
                                value: false
                            },
                            2: {
                                label: "Power",
                                value: false
                            },
                            3: {
                                label: "Wild",
                                value: false
                            }
                        }
                    },
                    faction: {
                        label: "Faction",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "top",
                        type: "Text",
                        value: ""
                    },
                    // side
                    drives: {
                        label: "Drives",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    resistances: {
                        label: "Resistances",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    vulnerabilities: {
                        label: "Vulnerabilities",
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        playbook: null,
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    }
                },
                details: {
                    look: {
                        label: "Look",
                        value: ""
                    },
                    demeanor: {
                        label: "Demeanor",
                        value: ""
                    },
                    information: {
                        label: "Information",
                        value: "Role: <br>Trait: <br>Quirk: <br>Presenting: "
                    },
                    debts: {
                        label: "Debts",
                        value: ""
                    },
                    notes: {
                        label: "Notes",
                        value: ""
                    }
                },
                moveTypes: {
                    npc: {
                        label: "NPC Moves"
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: "Gear"
                    },
                    debt: {
                        label: "Debt"
                    }
                }
            }
        }
    }
};

/**
 * Settings for the PbtA system
 */
export function pbtaSettings() {
    game.settings.set('pbta', 'hideForward', false);
    game.settings.set('pbta', 'hideOngoing', false);
    game.settings.set('pbta', 'hideUses', true);
    game.settings.set('pbta', 'hideRollFormula', true);
    game.settings.set('pbta', 'hideRollMode', true);
    game.settings.set('pbta', 'advForward', false);
    if (game.settings.settings.has('pbta.hideAdvancement')) {
      game.settings.set('pbta', 'hideAdvancement', false);
    }
};

/**
 * Tag configuration for the PbtA system
 */
export const tagConfig = {
      // Tags available to any actor and item
      actor: {
        // Tags available to all actors
        all: '',
        // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
        character: '',
        npc: ''
    },
    item: {
        // Tags available to all actors
        all: '',
        // Tags available to a specific item type (e.g. "equipment", "move")
        equipment:
            '[{"value":"US2E.Tags.equipment.strong.value", "editable":false, "description":"US2E.Tags.equipment.strong.description"}, ' +
            '{"value":"US2E.Tags.equipment.weak.value", "editable":false, "description":"US2E.Tags.equipment.weak.description"}, ' +
            '{"value":"US2E.Tags.equipment.glows.value", "editable":false, "description":"US2E.Tags.equipment.glows.description"}]',
    },
};  