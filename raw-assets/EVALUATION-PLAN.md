# Urban Shadows 2E Module Evaluation Plan

## Executive Summary

This document outlines a comprehensive plan to evaluate and update the Urban Shadows 2E FoundryVTT module based on the official core book. The evaluation will be conducted in stages to ensure accuracy, minimize errors, and maintain system integrity.

## Evaluation Methodology

### Principles
1. **No Assumptions**: All content will be verified against the official core book
2. **Research-Based**: When unsure, research thoroughly or ask clarifying questions
3. **Systematic Approach**: Work through components methodically by logical groupings
4. **Error Prevention**: Use controlled changes and validation at each stage
5. **Documentation**: Track all changes and decisions for transparency

### Approach
- **Stage-by-Stage**: Complete each stage fully before moving to the next
- **Validation**: After each stage, verify changes work correctly
- **Baseline Documentation**: Document current state before making changes
- **Incremental Updates**: Make small, controlled changes rather than large overhauls

## Evaluation Stages

### Stage 1: Core System Mechanics (Priority: Critical)
**Duration**: 2-3 hours
**Status**: Not Started

#### Scope
- Character sheet configuration (pbta-config.mjs)
- Basic stats (Blood, Heart, Mind, Spirit)
- Circle stats (Mortalis, Night, Power, Wild)
- Roll mechanics and results ranges
- Stat advancement ranges and mechanics
- Corruption system implementation

#### Deliverables
- [ ] Verified all stats match official ranges and mechanics
- [ ] Confirmed roll result ranges (Miss: 6-, Weak Hit: 7-9, Strong Hit: 10+)
- [ ] Validated corruption track implementation
- [ ] Checked circle advancement mechanics
- [ ] Documented any required changes

#### Success Criteria
- Character sheet functions correctly with official rules
- All stats and mechanics match the core book exactly
- No functional regressions

### Stage 2: Basic Moves (Priority: High)
**Duration**: 3-4 hours
**Status**: Not Started

#### Scope
- All basic moves available to all characters
- Move text, mechanics, and results
- Roll triggers and stat associations
- Move categories and organization

#### Key Moves to Verify
- Hit the Streets
- Persuade an NPC
- Keep Your Cool
- Mislead, Distract, or Trick
- Figure Someone Out
- Seize by Force
- Escape a Situation
- Turn to Violence
- Let It Out
- Lend a Hand or Get in the Way

#### Deliverables
- [ ] Complete audit of all basic moves
- [ ] Verified move text matches official book
- [ ] Confirmed stat associations and mechanics
- [ ] Updated any outdated content
- [ ] Organized moves according to official structure

#### Success Criteria
- All basic moves function correctly
- Move text and mechanics match official book
- No missing or incorrect moves

### Stage 3: Circle Moves (Priority: High)
**Duration**: 2-3 hours
**Status**: Not Started

#### Scope
- Mortalis circle moves
- Night circle moves
- Power circle moves
- Wild circle moves
- Circle advancement mechanics

#### Key Moves to Verify
- Put a Name to a Face (Mortalis)
- Escape a Situation (Night)
- Study a Place of Power (Power)
- Offer Passage (Wild)

#### Deliverables
- [ ] Complete audit of all circle moves
- [ ] Verified move mechanics and stat associations
- [ ] Confirmed circle advancement integration
- [ ] Updated any outdated content

#### Success Criteria
- All circle moves function correctly
- Circle advancement works as intended
- Move distribution matches official book

### Stage 4: Debt Moves (Priority: Medium)
**Duration**: 1-2 hours
**Status**: Not Started

#### Scope
- All debt-related moves
- Debt currency mechanics
- Social obligation system

#### Key Moves to Verify
- Cash in a Debt
- Do Someone a Favor
- Refuse to Honor a Debt

#### Deliverables
- [ ] Complete audit of debt moves
- [ ] Verified debt mechanics implementation
- [ ] Confirmed social currency features
- [ ] Updated any outdated content

#### Success Criteria
- Debt system functions correctly
- All debt moves work as intended
- Social mechanics are properly represented

### Stage 5: City/Faction Moves (Priority: Medium)
**Duration**: 2-3 hours
**Status**: Not Started

#### Scope
- City hub moves
- Faction interaction moves
- Location-based mechanics

#### Key Moves to Verify
- Welcome to My Office
- Chaos is a Ladder
- Up for Grabs
- Openly Attack a Faction

#### Deliverables
- [ ] Complete audit of city/faction moves
- [ ] Verified location mechanics
- [ ] Confirmed faction system integration
- [ ] Updated any outdated content

#### Success Criteria
- City and faction moves work correctly
- Location mechanics are properly implemented
- Faction system is accurate

### Stage 6: Playbook Evaluation (Priority: High)
**Duration**: 8-12 hours (1-2 hours per playbook)
**Status**: Not Started

