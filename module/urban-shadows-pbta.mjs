import * as pbtaConfig from './helpers/pbta-config.mjs';
import * as utils from "./helpers/utils.mjs";
import { UrbanShadowsActorSheetMixin } from "./sheets/actor-sheet.mjs";
import { UrbanShadowsCityHubSheetMixin } from "./sheets/city-hub-sheet.mjs";
import { CityHubModel } from './data/cityHubModel.mjs';
import { UrbanShadowsActorMixin } from './documents/actor.mjs';

// Make Urban Shadows helper functions available globally
window.UrbanShadows = utils.UrbanShadows;

Hooks.once('init', () => {
    // Urban Shadows ActorSheet Setup
    CONFIG.Actor.documentClass = UrbanShadowsActorMixin(game.pbta.documents.ActorPbta);

	const urbanShadowsActorSheet = UrbanShadowsActorSheetMixin(
		game.pbta.applications.actor.PbtaActorSheet
	);
	Actors.unregisterSheet("pbta", game.pbta.applications.actor.PbtaActorSheet, {
		types: ["character"],
	});
	Actors.registerSheet("pbta", urbanShadowsActorSheet, {
		types: ["character"],
		makeDefault: true,
		label: "US2E.SheetConfig.character",
	});

     // Urban Shadows City Hub Sheet Setup
    CONFIG.Actor.dataModels['urban-shadows-pbta.city-hub'] = CityHubModel;
	CONFIG.Actor.typeLabels['urban-shadows-pbta.city-hub'] = 'TYPES.Actor.city-hub';
	const urbanShadowsCityHubSheet = UrbanShadowsCityHubSheetMixin(
		game.pbta.applications.actor.PbtaActorSheet
	);
	Actors.registerSheet("urban-shadows-pbta", urbanShadowsCityHubSheet, {
		types: ["urban-shadows-pbta.city-hub"],
		makeDefault: true,
		label: "US2E.SheetConfig.cityHub",
	});
    

    // Register settings
    game.settings.register('urban-shadows-pbta', 'firstTime', {
        name: game.i18n.localize('US2E.Settings.startup.name'),
        scope: 'world',
        config: false,
        type: Boolean,
        default: true
    });

    game.settings.register('urban-shadows-pbta', 'enableLoginImg', {
        name: game.i18n.localize('US2E.Settings.img.name'),
        hint: game.i18n.localize('US2E.Settings.img.hint'),
        scope: 'world',
        config: true,
        type: Boolean,
        default: false
    });

    // Preload Handlebars parts.
	utils.preloadHandlebarsTemplates();
});

// PbtA configuration hook
Hooks.once('pbtaSheetConfig', () => {
    // https://github.com/asacolips-projects/pbta?tab=readme-ov-file#overriding-sheet-config-in-a-module
    // Disable the PbtA sheet config form.
    if (game.settings.settings.get('pbta.sheetConfigOverride')) game.settings.set('pbta', 'sheetConfigOverride', true);

    // Replace the game.pbta.sheetConfig with this module's version.
    pbtaConfig.configSheet();

    // PBTA Settings
    pbtaConfig.pbtaSettings();

    // Defines custom PbtA system tags.
    game.pbta.tagConfigOverride = pbtaConfig.tagConfig;
});

Hooks.once('ready', async function () {
    // This prompts the user to allow the module to set a custom image to the login screen
    if (!game.user.isGM) return;
    if (game.settings.get('urban-shadows-pbta', 'firstTime')) {
        game.settings.set('urban-shadows-pbta', 'firstTime', false);
    
        const callback = async () => {
            game.settings.set('urban-shadows-pbta', 'enableLoginImg', true);
            const worldData = {
                id: game.world.id,
                action: 'editWorld',
                background: `modules/urban-shadows-pbta/assets/cover.webp`,
            };
            let response;
            try {
                response = await foundry.utils.fetchJsonWithTimeout(foundry.utils.getRoute('setup'), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(worldData),
            });
            if (response.error) {
                ui.notifications.error(response.error);
            } else if (!response) {
                game.world.updateSource(response);
            }
            } catch (e) {
                return ui.notifications.error(e);
            }
        };
  
        foundry.applications.api.DialogV2.confirm({
            window: { title: game.i18n.localize('US2E.Settings.startup.dialog.title') },
            content: game.i18n.localize('US2E.Settings.startup.dialog.content'),
            rejectClose: false,
            modal: true,
            yes: { callback: callback },
        });
    } else {
        if (game.settings.get('urban-shadows-pbta', 'enableLoginImg')) {
            const worldData = {
                id: game.world.id,
                action: 'editWorld',
                background: `modules/urban-shadows-pbta/assets/cover.webp`,
            };
            let response;
            try {
                response = await foundry.utils.fetchJsonWithTimeout(foundry.utils.getRoute('setup'), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(worldData),
            });
            if (response.error) {
                ui.notifications.error(response.error);
            } else if (!response) {
                game.world.updateSource(response);
            }
            } catch (e) {
                return ui.notifications.error(e);
            }
        }
    }
});

