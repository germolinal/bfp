import * as THREE from "three"
import type { ToiletOptions } from "../simple_types/object_specs"

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

function seat(width: number, depth: number, height: number): THREE.Group {


    const SEAT_DELTA = 0.02
    const SEAT_THICKNESS = 0.009
    const SEAT_OTHER_DELTA = 3.2 * SEAT_DELTA

    const seatPoints = [
        new THREE.Vector2(width / 2 - SEAT_OTHER_DELTA, height - SEAT_THICKNESS - height / 2),
        new THREE.Vector2(width / 2 - SEAT_OTHER_DELTA, height - height / 2),
        new THREE.Vector2(width / 2, height - height / 2),
        new THREE.Vector2(width / 2, height - SEAT_THICKNESS - height / 2),
    ]


    const baseHeight = height - SEAT_THICKNESS - 0.01
    const basePoints = [
        new THREE.Vector2(width / 2 - SEAT_DELTA, baseHeight - SEAT_DELTA - height / 2),
        new THREE.Vector2(width / 2 - SEAT_DELTA, baseHeight - height / 2),
        new THREE.Vector2(width / 2, baseHeight - height / 2),
        new THREE.Vector2(width / 2, baseHeight - SEAT_DELTA - height / 2),
        new THREE.Vector2(width / 2 - SEAT_DELTA / 2, baseHeight - SEAT_DELTA - height / 2),
    ];

    for (let y = baseHeight - SEAT_DELTA; y >= 0; y -= baseHeight / 16) {
        let x = (y - y * y + 0.2) * width;
        basePoints.push(new THREE.Vector2(x, y - height / 2))
    }



    const ret = new THREE.Group();


    const g1 = new THREE.LatheGeometry(seatPoints, 32)
    let m1 = new THREE.Mesh(g1, material)
    m1.position.x = -depth / 2
    ret.add(m1)


    const g2 = new THREE.LatheGeometry(basePoints, 32)
    let m2 = new THREE.Mesh(g2, material)
    m2.position.x = -depth / 2
    m2.castShadow = true;
    ret.add(m2)


    const g3 = new THREE.CylinderGeometry(width / 4, width / 4, 0.02)
    let m3 = new THREE.Mesh(g3, material)
    m3.position.set(-depth / 2, -height / 2 + 0.01, 0)

    ret.add(m3)

    ret.scale.x = depth / width
    return ret
}

export default function DrawToilet(
    specs: ToiletOptions,
    dimensions: number[]
): THREE.Group {

    const TANK_DEPTH = 0.17
    const SPACING = 0.01
    const SEAT_DEPTH = dimensions[1] - SPACING - TANK_DEPTH
    const SEAT_HEIGHT = 0.398

    const TANK_HEIGHT = 0.6 * dimensions[2]
    const BASE_HEIGHT = dimensions[2] - TANK_HEIGHT
    const BASE_DEPTH = 1.5 * TANK_DEPTH


    const ret = new THREE.Group()

    const g1 = new THREE.BoxGeometry(dimensions[0], TANK_HEIGHT, TANK_DEPTH)
    const m1 = new THREE.Mesh(g1, material)
    m1.position.set(TANK_DEPTH / 2 - dimensions[1] / 2, -TANK_HEIGHT / 2 + dimensions[2] / 2, 0)
    m1.rotation.y = Math.PI / 2
    m1.castShadow = true;
    ret.add(m1)


    const g2 = new THREE.BoxGeometry(dimensions[0] * 0.5, BASE_HEIGHT, BASE_DEPTH)
    const m2 = new THREE.Mesh(g2, material)
    m2.position.set(BASE_DEPTH / 2 - dimensions[1] / 2, -dimensions[2] / 2 + BASE_HEIGHT / 2, 0)
    m2.rotation.y = Math.PI / 2
    ret.add(m2)

    const m3 = seat(dimensions[0] * 0.86, SEAT_DEPTH, SEAT_HEIGHT)
    m3.position.set(TANK_DEPTH + SPACING + SEAT_DEPTH/2,-dimensions[2]/2+SEAT_HEIGHT/2,0)
    ret.add(m3)

    return ret

}
