/*
 */

import React from "react";
import Activity1 from "./exercises/Activity1";
import Activity2 from "./exercises/Activity2";
import Activity3 from "./exercises/Activity3";
import Activity4 from "./exercises/Activity4";
import Activity5 from "./exercises/Activity5";
import Activity6 from "./exercises/Activity6";
import ProblemStatement from "./PSL07";

import { View, StyleSheet } from "react-native";

const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>
      {/*<Activity1 />*/}
      {/*<Activity2 />*/}
      {/*<Activity3 />*/}
      {/*<Activity4 />*/}
      {/*<Activity5 />*/}
      {/*<Activity6 />*/}
      <ProblemStatement />
    </View>
  );
};

export default App;