#### Approach
Evaluate each playbook individually in the following order:
1. **The Aware** (Mortalis-focused, good starting point)
2. **The Hunter** (Mortalis-focused, straightforward)
3. **The Veteran** (Mortalis-focused, simpler mechanics)
4. **The Vamp** (Night-focused, complex politics)
5. **The Wolf** (Night-focused, territory mechanics)
6. **The Spectre** (Night-focused, unique mechanics)
7. **The Wizard** (Power-focused, spellcasting)
8. **The Oracle** (Power-focused, divination)
9. **The Tainted** (Power-focused, corruption)
10. **The Fae** (Wild-focused, exile mechanics)
11. **The Imp** (Wild-focused, binding mechanics)
12. **The Sworn** (Mixed circles, oath mechanics)

#### For Each Playbook
- [ ] Verify starting moves (usually 2-3)
- [ ] Check all playbook-specific moves
- [ ] Confirm corruption moves
- [ ] Validate end move mechanics
- [ ] Review intimacy move
- [ ] Check starting gear and relationships
- [ ] Verify advancement options
- [ ] Confirm circle associations

#### Success Criteria
- Each playbook functions correctly
- All moves match official book
- Character creation works properly
- Advancement systems function

### Stage 7: Equipment and Gear (Priority: Medium)
**Duration**: 2-3 hours
**Status**: Not Started

#### Scope
- Weapons and their stats
- Equipment and tools
- Playbook-specific gear
- Debt items and favors

#### Deliverables
- [ ] Complete audit of all equipment
- [ ] Verified weapon stats and mechanics
- [ ] Confirmed gear availability and organization
- [ ] Updated any outdated content

#### Success Criteria
- All equipment functions correctly
- Weapon stats match official book
- Gear is properly organized

### Stage 8: City Hubs and Tables (Priority: Low)
**Duration**: 3-4 hours
**Status**: Not Started

#### Scope
- City hub locations
- Random generation tables
- NPC tables
- Faction tables
- Location atmosphere tables

#### Deliverables
- [ ] Complete audit of city hubs
- [ ] Verified random tables accuracy
- [ ] Confirmed table organization
- [ ] Updated any outdated content

#### Success Criteria
- City hubs function correctly
- Random tables produce appropriate results
- Content matches official book

### Stage 9: System Integration and Testing (Priority: Critical)
**Duration**: 2-3 hours
**Status**: Not Started

#### Scope
- Full system integration testing
- Character creation workflow
- Gameplay mechanics testing
- Performance validation

#### Deliverables
- [ ] Complete end-to-end testing
- [ ] Verified all systems work together
- [ ] Confirmed performance is acceptable
- [ ] Documented any remaining issues

#### Success Criteria
- All systems work together correctly
- No regressions in functionality
- Performance is acceptable

## Risk Management

### High-Risk Areas
1. **PbtA System Integration**: Changes to core mechanics could break compatibility
2. **Character Sheet Configuration**: Errors here affect all characters
3. **Pack Data Integrity**: Corrupted packs could lose game content
4. **Playbook Complexity**: Each playbook has unique mechanics

### Mitigation Strategies
1. **Backup Current Version**: Create full backup before starting
2. **Version Control**: Use git commits for each stage
3. **Incremental Testing**: Test after each major change
4. **Rollback Plan**: Be prepared to revert changes if needed

## Change Management

### Documentation Requirements
- Document all changes made
- Note any deviations from official book
- Record decisions and rationale
- Track any custom modifications

### Validation Process
1. **Syntax Checking**: Ensure all JSON is valid
2. **Functional Testing**: Test changes in FoundryVTT
3. **Content Verification**: Compare against official book
4. **User Experience**: Ensure changes improve usability

## Timeline and Resources

### Estimated Total Duration: 25-35 hours
- **Stage 1**: 2-3 hours
- **Stage 2**: 3-4 hours
- **Stage 3**: 2-3 hours
- **Stage 4**: 1-2 hours
- **Stage 5**: 2-3 hours
- **Stage 6**: 8-12 hours
- **Stage 7**: 2-3 hours
- **Stage 8**: 3-4 hours
- **Stage 9**: 2-3 hours

### Resource Requirements
- Access to Urban Shadows 2E official core book
- FoundryVTT development environment
- PbtA system for testing
- Git for version control
- Time for thorough testing

## Success Metrics

### Quantitative Metrics
- [ ] 100% of basic moves verified
- [ ] 100% of circle moves verified
- [ ] 100% of playbooks evaluated
- [ ] 0 critical bugs introduced
- [ ] All pack data validates correctly

### Qualitative Metrics
- [ ] Module accurately represents official rules
- [ ] User experience is improved or maintained
- [ ] Documentation is complete and accurate
- [ ] Changes are well-tested and stable

## Next Steps

1. **Review and Approve Plan**: Confirm this plan meets requirements
2. **Create Backup**: Full backup of current module state
3. **Begin Stage 1**: Start with core system mechanics
4. **Regular Check-ins**: Review progress and adjust as needed
5. **Final Review**: Comprehensive review before deployment

## Questions for Clarification

1. Are there any specific areas of concern from the current implementation?
2. Should we prioritize certain playbooks over others?
3. Are there any custom modifications that should be preserved?
4. What is the preferred timeline for completion?
5. Are there any testing requirements beyond functional testing?

---

*This evaluation plan provides a systematic approach to ensuring the Urban Shadows 2E module accurately reflects the official core book while maintaining quality and stability.*