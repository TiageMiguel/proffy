import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';

import GiveClasses from '../pages/GiveClasses';
import Landing from '../pages/Landing';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Landing'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Screen name='Landing' component={Landing} />
        <Screen name='GiveClasses' component={GiveClasses} />
        <Screen name='Study' component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
