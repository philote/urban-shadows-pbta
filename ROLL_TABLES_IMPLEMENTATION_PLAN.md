# Urban Shadows Roll Tables Implementation Plan

## Overview
Implementation of missing roll tables from the Urban Shadows City Hubs Reference document into FoundryVTT JSON format.

## Analysis Summary

### Current Status
- **Art District**: Complete (Locations, Rumors, all sub-tables)
- **City Hall**: Locations complete, missing NPCs, Factions, Rumors
- **Downtown**: Locations complete, missing NPCs, Factions, Rumors  
- **University**: Locations complete, missing NPCs, Factions, Rumors

### Table Structure Pattern
1. **Main Tables**: Reference sub-tables via `documentUuid` (following Location table pattern)
2. **Sub-tables**: Contain actual rollable content with proper weighting
3. **Weighting**: NPCs/Factions use 2d6 (results 2-12), Rumors use 1d6 (results 1-6)
4. **Folders**: Use existing hub folders

## Implementation Tasks

### Phase 1: NPCs Tables (36 tables total)
**Status**: ✅ COMPLETED

#### Art District NPCs
- [x] Main table: "Art District NPCs" (references 8 sub-tables)
- [x] Sub-table: "Art District NPCs Circle" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Presenting" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Look" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Demeanor" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Role" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Trait" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Quirk" (2d6, 11 entries)
- [x] Sub-table: "Art District NPCs Drives" (2d6, 11 entries)

#### City Hall NPCs
- [x] Main table: "City Hall NPCs" (references 8 sub-tables)
- [x] Sub-table: "City Hall NPCs Circle" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Presenting" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Look" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Demeanor" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Role" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Trait" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Quirk" (2d6, 11 entries)
- [x] Sub-table: "City Hall NPCs Drives" (2d6, 11 entries)

#### Downtown NPCs
- [x] Main table: "Downtown NPCs" (references 8 sub-tables)
- [x] Sub-table: "Downtown NPCs Circle" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Presenting" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Look" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Demeanor" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Role" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Trait" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Quirk" (2d6, 11 entries)
- [x] Sub-table: "Downtown NPCs Drives" (2d6, 11 entries)

#### University NPCs
- [x] Main table: "University NPCs" (references 8 sub-tables)
- [x] Sub-table: "University NPCs Circle" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Presenting" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Look" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Demeanor" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Role" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Trait" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Quirk" (2d6, 11 entries)
- [x] Sub-table: "University NPCs Drives" (2d6, 11 entries)

### Phase 2: Factions Tables (28 tables total)
**Status**: 🔄 IN PROGRESS (14/28 completed)

#### Art District Factions
- [x] Main table: "Art District Factions" (references 6 sub-tables)
- [x] Sub-table: "Art District Factions Purpose" (2d6, 11 entries)
- [x] Sub-table: "Art District Factions Structure" (2d6, 11 entries)
- [x] Sub-table: "Art District Factions Mood" (2d6, 11 entries)
- [x] Sub-table: "Art District Factions Size" (2d6, 11 entries)
- [x] Sub-table: "Art District Factions Strength" (2d6, 11 entries)
- [x] Sub-table: "Art District Factions The Faction..." (2d6, 11 entries)

#### City Hall Factions
- [x] Main table: "City Hall Factions" (references 6 sub-tables)
- [x] Sub-table: "City Hall Factions Purpose" (2d6, 11 entries)
- [x] Sub-table: "City Hall Factions Structure" (2d6, 11 entries)
- [x] Sub-table: "City Hall Factions Mood" (2d6, 11 entries)
- [x] Sub-table: "City Hall Factions Size" (2d6, 11 entries)
- [x] Sub-table: "City Hall Factions Strength" (2d6, 11 entries)
- [x] Sub-table: "City Hall Factions The Faction..." (2d6, 11 entries)

