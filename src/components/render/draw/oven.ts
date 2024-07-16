import * as THREE from "three"
import type { OvenOptions } from "../simple_types/object_specs"


const bodyMat = new THREE.MeshStandardMaterial({
    color: "gray",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.05,
    metalness: 0
});

const glassMat = new THREE.MeshStandardMaterial({
    color: "black",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.08,
    metalness: 0
});

const levelMaterial = new THREE.MeshStandardMaterial({
    color: "black",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.08,
    metalness: 0
});

export default function DrawOven(
    specs: OvenOptions,
    dimensions: [number, number, number],
): THREE.Group {
    const width = dimensions[0]
    const depth = dimensions[1]
    const offset = 0.03;
    const offsetBottom = 0.08 * dimensions[2]
    const offsetTop = 0.21 * dimensions[2]
    const glassTicknes = 0.008

    const leverPositions = [
        -dimensions[0] / 2 + 0.2 * width,
        -dimensions[0] / 2 + 0.8 * width
    ]

    const ret = new THREE.Group()


    const g1 = new THREE.BoxGeometry(depth, dimensions[2], dimensions[0])
    const m1 = new THREE.Mesh(g1, bodyMat)
    ret.add(m1)


    const g2 = new THREE.BoxGeometry(glassTicknes, dimensions[2] - offsetBottom - offsetTop, dimensions[0] - offset)
    const m2 = new THREE.Mesh(g2, glassMat)
    m2.position.set(depth / 2, offsetBottom - offset, 0)
    ret.add(m2)
    
    leverPositions.forEach((x)=>{

        const g3 = new THREE.CylinderGeometry(0.02, 0.016, 0.02)
        const m3 = new THREE.Mesh(g3, levelMaterial)
        m3.position.set(depth/2+0.01 , dimensions[2]/2 - offsetTop/4 , x)
        ret.add(m3)
    })

    return ret
}
