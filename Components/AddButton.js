import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";

export default function AddButton(props) {
  return (
    <TouchableWithoutFeedback onPress={props.add}>
      <View style={style.bttn_s}>
        <View style={style.bttn}>
          <Text style={style.plus}>+</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const val = 50;
const style = StyleSheet.create({
  bttn: {
    width: val,
    height: val,
    borderRadius: val / 2,
    backgroundColor: "#72d0ed",
    justifyContent: "center",
    alignItems: "center"
  },
  bttn_s: {
    width: val + 5,
    height: val + 5,
    borderRadius: val + 5 / 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3
  },
  plus: {
    fontFamily: "monospace",
    fontSize: 80,
    color: "white",
    textAlignVertical: "center",
    lineHeight: val * 2
  }
});
