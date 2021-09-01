import React, { useContext } from "react";

import { List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} ccolor="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} ccolor="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
