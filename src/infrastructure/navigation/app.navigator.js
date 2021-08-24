import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantNavigator } from "./restaurants.navigator";

const screenOptions = ({ route }) => {
  return {
    tabBarIcon: tabBarIcon(route),
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const tabBarIcon =
  (route) =>
  ({ size, color, focused }) => {
    const iconName = focused
      ? TAB_ICON_FOCUSED[route.name]
      : TAB_ICON_UNFOCUSED[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const TAB_ICON_FOCUSED = {
  Restaurants: "md-restaurant",
  Map: "ios-map",
  Settings: "settings",
};

const TAB_ICON_UNFOCUSED = {
  Restaurants: "md-restaurant-outline",
  Map: "ios-map-outline",
  Settings: "settings-outline",
};

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
