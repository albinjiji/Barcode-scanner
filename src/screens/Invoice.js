import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Invoice() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInvoice}>Invoice has </Text>
      <Text>{"  "}</Text>
      <Text style={styles.textPres}>Prescription</Text>
      <Text>{"  "} </Text>
      <Text style={styles.textDrugs}>Drugs</Text>
      <Text style={styles.textUpload}>Upload Rx</Text>
      <AntDesign
        name="right"
        size={20}
        color="#f54281"
        style={styles.headerIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: "25%",
    flexDirection: "row",
  },
  textInvoice: {
    fontSize: 17,
    fontWeight: "bold",
    left: "20%",
  },
  textPres: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFA500",
  },
  textDrugs: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textUpload: {
    fontSize: 17,
    fontWeight: "bold",
    left: "230%",
    color: "#f54281",
  },
  headerIcon: {
    right: "-250%",
    top: "0.8%",
  },
});
