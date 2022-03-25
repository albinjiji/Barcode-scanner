import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function Bill() {
  const [item, setItem] = useState([
    { name: "Importace", code: "10/10" },
    { name: "Avg Order Value", code: "₹265" },
    { name: "Avg Revisit in", code: "26 days" },
  ]);
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
      <View style={styles.items}>
        <FlatGrid
          itemDimension={115}
          data={item}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={6}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    top: "13%",
    borderTopWidth: 0.5,
    borderTopColor: "#b7bfb2",
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
    left: "20%",
  },
  changeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f54281",
    right: "30%",
  },
  person: {
    top: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPerson: {
    fontSize: 22,
    fontWeight: "bold",
    left: "20%",
  },
  textPrice: {
    fontSize: 28,
    fontWeight: "800",
    right: "30%",
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
    left: "20%",
  },
  textStatus: {
    fontSize: 16,
    color: "gray",
    right: "30%",
  },
  items: {
    top: "25%",
  },
  gridView: {
    width: "100%",
    left: "0%",
    borderWidth: 1,
  },
  itemContainer: {
    justifyContent: "center",
    height: 60,
    borderColor: "gray",
    borderRightWidth: 1,
    borderRightColor: "gray",
    width: "110%",
  },
  itemName: {
    fontSize: 14,
    color: "gray",
    left: "10%",
  },
  itemCode: {
    fontSize: 20,
    fontWeight: "600",
    fontWeight: "bold",
    left: "10%",
  },
});
