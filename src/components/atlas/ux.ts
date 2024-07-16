
"use strict"
import type Diagram from "./diagram"
import Router from "./router"

export function capitalize(txt: string) {
    return (txt[0].toUpperCase() + txt.slice(1))
}

export function nameize(txt: string) {
    return txt.split("_").join(" ")
}

export function idize(txt: string) {
    return txt.toLowerCase().split(" ").join("_")
}


export function setEventInLinks(router: Router, container: HTMLElement, diagram: Diagram) {

    var allLinks = container.querySelectorAll('a');
    allLinks.forEach((the_link) => {
        var href = the_link.getAttribute("href")!.toString();

        if (href.startsWith("code=") || href.startsWith("layer=")) {
            the_link.removeAttribute("href")
            the_link.onclick = function () {
                router.navigate("?" + href, diagram)
            }
        }
    })
}

//////////////////////
/*      TOOLTIP     */
//////////////////////

export function positionTooltip(event: any, tooltip: any) {
    var eventDoc, doc, body;

    
    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }

    /////
    //var tooltip=document.getElementById("tooltip")
    tooltip.style.left = (event.pageX + "px");
    tooltip.style.top = (event.pageY + "px");
}// end of positionTooltip

export function showTooltip(event: any, tooltip: HTMLElement, name: string) {

    positionTooltip(event, tooltip)

    tooltip.innerHTML = name;
    tooltip.classList.add("active")

}// end of showTooltip

export function hideTooltip(tooltip: HTMLElement) {
    tooltip.classList.remove("active")
}

/////////////////////
/* LAYER FUNCTIONS */
/////////////////////
export function getLayerData(layerName: string, scheme: any) {

    for (var i = 0; i < scheme.length; i++) {
        if (scheme[i].name === layerName) {
            return scheme[i]
        }
    }
    return null
}

export function highlightLayer(layerID?: string) {
    // Clean codes if we are actually selecting a layer
    if (layerID !== undefined) {
        highlightCode()
    }

    // Set as active... and clean the rest
    var allCircles = document.getElementsByClassName("layer_circle")
    for (var i = 0; i < allCircles.length; i++) {
        if (allCircles[i].id === layerID) {
            allCircles[i].classList.add("active")
        } else {
            allCircles[i].classList.remove("active")
        }
    }
}

export function selectLayer(router: Router, layerID: string, domainID: string, diagram: Diagram) {
    if (domainID === undefined) {
        throw "No domainID passed to selectLayer()"
    }
    if (layerID === undefined) {
        throw "No layerID passed to selectLayer()"
    }

    // Get name and data
    var layerName = nameize(layerID)
    var layerData = getLayerData(layerName, diagram.schema)
    if (layerData === null) {
        alert("Layer '" + layerName + "' is not in the scheme!")
        return
    }

    /* TEXT AND CONTENT */

    // Change content
    var title = document.getElementById("title_text_aid")!
    title.innerHTML = capitalize(layerName);

    var content = document.getElementById("content_text_aid")!

    fetch("/api/schema/describe_layer/" + layerID, {
        method: "GET"
    }).then(async (r) => {
        if (!r.ok) {
            throw new Error("Oh no!")
        }
        let response = await r.json()

        content.innerHTML = response.description;
        setEventInLinks(router, content, diagram);

        // Add domains.            
        var allQuotesContainer = document.createElement('div')
        allQuotesContainer.classList.add("tab_page_container")
        content.appendChild(allQuotesContainer)

        // Tabs container
        var tabsContainer = document.createElement('ul')
        tabsContainer.classList.add("tabs_container")
        allQuotesContainer.appendChild(tabsContainer)

        var domainContainers: any = {};
        var activatedAny = false;
        const allDomains = [
            "daylight",
            "acoustic",
            "warmness",
            "coolness",
            "air quality",
        ];
        let firstTab : HTMLElement | undefined = undefined;
        allDomains.forEach((domain: string) => {
            // add button
            var tab = document.createElement('li');
            if(!firstTab){
                firstTab = tab
            }
            tab.innerText = (domain[0].toUpperCase() + domain.slice(1));
            tabsContainer.appendChild(tab);

            // add container
            domainContainers[domain] = document.createElement('div')
            domainContainers[domain].classList.add("tab_page")
            domainContainers[domain].classList.add("list")
            allQuotesContainer.appendChild(domainContainers[domain])

            // Add event                        
            tab.onclick = function () {
                var path = "?layer=" + layerID + "&domain=" + idize(domain);
                router.navigate(path, diagram)
            }

            if (idize(domain) === domainID) {                
                domainContainers[domain].classList.add("active")
                tab.classList.add('active')
                activatedAny = true;
            }

        })
        if (!activatedAny) {
            domainContainers[allDomains[0]].classList.add("active")
            firstTab!.classList.add('active')
        }


        layerData.data.forEach((code: any) => {
            code.domains.forEach((domain: string) => {
                var name = code.name
                var li = document.createElement('a')
                li.onclick = function () {
                    router.navigate("?code=" + idize(name) + "&domain=" + idize(domain), diagram)
                }
                li.innerHTML = capitalize(name);
                domainContainers[domain].appendChild(li)
            })
        })



    });

    /* COLOURS AND CLASSES */
    highlightLayer(layerID)

    document.getElementById("back_button")!.onclick = () => {
        router.navigate("", diagram)
    };

    router.currentLayer = layerID;

}

/////////////////////
/* CODE FUNCTIONS */
/////////////////////

