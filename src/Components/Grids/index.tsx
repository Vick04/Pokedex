import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { Text } from '../index';
import { paddings, mediaQueryResolutions } from '../VariablesAndConfigs';

const OneXOneGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    & > * {
        padding: ${paddings.mobileSize};
        @media (${mediaQueryResolutions.tabletSize}) {
            padding: ${paddings.tabletSize};
        }
        @media (${mediaQueryResolutions.desktopSize}) {
            padding: ${paddings.desktopSize};
        }
        box-sizing: border-box;
    }
`;

export const OneXOneGrid: FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
    return (
        <OneXOneGridStyled>
            {title && (
                <>
                    <Text fontSize="textVerySmall" fontWeight="bold">
                        {title}
                    </Text>
                    <br />
                </>
            )}
            {children}
        </OneXOneGridStyled>
    );
};

const LabelDataGridStyled = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-auto-rows: max-content;
    & > *:not(img) {
        padding: ${paddings.mobileSize};
        @media (${mediaQueryResolutions.tabletSize}) {
            padding: ${paddings.tabletSize};
        }
        @media (${mediaQueryResolutions.desktopSize}) {
            padding: ${paddings.desktopSize};
        }
        box-sizing: border-box;
    }
`;

export const LabelDataGrid: FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
    return (
        <article>
            {title && (
                <>
                    <Text fontSize="textVerySmall" fontWeight="bold">
                        {title}
                    </Text>
                </>
            )}
            <LabelDataGridStyled>{children}</LabelDataGridStyled>
        </article>
    );
};

const ThreeColumnsStyled = styled.div`
    display: grid;
    grid-template-columns: max-content max-content 1fr;
    grid-auto-rows: max-content;
    & > * {
        padding: ${paddings.mobileSize};
        @media (${mediaQueryResolutions.tabletSize}) {
            padding: ${paddings.tabletSize};
        }
        @media (${mediaQueryResolutions.desktopSize}) {
            padding: ${paddings.desktopSize};
        }
        box-sizing: border-box;
    }
`;

export const ThreeColumn: FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
    return (
        <article>
            {title && (
                <>
                    <Text fontSize="textVerySmall" fontWeight="bold">
                        {title}
                    </Text>
                    <span />
                    <span />
                </>
            )}
            <ThreeColumnsStyled>{children}</ThreeColumnsStyled>
        </article>
    );
};
