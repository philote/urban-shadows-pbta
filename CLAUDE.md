# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands
- `npm run build` - Compile SCSS to CSS (expanded format, no source maps)
- `npm run watch` - Compile SCSS to CSS with source maps and watch for changes
- `npm run pushLDBtoJSON` - Extract FoundryVTT pack data from LevelDB to JSON files in src/packs/
- `npm run pullJSONtoLDB` - Convert JSON files from src/packs/ to FoundryVTT LevelDB packs/

### Pack Data Management
This module uses FoundryVTT's pack system with a dual format:
- **Development**: JSON files in `src/packs/` (human-readable, version controllable)
- **Production**: LevelDB packs in `packs/` (FoundryVTT's native format)

Always edit JSON files in `src/packs/` and use `npm run pullJSONtoLDB` to generate the LevelDB packs.

## Architecture

### Module Structure
This is a FoundryVTT module for Urban Shadows 2E built on the **PbtA (Powered by the Apocalypse) System**. The module provides character sheets, moves, gear, and other game content.

### Key Components

**Entry Point**: `module/urban-shadows-pbta.mjs`
- Registers module settings
- Configures PbtA system integration via `pbtaSheetConfig` hook
- Handles UI customizations (stat scar labels, settings panel)

**PbtA Configuration**: `module/helpers/pbta-config.mjs`
- Defines complete game system configuration for Urban Shadows 2E
- Configures actor types (character, faction, npc) with stats, attributes, and move types
- Sets up roll mechanics (2d6 system with miss/weak hit/strong hit results)
- Defines playbook-specific attributes and advancement tracks

**Styling**: `src/scss/` directory with modular SCSS files
- Main file: `urban-shadows-pbta.scss`
- Component files: `_character-sheet.scss`, `_faction-sheet.scss`, `_npc-sheet.scss`
- Compiled to `css/urban-shadows-pbta.css`

**Game Content**: Three main pack categories in `src/packs/`
- `basic-moves/` - Core game moves (basic, circle, debt, faction)
- `playbooks/` - Character archetypes and their specific moves/abilities
- `gear/` - Equipment and weapons

### Integration Points

**PbtA System Dependency**: Requires the PbtA system module
- Uses PbtA's sheet configuration system
- Overrides default PbtA config with Urban Shadows 2E-specific rules
- Maintains compatibility with PbtA system updates

**Custom Sheet Behavior**: 
- Dynamically updates stat scar labels (e.g., "Blood" scar becomes "Shattered")
- Adds module-specific settings panel with external links

**Pack System**: 
- Uses FoundryVTT's compendium pack system for distributing game content
- JSON source files allow version control and collaborative editing
- LevelDB compilation ensures compatibility with FoundryVTT's pack system

### Development Workflow
1. Edit content in `src/packs/` JSON files
2. Modify styles in `src/scss/` files
3. Update system config in `module/helpers/pbta-config.mjs` for mechanical changes
4. Run `npm run pullJSONtoLDB` to generate packs before testing
5. Use `npm run watch` during development for live CSS updates

### Important Notes
- Never edit files in `packs/` directly - they're generated from `src/packs/`
- The module heavily customizes the PbtA system - changes should respect this integration
- Character stats include both basic stats (Blood, Heart, Mind, Spirit) and circle stats (Mortalis, Night, Power, Wild)
- Corruption and advancement systems are core to Urban Shadows 2E mechanics