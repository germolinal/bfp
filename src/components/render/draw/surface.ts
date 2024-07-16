import * as THREE from "three"

import type Surface from '../simple_types/surface';
import type Fenestration from '../simple_types/fenestration';


function getVertices(surface: Surface | Fenestration): number[] {
    let vertices: number[] = [];
    for (var i = surface.vertices.length - 1; i >= 0;) {
        const z = surface.vertices[i--];
        const y = surface.vertices[i--];
        const x = surface.vertices[i--];
        vertices.push(-x, z, y)
    }

    return vertices
}

function getShape(vertices: number[], transform: THREE.Matrix4): THREE.Shape {
    const inv_transform = transform.clone().invert();
    const _shape = new THREE.Shape();

    for (var i = 0; i < vertices.length;) {
        const isFirst = i == 0;
        const x = vertices[i++];
        const y = vertices[i++];
        const z = vertices[i++];

        const global_p = new THREE.Vector3(x, y, z);
        const local_p = global_p.applyMatrix4(inv_transform);

        if (isFirst) {
            _shape.moveTo(local_p.x, local_p.y);
        } else {
            _shape.lineTo(local_p.x, local_p.y);
        }
    }


    return _shape;
}

function getLocalReferenceFrame(surface: any):{e1: THREE.Vector3, e2:THREE.Vector3, normal: THREE.Vector3, vertices: any}{
    if (surface.vertices.length % 3 !== 0) {
        throw new Error('The number of elements in Polygon must be multiple of three... found ${surface.vertices.length}');
    }

    const vertices = getVertices(surface)

    const e1: THREE.Vector3 = new THREE.Vector3(
        vertices[3] - vertices[0],
        vertices[4] - vertices[1],
        vertices[5] - vertices[2]
    ).normalize();


    if (e1.lengthSq() < 1e-9) {
        throw new Error('First edge of polygon to draw is too short')
    }

    const aux: THREE.Vector3 = new THREE.Vector3(
        vertices[6] - vertices[3],
        vertices[7] - vertices[4],
        vertices[8] - vertices[5]
    ).normalize();

    if (aux.lengthSq() < 1e-9) {
        throw new Error('First edge of polygon to draw is too short')
    }
    // normal... 
    let normal: THREE.Vector3 = e1.clone().cross(aux).normalize();
    const e2: THREE.Vector3 = normal.clone().cross(e1).normalize();

    return {e1, e2, normal, vertices}
}

function ExtrudedSurface(scene: THREE.Scene, { surface, thickness, indoorMaterial, outdoorMaterial, layers }: {
    surface: Surface | Fenestration,
    thickness: number
    indoorMaterial: any,
    outdoorMaterial: any,
    layers: THREE.Layers,
}) {


    if (surface.vertices.length % 3 !== 0) {
        throw new Error(`The number of elements in Polygon must be multiple of three... found ${surface.vertices.length}`);
    }

    const {e1, e2, normal, vertices}= getLocalReferenceFrame(surface);

    const origin = new THREE.Vector3(vertices[0], vertices[1], vertices[2]);
    const rot = new THREE.Matrix4().makeBasis(e1, e2, normal)
    const translation = new THREE.Matrix4().makeTranslation(origin.x, origin.y, origin.z);
    const transform = rot.premultiply(translation);
    const shape = getShape(vertices, transform)

    // Define position
    let position = new THREE.Vector3()
    const quaternion = new THREE.Quaternion()
    const scale = new THREE.Vector3()
    transform.decompose(position, quaternion, scale)


    // By default, front is thin, back is thick, both defined as outdoor.
    let frontThickness = 0.04 * thickness;
    let frontMat = outdoorMaterial;
    let backMat = outdoorMaterial;
    let backThickness = thickness - frontThickness;
    let frontDispNorm = thickness / 2 - frontThickness;
    let backDispNorm = thickness - frontDispNorm

    // if the front is interior
    const frontBound = surface.front_boundary.type;
    const backBound = surface.back_boundary.type;
    if (frontBound === "Space") {
        frontMat = indoorMaterial;
    }
    if (backBound === "Space") {
        backMat = indoorMaterial;
    }
    if (frontBound === "Space" && backBound === "Space") {
        frontThickness = thickness / 2.0
        backThickness = thickness / 2.0
    }

    
    const frontDisp = normal.multiplyScalar(frontDispNorm * 1.005);
    const frontGeometry = new THREE.ExtrudeGeometry(shape, {
        depth: frontThickness,
        bevelEnabled: false
    });
    frontGeometry.attributes.uv2 = frontGeometry.attributes.uv;
    const frontDelta = position.sub(frontDisp);
    const frontMesh = new THREE.Mesh(frontGeometry, frontMat);
    frontMesh.position.set(frontDelta.x, frontDelta.y, frontDelta.z)
    frontMesh.applyQuaternion(quaternion)
    frontMesh.receiveShadow=true;
    scene.add(frontMesh)

    const backDisp = normal.multiplyScalar(backDispNorm);
    const backGeometry = new THREE.ExtrudeGeometry(shape, {
        depth: backThickness,
        bevelEnabled: false
    });
    backGeometry.attributes.uv2 = backGeometry.attributes.uv;
    const backDelta = position.add(backDisp);
    const backMesh = new THREE.Mesh(backGeometry, backMat);
    backMesh.position.set(backDelta.x, backDelta.y, backDelta.z)
    backMesh.applyQuaternion(quaternion)
    backMesh.receiveShadow=true;
    scene.add(backMesh)
    
    return { frontMesh, backMesh };
}

