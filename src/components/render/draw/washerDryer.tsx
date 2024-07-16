import * as THREE from "three"
import type { ToiletOptions, WasherDryerOptions } from "../simple_types/object_specs"

const material = new THREE.MeshStandardMaterial({
    color: "white",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.3,         
    metalness: 0.1,
    emissive: "white",
});

const glassMaterial = new THREE.MeshStandardMaterial({
    color: "black",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.3,         
    metalness: 0.1,
    emissive: "white",
});


export function DrawWasherDryer(
    specs: WasherDryerOptions,
    dimensions: [number, number, number]
): THREE.Group {

    const width = dimensions[0]
    const depth = dimensions[1]
    const height = dimensions[2]

    const ret = new THREE.Group()
    // Body
    const bodyGeo = new THREE.BoxGeometry(dimensions[0], dimensions[2], dimensions[1])
    const bodyMesh = new THREE.Mesh(bodyGeo, material)
    bodyMesh.castShadow = true;
    ret.add(bodyMesh)

    // Door
    const doorGeo = new THREE.CylinderGeometry(dimensions[0] / 4, dimensions[0] / 4, 0.02)
    const doorMesh = new THREE.Mesh(doorGeo, glassMaterial)
    ret.add(doorMesh)
    return ret


}
