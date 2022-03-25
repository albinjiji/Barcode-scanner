import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import DatePicker from "react-native-datepicker";

export default function Check() {
  const [checked, setChecked] = useState(false);
  const [challan, setChallan] = useState(false);
  const [date, setDate] = useState("10-10-2021");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
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
      </View>
      <View style={styles.difference}>
        <Text style={styles.checkText}>what's the difference</Text>
      </View>
      <View style={styles.required}>
        <Text style={styles.invoice}>Invoice Date*</Text>
        <Text style={styles.doctor_name}>Doctor's Name</Text>
      </View>
      <View style={styles.inputPicker}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholderTextColor="#b9bec7"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-08-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              top: 4,
              position: "absolute",
              alignItems: "flex-start",
              marginLeft: 0,
              left: "0%",
            },
            dateInput: {
              borderColor: "#b9bec7",
              borderBottomWidth: 1,
              borderRadius: 10,
            },
            placeholderText: {
              fontSize: 17,
              color: "#b9bec7",
            },
            dateText: {
              fontSize: 18,
              left: "10%",
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

        <TextInput
          style={styles.doctorName}
          placeholder={"Dr."}
          placeholderTextColor="#b9bec7"
        />
      </View>
      <View>
        <Text style={styles.requiredText}>*Required</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  box: {
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
  difference: {
    position: "relative",
  },
  checkText: {
    color: "#f54281",
    fontSize: 16,
    top: "40%",
    fontWeight: "bold",
  },
  required: {
    position: "relative",
    top: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  invoice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctor_name: {
    fontSize: 18,
    fontWeight: "bold",
    right: "150%",
  },
  inputPicker: {
    position: "relative",
    flexDirection: "row",
    top: "-7%",
    justifyContent: "space-between",
  },
  datePickerStyle: {
    top: "20%",
  },
  doctorName: {
    width: "40%",
    top: "20%",
    left: "-15%",
    borderColor: "#b9bec7",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17,
    paddingLeft: 8,
  },
  requiredText: {
    top: "250%",
    color: "#b9bec7",
  },
});