function DoorFrame(scene: THREE.Scene, { surface, frameThickness, frameMaterial }: {
    surface: Surface | Fenestration,
    frameThickness: number,
    frameMaterial: any,
}) {
    if (surface.vertices.length % 3 !== 0) {
        throw new Error(`The number of elements in Polygon must be multiple of three... found ${surface.vertices.length}`);
    }

    const {e1, e2, normal, vertices}= getLocalReferenceFrame(surface);

    // Iterate through loop to get x,y,z coordinates
    let sumX = 0, sumY = 0, sumZ = 0;
    for (let i = 0; i < vertices.length; i += 3) {
        sumX += vertices[i];
        sumY += vertices[i + 1];
        sumZ += vertices[i + 2];
    }
    // Average of each coordinate to get centroid of the vertices
    const centerX = sumX / (vertices.length / 3);
    const centerY = sumY / (vertices.length / 3);
    const centerZ = sumZ / (vertices.length / 3);
    
    for (let i = 0; i < vertices.length; i += 3) {
        const scaleFactor = 1.03;

        // Increase the size of startPoint
        const startPoint = new THREE.Vector3(
            centerX + (vertices[i] - centerX) * scaleFactor,
            centerY + (vertices[i + 1] - centerY) * scaleFactor,
            centerZ + (vertices[i + 2] - centerZ) * scaleFactor
        );
        
        // Increase the size of endPoint
        const nextIndex = (i + 3) % vertices.length; // Connect back to the first point
        const endPoint = new THREE.Vector3(
            centerX + (vertices[nextIndex] - centerX) * scaleFactor,
            centerY + (vertices[nextIndex + 1] - centerY) * scaleFactor,
            centerZ + (vertices[nextIndex + 2] - centerZ) * scaleFactor
        );
    
        // Calculate the direction vector and distance between start and end points
        const direction = new THREE.Vector3().copy(endPoint).sub(startPoint);
        const distance = direction.length();
    
        // Calculate the midpoint between start and end points
        const midpoint = new THREE.Vector3().copy(startPoint).add(endPoint).multiplyScalar(0.5);
    
        // Calculate the rotation of the frame mesh using the local reference frame
        const rotationMatrix = new THREE.Matrix4().lookAt(startPoint, endPoint, normal);
    
        // Create the frame geometry
        const frameGeometry = new THREE.BoxGeometry(frameThickness*2, frameThickness*2, distance*1);
        // Create the frame mesh
        const frontMesh = new THREE.Mesh(frameGeometry, frameMaterial);
        const backMesh = new THREE.Mesh(frameGeometry, frameMaterial);
        
        // Define the offset for the first frame
        const offsetFirstFrame = normal.clone().multiplyScalar(-0.1 /2);
        
        // Define the offset for the second frame
        const offsetSecondFrame = normal.clone().multiplyScalar(0.02 / 2);
        
        // Position the first frame mesh
        const firstFrameMeshPosition = midpoint.clone().add(offsetFirstFrame);
        
        // Position the second frame mesh
        const secondFrameMeshPosition = midpoint.clone().add(offsetSecondFrame);

        frontMesh.position.copy(firstFrameMeshPosition);
        frontMesh.setRotationFromMatrix(rotationMatrix);
        scene.add(frontMesh);

        backMesh.position.copy(secondFrameMeshPosition);
        backMesh.setRotationFromMatrix(rotationMatrix);
        scene.add(backMesh);

    }
}

