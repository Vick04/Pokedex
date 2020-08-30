import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import ProviderMock from '../__Mocks__/ProviderMock';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<App>', () => {
    const store = mockStore({
        firstOpen: true,
    });
    test('Render', () => {
        const damageBox = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );
        expect(damageBox.length).toEqual(1);
    });
});
