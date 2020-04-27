import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../tab-screens/dashboard/Home';
import Chat from '../tab-screens/dashboard/Chat';
import Messages from '../tab-screens/dashboard/Messages';
import Notification from '../tab-screens/dashboard/Notification';
import History from '../tab-screens/dashboard/History';
import { Image } from 'react-native';
import { IMAGE } from '../../constants/Images';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

const Tab = createBottomTabNavigator();

const Dashboard = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOMECOLOR; //"home" : "home-outline";

            return (
              <Image source={iconName} style={{ width: 20, height: 20 }} />
            );
          } else if (route.name === 'Chat') {
            iconName = focused ? IMAGE.ICON_SPEECH : IMAGE.ICON_CHAT;

            return (
              <Image source={iconName} style={{ width: 20, height: 20 }} />
            );
          } else if (route.name === 'Messages') {
            iconName = focused ? IMAGE.ICON_EMAIL2 : IMAGE.ICON_Email1;

            return (
              <Image source={iconName} style={{ width: 20, height: 20 }} />
            );
          } else if (route.name === 'Notification') {
            iconName = 'handshake';

            return focused ? (
              <Image
                source={IMAGE.ICON_NOTIFICATION2}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={IMAGE.ICON_NOTIFICATION1}
                style={{ width: 20, height: 20 }}
              />
            );
          } else if (route.name === 'History') {
            iconName = 'clock';

            return focused ? (
              <Image
                source={IMAGE.ICON_TIMECOLOR}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={IMAGE.ICON_TIME}
                style={{ width: 20, height: 20 }}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#0066cc',
        activeTintColor: 'white',
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Chat' component={Chat} />
      <Tab.Screen name='Messages' component={Messages} />
      <Tab.Screen name='Notification' component={Notification} />
      <Tab.Screen name='History' component={History} />
    </Tab.Navigator>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Dashboard);
