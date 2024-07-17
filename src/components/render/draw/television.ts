import * as THREE from "three"
import type { TelevisionOptions } from "../simple_types/object_specs"


const bodyMat = new THREE.MeshPhysicalMaterial({
    color: "#1F1F1F",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.98,
    metalness: 0.0,
    reflectivity: 1.0
});

const glassMat = new THREE.MeshPhysicalMaterial({
    color: "black",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.04,
    metalness: 0.0,
    reflectivity: 1.0
});

export default function DrawTelevision(
    _specs: TelevisionOptions,
    dimensions: number[],
): THREE.Group {
    const depth = dimensions[1]
    const offset = 0.01;
    const offsetBottom = 0.01
    const offsetTop = 0.01
    const glassTicknes = 0.008


    const ret = new THREE.Group()
    let g1 = new THREE.BoxGeometry(depth, dimensions[2], dimensions[0])
    ret.add(new THREE.Mesh(g1, bodyMat))

    let g2 = new THREE.BoxGeometry(glassTicknes, dimensions[2] - offsetBottom - offsetTop, dimensions[0] - offset)
    let m2 = new THREE.Mesh(g2, glassMat)
    m2.position.set(depth / 2, offsetBottom - offset, 0)
    ret.add(m2)

    return ret

}
