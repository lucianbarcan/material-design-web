import { Color } from "../../styling/Color";
import { ElevationLevel } from "../../styling/Elevation";
import { Font, FontWeight } from "../../styling/Font";
import { ShapeCorner } from "../../styling/Shape";

export type BUTTON_SIZE = 'extra_small' | 'small' | 'medium' | 'large' | 'extra_large';
export type BUTTON_SHAPE = 'round' | 'square';
export type BUTTON_COLOR = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'standard';

export type BUTTON_STATE = 'enabled' | 'disabled' | 'hovered'; // | 'focused' | 'pressed';

type ButtonColorConfig = {
    container?: Color,
    containerOpacity?: number,
    stateLayer?: Color,
    stateLayerOpacity?: number,
    shadow: Color,
    elevation?: ElevationLevel,
    labelColor: Color,
    labelOpacity?: number,
    iconColor: Color,
    iconOpacity?: number,
    outline?: Color
}

export const BUTTON_COLOR_CONFIG: { [K in BUTTON_COLOR]: { [T in BUTTON_STATE]: ButtonColorConfig } } = {
    elevated: {
        enabled: {
            container: Color.SurfaceContainerLow,
            shadow: Color.Shadow,
            elevation: ElevationLevel.Level1,
            labelColor: Color.Primary,
            iconColor: Color.Primary
        },
        disabled: {
            container: Color.OnSurface,
            containerOpacity: 0.1,
            elevation: ElevationLevel.Level0,
            shadow: Color.Shadow,
            labelColor: Color.OnSurface,
            labelOpacity: 0.38,
            iconColor: Color.OnSurface,
            iconOpacity: 0.38
        },
        hovered: {
            container: Color.SurfaceContainerLow,
            stateLayer: Color.Primary,
            stateLayerOpacity: 0.08,
            elevation: ElevationLevel.Level2,
            shadow: Color.Shadow,
            labelColor: Color.Primary,
            iconColor: Color.Primary
        }
    },
    filled: {
        enabled: {
            container: Color.Primary,
            shadow: Color.Shadow,
            elevation: ElevationLevel.Level0,
            labelColor: Color.OnPrimary,
            iconColor: Color.OnPrimary
        },
        disabled: {
            container: Color.OnSurface,
            containerOpacity: 0.1,
            elevation: ElevationLevel.Level0,
            shadow: Color.Shadow,
            labelColor: Color.OnSurface,
            labelOpacity: 0.38,
            iconColor: Color.OnSurface,
            iconOpacity: 0.38
        },
        hovered: {
            container: Color.Primary,
            stateLayer: Color.OnPrimary,
            stateLayerOpacity: 0.08,
            elevation: ElevationLevel.Level1,
            shadow: Color.Shadow,
            labelColor: Color.OnPrimary,
            iconColor: Color.OnPrimary
        }
    },
    tonal: {
        enabled: {
            container: Color.SecondaryContainer,
            shadow: Color.Shadow,
            elevation: ElevationLevel.Level0,
            labelColor: Color.OnSecondaryContainer,
            iconColor: Color.OnSecondaryContainer
        },
        disabled: {
            container: Color.OnSurface,
            containerOpacity: 0.1,
            elevation: ElevationLevel.Level0,
            shadow: Color.Shadow,
            labelColor: Color.OnSurface,
            labelOpacity: 0.38,
            iconColor: Color.OnSurface,
            iconOpacity: 0.38
        },
        hovered: {
            container: Color.SecondaryContainer,
            stateLayer: Color.OnSecondaryContainer,
            stateLayerOpacity: 0.08,
            elevation: ElevationLevel.Level1,
            labelColor: Color.OnSecondaryContainer,
            iconColor: Color.OnSecondaryContainer,
            shadow: Color.Shadow,
        }
    },
    outlined: {
        enabled: {
            outline: Color.OutlineVariant,
            labelColor: Color.OnSurfaceVariant,
            iconColor: Color.OnSurfaceVariant,
            shadow: Color.Shadow,
        },
        disabled: {
            container: Color.OnSurface,
            containerOpacity: 0.1,
            labelColor: Color.OnSurface,
            labelOpacity: 0.38,
            iconColor: Color.OnSurface,
            iconOpacity: 0.38,
            shadow: Color.Shadow,
        },
        hovered: {
            container: Color.OutlineVariant,
            stateLayer: Color.OnSurfaceVariant,
            stateLayerOpacity: 0.08,
            outline: Color.OutlineVariant,
            labelColor: Color.OnSurfaceVariant,
            iconColor: Color.OnSurfaceVariant,
            shadow: Color.Shadow,
        }
    },
    standard: {
        enabled: {
            labelColor: Color.Primary,
            iconColor: Color.Primary,
            shadow: Color.Shadow,
        },
        disabled: {
            container: Color.OnSurface,
            containerOpacity: 0.1,
            labelColor: Color.OnSurface,
            labelOpacity: 0.38,
            iconColor: Color.OnSurface,
            iconOpacity: 0.38,
            shadow: Color.Shadow,
        },
        hovered: {
            stateLayer: Color.Primary,
            stateLayerOpacity: 0.08,
            labelColor: Color.Primary,
            iconColor: Color.Primary,
            shadow: Color.Shadow,
        }
    },
}

export const BUTTON_MEASUREMENTS: { [K in BUTTON_SIZE]: {
    height: number,
    padding: number,
    separator: number,
    roundBorderRadius: ShapeCorner,
    squareBorderRadius: ShapeCorner,
    iconSize: number,
    font: Font,
    fontWeight: FontWeight,
    fontSize: number,
    lineHeight: number,
    fontTracking: number
} } = {
    extra_small: {
        height: 32,
        padding: 12,
        separator: 4,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.Medium,
        iconSize: 20,
        font: Font.Plain,
        fontWeight: FontWeight.Medium,
        fontSize: 14,
        lineHeight: 20,
        fontTracking: 0.1,
        // leading space
        // trailing space
        // spring animation damping
        // spring animation stiffness
    },
    small: {
        height: 40,
        padding: 16,
        separator: 8,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.Medium,
        iconSize: 20,
        font: Font.Plain,
        fontWeight: FontWeight.Medium,
        fontSize: 14,
        lineHeight: 20,
        fontTracking: 0.1,
    },
    medium: {
        height: 56,
        padding: 24,
        separator: 8,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.Large,
        iconSize: 24,
        font: Font.Plain,
        fontWeight: FontWeight.Medium,
        fontSize: 16,
        lineHeight: 24,
        fontTracking: 0.15,
    },
    large: {
        height: 96,
        padding: 48,
        separator: 12,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.ExtraLarge,
        iconSize: 32,
        font: Font.Brand,
        fontWeight: FontWeight.Regular,
        fontSize: 24,
        lineHeight: 32,
        fontTracking: 0,
    },
    extra_large: {
        height: 136,
        padding: 64,
        separator: 16,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.ExtraLarge,
        iconSize: 40,
        font: Font.Brand,
        fontWeight: FontWeight.Regular,
        fontSize: 32,
        lineHeight: 40,
        fontTracking: 0,
    },
};