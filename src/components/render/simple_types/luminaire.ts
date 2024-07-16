
/**
 * A Luminaire
 */
type Luminaire = {
    /** The name of the heater */
    name: string,

    /** 
     * The name of the space in which the space is located
     * 
     * While this value might not be relevant for
     * e.g., lighting calculations, this is necessary for
     * thermal simulations, in which the heat disipated by
     * a luminaire will be disipated into the air of a thermal
     * zone. So, if this is an exterior luminaire or if no thermal
     * calculation is performed, this can be left empty. 
     * */
    target_space?: string,

    /** The maximum power consumption of this luminaire */
    max_power?: number,
}

export type { Luminaire as default }