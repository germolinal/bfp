import type { APIRoute } from 'astro';


export const GET: APIRoute = ({ params }) => {

    const id = params.id!
    return new Response(
        JSON.stringify({
            success: true,
            description: allLayers[id]
        })
    )
}

export function getStaticPaths() {
    return Object.keys(allLayers).map((id: string) => {
        return {
            params: { id }
        }
    })
}

const allLayers: any = {
    "comfort": "\u003cp\u003eComfort is the state of the mind felt by individuals who\nare not perceiving any nuisances \u003cem\u003eright-here-right-now\u003c/em\u003e (\u003ca href=\"layer=perceptions\"\u003eperceptions\u003c/a\u003e),\ndo not expect to perceive any nuisances in the future (\u003ca href=\"layer=expected_outcomes\"\u003eexpected outcomes\u003c/a\u003e),\nand did not make any significant sacrifices (\u003ca href=\"layer=trade-offs\"\u003etrade-offs\u003c/a\u003e) in order to\nbe in their current state.\u003c/p\u003e\n\u003cp\u003eComfort is a goal in itself, and not a means to anything.\nPeople seek comfort simply because they feel like it is\nsomething good.\u003c/p\u003e\n",
    "environmental_cues": "\u003cp\u003eEnvironmental cues are all those physical elements of the\nenvironment that, even if hard or impossible to quantify, are\nused by people both consciously and unconsciously. Together with\n\u003ca href=\"layer=objective_indoor_climatic_factors\"\u003eObjective Climatic Factors\u003c/a\u003e,\nEnvironmental cues contribute to the mixture of inputs used by the brain to\ngenerate the \u003ca href=\"layer=comfort\"\u003efeeling of comfort\u003c/a\u003e.\u003c/p\u003e\n\u003cp\u003eA conscious use of environmental cues happens, for instance,\nwhen purchasing a dwelling. People might check whether the\nwindows in a certain room are of a decent size and not obstructed\nin order to infer whether there will be good daylight.\u003c/p\u003e\n\u003cp\u003eAn unconscious use of environmental cues happens, for instance,\nwhen people’s thermal sensation votes are affected by the\nappearance of the space. This effect, we believe, is explained\nby people’s trained intuition. For instance, it would\nseem that respondents tend to relate warm air with polluted\nair. This link might be related to the common experience of\nentering poorly ventilated crowded rooms (e.g. arriving late to\nclass or to a meeting), in which the air is commonly warm and polluted.\nIn contrast, it is rare to get into a space where the air is cold\nand polluted.\u003c/p\u003e\n",
    "expected_outcomes": "\u003cp\u003eWhile \u003ca href=\"layer=perceptions\"\u003eperceptions\u003c/a\u003e dwell in the present and\n\u003ca href=\"layer=trade-offs\"\u003etrade-offs\u003c/a\u003e dwell in the past,\nexpected outcomes reflect the fact that people make decisions based on\nthe future as well. In this regard, they are constantly aware of\nwhat might happen, estimating the level of comfort that they may feel\nin the future.\u003c/p\u003e\n\u003cp\u003eThis is translated into a desire for comfort\nall the time in all the locations of the dwelling that they might visit. This should hopefully mean\n\u003ca href=\"code=passive_design\"\u003edwellings that do not depend too much on external systems to be comfortable\u003c/a\u003e,\nor dwellings that are equipped with \u003ca href=\"code=effective_and_simple_systems\"\u003eeffective and simple systems\u003c/a\u003e that allow fixing potentially uncomfortable situations and\n\u003ca href=\"code=systems_that_do_not_fail\"\u003esystems that do not fail\u003c/a\u003e. If none of these\nthree conditions are available, people might hope\nthat the nuisances are \u003ca href=\"code=temporary\"\u003etemporary\u003c/a\u003e.\u003c/p\u003e\n",
    "internal_elements": "\u003cp\u003eComfort is a subjective experience, and therefore, the starting\npoint for the generation of comfort is the individual.\u003c/p\u003e\n\u003cp\u003eThe process in which the \u003ca href=\"layer=comfort\"\u003efeeling of comfort\u003c/a\u003e is\ngenerated starts with a person’s internal elements. Together with \u003ca href=\"layer=objective_indoor_climatic_factors\"\u003eObjective Climatic Factors\u003c/a\u003e and \u003ca href=\"layer=environmental_cues\"\u003eEnvironmental Cues\u003c/a\u003e,\nInternal Elements conform what is known as the “Situation”. Namely,\nthe group of relevant elements, both physical and psychological, that\nwill determine the \u003ca href=\"layer=comfort\"\u003efeeling of comfort\u003c/a\u003e.\u003c/p\u003e\n\u003cp\u003eInternal elements will shape the way in which individuals will appraise the\n“Situation”, developing \u003ca href=\"layer=perceptions\"\u003eperceptions\u003c/a\u003e,\n\u003ca href=\"layer=trade-offs\"\u003etrade-offs\u003c/a\u003e and \u003ca href=\"layer=expected_outcomes\"\u003eexpected outcomes\u003c/a\u003e.\u003c/p\u003e\n\u003cp\u003eDifferent domains of comfort (e.g. Daylight, Acoustic, etc.) will depend\non different characteristics of the person. Assessing the internal elements\nof the target population, whether it is a demographic group or an individual\nwho wants a house for him/herself, will help design a more comfortable\nhome.\u003c/p\u003e\n",
    "objective_indoor_climatic_factors": "\u003cp\u003eObjective indoor climatic factors are those physical aspects\nof the environment that Building Scientists have traditionally\nmeasured. Namely, temperature, solar radiation, illuminance,\nrelative humidity and so on. These factors are a consequence\nof the design of homes, the surroundings, their placement (e.g.\norientation) and the climate.\u003c/p\u003e\n\u003cp\u003eThese factors are sensed by human’s physiological systems and,\ntogether with \u003ca href=\"layer=environmental_cues\"\u003eEnvironmental Cues\u003c/a\u003e,\ncontribute to the mixture of inputs used by the brain to\ngenerate the \u003ca href=\"layer=comfort\"\u003efeeling of comfort\u003c/a\u003e.\u003c/p\u003e\n",
    "perceptions": "\u003cp\u003ePerceptions are the way in which people interpret the stimuli\ngenerated by the environment through physiological phenomena.\u003c/p\u003e\n\u003cp\u003eCommon examples of perceptions are the so-called Thermal Sensation,\nand Glare. However, the paradigm of comfort introduced here has\nidentified several other perceptions worth studying. For instance,\nsome respondents mentioned that daylight reduced the\n\u003ca href=\"code=feeling_of_confinement\"\u003efeeling of confinement\u003c/a\u003e.\u003c/p\u003e\n\u003cp\u003eFurther research is required to understand what specific\nvariables affect this feeling, and the same happens with\nother perceptions. It is possible, in fact, that some of the\nperceptions identified are actually just one that was expressed\nin different ways, or different magnitudes within the same dimension.\nFor instance, the \u003ca href=\"code=feeling_of_confinement\"\u003efeeling of confinement\u003c/a\u003e\nmight just be another way of calling the\n\u003ca href=\"code=sense_of_connection_with_the_exterior\"\u003esense of connection with the exterior\u003c/a\u003e.\u003c/p\u003e\n",
    "trade-offs": "\u003cp\u003eJust like \u003ca href=\"layer=expected_outcomes\"\u003eexpected outcomes\u003c/a\u003e reflect the fact\nthat people make decisions based on the future, trade-offs\nreflect the fact decisions of today can affect people’s future\nfeeling of comfort. Namely, they reflect the fact that people place\ncomfort and \u003ca href=\"layer=perceptions\"\u003eperceptions\u003c/a\u003e within the broader\ncontext of their lives because they understand\nthat improving one area of comfort might affect other areas\nrelevant for their wellbeing.\u003c/p\u003e\n\u003cp\u003eIn other words, trade-offs represent the cost of achieving comfort in one\ndomain in exchange for nuisances in another. Comfortable dwellings\nshould reduce the need for these kinds of decisions.\u003c/p\u003e\n\u003cp\u003eNote that some trade-offs connect different domains of what has historically been\nassociated with comfort by the building sciences(e.g. thermal comfort vs acoustics).\nHowever, other trade-offs connect these traditional domains with other elements\nthat affect people’s wellbeing but that are not necessarily related to the physical\nperformance of the dwelling (e.g. air quality vs safety).\u003c/p\u003e\n"
}