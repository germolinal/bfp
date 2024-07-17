import * as THREE from "three"
import type { RefrigeratorOptions } from "../simple_types/object_specs"


const bodyMat = new THREE.MeshStandardMaterial({
    color: "gray",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.3,         
    metalness: 0.1,
});

const doorMat = new THREE.MeshStandardMaterial({
    color: "#A6A9AA",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    roughness: 0.3,         
    metalness: 0.1,
});


export default function DrawRefrigerator(
    _specs: RefrigeratorOptions,
    dimensions: number[],
): THREE.Group {
    const width = dimensions[0]
    const depth = dimensions[1]
    const topHeight = dimensions[2] * 0.6
    const bottomHeight = dimensions[2] - topHeight - 0.02;
    const doorThickness = 0.04



    const ret = new THREE.Group()

    
    const g1 = new THREE.BoxGeometry(depth - doorThickness, dimensions[2], width)
    const m1 = new THREE.Mesh(g1, bodyMat)
    m1.position.x = -doorThickness/2;
    m1.castShadow = true;
    m1.receiveShadow = false; 
    ret.add(m1)
        
    
    const g2 = new THREE.BoxGeometry(doorThickness, topHeight, width)
    const m2 = new THREE.Mesh(g2, doorMat)
    m2.position.set(depth/2, dimensions[2]/2 - topHeight/2 , 0 )
    ret.add(m2)
    
    const g3 = new THREE.BoxGeometry(doorThickness, bottomHeight, width)
    const m3 = new THREE.Mesh(g3, doorMat)
    m3.position.set(depth/2, -dimensions[2]/2 + bottomHeight/2 , 0 )
    ret.add(m3)

    return ret
}
