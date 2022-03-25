import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bill from "./src/screens/Bill";
import Check from "./src/screens/Check";
import Invoice from "./src/screens/Invoice";
import Sale from "./src/screens/Sale";

export default function App() {
  return (
    <View style={styles.container}>
      <Sale />
      <Check />
      <Bill />
      <Invoice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
