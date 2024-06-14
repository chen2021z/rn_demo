import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  UIManager,
  Platform
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const customAnim = {
  customSpring: {
    duration: 400,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.6,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.6,
    },
  },
  customLinear: {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  },
};

const App = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [whichAni,setWhichAni] = useState(true);

  function largePress() {
    whichAni ? 
    LayoutAnimation.configureNext(customAnim.customSpring) :
    LayoutAnimation.configureNext(customAnim.customLinear);
    setWhichAni(!whichAni);
    setWidth(width + 20);
    setHeight(height + 20);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.content, { width, height }]} />
      <TouchableOpacity style={styles.btnContainer} onPress={largePress}>
        <Text style={styles.textStyle}>点击增大</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  content: {
    backgroundColor: "#FF0000",
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#EE7942",
    height: 38,
    width: 320,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default App;