export function DrawSurface(scene: THREE.Scene, { surface, layers, floorColor, ceilingColor, indoorWallColor, outdoorWallColor}: {
    surface: Surface,
    layers: THREE.Layers,
    floorColor: string,
    ceilingColor: string,
    indoorWallColor: string,
    outdoorWallColor: string,
}) {
    if (surface.category && (surface.category === "Ceiling" || surface.category === "Roof")) {
        return
    }

    // if (s.category !== "Ceiling" && s.category !== "Roof") {
    //     return null
    // }
    const woodTextureLoader = new THREE.TextureLoader();
    // Ambient Occlusion
    const woodOcc = woodTextureLoader.load("/renderer/woodFloorOcc.jpg")
    woodOcc.wrapS = woodOcc.wrapT = THREE.RepeatWrapping;
    woodOcc.repeat.set(0.5, 0.5);
    // Set the occlusion to uv2
    woodOcc.channel = 2;
    // Roughness Map
    const woodRough = woodTextureLoader.load("/renderer/woodFloorRough.jpg")
    woodRough.wrapS = woodOcc.wrapT = THREE.RepeatWrapping
    woodRough.repeat.set(0.4, 0.4)
    // Color
    const woodColor = woodTextureLoader.load("/renderer/woodFloorColor.jpg")
    woodColor.wrapS = woodColor.wrapT = THREE.RepeatWrapping
    woodColor.repeat.set(0.4,0.4)
    // Normal map
    const woodNormal = woodTextureLoader.load("/renderer/woodFloorNormal.jpg")
    woodNormal.wrapS = woodNormal.wrapT = THREE.RepeatWrapping
    woodNormal.repeat.set(0.4,0.4)
    // Displacement
    const woodDisplacement = woodTextureLoader.load("/renderer/woodFloorDisp.png")
    woodDisplacement.wrapS = woodDisplacement.wrapT = THREE.RepeatWrapping
    woodDisplacement.repeat.set(0.4,0.4)

    const indoorFloorMat = new THREE.MeshPhysicalMaterial({
        color: floorColor,
        side: THREE.DoubleSide,
        clipShadows: true,
        shadowSide: THREE.DoubleSide,
        roughness: 0.4,
        metalness: 0.0,
        reflectivity: 1.0,
        map: woodColor,
        normalMap: woodNormal,
        normalScale: new THREE.Vector2(1,1),
        displacementMap: woodDisplacement,
        displacementScale: 0.1,
        displacementBias:-0.05,
        roughnessMap: woodRough,
        aoMap: woodOcc,
        aoMapIntensity:1,
    });

    const ceilingMat = new THREE.MeshPhysicalMaterial({
        color: ceilingColor,
        side: THREE.DoubleSide,
        clipShadows: true,
        shadowSide: THREE.DoubleSide,
        roughness: 1,
        metalness: 0.0,
        reflectivity: 0.0,
        envMapIntensity:0
    });
    const indoorWallMat = new THREE.MeshPhysicalMaterial({
        color: indoorWallColor,
        side: THREE.DoubleSide,
        clipShadows: true,
        shadowSide: THREE.DoubleSide,
        roughness: 0.4,
        metalness: 0.0,
        reflectivity: 1.0,
        toneMapped: false,
    });

    const outdoorWallMat = new THREE.MeshPhysicalMaterial({
        color: outdoorWallColor,
        side: THREE.DoubleSide,
        clipShadows: true,
        shadowSide: THREE.DoubleSide,
        roughness: 1.0,
        metalness: 0.0,
        reflectivity: 1.0
    });

    let thickness = 0.1

    let indoorMaterial = indoorWallMat
    let outdoorMaterial = outdoorWallMat

    if (surface.category) {
        if (surface.category === "GroundFloor" || surface.category === "InteriorFloor" || surface.category === "ExteriorFloor") {
            indoorMaterial = indoorFloorMat
            outdoorMaterial = ceilingMat
            thickness = 0.1
        }
    }

    ExtrudedSurface(scene, {
        surface,
        thickness,
        indoorMaterial,
        outdoorMaterial,
        layers,
    })

}

