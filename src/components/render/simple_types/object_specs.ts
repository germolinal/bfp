export type SimpleObjectCategory =
    "Other" |
    "Bathtub" |
    "Bed" |
    "Chair" |
    "Dishwasher" |
    "Fireplace" |
    "Oven" |
    "Refrigerator" |
    "Sink" |
    "Sofa" |
    "Stairs" |
    "Storage" |
    "Stove" |
    "Table" |
    "Television" |
    "Toilet" |
    "WasherDryer";

interface ObjectTypeCore {
    type: SimpleObjectCategory,
}



export type TableOptions = {
    subtype: "Other" | "Dining" | "Coffee",
    shape: "Other" | "Rectangular" | "Circular" | "LShaped",
} & ObjectTypeCore

export type SofaOptions = {
    subtype:
    "Other" | "Rectangular" | "SingleSeat" | "LShaped" | "LShapedExtension"
} & ObjectTypeCore

export type StorageOptions = {
    subtype: "Cabinet" | "Shelf",
} & ObjectTypeCore


export type ChairOptions = {
    subtype: "Other" | "Dining" | "Office" | "Stool" | "Swivel",
    arms: "Existing" | "Missing",
    back: "Existing" | "Missing",
    legs: "Four" | "Three" | "Star" | "Other"
} & ObjectTypeCore

export type ToiletOptions = ObjectTypeCore
export type SinkOptions = ObjectTypeCore
export type WasherDryerOptions = ObjectTypeCore
export type OvenOptions = ObjectTypeCore
export type StoveOptions = ObjectTypeCore
export type DishwasherOptions = ObjectTypeCore
export type RefrigeratorOptions = ObjectTypeCore
export type TelevisionOptions = ObjectTypeCore
export type BedOptions = ObjectTypeCore
export type BathtubOptions = ObjectTypeCore
export type FireplaceOptions = ObjectTypeCore

type ObjectSpec =
    TableOptions |
    SofaOptions |
    ChairOptions |
    SinkOptions |
    WasherDryerOptions |
    OvenOptions |
    StoveOptions |
    DishwasherOptions |
    RefrigeratorOptions |
    TelevisionOptions |
    BedOptions |
    BathtubOptions |
    FireplaceOptions |
    StorageOptions;

export type { ObjectSpec as default }




