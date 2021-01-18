// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Imglink from './Imglink.js';
import appstore from '../../containers/AppStoreBadge.png';

describe('Imglink', () => {
    it('should render correctly in given mode', () => {
        const component = shallow(<Imglink im={appstore} />);
        expect(component).toMatchSnapshot();
    });
});