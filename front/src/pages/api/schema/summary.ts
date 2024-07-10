export async function GET({  }) {
    return new Response(
        JSON.stringify({
            "layers": [
                {
                    "name": "internal elements",
                    "data": [
                        {
                            "name": "household composition",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "dwelling typology",
                            "domains": [
                                "acoustic",
                                "warmness"
                            ]
                        },
                        {
                            "name": "love for music",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "sensitivity to noise",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "lifestyle",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "times of occupancy",
                            "domains": [
                                "acoustic",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "sensitivity to odours and dust",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "thermal preference",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "budget",
                            "domains": [
                                "warmness"
                            ]
                        }
                    ]
                },
                {
                    "name": "environmental cues",
                    "data": [
                        {
                            "name": "site characteristics",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "proximity to neighbours",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "pets",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "doors between spaces",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "acoustic insulation",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "streets nearby",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "size of the space",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "neighbourhood demographics",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "neighbourhood characteristics",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "condensation and mould",
                            "domains": [
                                "air quality",
                                "warmness"
                            ]
                        },
                        {
                            "name": "colour of the space",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "availability of windows and skylights",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "ventilation system",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "materials perceived as humid",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "awareness of air pollution",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "cleanability of the space",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "dust and smoke",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "thermal insulation",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "orientation",
                            "domains": [
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "heating and cooling system",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "thermal mass",
                            "domains": [
                                "coolness"
                            ]
                        },
                        {
                            "name": "affective attributes",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "materials that feel warm",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "floor number",
                            "domains": [
                                "coolness"
                            ]
                        },
                        {
                            "name": "views",
                            "domains": [
                                "daylight"
                            ]
                        },
                        {
                            "name": "protection from moisture",
                            "domains": [
                                "warmness"
                            ]
                        },
                        {
                            "name": "weather sounds",
                            "domains": [
                                "warmness"
                            ]
                        }
                    ]
                },
                {
                    "name": "objective indoor climatic factors",
                    "data": [
                        {
                            "name": "acoustic absorption",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "breezes",
                            "domains": [
                                "air quality",
                                "coolness"
                            ]
                        },
                        {
                            "name": "air temperature",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "relative humidity",
                            "domains": [
                                "air quality",
                                "coolness"
                            ]
                        },
                        {
                            "name": "exposure to solar radiation",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "floor contact temperature",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "mean radiant temperature",
                            "domains": [
                                "coolness"
                            ]
                        },
                        {
                            "name": "direction of the light",
                            "domains": [
                                "daylight"
                            ]
                        },
                        {
                            "name": "direct vs diffuse light",
                            "domains": [
                                "daylight"
                            ]
                        },
                        {
                            "name": "air leakage",
                            "domains": [
                                "warmness"
                            ]
                        },
                        {
                            "name": "bed temperature",
                            "domains": [
                                "warmness"
                            ]
                        }
                    ]
                },
                {
                    "name": "perceptions",
                    "data": [
                        {
                            "name": "loudness vs origin",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "bothering others",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "acoustic privacy",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "the sound of silence",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "sense of community",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "feeling of confinement",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "cleanliness of the space",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "daylight sufficiency",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "thermal sensation",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "odours",
                            "domains": [
                                "air quality"
                            ]
                        },
                        {
                            "name": "sensation when entering a space",
                            "domains": [
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "sense of connection with the exterior",
                            "domains": [
                                "daylight"
                            ]
                        },
                        {
                            "name": "attractiveness of the space",
                            "domains": [
                                "daylight"
                            ]
                        },
                        {
                            "name": "glare",
                            "domains": [
                                "daylight"
                            ]
                        }
                    ]
                },
                {
                    "name": "trade-offs",
                    "data": [
                        {
                            "name": "air quality vs acoustic performance",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "thermal comfort vs acoustic performance",
                            "domains": [
                                "acoustic",
                                "coolness"
                            ]
                        },
                        {
                            "name": "complete silence vs sounds of nature",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "loss of views",
                            "domains": [
                                "acoustic",
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "openness of the space",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "safety",
                            "domains": [
                                "acoustic",
                                "coolness"
                            ]
                        },
                        {
                            "name": "location",
                            "domains": [
                                "acoustic"
                            ]
                        },
                        {
                            "name": "aesthetics",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "nuisances and lack of safety",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "thermal comfort vs air quality",
                            "domains": [
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "increased maintenance and reduced durability",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "exposure to wind",
                            "domains": [
                                "air quality",
                                "coolness"
                            ]
                        },
                        {
                            "name": "uncomfortable amount of clothing",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "daylight vs thermal comfort",
                            "domains": [
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "coolness vs warmness",
                            "domains": [
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "loss of visual privacy",
                            "domains": [
                                "coolness",
                                "daylight"
                            ]
                        },
                        {
                            "name": "light pollution",
                            "domains": [
                                "coolness"
                            ]
                        },
                        {
                            "name": "utility bills",
                            "domains": [
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "bugs",
                            "domains": [
                                "coolness"
                            ]
                        },
                        {
                            "name": "damage to objects in the house",
                            "domains": [
                                "daylight"
                            ]
                        },
                        {
                            "name": "energy efficiency",
                            "domains": [
                                "warmness"
                            ]
                        }
                    ]
                },
                {
                    "name": "expected outcomes",
                    "data": [
                        {
                            "name": "temporary",
                            "domains": [
                                "acoustic",
                                "air quality"
                            ]
                        },
                        {
                            "name": "passive design",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "effective and simple systems",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "warmness"
                            ]
                        },
                        {
                            "name": "systems that do not fail",
                            "domains": [
                                "acoustic",
                                "warmness"
                            ]
                        }
                    ]
                },
                {
                    "name": "comfort",
                    "data": [
                        {
                            "name": "freedom to do what you want wherever you want",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "mental wellbeing",
                            "domains": [
                                "acoustic",
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        },
                        {
                            "name": "physical wellbeing",
                            "domains": [
                                "air quality",
                                "coolness",
                                "daylight",
                                "warmness"
                            ]
                        }
                    ]
                }
            ]
        })
    )
}