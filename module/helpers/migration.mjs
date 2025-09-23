/**
 * Migration utilities for Urban Shadows PBTA module
 * Handles asset path migrations and world data updates
 */

const MODULE_ID = "urban-shadows-pbta";
const TARGET_VERSION = "2.0.0";

/**
 * Asset path mapping from old paths to new paths
 * Based on asset reorganization from root-level to organized /assets/ structure
 */
const ASSET_PATH_MAPPINGS = {
  // Gear icons moved from root icons/gear/ to assets/cc-assets/gear/
  "icons/gear/": "assets/cc-assets/gear/",

  // Module images moved from root to assets/cc-assets/
  "cover.webp": "assets/cc-assets/cover.webp",
  "header-bg.webp": "assets/cc-assets/header-bg.webp",
  "header-bg-thumb.webp": "assets/cc-assets/header-bg-thumb.webp",
  "package_image.webp": "assets/cc-assets/package_image.webp",
  "package_image_thumb.webp": "assets/cc-assets/package_image_thumb.webp",

  // Screenshots moved from root to assets/original/
  "screenshot.webp": "assets/original/screenshot.webp",
  "screenshots-city-hub-faction.webp": "assets/original/screenshots-city-hub-faction.webp",
  "screenshots-compendium.webp": "assets/original/screenshots-compendium.webp"
};

/**
 * Main migration function to be called on world ready
 */
export async function migrateWorldData() {
  const currentVersion = game.settings.get(MODULE_ID, "worldMigrationVersion");

  // Skip migration if already at target version or higher
  if (!isNewerVersion(TARGET_VERSION, currentVersion)) {
    console.log(`Urban Shadows PBTA | World migration not needed. Current: ${currentVersion}, Target: ${TARGET_VERSION}`);
    return;
  }

  console.log(`Urban Shadows PBTA | Starting world migration from ${currentVersion} to ${TARGET_VERSION}`);

  try {
    ui.notifications.info("Urban Shadows PBTA | Starting world data migration...", { permanent: true });

    // Perform migration steps
    await migrateAssetPaths();

    // Update migration version
    await game.settings.set(MODULE_ID, "worldMigrationVersion", TARGET_VERSION);

    console.log(`Urban Shadows PBTA | Migration completed successfully`);
    ui.notifications.info("Urban Shadows PBTA | World migration completed successfully!");

  } catch (error) {
    console.error("Urban Shadows PBTA | Migration failed:", error);
    ui.notifications.error("Urban Shadows PBTA | Migration failed. Check console for details.");
    throw error;
  }
}

/**
 * Migrate asset paths across all document types
 */
async function migrateAssetPaths() {
  const migrationPromises = [];

  // Migrate actors (including city hubs)
  migrationPromises.push(migrateActorAssets());

  // Migrate items (gear with icons)
  migrationPromises.push(migrateItemAssets());

  // Migrate scenes (backgrounds)
  migrationPromises.push(migrateSceneAssets());

  // Run all migrations in parallel
  await Promise.all(migrationPromises);
}

/**
 * Migrate actor asset paths
 */
async function migrateActorAssets() {
  const actors = game.actors.contents;
  const updates = [];

  for (const actor of actors) {
    const actorUpdates = {};

    // Check actor image
    if (actor.img && needsPathUpdate(actor.img)) {
      actorUpdates.img = updateAssetPath(actor.img);
    }

    // Check prototype token image
    if (actor.prototypeToken?.texture?.src && needsPathUpdate(actor.prototypeToken.texture.src)) {
      actorUpdates["prototypeToken.texture.src"] = updateAssetPath(actor.prototypeToken.texture.src);
    }

    // Special handling for city hub header backgrounds
    if (actor.type === "urban-shadows-pbta.city-hub" && actor.system?.headerBackground) {
      if (needsPathUpdate(actor.system.headerBackground)) {
        actorUpdates["system.headerBackground"] = updateAssetPath(actor.system.headerBackground);
      }
    }

    if (Object.keys(actorUpdates).length > 0) {
      updates.push({ _id: actor.id, ...actorUpdates });
    }
  }

  if (updates.length > 0) {
    console.log(`Urban Shadows PBTA | Updating ${updates.length} actors with new asset paths`);
    await Actor.updateDocuments(updates);
  }
}

/**
 * Migrate item asset paths
 */
async function migrateItemAssets() {
  const items = game.items.contents;
  const updates = [];

  for (const item of items) {
    const itemUpdates = {};

    // Check item image
    if (item.img && needsPathUpdate(item.img)) {
      itemUpdates.img = updateAssetPath(item.img);
    }

    if (Object.keys(itemUpdates).length > 0) {
      updates.push({ _id: item.id, ...itemUpdates });
    }
  }

  if (updates.length > 0) {
    console.log(`Urban Shadows PBTA | Updating ${updates.length} items with new asset paths`);
    await Item.updateDocuments(updates);
  }
}

/**
 * Migrate scene asset paths
 */
