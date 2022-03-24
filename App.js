import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Check from "./src/screens/Check";
import Sale from "./src/screens/Sale";

export default function App() {
  return (
    <View style={styles.container}>
      <Sale />
      <Check />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
