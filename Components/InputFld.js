import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function InputFld(props) {
  return (
    <TextInput
      placeholder={"ToDo..."}
      style={style.input_t}
      onChangeText={props.updateParent.bind(this)} //binds txt val
      value={props.txt}
    ></TextInput>
  );
}

const style = StyleSheet.create({
  input_t: {
    marginHorizontal: 10,
    paddingLeft: 20,
    borderColor: "#8a8a8a",
    borderWidth: 3,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#d4d4d4",
    height: 40,
    alignSelf: "center"
  }
});
