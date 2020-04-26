import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/screens/Login';
import Register from './src/components/screens/Register';
import Dashboard from './src/components/screens/Dashboard';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

const title = 'KROO';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{ title }} />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{ title }}
          />
          <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{ title, headerLeft: null }}
          />
          <Stack.Screen
            name='ChatList'
            component={ChatList}
            options={{ title, headerLeft: null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
