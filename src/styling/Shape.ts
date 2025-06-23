export type ShapeCorner =
    | '--md-sys-shape-corner-full'
    | '--md-sys-shape-corner-medium'
    | '--md-sys-shape-corner-large'
    | '--md-sys-shape-corner-large-increased'
    | '--md-sys-shape-corner-extra-large';

export const ShapeCorner = {
    Circular: '--md-sys-shape-corner-full' as ShapeCorner,
    Medium: '--md-sys-shape-corner-medium' as ShapeCorner,
    Large: '--md-sys-shape-corner-large' as ShapeCorner,
    LargeIncreased: '--md-sys-shape-corner-large-increased' as ShapeCorner,
    ExtraLarge: '--md-sys-shape-corner-extra-large' as ShapeCorner,
};

export function loadShapeTokens() {
    document.documentElement.style.setProperty('--md-sys-shape-corner-full', '999px');
    document.documentElement.style.setProperty('--md-sys-shape-corner-medium', '12px');
    document.documentElement.style.setProperty('--md-sys-shape-corner-large', '16px');
    document.documentElement.style.setProperty('--md-sys-shape-corner-large-increased', '20px');
    document.documentElement.style.setProperty('--md-sys-shape-corner-extra-large', '28px');
}