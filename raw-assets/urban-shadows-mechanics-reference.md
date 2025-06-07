# Urban Shadows 2E - Game Mechanics Reference

This file contains extracted game mechanics from the Urban Shadows 2E core book, organized for FoundryVTT module development.

## Core Game Mechanics

### Dice System
- **2d6 + modifier** system
- Roll outcomes:
  - **10+**: Strong hit (full success)
  - **7-9**: Weak hit (success with complications/costs)
  - **6-**: Miss (interesting complications occur)
  - **12+**: Enhanced success (on some advanced moves)
- **Modifiers range from -3 to +4** (hard caps)

### Move Structure
- Moves trigger when fiction demands uncertainty
- Format: "When you do X, roll+STAT"
- **Basic Moves**: Available to all characters
- **Playbook Moves**: Unique to character type
- **Circle Moves**: Interact with supernatural communities
- **Debt Moves**: Handle obligations
- **City Moves**: Influence city-wide politics

## Character Stats System

### Primary Stats
- **BLOOD**: Physical prowess, violence, intimidation
- **HEART**: Social connections, empathy, persuasion  
- **MIND**: Knowledge, reasoning, investigation
- **SPIRIT**: Supernatural power, willpower, mysticism

### Circle Ratings (-3 to +3)
- **Mortalis**: Humans aware of supernatural, protecting/exploiting it
- **Night**: Former humans transformed (vampires, werewolves, ghosts)
- **Power**: Those seeking to control the city's future (wizards, oracles, immortals)
- **Wild**: Outsiders from other realms (faeries, demons, constructs)

### Circle Status (0-3)
- Represents reputation/influence within each Circle
- Status-1: Established (starting level for PCs)
- Status-2: Movers and shakers
- Status-3: Apex predators with factions

## Character Creation Rules

### Steps
1. **Pick a Playbook** (character archetype)
2. **Assign Stats** using playbook arrays
3. **Choose Moves** from playbook options
4. **Set Circle Ratings** based on playbook
5. **Establish Relationships** and assign Debts between PCs
6. **Define Look, Demeanor, Pronouns**

### Starting Resources
- **Status-1** in home Circle
- **Specific gear** per playbook
- **Debts owed to/from other PCs**
- **Intimacy moves** (unique per playbook)

## Core Systems for Implementation

### Debt System
- **Universal currency** of supernatural world
- Track who owes whom favors
- **Cash in Debts** for specific benefits:
  - Answer questions honestly
  - Arrange meetings
  - Grant boons/gifts
  - Transfer other Debts

### Harm & Healing
- **5-box harm track**: 1 Faint, 2 Serious, 2 Critical
- **Mark harm** from most severe to least
- **Armor** reduces incoming harm
- **Scars** can negate harm at cost of permanent stat reduction
- **s-harm** (stun) for non-lethal effects

### Corruption Track
- **5-box advancement track**
- Triggered by playbook-specific corruption conditions
- Unlocks **corruption advances** (powerful but costly abilities)
- Eventually leads to **retiring as a threat**

### Intimacy System
- Triggered during moments of emotional/physical closeness
- **Both parties must agree** it occurred
- Activates unique **intimacy moves** per playbook
- Creates lasting mechanical bonds/benefits

## Playbooks (Character Types)

The 12 core playbooks are:
- **The Aware** (Mortalis)
- **The Hunter** (Mortalis) 
- **The Veteran** (Mortalis)
- **The Spectre** (Night)
- **The Vamp** (Night)
- **The Wolf** (Night)
- **The Oracle** (Power)
- **The Sworn** (Power)
- **The Wizard** (Power)
- **The Fae** (Wild)
- **The Imp** (Wild)
- **The Tainted** (Wild)

## Advancement System
- **Standard advances**: +1 stat, new moves, +1 Circle rating
- **Circle advancement**: Gain Status within Circles
- **Corruption advancement**: Powerful but corrupting abilities
- **End moves**: Triggered when character dies/retires

## Session Structure
- **Episodes**: Individual game sessions
- **Seasons**: Story arcs spanning multiple episodes
- **City Hubs**: Focal locations that drive conflicts
- **Faction Turns**: Between-session politics resolution

---

## Detailed Mechanics (Sections to be populated from PDF processing)

### Basic Moves

#### Turn to Violence
- **Trigger:** When you turn to violence
- **Roll:** Blood
- **Hit:** You inflict harm as established. Opposition chooses 1: inflict harm on you, put you in a bad spot, create opening to flee
- **10+:** You also choose 1: inflict terrible harm (+1 harm), take something from them, create opportunity for ally

#### Escape a Situation
- **Trigger:** When you take advantage of an opening to escape a situation
- **Roll:** Blood
- **Hit:** You get away and choose 1. On 7-9, MC also chooses 1: suffer harm, end up in dangerous situation, leave something behind, owe NPC Debt, mark corruption

#### Persuade an NPC
- **Trigger:** When you persuade an NPC with seduction, promises, or threats
- **Roll:** Heart
- **Special:** Invoke Debt for +3 (max +4)
- **Hit:** They do as you ask. **7-9:** They counter with demands first

