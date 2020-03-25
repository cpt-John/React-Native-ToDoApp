import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, AsyncStorage, Text } from "react-native";
//components
import InputFld from "./Components/InputFld";
import ToDoTxt from "./Components/ToDoTxt";
import AddButton from "./Components/AddButton";

export default function App() {
  const [textVal, set_textVal] = useState(""); //Updates userinput into this hook
  const [toDo_lst, updt_lst] = useState([]); //Updates todo list to this hook
  const [loaded, set_loading] = useState(false); //Updated component loading state to this hook

  //Load Persistant Data only on app restart
  useEffect(() => {
    loadDat().then(list => {
      updt_lst(list);
      set_loading(true);
    });
  }, []);

  //fetches userinput from input field
  const currentVal = child => {
    set_textVal(child);
  };

  //updates (add element)list to hook , saves to persistant data & clears input field
  const appendVal = () => {
    if (textVal != "") {
      updt_lst(current_lst => {
        const len = current_lst.length;
        const temp_id = len > 0 ? current_lst[len - 1].id + 1 : 0;
        const temp_lst = [...current_lst, { id: temp_id, txt: textVal }];
        saveDat(temp_lst);
        return temp_lst;
      });
      set_textVal("");
    }
  };

  //updates (delete element)list to hook , saves to persistant data
  const delete_item = (id, child) => {
    updt_lst(current_lst => {
      const temp_lst = current_lst.filter(e => {
        return e.id != id;
      });
      saveDat(temp_lst);
      return temp_lst;
    });
  };

  //Returing DOM after loading persistant data
  if (loaded) {
    return (
      <View style={style.root}>
        <View style={style.ip_btn_vw}>
          <InputFld txt={textVal} updateParent={currentVal}></InputFld>
          <AddButton add={appendVal}></AddButton>
        </View>
        <ScrollView>
          <View style={style.scrl_vw}>
            {toDo_lst.map(e => (
              <ToDoTxt
                key={e.id}
                id={e.id}
                txt={e.txt}
                delete={delete_item}
              ></ToDoTxt>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
  //Returing DOM before loading persistant data
  else {
    return (
      <View style={style.load_vw}>
        <Text style={style.load_txt}>Loading...</Text>
      </View>
    );
  }
}

//Load persistant data
const loadDat = async () => {
  console.log("loading...");
  try {
    const value = JSON.parse(await AsyncStorage.getItem("list"));
    if (value !== null) {
      return value;
    } else {
      console.log("Empty");
    }
  } catch (error) {
    console.log("cannot retrieve");
  }
  return [];
};

//Save persistant data
const saveDat = async value => {
  try {
    if (value !== null) {
      await AsyncStorage.setItem("list", JSON.stringify(value));
    }
  } catch (error) {
    console.log("cannot save", error);
  }
};

//style sheet
const style = StyleSheet.create({
  root: { paddingTop: 20, paddingHorizontal: 20 },
  ip_btn_vw: {
    flexDirection: "row",
    alignContent: "space-between"
  },
  scrl_vw: {
    paddingLeft: 40,
    paddingRight: 40
  },
  load_vw: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  load_txt: {
    color: "blue",
    fontFamily: "monospace",
    fontStyle: "italic",
    fontSize: 30
  }
});
