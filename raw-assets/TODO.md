# TODO:
## Character Actor
Player Sheet
- [Larger bit of work, maybe] Good Debt tracking *(this is the core conceit of the game, so it should be done better)*
- [Larger lift] Each playbook has a section of unique rules and forms to fill out. A solution would be needed to add these. It gets even harder if its require that a User can make unique playbooks because then you almost have to have a mini form builder. Some more thought might come up with and easier solution, but for now, this is ouchy.
- Some moves need to be upgradable (can reuse Triumphs code from Root)
- better UI for Question/Answer stuff *(little more like Root)*
- add an advancement tab (I have done this several times, few hours of work)
### Nice to have:
- starting status set when the playbook is added *(PBTA update)*

## NPC Actor
GM Actor
- Looks pretty meh, so a design pass and maybe layout rework
- Add the debt solution from Characters *(see above)*

## Faction -> move this to an item so it can live on City Hubs
GM Item
- Looks pretty meh, so a design pass and maybe layout rework

## City Hub Actor
GM Actor for tracking city hub data.
**This is not started**. *(there is a possibility that this could be a creative journal instead of an actor... actor would be better though)*
- picture
- name
- description
- list of Residents (NPCs + other info)
- list of relationships (or just have them on the PC sheet?) - linked to PC sheets? (Debts are a factor here)
- list of Hub Moves
- Hub tables [locations, rumors, factions, npcs]
    - and lists of created items from tables

## extra nice features
- A sheet/Journal entry shows all debts
- Debts that connect 2 PCs or PCs and NPCs are the same objects
- New Item: Debt

## Item/Actor clean up
- create hub moves
- create hub tables
- clean up all moves, playbooks and gear
- add good html to playbook descriptions
- link playbooks to moves and gear
- make factions Items
- create city hub actors
    - create City Hubs from free material

-----------------------
-----------------------


# DATA
## Character Actor
- picture
- name
- look
- demeanor
- stats
- List of Debts (very similar to Masks Influence)
- List of Questions
- "let it out" abilities (looks kinda like feats in root?)
- corruption
    - trigger text
    - track
    - list of potential moves
- Lists of Moves the PC has access to
    - list of intimacy moves
    - end move
    - list of circle Moves
    - list of corruption Moves
- circles
    - ratings
    - status, 3 ticks
- List of gear

## NPC Actor
- picture
- name
### top
- Status [Status-1, Status-2, Status-3]
- Harm track
- Circle
- Faction
### side
- Drives
- RESISTANCES (ARMOR)
- VULNERABILITIES (increase harm)
### details
- Presenting
- Look
- Demeanor
- Role
- Presenting
- Trait
- Quirk
- List of Debts
- Notes
### List of Moves

## Faction Item
- picture
- name
### stats
- Size [Size-1, Size-2, Size-3, Size-4]
- Strength [Strength-1, Strength-2, Strength-3, Strength-4]
### top
- stances [striving, maintaining, collapsing]
- circles [Mortalis, Night, Power, Wild]
- recruitment
- resources
### side
- leader [Status-3] (NPC or PC Actor)
- Assets, tags like +veteran hunters, +necromantic rituals, or +drug dealer network
### details
- description
- goals
- List of members (NPC & PC Actors)
### List of Moves

## City Hub Journal Template or Actor
- picture
- name
- description
- list of Residents (NPCs + other info)
- list of relationships (or just have them on the PC sheet?) - linked to PC sheets?
- list of Hub Moves
- tables [locations, rumors, factions, npcs]