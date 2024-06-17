import { useState } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

export default function App() {
  const [transXY] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: function () {
      console.log("shouldstart");
      return true;
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: transXY.x,
          dy: transXY.y,
        },
      ],
      { useNativeDriver: false }
    ),

    onPanResponderRelease: function () {
      Animated.spring(transXY, {
        duration:400,
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateX: transXY.x }, { translateY: transXY.y }],
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
