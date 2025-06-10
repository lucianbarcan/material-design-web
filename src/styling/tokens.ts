import { loadElevationTokens } from "./Elevation";
import { loadFontTokens } from "./Font";
import { loadShapeTokens } from "./Shape";

export function loadTokens() {
    loadFontTokens();
    loadElevationTokens();
    loadShapeTokens();
}