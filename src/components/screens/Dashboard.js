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

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Chat") {
            iconName = focused ? "message-text" : "message-text-outline";

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Messages") {
            iconName = focused ? "envelope" : "envelope-o";

            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === "Notification") {
            iconName = "handshake";

            return focused ? (
              <FontAwesome5 name={iconName} size={size} color={color} solid />
            ) : (
              <FontAwesome5 name={iconName} size={size} color={color} />
            );
          } else if (route.name === "History") {
            iconName = "clock";

            return focused ? (
              <FontAwesome5 name={iconName} size={size} color={color} solid />
            ) : (
              <FontAwesome5 name={iconName} size={size} color={color} />
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
