export type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 5;

export const ElevationLevel = {
    Level0: 0 as ElevationLevel,
    Level1: 1 as ElevationLevel,
    Level2: 2 as ElevationLevel,
    Level3: 3 as ElevationLevel,
    Level4: 4 as ElevationLevel,
    Level5: 5 as ElevationLevel,
};

export function loadElevationTokens() {
    document.documentElement.style.setProperty('--md-sys-elevation-level0', '0px');
    document.documentElement.style.setProperty('--md-sys-elevation-level1', '1px');
    document.documentElement.style.setProperty('--md-sys-elevation-level2', '3px');
    document.documentElement.style.setProperty('--md-sys-elevation-level3', '6px');
    document.documentElement.style.setProperty('--md-sys-elevation-level4', '8px');
    document.documentElement.style.setProperty('--md-sys-elevation-level5', '12px');
}