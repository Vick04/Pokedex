import React, { FC, ReactNode } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../Redux/Reducers';

const store = createStore(reducer);

const ProviderMock: FC<{ children?: ReactNode }> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ProviderMock;