export function DrawFenestration(scene: THREE.Scene, { surface, layers, doorColor }: {
    surface: Fenestration,
    layers: THREE.Layers,
    doorColor: string,
}) {
    if (surface.category && surface.category === "Opening") {
        return
    }


    const windowMat = new THREE.MeshPhysicalMaterial()
    windowMat.color.set("white");
    windowMat.transmission = 0.9;
    windowMat.thickness = 0.1;
    windowMat.clipShadows = true;
    windowMat.shadowSide = THREE.DoubleSide
    windowMat.side = THREE.DoubleSide
    windowMat.roughness = 0.01

    const doorMat = new THREE.MeshPhysicalMaterial()
    doorMat.color.set(doorColor);
    doorMat.thickness = 0.1;
    doorMat.clipShadows = true;
    doorMat.shadowSide = THREE.DoubleSide
    doorMat.side = THREE.DoubleSide
    doorMat.roughness = 0.01

    const doorKnob = new THREE.MeshPhysicalMaterial()
    doorKnob.color.set(0xffdf00);
    doorKnob.clipShadows = true;
    doorKnob.shadowSide = THREE.DoubleSide;
    doorKnob.side = THREE.DoubleSide;
    doorKnob.metalness = 0.4;
    doorKnob.roughness = 0.1;

    let knobMaterial = doorKnob
    let thickness = 0.005
    let mat = windowMat
    
    const doorFrame = new THREE.MeshPhysicalMaterial()
    doorFrame.color.set(0xffffff)
    doorFrame.clipShadows = true;
    doorFrame.shadowSide = THREE.DoubleSide;
    doorFrame.side = THREE.DoubleSide;
    doorFrame.metalness = 0.1;
    doorFrame.roughness = 0.1;

    let frame = doorFrame
    let frameThickness = 0.03

    DoorFrame(scene, {
        surface,
        frameThickness:frameThickness,
        frameMaterial: frame,
    });
    if (surface.category && surface.category === "Door") {
        mat = doorMat;
        thickness = 0.08;  
    }
    const doorMesh = ExtrudedSurface(scene,{
        indoorMaterial: mat,
        outdoorMaterial: mat,
        surface,
        thickness,
        layers,
    });

    if (surface.category && surface.category === "Door" && doorMesh) {
        // Rotate door by 10 degrees
        const rotationAngle = 15 * Math.PI / 180; 
        const rotationAxis = new THREE.Vector3(0, -1, 0); 
        const doorRotation = new THREE.Quaternion().setFromAxisAngle(rotationAxis, rotationAngle);
        doorMesh.frontMesh.applyQuaternion(doorRotation);
        doorMesh.backMesh.applyQuaternion(doorRotation);

        // Add door knob to door
        const knobGeometry = new THREE.SphereGeometry(0.05, 32, 32);
        knobMaterial = doorKnob
        const knob = new THREE.Mesh(knobGeometry, knobMaterial);

        const knobPositionFront = new THREE.Vector3(1, 0.8, 0.09); 
        knob.position.copy(knobPositionFront);
        doorMesh.frontMesh.add(knob.clone());

        const knobPositionBack = new THREE.Vector3(1, 0.8, -0.03);
        knob.position.copy(knobPositionBack);
        doorMesh.backMesh.add(knob.clone());
    }
}