import React from "react";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import NewsFeed from "./src/screens/NewsFeed";
import PostOneInfo from "./src/screens/PostOneInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewsFeed" component={NewsFeed} />
        <Stack.Screen name="PostOneInfo" component={PostOneInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
