import * as THREE from "three"
import type { SofaOptions } from "../simple_types/object_specs"
import { divideIntoInt } from "./utils";

const chairTexture = new THREE.TextureLoader().load('/renderer/chairTexture.jpg')
chairTexture.wrapS= chairTexture.wrapT=THREE.RepeatWrapping
chairTexture.repeat.set(0.5,0.5)

const sofaTexture = new THREE.TextureLoader().load('/renderer/sofaTexture.jpg')
sofaTexture.wrapS=sofaTexture.wrapT=THREE.RepeatWrapping
sofaTexture.repeat.set(0.5,0.5)

const sofaMat = new THREE.MeshStandardMaterial({
    color: "#cfcbc4",
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    side: THREE.DoubleSide,
    roughness: 0.3,         
    metalness: 0.2,
    map: sofaTexture
})

function back(width: number, depth: number, height: number, groundClearance: number): THREE.Mesh {
    const bevelThickness = 0.04
    const bevelSize = 0.02

    height -= 2 * bevelSize
    height -= groundClearance
    depth -= 2 * bevelThickness
    width -= 2 * bevelSize

    const shape = new THREE.Shape();
    shape.moveTo(-height / 2, -width / 2);
    shape.lineTo(height / 2, -width / 2);
    shape.lineTo(height / 2, width / 2);
    shape.lineTo(-height / 2, width / 2);
    shape.lineTo(-height / 2, -width / 2);

    const geo = new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelThickness,
        bevelSegments: 8,
        bevelSize,
    })
    const mesh = new THREE.Mesh(geo, sofaMat)
    mesh.rotation.z = Math.PI / 2
    mesh.castShadow=true;
    return mesh
}


const armMat = new THREE.MeshStandardMaterial({
    color: "#C6A992",
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    side: THREE.DoubleSide,
    metalness: 0.1,
    roughness: 0.3,
    map:chairTexture
})

function arm(width: number, depth: number, height: number, groundClearance: number): THREE.Mesh {
    const bevelThickness = 0.04
    const bevelSize = 0.02

    height -= 2 * bevelSize
    height -= groundClearance
    depth -= 2 * bevelThickness
    width -= 2 * bevelSize

    const shape = new THREE.Shape();
    shape.moveTo(-height / 2, -width / 2);
    shape.lineTo(height / 2, -width / 2);
    shape.lineTo(height / 2, width / 2);
    shape.lineTo(-height / 2, width / 2);
    shape.lineTo(-height / 2, -width / 2);

    const geo = new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelThickness,
        bevelSegments: 8,
        bevelSize,
    });
    const mesh = new THREE.Mesh(geo, armMat)
    mesh.rotation.set(0, Math.PI / 2, Math.PI / 2)
    mesh.castShadow=true;
    return mesh
}




function cushion(width: number, depth: number, height: number): THREE.Mesh {

    const bevelThickness = 0.04
    const bevelSize = 0.04

    height -= 2 * bevelThickness
    depth -= 2 * bevelSize
    width -= 2 * bevelSize

    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -depth / 2);
    shape.lineTo(width / 2, -depth / 2);
    shape.lineTo(width / 2, depth / 2);
    shape.lineTo(-width / 2, depth / 2);
    shape.lineTo(-width / 2, -depth / 2);

    const geo = new THREE.ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: true,
        bevelThickness,
        bevelSegments: 8,
        bevelSize,
    });
    const mesh = new THREE.Mesh(geo, sofaMat)
    mesh.rotation.set(Math.PI / 2, 0, Math.PI / 2)
    mesh.castShadow=true
    return mesh


}

function leg(width: number, groundClearance: number): THREE.Mesh {

    const geo = new THREE.BoxGeometry(width, groundClearance, width)
    return new THREE.Mesh(geo, armMat)

}


