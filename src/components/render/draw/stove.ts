import * as THREE from "three"
import type { StoveOptions } from "../simple_types/object_specs"


const glassMat = new THREE.MeshStandardMaterial({
    color: "black",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.3,         
    metalness: 0.1,
});

export default function DrawStove(
    _specs: StoveOptions,
    dimensions: number[],
): THREE.Group {
    const depth = dimensions[1]
    const height = 0.005

    const ret = new THREE.Group()
    const geo = new THREE.BoxGeometry(depth, height, dimensions[0])
    const m = new THREE.Mesh(geo, glassMat)
    m.position.y = -dimensions[2] / 2 + 3 * height
    m.castShadow = true;
    ret.add(m)
    return ret;
}
