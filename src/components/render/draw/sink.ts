import * as THREE from "three"
import type { SinkOptions } from "../simple_types/object_specs"


const material = new THREE.MeshPhongMaterial({
    color: "white",
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
    specular: new THREE.Color(0xffffff), 
    shininess: 50, 
    reflectivity: 1,
    emissive: "white",
    emissiveIntensity:0.8
});

function vase(width: number, depth: number, height: number): THREE.Group {

    const basePoints = [
    ];
    const R = 0.2 * width
    const scale = 1.2 * width / Math.sqrt(height - R * R)

    for (let i = 1; i >= 0; i -= height / 16) {
        let y = height - i * height

        if (y > R * R) {
            let x = Math.sqrt(y - R * R) / scale
            basePoints.push(new THREE.Vector2(x, y - height / 2))
        }
    }

    const ret = new THREE.Group()


    const g1 = new THREE.LatheGeometry(basePoints, 32)
    const m1 = new THREE.Mesh(g1, material)
    m1.position.x = -depth / 2
    ret.add(m1)


    const g2 = new THREE.CylinderGeometry(width / 4, width / 4, 0.02)
    const m2 = new THREE.Mesh(g2, material)
    m2.position.set(-depth / 2, -height / 2 + 0.01, 0)
    ret.add(m2)


    ret.scale.x = depth / width
    return ret

}

export default function DrawSink(
    _specs: SinkOptions,
    dimensions: number[]
): THREE.Group {

    const BASE_THICKNESS = 0.04
    const VASE_HEIGHT = dimensions[2] - BASE_THICKNESS

    const ret = new THREE.Group()

    
    const g1 = new THREE.BoxGeometry(dimensions[1], BASE_THICKNESS, dimensions[0])
    const m1 = new THREE.Mesh(g1, material)
    m1.position.y = -dimensions[2]/2 + BASE_THICKNESS/2
    m1.castShadow = true;
    ret.add(m1)



    
    const m2 = vase(dimensions[0], dimensions[1],VASE_HEIGHT)
    m2.position.x = dimensions[1]/2
    ret.add(m2)


    return ret;


}