const ARM_WIDTH = 0.07
function rectangularSofa(dimensions: number[], nSeats: number): THREE.Group {
    const GROUND_CLEARANCE = 0.2
    const CUSHION_HEIGHT = 0.15
    const BASE_HEIGHT = 0.4
    const BACK_DEPTH = 0.1

    const ARM_HEIGHT = 0.66
    const ARM_Z = -dimensions[2] / 2 + (ARM_HEIGHT + GROUND_CLEARANCE) / 2
    const ARM_X = -dimensions[1] / 2 + 0.05 //+ 0.02

    const WIDTH = dimensions[0]
    const INNER_WIDTH = dimensions[0] - 2 * ARM_WIDTH
    const BACK_WIDTH = ARM_WIDTH * 1.23

    const CUSHION_WIDTH = INNER_WIDTH / nSeats
    const CUSHION_DEPTH = dimensions[1] - BACK_DEPTH
    const CUSHION_Z = -dimensions[2] / 2 + BASE_HEIGHT + CUSHION_HEIGHT / 2
    const CUSHION_X = BACK_DEPTH / 2 + 0.01

    const LEG_WIDTH = 0.04
    const LEG_Z = -dimensions[2] / 2 + GROUND_CLEARANCE / 2
    const LEG_X = dimensions[1] / 2 - LEG_WIDTH / 2
    const LEG_Y = WIDTH / 2 - LEG_WIDTH / 2
    let xPos = Array(nSeats)
    for (let i = 0; i < nSeats; i++) {
        xPos.push(-WIDTH / 2 + CUSHION_WIDTH / 2 + ARM_WIDTH + i * CUSHION_WIDTH)
    }

    const ret = new THREE.Group()
    
    // Base    
    const g1 = new THREE.BoxGeometry(dimensions[1], BASE_HEIGHT - GROUND_CLEARANCE, INNER_WIDTH)
    const m1 = new THREE.Mesh(g1, sofaMat)
    m1.position.y = -dimensions[2] / 2 + BASE_HEIGHT / 2 + GROUND_CLEARANCE / 2
    ret.add(m1)

    // Cushions
    xPos.forEach((x)=>{
        const m2 = cushion(CUSHION_WIDTH, CUSHION_DEPTH, CUSHION_HEIGHT)        
        m2.position.set(CUSHION_X, CUSHION_Z, x)
        ret.add(m2)
    })

    // Arms
    const arm1 = arm(ARM_WIDTH, dimensions[1] , ARM_HEIGHT, GROUND_CLEARANCE )
    arm1.position.set(ARM_X, ARM_Z, -WIDTH / 2 + ARM_WIDTH / 2)
    ret.add(arm1)

    const arm2 = arm(ARM_WIDTH, dimensions[1] , ARM_HEIGHT, GROUND_CLEARANCE ) 
    arm2.position.set(ARM_X, ARM_Z, WIDTH / 2 - ARM_WIDTH / 2)
    ret.add(arm2)

    // Back    
    const m3 = back(BACK_WIDTH, dimensions[0] , dimensions[2], GROUND_CLEARANCE )
    m3.position.set(-dimensions[1] / 2 + BACK_WIDTH / 2, GROUND_CLEARANCE / 2, -WIDTH / 2 + ARM_WIDTH / 2)
    ret.add(m3)


    // Legs
    const m4 = leg(LEG_WIDTH, GROUND_CLEARANCE)
    m4.position.set(-LEG_X, LEG_Z, -LEG_Y)
    ret.add(m4)

   
    const m5 = leg(LEG_WIDTH, GROUND_CLEARANCE)
    m5.position.set(LEG_X, LEG_Z, -LEG_Y)
    ret.add(m5)
    
    const m6 = leg(LEG_WIDTH, GROUND_CLEARANCE)
    m6.position.set(LEG_X, LEG_Z, LEG_Y)
    ret.add(m6)
    
    const m7 = leg(LEG_WIDTH, GROUND_CLEARANCE)
    m7.position.set(-LEG_X, LEG_Z, LEG_Y)
    ret.add(m7)

    return ret

}

function extension(dimensions: number[]): THREE.Group {

    const geo = new THREE.BoxGeometry(dimensions[1], dimensions[2], dimensions[0])
    const m = new THREE.Mesh(geo, sofaMat)
    const ret = new THREE.Group()
    ret.add(m)
    return ret
}

export default function DrawSofa(
    specs: SofaOptions,
    dimensions: number[]
): THREE.Group {

    switch (specs.subtype) {
        case "Other":
        case "Rectangular":
        case "LShaped":
            const MAX_SEAT_WIDTH = 1.02;
            const MIN_SEAT_WIDTH = 0.8
            const N_SEATS = divideIntoInt(dimensions[0] - 2 * ARM_WIDTH, MAX_SEAT_WIDTH, MIN_SEAT_WIDTH)
            return rectangularSofa(dimensions, N_SEATS)
        case "SingleSeat":
            return rectangularSofa(dimensions, 1)
        case "LShapedExtension":
            return extension(dimensions)
    }
}
