import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Drawer from 'expo-router/drawer';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='loved'
        options={{
          title: 'My Favorites',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'heart-circle' : 'heart-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
