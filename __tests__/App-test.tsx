/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppComponent from '../src/app/presentation/screens/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<AppComponent />);
});
