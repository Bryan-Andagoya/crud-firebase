import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens";

export type StackNavigatorParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Tasks" }}
      />
    </Stack.Navigator>
  );
};
