import { type Scene, DirectionalLight, AmbientLight, HemisphereLight, Vector3 } from "three";
import { Sky } from 'three/addons/objects/Sky.js';


export default function DrawSky(scene: Scene) {

    // Sky 
    const sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky)

    const skyUniforms = sky.material.uniforms;
    skyUniforms['turbidity'].value = 2;
    skyUniforms['rayleigh'].value = 0.2;
    skyUniforms['mieCoefficient'].value = 0.01;
    skyUniforms['mieDirectionalG'].value = 0.4;

    let sunVec = new Vector3(0, 1, 1)
    sky.material.uniforms['sunPosition'].value.copy(sunVec);


    // // Constant light to avoid dark edges
    const ambient = new AmbientLight(0xffffff, 1);
    scene.add(ambient)

    // Sun
    const sun = new DirectionalLight(0xffffff, 0.3)
    sun.position.set(-4, 10, 2)
    sun.target.position.set(-4, 2, 4);
    sun.castShadow = true
    // Resolution of the shadow
    sun.shadow.mapSize.width = 1024
    sun.shadow.mapSize.height = 1024
    // Objects closer or father than the values will not cast shadows
    sun.shadow.camera.near = 1.75
    sun.shadow.camera.far = 20
    // Define dimensions of frustum for shadow mapping
    sun.shadow.camera.left = -10
    sun.shadow.camera.right = 10
    sun.shadow.camera.top = 10
    sun.shadow.camera.bottom = -10
    // Define vividness of shadow
    sun.shadow.radius = 8
    sun.shadow.blurSamples = 25
    // const shadowCameraHelper1 = new CameraHelper(sun.shadow.camera);
    // // Add the helper to the scene
    // scene.add(shadowCameraHelper1);
    scene.add(sun.target)
    scene.add(sun);

    const sun2 = new DirectionalLight(0xffffff, 0.3)
    sun2.position.set(4, 10, 4)
    sun2.target.position.set(-3, 2, 4);
    sun2.castShadow = false
    //Resolution of the shadow
    sun2.shadow.mapSize.width = 512
    sun2.shadow.mapSize.height = 512
    // Objects closer or father than the values will not cast shadows
    sun2.shadow.camera.near = 1.75
    sun2.shadow.camera.far = 20
    // Define dimensions of frustum for shadow mapping
    sun2.shadow.camera.left = -10
    sun2.shadow.camera.right = 10
    sun2.shadow.camera.top = 10
    sun2.shadow.camera.bottom = -10
    // Define vividness of shadow
    sun2.shadow.radius = 8
    sun2.shadow.blurSamples = 25
    scene.add(sun2.target)
    scene.add(sun2);

    const sun3 = new DirectionalLight(0xffffff, 0.3)
    sun3.position.set(-8, 10, 4)
    sun3.target.position.set(-4, 2, 4);
    sun3.castShadow = false
    //Resolution of the shadow
    sun3.shadow.mapSize.width = 512
    sun3.shadow.mapSize.height = 512
    // Objects closer or father than the values will not cast shadows
    sun3.shadow.camera.near = 1.75
    sun3.shadow.camera.far = 20
    // Define dimensions of frustum for shadow mapping
    sun3.shadow.camera.left = -10
    sun3.shadow.camera.right = 10
    sun3.shadow.camera.top = 10
    sun3.shadow.camera.bottom = -10
    // Define vividness of shadow
    sun3.shadow.radius = 8
    sun3.shadow.blurSamples = 25
    scene.add(sun3.target)
    scene.add(sun3);

    // Extra sky
    const skyGlow = new HemisphereLight(0xffffff, 0.5)
    skyGlow.castShadow = false;
    scene.add(skyGlow)
}