async function migrateSceneAssets() {
  const scenes = game.scenes.contents;
  const updates = [];

  for (const scene of scenes) {
    const sceneUpdates = {};

    // Check scene background
    if (scene.background?.src && needsPathUpdate(scene.background.src)) {
      sceneUpdates["background.src"] = updateAssetPath(scene.background.src);
    }

    // Check scene foreground
    if (scene.foreground && needsPathUpdate(scene.foreground)) {
      sceneUpdates.foreground = updateAssetPath(scene.foreground);
    }

    if (Object.keys(sceneUpdates).length > 0) {
      updates.push({ _id: scene.id, ...sceneUpdates });
    }
  }

  if (updates.length > 0) {
    console.log(`Urban Shadows PBTA | Updating ${updates.length} scenes with new asset paths`);
    await Scene.updateDocuments(updates);
  }
}

/**
 * Check if an asset path needs updating
 */
function needsPathUpdate(path) {
  if (!path || typeof path !== "string") return false;

  // Normalize path to check for old patterns
  const normalizedPath = path.replace(/^modules\/urban-shadows-pbta\//, "");

  // Check if path contains old patterns that need updating
  return Object.keys(ASSET_PATH_MAPPINGS).some(oldPath => {
    return normalizedPath.includes(oldPath) || normalizedPath === oldPath;
  });
}

/**
 * Update an asset path from old to new format
 */
function updateAssetPath(oldPath) {
  if (!oldPath || typeof oldPath !== "string") return oldPath;

  let newPath = oldPath;
  const modulePrefix = "modules/urban-shadows-pbta/";

  // Extract the module prefix if present
  const hasModulePrefix = newPath.startsWith(modulePrefix);
  const pathWithoutPrefix = hasModulePrefix ? newPath.substring(modulePrefix.length) : newPath;

  // Apply all path mappings to the path without prefix
  let updatedPath = pathWithoutPrefix;
  for (const [oldPattern, newPattern] of Object.entries(ASSET_PATH_MAPPINGS)) {
    if (updatedPath.includes(oldPattern)) {
      updatedPath = updatedPath.replace(oldPattern, newPattern);
      console.log(`Urban Shadows PBTA | Updating path: ${oldPath} -> ${modulePrefix}${updatedPath}`);
      break; // Only apply the first matching pattern
    }
  }

  // Reconstruct the full path
  newPath = hasModulePrefix ? modulePrefix + updatedPath : updatedPath;

  return newPath;
}

/**
 * Add a new asset path mapping
 * Useful for discovering and adding new mappings during migration
 */
export function addAssetPathMapping(oldPath, newPath) {
  ASSET_PATH_MAPPINGS[oldPath] = newPath;
  console.log(`Urban Shadows PBTA | Added asset path mapping: ${oldPath} -> ${newPath}`);
}

/**
 * Export utility functions for console testing
 */
export const migrationUtils = {
  dryRunMigration,
  addAssetPathMapping,
  needsPathUpdate,
  updateAssetPath: (path) => updateAssetPath(path)
};

/**
 * Dry run migration - reports what would be changed without making changes
 */
export async function dryRunMigration() {
  console.log("Urban Shadows PBTA | Starting dry run migration...");

  const findings = {
    actors: [],
    items: [],
    scenes: []
  };

  // Check actors
  for (const actor of game.actors.contents) {
    const issues = [];

    if (actor.img && needsPathUpdate(actor.img)) {
      issues.push(`img: ${actor.img} -> ${updateAssetPath(actor.img)}`);
    }

    if (actor.prototypeToken?.texture?.src && needsPathUpdate(actor.prototypeToken.texture.src)) {
      issues.push(`prototypeToken.texture.src: ${actor.prototypeToken.texture.src} -> ${updateAssetPath(actor.prototypeToken.texture.src)}`);
    }

    if (actor.type === "urban-shadows-pbta.city-hub" && actor.system?.headerBackground && needsPathUpdate(actor.system.headerBackground)) {
      issues.push(`system.headerBackground: ${actor.system.headerBackground} -> ${updateAssetPath(actor.system.headerBackground)}`);
    }

    if (issues.length > 0) {
      findings.actors.push({ name: actor.name, id: actor.id, issues });
    }
  }

  // Check items
  for (const item of game.items.contents) {
    const issues = [];

    if (item.img && needsPathUpdate(item.img)) {
      issues.push(`img: ${item.img} -> ${updateAssetPath(item.img)}`);
    }

    if (issues.length > 0) {
      findings.items.push({ name: item.name, id: item.id, issues });
    }
  }

  // Check scenes
  for (const scene of game.scenes.contents) {
    const issues = [];

    if (scene.background?.src && needsPathUpdate(scene.background.src)) {
      issues.push(`background.src: ${scene.background.src} -> ${updateAssetPath(scene.background.src)}`);
    }

    if (scene.foreground && needsPathUpdate(scene.foreground)) {
      issues.push(`foreground: ${scene.foreground} -> ${updateAssetPath(scene.foreground)}`);
    }

    if (issues.length > 0) {
      findings.scenes.push({ name: scene.name, id: scene.id, issues });
    }
  }

  console.log("Urban Shadows PBTA | Dry run results:", findings);
  return findings;
}