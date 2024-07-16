import Diagram from "./diagram";
import type { ValidDomain } from "./types";
import { selectLayer, selectCode } from "./ux";

// From https://medium.com/javascript-by-doing/create-a-modern-javascript-router-805fc14d084d
export default class Router {
    mode: "history" | "hash";
    currentDomain: ValidDomain | null = null
    currentLayer: string | undefined = undefined;
    currentCode: string | undefined = undefined;


    constructor() {
        // @ts-ignore
        this.mode = window.history.pushState ? "history" : "hash";
    }

    clearSlashes(path: string) {
        return path.toString()
            .replace(/\/$/, '')
            .replace(/^\//, '')
    }

    getFragment() {
        var fragment = "";

        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
            
            fragment = fragment.replace("atlas.html", "").replace("atlas", "");
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : "";
        }

        return this.clearSlashes(fragment);
    }// end of getFragment

    compareState(state1: any, state2: any) {
        if (!state1 && !state2) {
            return true
        }
        if (!state1 || !state2) {
            return false
        }
        // It was a layer query        
        // different layer? They are different.
        if (state1.layer != state2.layer || state1.domain != state2.domain) {
            return false
        }


        // it was a code query        
        if (state1.code != state2.code || state1.domain != state2.domain) {
            return false
        }

        return true
    }

    setHistory(path: string, newState: any) {
        // Set history, if needed         
        var state = history.state;

        if (!this.compareState(state, newState)) {
            if (this.mode === "history") {
                window.history.pushState(newState, "", path)
            } else {
                let url = window.location.href.replace(/#(.*)$/, "") + path;
                window.location.href = url;
            }
        }
    }

    resolveUrl(path: string, diagram: Diagram) {
        // run callback        
        if (path === "atlas.html" || path === "" || path === "?") {
            diagram.clean();
            return {}
        } else {
            // Transform into object
            // Remove the '?'
            path = path.substring(1);

            var query: any = {};

            var args = path.split("&");
            for (var i = 0; i < args.length; i++) {
                var aux = args[i].split("=");
                query[aux[0]] = aux[1];
            }


            // Set default domain if there is none
            if (query.domain === undefined) {
                query.domain = this.currentDomain
            }

            // Process query
            if (query.layer !== undefined) {
                // query for layer
                selectLayer(this, query.layer, query.domain, diagram);
                this.currentLayer = query.layer;
            } else if (query.code !== undefined) {
                // query for code                
                selectCode(this, query.code, query.domain, diagram);
                this.currentCode = query.code;
            } else {
                alert("Router not working with -> '" + path + "'")
            }

            this.currentDomain = query.domain
            return query
        }
    }

    navigate(path: string, diagram: Diagram) {
        var query = this.resolveUrl(path, diagram);
        this.setHistory(path, query);
    }



}