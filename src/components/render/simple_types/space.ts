
export type SpacePurpose =
    "Bathroom" |
    "Bedroom" |
    "DiningRoom" |
    "Kitchen" |
    "LivingRoom" |
    "Unidentified" |
    string
    ;


type Space = {
    /** The name of the space */
    name: string;

    /** The storey */
    storey?: number;

    /** The volume */
    volume?: number;

    /** 
     *  The purposes in a room. It can have multiple
     purposes (e.g., a Living/Dining/Kithen space)
    */
    purposes: SpacePurpose[]

    infiltration?: any

    building?: string;
}

export type { Space as default }