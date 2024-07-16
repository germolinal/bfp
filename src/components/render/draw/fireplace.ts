import * as THREE from "three"
import type { FireplaceOptions } from "../simple_types/object_specs"


const bodyMat = new THREE.MeshPhysicalMaterial( { 
    color: "gray", 
    side: THREE.DoubleSide, 
    clipShadows: true, 
    shadowSide: THREE.DoubleSide,
    roughness: 1.0,
    metalness: 0.0,
    reflectivity: 0.0
});



export default function DrawFireplace(
    specs: FireplaceOptions,
    dimensions: [number,number,number],
): THREE.Group {    
    const width = dimensions[0] 
    const depth = dimensions[1] 
    const height = dimensions[2]
    const offset = 0.2;
    
    const ret = new THREE.Group()
    
    const g1 = new THREE.BoxGeometry(depth,  offset, width)
    const m1 = new THREE.Mesh(g1, bodyMat)
    m1.position.y = height/2 - offset/2;
    ret.add(m1)

    
    const g2 = new THREE.BoxGeometry(depth,  offset/2, width)
    const m2 = new THREE.Mesh(g2, bodyMat)
    m2.position.y = -height/2 + offset/2;
    ret.add(m2)

    
    const g3 = new THREE.BoxGeometry(depth,  height, offset)
    const m3 = new THREE.Mesh(g3, bodyMat)
    m3.position.z = -width/2 + offset/2 ;
    ret.add(m3)
    
    const g4 = new THREE.BoxGeometry(depth,  height, offset)
    const m4 = new THREE.Mesh(g4, bodyMat)
    m4.position.z = width/2 - offset/2;
    ret.add(m4)

    return ret;    
}
