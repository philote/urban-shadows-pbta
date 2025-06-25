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
            const attributes = context.system.attributes;
			const connectionsAttributes = this._getAttributes("connections", attributes);
			context.system.connectionsAttributes = connectionsAttributes;
			const tablesAttributes = this._getAttributes("tables", attributes);
			context.system.tablesAttributes = tablesAttributes;
			return context;
		}

		/** @override */
		// activateListeners(html) {
		//     super.activateListeners(html);
		// }

		/**
		 * Get specific attributes from the PbtA config
		 * @param {string} position - The position value to filter by
		 * @param {Object} attributes - Object of attributes from the sheet
		 * @returns {Object} Filtered object containing only attributes that match the position
		 */
		_getAttributes(position, attributes) {
			if (!position || !attributes) {
				return {};
			}

			return Object.entries(attributes).reduce((filtered, [key, attribute]) => {
				if (attribute.position === position) {
					filtered[key] = attribute;
				}
				return filtered;
			}, {});
		}
    }
}