#### Mislead, Distract, or Trick
- **Trigger:** When you try to mislead, distract, or trick someone
- **Roll:** Mind
- **Hit:** They are fooled. **10+:** Pick 3, **7-9:** Pick 2: create opportunity, expose weakness, confuse them, avoid entanglement

#### Figure Someone Out
- **Trigger:** When you try to figure someone out
- **Roll:** Mind
- **Special:** If in their Circle, ask additional question even on miss
- **Hit:** Ask 2. **7-9:** They ask 1 of you: Who's pulling strings? What's your beef? What do you want? What do you worry about? How could I get you to...? How could I put you in Debt?

#### Keep Your Cool
- **Trigger:** When things get real and you keep your cool
- **Roll:** Spirit
- **10+:** All's well. **7-9:** MC tells you the cost

#### Let It Out
- **Trigger:** When you let out the power within you
- **Roll:** Spirit
- **Special:** Choose ability from playbook before rolling
- **Hit:** Mark corruption and activate ability with complications. **10+:** Ignore corruption or complications

#### Lend a Hand or Get in the Way
- **Trigger:** When you help/hinder after PC has rolled
- **Roll:** Their Circle
- **Hit:** Give +1 or -2 to their roll. **7-9:** Expose yourself to danger

### Circle Moves

#### Put a Face to a Name
- **Trigger:** When you put a name to a face or vice versa
- **Roll:** Their Circle
- **Hit:** Learn their reputation. **10+:** You've dealt with them before - learn something useful or they owe you Debt

