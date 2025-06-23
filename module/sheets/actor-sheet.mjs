import * as utils from "../helpers/utils.mjs";

export function UrbanShadowsActorSheetMixin(Base) {
    return class UrbanShadowsActorSheet extends Base {
        /** @override */
		// static get defaultOptions() {
		// 	return foundry.utils.mergeObject(super.defaultOptions, {
		// 		classes: ["pbta", "sheet", "actor", "character"],
		// 		width: 750,
		// 		height: 750,
		// 	});
		// }

        /** @override */
		get template() {
			return 'modules/urban-shadows-pbta/templates/actor-sheet.hbs';
		}
        
        /** @override */
		async getData() {
			const context = await super.getData();
            if (this.actor.baseType === 'character') {
				const playbookSlug = context.system.playbook.slug;
				const attributes = context.system.attributes;
				const playbookAttributes = this._getPlaybookAttributes(playbookSlug, attributes);
				context.system.playbookAttributes = playbookAttributes;
				console.log("playbookAttributes: ", playbookAttributes);
				/*
				if playbookAttributes is empty then add a playbook details to the playbook tab
				*/
            }
			return context;
		}

		/** @override */
		// activateListeners(html) {
		//     super.activateListeners(html);
		// }

		/**
		 * Get playbook-specific attributes from the PbtA config
		 * @param {string} playbookValue - The playbook value to filter by
		 * @param {Object} attributes - Object of attributes from the playbook
		 * @returns {Object} Filtered object containing only attributes that match the playbook
		 */
		_getPlaybookAttributes(playbookValue, attributes) {
			if (!playbookValue || !attributes) {
				console.log("Choose a playbook to update the playbook tab");
				return {};
			}

			return Object.entries(attributes).reduce((filtered, [key, attribute]) => {
				if (attribute.position === "playbook" && attribute.playbook === playbookValue) {
					filtered[key] = attribute;
				}
				return filtered;
			}, {});
		}
    }
}
