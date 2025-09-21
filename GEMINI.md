# Urban Shadows 2E (PbtA) Foundry VTT Module

## Project Overview

This project is a Foundry VTT module for the Urban Shadows 2E tabletop roleplaying game. It provides character sheets, city hub sheets, and other features for playing Urban Shadows 2E in Foundry VTT. The module is built on top of the PbtA (Powered by the Apocalypse) system for Foundry VTT.

The project is written in JavaScript (ESM) and uses SCSS for styling. It has a build process to compile the SCSS files into CSS.

## Building and Running

### Dependencies

- Node.js
- Foundry VTT with the PbtA system installed

### Build Process

To build the CSS from the SCSS source files, run the following command:

```bash
npm run build
```

To watch for changes and automatically rebuild the CSS, run:

```bash
npm run watch
```

### Data Management

The module uses scripts to manage compendium data:

- `npm run pushLDBtoJSON`: Pushes data from NeDB databases to JSON files.
- `npm run pullJSONtoLDB`: Pulls data from JSON files into NeDB databases.

### Development Setup

The `createSymlinks` script can be used to create symbolic links for development, which is a common practice for Foundry VTT module development.

```bash
npm run createSymlinks
```

## Development Conventions

- **Code Style:** The code uses modern JavaScript (ESM) and follows a consistent style.
- **Styling:** SCSS is used for styling, with the main file at `src/scss/urban-shadows-pbta.scss`.
- **Data:** Compendium data is stored in JSON files in the `src/packs` directory.
- **Templates:** Handlebars templates are used for the character and city hub sheets, located in the `templates` directory.
- **Modularity:** The code is organized into modules for different features (e.g., actor sheets, city hub sheets, helpers).
