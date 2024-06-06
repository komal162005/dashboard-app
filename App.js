import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Projects from "./screens/Projects";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Dashboard";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Dashboard",
            title: "Dashboard",
            drawerIcon: () => {
              <AntDesign name="home" size={24} color="black" />;
            },
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Projects"
          options={{
            drawerLabel: "Projects",
            title: "Projects",
            drawerIcon: () => {
              <FontAwesome name="users" size={24} color="808080" />;
            },
          }}
          component={Projects}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
