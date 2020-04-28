import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../tab-screens/dashboard/Home";
import Chat from "../tab-screens/dashboard/Chat";
import Messages from "../tab-screens/dashboard/Messages";
import Notification from "../tab-screens/dashboard/Notification";
import History from "../tab-screens/dashboard/History";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { Image } from "react-native";
import { IMAGE } from "../../constants/Images";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? IMAGE.ICON_HOME : IMAGE.ICON_HOMECOLOR; //"home" : "home-outline";

            return (
              <Image source={iconName} style={{ width: 20, height: 20 }} />
            );
          } else if (route.name === "Chat") {
            iconName = focused ? IMAGE.ICON_SPEECH : IMAGE.ICON_CHAT; //"message-text" : "message-text-outline";

            return (
              <Image source={iconName} style={{ width: 20, height: 20 }} />
              // <MaterialCommunityIcons
              //   name={iconName}
              //   size={size}
              //   color={color}
              // />
            );
          } else if (route.name === "Messages") {
            iconName = focused ? IMAGE.ICON_EMAIL2 : IMAGE.ICON_Email1; //"envelope" : "envelope-o";

            return (
              <Image source={iconName} style={{ width: 20, height: 20 }} />
            ); //<FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === "Notification") {
            iconName = "handshake";

            return focused ? (
              <Image
                source={IMAGE.ICON_NOTIFICATION2}
                style={{ width: 20, height: 20 }}
              /> //<FontAwesome5 name={iconName} size={size} color={color} solid />
            ) : (
              <Image
                source={IMAGE.ICON_NOTIFICATION1}
                style={{ width: 20, height: 20 }}
              /> //<FontAwesome5 name={iconName} size={size} color={color} />
            );
          } else if (route.name === "History") {
            iconName = "clock";

            return focused ? (
              <Image
                source={IMAGE.ICON_TIMECOLOR}
                style={{ width: 20, height: 20 }}
              /> // <FontAwesome5 name={iconName} size={size} color={color} solid />
            ) : (
              <Image
                source={IMAGE.ICON_TIME}
                style={{ width: 20, height: 20 }}
              /> //<FontAwesome5 name={iconName} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: "#0066cc",
        activeTintColor: "white",
        // labelStyle: {
        //   display: 'none',
        // },
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

export default Dashboard;
