/**
 * Define a set of template paths to pre-load
 */
export const preloadHandlebarsTemplates = async function () {
	return loadTemplates([
		"modules/urban-shadows-pbta/templates/parts/actor-tab-advancements.hbs",
		"modules/urban-shadows-pbta/templates/parts/actor-tab-playbook.hbs",
        "modules/urban-shadows-pbta/templates/parts/city-hub-tab-tables.hbs",
		"modules/urban-shadows-pbta/templates/parts/city-hub-tab-connections.hbs",
	]);
};

/**
 * Urban Shadows helper functions
 */
export const UrbanShadows = {
    createDebt: async function(creditorActor, debtorActor, nature, severity = "moderate", notes = "") {
        const debtData = {
            creditorId: creditorActor?.id || null,
            creditorName: creditorActor?.name || "Unknown",
            debtorId: debtorActor?.id || null,
            debtorName: debtorActor?.name || "Unknown",
            nature: nature,
            severity: severity,
            dateCreated: new Date().toISOString().split('T')[0],
            notes: notes
        };

        // Create debt item for debtor (what they owe)
        const debtorItem = await Item.create({
            name: `Debt to ${debtData.creditorName}`,
            type: "equipment",
            system: {
                description: `<p><strong>Creditor:</strong> ${debtData.creditorName}</p><p><strong>Nature:</strong> ${nature}</p><p><strong>Severity:</strong> ${severity}</p><p><strong>Notes:</strong> ${notes}</p>`,
                equipmentType: "debt",
                actorType: "character",
                uses: 0,
                quantity: 1,
                weight: 0,
                tags: `[{"value":"debt"},{"value":"${severity}"},{"value":"owed to ${debtData.creditorName}"}]`
            },
            flags: {
                "urban-shadows-pbta": { debt: debtData }
            }
        }, { parent: debtorActor });

        console.log("Urban Shadows: Created debt item", debtorItem);
        ui.notifications.info(`Created debt: ${debtorActor.name} owes ${creditorActor.name} - ${nature}`);
        
        return debtorItem;
    }
};
