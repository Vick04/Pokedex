export interface CommonTextInterface {
    bgColor?: string;
    color?: string;
    fontFamily?: string;
    fontSize: 'textVerySmall' | 'textSmall' | 'textMedium' | 'textLarge';
    fontWeight?: string;
    gridArea?: string;
    rounded?: boolean;
}

export interface PercentBarInterface {
    barColor?: string;
    barHeight?: string;
    gridArea?: string;
    max: number;
    rounded?: boolean;
    showPercent?: boolean;
    showValue?: 'left' | 'right';
    value: number;
}

export interface mediaGridConfig {
    gridAreasDesktop?: string;
    templateColumnsDesktop?: string;
    templateRowsDesktop?: string;
    gridAreasTablet?: string;
    templateColumnsTablet?: string;
    templateRowsTablet?: string;
    gridAreasMobile: string;
    templateColumnsMobile: string;
    templateRowsMobile: string;
}
