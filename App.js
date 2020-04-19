import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/screens/Login';
import Register from './src/components/screens/Register';
import TermsAndConditions from './src/components/screens/TermsAndConditions';
import Dashboard from './src/components/screens/Dashboard';

const Stack = createStackNavigator();

<<<<<<< HEAD
const title = 'KROO';
=======
const navOptionHandler = () => ({
  // To show or hide the header in the app
  headerShown: true,
});
>>>>>>> 970ee2d433aa8ba15acace1d0a9f15d6cc067e5e

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{ title }} />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ title }}
        />
        <Stack.Screen
          name='TermsAndConditions'
          component={TermsAndConditions}
          options={{ title }}
        />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{ title, headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