export function getCodeData(codeName: string, schema: any[]) {
    for (var i = 0; i < schema.length; i++) {
        var layerData = schema[i].data;
        for (var j = 0; j < layerData.length; j++) {
            var code = layerData[j];
            if (code.name === codeName) {
                return layerData[j];
            }
        }
    }
    return null
}

export function highlightCode(codeID?: string) {
    var setInactive = false
    if (codeID !== undefined) {
        highlightLayer()
        setInactive = true
    }


    var allCodes = document.getElementsByClassName("code_group")
    for (var i = 0; i < allCodes.length; i++) {
        if (allCodes[i].id === codeID) {
            allCodes[i].classList.add("active")
            allCodes[i].classList.remove("inactive")
        } else {
            allCodes[i].classList.remove("active")
            if (setInactive) {
                allCodes[i].classList.add("inactive")
            } else {
                allCodes[i].classList.remove("inactive")
            }
        }
    }

}



export function selectCode(router: Router, codeID: string, domainID: string, diagram: Diagram) {

    if (domainID === undefined) {
        throw "No domainID passed to selectCode()"
    }
    if (codeID === undefined) {
        throw "No codeID passed to selectCode()"
    }

    // Get name and data
    var name = nameize(codeID)
    var codeData = getCodeData(name, diagram.schema!)
    if (codeData === null) {
        alert("Code '" + name + "' is not in the scheme!")
        return
    }


    /* TEXT AND CONTENT */
    // Change content
    var title = document.getElementById("title_text_aid")!
    title.innerHTML = capitalize(name);


    var mainContent = document.getElementById("content_text_aid")!
    mainContent.innerHTML = ""

    var descriptionContent = document.createElement('div');
    mainContent.appendChild(descriptionContent)

    var contentTable = document.createElement('div');
    mainContent.appendChild(contentTable);

    // Source the description
    fetch("/api/schema/describe_code/" + codeID, {
        method: "GET"
    }).then(async (r) => {
        if (!r.ok) {
            throw new Error("Oh no!")
        }
        var response = await r.json()
        var newHTML = ""
        if (response.success === true) {
            newHTML = "<p>" + response.description + "</p>";
        } else {
            newHTML = "<p>No description available...</p>"
        }


        descriptionContent.innerHTML = newHTML;
        setEventInLinks(router, descriptionContent, diagram);
    })



    // Get quotes from server.    
    fetch("/api/quotes/code/" + codeID, {
        method: "GET"
    }).then(async (r) => {
        if (!r.ok) {
            throw new Error("Oh no!")
        }
        
        var response = await r.json()        
        var firstContainer;
        var firstTitle;
        // Add container for quotes
        var allQuotesContainer = document.createElement('div')
        allQuotesContainer.classList.add("tab_page_container")
        contentTable.appendChild(allQuotesContainer)

        // Tabs container
        var tabsContainer = document.createElement('ul')
        tabsContainer.classList.add("tabs_container")
        allQuotesContainer.appendChild(tabsContainer)

        // Iterate each domain
        var activatedAny = false;
        response.data.forEach((domain: any, index: number) => {
            // Add header                         
            var title = document.createElement('li');
            title.innerText = domain.name;
            tabsContainer.appendChild(title);

            // Add container 
            var domainQuotesContainer = document.createElement('div')
            // Store it for later... in case we need to activate this.
            if (index === 0) {
                firstContainer = domainQuotesContainer;
                firstTitle = title;
            }

            domainQuotesContainer.classList.add("tab_page")
            allQuotesContainer.appendChild(domainQuotesContainer)

            if (idize(domain.name) === domainID) {
                domainQuotesContainer.classList.add("active")
                title.classList.add('active')
                activatedAny = true;
            }

            title.onclick = () => {
                var allButtons = tabsContainer.getElementsByTagName('li')
                for (var i = 0; i < allButtons.length; i++) {
                    allButtons[i].classList.remove('active')
                }
                title.classList.add("active")

                var all = allQuotesContainer.getElementsByClassName("tab_page")
                for (var i = 0; i < all.length; i++) {
                    all[i].classList.remove("active")
                }

                domainQuotesContainer.classList.add('active')
                // @ts-ignore 
                // this should work for no
                router.currentDomain = idize(domain.name)
            }


            // Iterate Each respondent
            domain.data.forEach((r: any) => {

                // Add container 
                var respondentQuotesContainer = document.createElement('div')
                respondentQuotesContainer.classList.add("respondent_quotes_container")
                domainQuotesContainer.appendChild(respondentQuotesContainer)

                // Add metadata container
                var respondentMetaDataContainer = document.createElement('div')
                respondentMetaDataContainer.classList.add("respondent_metadata_container")
                respondentQuotesContainer.appendChild(respondentMetaDataContainer)

                var data = document.createElement('small')
                data.innerText = (r.gender + ", " + r.age + " years old, searched in " + r.country);

                respondentMetaDataContainer.appendChild(data);


                // each quote
                r.quotes.forEach((q: string) => {
                    var quote = document.createElement('p')
                    quote.innerText = q
                    quote.classList.add("quote")
                    respondentQuotesContainer.appendChild(quote)
                })

            })
        })
        if (!activatedAny) {
            firstContainer!.classList.add("active")
            firstTitle!.classList.add('active')
        }

    })

    /* COLOURS AND CLASSES */
    // Set as active... and clean the rest
    highlightCode(codeID)

    document.getElementById("back_button")!.onclick = function () {
        var path = "?layer=" + router.currentLayer
        if (router.currentDomain) {
            path += ("&domain=" + router.currentDomain)
        }
        router.navigate(path, diagram)
    };


}



