import type SimpleModel from "../components/render/simple_types/simple_model";
const model: SimpleModel = {
    buildings: [
        {
            name: "Art Deco Building",
            n_storeys: 2,
            shelter_class: "Urban",
        },
    ],
    constructions: [
        {
            name: "interior wall",
            materials: ["10cm Concrete"],
        },
        {
            name: "exterior wall",
            materials: ["20cm Concrete"],
        },
        {
            name: "Window",
            materials: ["glass"],
        },
    ],
    fenestrations: [
        {
            name: "kids - window",
            vertices: [
                0.0, 2.09, 0.83, 0.0, 2.09, 2.29, 0.0, 2.99, 2.29, 0.0,
                2.99, 0.83,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
        },
        {
            name: "Kids door",
            vertices: [
                2.98, 2.5, 0.01, 2.98, 2.5, 1.9, 2.98, 3.4, 1.9, 2.98,
                3.4, 0.01,
            ],
            construction: "interior wall",
            category: "Door",
            front_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
        },
        {
            name: "Bathroom - window",
            vertices: [
                0.0, 4.975, 1.16, 0.0, 4.975, 2.29, 0.0, 5.585, 2.29,
                0.0, 5.585, 1.16,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
        },
        {
            name: "Bathroom door",
            vertices: [
                1.92, 5.65, 0.01, 1.92, 5.65, 1.9, 1.92, 4.81, 1.9,
                1.92, 4.81, 0.01,
            ],
            construction: "interior wall",
            category: "Door",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
        },
        {
            name: "Storage door",
            vertices: [
                1.96, 4.8, 0.01, 1.96, 4.8, 1.9, 2.86, 4.8, 1.9, 2.86,
                4.8, 0.01,
            ],
            construction: "interior wall",
            category: "Door",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Space",
                space: "Storage",
            },
        },
        {
            name: "Kitchen door",
            vertices: [
                0.0, 6.2, 0.01, 0.0, 6.2, 1.9, 0.0, 7.1, 1.9, 0.0, 7.1,
                0.01,
            ],
            construction: "interior wall",
            category: "Door",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
        },
        {
            name: "Kitchen - window",
            vertices: [
                1.06, 7.67, 1.15, 1.06, 7.67, 2.29, 1.92, 7.67, 2.29,
                1.92, 7.67, 1.15,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
        },
        {
            name: "Kitchen to Laundry",
            vertices: [
                2.98, 7.03, 0.01, 2.98, 7.03, 1.9, 2.98, 6.13, 1.9,
                2.98, 6.13, 0.01,
            ],
            construction: "interior wall",
            category: "Opening",
            front_boundary: {
                type: "Space",
                space: "Laundry",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
        },
        {
            name: "Laundry - window",
            vertices: [
                3.58, 7.67, 2.0, 3.58, 7.67, 2.29, 3.78, 7.67, 2.29,
                3.78, 7.67, 2.0,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Laundry",
            },
        },
        {
            name: "Living - window north",
            vertices: [
                7.9, 7.67, 0.7, 7.9, 7.67, 2.29, 8.45, 7.67, 2.29, 8.45,
                7.67, 0.7,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
        },
        {
            name: "Living room - east 1",
            vertices: [
                8.77, 7.35, 0.7, 8.77, 7.35, 2.29, 8.77, 6.8, 2.29,
                8.77, 6.8, 0.7,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
        },
        {
            name: "Living room - east 2",
            vertices: [
                8.77, 6.4, 0.3, 8.77, 6.4, 2.29, 8.77, 5.5, 2.29, 8.77,
                5.5, 0.3,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
        },
        {
            name: "Living room - east 3",
            vertices: [
                8.77, 5.1, 0.7, 8.77, 5.1, 2.29, 8.77, 4.55, 2.29, 8.77,
                4.55, 0.7,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
        },
        {
            name: "Living room door",
            vertices: [
                4.02, 5.7, 0.01, 4.02, 5.7, 1.9, 4.02, 4.8, 1.9, 4.02,
                4.8, 0.01,
            ],
            construction: "interior wall",
            category: "Door",
            front_boundary: {
                type: "Space",
                space: "Living room",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
        },
        {
            name: "Bedroom - Window",
            vertices: [
                8.77, 2.474, 0.7, 8.77, 2.475, 2.29, 8.77, 1.265, 2.29,
                8.77, 1.265, 0.7,
            ],
            construction: "Window",
            category: "Window",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
        },
        {
            name: "Main bedroom door",
            vertices: [
                4.02, 2.5, 0.01, 4.02, 2.5, 1.9, 4.02, 3.4, 1.9, 4.02,
                3.4, 0.01,
            ],
            construction: "interior wall",
            category: "Door",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
        },
        {
            name: "Main entrance",
            vertices: [
                3.05, 1.35, 0.01, 3.05, 1.35, 1.9, 3.95, 1.35, 1.9,
                3.95, 1.35, 0.01,
            ],
            construction: "exterior wall",
            category: "Door",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Adiabatic",
            },
        },
    ],
    hvacs: [
        {
            type: "ElectricHeater",
            name: "Kids heater",
            target_space: "Kids Bedroom",
            max_heating_power: 2300.0,
            heating_setpoint: 19.0,
        },
        {
            type: "ElectricHeater",
            name: "Living room heater",
            target_space: "Living room",
            max_heating_power: 2300.0,
            heating_setpoint: 19.0,
        },
        {
            type: "ElectricHeater",
            name: "Main Bedroom heater",
            target_space: "Main Bedroom",
            max_heating_power: 2300.0,
            heating_setpoint: 19.0,
        },
    ],
    luminaires: [
        {
            name: "Kids light",
            max_power: 15.0,
            target_space: "Kids Bedroom",
        },
        {
            name: "Bathroom light",
            max_power: 5.0,
            target_space: "Bathroom",
        },
        {
            name: "Kitchen light",
            max_power: 10.0,
            target_space: "Kitchen",
        },
        {
            name: "Laundry light",
            max_power: 7.0,
            target_space: "Laundry",
        },
        {
            name: "Living room light",
            max_power: 35.0,
            target_space: "Living room",
        },
        {
            name: "Main Bedroom's light",
            max_power: 25.0,
            target_space: "Main Bedroom",
        },
        {
            name: "Hallway's light",
            max_power: 5.0,
            target_space: "Hallway",
        },
    ],
    materials: [
        {
            name: "1inch insulation",
            substance: "XPS",
            thickness: 0.025,
        },
        {
            name: "20cm Concrete",
            substance: "Concrete",
            thickness: 0.2,
        },
        {
            name: "10cm Concrete",
            substance: "Concrete",
            thickness: 0.1,
        },
        {
            name: "glass",
            substance: "glass substance",
            thickness: 0.003,
        },
    ],
    objects: [
        {
            name: "kid bed",
            dimensions: {
                x: 0.9,
                y: 1.7,
                z: 0.7,
            },
            location: {
                x: 1.05,
                y: 1.9,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "Bed",
            },
            space: "Kids Bedroom",
        },
        {
            name: "Toilet",
            dimensions: {
                x: 0.5,
                y: 0.71,
                z: 0.724,
            },
            location: {
                x: 0.4,
                y: 5.3,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "Toilet",
            },
            space: "Bathroom",
        },
        {
            name: "Sink",
            dimensions: {
                x: 0.6,
                y: 0.4,
                z: 0.25,
            },
            location: {
                x: 1.4,
                y: 5.5,
                z: 0.8,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Sink",
            },
            space: "Bathroom",
        },
        {
            name: "Bathtub",
            dimensions: {
                x: 1.8,
                y: 0.75,
                z: 0.4,
            },
            location: {
                x: 0.95,
                y: 4.2,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Bathtub",
            },
            space: "Bathroom",
        },
        {
            name: "Kitchen bench",
            dimensions: {
                x: 2.82,
                y: 0.5,
                z: 0.9,
            },
            location: {
                x: 1.56,
                y: 7.32,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Storage",
                subtype: "Cabinet",
            },
            space: "Kitchen",
        },
        {
            name: "Kitchen cabinet",
            dimensions: {
                x: 1.0,
                y: 0.5,
                z: 1.0,
            },
            location: {
                x: 2.44,
                y: 7.32,
                z: 1.7,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Storage",
                subtype: "Cabinet",
            },
            space: "Kitchen",
        },
        {
            name: "Fridge",
            dimensions: {
                x: 0.7,
                y: 0.6,
                z: 2.1,
            },
            location: {
                x: 1.66,
                y: 6.12,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Refrigerator",
            },
            space: "Kitchen",
        },
        {
            name: "Oven",
            dimensions: {
                x: 0.7,
                y: 0.7,
                z: 0.9,
            },
            location: {
                x: 0.95,
                y: 6.17,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Oven",
            },
            space: "Kitchen",
        },
        {
            name: "Hot water cylinder",
            dimensions: {
                x: 0.47,
                y: 0.47,
                z: 2.2,
            },
            location: {
                x: 0.34,
                y: 6.0,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Storage",
                subtype: "Cabinet",
            },
            space: "Kitchen",
        },
        {
            name: "Stove",
            dimensions: {
                x: 0.7,
                y: 0.7,
                z: 0.9,
            },
            location: {
                x: 0.95,
                y: 6.17,
                z: 0.9,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Stove",
            },
            space: "Kitchen",
        },
        {
            name: "Washing machine",
            dimensions: {
                x: 0.6,
                y: 0.6,
                z: 0.7,
            },
            location: {
                x: 3.64,
                y: 6.33,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: -1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "WasherDryer",
            },
            space: "Laundry",
        },
        {
            name: "Drying machine",
            dimensions: {
                x: 0.6,
                y: 0.6,
                z: 0.74,
            },
            location: {
                x: 3.64,
                y: 7.0,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: -1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "WasherDryer",
            },
            space: "Laundry",
        },
        {
            name: "Dinner table",
            dimensions: {
                x: 1.1,
                y: 1.1,
                z: 0.68,
            },
            location: {
                x: 5.2,
                y: 6.4,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "Table",
                subtype: "Other",
                shape: "Circular",
            },
            space: "Living room",
        },
        {
            name: "chair 1",
            dimensions: {
                x: 0.43,
                y: 0.52,
                z: 0.86,
            },
            location: {
                x: 4.7,
                y: 6.4,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "Chair",
                subtype: "Other",
                arms: "Missing",
                back: "Existing",
                legs: "Other",
            },
            space: "Living room",
        },
        {
            name: "chair 2",
            dimensions: {
                x: 0.43,
                y: 0.52,
                z: 0.86,
            },
            location: {
                x: 5.2,
                y: 6.94,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Chair",
                subtype: "Other",
                arms: "Missing",
                back: "Existing",
                legs: "Other",
            },
            space: "Living room",
        },
        {
            name: "chair 3",
            dimensions: {
                x: 0.43,
                y: 0.52,
                z: 0.86,
            },
            location: {
                x: 5.8,
                y: 6.4,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: -1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "Chair",
                subtype: "Other",
                arms: "Missing",
                back: "Existing",
                legs: "Other",
            },
            space: "Living room",
        },
        {
            name: "chair 4",
            dimensions: {
                x: 0.43,
                y: 0.52,
                z: 0.86,
            },
            location: {
                x: 5.2,
                y: 5.8,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Chair",
                subtype: "Other",
                arms: "Missing",
                back: "Existing",
                legs: "Other",
            },
            space: "Living room",
        },
        {
            name: "Living room sofa",
            dimensions: {
                x: 2.3,
                y: 0.52,
                z: 0.86,
            },
            location: {
                x: 7.2,
                y: 4.1,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Sofa",
                subtype: "Other",
            },
            space: "Living room",
        },
        {
            name: "Living room storage",
            dimensions: {
                x: 1.0,
                y: 0.25,
                z: 0.6,
            },
            location: {
                x: 8.1,
                y: 7.5,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Storage",
                subtype: "Shelf",
            },
            space: "Living room",
        },
        {
            name: "Living Armchair 1",
            dimensions: {
                x: 0.7,
                y: 0.62,
                z: 0.86,
            },
            location: {
                x: 7.999,
                y: 6.3,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: -0.2,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Sofa",
                subtype: "SingleSeat",
            },
            space: "Living room",
        },
        {
            name: "Living Armchair 2",
            dimensions: {
                x: 0.7,
                y: 0.62,
                z: 0.86,
            },
            location: {
                x: 6.8,
                y: 6.3,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.2,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Sofa",
                subtype: "SingleSeat",
            },
            space: "Living room",
        },
        {
            name: "Main Sofa",
            dimensions: {
                x: 0.7,
                y: 0.7,
                z: 0.7,
            },
            location: {
                x: 8.1,
                y: 3.1,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: -1.0,
                y: -1.0,
                z: 0.0,
            },
            specifications: {
                type: "Sofa",
                subtype: "Other",
            },
            space: "Main Bedroom",
        },
        {
            name: "Main bed",
            dimensions: {
                x: 1.6,
                y: 1.9,
                z: 0.7,
            },
            location: {
                x: 6.395,
                y: 1.03,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 0.0,
                y: 1.0,
                z: 0.0,
            },
            specifications: {
                type: "Bed",
            },
            space: "Main Bedroom",
        },
        {
            name: "Main wardrobe",
            dimensions: {
                x: 2.01,
                y: 0.7,
                z: 2.3,
            },
            location: {
                x: 4.35,
                y: 1.06,
                z: 0.0,
            },
            up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
            },
            front: {
                x: 1.0,
                y: 0.0,
                z: 0.0,
            },
            specifications: {
                type: "Storage",
                subtype: "Cabinet",
            },
            space: "Main Bedroom",
        },
    ],
    outputs: [
        {
            SpaceDryBulbTemperature: "Kids Bedroom",
        },
        {
            SpaceDryBulbTemperature: "Bathroom",
        },
        {
            SpaceDryBulbTemperature: "Storage",
        },
        {
            SpaceDryBulbTemperature: "Kitchen",
        },
        {
            SpaceDryBulbTemperature: "Laundry",
        },
        {
            SpaceDryBulbTemperature: "Living room",
        },
        {
            SpaceDryBulbTemperature: "Main Bedroom",
        },
        {
            SpaceDryBulbTemperature: "Hallway",
        },
    ],
    site_details: {
        altitude: 0.0,
        terrain: "City",
        latitude: -41.0,
        longitude: 174.0,
        standard_meridian: 180.0,
    },
    solar_options: {
        n_solar_irradiance_points: 10,
        solar_ambient_divitions: 300,
        solar_sky_discretization: 1,
        
    },
    spaces: [
        {
            name: "Kids Bedroom",
            volume: 19.23,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Bedroom"],
        },
        {
            name: "Bathroom",
            volume: 10.47,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Bathroom"],
        },
        {
            name: "Storage",
            volume: 3.03,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Storage"],
        },
        {
            name: "Kitchen",
            volume: 15.39,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Kitchen"],
        },
        {
            name: "Laundry",
            volume: 4.59,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Laundry"],
        },
        {
            name: "Living room",
            volume: 50.3,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["LivingRoom", "DiningRoom"],
        },
        {
            name: "Main Bedroom",
            volume: 48.0,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Bedroom"],
        },
        {
            name: "Hallway",
            volume: 15.93,
            infiltration: {
                type: "EffectiveAirLeakageArea",
                area: 0.0496,
            },
            building: "Art Deco Building",
            storey: 0,
            purposes: ["Hallway"],
        },
    ],
    surfaces: [
        {
            name: "kids - exterior",
            vertices: [
                0.0, 1.35, 0.0, 0.0, 1.35, 2.7, 0.0, 2.09, 2.29, 0.0,
                2.09, 0.83, 0.0, 2.99, 0.83, 0.0, 2.99, 2.29, 0.0, 2.09,
                2.29, 0.0, 1.35, 2.7, 0.0, 3.74, 2.7, 0.0, 3.74, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            category: "ExteriorWall",
        },
        {
            name: "kids - Bathroom",
            vertices: [
                0.0, 3.74, 0.0, 0.0, 3.74, 2.7, 1.92, 3.74, 2.7, 1.92,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            back_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            category: "InteriorWall",
        },
        {
            name: "kids - Storage",
            vertices: [
                1.92, 3.74, 0.0, 1.92, 3.74, 2.7, 2.98, 3.74, 2.7, 2.98,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Storage",
            },
            back_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            category: "InteriorWall",
        },
        {
            name: "kids - Hallway",
            vertices: [
                2.98, 1.35, 0.0, 2.98, 1.35, 2.7, 2.98, 3.74, 2.7, 2.98,
                3.74, 0.0, 2.98, 3.4, 0.01, 2.98, 3.4, 1.9, 2.98, 2.5,
                1.9, 2.98, 2.5, 0.01, 2.98, 3.4, 0.01, 2.98, 3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
            category: "InteriorWall",
        },
        {
            name: "kids - common area",
            vertices: [
                0.0, 1.35, 0.0, 0.0, 1.35, 2.7, 2.98, 1.35, 2.7, 2.98,
                1.35, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "InteriorWall",
        },
        {
            name: "kids - ceiling",
            vertices: [
                0.0, 1.35, 2.7, 2.98, 1.35, 2.7, 2.98, 3.74, 2.7, 0.0,
                3.74, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            category: "Ceiling",
        },
        {
            name: "kids - floor",
            vertices: [
                0.0, 1.35, 0.0, 2.98, 1.35, 0.0, 2.98, 3.74, 0.0, 0.0,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Kids Bedroom",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Bathroom - exterior",
            vertices: [
                0.0, 3.74, 0.0, 0.0, 3.74, 2.7, 0.0, 5.76, 2.7, 0.0,
                5.585, 2.29, 0.0, 4.975, 2.29, 0.0, 4.975, 1.16, 0.0,
                5.585, 1.16, 0.0, 5.585, 2.29, 0.0, 5.76, 2.7, 0.0,
                5.76, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            category: "ExteriorWall",
        },
        {
            name: "Bathroom - Kitchen",
            vertices: [
                0.0, 5.76, 0.0, 0.0, 5.76, 2.7, 1.92, 5.76, 2.7, 1.92,
                5.76, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            category: "InteriorWall",
        },
        {
            name: "Bathroom - Hallway",
            vertices: [
                1.92, 5.76, 0.0, 1.92, 5.76, 2.7, 1.92, 4.8, 2.7, 1.92,
                4.8, 0.0, 1.92, 4.81, 0.01, 1.92, 4.81, 1.9, 1.92, 5.65,
                1.9, 1.92, 5.65, 0.01, 1.92, 4.81, 0.01, 1.92, 4.8, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            category: "InteriorWall",
        },
        {
            name: "Bathroom - Storage",
            vertices: [
                1.92, 4.8, 0.0, 1.92, 4.8, 2.7, 1.92, 3.74, 2.7, 1.92,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Storage",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            category: "InteriorWall",
        },
        {
            name: "Bathroom - ceiling",
            vertices: [
                0.0, 3.74, 2.7, 1.92, 3.74, 2.7, 1.92, 5.76, 2.7, 0.0,
                5.76, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            category: "Ceiling",
        },
        {
            name: "Bathroom floor",
            vertices: [
                0.0, 3.74, 0.0, 1.92, 3.74, 0.0, 1.92, 5.76, 0.0, 0.0,
                5.76, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Bathroom",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Storage - Hallway",
            vertices: [
                2.98, 4.8, 0.0, 2.98, 4.8, 2.7, 2.98, 3.74, 2.7, 2.98,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Space",
                space: "Storage",
            },
            category: "InteriorWall",
        },
        {
            name: "Storage - Hallway door",
            vertices: [
                1.92, 4.8, 0.0, 1.96, 4.8, 0.01, 2.86, 4.8, 0.01, 2.86,
                4.8, 1.9, 1.96, 4.8, 1.9, 1.96, 4.8, 0.01, 1.92, 4.8,
                0.0, 1.92, 4.8, 2.7, 2.98, 4.8, 2.7, 2.98, 4.8, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Space",
                space: "Storage",
            },
            category: "InteriorWall",
        },
        {
            name: "Storage - ceiling",
            vertices: [
                1.92, 3.74, 2.7, 2.98, 3.74, 2.7, 2.98, 4.8, 2.7, 1.92,
                4.8, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Storage",
            },
            category: "Ceiling",
        },
        {
            name: "Storage - floor",
            vertices: [
                1.92, 3.74, 0.0, 2.98, 3.74, 0.0, 2.98, 4.8, 0.0, 1.92,
                4.8, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Storage",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Kitchen - exterior west",
            vertices: [
                0.0, 5.76, 0.0, 0.0, 6.2, 0.01, 0.0, 7.1, 0.01, 0.0,
                7.1, 1.9, 0.0, 6.2, 1.9, 0.0, 6.2, 0.01, 0.0, 5.76, 0.0,
                0.0, 5.76, 2.7, 0.0, 7.67, 2.7, 0.0, 7.67, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            category: "ExteriorWall",
        },
        {
            name: "Kitchen - exterior north",
            vertices: [
                0.0, 7.67, 0.0, 0.0, 7.67, 2.7, 1.06, 7.67, 2.29, 1.06,
                7.67, 1.15, 1.92, 7.67, 1.15, 1.92, 7.67, 2.29, 1.06,
                7.67, 2.29, 0.0, 7.67, 2.7, 2.98, 7.67, 2.7, 2.98, 7.67,
                0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            category: "ExteriorWall",
        },
        {
            name: "Kitchen - laundry",
            vertices: [
                2.98, 7.67, 0.0, 2.98, 7.67, 2.7, 2.98, 6.03, 2.7, 2.98,
                6.03, 0.0, 2.98, 6.13, 0.01, 2.98, 6.13, 1.9, 2.98,
                7.03, 1.9, 2.98, 7.03, 0.01, 2.98, 6.13, 0.01, 2.98,
                6.03, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Laundry",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            category: "InteriorWall",
        },
        {
            name: "Kitchen - Hallway small",
            vertices: [
                2.98, 6.03, 0.0, 2.98, 6.03, 2.7, 2.98, 5.76, 2.7, 2.98,
                5.76, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Laundry",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            category: "InteriorWall",
        },
        {
            name: "Kitchen - ceiling",
            vertices: [
                0.0, 5.76, 2.7, 2.98, 5.76, 2.7, 2.98, 7.67, 2.7, 0.0,
                7.67, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            category: "Ceiling",
        },
        {
            name: "Kitchen - floor",
            vertices: [
                0.0, 5.76, 0.0, 2.98, 5.76, 0.0, 2.98, 7.67, 0.0, 0.0,
                7.67, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Kitchen",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Laundry - exterior",
            vertices: [
                2.98, 7.67, 0.0, 2.98, 7.67, 2.7, 4.02, 7.67, 2.7, 3.78,
                7.67, 2.29, 3.58, 7.67, 2.29, 3.58, 7.67, 2.0, 3.78,
                7.67, 2.0, 3.78, 7.67, 2.29, 4.02, 7.67, 2.7, 4.02,
                7.67, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Laundry",
            },
            category: "ExteriorWall",
        },
        {
            name: "Laundry - livingroom",
            vertices: [
                4.02, 7.67, 0.0, 4.02, 7.67, 2.7, 4.02, 6.03, 2.7, 4.02,
                6.03, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Living room",
            },
            back_boundary: {
                type: "Space",
                space: "Laundry",
            },
            category: "InteriorWall",
        },
        {
            name: "Laundry - Hallway",
            vertices: [
                2.98, 6.03, 0.0, 2.98, 6.03, 2.7, 4.02, 6.03, 2.7, 4.02,
                6.03, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Laundry",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
            category: "InteriorWall",
        },
        {
            name: "Laundry - ceiling",
            vertices: [
                2.98, 6.03, 2.7, 4.02, 6.03, 2.7, 4.02, 7.67, 2.7, 2.98,
                7.67, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Laundry",
            },
            category: "Ceiling",
        },
        {
            name: "Laundry - floor",
            vertices: [
                2.98, 6.03, 0.0, 4.02, 6.03, 0.0, 4.02, 7.67, 0.0, 2.98,
                7.67, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Laundry",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Living room - exterior north",
            vertices: [
                4.02, 7.67, 0.0, 4.02, 7.67, 2.7, 8.77, 7.67, 2.7, 8.45,
                7.67, 2.29, 7.9, 7.67, 2.29, 7.9, 7.67, 0.7, 8.45, 7.67,
                0.7, 8.45, 7.67, 2.29, 8.77, 7.67, 2.7, 8.77, 7.67, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
            category: "ExteriorWall",
        },
        {
            name: "Living room - exterior east",
            vertices: [
                8.77, 7.67, 0.0, 8.77, 7.67, 2.7, 8.77, 7.35, 2.29,
                8.77, 7.35, 0.7, 8.77, 6.8, 0.7, 8.77, 6.8, 2.29, 8.77,
                6.4, 2.29, 8.77, 6.4, 0.3, 8.77, 5.5, 0.3, 8.77, 5.5,
                2.29, 8.77, 5.1, 2.29, 8.77, 5.1, 0.7, 8.77, 4.55, 0.7,
                8.77, 4.55, 2.29, 8.77, 5.1, 2.29, 8.77, 5.5, 2.29,
                8.77, 6.4, 2.29, 8.77, 6.8, 2.29, 8.77, 7.35, 2.29,
                8.77, 7.67, 2.7, 8.77, 3.74, 2.7, 8.77, 3.74, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
            category: "ExteriorWall",
        },
        {
            name: "Living room - main bedroom",
            vertices: [
                4.02, 3.74, 0.0, 4.02, 3.74, 2.7, 8.77, 3.74, 2.7, 8.77,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Living room",
            },
            back_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            category: "InteriorWall",
        },
        {
            name: "Living room - Hallway",
            vertices: [
                4.02, 6.03, 0.0, 4.02, 5.7, 0.01, 4.02, 4.8, 0.01, 4.02,
                4.8, 1.9, 4.02, 5.7, 1.9, 4.02, 5.7, 0.01, 4.02, 6.03,
                0.0, 4.02, 6.03, 2.7, 4.02, 3.74, 2.7, 4.02, 3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Living room",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
            category: "InteriorWall",
        },
        {
            name: "Living room - ceiling",
            vertices: [
                4.02, 3.74, 2.7, 8.77, 3.74, 2.7, 8.77, 7.67, 2.7, 4.02,
                7.67, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Living room",
            },
            category: "Ceiling",
        },
        {
            name: "Living room - floor",
            vertices: [
                4.02, 3.74, 0.0, 8.77, 3.74, 0.0, 8.77, 7.67, 0.0, 4.02,
                7.67, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Living room",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Main Bedroom - exterior",
            vertices: [
                8.77, 3.74, 0.0, 8.77, 3.74, 2.7, 8.77, 0.0, 2.7, 8.77,
                1.265, 2.29, 8.77, 2.475, 2.29, 8.77, 2.474, 0.7, 8.77,
                1.265, 0.7, 8.77, 1.265, 2.29, 8.77, 0.0, 2.7, 8.77,
                0.0, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Outdoor",
            },
            back_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            category: "ExteriorWall",
        },
        {
            name: "Main Bedroom - Hallway",
            vertices: [
                4.02, 3.74, 0.0, 4.02, 3.4, 0.01, 4.02, 2.5, 0.01, 4.02,
                2.5, 1.9, 4.02, 3.4, 1.9, 4.02, 3.4, 0.01, 4.02, 3.74,
                0.0, 4.02, 3.74, 2.7, 4.02, 1.35, 2.7, 4.02, 1.35, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
            category: "ExteriorWall",
        },
        {
            name: "Main Bedroom - common area",
            vertices: [
                4.02, 0.0, 0.0, 4.02, 0.0, 2.7, 8.77, 0.0, 2.7, 8.77,
                0.0, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "InteriorWall",
        },
        {
            name: "Living room - common area small",
            vertices: [
                4.02, 1.35, 0.0, 4.02, 1.35, 2.7, 4.02, 0.0, 2.7, 4.02,
                0.0, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "InteriorWall",
        },
        {
            name: "Main Bedroom - ceiling",
            vertices: [
                4.02, 0.0, 2.7, 8.77, 0.0, 2.7, 8.77, 3.74, 2.7, 4.02,
                3.74, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            category: "Ceiling",
        },
        {
            name: "Main Bedroom - floor",
            vertices: [
                4.02, 0.0, 0.0, 8.77, 0.0, 0.0, 8.77, 3.74, 0.0, 4.02,
                3.74, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Main Bedroom",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
        {
            name: "Hallway - common area small",
            vertices: [
                2.98, 1.35, 0.0, 2.98, 1.35, 2.7, 4.02, 1.35, 2.7, 4.02,
                1.35, 0.0, 3.95, 1.35, 0.01, 3.95, 1.35, 1.9, 3.05,
                1.35, 1.9, 3.05, 1.35, 0.01, 3.95, 1.35, 0.01, 4.02,
                1.35, 0.0,
            ],
            construction: "exterior wall",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorWall",
        },
        {
            name: "Hallway - ceiling",
            vertices: [
                2.98, 1.35, 2.7, 4.02, 1.35, 2.7, 4.02, 6.03, 2.7, 2.98,
                6.03, 2.7, 2.98, 5.76, 2.7, 1.92, 5.76, 2.7, 1.92, 4.8,
                2.7, 2.98, 4.8, 2.7,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Adiabatic",
            },
            back_boundary: {
                type: "Space",
                space: "Hallway",
            },
            category: "Ceiling",
        },
        {
            name: "Hallway - floor",
            vertices: [
                2.98, 1.35, 0.0, 4.02, 1.35, 0.0, 4.02, 6.03, 0.0, 2.98,
                6.03, 0.0, 2.98, 5.76, 0.0, 1.92, 5.76, 0.0, 1.92, 4.8,
                0.0, 2.98, 4.8, 0.0,
            ],
            construction: "interior wall",
            front_boundary: {
                type: "Space",
                space: "Hallway",
            },
            back_boundary: {
                type: "Adiabatic",
            },
            category: "ExteriorFloor",
        },
    ],
    substances: [
        {
            type: "Normal",
            name: "Concrete",
            thermal_conductivity: 1.63,
            specific_heat_capacity: 900.0,
            density: 2400.0,
            front_thermal_absorbtance: 0.9,
            back_thermal_absorbtance: 0.9,
        },
        {
            type: "Normal",
            name: "XPS",
            thermal_conductivity: 0.035,
            specific_heat_capacity: 900.0,
            density: 30.0,
            front_thermal_absorbtance: 0.9,
            back_thermal_absorbtance: 0.9,
        },
        {
            type: "Normal",
            name: "glass substance",
            thermal_conductivity: 1.0,
            specific_heat_capacity: 1.4,
            density: 800.0,
            front_solar_absorbtance: 0.1,
            back_solar_absorbtance: 0.1,
            solar_transmittance: 0.8,
            front_thermal_absorbtance: 0.84,
            back_thermal_absorbtance: 0.84,
        },
    ],
};

export default model