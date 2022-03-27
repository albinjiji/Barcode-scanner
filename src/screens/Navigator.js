import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Bill from "./src/screens/Bill";
import Check from "./src/screens/Check";
import Invoice from "./src/screens/Invoice";
import Products from "./src/screens/Products";
import Sale from "./src/screens/Sale";
import Scanner from "./src/screens/Scanner";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
