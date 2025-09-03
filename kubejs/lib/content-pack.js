// priority: 0
// @ts-check
"use strict";

class ContentPacks {
    /** @type ContentPackBase[] */
    static packs = [];
    
    /**
     * Calls the named function in all the packs
     * if the pack's priority matches the given priority.
     * @param {string} functionName
     * @param {"pre" | "post"} prio
     * @param {"registerItem" | "registerBlock" | "registerEntityType" | "registerGtMaterial" | "registerItemTag" | "registerBlockTag" | "registerFluidTag" | "registerRecipe"} event */
    static invoke(functionName, prio, event) {
        for (const pack of ContentPacks.packs) {
            if (pack.prio === prio) {
                pack[functionName](event);
            }
        }
    }
    
    /** @param {ContentPackBase} pack */
    static add(pack) {
        ContentPacks.packs.push(pack);
    }
}

class ContentPackBase {
    /** @type {"pre" | "post"} */
    prio = "post";

    //#region Startup script

    /** @param {Registry.Item} event */
    registerItem(event) {}
    
    /** @param {Registry.Block} event */
    registerBlock(event) {}
    
    /** @param {Registry.EntityType} event */
    registerEntityType(event) {}
    
    /** @param {Internal.GTRegistryEventJS<any, any>} event */
    registerGtMaterial(event) {}

    //#endregion

    //#region Server script

    /** @param {TagEvent.Item} event */
    registerItemTag(event) {}

    /** @param {TagEvent.Block} event */
    registerBlockTag(event) {}

    /** @param {TagEvent.Fluid} event */
    registerFluidTag(event) {}

    /** @param {Internal.RecipesEventJS} event */
    registerRecipe(event) {}

    //#endregion

    // TODO: Rest of the events
}