import * as utils from "../helpers/utils.mjs";

export function UrbanShadowsCityHubSheetMixin(Base) {
    return class UrbanShadowsCityHubSheet extends Base {
        /** @override */
		static get defaultOptions() {
			return foundry.utils.mergeObject(super.defaultOptions, {
				classes: ["pbta", "sheet", "city-hub"],
				width: 750,
				height: 750,
			});
		}

        /** @override */
		get template() {
			return 'modules/urban-shadows-pbta/templates/city-hub-sheet.hbs';
		}
        
        /** @override */
		async getData() {
			const context = await super.getData();
            if (this.actor.baseType === 'npc') {
				const attributes = this.actor.system.attributes;
				const connectionsAttributes = this._getAttributes("connections", attributes);
				context.system.connectionsAttributes = connectionsAttributes;
				const tablesAttributes = this._getAttributes("tables", attributes);
				context.system.tablesAttributes = tablesAttributes;
            }
			return context;
		}

		/** @override */
		// activateListeners(html) {
		//     super.activateListeners(html);
		// }

		/**
		 * Get specific attributes from the PbtA config
		 * @param {string} tab - The tab value to filter by
		 * @param {Object[]} attributes - List of attributes from the sheet
		 * @returns {Object[]} Array of attribute objects that match the tab
		 */
		_getAttributes(tab, attributes) {
			if (!tab || !attributes) {
				return [];
			}

			return Object.entries(attributes).reduce((attr, [key, attribute]) => {
				if (attribute.tab === tab) {
					attr.push({ key, ...attribute });
				}
				return attr;
			}, []);
		}
    }
}
