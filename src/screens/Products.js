import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Scanner from "./Scanner";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.products}>
        <Text style={styles.textProduct}>Products*</Text>
        <Text style={styles.textQty}>Products:2 | Qty:67</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.searchButton}>
          Search to Add
          <AntDesign
            name="right"
            size={20}
            color="#f54281"
            style={styles.searchIcon}
          />
        </Text>
        <Text
          style={styles.barButton}
          onPress={() => navigation.navigate("Scanner")}
        >
          Scan Barcode
          <AntDesign
            name="right"
            size={20}
            color="#f54281"
            style={styles.barIcon}
          />
        </Text>
      </View>
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: "22%",
    borderTopWidth: 0.5,
    borderTopColor: "#b7bfb2",
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textProduct: {
    padding: 10,
    top: "-1%",
    fontSize: 17,
    fontWeight: "bold",
  },
  textQty: {
    top: "1%",
    fontSize: 17,
    fontWeight: "bold",
    color: "#b7bfb2",
    right: "30%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "-1%",
  },
  searchButton: {
    fontSize: 20,
    color: "#f54281",
    borderWidth: 0.7,
    left: "20%",
    height: "130%",
    borderColor: "#b7bfb2",
    width: "40%",
    fontWeight: "bold",
  },
  barButton: {
    fontSize: 20,
    color: "#f54281",
    borderWidth: 0.7,
    borderColor: "#b7bfb2",
    width: "40%",
    right: "20%",
    height: "130%",
    fontWeight: "bold",
  },
});
