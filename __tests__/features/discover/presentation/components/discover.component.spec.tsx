import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { FlatList } from 'react-native';
// eslint-disable-next-line no-restricted-imports
import * as ReactRedux from 'react-redux';


import { MockSelectors } from '../../../../../__mocks__/mock-selectors';
import { User } from '../../../../../src/core/model/user.model';
import { Card } from '../../../../../src/core/presentation/components/card/card.component';
import { getIsMatchesLoading, getSavedMatches } from '../../../../../src/features/discover/data/store/discover.selectors';
import { DiscoverScreen, DiscoverScreenProps } from '../../../../../src/features/discover/presentation/components/discover.component';
import { NoMatchesText } from '../../../../../src/features/discover/presentation/components/styled/discover.styled';


describe('Discover screen', () =>  {
    let wrapper: ShallowWrapper;
    let selectors: MockSelectors;
    let mockDispatch: jest.Mock;
    jest.mock('react-navigation-shared-element', () => {
        return () => ({
            createSharedElementStackNavigator: jest.fn(),
          });
    });

    const createTestProps = () => ({
        navigation: jest.fn(),
    } as unknown as DiscoverScreenProps);

    const testResults: User[] = [{
        username: 'alice21',
        id: 0,
        photo: {
            id: 1,
            link: 'https://i.pinimg.com/736x/37/20/b9/3720b959efd4051e2b6bfa443c1b6198.jpg',
        },
        name: 'Alice',
        dateOfBirth: 947898026419,
        gender: 'FEMALE',
        city: {
            id: 1,
            en: 'Minsk',
            ru: 'Минск',
            be: 'Мінск',
        },
        bio: '',
        passions: [],
    } as User];

    beforeEach(() => {
        selectors = new MockSelectors().mockSelector(getSavedMatches, testResults).mockSelector(getIsMatchesLoading, false);
        mockDispatch = jest.fn();
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockDispatch);
        const props = createTestProps();
        wrapper = shallow(<DiscoverScreen props={props}/>);
    });

    describe('Flatlist', () => {
        it('should give a user to card', () => {
            const card = wrapper.find(Card);
            card.props().user(testResults);
            expect(wrapper.find(FlatList).props().data).toBe(testResults);
        });
        it('should render NoMatchesText when no matches', () => {
            wrapper.find(FlatList).props().refreshing(false);
            expect(wrapper.exists(NoMatchesText)).toEqual(true);
        });
    });

});