import React from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import { HelloView, StageView } from "./library";

class Game extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text>Components</Text>
        <HelloView />
        <StageView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: "bold" },
});

AppRegistry.registerComponent("Game", () => Game);
AppRegistry.runApplication("Game", {
  rootTag: document.getElementById("root"),
});
