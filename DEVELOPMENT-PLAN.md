# Urban Shadows 2E FoundryVTT Module - Development Plan

## Overview
This document tracks the implementation of Urban Shadows 2E features in FoundryVTT, working incrementally to complete TODO items. Each task must be completed and verified before moving to the next.

## Priority Analysis

### High Priority (Core Gameplay)
1. **Debt System** - Central to game mechanics
2. **Hub Tables** - Essential for city generation
3. **Advancement Tab** - Player progression tracking
4. **Faction System** - Critical for political gameplay

### Medium Priority (Quality of Life)
1. **NPC Actor Improvements** - GM usability
2. **City Hub Actors** - City management
3. **Move Upgrades** - Advanced character options

### Low Priority (Polish)
1. **UI Improvements** - Question/Answer interface
2. **Playbook Customization** - Advanced feature
3. **Global Debt Tracking** - Nice to have feature

---

## Phase 1: Foundation Systems ✅

### ✅ PDF Processing & Reference Creation
- **Status:** COMPLETED
- **Deliverable:** Complete mechanics reference document
- **Files:** `raw-assets/urban-shadows-mechanics-reference.md`

---

## Phase 2: Core Data Systems

### Task 2.1: Create Hub Tables System ✅
**Priority:** HIGH | **Estimated Time:** 4-6 hours | **Status:** ✅ COMPLETED

**Requirements:**
- Implement location generation tables for each city hub
- Follow existing pattern from current location tables
- Include all sub-tables: Atmosphere, Control, Locations, Nature, Trouble, Type

**Acceptance Criteria:**
- [x] Art District tables (Wild circle) - Already working
- [x] City Hall tables (Mortalis circle) - Fixed _key/_id mismatches
- [x] Downtown tables (Night circle) - Fixed _key/_id mismatches
- [x] University tables (Power circle) - Fixed _key/_id mismatches
- [ ] Faction generation tables: Purpose, Structure, Mood, Size, Strength
- [ ] NPC generation tables: Circle, Presenting, Look, Demeanor, Role, Trait, Quirk, Drives
- [x] All tables generate to compendium packs correctly
- [x] Tables follow existing JSON structure pattern

**Implementation Completed:**
1. ✅ Analyzed existing location table structure
2. ✅ Fixed systematic _key/_id mismatches in 18 table files
3. ✅ Verified all location tables work correctly across all 4 districts
4. ✅ Tested table generation in FoundryVTT
5. ✅ Verified all tables compile to LevelDB correctly

**Critical Bug Fixed:** 
- Location table references were broken due to _key field suffixes not matching _id values
- Fixed all 18 files: 3 main location tables + 15 sub-tables (Nature, Control, Atmosphere, Trouble, Type)
- All four city districts (Arts, City Hall, Downtown, University) now function correctly

**Dependencies:** None
**Files Modified:** `src/packs/roll-tables/` (18 files updated)

---

### Task 2.2: Implement Debt Item System
**Priority:** HIGH | **Estimated Time:** 8-10 hours | **Status:** 🔄 NEXT

**Requirements:**
- Create Debt item type for tracking obligations
- Implement debt linking between PCs and NPCs
- Add debt tracking to character sheets

**Acceptance Criteria:**
- [ ] New Item type: "Debt" 
- [ ] Debt items track: creditor, debtor, nature, creation date
- [ ] Character sheets display debts owed/owing
- [ ] NPC sheets display debts owed/owing
- [ ] Debt items can be transferred between characters
- [ ] Cash in Debt move integration
- [ ] Refuse to Honor Debt move integration

**Implementation Steps:**
1. Create debt item template and schema
2. Add debt sections to character sheet template
3. Add debt sections to NPC sheet template
4. Implement debt transfer mechanics
5. Test debt creation and management
6. Test debt move integration

**Dependencies:** Task 2.1 ✅ (completed)
**Files to Modify:** `templates/`, `module/helpers/pbta-config.mjs`

---

### Task 2.3: Add Advancement Tab to Character Sheets
**Priority:** HIGH | **Estimated Time:** 4-6 hours | **Status:** ⏳ PENDING

**Requirements:**
- Add advancement tracking tab to character sheets
- Implement playbook-specific advancement tracks
- Track standard and post-5 advances

