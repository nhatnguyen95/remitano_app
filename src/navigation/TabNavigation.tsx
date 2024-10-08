import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListBookedScreen from 'screens/ListBookedScreen';
import ListFavoriteScreen from 'screens/ListFavoriteScreen';
import ListMovieScreen from 'screens/ListMovieScreen';
import {TEST_ID} from 'configs/Constants';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC<any> = () => {
  const _renderIcon = (icName: string) => <Icon name={icName} size={24} />;

  return (
    <Tab.Navigator initialRouteName="activity">
      <Tab.Screen
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: () => _renderIcon('wrench-outline'),
          tabBarTestID: TEST_ID['tab-movies'],
        }}
        name="Movies"
        component={ListMovieScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => _renderIcon('bell-ring-outline'),
          tabBarTestID: TEST_ID['tab-favorites'],
        }}
        name="Favorites"
        component={ListFavoriteScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: () => _renderIcon('cog-outline'),
          tabBarTestID: TEST_ID['tab-booked'],
        }}
        name="Booked"
        component={ListBookedScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
