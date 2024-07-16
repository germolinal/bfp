import type Boundary from "./boundary";

export type SurfaceType =
    "ExteriorWall" |
    "InteriorWall" |
    "GroundFloor" |
    "ExteriorFloor" |
    "InteriorFloor" |
    "Ceiling" |
    "Roof" |
    "Other";


export default interface Surface {
    /** The name of the surface */
    name: string;

    /**  An array of Numbers representing the vertices of the
    surface. The length of this array must be divisible by 3. */
    vertices: number[],

    /** The name of the construction in the SimpleModel's
    Construction array */
    construction: string,


    /**If true, the simulation will assume that Zero short-wave solar radiation
     is received by the front side of this surface*/
    front_receives_sun?: boolean;

    /**If true, the simulation will assume that Zero short-wave solar radiation
     is received by the back side of this surface*/
    back_receives_sun?: boolean,

    /** The Boundary in front of the Surface*/
    front_boundary: Boundary;

    /** The Boundary in back of the Surface*/
    back_boundary: Boundary,

    /** 
     The Surface Category. 
     
     This field does not affect the simulations, as 
     it was designed to be used based on conventions (see
     [`SurfaceType`] documentation). So, if no [`SurfaceType`]
     is assigned, we cannot tell you what to do.
    */
    category?: SurfaceType,
}