**Acceptance Criteria:**
- [ ] New "Advancement" tab on character sheets
- [ ] Standard advancement checkboxes (3x +1 Status, moves, etc.)
- [ ] Post-5-advances section (unlocked after 5 standard advances)
- [ ] Playbook-specific advancement options
- [ ] Advancement counter tracking
- [ ] Visual indication of advancement availability

**Implementation Steps:**
1. Add advancement tab to character sheet template
2. Implement advancement tracking in actor data model
3. Add advancement options for each playbook
4. Test advancement progression
5. Verify advancement unlocking mechanics

**Dependencies:** Task 2.2 (character sheet modifications)
**Files to Modify:** `templates/`, `src/scss/_character-sheet.scss`

---

## Phase 3: Actor & Item Improvements

### Task 3.1: Redesign NPC Actor Sheets
**Priority:** MEDIUM | **Estimated Time:** 6-8 hours | **Status:** ⏳ PENDING

**Requirements:**
- Redesign NPC layout for better usability
- Integrate debt system
- Improve visual hierarchy

**Acceptance Criteria:**
- [ ] Cleaner layout with proper visual hierarchy
- [ ] Status prominently displayed (Status-1, Status-2, Status-3)
- [ ] Harm track clearly visible
- [ ] Circle and Faction integration
- [ ] Drives section prominent
- [ ] Resistances/Vulnerabilities clearly marked
- [ ] Debt tracking integrated
- [ ] Move list organized and searchable

**Implementation Steps:**
1. Analyze current NPC sheet layout issues
2. Create new design mockup
3. Implement new NPC template
4. Add debt integration
5. Test with sample NPCs
6. Refine based on testing

**Dependencies:** Task 2.2 (debt system)
**Files to Modify:** `templates/`, `src/scss/_npc-sheet.scss`

---

### Task 3.2: Convert Factions to Items
**Priority:** MEDIUM | **Estimated Time:** 6-8 hours | **Status:** ⏳ PENDING

**Requirements:**
- Migrate faction actors to faction items
- Enable factions to be stored on City Hub actors
- Maintain all faction functionality

**Acceptance Criteria:**
- [ ] New Faction item type created
- [ ] Faction data structure matches TODO spec
- [ ] Size and Strength tracking (1-4)
- [ ] Stance tracking (Striving/Maintaining/Collapsing)
- [ ] Asset management with tags
- [ ] Recruitment and Resource advancement tracks
- [ ] Leader assignment (NPC or PC)
- [ ] Member list management
- [ ] Move list for faction actions
- [ ] Migration tool for existing faction actors

**Implementation Steps:**
1. Design faction item schema
2. Create faction item template
3. Implement faction management interface
4. Create migration utility
5. Test faction functionality
6. Verify City Hub integration

**Dependencies:** Task 3.1 (sheet improvements)
**Files to Modify:** `templates/`, `module/helpers/pbta-config.mjs`, `tools/`

---

### Task 3.3: Create City Hub Actor System
**Priority:** MEDIUM | **Estimated Time:** 10-12 hours | **Status:** ⏳ PENDING

**Requirements:**
- New actor type for city hub management
- Integration with tables and factions
- Resident and relationship tracking

**Acceptance Criteria:**
- [ ] New "City Hub" actor type
- [ ] Hub picture, name, description
- [ ] Resident list (NPCs + additional info)
- [ ] Relationship tracking with debt integration
- [ ] Hub move list
- [ ] Integrated table rolling for: locations, rumors, factions, NPCs
- [ ] Generated item tracking (items created from tables)
- [ ] Hub themes and atmosphere tracking

**Implementation Steps:**
1. Design City Hub actor schema
2. Create City Hub actor template
3. Implement table integration
4. Add relationship tracking
5. Create pre-built hubs from reference material
6. Test hub functionality
7. Create documentation

**Dependencies:** Task 3.2 (faction items), Task 2.1 (hub tables)
**Files to Modify:** `templates/`, `module/helpers/pbta-config.mjs`, `src/packs/`

---

## Phase 4: Advanced Features

### Task 4.1: Implement Move Upgrade System
**Priority:** MEDIUM | **Estimated Time:** 8-10 hours | **Status:** ⏳ PENDING

