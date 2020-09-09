import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useLocation, Switch } from 'react-router-dom';
import '../public/index.css';
import { ReduxState } from './TS/Types';
import { DetailPanel, MainPanel, ProfilePanel, SearchPanel, ContentWithAPICall } from './Components';
import { setFirstOpen, setLoading } from './Redux/Actions';

const App: FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (!(location.pathname === '/')) {
            dispatch(setFirstOpen(false));
            dispatch(setLoading());
        }
    }, []);

    const firstOpen = useSelector((store: ReduxState) => store.firstOpen);

    return (
        <MainPanel firstOpen={firstOpen}>
            <Switch>
                <Route exact strict path={['/']}>
                    <SearchPanel />
                </Route>
                <Route strict path={['/Pokemon/:id']}>
                    <ContentWithAPICall>
                        <ProfilePanel />
                        <DetailPanel />
                    </ContentWithAPICall>
                </Route>
            </Switch>
        </MainPanel>
    );
};

export default App;
