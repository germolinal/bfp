
/**The Surface is in contact with the Ground */
export type BoundaryGround = {
    /** The discriminant used */
    type: "Ground"
}

/** The Surface leads to another space whose temperature
and other properties are part of the simulation */
export type BoundarySpace = {
    /** The discriminant used */
    type: "Space",
    /** The name of the space */
    space: string,
}

/**
 *  The surface leads to an environment with no wind or sun, and with a fixed
    mean-radiant and dry bulb temperature
     
    This object is useful for defining surfaces that lead to spaces that 
    we one is not interested in modelling; for example, a wall that separates
    an apartment's room with the hall of the building. In that case, we don't 
    need to simulate the temperature of the hall... but we can assume a certain
    temperature.
 */
interface BoundaryAmbientTemperature {
    /** The discriminant used */
    type: "AmbientTemperature"
    /** The temperature on the other side */
    temperature: Number
}

type Boundary = BoundaryGround | BoundarySpace | BoundaryAmbientTemperature;

export type { Boundary as default };