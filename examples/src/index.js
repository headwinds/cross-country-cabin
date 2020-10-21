import React from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import HelloView from "cross-country-cabin";

class Game extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <HelloView />
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
