// priority: 2
"use strict";

StartupEvents.registry('item', event => {
	ContentPacks.invoke('registerItem', 'pre', event)
	registerBetterEndItems(event)
    registerGTCEuItems(event)
    registerTFGItems(event)
	ContentPacks.invoke('registerItem', 'post', event)
})

StartupEvents.registry('block', event => {
	ContentPacks.invoke('registerBlock', 'pre', event)
    registerTFGBlocks(event)
	registerBetterEndBlocks(event)
	ContentPacks.invoke('registerBlock', 'post', event)
})

StartupEvents.registry('entity_type', event => {
	ContentPacks.invoke('registerEntityType', 'pre', event)
	registerTFGEntityTypes(event)
	ContentPacks.invoke('registerEntityType', 'post', event)
})

BlockEvents.modification(event => {
	registerAdAstraBlockModifications(event)
	registerSpeciesBlockModifications(event)
})

ItemEvents.modification(event => {
	registerBeneathItemModifications(event)
	registerCreateItemModifications(event)
	registerFirmalifeItemModifications(event)
	registerGTCEuItemModifications(event)
	registerMinecraftItemModifications(event)
})

StartupEvents.registry('fluid', event => {
	registerTFGFluids(event)
	registerAE2Fluids(event)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	registerGTCEuRecipeTypes(event)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	registerGTCEuMachines(event)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
	registerAE2TagPrefixes(event)
	registerTFCTagPrefixes(event)
	registerGTCEuTagPrefixes(event)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
	ContentPacks.invoke('registerGtMaterial', 'pre', event)
	registerAdAstraMaterials(event)
	registerAE2Materials(event)
	registerCreateMaterials(event)
	registerTFCMaterials(event)
	registerGTCEuMaterials(event)
	registerGreateMaterials(event)
	registerTFGMaterials(event)
	registerTFGNuclearMaterials(event)
	ContentPacks.invoke('registerGtMaterial', 'post', event)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
	registerTFCIconSets(event)
})

GTCEuStartupEvents.materialModification(event => {
	registerGTCEuMaterialModification(event)
	registerGreateMaterialModification(event)
})

GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
	registerTFGDimensionMarkers(event)
})

GTCEuStartupEvents.registry("gtceu:element", event => {
	registerTFGElement(event)
})

Platform.mods.primitive_creatures.name = "Primitive Creatures";
Platform.mods.tfg.name = "TerraFirmaGreg";
Platform.mods.kubejs.name = "TerraFirmaGreg";
Platform.mods.wan_ancient_beasts.name = "Wan's Ancient Beasts";
