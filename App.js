import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import tw from 'twrnc';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ReelsScreen from './src/screens/ReelsScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { store } from './src/store/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: tw`bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800`,
              headerShown: false
            }}
          >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather 
                    name="home" 
                    size={24} 
                    color={focused ? tw.color('black dark:white') : tw.color('gray-500')} 
                  />
                )
              }} 
            />
            <Tab.Screen 
              name="Search" 
              component={SearchScreen} 
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather 
                    name="search" 
                    size={24} 
                    color={focused ? tw.color('black dark:white') : tw.color('gray-500')} 
                  />
                )
              }} 
            />
            <Tab.Screen 
              name="Reels" 
              component={ReelsScreen} 
              options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons 
                    name="play-circle-outline" 
                    size={24} 
                    color={focused ? tw.color('black dark:white') : tw.color('gray-500')} 
                  />
                )
              }} 
            />
            <Tab.Screen 
              name="Activity" 
              component={ActivityScreen} 
              options={{
                tabBarIcon: ({ focused }) => (
                  <MaterialIcons 
                    name="favorite-outline" 
                    size={24} 
                    color={focused ? tw.color('black dark:white') : tw.color('gray-500')} 
                  />
                )
              }} 
            />
            <Tab.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={tw`border-2 ${focused ? 'border-black dark:border-white' : 'border-transparent'} rounded-full`}>
                    <Image 
                      source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                      style={tw`w-6 h-6 rounded-full`}
                    />
                  </View>
                )
              }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}