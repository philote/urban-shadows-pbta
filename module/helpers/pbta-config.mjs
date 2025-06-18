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
                        label: game.i18n.localize("US2E.CharacterSheets.Playbooks.TheFae.MonarchsStanding.label"),
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
