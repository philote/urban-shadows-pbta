export const configSheet = async () => {
    // Pass module sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        statClock: 3,
        minMod: -3,
        maxMod: 4,
        statToggle: {
            label: game.i18n.localize("US2E.Config.statToggle.label"),
            modifier: "-1"
        },
        rollResults: {
            miss: {
                start: null,
                end: 6,
                label: game.i18n.localize("US2E.Config.rollResults.miss.label")
            },
            weakHit: {
                start: 7,
                end: 9,
                label: game.i18n.localize("US2E.Config.rollResults.weakHit.label")
            },
            strongHit: {
                start: 10,
                end: null,
                label: game.i18n.localize("US2E.Config.rollResults.strongHit.label")
            }
        },
        actorTypes: {
            character: {
                stats: {
                    blood: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.blood"),
                        value: 0,
                    },
                    heart: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.heart"),
                        value: 0,
                    },
                    mind: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.mind"),
                        value: 0,
                    },
                    spirit: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.spirit"),
                        value: 0,
                    },
                    mortalis: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.mortalis"),
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    },
                    night: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.night"),
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    },
                    power: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.power"),
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    },
                    wild: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.wild"),
                        value: 0,
                        steps: {
                            value: 0,
                            max: 3
                        }
                    }
                },
                attributes: {
                    harm: {
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.harm.label"),
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.harm.options.0.label"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.harm.options.1.label"),
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.harm.options.2.label")
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.harm.options.3.label")
                            }
                        }
                    },
                    advancement: {
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancement.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.advancement.description"),
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancement.options.0.label"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancement.options.1.label"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancement.options.2.label"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancement.options.3.label"),
                                value: false
                            }
                        }
                    },
                    corruption: {
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruption.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.corruption.description"),
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
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.trauma.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.trauma.description"),
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
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.web.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.web.description"),
                        customLabel: false,
                        userLabel: false,
                        playbook: "vamp",
                        limited: false,
                        position: "left",
                        type: "LongText",
                        value: ""
                    },
                    letItOut: {
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.letItOut.label"),
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
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.debts.label"),
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
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.description"),
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.0.label"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.1.label"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.2.label"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.3.label"),
                                value: false
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.4.label"),
                                value: false
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.5.label"),
                                value: false
                            },
                            6: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.6.label"),
                                value: false
                            },
                            7: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.advancements.options.7.label"),
                                value: false
                            }
                        }
                    },
                    expertAdvancements: {
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.description"),
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.0.label"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.1.label"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.2.label"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.3.label"),
                                value: false
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.4.label"),
                                value: false
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.5.label"),
                                value: false
                            },
                            6: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.6.label"),
                                value: false
                            },
                            7: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.expertAdvancements.options.7.label"),
                                value: false
                            }
                        }
                    },
                    corruptionAdvances: {
                        label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.description"),
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
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.options.0.label"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.options.1.label"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.options.2.label"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.options.3.label"),
                                value: false
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.options.4.label"),
                                value: false
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Attributes.corruptionAdvances.options.5.label"),
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
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.description"),
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Powers.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheFaeCourtCourtIs: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Court.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Court.description"),
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Court.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Court.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Court.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Court.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheFaeCourtMonarchsStanding: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.MonarchsStanding.description"),
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.MonarchsStanding.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.MonarchsStanding.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.MonarchsStanding.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.MonarchsStanding.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheFaeCourtRival: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Rival.description"),
                        playbook: "the-fae",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Rival.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Rival.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Rival.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.Rival.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheHunterSocietyPrey: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.description"),
                        playbook: "the-hunter",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Society.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheHunterSocietySacrifice: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Sacrifice.description"),
                        playbook: "the-hunter",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Sacrifice.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Sacrifice.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Sacrifice.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Sacrifice.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheHunterSocietyGather: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Gather.description"),
                        playbook: "the-hunter",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Gather.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Gather.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Gather.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheHunter.Gather.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheImpEstablishmentServices: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.description"),
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Establishment.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheImpEstablishmentInvestments: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Investments.description"),
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Investments.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Investments.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Investments.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Investments.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Investments.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheImpEstablishmentPlague: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Plague.description"),
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Plague.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Plague.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Plague.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Plague.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.Plague.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheImpSchemesText: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemesText.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemesText.description"),
                        playbook: "the-imp",
                        position: "playbook",
                        type: "Text",
                    },
                    TheImpSchemePayouts1: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.description"),
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts1.options.5"),
                                value: false,
                            },
                        },
                    },
                    TheImpSchemePayouts2: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.description"),
                        playbook: "the-imp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheImp.SchemePayouts2.options.5"),
                                value: false,
                            },
                        },
                    },
                    TheOracleBenefactor: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Benefactor.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Benefactor.description"),
                        value: "<p><b>NAME:</b> </p><p><b>CIRCLE:</b> </p>",
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "LongText",
                    },
                    TheOracleBenefactorProphecy: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Prophecy.label"),
                        description: "",
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Prophecy.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Prophecy.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Prophecy.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Prophecy.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheOracleBenefactorStrengths: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Strengths.description"),
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Strengths.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Strengths.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Strengths.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Strengths.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheOracleBenefactorFlaws: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Flaws.description"),
                        playbook: "the-oracle",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Flaws.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Flaws.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Flaws.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheOracle.Flaws.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheSpectreTrauma: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Trauma.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Trauma.description"),
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "Clock",
                        value: 0,
                        max: 5
                    },
                    TheSpectreAnchors: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.description"),
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.5"),
                                value: false,
                            },
                            6: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.6"),
                                value: false,
                            },
                            7: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.Anchors.options.7"),
                                value: false,
                            },
                        },
                    },
                    TheSpectrePassingOn: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn.description"),
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn.options.3"),
                                value: false,
                            },
                        },
                    },
                    TheSpectrePassingOn2: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn2.description"),
                        playbook: "the-spectre",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn2.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn2.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSpectre.PassingOn2.options.2"),
                                value: false,
                            },
                        },
                    },
                    TheSwornOathMasters: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.description"),
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathMasters.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheSwornOathCharged: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathCharged.label"),
                        description: "",
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathCharged.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathCharged.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathCharged.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathCharged.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathCharged.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheSwornVows: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.description"),
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.5"),
                                value: false,
                            },

                            6: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.6"),
                                value: false,
                            },
                            7: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.Vows.options.7"),
                                value: false,
                            },
                        },
                    },
                    TheSwornOathWeapon: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.description"),
                        playbook: "the-sworn",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheSworn.OathWeapon.options.5"),
                                value: false,
                            },
                        },
                    },
                    TheTaintedDarkPatron: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.description"),
                        playbook: "the-tainted",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.5"),
                                value: false,
                            },
                            6: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DarkPatron.options.6"),
                                value: false,
                            },
                        },
                    },
                    TheTaintedYourDemonForm: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.YourDemonForm.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.YourDemonForm.description"),
                        playbook: "the-tainted",
                        position: "playbook",
                        type: "LongText",
                        value: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.YourDemonForm.value"),
                    },
                    TheTaintedDemonicJobs: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DemonicJobs.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DemonicJobs.description"),
                        playbook: "the-tainted",
                        position: "playbook",
                        type: "LongText",
                        value: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheTainted.DemonicJobs.value"),
                    },
                    TheVampWeb: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Web.label"),
                        description: "",
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "LongText",
                        value: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Web.value"),
                    },
                    TheVampHarbor: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.description"),
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.5"),
                                value: false,
                            },
                            6: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.6"),
                                value: false,
                            },
                            7: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.Harbor.options.7"),
                                value: false,
                            },
                        },
                    },
                    TheVampHarborAdvantages: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborAdvantages.description"),
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborAdvantages.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborAdvantages.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborAdvantages.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborAdvantages.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborAdvantages.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheVampHarborDangers: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborDangers.description"),
                        playbook: "the-vamp",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborDangers.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborDangers.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborDangers.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborDangers.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVamp.HarborDangers.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheVeteranWorkshop: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVeteran.Workshop.label"),
                        description: "",
                        playbook: "the-veteran",
                        position: "playbook",
                        type: "LongText",
                        value: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheVeteran.Workshop.value"),
                    },
                    TheWizardSanctum: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWizard.Sanctum.label"),
                        description: "",
                        playbook: "the-wizard",
                        position: "playbook",
                        type: "LongText",
                        value: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWizard.Sanctum.value"),
                    },
                    TheWolfTerritory1: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.description"),
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory1.options.4"),
                                value: false,
                            },
                        },
                    },
                    TheWolfTerritory2: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory2.description"),
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory2.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory2.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory2.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory2.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.Territory2.options.4"),
                                value: false,
                            },
                        },
                    },

                    TheWolfTransformationQualities: {
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.description"),
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.options.2"),
                                value: false,
                            },  
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationQualities.options.5"),
                                value: false,
                            },
                        },
                    },
                    TheWolfTransformationWeaknesses: {
                        label: "",
                        description: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.description"),
                        playbook: "the-wolf",
                        position: "playbook",
                        type: "ListMany",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.options.4"),
                                value: false,
                            },
                            5: {
                                label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheWolf.TransformationWeaknesses.options.5"),
                                value: false,
                            },
                        },
                    },
                },
                details: {
                    lookOne: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.lookLabel"),
                        value: "",
                        playbook: true
                    },
                    lookTwo: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.lookLabel"),
                        value: "",
                        playbook: true
                    },
                    lookThree: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.lookLabel"),
                        value: "",
                        playbook: true
                    },
                    demeanor: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.demeanorLabel"),
                        value: "",
                        playbook: true
                    },
                    questionOne: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.questionsLabel"),
                        value: "",
                        playbook: true
                    },
                    questionTwo: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.questionsLabel"),
                        value: "",
                        playbook: true
                    },
                    questionThree: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.questionsLabel"),
                        value: "",
                        playbook: true
                    },
                    questionFour: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.questionsLabel"),
                        value: "",
                        playbook: true
                    },
                    questionFive: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.questionsLabel"),
                        value: "",
                        playbook: true
                    },
                    notes: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.notesLabel"),
                        value: "",
                    }
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.basicLabel"),
                        playbook: false,
                        creation: true
                    },
                    playbook: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.playbookLabel"),
                        playbook: true,
                        creation: false
                    },
                    debt: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.debtMovesLabel"),
                        playbook: false,
                        creation: true
                    },
                    circle: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.circleMovesLabel"),
                        playbook: false,
                        creation: true
                    },
                    city: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.cityMovesLabel"),
                        playbook: false,
                        creation: false
                    },
                    hub: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.hubMovesLabel"),
                        playbook: false,
                        creation: false
                    },
                    corruption: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.corruptionMovesLabel"),
                        playbook: true,
                        creation: false
                    },
                    spells: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.spellsLabel"),
                        playbook: true,
                        creation: false
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: game.i18n.localize("US2E.CharacterSheets.equipmentTypes.gearLabel")
                    }
                }
            },
            faction: {
                label: game.i18n.localize("US2E.FactionSheets.label"),
                stats: {
                    size: {
                        label: game.i18n.localize("US2E.FactionSheets.stats.sizeLabel"),
                        value: 0
                    },
                    strength: {
                        label: game.i18n.localize("US2E.FactionSheets.stats.strengthLabel"),
                        value: 0
                    }
                },
                attributes: {
                    circles: {
                        label: game.i18n.localize("US2E.FactionSheets.attributes.circlesLabel"),
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
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.mortalisLabel"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.nightLabel"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.powerLabel"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.wildLabel"),
                                value: false
                            }
                        }
                    },
                    recruitment: {
                        label: game.i18n.localize("US2E.FactionSheets.attributes.recruitmentLabel"),
                        description: game.i18n.localize("US2E.FactionSheets.attributes.recruitmentDescription"),
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
                        label: game.i18n.localize("US2E.FactionSheets.attributes.resourcesLabel"),
                        description: game.i18n.localize("US2E.FactionSheets.attributes.resourcesDescription"),
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
                        label: game.i18n.localize("US2E.FactionSheets.attributes.stanceLabel"),
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
                                label: game.i18n.localize("US2E.FactionSheets.attributes.stanceOptions.strivingLabel"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.FactionSheets.attributes.stanceOptions.maintainingLabel"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.FactionSheets.attributes.stanceOptions.collapsingLabel"),
                                value: false
                            }
                        }
                    },
                    goals: {
                        label: game.i18n.localize("US2E.FactionSheets.attributes.goalsLabel"),
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
                        label: game.i18n.localize("US2E.FactionSheets.attributes.leadersLabel"),
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
                        label: game.i18n.localize("US2E.FactionSheets.attributes.assetsLabel"),
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
                        label: game.i18n.localize("US2E.CharacterSheets.details.notesLabel"),
                        value: "",
                        type: "LongText"
                    }
                },
                moveTypes: {
                    faction: {
                        label: game.i18n.localize("US2E.FactionSheets.moveTypes.factionMovesLabel")
                    }
                },
                equipmentTypes: {
                    assets: {
                        label: game.i18n.localize("US2E.FactionSheets.equipmentTypes.assetsLabel")
                    }
                },
                baseType: "character"
            },
            'urban-shadows-pbta.city-hub': {
                label: game.i18n.localize("US2E.CityHubSheets.label"),
                baseType: "character",
                attributes: {
                    residents: {
                        label: game.i18n.localize("US2E.CityHubSheets.attributes.residentsLabel"),
                        description: game.i18n.localize("US2E.CityHubSheets.attributes.residentsDescription"),
                        position: "connections",
                        type: "LongText",
                    },
                    relationships: {
                        label: game.i18n.localize("US2E.CityHubSheets.attributes.relationshipsLabel"),
                        description: game.i18n.localize("US2E.CityHubSheets.attributes.relationshipsDescription"),
                        position: "connections",
                        type: "LongText",
                    },
                    tables: {
                        label: game.i18n.localize("US2E.CityHubSheets.attributes.tablesLabel"),
                        description: game.i18n.localize("US2E.CityHubSheets.attributes.tablesDescription"),
                        position: "tables",
                        type: "LongText",
                    },
                    description: {
                        label: game.i18n.localize("US2E.CityHubSheets.details.descriptionLabel"),
                        value: "",
                        type: "LongText",
                        position: "top",
                    },
                    dominantCircle: {
                        label: game.i18n.localize("US2E.CityHubSheets.attributes.dominantCircleLabel"),
                        description: game.i18n.localize("US2E.CityHubSheets.attributes.dominantCircleDescription"),
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
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.mortalisLabel"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.nightLabel"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.powerLabel"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.wildLabel"),
                                value: false
                            }
                        }
                    },
                },
                details: {
                    notes: {
                        label: game.i18n.localize("US2E.CityHubSheets.details.notesLabel"),
                        value: "",
                        type: "LongText"
                    }
                },
                moveTypes: {
                    hub: {
                        label: game.i18n.localize("US2E.CityHubSheets.moveTypes.hubMovesLabel")
                    }
                },
                equipmentTypes: {
                    assets: {
                        label: game.i18n.localize("US2E.CityHubSheets.equipmentTypes.assetsLabel")
                    }
                },
            },
            npc: {
                attributes: {
                    harm: {
                        label: game.i18n.localize("US2E.NPCSheets.attributes.harmCapacityLabel"),
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
                        label: game.i18n.localize("US2E.NPCSheets.attributes.statusLabel"),
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
                        label: game.i18n.localize("US2E.NPCSheets.attributes.circleLabel"),
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
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.mortalisLabel"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.nightLabel"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.powerLabel"),
                                value: false
                            },
                            3: {
                                label: game.i18n.localize("US2E.NPCSheets.circleOptions.wildLabel"),
                                value: false
                            }
                        }
                    },
                    faction: {
                        label: game.i18n.localize("US2E.NPCSheets.attributes.factionLabel"),
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
                        label: game.i18n.localize("US2E.NPCSheets.attributes.drivesLabel"),
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
                        label: game.i18n.localize("US2E.NPCSheets.attributes.resistancesLabel"),
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
                        label: game.i18n.localize("US2E.NPCSheets.attributes.vulnerabilitiesLabel"),
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
                        label: game.i18n.localize("US2E.NPCSheets.details.lookLabel"),
                        value: ""
                    },
                    demeanor: {
                        label: game.i18n.localize("US2E.NPCSheets.details.demeanorLabel"),
                        value: ""
                    },
                    information: {
                        label: game.i18n.localize("US2E.NPCSheets.details.informationLabel"),
                        value: game.i18n.localize("US2E.NPCSheets.details.informationValue")
                    },
                    debts: {
                        label: game.i18n.localize("US2E.NPCSheets.details.debtsLabel"),
                        value: ""
                    },
                    notes: {
                        label: game.i18n.localize("US2E.NPCSheets.details.notesLabel"),
                        value: ""
                    }
                },
                moveTypes: {
                    npc: {
                        label: game.i18n.localize("US2E.NPCSheets.moveTypes.npcMovesLabel")
                    }
                },
                equipmentTypes: {
                    gear: {
                        label: game.i18n.localize("US2E.NPCSheets.equipmentTypes.gearLabel")
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
            '[{"value":"US2E.Tags.equipment.hand.value", "editable":false, "description":"US2E.Tags.equipment.hand.description"}, ' +
            '{"value":"US2E.Tags.equipment.close.value", "editable":false, "description":"US2E.Tags.equipment.close.description"}, ' +
            '{"value":"US2E.Tags.equipment.near.value", "editable":false, "description":"US2E.Tags.equipment.near.description"}, ' +
            '{"value":"US2E.Tags.equipment.far.value", "editable":false, "description":"US2E.Tags.equipment.far.description"}, ' +
            '{"value":"US2E.Tags.equipment.anchored.value", "editable":false, "description":"US2E.Tags.equipment.anchored.description"}, ' +
            '{"value":"US2E.Tags.equipment.armorPiercing.value", "editable":false, "description":"US2E.Tags.equipment.armorPiercing.description"}, ' +
            '{"value":"US2E.Tags.equipment.area.value", "editable":false, "description":"US2E.Tags.equipment.area.description"}, ' +
            '{"value":"US2E.Tags.equipment.autofire.value", "editable":false, "description":"US2E.Tags.equipment.autofire.description"}, ' +
            '{"value":"US2E.Tags.equipment.booby-trapped.value", "editable":false, "description":"US2E.Tags.equipment.booby-trapped.description"}, ' +
            '{"value":"US2E.Tags.equipment.cherished.value", "editable":false, "description":"US2E.Tags.equipment.cherished.description"}, ' +
            '{"value":"US2E.Tags.equipment.concealable.value", "editable":false, "description":"US2E.Tags.equipment.concealable.description"}, ' +
            '{"value":"US2E.Tags.equipment.exhausting.value", "editable":false, "description":"US2E.Tags.equipment.exhausting.description"}, ' +
            '{"value":"US2E.Tags.equipment.fire.value", "editable":false, "description":"US2E.Tags.equipment.fire.description"}, ' +
            '{"value":"US2E.Tags.equipment.fragile.value", "editable":false, "description":"US2E.Tags.equipment.fragile.description"}, ' +
            '{"value":"US2E.Tags.equipment.loud.value", "editable":false, "description":"US2E.Tags.equipment.loud.description"}, ' +
            '{"value":"US2E.Tags.equipment.messy.value", "editable":false, "description":"US2E.Tags.equipment.messy.description"}, ' +
            '{"value":"US2E.Tags.equipment.mythic.value", "editable":false, "description":"US2E.Tags.equipment.mythic.description"}, ' +
            '{"value":"US2E.Tags.equipment.reload.value", "editable":false, "description":"US2E.Tags.equipment.reload.description"}, ' +
            '{"value":"US2E.Tags.equipment.reputation.value", "editable":false, "description":"US2E.Tags.equipment.reputation.description"}, ' +
            '{"value":"US2E.Tags.equipment.silver.value", "editable":false, "description":"US2E.Tags.equipment.silver.description"}, ' +
            '{"value":"US2E.Tags.equipment.coldIron.value", "editable":false, "description":"US2E.Tags.equipment.coldIron.description"}, ' +
            '{"value":"US2E.Tags.equipment.holy.value", "editable":false, "description":"US2E.Tags.equipment.holy.description"}, ' +
            '{"value":"US2E.Tags.equipment.smoke.value", "editable":false, "description":"US2E.Tags.equipment.smoke.description"}, ' +
            '{"value":"US2E.Tags.equipment.stun.value", "editable":false, "description":"US2E.Tags.equipment.stun.description"}]',
    },
};
