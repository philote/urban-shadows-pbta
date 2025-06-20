# TODO:
## Character Actor
Player Sheet
- [Larger bit of work] Good Debt tracking *(this is the core conceit of the game, so it should be done better)*
- Some moves need to be upgradable (can reuse Triumphs code from Root)
### Nice to have:
- starting status set when the playbook is added *(PBTA update)*

## NPC Actor
GM Actor
- Looks pretty meh, so a design pass and maybe layout rework
- Add the debt solution from Characters *(see above)*

## Faction -> move this to an item so it can live on City Hubs
GM Item
- turn faction actor into a faction item (do not delete the current faction actor code)

## City Hub Actor
GM Actor for tracking city hub data.
can use the faction actor as a guide
- picture
- name
- description
- list of Residents (NPCs + other info) (links in actors)
- list of relationships (or just have them on the PC sheet?) - linked to PC sheets? (Debts are a factor here) (links in actors)
- list of Hub Moves
- Hub tables [locations, rumors, factions, npcs]
    - and lists of created items from tables

## extra nice features
- A sheet that shows all debts relationships
- New Item: Debts?

## Item/Actor clean up
- finish creating hub tables
- add good html and styles to to playbook descriptions

-----------------------
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

## Faction Actor
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