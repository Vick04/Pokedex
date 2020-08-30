import React, { FC } from 'react';
import { Name, ProfileImage, ProfilePanelStyled, Searcher, Description } from './SubComponents';
import { SearchPanel } from '../index';
import { ReduxState } from '../../TS/Types';
import { capitalize } from '../../Functions';
import { useSelector } from 'react-redux';

export const ProfilePanel: FC = () => {
    const profile = useSelector((store: ReduxState) => store.pokemon.profile);
    const searching = useSelector((store: ReduxState) => store.searching);

    return (
        <>
            {searching ? (
                <SearchPanel />
            ) : (
                <ProfilePanelStyled bgColor={profile.type}>
                    <Searcher />
                    <Name number={profile.number} name={capitalize(profile.name)} />
                    <Description desc={profile.description} />
                    <ProfileImage link={`https://pokeres.bastionbot.org/images/pokemon/${profile.number}.png`} />
                </ProfilePanelStyled>
            )}
        </>
    );
};
