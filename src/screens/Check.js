import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";

export default function Check() {
  const [checked, setChecked] = useState(false);
  const [challan, setChallan] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.check}
        checked={checked}
        title="Invoice"
        onPress={() => setChecked(!checked)}
      />
      <CheckBox
        style={styles.challan}
        checked={challan}
        title="Delivery Challan"
        onPress={() => setChallan(!challan)}
      />
      <View style={styles.fifference}>
        <Text>what's the difference</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  check: {
    height: "60%",
    color: "#f54281",
  },
  challan: {
    height: "60%",
    color: "#f54281",
  },
});
