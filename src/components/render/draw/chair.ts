import * as THREE from "three"
import type { ChairOptions } from "../simple_types/object_specs"

const chairTexture = new THREE.TextureLoader().load('/renderer/chairFabricTexture.jpg')
chairTexture.wrapS= chairTexture.wrapT=THREE.RepeatWrapping
chairTexture.repeat.set(0.5,0.5)

const legMat = new THREE.MeshStandardMaterial({
    color: "#c6a992",
    roughness: 0.3,
    metalness: 0.1,
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
});

function legs(specs: ChairOptions, height: number, delta: number, dimensions: number[]): THREE.Group {
    const R = 0.02
    let halfWidth = dimensions[0] / 2 - delta - R
    let halfDepth = dimensions[1] / 2 - delta - R

    let posZ = -dimensions[2] / 2 + height / 2

    let legPositions = []
    switch (specs.legs) {
        case "Four":
        case "Other":
        case "Star":
            legPositions = [
                [-halfDepth, posZ, -halfWidth],
                [-halfDepth, posZ, halfWidth],
                [halfDepth, posZ, halfWidth],
                [halfDepth, posZ, -halfWidth],
            ]
            break
        case "Three":
            legPositions = [
                [halfDepth, posZ, 0],
                [-halfDepth / 2, posZ, halfWidth],
                [-halfDepth / 2, posZ, -halfWidth]
            ]
            break
    }

    const ret = new THREE.Group()
    legPositions.forEach((v) => {
        const geo = new THREE.CylinderGeometry(R, R, height, 24)
        const m = new THREE.Mesh(geo, legMat)
        m.position.set(v[0], v[1], v[2])
        ret.add(m)
    })


    return ret;
}

const seatMat = new THREE.MeshStandardMaterial({
    color: "#00658b",  
    roughness: 0.3,         
    metalness: 0.2,    
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    side: THREE.DoubleSide,         
    emissive: "#006999",
    emissiveIntensity: 0.3,
    map: chairTexture
})
function stool(specs: ChairOptions, dimensions: number[], accentColor: string): THREE.Group {

    seatMat.color = new THREE.Color(accentColor);

    const R = (dimensions[0] + dimensions[1]) / 4

    const SEAT_H = 0.04
    const DELTA = 0.06

    const ret = new THREE.Group()

    // seat    
    const seatGeo = new THREE.CylinderGeometry(R, R, SEAT_H, 24)
    const seatMesh = new THREE.Mesh(seatGeo, seatMat)
    seatMesh.position.y = dimensions[2]/2-SEAT_H/2;
    ret.add(seatMesh)

    // legs
    ret.add(legs(specs, dimensions[2] - SEAT_H, DELTA, dimensions))

    return ret;    
}

function chair(specs: ChairOptions, dimensions: number[], accentColor: string) : THREE.Group {

    seatMat.color = new THREE.Color(accentColor);
    const SEAT_H = 0.04
    const BACK_T = 0.04

    // Assume existing back
    let legLength = 0.41
    let backHeight = dimensions[2] - SEAT_H - legLength

    const hasBack = !specs.back || specs.back === "Existing";    
    if (!hasBack) {
        legLength = dimensions[2] - SEAT_H
    }
    const ret = new THREE.Group()

    // Seat
    const seatGeo = new THREE.BoxGeometry(dimensions[0], SEAT_H, dimensions[1])
    const seatMesh = new THREE.Mesh(seatGeo, seatMat)
    seatMesh.position.y = -dimensions[2]/2 +SEAT_H/2 + legLength;
    seatMesh.castShadow = true;
    ret.add(seatMesh)

    // Back
    if(hasBack){
        const backGeo = new THREE.BoxGeometry(BACK_T, backHeight, dimensions[1])
        const backMesh = new THREE.Mesh(backGeo, seatMat)
        backMesh.position.set(-dimensions[0]/2, backHeight/2, 0);
        ret.add(backMesh)
    }
    
    // legs
    ret.add(legs(specs, legLength,  0.03, dimensions))

    return ret;        
}

export default function DrawChair(
    specs: ChairOptions,
    dimensions: number[], 
    accentColor: string
): THREE.Group {

    switch (specs.subtype) {
        case "Other":
        case "Dining":
        case "Office":
            return chair(specs, dimensions, accentColor)
        case "Stool":
            return stool(specs, dimensions, accentColor)
        default:
            throw new Error(`Unknown chair type ${specs.subtype}`)
    }
}
