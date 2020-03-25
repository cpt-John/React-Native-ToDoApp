import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";

export default function DelBttn(props) {
  if (props.visible) {
    return (
      <TouchableWithoutFeedback onPress={props.delete}>
        <View style={style.bttn_s}>
          <View style={style.bttn}>
            <Text style={style.plus}>X</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return null;
  }
}

const val = 20;
const style = StyleSheet.create({
  bttn: {
    width: val,
    height: val,
    borderRadius: val / 2,
    backgroundColor: "#cf4a4a",
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
    fontSize: 10,
    color: "white",
    textAlignVertical: "center",
    lineHeight: val * 2
  }
});
