

export function divideIntoInt(length: number, max: number, min: number): number {

    if (length < min) {
        return 1
    }

    const min_h = Math.floor(length / min)
    const min_d = length / min - min_h
    const max_h = Math.floor(length / max)
    const max_d = length / max - max_h
    return min_d > max_d ? max_h : min_h
}

export function lightenHexColor(hex: string, amount: number = 0.1): string {
    // Validate hex string and ensure it's 6 characters long
    hex = hex.replace(/^#/, "").trim();
    if (hex.length !== 6) {
        throw new Error("Invalid hex color format");
    }

    // Convert hex string to decimal RGB values
    const rgb = hex!.match(/.{2}/g)!.map((part) => parseInt(part, 16));

    // Lighten each RGB value by the specified amount
    const lightenedRgb = rgb.map((value) =>
        Math.round(Math.min(255, value + (255 - value) * amount))
    );

    // Convert back to hex string
    const hexParts = lightenedRgb.map((value) => value.toString(16).padStart(2, "0"));
    return "#" + hexParts.join("");
}