/**
 * Allows the UrbanShadowsActor to be extended in the Hooks
 *
 * @param {game.pbta.documents.ActorPbta} Base
 * @returns {UrbanShadowsActor}
 */
export function UrbanShadowsActorMixin(Base) {
  return class UrbanShadowsActor extends Base {
    /** @override */
    static getDefaultArtwork(actorData) {
      if (actorData.type === "urban-shadows-pbta.city-hub") {
        const imgSrc = `modules/urban-shadows-pbta/assets/header-bg.webp`;
        return {
          img: imgSrc,
          texture: {
            src: imgSrc,
          },
        };
      }

      return {
        img: this.DEFAULT_ICON,
        texture: {
          src: this.DEFAULT_ICON,
        },
      };
    }
  };
}
