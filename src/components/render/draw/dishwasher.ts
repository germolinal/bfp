import * as THREE from "three"
import type { DishwasherOptions } from "../simple_types/object_specs"


const bodyMat = new THREE.MeshPhysicalMaterial({
    color: "gray",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.07,
    metalness: 0.0,
    reflectivity: 1.0
});

const doorMat = new THREE.MeshPhysicalMaterial({
    color: "#A8A9AD",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.04,
    metalness: 0.0,
    reflectivity: 1.0
});


export default function DrawDishwasher(
    specs: DishwasherOptions,
    dimensions: [number, number, number],
): THREE.Group {
    const width = dimensions[0]
    const depth = dimensions[1]
    const height = dimensions[2]
    const offset = 0.03;
    const offsetBottom = 0.08 * height
    const offsetTop = 0.21 * height
    const glassTicknes = 0.01


    const ret = new THREE.Group()
    // Body
    const bodyGeo = new THREE.BoxGeometry(depth - glassTicknes, height, width)
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat)
    ret.add(bodyMesh)

    // Door
    const doorGeo = new THREE.BoxGeometry(glassTicknes, height - offsetBottom - offsetTop, width - offset)
    const doorMesh = new THREE.Mesh(doorGeo, doorMat)
    doorMesh.position.set(depth / 2, offsetBottom - offset, 0)
    ret.add(doorMesh)

    return ret;


}
