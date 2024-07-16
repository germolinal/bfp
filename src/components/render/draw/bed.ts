import * as THREE from "three"
import type { BedOptions } from "../simple_types/object_specs"

const woodTexture = new THREE.TextureLoader().load('/renderer/bedTexture.jpg')
woodTexture.wrapS=woodTexture.wrapT=THREE.RepeatWrapping
woodTexture.repeat.set(0.3,0.3)

const mattressMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,     
    roughness: 0.3,       
    metalness: 0,           
    emissive:"white",
    emissiveIntensity: 0.5,
});

function mattress(width: number, depth: number, height: number, material: any): THREE.Mesh {

    const bevelThickness = 0.14
    const bevelSize = 0.14

    height -= 4 * bevelThickness
    depth -= 2 * bevelSize
    width -= 2*bevelSize

    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -depth / 2);
    shape.lineTo(width / 2, -depth / 2);
    shape.lineTo(width / 2, depth / 2);
    shape.lineTo(-width / 2, depth / 2);
    shape.lineTo(-width / 2, -depth / 2);

    const geo = new THREE.ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: true,
        bevelThickness,
        bevelSegments: 8,
        bevelSize,
    });

    const ret = new THREE.Mesh(geo, material)
    ret.rotation.set(Math.PI / 2, 0, Math.PI / 2)
    return ret

}

function cushion(width: number, depth: number, height: number, material: any): THREE.Mesh {

    const bevelThickness = height / 2
    const bevelSize = height / 2

    height -= 2 * bevelThickness
    width -= 2 * bevelSize

    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -depth / 2);
    shape.lineTo(width / 2, -depth / 2);
    shape.lineTo(width / 2, depth / 2);
    shape.lineTo(-width / 2, depth / 2);
    shape.lineTo(-width / 2, -depth / 2);

    const geo = new THREE.ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: true,
        bevelThickness,
        bevelSegments: 20,
        bevelSize,
    })
    const ret = new THREE.Mesh(geo, material)
    ret.rotation.set(Math.PI / 2, 0, Math.PI / 2)
    return ret

}

const blanketMat = new THREE.MeshStandardMaterial({
    color: "#00658b",       
    roughness: 0.3,         
    metalness: 0.2,            
    emissive: "#007799",
    emissiveIntensity: 0.2,
    map: woodTexture
});

export default function DrawBed(
    specs: BedOptions,
    dimensions: number[],
    blanketColor: string,
): THREE.Group {
    const width = dimensions[0]
    const depth = dimensions[1]
    const height = dimensions[2]

    const blanketThickness = 0.04
    const pillowDepth = 0.35
    const pillowThickness = 0.12


    let pillowPos = [
        0
    ]
    let pillowWidth = width * 0.95
    if (width > 1) {
        // Double bed
        pillowPos = [
            width / 4,
            -width / 4
        ]
        pillowWidth = width / 2.01
    }

    const ret = new THREE.Group()

    // Add mattress
    const matt = mattress(width - blanketThickness, depth - blanketThickness, height - blanketThickness, mattressMat)
    matt.position.y = -blanketThickness
    matt.castShadow = true;
    ret.add(matt)

    // Add blanket
    blanketMat.color = new THREE.Color(blanketColor)

    const blanket = mattress(width, depth - pillowDepth, height, blanketMat)
    blanket.position.x = pillowDepth
    blanket.castShadow = true;
    ret.add(blanket)

    pillowPos.forEach((x) => {
        const pillow = cushion(pillowWidth, pillowDepth, pillowThickness, mattressMat)
        pillow.position.set(-depth / 2 + pillowDepth, pillowThickness, x)
        ret.add(pillow)
    })

    return ret

}
