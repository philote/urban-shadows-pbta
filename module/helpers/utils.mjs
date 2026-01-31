/**
 * Define a set of template paths to pre-load
 */
export const preloadHandlebarsTemplates = async function () {
	return foundry.applications.handlebars.loadTemplates([
		"modules/urban-shadows-pbta/templates/parts/actor-tab-advancements.hbs",
		"modules/urban-shadows-pbta/templates/parts/actor-tab-playbook.hbs",
        "modules/urban-shadows-pbta/templates/parts/city-hub-tab-tables.hbs",
		"modules/urban-shadows-pbta/templates/parts/city-hub-tab-connections.hbs",
	]);
};
