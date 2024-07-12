import Router from "./router"
import Layer from "./layer"
import { idize, capitalize } from "./ux"
import type { LayerData } from "./types"

export default class Diagram {

    containerID: string | undefined = undefined
    layers: Layer[] = []
    parent: SVGSVGElement | undefined = undefined
    router: Router | undefined = undefined
    schema: LayerData[] | undefined = undefined

    constructor(router: Router, containerID: string, layers: LayerData[]) {
        this.containerID = containerID
        this.router = router
        this.schema = layers
        this.layers = this.schema!.map((l: any) => {
            return new Layer(this, router, l)
        })

    }

    clean() {
        // Clean all
        var allCircles = document.getElementsByClassName("layer_circle")
        for (var i = 0; i < allCircles.length; i++) {
            allCircles[i].classList.remove("active")
        }
        var allCodes = document.getElementsByClassName("code_group")
        for (var i = 0; i < allCodes.length; i++) {
            allCodes[i].classList.remove("active")
            allCodes[i].classList.remove("inactive")
        }
        // Set title

        var homeTitle = "Welcome to the Atlas of Comfort";
        document.getElementById("title_text_aid")!.innerHTML = homeTitle;


        var textAid = document.getElementById("content_text_aid")!
        textAid.innerHTML = "<p>The development of the Feeling of Comfort goes through seven layers:</p>"
        this.schema!.forEach((layer: any) => {


            var name = layer.name
            var li = document.createElement('a')
            li.onclick = () => {
                this.router?.navigate("?layer=" + idize(name), this)
            }
            li.innerHTML = capitalize(name);
            li.classList.add('list_element')
            textAid.appendChild(li)

        })

        document.getElementById("back_to_layers_button")!.onclick = () => {
            this.router?.navigate("", this)
        };

    }

    draw() {

        let parent = document.getElementById(this.containerID!)!

        // DIAGRAM
        this.parent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.parent.classList.add("diagram_container")
        this.parent.setAttribute("viewBox", "-1 -1 102 102")
        parent.appendChild(this.parent)

        // Draw all the layers 
        //IN THE ORDER THEY ARE RECEIVED FROM THE 
        // SCHEME.        
        var nLayers = this.layers.length
        this.layers.forEach((layer, index) => {
            layer.draw(this.parent!, index, nLayers)
        })

        // LEGEND
        var legendContainer = document.createElement('div');
        legendContainer.setAttribute("id", "legend_container")
        parent.appendChild(legendContainer);

        // daylight
        var legend = document.createElement('p');
        var circle = document.createElement('small');
        circle.classList.add('legend_circle')
        circle.classList.add('daylight')
        legend.appendChild(circle);
        legend.innerHTML += "Daylight";
        legendContainer.appendChild(legend);

        // Acoustic
        var legend = document.createElement('p');
        var circle = document.createElement('small');
        circle.classList.add('legend_circle')
        circle.classList.add('acoustic')
        legend.appendChild(circle);
        legend.innerHTML += "Acoustic";
        legendContainer.appendChild(legend);

        // Air quality
        var legend = document.createElement('p');
        var circle = document.createElement('small');
        circle.classList.add('legend_circle')
        circle.classList.add('air_quality')
        legend.appendChild(circle);
        legend.innerHTML += "Air quality";
        legendContainer.appendChild(legend);

        // Warmness
        var legend = document.createElement('p');
        var circle = document.createElement('small');
        circle.classList.add('legend_circle')
        circle.classList.add('warmness')
        legend.appendChild(circle);
        legend.innerHTML += "Warmness";
        legendContainer.appendChild(legend);

        // Coolness
        var legend = document.createElement('p');
        var circle = document.createElement('small');
        circle.classList.add('legend_circle')
        circle.classList.add('coolness')
        legend.appendChild(circle);
        legend.innerHTML += "Coolness";
        legendContainer.appendChild(legend);



    }
}
