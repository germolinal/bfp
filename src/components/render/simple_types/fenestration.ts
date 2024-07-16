import type Boundary from "./boundary";

export type FenestrationType =
    "Window" |
    "Door" |
    "Opening";



type Fenestration = {
    /** The name of the surface */
    name: string;

    /**  An array of Numbers representing the vertices of the
    surface. The length of this array must be divisible by 3. */
    vertices: number[],

    /** The name of the construction in the SimpleModel's
    Construction array */
    construction: string,

    /**A reference to the Boundary in front of the Surface*/
    front_boundary: Boundary;

    // /**If true, the simulation will assume that Zero short-wave solar radiation
    // is received by the front side of this surface*/
    // front_receives_sun?: boolean;

    // /**If true, the simulation will assume that Zero short-wave solar radiation
    // is received by the back side of this surface*/
    // back_receives_sun?: boolean,

    /**A reference to the Boundary in back of the Surface*/
    back_boundary: Boundary,

    category: FenestrationType,
}

export type { Fenestration as default }