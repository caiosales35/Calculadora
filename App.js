import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Display from "./src/components/Display";
import Button from "./src/components/Button";

export default function App() {
  const [dValu, setDValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Display value={dValu} />
      <View style={styles.buttons}>
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
