import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loved"
        options={{
          title: "My Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart-circle" : "heart-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="special"
        options={{
          title: "Special items",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "diamond" : "diamond-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
