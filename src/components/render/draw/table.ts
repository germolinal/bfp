import * as THREE from "three"
import type { TableOptions } from "../simple_types/object_specs"

const tableTexture = new THREE.TextureLoader().load('/renderer/woodStorageTexture.jpg')
tableTexture.wrapS=tableTexture.wrapT=THREE.RepeatWrapping
tableTexture.repeat.set(0.3,0.3)

const COVER_DEPTH = 0.05;
const legMat = new THREE.MeshStandardMaterial({
    color: "#C6A992",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.4,
    metalness: 0,
    map: tableTexture
})

function getCircularShape(x: number, y: number): THREE.Shape {
    const nSeg = 24
    const deltaHalfC = Math.PI / nSeg;

    const length = x > y ? x : y;
    const width = x > y ? y : x;
    const halfDelta = (length - width) / 2;
    const R = width / 2

    const _shape = new THREE.Shape();


    _shape.moveTo(-halfDelta, -width / 2)
    _shape.lineTo(halfDelta, -width / 2)
    let cx = halfDelta;
    for (let i = 0; i < nSeg; i++) {
        const theta = (i + 1) * deltaHalfC;
        let x = cx + R * Math.sin(theta)
        let y = -R * Math.cos(theta)
        _shape.lineTo(x, y)
    }
    _shape.lineTo(halfDelta, width / 2)
    _shape.lineTo(-halfDelta, width / 2)
    cx = -halfDelta
    for (let i = 0; i < nSeg; i++) {
        const theta = (i + 1) * deltaHalfC;
        let x = cx - R * Math.sin(theta)
        let y = R * Math.cos(theta)
        _shape.lineTo(x, y)
    }

    return _shape;
}

function pseudoEllipse(
    x: number,
    y: number,
    mat: THREE.MeshStandardMaterial
): THREE.Mesh {

    const shape = getCircularShape(x, y)

    let e2 = new THREE.Vector3(-1, 0, 0)
    let e1 = new THREE.Vector3(0, 0, 1)
    let e3 = new THREE.Vector3(0, 1, 0)
    if (y > x) {
        e1 = new THREE.Vector3(-1, 0, 0)
        e2 = new THREE.Vector3(0, 0, 1)
        e3 = new THREE.Vector3(0, 1, 0)
    }
    const rot = new THREE.Matrix4().makeBasis(e1, e2, e3)
    let position = new THREE.Vector3()
    const quaternion = new THREE.Quaternion()
    const scale = new THREE.Vector3()
    rot.decompose(position, quaternion, scale)

    let g = new THREE.ExtrudeGeometry(shape, {
        depth: COVER_DEPTH,
        bevelEnabled: false
    })
    g.applyQuaternion(quaternion)
    let m = new THREE.Mesh(g, mat)
    m.castShadow = true;
    m.receiveShadow = false; 
    return m
}



function cover(
    specs: TableOptions,
    dimensions: number[]
): THREE.Mesh {

    if (specs.shape === "Other" || specs.shape === "LShaped" || specs.shape === "Rectangular") {
        let g = new THREE.BoxGeometry(dimensions[1], COVER_DEPTH, dimensions[0])
        return new THREE.Mesh(g, legMat)
    } else if (specs.shape === "Circular") {
        return pseudoEllipse(dimensions[0], dimensions[1], legMat)

    } else {
        throw new Error(`Unsupported table shape '${specs.shape}'`)
    }
}



function leg(x: number, y: number, dimensions: number[]): THREE.Mesh {
    const LEG_WIDTH = 0.04
    const HEIGHT = dimensions[2] - COVER_DEPTH / 2

    const leg = new THREE.BoxGeometry(LEG_WIDTH, HEIGHT, LEG_WIDTH)
    const ret = new THREE.Mesh(leg, legMat)
    ret.position.set(x, -HEIGHT / 2, y)
    return ret
}

function addLegs(
    group: THREE.Group,
    specs: TableOptions,
    dimensions: number[]
) {

    // Assume rectangular
    let y = dimensions[0]
    let x = dimensions[1]
    let length_legs = x / 2 - 0.2;
    let width_legs = y / 2 - 0.2;

    group.add(leg(-length_legs, -width_legs, dimensions))
    group.add(leg(length_legs, -width_legs, dimensions))
    group.add(leg(length_legs, width_legs, dimensions))
    group.add(leg(-length_legs, width_legs, dimensions))


}

export default function DrawTable(
    specs: TableOptions,
    dimensions: number[]
) {

    let c = cover(specs, dimensions)


    // We need an inner group, as we later modify the 
    // position of the outer group.
    const inner = new THREE.Group()
    inner.add(c)
    addLegs(inner, specs, dimensions)
    
    inner.position.y = dimensions[2] / 2
    const ret = new THREE.Group()
    ret.add(inner)

    return ret

}