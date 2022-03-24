import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CheckBox } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Sale() {
  const [male, setMale] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={35}
          color="#c4483d"
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>Add Sale</Text>
        <Text style={styles.settingsText}>Settings</Text>
      </View>
      <View style={styles.check}>
        <CheckBox
          title="male"
          uncheckedIcon="circle-o"
          checkedIcon="dot-circle-o"
        />
        <CheckBox
          title="female"
          uncheckedIcon="circle-o"
          checkedIcon="dot-circle-o"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    borderBottomWidth: 0.6,
    borderBottomColor: "#b7bfb2",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    top: "3%",
    left: 22,
  },
  headerIcon: {
    top: "3%",
    left: 5,
  },
  settingsText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c4483d",
    textAlign: "left",
    left: "230%",
    top: "3%",
  },
  check: {
    width: "30%",
    flexWrap: "wrap",
  },
});
