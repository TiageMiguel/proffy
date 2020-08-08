import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Favourites from '../pages/Favourites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      initialRouteName='TeacherList'
      tabBarOptions={{
        style: {
          height: 64,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabStyle: {
          height: 64,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          height: 20,
          width: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name='TeacherList'
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='ios-easel'
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
      <Screen
        name='Favourites'
        component={Favourites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name='ios-heart'
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
