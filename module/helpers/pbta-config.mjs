export const configSheet = async () => {
    // Pass module sheet object to sheetConfig
    game.pbta.sheetConfig = {
        rollFormula: "2d6",
        rollShifting: true,
        statClock: true,
        minMod: -3,
        maxMod: 4,
        rollResults: {
            failure: {
                start: -Infinity,
                end: 6,
                label: game.i18n.localize("US2E.CharacterSheets.rollResults.complications")
            },
            partial: {
                start: 7,
                end: 9,
                label: game.i18n.localize("US2E.CharacterSheets.rollResults.partialSuccess")
            },
            success: {
                start: 10,
                end: 12,
                label: game.i18n.localize("US2E.CharacterSheets.rollResults.success")
            },
            critical: {
                start: 13,
                end: Infinity,
                label: game.i18n.localize('US2E.CharacterSheets.rollResults.critical'),
            }
        },
        actorTypes: {
            character: {
                stats: {
                    blood: {
                        label: game.i18n.localize("US2E.CharacterSheets.stats.blood"),
                        value: 0,
                        steps: {
                            value: 0,
                            max: 4,
                        },
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
                    }
                },
                attributes: {
                    xp: {
                        label: game.i18n.localize("US2E.CharacterSheets.attr.xpLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Xp",
                        value: 0,
                        max: 5,
                        steps: Array(5).fill(false),
                        position: "Top"
                    },
                    injury: {
                        label: game.i18n.localize('US2E.CharacterSheets.attr.injuryLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: 'Clock',
                        value: 0,
                        max: 4,
                        steps: Array(4).fill(false),
                        position: 'Top',
                      },
                    coin: {
                        label: game.i18n.localize('US2E.CharacterSheets.attr.coinLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: 'Number',
                        value: 0,
                        playbook: true,
                        position: 'Top',
                    },
                    conditions: {
                        label: game.i18n.localize("US2E.CharacterSheets.attr.conditions.label"),
                        description: game.i18n.localize("US2E.CharacterSheets.attr.conditions.description"),
                        customLabel: false,
                        userLabel: false,
                        type: "ListMany",
                        condition: true,
                        position: "Left",
                        options: {
                            0: {
                                label: game.i18n.localize("US2E.CharacterSheets.attr.conditions.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("US2E.CharacterSheets.attr.conditions.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("US2E.CharacterSheets.attr.conditions.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("US2E.CharacterSheets.attr.conditions.options.3"),
                                value: false,
                            },
                            4: {
                                label: game.i18n.localize("US2E.CharacterSheets.attr.conditions.options.4"),
                                value: false,
                            },
                        },
                    },
                },
                details: {
                    looks: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.looksLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                    },
                    biography: {
                        label: game.i18n.localize("US2E.CharacterSheets.details.biographyLabel"),
                        value: ""
                    },
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.basicLabel"),
                        moves: [],
                        creation: true
                    },
                    playbook: {
                        label: game.i18n.localize("US2E.CharacterSheets.moveTypes.playbookLabel"),
                        moves: [],
                        playbook: true
                    }
                },
                equipmentTypes: {
                  gear: {
                    label: game.i18n.localize('US2E.CharacterSheets.gearLabel'),
                  },
                },
            },
            npc: {
                attributes: {
                    fly: {
                        label: game.i18n.localize('US2E.NPCSheets.attr.flyLabel'),
                        description: null,
                        customLabel: null,
                        userLabel: null,
                        type: 'checkbox',
                        default: false,
                        position: 'Top',
                    },
                    injury: {
                        label: game.i18n.localize('US2E.NPCSheets.attr.injuryLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: 'Clock',
                        value: 0,
                        max: 4,
                        steps: [false, false, false, false],
                        position: 'Top',
                    },
                    faction: {
                        type: 'Text',
                        label: game.i18n.localize('US2E.NPCSheets.attr.factionLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        position: 'Left',
                    },
                    age: {
                        label: game.i18n.localize('US2E.NPCSheets.attr.ageLabel'),
                        description: null,
                        customLabel: null,
                        userLabel: false,
                        type: 'Number',
                        default: 1,
                        position: 'Left',
                    },
                },
                details: {
                    biography: {
                        label: game.i18n.localize("US2E.NPCSheets.details.biographyLabel"),
                        value: ""
                    }
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("US2E.NPCSheets.moveTypes.basicLabel"),
                        moves: []
                    }
                },
                equipmentTypes: {
                    loot: {
                        label: game.i18n.localize('US2E.NPCSheets.lootLabel'),
                    },
                },
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