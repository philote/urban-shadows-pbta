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
		// async getData() {
		// 	const context = await super.getData();
        //     if (this.actor.baseType === 'character') {
                
        //     }
		// 	return context;
		// }

        /** @override */
        // activateListeners(html) {
        //     super.activateListeners(html);
        // }
        
    }
}