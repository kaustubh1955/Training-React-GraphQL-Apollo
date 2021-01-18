// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Popup from './Popup.js';

describe('Popup', () => {
    it('should render correctly in given mode', () => {
        const component = shallow(<Popup />);
        expect(component).toMatchSnapshot();
    });
});