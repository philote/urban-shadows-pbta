// Urban Shadows 2E - Debt Creation Macro
// This macro creates a debt relationship between two actors

(async () => {
    // Check if Urban Shadows module is loaded
    if (!window.UrbanShadows) {
        ui.notifications.error("Urban Shadows module not loaded!");
        return;
    }

    // Get all actors for selection
    const actors = game.actors.filter(a => a.type === "character" || a.type === "npc");
    if (actors.length < 2) {
        ui.notifications.error("Need at least 2 actors to create a debt!");
        return;
    }

    // Create actor options for dropdowns
    const actorOptions = actors.map(a => `<option value="${a.id}">${a.name} (${a.type})</option>`).join("");

    // Create the dialog form
    const content = `
        <form>
            <div class="form-group">
                <label>Who is owed the debt (Creditor)?</label>
                <select name="creditor" style="width: 100%;">
                    <option value="">-- Select Creditor --</option>
                    ${actorOptions}
                </select>
            </div>
            
            <div class="form-group">
                <label>Who owes the debt (Debtor)?</label>
                <select name="debtor" style="width: 100%;">
                    <option value="">-- Select Debtor --</option>
                    ${actorOptions}
                </select>
            </div>
            
            <div class="form-group">
                <label>Nature of the debt:</label>
                <input type="text" name="nature" placeholder="e.g., Protection from Night Court" style="width: 100%;" />
            </div>
            
            <div class="form-group">
                <label>Severity:</label>
                <select name="severity" style="width: 100%;">
                    <option value="minor">Minor</option>
                    <option value="moderate" selected>Moderate</option>
                    <option value="major">Major</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>Notes (optional):</label>
                <textarea name="notes" placeholder="Additional details about the debt..." style="width: 100%; height: 60px;"></textarea>
            </div>
        </form>
    `;

    // Show the dialog
    new Dialog({
        title: "Create Debt Relationship",
        content: content,
        buttons: {
            create: {
                icon: '<i class="fas fa-coins"></i>',
                label: "Create Debt",
                callback: async (html) => {
                    const form = html[0].querySelector("form");
                    const formData = new FormData(form);
                    
                    const creditorId = formData.get("creditor");
                    const debtorId = formData.get("debtor");
                    const nature = formData.get("nature");
                    const severity = formData.get("severity");
                    const notes = formData.get("notes");
                    
                    // Validation
                    if (!creditorId || !debtorId || !nature) {
                        ui.notifications.error("Please fill in all required fields!");
                        return;
                    }
                    
                    if (creditorId === debtorId) {
                        ui.notifications.error("Creditor and debtor cannot be the same actor!");
                        return;
                    }
                    
                    // Get the actors
                    const creditor = game.actors.get(creditorId);
                    const debtor = game.actors.get(debtorId);
                    
                    if (!creditor || !debtor) {
                        ui.notifications.error("Could not find selected actors!");
                        return;
                    }
                    
                    try {
                        // Create the debt
                        await UrbanShadows.createDebt(creditor, debtor, nature, severity, notes);
                        
                        // Success message
                        ui.notifications.info(`✓ Debt created: ${debtor.name} owes ${creditor.name}`);
                        
                        // Optional: Open the debtor's sheet to show the new debt
                        if (game.user.isGM) {
                            const openSheet = await Dialog.confirm({
                                title: "Open Character Sheet?",
                                content: `<p>Would you like to open ${debtor.name}'s character sheet to see the new debt?</p>`,
                                defaultYes: false
                            });
                            
                            if (openSheet) {
                                debtor.sheet.render(true);
                            }
                        }
                        
                    } catch (error) {
                        console.error("Error creating debt:", error);
                        ui.notifications.error("Failed to create debt. Check console for details.");
                    }
                }
            },
            cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel"
            }
        },
        default: "create",
        render: (html) => {
            // Auto-focus the nature field
            html.find('input[name="nature"]').focus();
            
            // Add some styling
            html.find('.form-group').css({
                'margin-bottom': '10px'
            });
            
            html.find('label').css({
                'display': 'block',
                'margin-bottom': '5px',
                'font-weight': 'bold'
            });
        }
    }, {
        width: 400,
        resizable: true
    }).render(true);
})();