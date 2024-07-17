import * as THREE from "three"
import type { BathtubOptions } from "../simple_types/object_specs"

const material = new THREE.MeshPhongMaterial({
    color: "white",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    specular: 'white',
    shininess: 50,
    reflectivity: 1,
    emissive: "white",
    emissiveIntensity:0.8
});


const bevelThickness = 0.02
const bevelSize = 0.02
function wall(width: number, depth: number, height: number, rotationX: number, rotationZ: number): THREE.Mesh {

    height -= 2 * bevelSize
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
        bevelSize
    });


    const w = new THREE.Mesh(geo, material)
    w.position.y = height / 2
    w.rotation.set(rotationX, 0, rotationZ)
    w.castShadow = true;
    return w
    
}

export default function DrawBathtub(
    _specs: BathtubOptions,
    dimensions: number[],
): THREE.Group {

    const ret = new THREE.Group()

    const height = dimensions[2]
    const width = dimensions[0]
    const depth = dimensions[1]

    const BASE_THICKNESS = 0.04
    const WALL_WIDTH = 0.001

    const baseGeometry = new THREE.BoxGeometry(depth, BASE_THICKNESS, width)
    const baseMesh = new THREE.Mesh(baseGeometry, material)
    ret.add(baseMesh)

    const w1 = wall(width, height, WALL_WIDTH, -Math.PI / 2, 0)
    w1.position.x = depth / 2 - bevelSize
    ret.add(w1)

    const w2 = wall(width, height, WALL_WIDTH, -Math.PI / 2, 0)
    w2.position.x = -depth / 2 + bevelSize
    ret.add(w2)


    const w3 = wall(depth, height, WALL_WIDTH, -Math.PI / 2, Math.PI / 2)
    w3.position.z = width / 2 - bevelSize
    ret.add(w3)

    const w4 = wall(depth, height, WALL_WIDTH, -Math.PI / 2,Math.PI / 2)
    w4.position.z = -width / 2 + bevelSize
    ret.add(w4)


    return ret
}
