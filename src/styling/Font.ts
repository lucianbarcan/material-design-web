export type Font =
    | '--md-ref-typeface-brand'
    | '--md-ref-typeface-plain';

export const Font = {
    Brand: '--md-ref-typeface-brand' as Font,
    Plain: '--md-ref-typeface-plain' as Font,
};

export type FontWeight =
    | '--md-ref-typeface-weight-regular'
    | '--md-ref-typeface-weight-medium'

export const FontWeight = {
    Regular: '--md-ref-typeface-weight-regular' as FontWeight,
    Medium: '--md-ref-typeface-weight-medium' as FontWeight,
}

export function loadFontTokens() {
    document.documentElement.style.setProperty('--md-ref-typface-brand', 'Roboto');
    document.documentElement.style.setProperty('--md-ref-typeface-plain', 'Roboto');

    document.documentElement.style.setProperty('--md-ref-typeface-weight-regular', '400');
    document.documentElement.style.setProperty('--md-ref-typeface-weight-medium', '500');
}