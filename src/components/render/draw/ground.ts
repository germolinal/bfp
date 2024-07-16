import {  CircleGeometry, FrontSide, Mesh, MeshStandardMaterial, type Scene } from "three";


export default function DrawGround(scene: Scene, color: string = "#bab6ab") {
    const geometry = new CircleGeometry(300);    
    const material = new MeshStandardMaterial({ color, side: FrontSide });
    const circle = new Mesh(geometry, material);
    
    circle.rotation.x = -Math.PI/2;
    circle.position.y = -0.1
    scene.add(circle)    
}