#### Hit the Streets
- **Trigger:** When you hit the streets to get what you need
- **Roll:** Their Circle (name who you're going to)
- **Hit:** They're available and have the stuff. **7-9:** Choose 1: they have problems, more costly than expected

#### Study a Place of Power
- **Trigger:** When you study a sanctuary, gathering spot, or place of power
- **Roll:** Circle that controls it
- **Hit:** See reality underneath - MC reveals hidden area/NPC/item. **10+:** Ask relevant question about Circle politics, take +1 forward

### Debt Moves

#### Cash in a Debt
**Make a PC:** Answer honestly, do favor, lend hand, get in way, erase/transfer Debt
**Make an NPC:** Answer honestly, arrange meeting, grant boon, erase/transfer Debt

#### Refuse to Honor a Debt
- **Roll:** Status difference
- **Hit:** Weasel out for now but still owe. **7-9:** Owe additional Debt or mark corruption
- **Miss:** Honor in full or erase all Debts from their Circle and take -1 ongoing Status

### City Moves (Status-1)

#### Weaken Someone's Standing
- **Roll:** Status in their Circle
- **Hit:** They take -1 ongoing during faction turn. **10+:** Enemy approaches with damaging info

#### Put Out the Word
- **Roll:** Status  
- **10+:** Shows up with ally for Debt. **7-9:** Rival has it, wants favor+Debt. **Miss:** Arrives with strings attached

#### Consult Your Contacts
- **Roll:** Status in Circle
- **Hit:** Ask 3, hold 1-2. Spend hold for 10+ when info aids move
- Questions: What conflict? What happened to X? What's X up to? Who's responsible? Who has Debt on X?

### Playbook Details

#### The Sworn (Power Circle)
- **Stats:** Blood 1, Heart 0, Mind 1, Spirit -1
- **Circle Ratings:** Mortalis 0, Night 0, Power 1, Wild -1
- **Starting Status:** Power 1, others 0
- **Gear:** Apartment, car, smartphone, legendary weapon
- **Vows:** Choose 3 from: protect innocent, show no mercy to enemies, obey orders, show no weakness, ask nothing for self, seek purity
- **Legendary Weapon:** Unique weapon with supernatural properties
- **Corruption Trigger:** Breaking vows or working against masters

#### Standard Advancement Track (All Playbooks)
- +1 Status (max+1) - appears 3 times
- Playbook-specific moves - usually 2 slots
- Cross-playbook moves - usually 2 slots
- Circle or special advancement

#### Post-5-Advances Options
- +1 any Circle (max+3) - usually 2-3 slots
- Circle Status-2
- Advance 3 basic moves - usually 2 slots
- Playbook-specific options (workshop, sanctum, etc.)
- Retire to safety or change playbook

### GM Tools & City Generation

#### MC Agendas
- Make the city political and dark
- Keep PCs' lives out of control and evolving
- Play to find out what happens

#### MC Principles
- Address characters not players
- Push characters together across boundaries
- Cloak moves in darkness and shadow
- Detail NPCs who matter
- Treat everyone by station and status
- Ask loads of questions, build on answers
- Be fan of player characters
- Dirty hands of all involved
- Give everything a price, even friendship
- Give players chance to take lead

#### MC Basic Moves
- Inflict harm or corruption
- Surface conflict ancient or modern
- Put someone in danger
- Propose opportunity with cost
- Reveal deal done in absence
- Turn move back on them
- Offer or claim debt owed
- Mobilize resources shift odds
- Paint city in magical tones
- Lock down exploit claim place of power
- Tell consequences and ask
- Activate stuff downside

#### City Hubs
- **Art District** (Wild): Dream-fueled dystopia, themes of gentrification and artistic chaos
- **City Hall** (Mortalis): Supernatural bureaucracy, paperwork power
- **Downtown** (Night): Violent streets, territorial disputes
- **University** (Power): Knowledge power, research secrets

### Faction System

#### Faction Attributes
- **Size (1-4):** Active core membership (15-100+ members)
- **Strength (1-4):** Motivation and coordination level
- **Assets:** Tangible resources with tags (+veteran hunters, +necromantic rituals)
- **Stance:** Striving, Maintaining, or Collapsing
- **Goal:** Concrete objective unique to each faction

#### Faction Advancement Tracks
- **Recruitment Track:** 3 boxes, fills to increase Size +1
- **Resource Track:** 3 boxes, fills to increase Strength +1 and gain new asset

#### Asset Security States
- **Secure:** Default state with confidence
- **Vulnerable:** Exposed to attacks

#### Faction Moves
- **Openly Attack a Faction:** Roll Size difference, target sacrifices asset or loses Size
- **Develop Infrastructure:** Commit asset, roll Strength, mark tracks or secure assets
- **Goad an Opponent:** Roll Strength difference, cause embarrassment or trap
- **Track Someone Down:** Roll with modifiers, find and confront targets
- **Seize by Force:** Take vulnerable assets through violence
- **Search the City:** Roll Size to find information or artifacts
- **Offer Passage:** Roll Size to move people in/out of city

### NPC Generation

#### NPC Data Structure
- **Name:** String identifier
- **Circle:** Mortalis, Night, Power, or Wild
- **Status:** 0-3 (represents influence level)
- **Drive:** Core motivation that moves them to action
- **Debts:** Track what they owe/are owed
- **Relationships:** Connections to PCs and other NPCs
- **Harm Track:** Based on supernatural nature
- **Resistances/Vulnerabilities:** Armor effects

#### Sample NPC Drives
- Avenge my sister
- Find way to stay on earth
- Expand my territory
- Dethrone the summer king
- Protect my family
- Gain political power
- Find truth about my past
- Escape my dark patron
- Build criminal empire
- Master forbidden magic

#### NPC Harm Rules
- **Mortals:** Max 3 harm, 1-2 healing per session
- **Supernatural:** Max 4-7 harm, 2-3 healing per session
- **Resistances:** Act as armor
- **Vulnerabilities:** +1 harm or armor piercing

#### Key NPCs by Circle
**Chicago Mortalis:**
- Veradis Amarin (Status-2): Protect Annalise
- Odette Johnson (Status-1): Wipe out bloodsuckers

**Chicago Night:**
- Brian Boru (Status-1): Find lighter side of shadows
- Melissa Mitchell (Status-2): Protect what's mine

**Chicago Power:**
- Annalise Weber (Status-1): See true face of city
- Clove Williams (Status-2): Free the city of Chicago

**Chicago Wild:**
- Vivian Chen (Status-2): Obtain vengeance on killer (Dragon)
- Keeran Murphy (Status-1): Find fun in every moment (Phooka)

## Advanced Mechanics

### Status-Based Move Access
- **Status-0:** Basic moves, some circle moves
- **Status-1:** City moves (Weaken Standing, Put Out Word, Consult Contacts, Tend Business)
- **Status-2:** Advanced city moves (Marshal Forces, Lay Claim)
- **Status-3:** Faction moves, lead factions

### Corruption Advances by Playbook
- **The Aware:** Free Agent - refuse Debt as 10+
- **The Fae:** Everyone's Got One - curse with elemental vulnerability
- **The Hunter:** Death Wish - suffer harm for someone nearby
- **The Imp:** On the Shit List - declare someone enemy of your people
- **The Oracle:** Various prophecy-related abilities
- **The Spectre:** Trauma system integration
- **The Sworn:** Enhanced combat and authority moves
- **The Tainted:** Contract manipulation abilities
- **The Vamp:** Blood magic and feeding enhancements
- **The Veteran:** Enhanced gear and tactical moves
- **The Wizard:** Spell advancement and familiar bonding
- **The Wolf:** Pack mechanics and transformation control

### Circle-Specific Faction Moves
**Mortalis:** Resource commitment, close ranks, reveal scale, hasten disaster
**Night:** Unreasonable sacrifice, seize territory, broker deals, sacrifice for greater good
**Power:** Taste of power, exploit feuds, call in favors, use city resources
**Wild:** Stunning violence, take down a peg, seal deals, subvert expectations

### Group Combat Rules
- **Small:** 8 or fewer people
- **Medium:** 9-16 people
- **Large:** 16-30 people
- **Huge:** 30+ people
- Size differences modify harm by ±1
- Groups can suffer up to 6-harm regardless of size

### Weapon Tags
- **Range:** Hand, Close, Near, Far
- **Special:** +area (affects groups), +fragile (breaks after use)
- **Harm scales:** 0-4 harm typical range

---

*Complete reference extracted from Urban Shadows 2E Core Book*
*Ready for FoundryVTT module implementation*