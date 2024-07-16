
/** A simple model of an Electric Heater. It can only heat
and has a COP of 1. */
export type ElectricHeater = {
    readonly type: "ElectricHeater",

    /** The name of the heater */
    name: string,

    /** The space this heater is haeting */
    target_space?: string,

    /** The maximum heating power of this heater */
    max_heating_power?: number,

    /** 
     * The temperature that triggers the on/off option.
     * 
     * This tempareture is 'measured' in the `target_space`. It 
     * the dry bulb tempreature in the `target_space` is below 
     * this value, the heater starts heating. 
     */
    heating_setpoint?: number,


}


/** An ideal Heating and Cooling device, with a COP of 1. */
export type IdealHeaterCooler = {

    readonly type: "IdealHeaterCooler";

    /** The name of the HVAC */
    name: string;

    /** The space this heater is haeting */
    target_space?: string;

    /** The maximum heating power of this heater */
    max_heating_power?: number;

    /** The maximum cooling power of this heater */
    max_cooling_power?: number;

    /** 
     * The temperature that triggers the on/off option.
     * 
     * This tempareture is 'measured' in the `target_space`. If 
     * the dry bulb tempreature in the `target_space` is below 
     * this value, the system starts heating. 
     */
    heating_setpoint?: number,

    /** 
    * The temperature that triggers the on/off option.
    * 
    * This tempareture is 'measured' in the `target_space`. If 
    * the dry bulb tempreature in the `target_space` is below 
    * this value, the system starts heating. 
    */
    cooling_setpoint?: number,

}

type HVAC = ElectricHeater | IdealHeaterCooler;

export type { HVAC as default };