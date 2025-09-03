// priority: 1
// @ts-check
"use strict";

// I had hoped that the base class would channel the type annotations automatically
// here, but it seems that we need to define them again every time...

ContentPacks.add(new class AmbrosiaContentPack extends ContentPackBase {
    /** @type {"pre" | "post"} */
    prio = "post";

    AmbrosiaFluid = 'tfg:ambrosia';

    /**
     * @override
     * @param {any} event
     * // And the probejs typings are lacking, so can't even use the "proper" type for the event.
     * */
    registerGtMaterial(event) {
        event.create(this.AmbrosiaFluid)
            .liquid()
            .color(0xFFAA00)
    }
}());