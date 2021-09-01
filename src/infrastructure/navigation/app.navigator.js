import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SettingsNavigator } from "./settings.navigator";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

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

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};
