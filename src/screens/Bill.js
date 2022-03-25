import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function Bill() {
  return (
    <View style={styles.container}>
      <View style={styles.bill}>
        <Text style={styles.billText}>Billing to*</Text>
        <Text style={styles.changeText}>Change</Text>
      </View>
      <View style={styles.person}>
        <Text style={styles.textPerson}>Kushal Kharbanda</Text>
        <Text style={styles.textPrice}>₹ 26525</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.number}>7000413345</Text>
        <Text style={styles.textStatus}>You'll receive</Text>
      </View>
      <View style={styles.items}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    top: "13%",
    borderTopWidth: 0.5,
    borderTopColor: "#b7bfb2",
    padding: 10,
  },
  bill: {
    top: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  billText: {
    fontSize: 18,
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  changeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f54281",
    right: "20%",
  },
  person: {
    top: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPerson: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: 28,
    fontWeight: "800",
    right: "20%",
    color: "red",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "6%",
  },
  number: {
    fontSize: 16,
    color: "gray",
  },
  textStatus: {
    fontSize: 16,
    color: "gray",
    right: "20%",
  },
  items: {
    top: "25%",
  },
  item1: {
    fontSize: 16,
    color: "gray",
  },
  item2: {
    fontSize: 16,
    color: "gray",
  },
  item3: {
    fontSize: 16,
    color: "gray",
  },
});
