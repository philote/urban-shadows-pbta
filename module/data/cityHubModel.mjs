/**
 * A data model for the CityHub actor
 */
export class CityHubModel extends pbta.dataModels.CharacterData {
    /**
     * @returns {any} the schema for the CityHubModel
     */
    static defineSchema() {
      const superFields = super.defineSchema();
      const fields = foundry.data.fields;
      return {
        ...superFields,
        customType: new fields.StringField({ initial: 'urban-shadows-pbta.city-hub' }),
      };
    }
  }
  