Hooks.on("renderActorSheet", async (app, html) => {
    // Update Stat Scar labels

    // Blood
    const bloodToggleInput = html[0].querySelector(
        'li.stat > label.cell__title[for="system.stats.blood.value"] ~ label.stat-toggle.checkbox input'
    );

    if (bloodToggleInput) {
        const parentLabel = bloodToggleInput.parentElement;
        const textNode = Array.from(parentLabel.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
        );
        if (textNode) {
            textNode.nodeValue = " Shattered";
        }
    }

    // Heart
    const heartToggleInput = html[0].querySelector(
        'li.stat > label.cell__title[for="system.stats.heart.value"] ~ label.stat-toggle.checkbox input'
    );

    if (heartToggleInput) {
        const parentLabel = heartToggleInput.parentElement;
        const textNode = Array.from(parentLabel.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
        );
        if (textNode) {
            textNode.nodeValue = " Crushed";
        }
    }

    // Mind
    const mindToggleInput = html[0].querySelector(
        'li.stat > label.cell__title[for="system.stats.mind.value"] ~ label.stat-toggle.checkbox input'
    );
    
    if (mindToggleInput) {
        const parentLabel = mindToggleInput.parentElement;
        const textNode = Array.from(parentLabel.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
        );
        if (textNode) {
            textNode.nodeValue = " Fractured";
        }
    }
    
    // Spirit
    const spiritToggleInput = html[0].querySelector(
        'li.stat > label.cell__title[for="system.stats.spirit.value"] ~ label.stat-toggle.checkbox input'
    ); 

    if (spiritToggleInput) {
        const parentLabel = spiritToggleInput.parentElement;
        const textNode = Array.from(parentLabel.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
        );
        if (textNode) {
            textNode.nodeValue = " Broken";
        }
    }
});

Hooks.on("renderSettings", (app, html) => {
    // --- Setting Module Configuration
    const MODULE_CONFIG = {
        headingKey: "US2E.Settings.game.heading",
        sectionClass: "us2e-doc",
        buttonsData: [
            {
                action: (ev) => {
                    ev.preventDefault();
                    window.open("https://magpiegames.com/masks/", "_blank");
                },
                iconClasses: ["fa-solid", "fa-book"],
                labelKey: "US2E.Settings.game.publisher.title",
            },
            {
                action: (ev) => {
                    ev.preventDefault();
                    window.open("https://github.com/philote/urban-shadows-pbta", "_blank");
                },
                iconClasses: ["fab", "fa-github"],
                labelKey: "US2E.Settings.game.github.title",
            },
            {
                action: (ev) => {
                    ev.preventDefault();
                    window.open("https://ko-fi.com/ephson", "_blank");
                },
                iconClasses: ["fa-solid", "fa-mug-hot"],
                labelKey: "US2E.Settings.game.kofi.title",
            },
        ]
    };

    // --- Button Creation Logic 
    const buttons = MODULE_CONFIG.buttonsData.map(({ action, iconClasses, labelKey }) => {
        const button = document.createElement("button");
        button.type = "button";

        const icon = document.createElement("i");
        icon.classList.add(...iconClasses);

        // Append icon and localized text node
        button.append(icon, document.createTextNode(` ${game.i18n.localize(labelKey)}`));

        button.addEventListener("click", action);
        return button;
    });
    
    // --- Version Specific Logic (Reusable) ---
    if (game.release.generation >= 13) {
        // V13+ Logic: Insert after the "Documentation" section
        const documentationSection = html.querySelector("section.documentation");
        if (documentationSection) {
            // Create section wrapper
            const section = document.createElement("section");
            section.classList.add(MODULE_CONFIG.sectionClass, "flexcol");

            const divider = document.createElement("h4");
            divider.classList.add("divider");
            divider.textContent = game.i18n.localize(MODULE_CONFIG.headingKey);

            // Append divider and buttons to section
            section.append(divider, ...buttons);
            
            // Insert section before documentation
            documentationSection.before(section);
        } else {
            console.warn(`${game.i18n.localize(MODULE_CONFIG.headingKey)} | Could not find 'section.documentation' in V13 settings panel.`);
        }
    } else {
        // V12 Logic: Insert after the "Game Settings" section
        const gameSettingsSection = html[0].querySelector("#settings-game");
        if (gameSettingsSection) {
			const header = document.createElement("h2");
			header.innerText = game.i18n.localize(MODULE_CONFIG.headingKey);

			const settingsDiv = document.createElement("div");
			settingsDiv.append(...buttons);

			// Insert the header and the div containing buttons after the game settings section
			gameSettingsSection.after(header, settingsDiv);
        } else {
            console.warn(`${game.i18n.localize(MODULE_CONFIG.headingKey)} | Could not find '#settings-game' section in V12 settings panel.`);
        }
    }
});