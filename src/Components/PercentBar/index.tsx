import React, { FC } from 'react';
import { Text } from '../Text';
import { PercentBarInterface, CommonTextInterface } from '../../TS/Interfaces';
import { calcPercent } from '../../Functions';
import { Bar } from './Parts/Bar';
import { BarOutline } from './Parts/BarOutline';
import { Content } from './Parts/Content';

export const PercentBar: FC<CommonTextInterface & PercentBarInterface & { valueSideWidth?: string }> = ({
    color,
    fontSize,
    fontWeight,
    barColor,
    barHeight,
    max,
    rounded,
    showPercent,
    showValue,
    valueSideWidth,
    value,
}) => {
    const renderValue = showPercent ? `${calcPercent(value, max)}%` : value;
    return (
        <Content showValue={showValue} valueSideWidth={valueSideWidth}>
            {showValue == 'left' && (
                <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
                    {renderValue}
                </Text>
            )}
            <BarOutline barColor={barColor} barHeight={barHeight} max={max} rounded={rounded} value={value}>
                <Bar barColor={barColor} barHeight={barHeight} max={max} rounded={rounded} value={value} />
            </BarOutline>
            {showValue == 'right' && (
                <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
                    {renderValue}
                </Text>
            )}
        </Content>
    );
};
