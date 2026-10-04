// The site is served from a sub-path (e.g., https://germolinal.github.io/bfp/),
// configured through `base` in astro.config.mjs. Root-relative URLs must be prefixed with it.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefixes a root-relative path (e.g., "/atlas") with the site's base path */
export function withBase(path: string): string {
    if (/^([a-z]+:)?\/\//i.test(path)) {
        return path;
    }
    return BASE + (path.startsWith("/") ? path : "/" + path);
}

/** Removes the site's base path from a pathname (e.g., "/bfp/atlas" -> "/atlas") */
export function stripBase(pathname: string): string {
    if (BASE && pathname.startsWith(BASE)) {
        return pathname.slice(BASE.length) || "/";
    }
    return pathname;
}
