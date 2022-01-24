import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import 'jest-enzyme';
import 'jest-styled-components/native';

Enzyme.configure({ adapter: new Adapter() });