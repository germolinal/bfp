import * as THREE from "three"
import type { StorageOptions } from "../simple_types/object_specs"
import { divideIntoInt, lightenHexColor } from "./utils";

const woodTexture = new THREE.TextureLoader().load('/renderer/woodStorageTexture.jpg')
woodTexture.wrapS=woodTexture.wrapT=THREE.RepeatWrapping
woodTexture.repeat.set(0.5,0.5)

const timber = new THREE.MeshStandardMaterial({
  color: '#c6a992',
    metalness: 0.03,
    roughness: 0.2,
//   roughness: 0.3,
//   metalness: 0,
  side: THREE.DoubleSide,
  clipShadows: true,
  shadowSide: THREE.DoubleSide,
  map: woodTexture,
})

const lightAccent = new THREE.MeshStandardMaterial( {
    color: '#c6a992',
    roughness: 0.3,         
    metalness: 0.1,  
    // roughness: 0.4,
    // metalness: 0, 
    side: THREE.DoubleSide,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
})

function shelf(dimensions: number[]): THREE.Group {
    const THICKNESS = 0.04
    const height = dimensions[2];
    const n_shelves = divideIntoInt(height, 0.18, 0.4)
    const shelves_delta = height / n_shelves;

    const heights = Array(n_shelves + 1)
    for (let i = 0; i <= n_shelves; i++) {
        heights.push(i * shelves_delta - height / 2)
    }

    const ret = new THREE.Group()

    // Right
    const g1 = new THREE.BoxGeometry(dimensions[1], dimensions[2], THICKNESS)
    
    const m1 = new THREE.Mesh(g1, timber)
    m1.position.z = -dimensions[0] / 2 + THICKNESS / 2
    ret.add(m1)

    // Left
    const g2 = new THREE.BoxGeometry(dimensions[1], dimensions[2], THICKNESS)
    const m2 = new THREE.Mesh(g2, timber)
    m2.position.z = dimensions[0] / 2 - THICKNESS / 2
    ret.add(m2)


    // Shelves
    heights.forEach((h) => {
        const g3 = new THREE.BoxGeometry(dimensions[1], 0.02, dimensions[0])
        const m3 = new THREE.Mesh(g3, timber)
        m3.position.y = h
        m3.castShadow = true;
        ret.add(m3)
    })
    return ret
}

function cabinet(dimensions: number[], accent: string): THREE.Group {
    const DOOR_DELTA = 0.02

    const width = dimensions[0]
    const n_doors = divideIntoInt(width, 0.4, 0.6)
    const doors_width = width / n_doors

    const x = []
    for (let i = 0; i < n_doors; i++) {
        x.push(i * doors_width + doors_width / 2 - width / 2)
    }

    const ret = new THREE.Group()
    lightAccent.color = new THREE.Color(lightenHexColor(accent, 0.7))

    
    const g1 = new THREE.BoxGeometry(dimensions[1] - DOOR_DELTA, dimensions[2], dimensions[0])
    const m1 = new THREE.Mesh(g1, lightAccent)
    m1.position.y =DOOR_DELTA / 2
    m1.castShadow = true;
    m1.receiveShadow = false; 
    ret.add(m1);

    // Doors
    x.map((x)=>{
        const g2 = new THREE.BoxGeometry(DOOR_DELTA, dimensions[2] - DOOR_DELTA, doors_width - DOOR_DELTA)
        const m2 = new THREE.Mesh(g2, timber)
        m2.position.set(dimensions[1] / 2, DOOR_DELTA / 2, x)
        ret.add(m2)

    })

    return ret
}


export default function DrawStorage(
    specs: StorageOptions,
    dimensions: number[],
    accent: string,
): THREE.Group {
    switch (specs.subtype) {
        case "Cabinet":
            return cabinet(dimensions, accent)
        case "Shelf":
            return shelf(dimensions)
    }
}
