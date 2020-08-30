import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import '../public/index.css';
import { ReduxState } from './TS/Types';
import { DetailPanel, MainPanel, ProfilePanel, SearchPanel, ContentWithLoading } from './Components';

const App: FC = () => {
    const firstOpen = useSelector((store: ReduxState) => store.firstOpen);

    return (
        <MainPanel firstOpen={firstOpen}>
            {firstOpen ? (
                <SearchPanel />
            ) : (
                <>
                    <ProfilePanel />
                    <ContentWithLoading>
                        <DetailPanel />
                    </ContentWithLoading>
                </>
            )}
        </MainPanel>
    );
};

export default App;
