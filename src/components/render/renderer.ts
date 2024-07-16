
import { Scene, PerspectiveCamera, WebGLRenderer, PMREMGenerator } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import DrawSky from "./draw/sky";
import DrawGround from "./draw/ground";
import { DrawSurface, DrawFenestration } from "./draw/surface";
import DrawBathtub from "./draw/bathtub";
import DrawBed from "./draw/bed";
import DrawChair from "./draw/chair";
import DrawDishwasher from "./draw/dishwasher";
import DrawFireplace from "./draw/fireplace";
import DrawOven from "./draw/oven";
import DrawRefrigerator from "./draw/refrigerator";
import DrawSink from "./draw/sink";
import DrawSofa from "./draw/sofa";
import DrawStorage from "./draw/storage";
import DrawStove from "./draw/stove";
import DrawTable from "./draw/table";
import DrawTelevision from "./draw/television";
import DrawToilet from "./draw/toilet";

import type { DrawableModel } from "./simple_types/simple_model";

import * as THREE from "three";
import type Surface from "./simple_types/surface";
import type Fenestration from "./simple_types/fenestration";

import type SimpleObject from "./simple_types/object";
import type {
    ChairOptions,
    SofaOptions,
    StorageOptions,
    TableOptions,
} from "./simple_types/object_specs";
import { DrawWasherDryer } from "./draw/washerDryer";


type ObservedAttributes =
    | "model"
    | "groundColor"
    | "indoorWallColor"
    | "outdoorWallColor"
    | "ceilingColor"
    | "floorColor"
    | "doorColor"
    | "accentColor";




export default class Simple3DRenderer extends HTMLElement {
    private _scene: Scene | null = null;
    private _renderer: WebGLRenderer | null = null;
    private _camera: PerspectiveCamera | null = null;
    private _controls: OrbitControls | null = null;
    _model: DrawableModel | null = null;
    groundColor = "#bab6ab"
    indoorWallColor = "#ffffff"
    outdoorWallColor = "#cecece"
    ceilingColor = "#d2d2d2"
    floorColor = "#EFDECD"
    doorColor = "#ccb999"
    accentColor = "#00658b"


    set model(v: string) {
        this.attributeChangedCallback("model", JSON.stringify(this._model), v)
    }

    attributeChangedCallback(
        name: ObservedAttributes,
        _useless: string,
        newValue: string,
    ) {
        switch (name) {
            case "model":
                if (this._scene) {
                    while (this._scene.children.length > 0) {
                        this._scene.remove(this._scene.children[0]);
                    }
                }
                this._model = JSON.parse(newValue)
                break;
            case "groundColor":
                this.groundColor = newValue
                break
            case "indoorWallColor":
                this.indoorWallColor = newValue
                break
            case "outdoorWallColor":
                this.outdoorWallColor = newValue
                break
            case "ceilingColor":
                this.ceilingColor = newValue
                break
            case "floorColor":
                this.floorColor = newValue
                break
            case "doorColor":
                this.doorColor = newValue
                break
            case "accentColor":
                this.accentColor = newValue
                break

        }
        this.draw()
        this.renderModel();
    }

    constructor() {
        super();
    }


    connectedCallback() {

        if (!this.shadowRoot) {
            this.attachShadow({ mode: "open" });
        }
        this.shadowRoot!.innerHTML = `
            <style>          
                :host {
                    display: block;
                    height: 100%;
                    width: 100%;
                }      
                #canvas-container {
                    background-color:#000;                    
                    height: 100%;
                    width: 100%;
                    min-width: 200px;
                }
                #canvas-container > * {
                    min-width: 200px;
                }
            </style>   
            <div  id="canvas-container"></div>
        `;
        /* SCENE */
        this._scene = new Scene();

        /* CAMERA */
        const fov = 60;
        const aspect = 2; // the canvas default
        const near = 0.1;
        const far = 2000;
        this._camera = new PerspectiveCamera(fov, aspect, near, far);
        // this._camera.position.z = 2;
        this._camera.position.set(15, 15, 15);

        /* RENDERER */
        this._renderer = new WebGLRenderer({ antialias: true });
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this._renderer.toneMappingExposure = 0.5;
        this._renderer.setClearColor(0xffffff, 0);
        this._renderer.shadowMap.enabled = true
        this._renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        /* CONTROLS */
        this._controls = new OrbitControls(
            this._camera!,
            this._renderer!.domElement,
        );
        this._controls.addEventListener("change", this.renderModel);
        this._controls.maxPolarAngle = Math.PI / 2;
        this._controls.enableZoom = true;
        this._controls.enablePan = true;

        /* ADD OBJECTS */
        this.draw();

        /* MOUNT */
        const canvasContainer =
            this.shadowRoot!.getElementById("canvas-container")!;
        canvasContainer.appendChild(this._renderer.domElement);

        /* RENDER */
        this.onWindowResize();

        /* LISTENERS */
        window.addEventListener("resize", this.onWindowResize);
    }

