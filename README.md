# PbtA Template
A code template for creating modules for Foundry VTT that uses the PbtA System package.

> [!NOTE]
> Using this template: 
> - You will need to replace all instances of "urban-shadows-pbta" with your module id, usually the id used in module.json. 
> - replace all instances of "PbtA Template" with a human readable version of the system name
> - replace all instances of "US2E" with with your module ID but in upper case
> - Repo links will need to be updated to your repo url. (example: image urls in the module.json)
> - LICENSE & package.json files will need "Joseph Hopson" replaced with your name/username
> - files to rename: urban-shadows-pbta.scss, urban-shadows-pbta.css, urban-shadows-pbta.mjs
> - Perform an `npm install`. 
> - Use `npm run gulp` to get the scss working. 
> - Use the scripts in the tools folder for managing packs (see: https://foundryvtt.wiki/en/development/api/CompendiumCollection). 
> - Releases are done using github's release process (the workflow should do everything else for you, as long as it's file list is correct for what should get put into the module.zip).
>   1. Create a new release
>   2. Tag it with the release version
>   3. Once you click "go" all artifacts should be created, including the module.zip and module.json
> - Images will need to be updated, there are affinity photo files in the raw-assets folder.
> - replace instances of my info with your own (in module.json authors, license file, package.json)
> - [PbtA System documentation](https://github.com/asacolips-projects/pbta/wiki) 
> - [Older PbtA Docs](https://asacolips.gitbook.io/pbta-system)
> - [Foundry Community Wiki](https://foundryvtt.wiki/en/development)


<hr>

![Cover](assets/cover.webp)

# A [game name] module for Foundry VTT using the PbtA System
This module is for [Foundry VTT](https://foundryvtt.com/) and requires the [PbtA System](https://github.com/asacolips-projects/pbta) created by [asacolips](https://github.com/asacolips).

![](https://img.shields.io/badge/Foundry-v11-informational)
![](https://img.shields.io/badge/Foundry-v12-informational)
<!--- Downloads @ Latest Badge -->
![Latest Release Download Count](https://img.shields.io/github/downloads/philote/urban-shadows-pbta/latest/module.zip)
<!--- Forge Bazaar Install % Badge -->
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%urban-shadows-pbta&colorB=4aa94a)

<p align="center">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/philote/urban-shadows-pbta"> 
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/philote/urban-shadows-pbta"> 
    <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/philote/urban-shadows-pbta/total" /> 
    <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/philote/dierpg?label=latest%20release" /> 
</p>
<p align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/philote/urban-shadows-pbta"> 
    <a href="https://github.com/philote/urban-shadows-pbta/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/philote/urban-shadows-pbta">
    </a> 
    <a href="https://github.com/philote/urban-shadows-pbta/network">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/philote/urban-shadows-pbta">
    </a> 
    <a href="https://github.com/philote/urban-shadows-pbta/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/philote/urban-shadows-pbta">
    </a> 
</p>

[Description of the game with links to the publisher goes here.]

## Screenshot
![Screenshot](assets/screenshot.webp)

## Dependencies

The following Foundry VTT game system must be installed to use this module: [Powered by the Apocalypse](https://foundryvtt.com/packages/pbta).

## Features

- Feature One
- Feature Two

## TODO
- TODO One

# License & Acknowledgements

Icons from game-icons.net are released under a Creative Commons Attribution 3.0 Unported license. https://creativecommons.org/licenses/by/3.0/
