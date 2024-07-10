import Router from "./router"
import Element from "./element"
import { idize, capitalize, showTooltip, positionTooltip, hideTooltip } from "./ux"
import type Diagram from "./diagram"
export default class Layer {

    name: string | undefined = undefined
    description: string | undefined = undefined
    elements: any[] = []
    router: Router | undefined = undefined
    diagram: Diagram | undefined = undefined

    constructor(diagram: Diagram, router: Router, data: any) {
        this.name = data.name
        this.description = data.description
        this.router = router
        this.elements = []
        var elements = this.elements
        this.diagram = diagram
        data.data.forEach(function (e: any) {
            elements.push(new Element(diagram, router, e))
        })

    }

    radius(index: number, nLayers: number) {
        return (nLayers - index) * 50 / nLayers
    }

    draw(parent: SVGSVGElement, index: number, nLayers: number) {

        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("cx", "50")
        circle.setAttribute("cy", "50")
        var radius = this.radius(index, nLayers)
        circle.setAttribute("r", `${radius}`)
        circle.classList.add("layer_circle")
        circle.classList.add("layer_" + index)
        circle.id = idize(this.name!);

        parent.appendChild(circle)

        // Set behaviour        
        circle.onclick = () => {
            this.router?.navigate("?layer=" + circle.id, this.diagram!)
        }

        var tooltip = document.getElementById("tooltip")!
        var name = capitalize(this.name!);
        circle.onmouseover = function (e) {
            showTooltip(e, tooltip, name)
        }

        circle.onmousemove = function (e) {
            positionTooltip(e, tooltip)
        }

        circle.onmouseleave = function () {
            hideTooltip(tooltip)
        }

        // Draw children
        var nElements = this.elements.length
        var baseAngle = 0;//Math.random()*360
        this.elements.forEach(function (e, index) {
            e.draw(parent, index, nElements, radius, 50 / nLayers, baseAngle)
        })
    }
}