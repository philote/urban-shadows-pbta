import * as pbtaConfig from './helpers/pbta-config.mjs';

Hooks.once('init', () => {
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
