import type Surface from "./surface"
import type Fenestration from "./fenestration"
import type HVAC from "./hvac"
import type Luminaire from "./luminaire";
import type Space from "./space";
import type SimpleObject from "./object";
import type { output } from "three/examples/jsm/nodes/Nodes.js";

/**
 * A description of a SimpleModel
 */
type SimpleModel = {
    /** The name of the model */
    name?: string;

    buildings: any[];

    constructions: any[];

    materials: any[];

    outputs: any[];
    site_details: any;
    solar_options: any;
    substances: any[];

    /** The surfaces in the model*/
    surfaces: Surface[];

    /** The fenestrations */
    fenestrations: Fenestration[];

    /** Luminaires */
    luminaires: Luminaire[];

    /** The HVACs in the building */
    hvacs: HVAC[];

    /** The spaces */
    spaces: Space[];

    /**The furniture and appliances in the property */
    objects: SimpleObject[];

}

export interface DrawableModel {
    surfaces: Surface[];
    fenestrations: Fenestration[];
    objects: SimpleObject[];
}

export type { SimpleModel as default } 