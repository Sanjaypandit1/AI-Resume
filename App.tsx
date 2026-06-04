import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Platform} from 'react-native';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ResumeScreen from './src/screens/ResumeScreen';
import TemplateScreen from './src/screens/TemplateScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            headerShown: false,
            
            tabBarIcon: ({focused, color, size}) => {
              let iconName = 'help-circle';

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Resume') {
                iconName = focused
                  ? 'file-document'
                  : 'file-document-outline';
              } else if (route.name === 'Templates') {
                iconName = focused
                  ? 'view-dashboard'
                  : 'view-dashboard-outline';
              } else if (route.name === 'Login') {
                iconName = focused ? 'account' : 'account-outline';
              }

              return (
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },

            tabBarActiveTintColor: '#2563EB',
            tabBarInactiveTintColor: 'gray',

            tabBarStyle: {
              height: 70,
              paddingBottom: Platform.OS === 'ios' ? 10 : 5,
              paddingTop: 10,
              borderTopWidth: 1,
              borderTopColor: '#e5e5e5',
              elevation: 10,
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
              marginBottom: Platform.OS === 'ios' ? 0 : 5,
            },
            
            // REMOVE the tabBarButton override - this was causing the issue
            // tabBarButton: (props) => { ... } // DELETE THIS SECTION
            
          })}>
          
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
            }}
          />

          <Tab.Screen 
            name="Templates" 
            component={TemplateScreen}
            options={{
              tabBarLabel: 'Templates',
            }}
          />

          <Tab.Screen 
            name="Resume" 
            component={ResumeScreen}
            options={{
              tabBarLabel: 'Resume',
            }}
          />


          <Tab.Screen 
            name="Login" 
            component={LoginScreen}
            options={{
              tabBarLabel: 'Login',
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;