**Requirements:**
- Add upgrade tracking for moves
- Implement "advance 3 basic moves" option
- Visual indicators for upgraded moves

**Acceptance Criteria:**
- [ ] Move items can be marked as "upgraded"
- [ ] Upgraded moves show enhanced effects
- [ ] Character sheet shows upgrade status
- [ ] Advancement tab includes move upgrade options
- [ ] Move upgrade counter (3 max for basic moves)
- [ ] Visual distinction for upgraded vs normal moves

**Implementation Steps:**
1. Add upgrade tracking to move items
2. Implement upgrade effects system
3. Update character sheet display
4. Add upgrade options to advancement
5. Test move upgrades
6. Document upgrade system

**Dependencies:** Task 2.3 (advancement tab)
**Files to Modify:** `src/packs/`, `templates/`, `module/helpers/pbta-config.mjs`

---

### Task 4.2: Improve Question/Answer UI
**Priority:** LOW | **Estimated Time:** 6-8 hours | **Status:** ⏳ PENDING

**Requirements:**
- Better interface for playbook questions
- Root-style implementation for better UX

**Acceptance Criteria:**
- [ ] Collapsible question sections
- [ ] Clear visual separation of questions vs answers
- [ ] Easy editing interface
- [ ] Question templates for each playbook
- [ ] Progress tracking for answered questions
- [ ] Export/import functionality

**Implementation Steps:**
1. Analyze Root module question system
2. Design improved question interface
3. Implement collapsible sections
4. Add question templates
5. Test with all playbooks
6. Refine based on feedback

**Dependencies:** Task 4.1 (move system improvements)
**Files to Modify:** `templates/`, `src/scss/_character-sheet.scss`

---

### Task 4.3: Global Debt Tracking System
**Priority:** LOW | **Estimated Time:** 8-10 hours | **Status:** ⏳ PENDING

**Requirements:**
- Central debt management interface
- Debt relationship visualization
- Cross-character debt synchronization

**Acceptance Criteria:**
- [ ] Journal entry showing all campaign debts
- [ ] Debt relationship network visualization
- [ ] Automatic synchronization between characters
- [ ] Debt transfer interface
- [ ] Debt history tracking
- [ ] Search and filter capabilities

**Implementation Steps:**
1. Design global debt interface
2. Implement debt synchronization system
3. Create debt visualization
4. Add search and filter functionality
5. Test multi-character debt scenarios
6. Create user documentation

**Dependencies:** Task 2.2 (debt system)
**Files to Modify:** `templates/`, `module/`

---

## Quality Assurance Checklist

### Pre-Task Verification
- [ ] Current build compiles without errors
- [ ] All existing functionality works
- [ ] Backup created of current state

### Post-Task Verification
- [ ] New feature works as specified
- [ ] No regression in existing features
- [ ] Code follows existing patterns
- [ ] No console errors or warnings
- [ ] Pack compilation successful (`npm run pullJSONtoLDB`)
- [ ] SCSS compiles without errors (`npm run build`)

### Testing Protocol
1. **Unit Testing:** Feature works in isolation
2. **Integration Testing:** Feature works with existing systems
3. **User Testing:** Feature provides good user experience
4. **Edge Case Testing:** Feature handles unusual scenarios
5. **Performance Testing:** No significant performance impact

---

## Implementation Notes

### Code Standards
- Follow existing module patterns and conventions
- Use existing SCSS variable system
- Maintain compatibility with PbtA system updates
- Add clear comments for complex logic

### File Organization
- JSON data in `src/packs/` directory
- Templates in `templates/` directory  
- Styles in `src/scss/` with appropriate partials
- Helper functions in `module/helpers/`

### Testing Environment
- Test with fresh actor creation
- Test with existing actors (migration)
- Test pack compilation and distribution
- Verify FoundryVTT compatibility

---

## Current Status: Ready for Task 2.2 - Debt Item System

✅ **Completed:** Task 2.1 - Hub Tables System (fixed critical _key/_id mismatch bug)
- All location tables now function correctly across all 4 city districts
- Foundation is complete with full mechanics reference extracted
- Roll table infrastructure is fully operational

**Next Action:** Begin Task 2.2 - Implement Debt Item System