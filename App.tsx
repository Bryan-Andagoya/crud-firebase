import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { TaskProvider } from "./src/context";
import { StackNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <TaskProvider>
        <StackNavigator />
      </TaskProvider>
    </NavigationContainer>
  );
}
