import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
//components
import DelBttn from "./DelBttn";

export default function ToDoTxt(props) {
  const [striked, update_striked] = useState(false); //line throught hook
  const line = () => {
    update_striked(!striked);
  };
  return (
    <View style={style.vw}>
      <DelBttn
        visible={striked} //delete button enable switch
        delete={props.delete.bind(this, props.id)} //binds component id
      ></DelBttn>
      <Text style={striked ? style.txt_s : style.txt} onPress={line}>
        .{props.txt}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  vw: { flexDirection: "row", alignItems: "center" },
  txt: {
    fontFamily: "monospace",
    paddingVertical: 15,
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "none",
    flexWrap: "wrap"
  },
  txt_s: {
    fontFamily: "monospace",
    fontStyle: "italic",
    paddingVertical: 15,
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "line-through",
    flexWrap: "wrap"
  }
});
