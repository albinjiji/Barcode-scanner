import { StyleSheet, Text, View, ScrollView } from "react-native";
import Products from "./src/screens/Products";
import Sale from "./src/screens/Sale";
import Check from "./src/screens/Check";
import Bill from "./src/screens/Bill";
import Invoice from "./src/screens/Invoice";

const App = () => {
  return (
    <View>
      <Sale />
      <Check />
      <Bill />
      <Invoice />
      <Products />
    </View>
  );
};

export default App;
