/**
 * Define a set of template paths to pre-load
 */
export const preloadHandlebarsTemplates = async function () {
	return loadTemplates([
		"modules/urban-shadows-pbta/templates/parts/actor-advancements.hbs",
	]);
};
