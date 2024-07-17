import type ObjectSpec from "./object_specs";

type Point = {
    x: number,
    y: number,
    z: number,
}

/**
 * An object
 */
type SimpleObject = {
    /**
     * The space in which the object is located
     */
    space: string; 
    /**
     * The name of the object
     */
    name: string;

    /**The size of the object (x, y, z) */
    dimensions: Point;

    /**The location of the center of the objeect */
    location: Point;

    /**The up */
    up: Point;

    /**Front */
    front: Point;

    /**The specification of the object */
    specifications: ObjectSpec,
}

export type { SimpleObject as default }