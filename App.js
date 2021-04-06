import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./src/Infastructure/theme/colors";
import { Main } from "./src/Screens/main/main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.themeColor} />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.themeColor,
  },
});
