# Licensing Guide for Urban Shadows PBTA Module

This Foundry VTT module uses a multi-license approach to combine open source code with various content sources.

## Quick Summary

- **Source Code**: Apache License 2.0 (open source, contributions welcome)
- **Original Assets**: Apache License 2.0 (created by Joseph Hopson ("philote"))
- **Creative Commons Assets**: Various CC licenses (see attribution)
- **Urban Shadows Content**: Fan-Collaboration License with Magpie Games (proprietary)

## What This Means for You

### As a User
- Free to use the complete module in Foundry VTT
- Can modify the code for personal use
- Can share the module with your gaming group
- Cannot sell or commercially distribute the module
- Cannot extract and redistribute Urban Shadows content

### As a Contributor
- Can contribute code improvements under Apache 2.0
- Can submit translations
- Can fork and modify the code (must maintain all licenses)
- Cannot contribute Urban Shadows copyrighted content
- Cannot use Urban Shadows content in derivative works

## File Structure and Licenses

```
urban-shadows-pbta/
├── src/              → Apache 2.0 (all source code)
│   ├── scss/         → Apache 2.0 (created by Joseph Hopson ("philote"))
│   └── packs/        → Mixed (structure: Apache 2.0, content: Fan-Collaboration)
├── css/              → Apache 2.0 (compiled styles)
├── templates/        → Apache 2.0 (all Handlebars templates)
├── module/           → Apache 2.0 (module JavaScript code)
├── lang/             → Apache 2.0 (translations)
├── packs/            → Mixed (structure: Apache 2.0, content: Fan-Collaboration)
├── assets/
│   ├── original/     → Apache 2.0 (created by Joseph Hopson ("philote"))
│   ├── cc-assets/    → Various CC licenses (see ATTRIBUTION.md)
│   └── magpie/       → Fan-Collaboration (Magpie Games content)
├── tools/            → Apache 2.0 (build and development tools)
├── .github/          → Apache 2.0 (build and development tools)
└── module.json       → Apache 2.0 (configuration)
```

## Asset Types and Their Licenses

### Original Work (Apache 2.0)
- Can be freely modified and redistributed
- Can be used in derivative works
- Can be used commercially
- Located in `/assets/original/`

### Creative Commons Assets (CC-BY 3.0 / CC-BY 2.0)
- Can be used with attribution
- Can be modified with attribution
- Can be used commercially with attribution
- Must maintain attribution chain
- Located in `/assets/cc-assets/`
- See `ATTRIBUTION.md` in root directory for complete list

### Magpie Games Assets (Proprietary)
- Cannot be used outside this module
- Cannot be sold or used commercially
- Cannot be extracted and reused
- Can be distributed as part of this free module
- Located in `/assets/magpie/`

### Compendium Packs

- `/packs/` - Foundry compendium database files 
- `/src/packs/` - Source files for generating compendiums 

TBD

## Development and Configuration Files

The following files are part of the development environment and are licensed under Apache 2.0:

- **Build Configuration**: `jsconfig.json`, `package.json`, `package-lock.json`
- **Development Tools**: `/tools/` directory and all contents
- **Foundry Config**: `foundry-config.yaml`, example configs
- **Git Configuration**: `.gitignore`, `.gitattributes`
- **Editor Config**: `.editorconfig`
- **Documentation**: `README.md`, `CONTRIBUTING.md`

These files can be freely modified and reused under Apache 2.0 terms.

## Detailed License Information

### Apache License 2.0 (Code and Original Assets)

The Apache License 2.0 applies to:
- All JavaScript source code (`.js`, `.mjs` files)
- All CSS and SCSS stylesheets
- All Handlebars templates (`.hbs` files)
- Module configuration files (`module.json`, build scripts)
- Original assets created by Joseph Hopson ("philote") in `/assets/original/`
- Documentation files (except where noted)

This license allows for:
- Commercial and non-commercial use
- Modification and distribution
- Patent protection for contributors
- Sublicensing

Requirements:
- Include copyright notice
- Include copy of license
- State any significant changes made
- Include NOTICE file if present

### Creative Commons Licenses

Various Creative Commons licenses apply to third-party assets:

**CC-BY 3.0 (Attribution)**
- Icons from game-icons.net
- Requires attribution to original creators
- Allows commercial use with attribution
- See `/assets/icons/ATTRIBUTION.md` for full credits

**CC-BY 2.0 (Attribution)**
- City header image from Flickr
- Requires attribution to photographer
- Allows commercial use with attribution

**CC0 (Public Domain)**
- Some abstract icons
- No attribution required
- Can be used for any purpose

### Fan-Collaboration License (Magpie Games Content)

This license applies to all Urban Shadows 2E content provided by Magpie Games:
- Game text and descriptions from Magpie
- Character artwork and illustrations from Magpie
- Playbook content and moves from Magpie
- Setting materials and lore from Magpie
- Urban Shadows logos and branding

Terms:
- TBD

## Contributing

By contributing code to this repository, you agree to license your contributions under Apache 2.0.

### What You Can Contribute
- Code improvements and bug fixes
- UI/UX enhancements
- Accessibility features
- Translations of UI elements
- Documentation improvements
- Original graphics and assets (under Apache 2.0)

### What You Cannot Contribute
- Urban Shadows game content from the books
- Copyrighted artwork without proper licensing
- Content from other game systems
- Assets without clear licensing

## Compliance Notes

### For Module Users
This module is provided free of charge and must remain free. You may not:
- Sell the module or any part of it
- Extract Urban Shadows content for use elsewhere
- Remove attribution for Creative Commons assets
- Claim ownership of Magpie Games content

### For Developers Forking This Module
If you fork this repository:
- Maintain all existing licenses
- Keep attribution for Creative Commons assets
- Do not include Magpie Games content without permission
- You may use the Apache 2.0 licensed code freely
- You may use original assets under Apache 2.0 terms

### For Foundry VTT Package Distribution
This module is distributed through:
- GitHub repository (source code and free assets)
- Foundry VTT package system (complete module)

The fan-collaboration license with Magpie Games permits distribution through these channels as a free module.

## Questions and Contact

- **Code licensing questions**: Open an issue on GitHub
- **Urban Shadows content questions**: Contact Magpie Games (https://magpiegames.com)
- **Foundry VTT questions**: Visit the Foundry Discord
- **Module support**: Open an issue at https://github.com/philote/urban-shadows-pbta/issues

## Legal Notices

Urban Shadows 2E is copyright 2015-2024 Magpie Games. All rights reserved.

This module is not affiliated with or endorsed by Magpie Games, except as permitted under the fan-collaboration license.

Apache License 2.0: https://www.apache.org/licenses/LICENSE-2.0

Creative Commons Licenses: https://creativecommons.org/licenses/

This module requires the PbtA System by asacolips, which is distributed under its own license terms.

## License Change History

- **Version 2.0.0** (2025): Transitioned from MIT to Apache License 2.0
- **Version 1.x** (2024): Originally released under MIT License

Previous MIT-licensed versions remain available in the git history and are still valid under MIT terms for those versions.