    private addObject(o: SimpleObject) {
        let e1 = new THREE.Vector3(-o.front.x, o.front.z, o.front.y);
        let e2 = new THREE.Vector3(-o.up.x, o.up.z, o.up.y);
        let e3 = e1.clone().cross(e2);

        let origin = new THREE.Vector3(
            o.location.x,
            o.location.z,
            o.location.y,
        );
        const rot = new THREE.Matrix4().makeBasis(e1, e2, e3);
        const translation = new THREE.Matrix4().makeTranslation(
            origin.x,
            origin.y,
            origin.z,
        );
        const transform = rot.premultiply(translation);

        let positionPrime = new THREE.Vector3();
        const quaternion = new THREE.Quaternion();
        const scale = new THREE.Vector3();
        transform.decompose(positionPrime, quaternion, scale);
        const position = new THREE.Vector3(
            -positionPrime.x,
            positionPrime.y + o.dimensions.z / 2,
            positionPrime.z,
        );
        const dimensions: [number, number, number] = [
            o.dimensions.x,
            o.dimensions.y,
            o.dimensions.z,
        ];

        let furniture: THREE.Group | undefined = undefined;

        switch (o.specifications.type) {
            case "Other":
                break;
            case "Bathtub":
                furniture = DrawBathtub(o.specifications, dimensions);
                break;
            case "Bed":
                furniture = DrawBed(
                    o.specifications,
                    dimensions,
                    this.accentColor,
                );
                break;
            case "Chair":
                furniture = DrawChair(
                    o.specifications as ChairOptions,
                    dimensions,
                    this.accentColor,
                );
                break;
            case "Dishwasher":
                furniture = DrawDishwasher(o.specifications, dimensions);
                break;
            case "Fireplace":
                furniture = DrawFireplace(o.specifications, dimensions);
                break;
            case "Oven":
                furniture = DrawOven(o.specifications, dimensions);
                break;
            case "Refrigerator":
                furniture = DrawRefrigerator(o.specifications, dimensions);
                break;
            case "Sink":
                furniture = DrawSink(o.specifications, dimensions);
                break;
            case "Sofa":
                furniture = DrawSofa(
                    o.specifications as SofaOptions,
                    dimensions,
                );
                break;
            case "Stairs":
                break;
            case "Storage":
                furniture = DrawStorage(
                    o.specifications as StorageOptions,
                    dimensions,
                    this.accentColor,
                );
                break;
            case "Stove":
                furniture = DrawStove(o.specifications, dimensions);
                break;
            case "Table":
                furniture = DrawTable(
                    o.specifications as TableOptions,
                    dimensions,
                );
                break;
            case "Television":
                furniture = DrawTelevision(o.specifications, dimensions);
                break;
            case "Toilet":
                furniture = DrawToilet(o.specifications, dimensions);
                break;
            case "WasherDryer":
                furniture = DrawWasherDryer(o.specifications, dimensions)
                break;
        }
        if (furniture) {
            const height = o.dimensions.z;
            furniture.applyQuaternion(quaternion);
            furniture.position.set(position.x, position.y, position.z);
            this._scene!.add(furniture);
        }
    }


    private draw() {
        if (!this._scene) {
            return
        }
        DrawSky(this._scene);
        DrawGround(this._scene, this.groundColor);
        if (!this._model) {
            return
        }

        this._model!.surfaces.forEach((surface: Surface) => {
            DrawSurface(this._scene!, {
                surface,
                layers: new THREE.Layers(),
                floorColor: this.floorColor,
                ceilingColor: this.ceilingColor,
                indoorWallColor: this.indoorWallColor,
                outdoorWallColor: this.outdoorWallColor!
            });
        });

        this._model!.fenestrations.forEach((surface: Fenestration) => {
            DrawFenestration(this._scene!, {
                surface,
                layers: new THREE.Layers(),
                doorColor: this.doorColor,
            });
        });

        this._model!.objects.forEach((o: SimpleObject) => {
            this.addObject(o);
        });

    }
    private renderModel = () => {
        this._renderer!.render(this._scene!, this._camera!);
    };
    private onWindowResize = () => {
        const e = this.shadowRoot!.getElementById("canvas-container")!
        let width = window.innerWidth - 300//e.offsetWidth
        let height = window.innerHeight//e.offsetHeight        
        this._camera!.aspect = width / height;
        this._camera!.updateProjectionMatrix();
        // this._renderer!.setSize(window.innerWidth, window.innerHeight);
        this._renderer!.setSize(width, height);

        this.renderModel();
    };

    disconnectedCallback() {
        window.removeEventListener("resize", this.onWindowResize);
    }
}
