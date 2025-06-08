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
                    }
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