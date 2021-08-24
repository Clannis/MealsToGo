import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
