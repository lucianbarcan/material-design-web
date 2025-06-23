import { ShapeCorner } from "../../styling/Shape";

export type FAB_SIZE = 'default' | 'medium' | 'large';
export type FAB_COLORS = 'primary' | 'secondary' | 'tertiary';

export const FAB_MEASUREMENTS: {
    [K in FAB_SIZE]: {
        height: number;
        width: number;
        iconSize: number;
        shape: ShapeCorner;
    }
} = {
    default: {
        height: 56,
        width: 56,
        iconSize: 24,
        shape: ShapeCorner.Large
    },
    medium: {
        height: 80,
        width: 80,
        iconSize: 28,
        shape: ShapeCorner.LargeIncreased
    },
    large: {
        height: 96,
        width: 96,
        iconSize: 36,
        shape: ShapeCorner.ExtraLarge
    }
}