#### Downtown Factions
- [ ] Main table: "Downtown Factions" (references 6 sub-tables)
- [ ] Sub-table: "Downtown Factions Purpose" (2d6, 11 entries)
- [ ] Sub-table: "Downtown Factions Structure" (2d6, 11 entries)
- [ ] Sub-table: "Downtown Factions Mood" (2d6, 11 entries)
- [ ] Sub-table: "Downtown Factions Size" (2d6, 11 entries)
- [ ] Sub-table: "Downtown Factions Strength" (2d6, 11 entries)
- [ ] Sub-table: "Downtown Factions The Faction..." (2d6, 11 entries)

#### University Factions
- [ ] Main table: "University Factions" (references 6 sub-tables)
- [ ] Sub-table: "University Factions Purpose" (2d6, 11 entries)
- [ ] Sub-table: "University Factions Structure" (2d6, 11 entries)
- [ ] Sub-table: "University Factions Mood" (2d6, 11 entries)
- [ ] Sub-table: "University Factions Size" (2d6, 11 entries)
- [ ] Sub-table: "University Factions Strength" (2d6, 11 entries)
- [ ] Sub-table: "University Factions The Faction..." (2d6, 11 entries)

### Phase 3: Rumors Tables (3 tables total)
**Status**: Pending

- [ ] City Hall Rumors (1d6, 6 entries)
- [ ] Downtown Rumors (1d6, 6 entries)
- [ ] University Rumors (1d6, 6 entries)

## Technical Specifications

### File Naming Convention
- Main tables: `tables_{Hub}_NPCs_{ID}.json` / `tables_{Hub}_Factions_{ID}.json`
- Sub-tables: `tables_{Hub}_NPCs_{Column}_{ID}.json` / `tables_{Hub}_Factions_{Column}_{ID}.json`
- Rumors: `tables_{Hub}_Rumors_{ID}.json`

### ID Generation Pattern
- Use existing pattern from current tables
- **CRITICAL: Generate unique 16-character IDs for each table** (FoundryVTT requirement)
- All table `_id` fields must be exactly 16 characters long
- Maintain folder relationships

### JSON Structure
- Follow existing table structure exactly
- Main tables: `"formula": "1d1"`, references to sub-tables
- Sub-tables: `"formula": "2d6"` (NPCs/Factions) or `"1d6"` (Rumors)
- Proper weighting: each result gets `"weight": 1` and specific range

### Folder Organization
- Art District: folder ID `4wRTF9RvSOhb9bd3`
- City Hall: folder ID `L7pQ3sT6uV9wX2yA`
- Downtown: folder ID `M8qR4tU7vW0xY3zA`
- University: folder ID `N9rS5uV8wX1yY4zB`

## Progress Tracking

**Total Tables**: 67
- **Completed**: 50 (All NPCs + Art District & City Hall Factions)
- **In Progress**: Downtown & University Factions
- **Remaining**: 17

### Recently Completed
✅ **All NPCs Tables (36 tables)**: All 4 hubs complete with main tables + 8 sub-tables each
✅ **Art District Factions (7 tables)**: Main table + 6 sub-tables (Purpose, Structure, Mood, Size, Strength, The Faction...)
✅ **City Hall Factions (7 tables)**: Main table + 6 sub-tables (Purpose, Structure, Mood, Size, Strength, The Faction...)

### Next Tasks
🔄 Downtown Factions (7 tables)
⏳ University Factions (7 tables)  
⏳ Rumors Tables (3 tables): City Hall, Downtown, University

## Decisions Made

1. **Structure**: Follow Location table pattern with main tables referencing sub-tables
2. **Weighting**: Standard 2d6 distribution (2-12) for NPCs/Factions, 1d6 (1-6) for Rumors
3. **Organization**: Use existing hub folders, no cross-references between table types
4. **Naming**: Descriptive names following existing convention
5. **Data Format**: Store complex data as structured text in name/description fields
6. **UUID Length**: All table IDs must be exactly 16 characters (FoundryVTT requirement)

## Notes

- No cross-references found between NPCs/Factions and Location tables
- Each hub has identical structure but different content
- Reference document provides complete data for all missing tables
- Implementation should maintain exact die roll distributions from source