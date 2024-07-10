import type Router from "./router"
import { idize, capitalize, hideTooltip, showTooltip, positionTooltip } from "./ux"
import Diagram from "./diagram"

export default class Element {

    name: string | undefined = undefined
    domains: any[] | undefined = undefined
    description: string | undefined = undefined
    container: SVGGElement | undefined = undefined
    router: Router | undefined = undefined
    diagram: Diagram | undefined = undefined

    constructor(diagram: Diagram, router: Router, data: any) {
        this.name = data.name
        this.domains = data.domains
        this.description = data.description
        this.router = router
        this.diagram = diagram
    }


    transform(index: number, nElements: number, radius: number, margin: number, baseAngle: number) {

        // Angle
        var realAngle = index * 360 / nElements + baseAngle
        var fixedAngle = realAngle;
        // Calculate position
        var angle = realAngle * Math.PI / 180
        const cx = 50;
        const cy = 50;

        var x = cx + (radius + margin) * Math.cos(angle)
        var y = cy - (radius + margin) * Math.sin(angle)

        // Calculate transformation
        const positionXY = [x, y].join(",")
        var transformation = "rotate(" + (-fixedAngle) + "," + positionXY + ")"
        transformation += " translate(" + positionXY + ")"
        return transformation
    }

    draw(parent: HTMLElement, index: number, nElements: number, radius: number, dR: number, baseAngle: number) {
        // We draw INSIDE the circle.
        radius -= dR;
        var margin = dR / 2;

        // Create sub container
        this.container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        var g = this.container
        g.classList.add("code_group")
        var id = idize(this.name!)
        g.id = id


        // Set behaviour        
        g.onclick = () => {            
            this.router!.navigate("?code=" + g.id, this.diagram!)
        }

        var tooltip = document.getElementById("tooltip")!
        var name = capitalize(this.name!);
        g.onmouseover = (e) => {
            showTooltip(e, tooltip, name)
        }

        g.onmousemove = (e) => {
            positionTooltip(e, tooltip)
        }

        g.onmouseleave = () => {
            hideTooltip(tooltip)
        }

        // Position it where it belongs
        var transformation = this.transform(index, nElements, radius, margin, baseAngle)
        g.setAttribute("transform", transformation)


        // Lets try circles
        var r = dR / 5;
        var getCircle = (domain: string) => {
            domain = domain.toLowerCase()
            domain = domain.split(" ").join("_")

            var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            c.setAttribute("r", `${r}`);
            c.classList.add(domain)
            c.classList.add("domain_tag")
            return c
        }
        if (this.domains!.length === 1) {
            var c = getCircle(this.domains![0])
            g.appendChild(c)
        } else {
            var dAngle = 2 * Math.PI / this.domains!.length;
            var innerR = dR / 6;

            this.domains!.forEach((domain, index) => {
                var domainAngle = index * dAngle;

                var dX = Math.cos(domainAngle) * innerR;
                var dY = Math.sin(domainAngle) * innerR;

                var c = getCircle(domain)
                c.setAttribute("transform", "translate(" + [dX, dY].join(",") + ")")
                g.appendChild(c)
            })

        }


        // Append
        parent.appendChild(g)

    }


}